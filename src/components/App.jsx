import React from 'react';
import Header from './Header';
import KegList from './KegList';
import { Switch, Route } from 'react-router-dom';
import NewKegControl from './NewKegControl';
import Admin from './Admin';
import Error404 from './Error404';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterKegList: {
        '1' : {
          name: 'Dragon Fruit',
          brand: 'Happy Mountain',
          price: '5',
          alcoholContent: '.05',
          pintsLeft: '143'
        },
        '2' : {
          name: 'Strawberry Melon',
          brand: 'Happy Mountain',
          price: '6',
          alcoholContent: '.05',
          pintsLeft: '121'
        },
        '3' : {
          name: 'Dragon Fruit',
          brand: 'Stormy Lake',
          price: '10',
          alcoholContent: '.03',
          pintsLeft: '53'
        },
        '4' : {
          name: 'Dragon Fruit',
          brand: 'Angry River',
          price: '4',
          alcoholContent: '.02',
          pintsLeft: '89'
        }
      }
    };
    this.handleAddNewKeg = this.handleAddNewKeg.bind(this);
  }

  handleAddNewKeg(newKeg){
    let newKegList = Object.assign({}, this.state.masterKegList, {
      [newKeg.id]: newKeg
    });
    this.setState({masterKegList: newKegList});
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
          <Route exact path='/' render={()=><KegList kegList={this.state.masterKegList} />} />
          <Route path='/new-keg' render={()=><NewKegControl onNewKegCreation={this.handleAddNewKeg} />}/>
          <Route path='/admin' render={(props)=><Admin kegList={this.state.masterKegList} currentRouterPath={props.location.pathname}/>} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
