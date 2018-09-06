import React from 'react';
import App, {Factoid} from '../../src/1_component_exists/App';
import {shallow} from "enzyme";

it('displays a fun fact', function () {
    const wrapper = shallow(<App/>);

    expect(wrapper.find(Factoid).exists()).toBeTruthy();
});

it('displays the button to vote', function () {
    const wrapper = shallow(<App/>);

    expect(wrapper.find('button').text()).toEqual('Vote!');
});

it('number of component is one ', function () {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div')).toHaveLength(1)
})