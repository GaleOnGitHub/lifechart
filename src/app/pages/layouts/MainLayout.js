import React from 'react'
import { Link } from 'react-router'
import NavButton from '../../chart/components/NavButton'

const MainLayout = ({title, children}) => (
  <div className="main-layout">
    <header className="topbar">
      <div className="container">
        <NavButton/>
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