import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [planetOfDay, setPlanetOfDay] = useState([15, 25]);
  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=iJLnoLX9sMnDTgwHzPXEitbNzujLamkpPgcNhCMU"
      )
      .then(res => setPlanetOfDay(res.data))
      .catch(err => console.log(err));
  }, []);
  console.log(planetOfDay);
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
        <div>
          {planetOfDay.title ? planetOfDay.title : "Loading... please wait"}
        </div>
      </p>
    </div>
  );
}

export default App;
