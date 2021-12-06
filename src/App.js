import './App.css';

function App() {
  return (
    <div className="App">
      <h3 className="text-center text-black pt-5">Registro</h3>
      <div className="box-form mx-auto">
        <form>
          <div class="mb-3 container">
            <label for="TextInput" className="form-label">Nombre completo:</label>
            <input type="text" id="nombre" className="form-control"
              placeholder="Ingrese su nombre completo"
            />
          </div>

          <div class="mb-3 container">
            <label for="TextInput" className="form-label">Correo:</label>
            <input type="text" id="email" className="form-control"
              placeholder="Ingrese su correo"
            />
          </div>

          <div className="mb-3 container">
            <label for="TextInput" className="form-label">Contraseña:</label>
            <input type="password" id="password" className="form-control"
              placeholder="Ingrese su contraseña con al menos 6 digitos"
            />
          </div>

          <div className="container mx-auto">
            <button type="submit" className="btn btn-dark mr-3"
            >Registrar</button>
            {/* <Link to='/Login'> */}
              <button type="reset" className="btn btn-dark">Cancelar</button>
            {/* </Link> */}
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
