import Navbar from "./components/Navbar";
// import Textarea from "./components/Textarea";
import About from "./components/About";

function App() {
  return (
    <>
      <Navbar title="React App" />
      <div className="container my-3">

        <About/>
      </div>

    </>
  );
}

export default App;
