import React from 'react'

const About = () => {
  return (
    <div className="s2">
      <div className="main-container">
        <div className="about-wrapper">
          <div className="about-me">
            <h3>
              MORE INFO ABOUT ME
            </h3>
            <p>
              I build new projects for my client all the time. I love coding very much
            </p>
            <p>
              Give me the chance to collaborate with you guys <span role="img" aria-label="emoji" > ☺ 😊☺😊☺ 😊</span>
            </p>
            <hr />
            <h3>
              TOP SKILLS
            </h3>
            <p>
              Fullstack developer with ReactJS and NodeJs and some cool projects <a href="https://facbook.com/TranVanTu1209">View Detail</a>
            </p>
            <div id="skills">
              <ul>
                <li>
                  HTML
                </li>
                <li>
                  Java
                </li>
                <li>
                  Javascript
                </li>
                <li>
                  ReactJS
                </li>
                <li>
                  NodeJS
                </li>
              </ul>
              <ul>
                <li>
                  MongoDB
                </li>
                <li>
                  Firebase Services
                </li>
                <li>
                  Hosting & Deploy Website
                </li>
                <li>
                  Angular
                </li>
                <li>
                  And some more...
                </li>
              </ul>
            </div>
          </div>
          <div className="social-links">
            <h3>
              Find Me On Facebook or Instagram
              </h3>
            <a href="https://www.facebook.com/tranvantu1209" target="_blank" rel="noopener noreferrer" >@Facebook</a> <br /> <br />
            <a href="https://twitter.com/TuTranVan1" target="_blank" rel="noopener noreferrer" >@Twitter</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
