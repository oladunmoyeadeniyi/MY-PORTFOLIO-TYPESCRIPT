import { Adeniyi5 } from "../assets/Image";

export const About = () => {
  return (
    <>
      <div className="content content-about" id="about">
        <div className="content-header">
          <h2>
            <span>About</span> Me
          </h2>
        </div>
        <div className="content-details">
          <img src={Adeniyi5} alt="profile" />
          <p>
            <span className="text">Hello! I'm</span> <br />
            <span className="name"> OLADUNMOYE ADENIYI</span>
          </p>
          <p>
            I am a seasoned frontend developer. <br /> I ensures I achieve pixel
            perfect UI that is cross-browser compatible. <br />I am well
            equipped with practical knowledge of React Typescript, Tailwind CSS
            and many other UI development technologies.
          </p>
        </div>
      </div>
    </>
  );
};
