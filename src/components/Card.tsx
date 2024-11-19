import React from 'react';
import './Card.css'; // Import the custom CSS file
import Image from 'next/image';

type CardProps = {
  title: string;
  desc: string;
  img: string;
  tags: string[];
};

const Card: React.FC<CardProps> = ({ title, desc, img, tags }) => {
  return (
    <div className="card">
      <Image
      src={img}
       alt={title}
        className="card-image" />
        width={300} 
        height={200} 
      <h3 className="card-title">{title}</h3>
      <p className="card-desc">{desc}</p>
      <div className="card-tags">
        {tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;


