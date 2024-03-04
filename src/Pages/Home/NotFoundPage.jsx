import React from 'react';
import './NotFoundPage.css'; // Importing CSS file for styling

const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <a href="/">Go Home</a>
    </div>
  );
}

export default NotFoundPage;
