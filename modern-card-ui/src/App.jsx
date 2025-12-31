import Card from "./components/Card";
import CreateCard from "./components/CreateCard";
const App = () => {
  return (
    <div className="w-full flex flex-col gap-10 justify-center items-center">
      <div className="mt-5">
        <CreateCard />
      </div>
      <div className="hidden main w-screen items-center justify-center">
        <Card />
      </div>
    </div>
  );
};

export default App;
