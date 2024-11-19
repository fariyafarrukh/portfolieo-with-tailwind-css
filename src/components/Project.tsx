import React from 'react';
import Heading from './Heading';
import './Project.css'; // Import the custom CSS file
import Image from 'next/image';

const data = {
  id: 1,
  title: "Resume builder",
  desc: "A TypeScript-based interactive resume built with HTML and CSS code",
  img: "/res.jpg",
  tags: ["HTML", "CSS", "TYPESCRIPT"],
};

const Project = () => {
  return (
    <div id="project" className="project-container">
      <Heading title="My Project" />
      <div className="project-grid">
        <div key={data.id} className="project-card">
          <Image 
          src={data.img} 
          alt={data.title} 
          className="project-image"
          width={400} 
            height={300} 
             />
          <h3 className="project-title">{data.title}</h3>
          <p className="project-desc">{data.desc}</p>
          <div className="project-tags">
            {data.tags.map((tag, index) => (
              <span key={index} className="badge">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;

