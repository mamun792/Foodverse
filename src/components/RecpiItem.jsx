import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
export default function RecpiItem() {
  const { recpiId } = useParams();
 
  const {recpiItem:recipe,loading,error}= useFetch(recpiId);
  if(recipe.recipe){
    console.log({recipe});
  }

  return (
    <div>
      <h1>RecpiItem</h1>
    </div>
  );
}
