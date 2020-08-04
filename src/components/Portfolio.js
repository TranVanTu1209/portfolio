import React, { useState } from 'react';
import project1 from '../assets/project1.PNG';
import project2 from '../assets/project2.PNG';
import project3 from '../assets/project3.PNG';
const Portfolio = () => {
  const [projects] = useState([
    {
      image: project1,
      title: "Mandala Booking Hotel",
      description: "One of my first project as front end developer",
      linkTo: "https://booking.mandalainn.vn/"
    },
    {
      image: project2,
      title: "Food & Dishes With Moki",
      description: "Project as front end developer and designer",
      linkTo: "https://moki.com.vn/"
    },
    {
      image: project3,
      title: "Finance and Shopping Website",
      description: "The last project with normal Javascript",
      linkTo: "http://testfinance.tk/"
    }
  ])
  return (
    <div className="s1">
      <div className="main-container">
        <h3 className="text-center">
          Some of my past projects
        </h3>
        <div className="post-wrapper">
          {
            projects.map((p, index) => (
              <div key={index} className="post">
                <a href={p.linkTo} target="_blank" rel="noopener noreferrer" >
                  <img src={p.image} alt={p.title} />
                </a>
                <div className="text">
                  <h4>
                    {p.title}
                  </h4>
                  <p>
                    {p.description}
                  </p>
                  <a href={p.linkTo} target="_blank" rel="noopener noreferrer" > View Details </a>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Portfolio
