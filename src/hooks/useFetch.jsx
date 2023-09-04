import {useEffect, useState } from "react";

export const  useFetch =(recpiId)=>{

    const [recpiItem, setRecpiItem] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
  
    useEffect(() => {
      const getRecpiItem = async () => {
        try {
          const res = await fetch(
            `https://forkify-api.herokuapp.com/api/get?rId=${recpiId}`
          );
          if (!res.ok) {
            throw new Error("something worng ,Please try agin");
          }
          const data = await res.json();
          console.log(data);
          setRecpiItem(data.recipe);
          setLoading(false);
          setError(false);
        } catch (error) {
          setError(true);
        }
      };
  
      getRecpiItem();
    }, [recpiId]);

    return {recpiItem,loading,error}
   
}