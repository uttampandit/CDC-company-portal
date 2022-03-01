import Welcome from "./Welcome";
import Header from "./Header";
import VisionMission from "./VisionMission";
import ContactUs from "./ContactUs";

function HomePage() {
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

export default HomePage;
