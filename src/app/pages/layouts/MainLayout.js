import React from 'react'

const MainLayout = ({title, children}) => (
  <div>
    <header>
      <div>
        <span>Lifechart</span>
        <h1>{title}</h1>
      </div>
    </header>
    <main>
      {children}
    </main>
    <footer></footer>
  </div>
)

export default MainLayout