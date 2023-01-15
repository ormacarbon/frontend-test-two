import React, { useState } from 'react'
import Side from '../components/SideBar/sidebar';
import WeatherMain from '../components/WeatherMain/WeatherMain';
import { Container } from '../styles/dashboard';

const Dashboard = () => {

  return (
    <Container>
      <Side />
      <WeatherMain />
    </Container>
  )
}

export default Dashboard;
