import Welcome from "./components/screens/main/Welcome";
import Header from "./components/screens/main/Header";
import VisionMission from "./components/screens/main/VisionMission";

function App() {
  return (
    <div className="flex flex-col min-h-screen ">
      <div className="flex flex-col h-screen bg-[url('./assets/heritage_main_road.JPG')] bg-cover">
        <Header />
        <Welcome />
      </div>
      <div className="h-screen">
        <VisionMission />
      </div>
    </div>
  );
}

export default App;
