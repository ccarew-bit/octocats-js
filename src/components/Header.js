import React, { Component } from 'react'

class Header extends React.Component {
  render() {
    return (
      <>
        <header class="header">
          <nav>
            <ul>
              <li>
                <img src="images/githubLogo.png" />
              </li>
              <li class="octodex">Octodex</li>
              <li class="home">Home</li>
              <li class="faq">FAQ</li>
            </ul>
            <ul>
              <li class="twitter">Follow us on Twitter</li>
            </ul>
          </nav>
        </header>
      </>
    )
  }
}

export default Header
