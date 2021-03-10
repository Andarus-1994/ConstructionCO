import "../home.css";

function Testimonials(props) {
  console.log(props);

  return (
    <div className="testimonials">
      <div className="leftCorner"></div>
      <div className="leftCorner2"></div>
      <h1> Testimonials</h1>
      <ul>
        {props.list.map((testimonial, index) => (
          <li key={index}>
            <div className="Stars">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
            </div>
            <p>"{testimonial.opinion}"</p>
            <h1>{testimonial.name}</h1>
          </li>
        ))}
      </ul>
      <div className="rightCorner"></div>
    </div>
  );
}

export default Testimonials;
