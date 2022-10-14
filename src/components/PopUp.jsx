import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Modal.css";
import {GrLinkNext, GrLinkPrevious} from "react-icons/gr";


export default function PopUp({id}) {
    const [modal, setModal] = useState(false);
    const producto = useSelector((state) => state.task.productos);
    const productoSeleccionado = producto[0].productos.find((prod) => prod.id === id)
    const [photo, setPhoto] = useState(productoSeleccionado.imagen[0]);
    

    const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
  const carrousel = productoSeleccionado.imagen.map((img) => (
    img
))
    // button prev and next image
    const nextImage = () => {
        const index = carrousel.indexOf(photo);
        if (index === carrousel.length - 1) {
            setPhoto(carrousel[0]);
        } else {
            setPhoto(carrousel[index + 1]);
        }
    }
    const prevImage = () => {
        const index = carrousel.indexOf(photo);
        if (index === 0) {
            setPhoto(carrousel[carrousel.length - 1]);
        } else {
            setPhoto(carrousel[index - 1]);
        }
    }

    


  return (
    <>
      <button onClick={toggleModal} className="btn-modal text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Mas Info
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content rounded-full bg-red">
          <button
            className="text-4xl text-white cursor-pointer fixed top-0 right-3 "
            onClick={toggleModal}
                >
                x
            </button>
            <div className="flex flex-col items-center">
            {/* <img className="rounded-t-lg mt-10" src={productoSeleccionado.imagen[0]} width="750px" height="750px" alt="product"/> */}
            {
                // create carousel next y prev
                <div className="flex flex-row justify-center">
                    <button onClick={prevImage}>
                    <GrLinkPrevious className="fixed left-4 bg-red-400/70 rounded w-8 h-8"/>
                    </button>
                    <img src={photo} className="rounded-3xl mt-10" width="750px" height="750px" alt="product"/>
                    <button onClick={nextImage}>
                    <GrLinkNext className="fixed right-4 bg-red-400/70 rounded w-8 h-8"/>
                    </button>
                </div>
                


            }

            <h2 className="text-white font-semibold text-xl tracking-tight dark:text-white">{productoSeleccionado.nombre}</h2>
            <p className="text-gray-400 text-sm dark:text-gray-300 mt-2">Descripción:</p>
            <p className="text-gray-400 text-sm dark:text-gray-300 mt-2">{productoSeleccionado.descripcion}</p>
            <span className="text-3xl font-bold text-white dark:text-white">${productoSeleccionado.precio}</span>
            {
                // button contact wpp with product name}
                <div className="mt-2">
                <a href={`https://wa.me/5493525440262?text=Hola%20Malkiran!%20Quisiera%20saber%20m%C3%A1s%20sobre%20el%20producto%20llamado%20${productoSeleccionado.nombre}`} target="_blank" rel="noreferrer">
            <button type="button" className="inline-block p-3 pr-20 pl-20 rounded mb-2 text-white font-medium text-xs leading-tight uppercase shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out bg-[#25d366]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-7 h-7"><path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
          </button>
                </a>
        </div>

            }
            </div>
          </div>
        </div>
      )}
    </>
  );
}