import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
 import Profile from './Auth0/User';
import 'bootstrap/dist/css/bootstrap.min.css';
 
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          
          <Routes>
            <Route 
              exact path="/"
              element={<BestBooks />}
            >

            <Route
            exact path="/Profile"
            element={<Profile />} 
            ></Route>

          </Route>
             
            {/* PLACEHOLDER: add a route with a path of '/about' that renders the `About` component */}
          </Routes>
          
          <Footer />
        </Router>
      </>
    )
  }
}



export default App;
