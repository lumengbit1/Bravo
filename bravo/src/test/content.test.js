import React from 'react'
import Enzyme,{ configure, shallow,mount,render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Content from './../components/Content'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import sinon from 'sinon'
import {mapStateToProps,mapDispatchToProps} from './../components/Content'
import {getEventList} from "./../Reducers/actions"



Enzyme.configure({ adapter: new Adapter() });

describe('render snapshop testing',()=>{
    it('renders correctly', () => {
        let wrapper, store;
        const middlewares = [thunk];
        const mockStore = configureMockStore(middlewares);
        store=mockStore();
        wrapper = render(
            <Provider store={store} >
                <Router>
                    <Content />
                </Router>
            </Provider>);
        
                                     
        expect(wrapper).toMatchSnapshot();
      });
})

describe('mapStateToProps,mapDispatchToProps Testing',()=>{
    let wrapper, store;
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);
    beforeEach(()=>{
        const initialState = {
            content: 1,
        };
        store=mockStore(initialState);
        wrapper = mount(
            <Provider store={store} >
                <Content />
            </Provider>)
    })

    it('onfetchData Testing',()=>{

        const dispatchSpy = sinon.spy();
        const {onfetchData} = mapDispatchToProps(dispatchSpy);
        onfetchData();
        const expectedAction = getEventList();
        const spyLastCall = dispatchSpy.args[0][0];
        expect(spyLastCall.types).toEqual(expectedAction.types);

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
                <Content />
            </Provider>);
        
                                     
        expect(wrapper).toMatchSnapshot();
      });
})


