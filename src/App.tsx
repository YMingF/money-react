import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link, Redirect
} from 'react-router-dom';
function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/tags">标签</Link>
            </li>
            <li>
              <Link to="/money">记账</Link>
            </li>
            <li>
              <Link to="/statistics">统计</Link>
            </li>
          </ul>
        </nav>

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
      </div>
    </Router>
  );
}

function Statistics() {
  return <h2>Statistics</h2>;
}

function Tags() {
  return <h2>Tags</h2>;
}

function Money() {
  return <h2>Money</h2>;
}
function NoMatch() {
  return <h2>该路径找不到，页面不存在</h2>;
}
export default App