import Home from "./components/pages/Home";
import "./components/style/global.css";
import background from "../src/components/style/background.jpg";

function App() {
  return (
    <div
      className="background"
      style={{
        backgroundImage: `url(${background})`
      }}
    >
      <Home />
    </div>
  );
}

export default App;
