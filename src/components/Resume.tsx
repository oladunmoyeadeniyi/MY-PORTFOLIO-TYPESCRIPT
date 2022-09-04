export const Resume = () => {
  return (
    <>
      <div className="content content-resume" id="resume">
        <div className="content-header">
          <h2>
            <span>My</span> Resume
          </h2>
        </div>
        <div className="content-details">
          <div className="resume">
            <div className="my-resume education">
              <div className="title">
                <h3>Education</h3>
              </div>
              <div className="details">
                <div className="specific-details">
                  <p className="year">2011-2015</p>
                  <div className="year-details">
                    <p className="year-title">Osun State University</p>
                    <p className="year-desc">
                      BSc. Accounting <br />
                      (Second Class Upper Honors)
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-resume experience">
              <div className="title">
                <h3>Experience</h3>
              </div>
              <div className="details">
                <div className="specific-details">
                  <p className="year">From 2021</p>
                  <div className="year-details">
                    <p className="year-title">FrontEnd Developer</p>
                    <p className="year-desc">
                      Developing responsive and cross-browser compatible User
                      Interface (UI) using designs from Figma file. <br />
                      Collaborated with UI designer on web application
                      prototypes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ADD A LINE */}
          <div className="content-line"></div>
          {/* MY SKILLS */}
          <div className="my-skills">
            <div className="title">
              <h3>My Skills</h3>
            </div>
            <div className="skills">
              <div className="skill">
                <img src="images/html.png" alt="" />
                <p>React</p>
              </div>
              <div className="skill">
                <img src="images/css logo.png" alt="" />
                <p>TailwindCSS</p>
              </div>
              <div className="skill">
                <img src="images/js.jpg" alt="" />
                <p>Typescript</p>
              </div>
              <div className="skill">
                <img src="images/react.png" alt="" />
                <p>Javascript</p>
              </div>
              <div className="skill">
                <img src="images/nodejs.png" alt="" />
                <p>HTML5</p>
              </div>
              <div className="skill">
                <img src="images/git.png" alt="" />
                <p>CSS3</p>
              </div>
              <div className="skill">
                <img src="images/vue.png" alt="" />
                <p>Redux Toolkit</p>
              </div>
              <div className="skill">
                <img src="images/angular.png" alt="" />
                <p>Bootsrap</p>
              </div>
              <div className="skill">
                <img src="images/wp.png" alt="" />
                <p>GitHub</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
