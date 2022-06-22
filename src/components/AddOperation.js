import React from "react";
// const {createOperation} = require('../utils/logicHome');
import {createOperation} from '../utils/logicHome';

function AddOperation({setOperations}) {
    return (
        <form className="add_operation">
                    <div>
                        <label htmlFor="concept">Concepto:</label>
                        <input type="text" id="concept"/>
                    </div>

                    <div>
                        <label htmlFor="ammount">Monto:</label>
                        <input type="number" id="ammount"/>
                    </div>

                    <div>
                        <label htmlFor="date">fecha:</label>
                        <input type="date" id="date"/>
                    </div>

                    <div>
                        <label htmlFor="type">Tipo:</label>
                        <select id="type">
                            <option>Ingreso</option>
                            <option>Egreso</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="category">Categoria:</label>
                        <select id="category">
                            <option>Comida</option>
                            <option>Entretenimiento</option>
                        </select>
                    </div>

                    <button type="button" className="primary_button" onClick={() => createOperation({setOperations})}>Agregar</button>
                </form>
    )
}

export {AddOperation};