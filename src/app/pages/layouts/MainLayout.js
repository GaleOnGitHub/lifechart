import React from 'react'
import { Link } from 'react-router'

const MainLayout = ({title, children, path = null}) => (
  <div className="main-layout">
    <header className="topbar">
      <div className="container">
        { path === '/settings' ? (
          <Link className='nav-button' to='/chart'>Back</Link>
        ):(
          <Link className='nav-button' to='/settings'>Settings</Link>
        )}
        <div className="topbar-title">
          <span className="logo">Lifechart</span>
          <h1>{title}</h1>
        </div>
      </div>
    </header>
    <main className="content">
      {children}
    </main>
    <footer className="bottombar"></footer>
  </div>
)

export default MainLayout