import React from "react";

const Markdown = ({ markdownContent }) => {
  return (
    <div>
          <h2>Markdown Content:</h2>
        {  console.log(markdownContent)}
      <pre>{markdownContent}</pre>
    </div>
  );
};

export default Markdown;
