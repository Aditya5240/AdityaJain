import React from 'react';

const Project = () => {
  return (
    <div className='mainPro'>
    <div className="project-container">
      <div className="project-image">
        <img src="../src/images/movie.jpg" alt="Project Visual" />
      </div>
      <div className="project-content">
        <p className="project-date">31 Januaru 2024</p>
        <h2 className="project-title">Movie Review Website</h2>
        <p className="project-description">
        A moview review website which provide brief info about any movie and its IMDB rating.
        </p>
        <a className='project-link' href='https://aditya5240.github.io/movie-review-web/' target='blank'>View Website</a>
      </div>
    </div>

    <div className="project-container">
      <div className="project-image">
        <img src="../src/assets/blog.jpg" alt="Project Visual" />
      </div>
      <div className="project-content">
        <p className="project-date">June 2024</p>
        <h2 className="project-title">Blogify</h2>
        <p className="project-description">
          Our platform makes it easy for anyone to start blogging, connect with readers, and explore a wide range of topics. Unleash your creativity and join us today!
        </p>
        <a className='project-link' href='https://aditya5240.github.io/movie-review-web/' target='blank'>View Website</a>
      </div>
    </div>
   </div> 
  );
};

export default Project;
