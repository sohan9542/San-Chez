import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Topbar from './layout/Topbar';
import Sidebar from './layout/Sidebar';
import Dashboard from './component/Dashboard';
import SimpleTrade from './pages/SimpleTrade';
import Pdeals from './pages/PDeal';
import Classic from './pages/Classic';



const App = () => {
  const [showsidebar, setShowsidebar] = useState(true)
  return (
    <div className=' min-h-screen bg-pr overflow-x-hidden'>
      <Router>
        {showsidebar && <Sidebar
          setShowsidebar={setShowsidebar} />}
        <div className={showsidebar ? 'ml-20 lg:ml-52 relative' : "ml-0"}>
          <Topbar
            showsidebar={showsidebar}
            setShowsidebar={setShowsidebar} />
        </div>
        <div className={showsidebar ? 'ml-0 lg:ml-52 mt-20 p-3' : "ml-0 mt-24"}>
          <Switch>
            <Route exact path="/">
              <SimpleTrade />
            </Route>
            <Route  path="/p2p-deal">
              <Pdeals />
            </Route>
           
            <Route  path="/classic-mode">
              <Classic />
            </Route>
           
       
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
