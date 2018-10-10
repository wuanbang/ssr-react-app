import React, { Component } from 'react'; //    eslint-disable-line
import { hot } from 'react-hot-loader';//   eslint-disable-line 
import { Route, Redirect } from 'react-router-dom';
import { Layout } from 'antd';
import TopicList from './topic-list/index';
import TopicDetails from './topic-details/index';
import TopBar from './component/TopBar';

const {
  Header, Footer, Sider, Content,
} = Layout;

class App extends Component {
  render() {
    return (
         <Layout>
            <Header>
                <TopBar />
            </Header>
            <Content>
                <Route path="/" render={() => <Redirect to="/list" />} exact />
                <Route path="/list" component={TopicList} exact />
                <Route path="/topic-details" component={TopicDetails} />
            </Content>
            <Footer>Footer</Footer>
         </Layout>
    );
  }
};
// const App = () => (
// <div>
//     <span>首页</span>
//     <Route path="/" render={() => <Redirect to="/list" />} exact />
//     <Route path="/list" component={TopicList} exact />
//     <Route path="/topic-details" component={TopicDetails} />
// </div>
// );


export default hot(module)(App);