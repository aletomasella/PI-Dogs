import React, { useEffect, useState } from "react";
import axios from "axios";
import api from "./api";

const ShowDog = () => {
  const [dogs, setDogs] = useState([]);
  const [color, setColor] = useState("#B1AF7C");

  useEffect(() => {
    const getDogs = async () => {
      await axios
        .get(api.getAllBreeds)
        .then((response) => setDogs(response.data))
        .catch((err) => console.log(err));
    };
    getDogs();
  }, []);

  const handleColor = (e) => {
    setColor(e.target.value);
  };

  return (
    <>
      <h1>Breeds</h1>
      <input type="color" name="color" onChange={handleColor} value={color} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          flexWrap: "wrap",
          alignContent: "space-between",
          alignItems: "center",
          color: "white",
          fontWeight: "600",
        }}
      >
        {dogs &&
          dogs.map((dog) => {
            return (
              <div
                key={dog.id}
                style={{
                  margin: "5px",
                  width: "400px",
                  height: "fit-content",
                  textAlign: "center",
                  border: "1px solid white",
                  borderRadius: "20px",
                  backgroundColor: `${color}`,
                }}
              >
                <h2>{dog.name}</h2>
                <img src={dog.image} alt="Dog" height="250px" width="100%" />
                <p>
                  {dog.temperament
                    ? `Temperament : ${dog.temperament.join("-")}`
                    : "No information available"}
                </p>
                <p>{`Peso : ${dog.weight} Kg`}</p>
                <p>{`Expected lifetime : ${dog.expectedLifetime}`}</p>
                <p>
                  {dog.origin
                    ? `Origin : ${dog.origin.join("-")}`
                    : `Origin : No information available`}
                </p>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default ShowDog;
