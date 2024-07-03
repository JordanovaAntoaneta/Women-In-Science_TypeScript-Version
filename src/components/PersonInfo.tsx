import React, { useState } from "react";
import { scientist } from "./Scientists";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

export default function PersonInfo() {

    const [index, setIndex] = useState(0);

    let person = scientist[index];

    let hasPrevious = index > 0;
    let hasNext = index < scientist.length - 1;

    function handleNext() {
        if (hasNext) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }

    }

    function handlePrevious() {
        if (hasPrevious) {
            setIndex(index - 1);
        } else {
            setIndex(4);
        }
    }

    return (
        <div className="bckgnd">
            <div className="descripiton">
                <h2>{person.name}</h2>
                <span style={{ fontWeight: 12, fontSize: 12 }}>({index + 1} of {scientist.length})</span>
                <div className="txt">{person.description}</div>
            </div>
            <div className="prev-next">
                <button onClick={handlePrevious} className="button"><GoChevronLeft /></button>
                <button onClick={handleNext} className="button"><GoChevronRight />
                </button>
            </div>

        </div>
    );
}