import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'

const Menubar: React.FC = () => {
  return (
    <header className='menubar'>
      <div className="menu-content">
        <div className="div-logo">
          <h1>Menubar</h1>
        </div>
        <nav>
          <Link
            className={window.location.pathname.includes('/other1') ? 'active' : ''}
            to='/other1'>Other1
          </Link>
          <Link
            className={window.location.pathname.includes('/other2') ? 'active' : ''}
            to='/other2'>Other2
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Menubar