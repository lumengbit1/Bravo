import React from 'react'
import Enzyme,{ configure, shallow,mount,render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Footer from '../components/Footer'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom';

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

describe('render snapshop testing',()=>{
    it('renders correctly', () => {
        let wrapper, store;
        const middlewares = [thunk];
        const mockStore = configureMockStore(middlewares);
        store=mockStore();
        wrapper = render(
            <Provider store={store} >
                <Router>
                    <Footer />
                </Router>
            </Provider>);
        
                                     
        expect(wrapper).toMatchSnapshot();
      });
})