import React, { useState, useRef, useEffect, useCallback } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const [data, setData] = useState({});
    const handlerChange = ({ target }) => {
        setData((prev) => ({ ...prev, [target.name]: target.value }));
    };

    // Without useCallback
    const withoutCallback = useRef(0);
    const validateWithoutCallback = (data) => {
        // console.log(data);
    };
    useEffect(() => {
        withoutCallback.current++;
    }, [validateWithoutCallback]);

    // With useCallback
    const withCallback = useRef(0);
    const validateWithCallback = useCallback((data) => {
        // console.log(data);
    }, []);
    useEffect(() => {
        withCallback.current++;
    }, [validateWithCallback]);

    useEffect(() => {
        validateWithoutCallback(data);
        validateWithCallback(data);
    }, [data]);

    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <p>Render without useCallback: {withoutCallback.current}</p>
            <p>Render with useCallback: {withCallback.current}</p>
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                type="text"
                name="email"
                id="email"
                className="form-control mr-2 mb-3"
                onChange={handlerChange}
                value={data.email || ""}
            />
        </CardWrapper>
    );
};

export default UseCallBackExample;
