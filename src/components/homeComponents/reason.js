import "../home.css";

function Reasons(props) {
  return (
    <div className="reasons">
      <h1> Why to choose us?</h1>
      <ul>
        {props.list.map((reason, index) => (
          <li key={index}>
            <img src={"../../assets/" + reason.img} alt="icons" />
            <h2>{reason.name}</h2>
            <p>{reason.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Reasons;
