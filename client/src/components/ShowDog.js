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
      <div>
        {dogs &&
          dogs.map((dog) => {
            return (
              <div
                key={dog.id}
                style={{
                  display: "inline-block",
                  margin: "5px",
                  width: "300px",
                  height: "fit-content",
                  textAlign: "center",
                  border: "2px solid black",
                  borderRadius: "20px",
                }}
              >
                <h2>{dog.name}</h2>
                <img src={dog.image} alt="Dog" height="250px" width="100%" />
                <p>
                  {dog.temperament
                    ? `Temperament : ${dog.temperament.join(" ")}`
                    : "No information available"}
                </p>
                <p>{`Expected lifetime : ${dog.expectedLifetime}`}</p>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default ShowDog;
