import React from 'react';
import './index.css'

const Content: React.FC = ({ children }) => {
  return (
    <div className="content">
      <div className="main-content-div">
        {children}
      </div>
    </div>
  )
}

export default Content;