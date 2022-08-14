import logo from './logo.svg';
import './App.css';
import './ResponsiveAppBar.js'
import ResponsiveAppBar from './ResponsiveAppBar.js';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import WovenImageList from './WovenImageList';
import Create from './Create';
import HireMe from './HireMe';
import {createMuiTheme, ThemeProvider} from '@material-ui/core';
import Carousel from './Carousel';
import Skilles from './skills';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ResponsiveAppBar/>
        <Carousel/>
        <Create/>
       <WovenImageList/>
       <Skilles/>
       <HireMe/>
      </header>
    </div>
  );
}

export default App;
