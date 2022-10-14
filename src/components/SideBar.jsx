import { useState } from 'react';
import logo from "../logoo.jpg";
import { Select, Option } from "@material-tailwind/react";
import {BiCategory } from "react-icons/bi";
import { useDispatch } from 'react-redux';
import { filterProduct, searchProduct } from '../features/task/taskSlice';

export default function SideBar() {
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const [category, setCategory] = useState('');
   const [showSidebar, setShowSidebar] = useState(false);

  // useEffect(() => {
  //   dispatch(addProduct());
  // },[dispatch, category, search]);


  const handleCategory = (e) => {
    setCategory(e);
    dispatch(filterProduct(e));
  }
  const handleSearch = (e) => {
    
    dispatch(searchProduct(e));
  }
	return (
<div>
  {showSidebar ? (
  null 
  ) : (
    <div>
      <svg
      onClick={() => setShowSidebar(!showSidebar)}
      className="fixed  z-30 flex items-center cursor-pointer left-10 top-6"
      fill="#2563EB"
      viewBox="0 0 100 80"
      width="40"
      height="40"
    >
      <rect width="100" height="10"></rect>
      <rect y="30" width="100" height="10"></rect>
      <rect y="60" width="100" height="10"></rect>
    </svg>
    </div>
  )}
 
<div
  
>
  <aside className="w-64" aria-label="Sidebar">
   <div className={`top-0 left-0 w-[70vw] lg:w-[21vw] bg-[#1C3844] pl-3 text-white fixed h-full z-40  ease-in-out duration-300 ${
      showSidebar ? "translate-x-0" : "translate-x-[-500px]"
   }`}>
    <div className="flex">

      <a href="/" className="flex items-center pl-2.5 mb-5">
      
      <img src={logo} alt="logo" className="mr-3 h-6 sm:h-7 rounded" />

         <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white ">Malkiran</span>
         {/* <i className="ml-2 bi bi-app-indicator px-2 py-1 rounded-md bg-red-500"></i> */}
      </a>
      <button
      className="text-4xl text-white cursor-pointer mb-7 ml-20 mr-2"
      onClick={() => setShowSidebar(!showSidebar)}
    >
      x
    </button>
    </div>
    <div className="mr-5">
    <span className="mb-5 md:w-1/6 h-10 bg-gray-900 cursor-pointer text-sm rounded-full flex">
                <input type="search" name="serch" placeholder="Buscar..." onChange={(e) => handleSearch(e.target.value)}
                    className="flex-grow px-4 rounded-full text-sm focus:outline-none bg-blue bg-[#1C3844] border border-red-100"/>

    </span>
    </div>
      <div className=" px-2.5 mb-1 flex items-center">
         <h3 className="text-lg font-semibold text-red-300">Categorías</h3>
         <BiCategory className="text-red-300 ml-2"/>
         
      </div>
      <div className="space-y-2 mr-10 mt-5">
      <Select variant="outlined" label="Seleccionar Categoría" className="text-white" onChange={(e)=>handleCategory(e)}>
        <Option value="Todo">Todo</Option>
        <Option value="Amigurumi">Amigurumi</Option>
        <Option value="Mini Amigurumi">Mini Amigurumi</Option>
        <Option value="Top/Crop Tops">Top/Crop Tops</Option>
        <Option value="Remeras/Blusas">Remeras/Blusas</Option>
        <Option value="Sacos">Sacos</Option>
        <Option value="Cardigans">Cardigans</Option>
        <Option value="Chals">Chals</Option>
        <Option value="Sweaters">Sweaters</Option>
        <Option value="Accesorios">Accesorios</Option>
        <Option value="Decoracion">Decoración</Option>
        <Option value="Bolsos">Bolsos</Option>
        <Option value="Polleras">Polleras</Option>
        <Option value="Pantalones/Shorts">Pantalones/Shorts</Option>
        <Option value="Combos">Combos</Option>
        <Option value="Primavera/Verano">Primavera/Verano</Option>
        <Option value="Otoño/Invierno">Otoño/Invierno</Option>
      </Select>
      </div>
   </div>
</aside>
</div>
</div>
  );
}