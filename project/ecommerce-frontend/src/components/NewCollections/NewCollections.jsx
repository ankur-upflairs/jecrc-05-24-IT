import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import "./NewCollections.css";
import { fetchData } from "../../fetchData/fetchdata";
const NewCollections = () => {
  const [newCollections, setNewCollections] = useState([]);

  useEffect(() => {
    (async () => {
      let res=await fetchData("http://localhost:3001/product");
      console.log(res);
      setNewCollections(res.products?.slice(0,8));
    })()
  }, []);

  return (
    <div className="new-collections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {newCollections.map((item) => {
          return (
            <Item
              key={item.id}
              id={item._id}
              name={item.name}
              image={item.image}
              newPrice={item.newPrice}
              oldPrice={item.oldPrice}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewCollections;
