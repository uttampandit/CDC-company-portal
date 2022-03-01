import Welcome from "./Welcome";
import Header from "./Header";
import VisionMission from "./VisionMission";

function HomePage() {
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

export default HomePage;
