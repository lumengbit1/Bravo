import React from 'react'
import Enzyme,{ configure, shallow,mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Footer from './../components/Footer'

Enzyme.configure({ adapter: new Adapter() });

describe(`Test render`, () => {
    const warpper = shallow(<Footer />);
    it('1. Include 1 <img>',()=>{
        expect(warpper.find('img').length).toBe(1);
    })

    it('2. Include 4 <a>', () => {
        expect(warpper.find('a').length).toBe(4);
    })
    it('3. Include 3 <div>',()=>{
        expect(warpper.find('div').length).toBe(3);
    })

})