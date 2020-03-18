import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'
import Header from './components/Header'
import Octocats from './components/Octocats'

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Octocats />
      </>
    )
  }
}
export default App
