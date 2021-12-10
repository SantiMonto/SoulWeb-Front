import './App.css';
import './styles/tabla.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from "@apollo/client";
import IndexUsuarios from './pages/usuarios';
import EditarUsuario from './pages/usuarios/editar';
import AuthLayout from './layouts/AuthLayout';
import Registro from './pages/auth/Registro';
import Login from './pages/auth/Login';
import { AuthContext } from './context/authContext';
import { useState } from 'react';


// const httpLink = createHttpLink({
//   uri: "https://servidor-gql-soulweb.herokuapp.com/graphql"
// })

const client = new ApolloClient({
  uri: 'https://servidor-gql-soulweb.herokuapp.com/graphql',
  cache: new InMemoryCache()
})

function App() {
  const [authToken,setAuthToken] = useState('');

  const setToken = (token)=>{
    setAuthToken(token)
    if(token){
      localStorage.setItem('token',JSON.stringify(token))
    }
  }
  return (
    <ApolloProvider client={client}>
      <AuthContext.Provider value={{setToken}}>
        <BrowserRouter>
          <Routes>
            <Route path="/usuarios" element={<IndexUsuarios />} />
            <Route path="/usuarios/editar/:_id" element={<EditarUsuario />} />
            <Route path="/auth" element={<AuthLayout />}>
              <Route path="registro" element={<Registro />} />
              <Route path="login" element={<Login />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthContext.Provider>
    </ApolloProvider>

  );
}

export default App;
