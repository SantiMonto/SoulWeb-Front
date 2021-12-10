import './App.css';
import './styles/tabla.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from "@apollo/client";
import {setContext} from '@apollo/client/link/context'
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

const httpLink = createHttpLink({
  uri: 'https://servidor-gql-soulweb.herokuapp.com/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = JSON.parse(localStorage.getItem('token'));
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

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
      <AuthContext.Provider value={{authToken,setAuthToken,setToken}}>
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
