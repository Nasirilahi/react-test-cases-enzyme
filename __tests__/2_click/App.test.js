import React from 'react';
import App, {Factoid} from '../../src/2_click/App';
import {shallow} from "enzyme";

describe('click event to update count', function () {
    it('updates vote count on screen', function () {
        const wrapper = shallow(<App/>);

        wrapper.find('button').simulate('click');

        expect(wrapper.find('.number-of-votes').text()).toEqual('2');
    });

    it('updates vote count on the factoid block', function () {
        const wrapper = shallow(<App/>);

        wrapper.find('button').simulate('click');

        expect(wrapper.find(Factoid).props().rating).toEqual(2);
    });
});