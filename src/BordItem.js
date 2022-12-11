import React, {useState} from "react";
import "./bordItem-style.css";

const BordItem = (props) => {
    return (
        <div className={"bordItem rec"}>
            <div className={props.className} data-color={props.dataColor} data-clicked={props.dataColor !== -1}
                 data-location={"c" + props.column + "r" + props.row}>
            </div>
        </div>
    )
}
export default BordItem;
