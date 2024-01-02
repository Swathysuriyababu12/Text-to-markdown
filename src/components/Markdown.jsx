import React, { useState } from "react";
import "./markdown.css";

const Markdown = ({ markdownContent, textState, formattedText }) => {
  const [isModalOpen, setModalOpen] = useState(false);

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
            {/* <pre>{formattedText}</pre> */}
            <div dangerouslySetInnerHTML={{ __html: formattedText }} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Markdown;
