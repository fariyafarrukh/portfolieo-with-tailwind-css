import React from 'react';
import './Heading.css'; // Import the custom CSS file

interface PropsType {
    title: string;
}

const Heading: React.FC<PropsType> = ({ title }) => {
  return (
    <div className="heading-container">
      <p className="heading-title">{title}</p>
    </div>
  );
};

export default Heading;

