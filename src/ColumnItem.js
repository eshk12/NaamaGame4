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
    const getUp = () => setButtonPlace(buttonPlace - 1);
    const set = () => {
        if (buttonPlace >= 0) {
            getUp();
            setColor();
            props.setIsClicked((perv) => !perv);
            props.setActiveKey((perv) => [...perv, [props.column,buttonPlace]])
        }
    }
    const setColor = () => {

        console.log(props.turn);
        let nDataColor = dataColor;
        nDataColor[buttonPlace] = props.turn%2 ? 0 : 1;
        setDataColor(nDataColor);
    }

    const printColor = (r) => {
        let result = "";
        if(dataColor[r] === 0) {
            result =  "bordItem player1-circle";
        }else if(dataColor[r] == 1) {
            result =  "bordItem player2-circle";
        }else{
            result = "bordItem circle";
        }
        return result;
    }

    return (
        <div className={"group"}>
            <button
                className={props.column + "group"}
                onClick={set}
            >
                Click here for this column
            </button>
            {
                ROW.map((r, key) => {
                    return (
                        <BordItem
                            key={key}
                            dataColor={dataColor[r]}
                            className={printColor(r)}
                            column={props.column}
                            row={r}
                        />
                    )
                })
            }
        </div>
    )
}

export default ColumnItem;

