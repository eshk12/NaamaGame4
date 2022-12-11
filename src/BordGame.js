import ColumnItem from "./ColumnItem";
import {useEffect, useState} from "react";


const BordGame = () => {
    const [turn, setTurn] = useState(0);
    const [activeKey, setActiveKey] = useState([])
    const [isClicked, setIsClicked] = useState(false);
    const COLUMN_GAME = [1,2,3,4,5,6,7]; // 7
    const ROW_GAME = 5;


    useEffect(() => {
        setTurn( turn+1);
        let counter = 0;
    },[isClicked]);


    return (
        <div className={"game"}>
            {COLUMN_GAME.map((item, key) => {
                return (
                    <ColumnItem
                        key={key}
                        turn={turn}
                        column={item}
                        setIsClicked={setIsClicked}
                        setActiveKey={setActiveKey}
                    />
                )
            })}
        </div>
    )
}
export default BordGame;
