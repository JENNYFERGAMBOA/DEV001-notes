import Home from './components/Home';
import Logueo from './components/Logueo';
import React, { useState } from 'react'; 
import './App.css';

import firebaseApp from '../credenciales';
import {getAuth, onAuthStateChanged}  from 'firebase/auth';
const auth = getAuth(firebaseApp)


function App() {
  const [usuarioGlobal, setUsuarioGlobal] = useState(null);

  onAuthStateChanged(auth,(usuarioFirebase)=>{

    if(usuarioFirebase){
      //código en caso de que haya sesión iniciada
      setUsuarioGlobal(usuarioFirebase);
    } else{
      //código en casod e que no haya sesión iniciada
      setUsuarioGlobal(null);
    }
  });

  return <>{usuarioGlobal ? <Home correoUsuario={usuarioGlobal.email}/> : <Logueo/>}</>;
};

export default App;
