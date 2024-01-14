import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./markdown.css";
import DOMPurify from "dompurify";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { clearSomeState, addMark } from "../redux/features/markdownSlice";

const Markdown = ({ markdownContent, marktotext }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error, success } = useSelector((state) => state.marks);

  useEffect(() => {
    if (error) {
      toast.warn(error);
      dispatch(clearSomeState());
    }
    if (success === true) {
      toast.success("Saved Successfully");
      dispatch(clearSomeState());
      navigate("/dashboard");
    }
  });

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

  const postDetails = (values) => {
    console.log(values)
    dispatch(addMark(values));
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <button onClick={handleButtonClick} className="preview">
        Preview
      </button>
      <span className="container">
        <button
          onClick={() =>
            postDetails({markdownContent,sanitizedHtmlContent})
          }
          className="preview"
        >
          Save
        </button>
      </span>

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
