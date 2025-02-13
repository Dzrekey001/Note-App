function Note({ note, toggleHandler }) {
    const label = note.important ? "Mark not Important" : "Mark Important";

    return (
        <>
            <li className="note">
                {note.content}
                <button onClick={toggleHandler}>{label}</button>
            </li>
        </>
    )
}

export default Note;