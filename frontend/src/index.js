import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './modulos/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
//import Cadastro from './modulos/cadastrar';
//import Lista from './modulos/listar';
import TemplateMenu from './components/TemplateMenu';
import Logo from './components/Logo';
import Formulario from './components/Formulario';
import Relatorio from './components/Relatorio';
import QRCode from './components/QRCode';
import BuscaQRCode from './components/BuscaQRCode';

import { createBrowserHistory } from "history";

const history = createBrowserHistory();
// history={history}
ReactDOM.render(
    <Router>
    <Switch>
        <Route path="/" exact={true} key="1"><TemplateMenu  component={Logo}/></Route>
        <Route path="/cadastrar" key="2"><TemplateMenu component={Formulario}/></Route>
        <Route path="/listar" key="3"><TemplateMenu component={Relatorio}/></Route>
        <Route path="/qrcode" key="4"><TemplateMenu history={history} component={QRCode}/></Route>
        <Route path="/buscaqrcode" key="5"><TemplateMenu component={BuscaQRCode}/></Route>
    </Switch>
    </Router>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
