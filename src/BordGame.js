import ColumnItem from "./ColumnItem";
import {useState} from "react";

const COLUMN_GAME = [1, 2, 3, 4, 5, 6, 7];
const BordGame = () => {
    const [turn, setTurn] = useState(0);
    const [clicked, setClicked] = useState(0);
    const bord = []

    function anyClicked() {
        const copy = bord;
        let counter = 0;
        copy.map(item => item.map((bordItem) => bordItem.target.getAttribute("data-clicked") && counter++));
        console.log(counter);
        if (clicked < counter) {
            setClicked(counter);
            return true;
        }
        return false;
    }

    const flip = () => {
        anyClicked() && setTurn(turn + 1);
    }


    COLUMN_GAME.map((c) => bord.push(ColumnItem({turn: turn, column: c, onClick: {flip}})))


    return (
        <div className={"game"}>
            {bord}
        </div>
    )
}
export default BordGame;