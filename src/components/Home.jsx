import React, {useState,useEffect} from 'react';
import firebaseApp from '../../credenciales';
import { getAuth, signOut } from 'firebase/auth';
import  {getFirestore,doc, getDoc,setDoc} from 'firebase/firestore'
import AgregarNota from './AgregarNota';
import ListadoNotas from './ListadoNotas';
import { useEffect, useState } from 'react';

const auth = getAuth(firebaseApp);

const firestore  = getFirestore(firebaseApp);

const Home = ({correoUsuario}) => {
    const [arrayTareas,setArrayTareas]= useState(null)
    const fakeData = [
      { id: 1, descripcion: "nota 1", url:"https://picsum.photos/420"},
      { id: 2, descripcion: "nota 2", url:"https://picsum.photos/420"},
      { id: 3, descripcion: "nota 3", url:"https://picsum.photos/420"},
    ];

    async function buscarDocumentoOCrearDocumento(idDocumento){
      //crear una referencia al documento
      const docRef= doc(firestore,`usuarios/${idDocumento}`);

      //buscar docuemnto 

      const consulta = await getDoc(docRef);
      //revisar si  existe
      if (consulta.exists()){
        //si si  existe
        const infoDocu=consulta.data();
        return infoDocu.tareas;
      }
      else{
        //si no existe
       await setDoc(docRef, {reacciones:[...fakeData]});
       const consulta = await getDoc(docRef);
       const infoDocu=consulta.data();
       return infoDocu.tareas;
      }
      
    }

    useEffect(()=> {
      async  function fetchTareas(){
        const tareasObtenidas=await buscarDocumentoOCrearDocumento(
          correoUsuario
        );
        setArrayTareas(tareasObtenidas);
      }
      
      fetchTareas();
    },[]);

  return (
    <section> 
    <h4>Soy home,sesión iniciada</h4>
    <button onClick={()=>signOut(auth)}>
      Cerrar sesión
    </button>
    <hr/>
    <AgregarNota/>
    {arrayTareas ?<ListadoNotas arrayTareas={arrayTareas}/> : null}
    </section>
    );
};
export default Home;
