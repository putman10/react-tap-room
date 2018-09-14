import React from 'react';
import Header from './Header';
import KegList from './KegList';
import { Switch, Route } from 'react-router-dom';
import NewKegForm from './NewKegForm';
import EditKegForm from './EditKegForm';
import Error404 from './Error404';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterKegList: [
        {
          name: 'Dragon Fruit',
          brand: 'Happy Mountain',
          price: '5',
          alcoholContent: '.05',
          pintsLeft: '143'
        },
        {
          name: 'Strawberry Melon',
          brand: 'Happy Mountain',
          price: '6',
          alcoholContent: '.05',
          pintsLeft: '121'
        },
        {
          name: 'Dragon Fruit',
          brand: 'Stormy Lake',
          price: '9',
          alcoholContent: '.03',
          pintsLeft: '53'
        },
        {
          name: 'Dragon Fruit',
          brand: 'Angry River',
          price: '4',
          alcoholContent: '.02',
          pintsLeft: '89'
        }
      ]
    };
  }

  render(){

    return (
      <div>
        <style jsx global>{`
          body {
            background-image: url(https://www.toptal.com/designers/subtlepatterns/patterns/wavy-dots.png);
          }
        `}</style>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><KegList kegList={this.state.masterKegList} />}/>
          <Route path='/new-keg' component={NewKegForm} />
          <Route path='/edit-keg' component={EditKegForm} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
