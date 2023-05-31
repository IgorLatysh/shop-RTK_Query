import React from "react";

const CardButton = ({text}) => {
    return (
        <div className="text-center" type="button">
            <a className="btn btn-outline-dark mt-auto">{text}</a>
        </div>
    )
}
export default CardButton;