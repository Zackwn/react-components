import React from 'react';
import './index.css'

const Container: React.FC = ({ children }) => {
  return (
    <div className="container">
      {children}
    </div>
  )
}

export default Container;