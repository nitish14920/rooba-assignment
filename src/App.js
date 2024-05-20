import LeftSection from "./components/event-component/LeftSection.tsx";
import "./App.css";
import RightSection from "./components/event-component/RightSection.tsx";
import UpwardScrollText from "./components/event-component/VerticalScrollText.tsx";
import VerticalScrollText from "./components/event-component/VerticalScrollText.tsx";

function App() {
  return (
    <div className="App">
      <LeftSection />
      {/* <UpwardScrollText
        text="Event: Oasis Bus tour, JLN Stadium, Delhi * Collection Live"
        speed={7}
      /> */}
      <VerticalScrollText />

      <RightSection />
    </div>
  );
}

export default App;
