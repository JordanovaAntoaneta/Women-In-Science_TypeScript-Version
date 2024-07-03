import React from "react";
import { useReducer } from "react";
import AddScientist from "./AddScientist";

function SuggestScientists() {



    return (
        <div className="bckgnd">
            <h1>Suggest other scientists:</h1>
            <AddScientist />
        </div>
    );
}

export default SuggestScientists;