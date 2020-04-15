import React from "react";

const AddedFeature = (props) => {
    console.log(props.feature);
    return (
        <li>
            {/* Add an onClick to run a function to remove a feature */}
            <button
                onClick={(item) => props.feature.removeFeature(item)}
                className="button"
            >
                X
            </button>
            {props.feature.name}
        </li>
    );
};

export default AddedFeature;
