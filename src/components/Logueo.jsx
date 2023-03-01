import React from 'react';
import { useState } from "react";
import firebaseApp from '../../credenciales';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithRedirect, GoogleAuthProvider}  from "firebase/auth";
/* import { async } from '@firebase/util'; */
const auth = getAuth(firebaseApp);
const googleProvider= new GoogleAuthProvider();

const Logueo = () => {
    const [estaRegistrandose, setEstaRegistrandose] = useState(false);

    async function submitHandler(e){
        e.preventDefault();
        const correo= e.target.usuario.value;
        const contraseña= e.target.password.value;

        if(estaRegistrandose){
            //si se registra
        const usuario = await createUserWithEmailAndPassword(auth, correo, contraseña);
        }else {
            //si esta iniciando sesion
            signInWithEmailAndPassword(auth, correo, contraseña);
        }  
    }
  return (
        <div id="contenedor">          
            <div id="contenedorcentrado">
              <h1>{estaRegistrandose ? "Registrate" : "Inicia Sesión"}</h1>
                <div id="login">
                    <form id="loginform" onSubmit={submitHandler}>
                        <label for="usuario">Usuario</label>
                        <input id="usuario" type="text" name="usuario" placeholder="Usuario" required></input>
                        
                        <label for="password">Contraseña</label>
                        <input id="password" type="password" placeholder="Contraseña" name="password" required></input>
                        
                        <button type="submit" title="ingresar" name="Ingresar"> {estaRegistrandose ? "Registrate" : "Inicia Sesión"}</button>
                    </form> 

                    <button type="submit" title="ingresarConGmail" name="Ingresar" onClick={()=> signInWithRedirect(auth, googleProvider)}> IngresarConGmail </button>

                    <button type="submit" title="ingresarConGmail" name="Ingresar" onClick={()=>  setEstaRegistrandose(!estaRegistrandose)}>
                        {estaRegistrandose 
                        ? "Ya tienes cuenta?  Inicia sesión" 
                        : "No tienes cuenta? Registrate"} 
                    </button>

                </div>
            </div>
        </div>
  );
};

export default Logueo;

