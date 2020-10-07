import React from 'react'
import { Route } from 'react-router-dom'
import Container from '../../components/Container'
import Content from '../../components/Content'
import Footer from '../../components/Footer'
import Menubar from '../../components/Menubar'

const Main: React.FC = ({ children }) => {
  return (
    <Container>
      <Menubar />

      <Content>
        {children}
      </Content>

      <Footer />
    </Container>
  )
}

export default Main