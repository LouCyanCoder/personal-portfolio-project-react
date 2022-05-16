import React from 'react'

const Header = () => {
  return (
    <header id="header" className="header">
      <h1 className="header__title">Hello, I am <br />
      <a href="#about" className="header__link">Lucian Nguyen</a></h1>
      <h2 className="header__desc">I'm a Web Developer.</h2>
      <p>Would you like to see my work?</p>
    </header>
  )
}

export default Header