import React from "react";
import PropTypes from 'prop-types';
import ms2Time from "../utils/tool";


const MajorClock = ({milliseconds = 0}) => {

    return <h1>{ms2Time(milliseconds)}</h1>;
};

MajorClock.propTypes = {
    milliseconds: PropTypes.number
};

export default MajorClock;