import React, {useState} from "react";
import "./bordItem-style.css";
import BordItem from "./BordItem";

const ROW = [0, 1, 2, 3, 4, 5];
const ColumnItem = (props) => {
    const [className, setClassName] = useState([
        "bordItem circle", "bordItem circle",
        "bordItem circle", "bordItem circle",
        "bordItem circle", "bordItem circle"
    ]);
    const [dataColor, setDataColor] = useState([-1, -1, -1, -1, -1, -1])
    const [buttonPlace, setButtonPlace] = useState(ROW.length - 1);
    const elementBord = getElements();
    const getUp = () => setButtonPlace(buttonPlace - 1);
    const set = () => {
        getUp();
        setClass(setColor());
    }
    const setColor = () => {
        setDataColor(props.turn);
        console.log(props.turn);
        return props.turn % 2 === 1 ? "bordItem player1-circle" : "bordItem player2-circle";
    }
    const setClass = (name) => {
        const newArr = className;
        newArr[buttonPlace] = name;
        setClassName(newArr);
    }


    function getElements() {
        let array = [];
        ROW.map((r) => array.push(BordItem({
            dataColor: dataColor[r],
            className: className[r],
            column: props.column,
            row: r
        })));
        return array;
    }

    return (
        <div className={"group"}>
            <button className={props.column + "group"} onClick={ buttonPlace >= 0  && set }>Click here for this column
            </button>
            {elementBord}
        </div>
    )
}

export default ColumnItem;

