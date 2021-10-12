import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  // eslint-disable-next-line
  Link, Redirect
} from 'react-router-dom';
import Money from './views/Money';
import Statistics from './views/Statistics';
import Tags from './views/Tags';
import NoMatch from './views/NoMatch';
import styled from 'styled-components';
import {Tag} from './views/Tag';

const AppWrapper=styled.div`
  color:#333
`
function App() {
  return (
    <AppWrapper>
      <Router>
          <Switch>
            <Route  exact path="/tags" >
              <Tags />
            </Route>
            <Route  exact path="/tags/:tag" >
              <Tag />
            </Route>
            <Route  exact path="/money" >
              <Money/>
            </Route>
            <Route  exact path="/statistics" >
              <Statistics />
            </Route>
            <Redirect exact from="/" to="/money" />
            {/*先对前面的路径进行匹配，除了上面这些路径之外，剩下的所有其它路径，都显示为找不到内容。*/}
            <Route path="*" >
              <NoMatch />
            </Route>
          </Switch>
      </Router>
    </AppWrapper>
  );
}
export default App