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

function App() {
  return (
    <Router>
          <Switch>
          <Route path="/tags">
            <Tags />
          </Route>
          <Route path="/money">
            <Money/>
          </Route>
          <Route path="/statistics">
            <Statistics />
          </Route>
          <Redirect exact from="/" to="/money" />
          {/*先对前面的路径进行匹配，除了上面这些路径之外，剩下的所有其它路径，都显示为找不到内容。*/}
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
    </Router>
  );
}
export default App