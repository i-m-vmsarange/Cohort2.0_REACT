import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sections from "./components/Sections";

const App = () => {
  return (
    <>
      <div className="h-screen w-screen relative">
        <Navbar />
        <Sections brand="sheryians">
          <h1 className="text-red-500 text-2xl font-semibold">Hello</h1>
          <h2 className="text-red-500 text-2xl font-semibold">How are you?</h2>
        </Sections>
        <Footer />
      </div>
    </>
  );
};

export default App;
