import React, { useEffect, useState } from "react";
import { EditorState, ContentState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./texteditor.css";
import Markdown from "./Markdown";

import draftToMarkdown from "draftjs-to-markdown";
import { convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { markdownToDraft } from "markdown-draft-js";
import { convertFromRaw } from "draft-js";

const Texteditor = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [markdownContent, setMarkdownContent] = useState("");
  const [marktotext, setMarktotext] = useState("");
  const [text, setText] = useState("");
  const [formattedText, setFormattedText] = useState("");

  useEffect(() => {
    convertToMarkdownHandler();
    updateFormattedText();
    updateMarkdownToDraft();
  }, [editorState]);

  const updatePlainText = () => {
    const currentPlainText = editorState.getCurrentContent().getPlainText();
    setText(currentPlainText);
  };
  const updateFormattedText = () => {
    const contentState = editorState.getCurrentContent();
    const html = draftToHtml(convertToRaw(contentState)); // Use draftjs-to-html
    setFormattedText(html); // Remove trailing newline
  };
  const convertToMarkdownHandler = () => {
    const contentState = editorState.getCurrentContent();
    const rawContentState = convertToRaw(contentState);
    const newmarkdownContent = draftToMarkdown(rawContentState);
    console.log(newmarkdownContent);
    setMarkdownContent(newmarkdownContent);
  };
  const updatedraftToHtml = (contentState) => {
    const html = draftToHtml(convertToRaw(contentState)); // Use draftjs-to-html
    return html;
  };
  const updateMarkdownToDraft = () => {
    const rawData = markdownToDraft(markdownContent);
    const contentState = convertFromRaw(rawData);
    console.log(contentState);
    const data = updatedraftToHtml(contentState);
    console.log(data);
    setMarktotext(data);
  };
  return (
    <div className="editor">
      <div className="texteditor">
        <h1>Text Editor</h1>
        <Editor
          initialEditorState={editorState}
          onEditorStateChange={(newEditorState) => {
            setEditorState(newEditorState);
            updatePlainText(); // Update plain text whenever editor state changes
            updateFormattedText();
            updateMarkdownToDraft();
          }}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          placeholder="The message goes here..."
        />
      </div>
      <div className="markdowneditor">
        <Markdown markdownContent={markdownContent} marktotext={marktotext} />
      </div>
    </div>
  );
};

export default Texteditor;
