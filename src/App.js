// import Navbar from "./components/Navbar";
import Hero from "./components/Hero.jsx";
import "./index.css";
import Leads from "./components/LeadFinderComp/Leads.jsx";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
  
// import Home component



function App() {
  return (
    <div>
      {/* <Navbar />
      <Hero /> */}
      <Router>

        {/* This route is for contactus component
          with exact path "/contactus", in 
          component props we passes the imported component*/}
          <Routes>
          <Route path="/" element={<Hero />} />


            
          {/* This route is for contactus component
          with exact path "/contactus", in 
          component props we passes the imported component*/}
          <Route path="/Leads" element={<Leads />} />

          </Routes>
            
          {/* If any route mismatches the upper 
          route endpoints then, redirect triggers 
          and redirects app to home component with to="/" */}
          {/* <Navigate to="/" /> */}

      </Router>
    </div>
  );
}

export default App;
