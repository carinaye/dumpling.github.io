import React from 'react';
import './about.css'
import poster from '../Images/hellohobart.png'
import { useNavigate  } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  const goBackToHomepage = () => {
    navigate('/');
  };

  return (
    <div>
      <h1>Yang's dumpling was founded in Shanghai, 1994.</h1>
      <p>They said ...</p>
      <div className="video-container">
        <iframe
          title="About Us Video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/uVn4_LsMLs4?t=113"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
       <p>They wrote ...</p>
       <img src={poster} alt="news from HelloHobart" />
       <p></p>
      <button onClick={goBackToHomepage}>Go Back to Homepage</button>
    </div>
  );
};

export default About;


