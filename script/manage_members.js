import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore, collection, getDocs, doc, deleteDoc, updateDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { firebaseConfig } from './firebase.js';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get members and render table
async function fetchMembers() {
  const membersTable = document.getElementById("membersTable").getElementsByTagName('tbody')[0];
  membersTable.innerHTML = "";

  const snapshot = await getDocs(collection(db, "members"));
  snapshot.forEach((docSnap) => {
    const data = docSnap.data();
    const row = membersTable.insertRow();
    row.setAttribute('data-id', docSnap.id);

    row.innerHTML = `
      <td><input class="name" value="${data.name}" disabled></td>
      <td><input class="email" value="${data.email}" disabled></td>
      <td><input class="phone" value="${data.phone}" disabled></td>
      <td>
        <select class="package" disabled>
          <option value="Monthly" ${data.package === 'Monthly' ? 'selected' : ''}>Monthly</option>
          <option value="Quarterly" ${data.package === 'Quarterly' ? 'selected' : ''}>Quarterly</option>
          <option value="Yearly" ${data.package === 'Yearly' ? 'selected' : ''}>Yearly</option>
        </select>
      </td>
      <td>
        <button onclick="toggleEditMode(this)">Edit</button>
        <button class="delete-btn" onclick="deleteMember('${docSnap.id}')">Delete</button>
      </td>
    `;
  });
}

// Edit member details
window.editMember = async (id, field, value) => {
  const memberRef = doc(db, "members", id);
  try {
    await updateDoc(memberRef, {
      [field]: value
    });
    console.log(`Updated ${field} to ${value}`);
  } catch (error) {
    alert("Failed to update member: " + error.message);
  }
};

// Delete member
window.deleteMember = async (id) => {
  if (confirm("Are you sure you want to delete this member?")) {
    try {
      await deleteDoc(doc(db, "members", id));
      fetchMembers(); // Refresh the list
    } catch (error) {
      alert("Error deleting member: " + error.message);
    }
  }
};

// Initial call
fetchMembers();

window.toggleEditMode = async (btn) => {
  const row = btn.closest("tr");
  const inputs = row.querySelectorAll("input, select");
  const isEditing = btn.textContent === "Save";
  const id = row.getAttribute('data-id');

  if (isEditing) {
    // Save changes
    const updatedData = {
      name: row.querySelector(".name").value,
      email: row.querySelector(".email").value,
      phone: row.querySelector(".phone").value,
      package: row.querySelector(".package").value
    };

    try {
      const memberRef = doc(db, "members", id);
      await updateDoc(memberRef, updatedData);
      btn.textContent = "Edit";
      inputs.forEach(el => el.disabled = true);
      alert("Member updated successfully.");
    } catch (error) {
      alert("Failed to update member: " + error.message);
    }

  } else {
    // Enable edit mode
    inputs.forEach(el => el.disabled = false);
    btn.textContent = "Save";
  }
};
