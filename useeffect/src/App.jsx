import { useState, useEffect } from "react";
import axios from "axios";
const App = () => {
  const [num, setNum] = useState(0);
  const [name, setName] = useState("");
  const getData = async function () {
    const response = await axios.get("https://randomuser.me/api/");
    setName(
      `${response.data.results[0].name.first} ${response.data.results[0].name.last}`
    );
  };

  useEffect(() => {
    getData();
  }, [num]);
  return (
    <div className="m-2">
      <div>{name}</div>
      <div>
        <h1>{num}</h1>
        <button
          className="px-2 py-1 bg-pink-500 rounded active:scale-95 cursor-pointer"
          onClick={() => {
            setNum(num + 1);
          }}
        >
          Increase
        </button>
      </div>
    </div>
  );
};

export default App;
