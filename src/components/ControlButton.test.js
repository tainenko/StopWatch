import React from "react";
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ControlButton from "./ControlButton";

Enzyme.configure({adapter: new Adapter()});
describe('<ControlButton>', () => {
    const controlbutton = shallow(<ControlButton activated={true} onStart={() => {
    }} onPause={() => {
    }} onReset={() => {
    }} onSplit={() => {
    }}/> );
    test('test ControlButton render', () => {
        expect(controlbutton.find('div').find('button').at(0).text()).toBe("計次");
        expect(controlbutton.find('div').find('button').at(1).text()).toBe("停止");
    });

});