import "./Reset.css";
import "./App.css";
import Home from "./page/Home";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  AOS.init();
  return (
    <main className=" relative min-w-[100vw] min-h-screen overflow-x-hidden">
      <Home />
    </main>
  );
}

export default App;
