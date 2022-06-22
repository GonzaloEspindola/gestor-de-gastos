import React from "react";
import {Link} from 'react-router-dom';
const jose = require('jose');

function LayoutApp (props) {

    const token = localStorage.getItem('token');
    const tokenDecode = jose.decodeJwt(token)

    function closeSesion(){
        localStorage.removeItem('token');
        window.location.href = `${window.location.origin}/login`
    }

    if(token){
        return (
            <main className="main">
                <header className="header">
                    <p>{tokenDecode.sub}</p>
                    <Link to='/login'><button onClick={closeSesion} className="secondary_button">Cerrar sesion</button></Link>
                </header>

                <nav className="nav">
                    <ul>
                        <Link to='/home' className="link home"><i class='bx bxs-home' ></i> Inicio</Link>
                        <Link to='/operations' className="link table"><i class='bx bxs-wallet-alt' ></i> Operaciones</Link>
                        <Link to='/operations/incomes' className="link incomes"><i class='bx bxs-up-arrow-circle ' ></i> Ingresos</Link>
                        <Link to='/operations/expenses' className="link expenses"><i class='bx bxs-down-arrow-circle '></i> Egresos</Link>
                    </ul>
                </nav>
                {props.children}
            </main>
        )
    }else {
        <main className="main">
                <header className="header">
                    <Link to='/login'><button className="secondary_button">Iniciar sesion</button></Link>
                    <Link to='/register'><button className="secondary_button">Crear cuenta</button></Link>
                </header>

                <nav className="nav">
                    <ul>
                        <Link to='/home' className="link home"><i class='bx bxs-home' ></i> Inicio</Link>
                        <Link to='/operations' className="link table"><i class='bx bxs-wallet-alt' ></i> Operaciones</Link>
                        <Link to='/operations/incomes' className="link incomes"><i class='bx bxs-up-arrow-circle ' ></i> Ingresos</Link>
                        <Link to='/operations/expenses' className="link expenses"><i class='bx bxs-down-arrow-circle '></i> Egresos</Link>
                    </ul>
                </nav>
                {props.children}
            </main>
    }  
}

export {LayoutApp};