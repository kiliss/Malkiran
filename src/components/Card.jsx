import PopUp from "./PopUp";


export default function Card({id, nombre, precio, imagen, categoria}) {
  return (
    <div className="max-w-2xl m-3" key={id}>
        <div className="bg-[#1C3844] shadow-md rounded-lg max-w-sm dark:bg-[#1C3844] dark:border-gray-700 border border-black">
                <img className="rounded-t-lg" src={imagen[0]} alt="product"/>
                <div className="px-5 pb-5">
                    <h3 className="text-white font-semibold text-xl tracking-tight dark:text-white mt-5"> {nombre} </h3>
                    {
                        categoria.map((cat) => {
                          return <p className="text-gray-400 text-sm dark:text-gray-300 mt-2" key={id}> {cat} </p>
                    })
                    }
                    <div className="flex items-center justify-between mt-10">
                        <span className="text-3xl font-bold text-white dark:text-white">${precio}</span>
                        <PopUp id={id}/>
                    </div>
                </div>
        </div>
    </div>
  );
}

