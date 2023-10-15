import React from 'react';
import { Link } from 'react-router-dom';

function Hi(){
    return (
        <div className="bg-blue-900 min-h-screen text-white font-sans">
          <header className="bg-blue-800 py-4">
            <h1 className="text-2xl text-center">Recursos</h1>
          </header>
          <main className="container mx-auto p-4">
            <Link to="/" className="text-blue-300 hover:text-blue-100 mb-4 block">
              &lt; Volver a la página principal
            </Link>
            <div className="flex justify-end mb-4">
              <button className="px-4 py-2 bg-blue-800 text-white mr-2 hover:bg-blue-700">Ordenar por Fecha</button>
              <button className="px-4 py-2 bg-blue-800 text-white hover:bg-blue-700">Ordenar Alfabéticamente</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-blue-800 p-4 rounded-lg">
                <h2 className="text-xl font-semibold">Nombre del archivo</h2>
                <p className="text-gray-300">Fecha de creación: 2023-10-11</p>
                <button className="bg-blue-600 text-white py-1 px-3 rounded-full mt-2 hover:bg-blue-700">Descargar</button>
              </div>
            </div>
          </main>
        </div>
      );
}

export default Hi;