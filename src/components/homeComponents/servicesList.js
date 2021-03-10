import "../home.css";

function ServicesList(props) {
  console.log(props);
  return (
    <div className="servicesList">
      <ul>
        {props.list.map((service, index) => (
          <li key={index}>
            <h1>{service.name}</h1>
            <p>Learn More</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ServicesList;
