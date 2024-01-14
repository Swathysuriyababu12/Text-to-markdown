import React, { useState } from "react";
import "./markdown.css";
import DOMPurify from "dompurify";
import { useEffect } from "react";

const Markdown = ({ markdownContent, marktotext }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  

  // This dangerousDecodeEntities function creates a temporary textarea element,
  //  sets its innerHTML to the encoded HTML string, and retrieves the decoded content from its value property.
  // This way, the encoded entities are converted back to actual HTML tags for rendering.

  const dangerousDecodeEntities = (htmlString) => {
    const txt = document.createElement("textarea");
    txt.innerHTML = htmlString;
    return txt.value;
  };
  const decodedHtmlContent = dangerousDecodeEntities(marktotext);
  const sanitizedHtmlContent = DOMPurify.sanitize(decodedHtmlContent);

  const handleButtonClick = () => {
    setModalOpen(true);
    console.log(isModalOpen);
  };

  const postDetails = () => {};

  const handleCloseModal = () => {
    setModalOpen(false);
  };


  return (
    <div>
      <button onClick={handleButtonClick} className="preview">
        Preview
      </button>
      <h3>Markdown Content:</h3>
      <pre>{markdownContent}</pre>
      {console.log(isModalOpen)}
      {isModalOpen && (
        <div className="modals container-fluid">
          <div className="modal-contents container-fluid">
            <span className="close" onClick={handleCloseModal}>
              <button className="primary"> close &times;</button>
            </span>
            <h4>Markdown Content in Readme</h4>
            <div
              dangerouslySetInnerHTML={{ __html: sanitizedHtmlContent }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Markdown;
