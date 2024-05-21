// List.jsx

import React, { useState } from "react";

export default function List({ arr, deleteElement, editElement }) {
    const [editIndex, setEditIndex] = useState(null);
    const [editText, setEditText] = useState("");

    const handleEditClick = (index, text) => {
        setEditIndex(index);
        setEditText(text);
    };

    const handleEditChange = (event) => {
        setEditText(event.target.value);
    };

    const handleEditSubmit = (index) => {
        editElement(index, editText); // Pass the edited text to the editElement function
        setEditIndex(null);
        setEditText("");
    };

    return (
        <div className="list">
            <ul>
                {arr.map((element, index) => (
                    <li key={index}>
                        {editIndex === index ? (
                            <>
                                <input
                                    type="text"
                                    value={editText}
                                    onChange={handleEditChange}
                                />
                                <button onClick={() => handleEditSubmit(index)}>Save</button>
                            </>
                        ) : (
                            <>
                                {element}
                                <button onClick={() => deleteElement(index)}>Delete</button>
                                <button onClick={() => handleEditClick(index, element)}>Edit</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}


//1.)  We can't use traditional loops in REACT. arr.map is an amazing way to traverse the arrays in REACT.
// 2.) It is mendatory to wrap this deleteElement(index) function inside an arrow function. Else it will execute just after page rendering means nothing will be added in the list.


