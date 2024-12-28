// ***********************************************************************************************
// *                                                                                             *
// *                                 Fco Galan Software Ltd.                                     *
// *                                                                                             *
// *                                        saludar.js                                           *
// *                                                                                             *
// *                                                                                             *
// *                                 Copyright (c) 1980-2024                                     *
// *                                                                                             *
// ***********************************************************************************************
// 
// ***********************************************************************************************
// * Copyright (c) 1980-2024 FGalan Software and its licensors.                                  *
// * All rights reserved.                                                                        *
// * Without the owner's prior written consent,                                                  *
// * no decompiling or reverse-engineering shall be allowed.                                     *
// ***********************************************************************************************
//
//
// ***********************************************************************************************
// Aplicacion         : Bibliotecas para javascript
// Modulo             : saludar.js
//                      Ejemplo para importa una biblioteca desde el hub de npm
// Lenguaje           : node.js v12.16.3
// Empaquetador       : npm  10.9.0
// Historia de cambios:
// ***********************************************************************************************
// Version  Fecha            Programador  Descripcion del cambio
// -------  ---------------  -----------  --------------------------------------------------------
// 0.1.0.1  2024/12/27       FGalan       Version inicial
//                                        Este es un ejemplo simple de una biblioteca que se ubica
//                                        en el hub de npm
//                                        La biblioteca solo contiene una funcion simple para mostrar 
//                                        como importar la biblioteca desde la nube
//                                        Documentacion
// ***********************************************************************************************
//

// saludar.js en saludar-lib

function saludar(nombre) {
    return `Hola mundo, hola ${nombre}!`;
  }
  
  module.exports = saludar;
  
  