import React, { useRef, useEffect } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";

const ProgrammableActionsExample = () => {
    const inputRef = useRef();
    const buttonRef = useRef();
    useEffect(() => {
        buttonRef.current.style.marginLeft = "10px";
    }, []);

    const handleClick = () => {
        inputRef.current.focus();
    };
    const handleClickWidthChange = () => {
        inputRef.current.style.width = "300px";
    };
    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <Divider />
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                type="text"
                name="email"
                id="email"
                ref={inputRef}
                className="form-control mr-2 mb-3 "
            />
            <button onClick={handleClick} className="btn btn-primary">
                Focus Input
            </button>
            <button
                onClick={handleClickWidthChange}
                className="btn btn-primary"
                ref={buttonRef}
            >
                Change Input Width
            </button>
        </CardWrapper>
    );
};

export default ProgrammableActionsExample;
