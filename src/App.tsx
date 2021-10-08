import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  // eslint-disable-next-line
  Link, Redirect
} from 'react-router-dom';
import Layout from 'components/Layout';

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

function Statistics() {
  return (
    <Layout>
      <h2>统计页面</h2>
    </Layout>
  )
}

function Tags() {
  return (
    <Layout>
      <h2>标签页面</h2>
    </Layout>

);
}

function Money() {
  return (
    <Layout>
      <h2>Money</h2>;
    </Layout>
  )
}
function NoMatch() {
  return <h2>该路径找不到，页面不存在</h2>;
}
export default App