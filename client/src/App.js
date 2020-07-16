import React from 'react';
import Landing from './pages/Landing';
import Form from './pages/Form';
import Note from './pages/Note';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (
    <Router>
      <Switch>
          {/* <Route path="/form">
            <Form />
          </Route> */}
          {/* <Route path="/temporary">
            <Temporary />
          </Route> */}
          <Route path="/note">
            <Note />
          </Route>
          <Route path="/signup">
            <Form isLogin={false}/>
          </Route>
          <Route path="/login">
            <Form isLogin={true}/>
          </Route>
          <Route path="/">
            <Landing />
          </Route>
      </Switch>
    </Router>
  )
    
}

export default App;
