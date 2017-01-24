import React from 'react'

const MainLayout = ({children}) => (
  <div>
    <header>
      <div><a href='/'>&#9724; lifechart</a></div>
    </header>
    <main>
      {children}
    </main>
    <footer>
    
    </footer>
  </div>
)

export default MainLayout