import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
 
import App from './../App';
 
import Header from './../components/Header';
import Content from './../components/Content';
import Footer from './../components/Footer';


const Root = () => (
    <div>
       <Switch>
          <Route
             path='/'
             render={props => (
                <App>
                   <Switch>
                      <Route path='/' exact component={Content} />
                      <Route path='/Program' component={Content} />
                      <Route path='/Partners' component={Content} />
                      <Route path='/Locations' component={Content} />
                      <Route path='/AboutMXDC' component={Content} />
                      <Route path='/Contactus' component={Content} />
                      <Route render={() => <Redirect to="/" />} />
                   </Switch>
                </App>
             )}
          />
       </Switch>
    </div>
 );
  

 export default Root;

