import React from 'react';
import './App.css';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import avatar from './assets/avatar.jpg';
function App() {
  return (
    <div className="App">
      <div className="s1">
        <div className="main-container">
          <div className="greeting-wrapper">
            <h1>Hello, I am Tu</h1>
          </div>
          <div className="intro-wrapper">
            <div className="nav-wrapper">
              <div className="dots-wrapper">
                <div className="dot">

                </div>
                <div className="dot">

                </div>
                <div className="dot">

                </div>
              </div>
              <ul id="navigation">
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
            <div className="left-column">
              <img src={avatar} alt="My Avatar" className="profile_pic" />
              <h3 className="title">
                Personalize Theme
              </h3>
              <div id="them-option-wrapper">
                <div id="light-mode" className="theme-dot"></div>
                <div id="blue-mode" className="theme-dot"></div>
                <div id="green-mode" className="theme-dot"></div>
                <div id="purple-mode" className="theme-dot"></div>
              </div>
              <p id="settings-note">
                *Theme settings will be saved for <br /> your next visit
              </p>
            </div>
            <div className="right-column">
              <div id="preview-shadow">
                <div id="preview">
                  <div id="corner-tl" className="corner"></div>
                  <div id="corner-tr" className="corner"></div>
                  <h3>
                    What I Do ?
                </h3>
                  <p>
                    I was a web developer for a while. Now let me help you with your project
                </p>
                  <div id="corner-bl" className="corner"></div>
                  <div id="corner-br" className="corner"></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <About />
      <Portfolio />
      <Contact />
      <div className="s1">
        <h3 className="text-center" >
          Follow Me on Facebook
        </h3>
      </div>
    </div>
  );
}

export default App;
