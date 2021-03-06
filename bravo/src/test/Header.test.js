import React from 'react'
import Enzyme,{ configure, shallow,mount,render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from './../components/Header'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import sinon from 'sinon'


Enzyme.configure({ adapter: new Adapter() });

  describe(`Test render`, () => {
    const warpper = shallow(<Header />);
    it('1. Include 4 <img>',()=>{
        expect(warpper.find('img').length).toBe(4);
    })

    it('2. Include 10 <a>', () => {
        expect(warpper.find('a').length).toBe(10);
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
                    <Header />
                </Router>
            </Provider>);
        
                                     
        expect(wrapper).toMatchSnapshot();
      });
})

