import React from 'react';
import Header from './Header';
import KegList from './KegList';
import { Switch, Route } from 'react-router-dom';
import NewKegForm from './NewKegForm';
import EditKegForm from './EditKegForm';
import Error404 from './Error404';

class App extends React.Component {
  return (
    <div>
      <style jsx global>{`
        body {
          background-image: url(https://www.toptal.com/designers/subtlepatterns/patterns/wavy-dots.png);
        }
      `}</style>
      <Header/>
      <Switch>
        <Route exact path='/' component={KegList} />
        <Route path='/new-keg' component={NewKegForm} />
        <Route path='/edit-keg' component={EditKegForm} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
