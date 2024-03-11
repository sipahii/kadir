import React, { useState, useEffect } from "react";
import {
  Editor,
  EditorState,
  ContentState,
  RichUtils,
  convertFromHTML,
  Modifier,
} from "draft-js";
import { stateToHTML } from "draft-js-export-html";
import "draft-js/dist/Draft.css";
import "./TextEditor.css";

const TextEditor = ({ productDescription, handleData }) => {
  const [editorState, setEditorState] = useState(() => {
    const blocksFromHTML = convertFromHTML(productDescription || "");
    const initialContentState = ContentState.createFromBlockArray(
      blocksFromHTML.contentBlocks,
      blocksFromHTML.entityMap
    );
    return EditorState.createWithContent(initialContentState);
  });

  const focusEditor = () => editorRef.current.focus();

  const onChange = (newEditorState) => {
    setEditorState(newEditorState);
    const htmlValue = stateToHTML(newEditorState.getCurrentContent());
    handleData(htmlValue);
  };

  const handleKeyCommand = (command, editorState) => {
    if (command === "delete") {
      // Handle the "Delete" key
      const selection = editorState.getSelection();
      const contentState = editorState.getCurrentContent();
      const currentBlock = contentState.getBlockForKey(selection.getStartKey());

      if (currentBlock) {
        const startOffset = selection.getStartOffset();
        const endOffset = selection.getEndOffset();

        if (startOffset === 0 && endOffset === currentBlock.getLength()) {
          // If the whole content is selected, clear the content
          const newContentState = Modifier.removeRange(
            contentState,
            selection,
            "forward"
          );

          const newEditorState = EditorState.push(
            editorState,
            newContentState,
            "remove-range"
          );
          onChange(newEditorState);
        } else {
          // Handle other cases as needed
          // For simplicity, we can just use RichUtils.handleKeyCommand
          const newState = RichUtils.handleKeyCommand(editorState, command);
          if (newState) {
            setEditorState(newState);
          }
        }

        return "handled";
      }
    }

    // Handle other key commands as needed
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return "handled";
    }

    return "not-handled";
  };

  const toggleBlockType = (blockType) => {
    onChange(RichUtils.toggleBlockType(editorState, blockType));
  };

  const toggleInlineStyle = (inlineStyle) => {
    onChange(RichUtils.toggleInlineStyle(editorState, inlineStyle));
  };

  const editorRef = React.createRef();

  let className = "RichEditor-editor";
  const contentState = editorState.getCurrentContent();

  if (!contentState.hasText()) {
    if (contentState.getBlockMap().first().getType() !== "unstyled") {
      className += " RichEditor-hidePlaceholder";
    }
  }

  return (
    <div className="RichEditor-root">
      {/* Block and Inline Style Controls */}
      <div className="RichEditor-controls">
        <BlockStyleControls
          editorState={editorState}
          onToggle={toggleBlockType}
        />
        <InlineStyleControls
          editorState={editorState}
          onToggle={toggleInlineStyle}
        />
      </div>

      <div className={className} onClick={focusEditor}>
        <Editor
          blockStyleFn={getBlockStyle}
          customStyleMap={styleMap}
          editorState={editorState}
          handleKeyCommand={handleKeyCommand}
          // keyBindingFn={mapKeyToEditorCommand}
          onChange={onChange}
          // placeholder="Tell a story..."
          ref={editorRef}
          spellCheck={true}
          placeholder="Type here..."
        />
      </div>
    </div>
  );
};
function getBlockStyle(block) {
  switch (block.getType()) {
    case "blockquote":
      return "RichEditor-blockquote";
    default:
      return null;
  }
}
const styleMap = {
  CODE: {
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2,
  },
};
const BlockStyleControls = (props) => {
  const { editorState } = props;
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

  return (
    <div className="RichEditor-controls">
      {BLOCK_TYPES.map((type) => (
        <StyleButton
          key={type.label}
          active={type.style === blockType}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      ))}
    </div>
  );
};

var INLINE_STYLES = [
  { label: "Bold", style: "BOLD" },
  { label: "Italic", style: "ITALIC" },
  { label: "Underline", style: "UNDERLINE" },
  { label: "Monospace", style: "CODE" },
];

const InlineStyleControls = (props) => {
  const currentStyle = props.editorState.getCurrentInlineStyle();

  return (
    <div className="RichEditor-controls">
      {INLINE_STYLES.map((type) => (
        <StyleButton
          key={type.label}
          active={currentStyle.has(type.style)}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      ))}
    </div>
  );
};

const BLOCK_TYPES = [
  { label: "H1", style: "header-one" },
  { label: "H2", style: "header-two" },
  { label: "H3", style: "header-three" },
  { label: "H4", style: "header-four" },
  { label: "H5", style: "header-five" },
  { label: "H6", style: "header-six" },
  { label: "Blockquote", style: "blockquote" },
  { label: "UL", style: "unordered-list-item" },
  { label: "OL", style: "ordered-list-item" },
  { label: "Code Block", style: "code-block" },
];

class StyleButton extends React.Component {
  constructor() {
    super();
    this.onToggle = (e) => {
      e.preventDefault();
      this.props.onToggle(this.props.style);
    };
  }

  render() {
    let className = "RichEditor-styleButton";
    if (this.props.active) {
      className += " RichEditor-activeButton";
    }

    return (
      <span className={className} onMouseDown={this.onToggle}>
        {this.props.label}
      </span>
    );
  }
}
// ... (BlockStyleControls, INLINE_STYLES, styleMap, getBlockStyle, StyleButton)

export default TextEditor;
