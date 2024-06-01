import Header from "./components/Header/Header";
import "./App.css";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="flex-row">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
