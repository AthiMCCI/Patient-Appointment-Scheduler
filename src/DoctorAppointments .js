import React from 'react';
import {
  Button,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';

const DoctorAppointments = ({ bookedAppointments, onCancelAppointment, selectedTimeSlot }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          DOCTOR
        </Typography>
        <Typography variant="h6" gutterBottom>
          Upcoming Patients Appointments
        </Typography>
        {selectedTimeSlot && (
          <Typography variant="subtitle1" gutterBottom>
            Selected Time: {selectedTimeSlot}
          </Typography>
        )}
       {bookedAppointments.length === 0 ? (
  <Typography variant="body1" color="textSecondary">
    No upcoming appointments.
  </Typography>
) : (
  <List>
    {bookedAppointments.map((appointment, index) => (
      <ListItem key={index}>
        <ListItemText
          primary={`Appointment Time: ${appointment.time}`}
          secondary={`Patient Name: ${appointment.patientName}`}
        />
        <Button
          variant="outlined"
          color="error"
          onClick={() => onCancelAppointment(index)}
        >
          Cancel
        </Button>
      </ListItem>
    ))}
  </List>
)}

      </CardContent>
    </Card>
  );
};

export default DoctorAppointments;
