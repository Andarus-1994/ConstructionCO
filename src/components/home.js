import "./home.css";
import HomeHeaderImg from "./homeComponents/mainHeaderImg.js";
import HomeDescription from "./homeComponents/description.js";
import ServicesList from "./homeComponents/servicesList.js";
import MiniContact from "./homeComponents/miniContanct.js";
import Questions from "./homeComponents/questions.js";
import Testimonials from "./homeComponents/testimonials.js";
import Reasons from "./homeComponents/reason.js";
import Footer from "./footer.js";
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
    {
      name: "Kitchens & Bathrooms",
    },
  ];

  var QuestionList = [
    {
      name: "What will cost us?",
      answer: "Depending on the size of the project (30.000 $ to 100.000 $).",
    },
    {
      name: "What are the warranty standards?",
      answer: "It can vary from 5 years to 10 years.",
    },
    {
      name: "Can I get replacements even in the winter?",
      answer: "Usually yes, depending on the case.",
    },
  ];

  var TestimonialsList = [
    {
      opinion:
        "Construction CO would be my recommendation to anyone looking for exterior home improvements",
      name: "Joel John",
    },
    {
      opinion: "Always the best practises. Will come a second time for sure !",
      name: "Dora Jova",
    },
    {
      opinion:
        "Ive worked with them on many projects I am a local builder and business owner who has had a need for a roofer I can trust with my time and money.",
      name: "Christian Barne",
    },
  ];

  var reasons = [
    {
      name: "Service Quality",
      description:
        "We approach construction differently, delivering value beyond our client’s expectations.",
      img: "ribbon.png",
    },
    {
      name: "Experts in the Field",
      description:
        "Our team is constituted of the best and brightest in the industry.",
      img: "people.png",
    },
    {
      name: "Bound with the People",
      description:
        "We employ an open and cooperative approach with our associates.",
      img: "business.png",
    },
  ];

  return (
    <div className="Home">
      <HomeHeaderImg />
      <HomeDescription />
      <ServicesList list={servicesList} />
      <MiniContact />
      <Questions list={QuestionList} />
      <Testimonials list={TestimonialsList} />
      <Reasons list={reasons} />
      <Footer />
    </div>
  );
}

export default Home;
