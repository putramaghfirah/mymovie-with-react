import React from 'react';
import { GlobalStyle } from '../style/GlobalStyle';
import { Navbar } from '../components/Navbar/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { NotFound } from './NotFound';
import { PostList } from './PostList';
import { Post } from './Post';

export function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={PostList} />
          <Route exact path="/login" component={Post} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
      <GlobalStyle />
    </React.Fragment>
  );
}
