import { useState } from "react";
import "./NotesForm.css";

export default function NotesForm(props) {
  const { Refresh } = props;

  const [input, SetInput] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  const onChangeInput = (e) => {
    SetInput(e.target.value);
  };

  const onSendNote = () => {
    if (input !== "") {
      fetch("http://localhost:7777/notes", {
        method: "POST", // или 'PUT'
        body: JSON.stringify(input),
      }).then(() => {
        SetInput("");
        Refresh();
      });
    }
  };

  return (
    <form className="NotesForm" onSubmit={onSubmitHandler}>
      <span className="Label">Input your note:</span>
      <div className="InputArea">
        <textarea
          className="NotesInput"
          value={input}
          onChange={onChangeInput}
        ></textarea>
        <button className="SendBtn" onClick={onSendNote}>
          ➤
        </button>
      </div>
    </form>
  );
}
