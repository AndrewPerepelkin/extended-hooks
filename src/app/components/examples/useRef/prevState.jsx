import React, { useRef, useState, useEffect } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const PrevStateExample = () => {
    const previousState = useRef("");
    const [otherState, setOtherState] = useState("false");

    const toggleOtherStateHandler = () => {
        setOtherState((prevState) =>
            prevState === "false" ? "true" : "false"
        );
    };

    useEffect(() => {
        previousState.current = otherState;
    }, [otherState]);

    return (
        <CardWrapper>
            <SmallTitle>Предыдущее состояние</SmallTitle>
            <p>Предыдущее состояние: {previousState.current}</p>
            <p>Текущее состояние: {otherState}</p>
            <button
                className="btn btn-primary"
                onClick={toggleOtherStateHandler}
            >
                Toggle Other State
            </button>
        </CardWrapper>
    );
};

export default PrevStateExample;
