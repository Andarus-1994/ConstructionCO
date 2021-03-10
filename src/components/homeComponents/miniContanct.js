import "../home.css";

function miniContact() {
  return (
    <div className="miniContact">
      <div className="leftCorner"></div>
      <div className="leftCorner2"></div>
      <h1>Call us today for a free estimate, or to schedule an appointment</h1>
      <h2>
        Fill out the form below. If its more urgent you can directly contact us
        at 0942111222 or email us directly at constructOffice@yahoo.com
      </h2>
      <form action="/action_page.php">
        <div className="inputText">
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your Name"
            required
          />

          <input
            type="text"
            id="email"
            name="email"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="textArea">
          <textarea
            type="text"
            placeholder="Your message"
            name="message"
          ></textarea>
          <input type="submit" value="Submit Message" />
        </div>
      </form>
    </div>
  );
}

export default miniContact;
