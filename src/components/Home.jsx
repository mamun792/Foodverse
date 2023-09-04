import React from "react";
import Recpi from "./Recpi";

export default function Home({ data, error, loading }) {
  return (
    <div className="home container mx-auto py-10 flex flex-wrap gap-10 justify-center">
      {!loading && !error && data?.length === 0 ? (
        <div className="text-center text-2xl lg:text-4xl font-semibold text-rose-300">
          Nothing to show , please search for something!
        </div>
      ) : null}

      {loading && <p>{error ? "something worng ,Please try agin" : "Loading..."}</p>}

      {data?.length > 0 &&
        data.map((item) => <Recpi key={item.recipe_id} item={item} />)}
    </div>
  );
}
