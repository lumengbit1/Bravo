import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter,Route  } from 'react-router-dom';
import Enzyme, { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Routes from './../router/Routes'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { Provider} from 'react-redux'

Enzyme.configure({ adapter: new Adapter() });

describe('SampleComponent', () => {
    it('should render', () => {
        let store;
        const middlewares = [thunk];
        const mockStore = configureMockStore(middlewares);
        store=mockStore();
        const component = renderer
        .create(
            <Provider store={store} >
                <MemoryRouter>
                    <Routes />
                </MemoryRouter>
            </Provider>
        )
        .toJSON();
  
      expect(component).toMatchSnapshot();
    });

  });