# Patient Appointment Scheduler

This is a simple React application that allows users to book appointments and view upcoming appointments.

## Table of Contents

- [Getting Started](#getting-started)
- [Installation](#installation)
- [Running the Application](#running-the-application)

## Getting Started
### Clone the repository:
   - cd patient-appointments-app
   - npm install
   - npm start
These instructions will help you set up and run the application on your local machine.

### Installation and Setup Instructions
1. Installation: npm install
2. In the project directory, you can run: npm start
Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser. The page will reload if you make edits.


## About this Patient Appointment Scheduler (web)
### App.js File

This code is a React app for a hospital's appointment scheduler. It has two tabs, "Patient" and "Doctor." It manages state for the active tab, booked appointments, and selected time slots. Patients can book appointments, which updates the schedule. Doctors can view and cancel appointments. The app's UI is styled using Material-UI components.

### DoctorAppointments.js file
This component, DoctorAppointments, displays upcoming patient appointments for doctors. It receives data as props:

bookedAppointments: An array of booked appointments.
onCancelAppointment: A function to cancel appointments.
selectedTimeSlot: The currently selected time slot.
The component renders:
   - A card with appointment details.
   - Lists upcoming appointments with their time and patient's name.
   - If no appointments, it shows a message.
   - A "Cancel" button to remove appointments, which calls onCancelAppointment.
   - The UI is styled using Material-UI components for a clean look.

### PatientAppointments.js file
This component, `PatientAppointments`, allows patients to book appointments. It receives a function `onAppointmentBooked` as a prop to handle booking. 

It features:
- A card with appointment booking details.
- A dropdown to select available time slots.
- A "Book" button that prompts for patient details after selecting a time slot.
- Patient name and age fields and a "Confirm" button to finalize the booking.
- An alert for pending bookings and a list of upcoming appointments.
- It uses Material-UI components for styling and user interface elements.
  
