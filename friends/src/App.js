import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/Login";
import NewFriendForm from "./components/NewFriendForm";
import { FriendContext } from "./context/FriendContext";
import FriendList from "./components/FriendList";
import './App.css';

function App() {
  const [friend, setFriend] = useState([{
    id: "",
    name: "",
    age: "",
    email: ""
    }
  ])
  
  return (
    <Router>
      <FriendContext.Provider value={{ friend, setFriend}}>
        <div className="App">
          <header className="App-header">
            <ul>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/protected">Friend List</Link>
              </li>
            </ul>
      
        <ProtectedRoute exact path="/protected" component={NewFriendForm} />
        <ProtectedRoute exact path="/protected" component={FriendList} />
        <Route path="/login" component={Login} />
      
          </header>
        </div>
      </FriendContext.Provider>
    </Router>
  );
}

export default App;
