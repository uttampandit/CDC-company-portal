import Welcome from "./components/screens/main/Welcome";
import Header from "./components/screens/main/Header";
import VisionMission from "./components/screens/main/VisionMission";
import ContactUs from "./components/screens/main/ContactUs";

function App() {
  return (
    <div className="flex flex-col min-h-screen ">
      <div className="flex flex-col h-screen bg-[url('./assets/heritage_main_road.JPG')] bg-cover">
        <Header />
        <Welcome />
      </div>
      <div className="h-screen">
        <VisionMission />
        <ContactUs />
      </div>
    </div>
  );
}

export default App;
