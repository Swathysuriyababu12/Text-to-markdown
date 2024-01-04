import React, { useState } from "react";
import "./markdown.css";

const Markdown = ({
  markdownContent,
  marktotext,
}) => {
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

  const handleButtonClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return (
    <div>
      <button onClick={handleButtonClick} className="preview">
        Preview
      </button>
      <h2>Markdown Content:</h2>
      <pre>{markdownContent}</pre>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              <button className="primary"> close &times;</button>
            </span>
            <h2>Markdown Content in Readme</h2>
            {/* use proper sanitising later */}
            <div dangerouslySetInnerHTML={{ __html: decodedHtmlContent }} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Markdown;
