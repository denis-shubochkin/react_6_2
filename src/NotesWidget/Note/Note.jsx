import "./Note.css";

export default function Note(props) {
  const { elem, onRefresh } = props;

  const onDelHandler = (e) => {
    fetch(`http://localhost:7777/notes/${e.target.id}`, {
      method: "DELETE",
    }).then((response) => {
      response.status === 204 ? onRefresh() : console.log("err");
    });
  };
  return (
    <div className="Note">
      <button className="DelBtn" id={elem.id} onClick={onDelHandler}>
        ✖
      </button>
      <div className="Text">{JSON.parse(elem.data)}</div>
    </div>
  );
}
