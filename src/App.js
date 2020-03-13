import React from 'react';
import Mymap from './components/Map';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function App() {
    
          const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    
  return (
    <Router>
      
<div>
            <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
  <Link to="/"><BottomNavigationAction label="Accueil" value="recents" icon={<HomeIcon />} />Axxuei</Link>
  <Link to="/map"><BottomNavigationAction label='Map' value="favorites" icon={<LocationOnIcon />} />Map</Link>
      

      </BottomNavigation>

        <hr />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/map">
            <Mymap />
          </Route>
          <Route path="/">
            <Accueil />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Accueil() {
  return <h2>Accueil</h2>;
}
