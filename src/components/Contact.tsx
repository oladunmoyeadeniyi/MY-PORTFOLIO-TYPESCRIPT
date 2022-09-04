export const Contact = () => {
  return (
    <div>
      <div className="content content-contact" id="contact">
        <div className="content-header">
          <h2>
            <span>Contact</span> Me
          </h2>
        </div>
        <div className="content-details">
          <div className="contact">
            <div className="contact-details">
              <p className="title">Address</p>
              <p>Lagos, Nigeria</p>
              <img src="images/white-line.PNG" alt="" />
            </div>
            <div className="contact-details">
              <p className="title">Email</p>
              <p>oladunmoyeadeniyi@yahoo.com</p>
            </div>
            <div className="contact-details">
              <p className="title">Phone</p>
              <p>+2349045437071</p>
            </div>
            <div className="contact-details">
              <p className="title">Freelance</p>
              <p>Available</p>
            </div>
          </div>
          <div className="content-line"></div>
          {/* CONTACT FORM */}
          <div className="contact-form">
            <div className="title">
              <h3>Contact Form</h3>
            </div>
            {/* <form action="">
                                    <div className="form-input">
                                        <input type="text" placeholder="Name">
                                        <input type="email" placeholder="Email">
                                    </div>
                                    <textarea cols="30" rows="10"></textarea>
                                    <input type="submit" value="Send Message">
                                </form> */}
          </div>
        </div>
      </div>
    </div>
  );
};
