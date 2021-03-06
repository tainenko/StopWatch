import React from "react";
import PropTypes from "prop-types";


const ControlButton = (props) => {
    const {activated, onStart, onPause, onReset, onSplit} = props;
    if (activated) {
        return (
            <div>
                <button className="left-btn" onClick={onSplit}>計次</button>
                <button className="right-btn" onClick={onPause}>停止</button>
            </div>
        )
    } else {
        return (
            <div>
                <button className="left-btn" onClick={onReset}>復位</button>
                <button className="right-btn" onClick={onStart}>啟動</button>
            </div>
        )
    }

};
ControlButton.propTypes = {
    activated: PropTypes.bool.isRequired,
    onStart: PropTypes.func.isRequired,
    onPause: PropTypes.func.isRequired,
    onReset: PropTypes.func.isRequired,
    onSplit: PropTypes.func.isRequired,
};

export default ControlButton;
