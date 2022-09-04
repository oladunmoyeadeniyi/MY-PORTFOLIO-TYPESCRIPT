import { Portfolio3, Portfolio0, Portfolio2 } from "../assets/Image";

export const Portfolio = () => {
  return (
    <>
      <div className="content content-portfolio" id="portfolio">
        <div className="content-header">
          <h2>
            <span>My</span> PortFolio
          </h2>
        </div>
        <div className="content-details">
          <div className="portfolio">
            <div className="portfolio-item">
              <img src={Portfolio0} alt="" />
              <p className="portfolio-title">Web Design Project</p>
              <p className="portfolio-desc">Coming Soon!!</p>
              <a href="#">&rarr; View Project</a>
            </div>
            <div className="portfolio-item">
              <img src={Portfolio2} alt="" />
              <p className="portfolio-title">Mobile App Design</p>
              <p className="portfolio-desc">Coming Soon!!</p>
              <a href="#">&rarr; View Project</a>
            </div>
            <div className="portfolio-item">
              <img src={Portfolio3} alt="" />
              <p className="portfolio-title">Login UI Project</p>
              <p className="portfolio-desc">Coming Soon!!</p>
              <a href="#">&rarr; View Project</a>
            </div>
            <div className="portfolio-item">
              <img src={Portfolio3} alt="" />
              <p className="portfolio-title">Password Generator</p>
              <p className="portfolio-desc">Coming Soon!!</p>
              <a href="#">&rarr; View Project</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
