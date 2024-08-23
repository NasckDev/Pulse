import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../pages/Home/home';
import Cadastro from '../pages/Signin/cadastro';
import Login from '../pages/Siginup/login';

const Private = ({Item}) => {
    const logado = false;
    return logado > 0 ? <Item/> : <Login/>;
};

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="/home" element={<Private Item={Home} />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="*" element={<Login />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;
