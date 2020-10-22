import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 
import NavBar from './NavBar';
import Home from './Home';
import Latest from './Latest';
import Players from './Players';

export class App extends Component {
    render() {
        return (
          <BrowserRouter>
            <div>
                <NavBar/>
                <Switch>
                 <Route path="/" component={Home} exact/>
                 <Route path="/latest" component={Latest}/>
                 <Route path = "/favourite" component={Players}/>
               </Switch>
            </div> 
          </BrowserRouter>
        )
    }
}

export default App
