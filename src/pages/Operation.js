import React from "react";

/* LAYOUT */
import {LayoutApp} from '../layout/LayoutApp';

/* Components */
import {Operations} from '../components/Operations';

function Operation({operations, setOperations, rute}) {

    // const token = localStorage.getItem('token');

    // if(!token) {
    // window.location = `${window.location.origin}/gestor-de-gastos/login`
    // }

    return (
        <LayoutApp>
            <section className="main_home dinamic">
                <Operations operations={operations} setOperations={setOperations} rute={rute}/>
            </section>
        </LayoutApp>
    )
}

export {Operation};