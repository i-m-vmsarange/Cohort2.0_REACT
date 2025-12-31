import Navbar from "./components/Navbar";
import Men from "./components/Men";
import Women from "./components/Women";
const App = () => {
  const user1 = {
    name: "Sarthak",
    age: 29,
    address: "Bhopal",
    gender: "Male",
  };
  const user2 = {
    name: "Shreya",
    age: 23,
    address: "Pune",
    gender: "Female",
  };

  return (
    <div className="flex flex-col ">
      {user2.gender === "Male" ? <Men /> : <Women />}
    </div>
  );
};

export default App;
