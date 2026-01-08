import axios from "axios";
import { useState } from "react";
import Card from "./components/Card";
const App = () => {
  const [allData, setallData] = useState([]);

  async function getData() {
    const data = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(data.data);
    setallData(data.data);
  }
  return (
    <>
      <div>
        <button
          onClick={getData}
          className="px-3 py-1 cursor-pointer text-[11px] bg-emerald-600 text-white rounded m-4 active:scale-95"
        >
          Get Data
        </button>
        <div className="flex flex-wrap">
          {allData.map((user, idx) => {
            return (
              <div key={idx}>
                <Card user={user} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default App;
