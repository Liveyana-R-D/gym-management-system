# GYM Management System

## Project Description

The **GYM Management System** is a web-based application designed to digitize and streamline the operational processes of a gym, such as payment handling, member management, and notifications. Built using **HTML, CSS, JavaScript**, and **Firebase**, this project aims to resolve the problems associated with manual receipt management and inefficient communication within gyms.

---

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript  
- **Backend & Database**: Firebase (Realtime Database, Authentication)  
- **Logging**: JavaScript console logging  
- **Hosting**: Firebase Hosting or any suitable web hosting platform

---

## Problem Statement

Many gyms still rely on paper receipts for payment tracking, which are often misplaced by members. Additionally, communicating updates about gym schedules manually can be inefficient. This project provides a digital platform to:
- Store all payment receipts securely online.
- Send notifications to members and owners.
- View, manage, and update gym member information efficiently.

---

## Features & Modules

### Admin Panel
- Admin Login
- Add Member
- Update/Delete Member
- Create Bills
- Assign Fee Packages
- Send Notifications (working/non-working days)
- Monthly Reports Export (PDF)
- Supplement Store Management
- Diet & Nutrition Details Management

### Member Panel
- Member Login
- View Bill Receipts
- View Payment Notifications

### User Panel (Read-only access)
- Login
- Search & View Gym Records

---

## Project Workflow

1. **User Authentication**: Admins and Members log in via Firebase Auth.
2. **Member Management**: Admin adds and edits member details.
3. **Billing System**: Admin generates bills and assigns packages.
4. **Notifications**: Firebase Cloud Messaging or database triggers to notify users.
5. **Receipts & Reports**: Members can download/view receipts, admin exports reports.
6. **Supplement & Diet Plans**: Viewable section for users, editable by admin.

---

## Code Quality & Project Evaluation

- Modular Code: Each module is structured for readability and reuse.

- Safe: Firebase authentication ensures secure access.

- Testable: Code components are tested using sample data and validations.

- Maintainable: Clean, commented, and structured codebase.

- Portable: Runs on any modern web browser.

---

## Test Cases

- Member Login:	Valid credentials:	Dashboard loads
- Add Member:	Fill all fields and submit:	Member appears in list
- Create Bill:	Assign fee to a member:	Bill shows in receipt table
- Notification:	Send a message as admin:	Member gets notified
- View Receipts:	Member views receipts:	All relevant receipts shown

---

## Future Enhancements

- Online Payment Gateway Integration

- AI-based Personalized Diet Plans

- Mobile App Version

---

## Logging

JavaScript logging is implemented throughout the system for tracking actions (add/delete/update) in the console. Firebase logs can be extended for cloud-based analytics.

---

## Deployment

The application can be hosted using:

- Firebase Hosting (Recommended)

- GitHub Pages

- Any Web Server with HTTPS

## Author

Liveyana R D

Web Developer | Internship project