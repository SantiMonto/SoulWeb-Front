import './App.css';
import './styles/tabla.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from "@apollo/client";
import IndexUsuarios from './pages/usuarios';
import EditarUsuario from './pages/usuarios/editar';


// const httpLink = createHttpLink({
//   uri: "https://servidor-gql-soulweb.herokuapp.com/graphql"
// })

const client = new ApolloClient({
  uri: 'https://servidor-gql-soulweb.herokuapp.com/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
        <BrowserRouter>
          <Routes>
            <Route path="/usuarios" element={<IndexUsuarios />} />
            <Route path="/usuarios/editar/:_id" element={<EditarUsuario />} />
          </Routes>
        </BrowserRouter>
    </ApolloProvider>

  );
}

export default App;