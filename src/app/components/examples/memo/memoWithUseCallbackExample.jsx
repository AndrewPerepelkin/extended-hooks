import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";

const LogOutButton = ({ onLogOut }) => {
    useEffect(() => {
        // console.log("render button");
    });

    return (
        <button className="btn btn-primary mx-3" onClick={onLogOut}>
            LogOut
        </button>
    );
};
LogOutButton.propTypes = {
    onLogOut: PropTypes.func
};

function areEqual(prev, next) {
    if (prev.onLogOut !== next.onLogOut) return false;
    return true;
}

const MemoizedLogOutButton = React.memo(LogOutButton, areEqual);

const MemoWithUseCallbackExample = (props) => {
    const [state, setState] = useState(false);
    const handleLogOut = useCallback(() => {
        localStorage.removeItem("auth");
    }, [props]);
    return (
        <>
            <p>State: {state.toString()}</p>
            <MemoizedLogOutButton onClick={handleLogOut} />
            <button
                className="btn btn-primary"
                onClick={() => setState(!state)}
            >
                Initiate Rerender
            </button>
        </>
    );
};

export default MemoWithUseCallbackExample;
