import React, { useEffect, useState } from "react";
import axios from "axios";
import api from "./api";

const ShowDog = () => {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const getDogs = async () => {
      await axios
        .get(api.getAllBreeds)
        .then((response) => setDogs(response.data))
        .catch((err) => console.log(err));
    };
    getDogs();
  }, []);

  return (
    <>
      <h3>Breeds</h3>
      {dogs.length &&
        dogs.map((dog) => {
          return (
            <div key={dog.id} style={{ display: "inline-flex", margin: "5px" }}>
              <h2>{dog.name}</h2>
              <img src={dog.image} alt="Dog" height="250px" width="250px" />
            </div>
          );
        })}
    </>
  );
};

export default ShowDog;
