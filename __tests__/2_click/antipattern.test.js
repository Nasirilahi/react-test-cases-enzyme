import React from 'react';
import App, {Factoid} from '../../src/2_click/App';
import {shallow} from "enzyme";


describe('antipattern - click event to update count', function () {
    it('updates vote count in state', function () {
        const wrapper = shallow(<App/>);

        wrapper.find('button').simulate('click');

        expect(wrapper.state().vote).toEqual(2);
    });


    it('updates vote count on the factoid block', function () {
        const wrapper = shallow(<App/>);

        wrapper.setState({vote: 42});

        expect(wrapper.find(Factoid).props().rating).toEqual(42);
    });
});