import React from 'react'
import { Button } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Home } from './components/Home'
import { About } from './components/About'
import { Contact } from './components/Contact' 
import { Layout } from './components/Layout'
import { NavigationBar } from './components/NavigationBar'
import { CarousalView } from './components/Carousal'

function App() {
  return (
    <>
      <NavigationBar />
      <CarousalView />
      <Layout>  
        <Router>
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/about" component={About} />
            <Route exact={true} path="/contact" component={Contact} />
          </Switch>
        </Router>
      </Layout>  
    </>
  )
}

export default App
