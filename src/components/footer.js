import "./footer.css";

function Footer() {
  function goToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="footer">
      <button className="ButtonToTop" onClick={() => goToTop()}>
        &#8593;
      </button>
      <div className="container">
        <ul>
          <li>
            <i class="fa">&#xf09a;</i>
          </li>
          <li>
            <i class="fa">&#xf16d;</i>
          </li>
          <li>
            <i class="fa">&#xf167;</i>
          </li>
        </ul>
        <p>
          We look forward to working with clients who have an eye for detail and
          a love of high quality. If you are searching for a Construction CO
          builder, we would be delighted to quote for your project.
        </p>
        <p>
          Having a wealth of experience in building and construction management,
          we can tackle small extensions to large new build projects. We are
          happy working with both traditional building materials and new
          construction methods
        </p>
        <div className="details">
          {" "}
          <p>
            <i class="fa">&#xf095;</i> 0724122344{" "}
          </p>
          <p>
            <i class="fas">&#xf3c5;</i> city. Bucharest, str. Rasaritului nr.24{" "}
          </p>
          <p>
            <i class="fa fa-envelope"></i> ConstructCO@Yahoo.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
