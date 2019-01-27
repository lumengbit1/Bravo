import React from 'react'
import Enzyme,{ configure, shallow,mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import counter from './../reducers/reducer'
import * as actions from './../reducers/actions'
import * as types from './../reducers/constants'
import { Provider} from 'react-redux'
import Content from './../components/Content'
import sinon from 'sinon'
import {mapStateToProps,mapDispatchToProps} from './../components/Content'
import Header from './../components/Header'



Enzyme.configure({ adapter: new Adapter() });
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
    it('should create an action to fetch data', () => {
        const expectedAction = {
            type: types.FETCHDATA_ACTION,
        }
        expect(actions.initListAction()).toEqual(expectedAction)
    })
})

describe('Test reducer', () => {
    it('should return the initial state', () => {
        const initialState = {
            fetchdata: null,
        };
        expect(counter(undefined, {})).toEqual(initialState)
    })
})

describe('async actions', () => {
    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
    })
  
    it('creates FETCH_TODOS_SUCCESS when fetching todos has been done', () => {
        fetchMock
        .getOnce('https://s3-ap-southeast-2.amazonaws.com/studiobravo/FED+Project/events.json', { body: { todos: ['do something'] }, headers: { 'content-type': 'application/json' } })
  
      const expectedActions = [
        { type: types.FETCHDATA_ACTION, data: { todos: ['do something']  } }
      ]
      const store = mockStore({ todos: [] })
  
        return store.dispatch(actions.getEventList()).then(()=>{
            expect(store.getActions()).toEqual(expectedActions)
        })
        
    })
  })

  describe(`Test render`, () => {
    const warpper = shallow(<Header />);
    it('1. Include 4 <img>',()=>{
        expect(warpper.find('img').length).toBe(4);
    })

    it('2. Include 10 <a>', () => {
        expect(warpper.find('a').length).toBe(10);
    })

})