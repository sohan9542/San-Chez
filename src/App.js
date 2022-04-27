import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Topbar from './layout/Topbar';


import SimpleTrade from './pages/SimpleTrade';


const App = () => {
  const [showsidebar, setShowsidebar] = useState(true)
  return (
    <div className=' min-h-screen bg-pr overflow-x-hidden'>
      <Router>
      
       
          <Topbar
            showsidebar={showsidebar}
            setShowsidebar={setShowsidebar} />
       
        <div >
          <Switch>
            <Route exact path="/">
              <SimpleTrade />
            </Route>

       
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
