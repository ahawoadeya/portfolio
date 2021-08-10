import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'

// import page routes
import Home from './pages/Home'

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path='/' component={Home}></Route>
            </Switch>
        </Router>
    )
}

export default App
