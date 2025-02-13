import React from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { LoginPage, Signup , Home } from "./routes/routes";
import CreateProduct from './pages/createProduct';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<LoginPage />}/>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/createProduct' element={<CreateProduct/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
