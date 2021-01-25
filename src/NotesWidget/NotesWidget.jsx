import Note from "./Note/Note";
import "./NotesWidget.css";
require("dotenv").config();

export default function NotesWidget(props) {
  const { notes, onRefresh } = props;

  return (
    <div className="NotesWidget">
      <div className="Header">
        <h2 className="HeaderName">Notes</h2>
        <button
          className="RefreshBtn"
          onClick={() => {
            onRefresh();
          }}
        >
          ↻
        </button>
      </div>
      <div className="Notes">
        {notes.map((el) => (
          <Note
            elem={el}
            key={el.id}
            onRefresh={() => {
              onRefresh();
            }}
          />
        ))}
      </div>
    </div>
  );
}
