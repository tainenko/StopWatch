import React from "react";
import MajorClock from "./MajorClock";
import PropTypes from "prop-types";

const SplitTimes = ({value = []}) => {
    return value.map((v, k) => (
        <MajorClock className="clock" key={k} milliseconds={v}/>
    ))
};

SplitTimes.propTypes={
    value:PropTypes.array.isRequired,
};

export default SplitTimes;