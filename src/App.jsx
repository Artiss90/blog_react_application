import AppBar from 'Components/AppBar/AppBar';
import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import AllPostView from 'views/AllPostView';
import HomeView from 'views/HomeView';
import SpecificPostView from 'views/SpecificPostView';

function App() {
  return (
    <div>
      <AppBar />
      <Suspense fallback={<h2>Loading...</h2>}>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/posts" component={AllPostView} />
          <Route path="/posts/:id" component={SpecificPostView} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
