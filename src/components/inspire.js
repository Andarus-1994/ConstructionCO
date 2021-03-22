import "./inspire.css";
import Footer from "./footer.js";
import contentImage from "../assets/inspireContent.jpg";

function Inspire() {
  return (
    <div className="inspire">
      <div className="mainHeaderInspire">
        <h1>Inspired by us</h1>
      </div>
      <div className="inspireContent">
        <div className="containerLeft">
          <img src={contentImage} alt="noImage"></img>
          <h1>We built for the future...</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            pulvinar nisl nec tempus finibus. Donec a rhoncus justo, et
            elementum mauris. Nunc blandit vehicula sodales. Aliquam erat
            volutpat. Proin sagittis odio nec lectus vehicula, a commodo risus
            efficitur. Nulla ornare tincidunt leo at egestas. Morbi at rutrum
            arcu.{" "}
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            pulvinar nisl nec tempus finibus. Donec a rhoncus justo, et
            elementum mauris. Nunc blandit vehicula sodales. Aliquam erat
            volutpat. Proin sagittis odio nec lectus vehicula, a commodo risus
            efficitur. Nulla ornare tincidunt leo at egestas. Morbi at rutrum
            arcu.{" "}
          </p>
          <br></br>
          <p>
            Cras ac lobortis neque. Ut euismod sem eros, id bibendum purus
            pharetra eu. Nam dapibus ex ipsum, sed placerat urna fringilla eu.
            Aenean non justo in dolor laoreet ullamcorper. Aenean lacinia
            viverra tempus. Praesent rutrum nulla nisi, at posuere diam bibendum
            vitae. Maecenas vulputate dui at justo euismod, ut eleifend ligula
            semper.{" "}
          </p>
        </div>
        <div className="containerRight">
          <img src={contentImage} alt="noImage"></img>
          <h1>We never step back of our engagements</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            pulvinar nisl nec tempus finibus. Donec a rhoncus justo, et
            elementum mauris. Nunc blandit vehicula sodales. Aliquam erat
            volutpat. Proin sagittis odio nec lectus vehicula, a commodo risus
            efficitur. Nulla ornare tincidunt leo at egestas. Morbi at rutrum
            arcu.{" "}
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            pulvinar nisl nec tempus finibus. Donec a rhoncus justo, et
            elementum mauris. Nunc blandit vehicula sodales. Aliquam erat
            volutpat. Proin sagittis odio nec lectus vehicula, a commodo risus
            efficitur. Nulla ornare tincidunt leo at egestas. Morbi at rutrum
            arcu.{" "}
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Inspire;
