import React from "react";
import { Link } from "react-router-dom";

export default function Recpi({ item }) {
  return (
    <div className="recpi w-80 overflow-hidden bg-white/75 rounded-lg shadow-2xl p-5 shadow-rose-100 border-2 border-white flex flex-col gap-5">
      <div className="img h-40 overflow-hidden flex justify-center items-center ">
        <img src={item.image_url} alt={item.title} className=" block w-full  rounded-lg" />
      </div>
      <div className="texts">
        <span className="publisher text-sm uppercase text-sky-500 font-semibold tracking-wider">{item.publisher}</span>
        <h2 className="title text-2xl font-semibold truncate">{item.title}</h2>
        <Link to={`/recpi-item/${item.recipe_id}`} className=" bg-gradient-to-br from-rose-400 to-rose-600 bg-rose-50 p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-2 inline-block shadow-md shadow-rose-200 hover:shadow-lg hover:shadow-300 duration-300">View recpies</Link>
      </div>
    </div>
  );
}
