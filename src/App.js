import React from 'react';
import './App.css';
import './styles.css'



import Index from './pages/Index';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Error from './pages/Error';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import MyLivestocks from './pages/MyLivestocks';
import SellMyFarm from './pages/SellMyFarm';
import CameraView from './pages/CameraView';
import WasteManagement from './pages/WasteManagement';
import Agriculture from './pages/Agriculture';
import AccountsAndInventory from './pages/AccountsAndInventory';
import Modal from './pages/Modal';

function App() {
  return (
    <>
   
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/sign-up" component={Signup} />
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/rooms/:parameter" component={SingleRoom} />
        <Route path="/my-livestock" component={MyLivestocks} />
        <Route path="/camera-view" component={CameraView} />
        <Route exact path="/agriculture" component={Agriculture} />
        <Route exact path="/waste-management" component={WasteManagement} />
        <Route exact path="/accounts-inventory" component={AccountsAndInventory} />
        <Route exact path="/sell-farm" component={SellMyFarm} />
        <Route exact path = '/cameraview' component = {CameraView}/>
        <Route exact path ='/modal' component = {Modal}/>
        <Route component={Error} />
      </Switch>
    </>
  );
}



export default App;
