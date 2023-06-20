import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import { Container, Content } from './style';

const App = () => {
  return (
    <Container>
      <Navbar />
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </Container>
  );
};

export default App;
