import React from 'react'

const MainLayout = ({title, children}) => (
  <div className="main-layout">
    <header className="topbar">
      <div className="container">
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