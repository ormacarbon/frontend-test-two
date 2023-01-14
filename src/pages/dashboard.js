import React from 'react'
import SideBar from '../components/SideBar/sidebar';
import WeatherMain from '../components/WeatherMain/WeatherMain';
import { Container } from '../styles/dashboard';

const Dashboard = () => {
  return (
    <Container>
      <SideBar />
      <WeatherMain />
    </Container>
  )
}

export default Dashboard;
