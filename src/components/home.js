import "./home.css";
import HomeHeaderImg from "./homeComponents/mainHeaderImg.js";
import HomeDescription from "./homeComponents/description.js";
import ServicesList from "./homeComponents/servicesList.js";
import MiniContact from "./homeComponents/miniContanct.js";
function Home() {
  var servicesList = [
    {
      name: "Multi-family construction",
    },
    {
      name: "Commercial Roofing",
    },
    {
      name: "Residential Roofing",
    },
    {
      name: "Exterior Painting",
    },
    {
      name: "Home Improvements ",
    },
  ];

  return (
    <div className="Home">
      <HomeHeaderImg />
      <HomeDescription />
      <ServicesList list={servicesList} />
      <MiniContact />
    </div>
  );
}

export default Home;
