import React, { useState, useEffect, MouseEvent, SyntheticEvent, useRef, MutableRefObject } from "react";

interface suggestionProps {
    id: number,
    name: string,
};


function AddScientist() {

    const [index, setIndex] = useState(0);
    const [fullname, setFullName] = useState('');
    const [suggestions, setSuggestions] = useState<suggestionProps[]>([]);
    const [editSuggestion, setEditSuggestion] = useState('');
    const [editMode, setEditMode] = useState<boolean>(false);
    const [editId, setEditId] = useState(0);

    const inputRef = useRef<HTMLInputElement>(null);
    const focusRef = useRef(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedSuggestions = JSON.parse(localStorage.getItem('suggestions')!) || [];
            setSuggestions(storedSuggestions);
            const newIndex = storedSuggestions.length ? storedSuggestions[storedSuggestions.length - 1].id + 1 : 0;
            setIndex(newIndex);

        }
    }, []);

    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem('suggestions', JSON.stringify(suggestions));
        }
    }, [suggestions]);

    function handleAddSuggestion() {

        if (fullname != '') {
            setFullName('');
            setSuggestions([...suggestions, { id: index, name: fullname }]);
            setIndex(index + 1);
        } else {
            alert("Please fill in the box");
        }

    };

    function handleValChange(e: React.ChangeEvent<HTMLInputElement>) {
        e.stopPropagation();
        setFullName(e.target.value);
    };


    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <input placeholder="Enter a full name" value={fullname} ref={focusRef} className="inp2" onChange={handleValChange} />
            <button
                className="button"
                onClick={handleAddSuggestion}
            >
                Add
            </button>
            <div>
                <ul className="list">
                    {suggestions.map((suggestion) => (
                        <li key={suggestion.id}>

                            {

                                (editMode && editId === suggestion.id) ? (
                                    <span>
                                        <input
                                            type="input"
                                            ref={inputRef}
                                            value={editSuggestion}
                                            className='list-input'
                                            onChange={(e) => {
                                                setEditSuggestion(e.target.value);
                                            }} />
                                        <button
                                            className="list-buttons"
                                            onClick={(e) => {
                                                if (window.confirm("Are you sure that you want to change your suggestion?")) {
                                                    setEditMode(!editMode);
                                                    suggestions.map((value: suggestionProps) => {
                                                        if (value.id == suggestion.id) { value.name = editSuggestion }
                                                    });
                                                } else {
                                                    setEditMode(!editMode);
                                                }
                                            }}>
                                            Submit
                                        </button>
                                        <button className="list-buttons" onClick={() => { setEditMode(!editMode) }}>Cancel</button>
                                    </span>

                                ) : (
                                    <span>{suggestion.name}</span>
                                )
                            }

                            <span style={{ margin: 10 }}>
                                <button className="list-buttons"
                                    id="edit-btn"
                                    onClick={(e) => {
                                        if (!editMode) {
                                            setEditMode(!editMode);
                                            setEditId(suggestion.id);
                                            setEditSuggestion(suggestion.name);
                                        }
                                    }}
                                >
                                    Edit
                                </button>
                                <button className="list-buttons"
                                    onClick={(e) => {
                                        if (window.confirm("Are you sure that you want to delete your suggestion?")) {
                                            const updatedSuggestions = suggestions.filter((value: suggestionProps) => value.id != suggestion.id);
                                            setSuggestions(updatedSuggestions);
                                        }
                                    }
                                    }>
                                    Delete
                                </button>
                            </span>

                        </li>
                    ))}
                </ul>
            </div>

        </form >
    );
}

export default AddScientist;