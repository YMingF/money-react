import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  // eslint-disable-next-line
  Link, Redirect
} from 'react-router-dom';
import styled from 'styled-components';
import  Nav from 'components/Nav'
const Wrapper=styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
   
`
const Main=styled.div`
    flex-grow: 1;
    overflow: auto;
`

function App() {
  return (
    <Router>
      <Wrapper>
        <Main>
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
        </Main>
        <Nav />
      </Wrapper>
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