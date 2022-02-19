import Welcome from "./components/Welcome";
import Header from "./components/Header";
import VisionMission from "./components/VisionMission";

function App() {
  //To use overflow-hidden parent must be relative.

  return (
    <div className="flex flex-col ">
      <div className="flex flex-col h-screen bg-gradient-to-t from-blue-200 overflow-clip relative">
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
