import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import PublicRoute from './components/PublicRoute'
import { UserContextProvider } from './contexts/UserContext'
import Usuarios from './pages/usuarios/Usuarios'
import Categorias from './pages/categoria/Categorias'
import Categoria from './pages/categoria/Categoria'
import Login from './pages/Login'
import Usuario from './pages/usuarios/Usuario'
import Productos from './pages/productos/Productos'
import Producto from './pages/productos/Producto'
function App() {

  return (<BrowserRouter>
    <UserContextProvider>
      <Routes>
        <Route path='/login' element={<PublicRoute><Login/></PublicRoute>} />
        <Route path='/' element={<PrivateRoute ><div>home</div></PrivateRoute>} />
        <Route path='/about' navigate element={<PrivateRoute><div>Acerca de</div></PrivateRoute>} />
        <Route path='usuarios' element={<PrivateRoute><Usuarios/></PrivateRoute>} ></Route>
          <Route path='usuarios/:id'   element={<PrivateRoute><Usuario/></PrivateRoute>} />
          <Route path='usuarios/crear' element={<PrivateRoute><Usuario/></PrivateRoute>} />
        <Route path='/categorias' element={<PrivateRoute><Categorias/></PrivateRoute>} />
          <Route path='/categorias/:id'   element={<PrivateRoute><Categoria/></PrivateRoute>} />
          <Route path='/categorias/crear' element={<PrivateRoute><Categoria/></PrivateRoute>} />
        <Route path='/productos' element={<PrivateRoute><Productos/></PrivateRoute>} />
          <Route path='/productos/:id' element={<PrivateRoute><Producto/></PrivateRoute>} />
          <Route path='/productos/crear' element={<PrivateRoute><Producto/></PrivateRoute>} />

        <Route path='*' element={<PrivateRoute><p>Pagina no encontrada</p></PrivateRoute>} />
      </Routes>
    </UserContextProvider>
  </BrowserRouter>)
}
export default App
