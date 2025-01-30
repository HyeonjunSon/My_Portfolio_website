import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

function Resume() {
  return (
    <div className="resume" style={{ textAlign: 'center' }}>
      <h1>My Resume</h1>
      {/* Styled Download Button */}
      <a 
        href="/resume_hyeonjunSon.pdf" 
        download 
        style={{
          marginBottom: '20px',
          display: 'inline-block',
          padding: '12px 24px',          /* Adds padding for a button-like appearance */
          backgroundColor: '#4CAF50',     /* Green background color */
          color: '#fff',                  /* White text color */
          borderRadius: '8px',            /* Rounded corners */
          fontSize: '16px',               /* Larger font for emphasis */
          fontWeight: 'bold',             /* Bold text */
          textDecoration: 'none',         /* Removes underline */
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',  /* Subtle shadow for depth */
          transition: 'background-color 0.3s ease, transform 0.3s ease', /* Smooth hover effect */
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#388E3C'; /* Darker green on hover */
          e.currentTarget.style.transform = 'scale(1.05)';  /* Slightly larger on hover */
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#4CAF50'; /* Original color on leave */
          e.currentTarget.style.transform = 'scale(1)';      /* Original size on leave */
        }}
      >
        Download Resume
      </a>

      {/* Display PDF with Larger Dimensions */}
      <div style={{ 
        border: '1px solid rgba(0, 0, 0, 0.3)', 
        width: '90%',  
        maxWidth: '800px', 
        height: '650px',  
        margin: '20px auto', 
      }}>
        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
          <Viewer fileUrl="/resume_hyeonjunSon.pdf" />
        </Worker>
      </div>
    </div>
  );
}

export default Resume;
