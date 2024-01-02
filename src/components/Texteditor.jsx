import React, { useEffect, useState } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./texteditor.css";
import Markdown from "./Markdown";

import draftToMarkdown from "draftjs-to-markdown";
import { convertToRaw } from "draft-js";

const Texteditor = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [text, setText] = useState("");
  const [markdownContent, setMarkdownContent] = useState("");

  useEffect(() => {
    convertToMarkdownHandler();
  }, [editorState]);

  const convertToMarkdownHandler = () => {
    const contentState = editorState.getCurrentContent();
     const currentPlainText = editorState.getCurrentContent().getPlainText();
     setText(currentPlainText);
 
    const rawContentState = convertToRaw(contentState);
    const newmarkdownContent = draftToMarkdown(rawContentState);
    console.log(newmarkdownContent);
    setMarkdownContent(newmarkdownContent);
  };

  return (
    <div className="editor">
      <div className="texteditor">
        <h1>Text Editor</h1>
        <Editor
          initialEditorState={editorState}
          onEditorStateChange={setEditorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          placeholder="The message goes here..."
        />
      </div>
      <div className="markdowneditor">
        <Markdown markdownContent={markdownContent} textState={text} />
      </div>
    </div>
  );
};

export default Texteditor;
