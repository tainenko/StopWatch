import React from "react";
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MajorClock from "./MajorClock";

Enzyme.configure({adapter: new Adapter()});


describe('<MajorClock>', () => {
    const majorclock = shallow(<MajorClock/>)
    test('test initial state', () => {
        expect(majorclock.find('h1').text()).toBe('00:00:00.000');
    })
});