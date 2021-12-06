import './App.css';

function App() {
  return (
    <div className="App">
      <div className="card container container-fluid">
        <h3 className="text-center text-black pt-5">Registro</h3>
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

          <div class="mb-3 container">
            <label for="TextInput" className="form-label">Rol:</label>
            <select class="form-select" aria-label="Default select example">
              <option selected>Seleccionar Rol</option>
              <option value="Lider">Lider</option>
              <option value="Estudiante">Estudiante</option>
              <option value="Administrador">Administrador</option>
            </select>
          </div>

          <div className="container mx-auto">
            <button type="submit" className="btn btn-dark "
            >Registrar</button>
            <button type="reset" className="btn btn-dark"
            >Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
