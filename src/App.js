import React, { useState } from 'react';
import {
  AppBar,
  CssBaseline,
  Tabs,
  Tab,
  Container,
  Toolbar,
  Typography
} from '@mui/material';
import PatientAppointments from './PatientAppointments ';
import DoctorAppointments from './DoctorAppointments ';

const App = () => {
  const [tabValue, setTabValue] = useState(0);
  const [bookedAppointments, setBookedAppointments] = useState([]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');

  const tabs = [
    { label: 'Patient' },
    { label: 'Doctor' }
  ];

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleAppointmentBooked = (timeSlot, patientName) => {
    setSelectedTimeSlot(timeSlot);
    setBookedAppointments([...bookedAppointments, { time: timeSlot, patientName }]);
  };
  

  const handleCancelAppointment = (index) => {
    const updatedAppointments = [...bookedAppointments];
    updatedAppointments.splice(index, 1);
    setBookedAppointments(updatedAppointments);
  };

  return (
    <div style={{ backgroundColor: 'white', minHeight: '100vh' }}>
      <CssBaseline />
      <AppBar position="static" sx={{ backgroundColor: '#073763', color: 'white' }}>
        <Toolbar>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1,fontFamily:'Baskerville Old Face' }}>
  JLK <span style={{ fontFamily: 'Brush Script MT', color: 'white' }}>Hospital Patient Appointment Scheduler</span>
</Typography>

          <Tabs value={tabValue} onChange={handleTabChange}>
  {tabs.map((tab, index) => (
    <Tab
      key={index}
      label={tab.label}
      sx={{
        '&.Mui-selected': {
          color: 'white',
          fontSize: '15px'
        },
        color: tabValue === index ? 'white' : 'white' // Adjust color based on tabValue
      }}
    />
  ))}
</Tabs>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm" style={{ marginTop: '20px' }}>
        {tabValue === 0 && (
          <PatientAppointments
            onAppointmentBooked={handleAppointmentBooked}
          />
        )}
        {tabValue === 1 && (
          <DoctorAppointments
            bookedAppointments={bookedAppointments}
            onCancelAppointment={handleCancelAppointment}
            selectedTimeSlot={selectedTimeSlot}
          />
        )}
      </Container>
    </div>
  );
};

export default App;