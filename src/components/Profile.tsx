import { Adeniyi1 } from "../assets/Image";

export const Profile = () => {
  return (
    <>
      <div className="profile">
        <div className="profile-image">
          <img src={Adeniyi1} alt="man" />
        </div>
        <div className="profile-content">
          <h2>OLADUNMOYE ADENIYI</h2>
          <p className="text-effect">
            <span className="effect">React Frontend Developer</span>
          </p>
          <div className="profile-icons">
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://github.com/oladunmoyeadeniyi" target="_blank">
              <i className="fab fa-github"></i>
            </a>
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/adeniyioladunmoye/"
              target="_blank"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#">
              <i className="fab fa-stack-overflow"></i>
            </a>
          </div>
          <div className="profile-cta my-border">
            <div>
              <a href="https://github.com/oladunmoyeadeniyi" target="_blank">
                GitHub
              </a>
            </div>
            <div>
              <a href="http://wa.me/2349045437071" target="_blank">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
