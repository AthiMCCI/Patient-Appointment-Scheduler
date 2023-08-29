import React, { useState } from 'react';
import {
  Button,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Alert,
} from '@mui/material';

const availableTimeSlots = [
  '9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM'
];

const PatientAppointments = ({ onAppointmentBooked }) => {
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const [patientName, setPatientName] = useState('');
  const [patientAge, setPatientAge] = useState('');
  const [bookingStatus, setBookingStatus] = useState('');
  const [upcomingAppointments, setUpcomingAppointments] = useState([]);
  const [showDetailsFields, setShowDetailsFields] = useState(false);

  const handleBookAppointment = () => {
    if (selectedTimeSlot) {
      setShowDetailsFields(true);
      setBookingStatus('pending');
    }
  };

  const handleConfirmAppointment = () => {
    if (patientName && patientAge) {
      onAppointmentBooked(selectedTimeSlot, patientName); // Pass patientName here
      setSelectedTimeSlot('');
      setPatientName('');
      setPatientAge('');
      setShowDetailsFields(false);
  
      // Update the upcoming appointments
      setUpcomingAppointments(prevAppointments => [...prevAppointments, selectedTimeSlot]);
    }
  };
  

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Patients Appointment Booking
        </Typography>
        <Typography variant="h6" gutterBottom>
          Available Slots
        </Typography>
        <FormControl fullWidth>
          <InputLabel style={{fontSize:"18px"}}>Select a time slot</InputLabel>
          <Select
            style={{ marginTop: '1%' }}
            value={selectedTimeSlot}
            onChange={(e) => setSelectedTimeSlot(e.target.value)}
          >
            <MenuItem value="">
              <em>Select a time</em>
            </MenuItem>
            {availableTimeSlots.map((time, index) => (
              <MenuItem key={index} value={time}>
                {time}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button
  style={{ marginTop: '1%', backgroundColor: '#073763', color: 'white' }}
  variant="contained"
  onClick={handleBookAppointment}
>
  Book
</Button>

        {showDetailsFields && (
          <>
            <TextField
              label="Patient Name"
              fullWidth
              style={{ marginTop: '1%' }}
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
            />
            <TextField
              label="Patient Age"
              type="number"
              fullWidth
              style={{ marginTop: '1%' }}
              value={patientAge}
              onChange={(e) => setPatientAge(e.target.value)}
            />
            <Button
              style={{ marginTop: '1%', backgroundColor: '#073763', color: 'white' }}
              variant="contained"
              color="primary"
              onClick={handleConfirmAppointment}
            >
              Confirm
            </Button>
          </>
        )}
        {bookingStatus === 'pending' && !showDetailsFields && (
          <Alert style={{ marginTop: '1%' }} severity="info">
            Your time slot has been booked. Please provide patient details.
          </Alert>
        )}

        {/* Upcoming Appointments */}
        {upcomingAppointments.length > 0 && (
          <div style={{ marginTop: '1%' }}>
            <Typography variant="h6" gutterBottom>
              Upcoming Appointments
            </Typography>
            <ul>
              {upcomingAppointments.map((appointment, index) => (
                <li key={index}>{appointment}</li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PatientAppointments;
