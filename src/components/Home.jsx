import React from 'react';
import firebaseApp from '../../credenciales';
import { getAuth, signOut } from 'firebase/auth';
const auth = getAuth(firebaseApp);

const Home = () => {
  return (
    <section> 
    <h4>Soy home,sesión iniciada</h4>
    <button onClick={()=>signOut(auth)}>
      Cerrar sesión
    </button>
    </section>
    );
};
export default Home;
