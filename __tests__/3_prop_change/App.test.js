import React from 'react';
import {shallow} from "enzyme";
import Factoid from "../../src/3_prop_change/Factoid";

describe('Factoid', function () {
    it('displays the rating passed on props', function () {
        const wrapper = shallow(<Factoid rating={2}/>);

        expect(wrapper.text()).toContain('This fact is rated at 2 out of 5');
        expect(wrapper.find('.golden-star').length).toEqual(2);
    });
});