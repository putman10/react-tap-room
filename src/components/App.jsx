import React from 'react';
import Header from './Header';
import KegList from './KegList';
import { Switch, Route } from 'react-router-dom';
import NewKegControl from './NewKegControl';
import Admin from './Admin';
import Error404 from './Error404';
import { v4 } from 'uuid';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterKegList: {
        '1' : {
          name: 'Dragon Fruit',
          brand: 'Happy Mountain',
          id: '1',
          price: '5',
          alcoholContent: '.05',
          pintsLeft: '143'
        },
        '2' : {
          name: 'Strawberry Melon',
          brand: 'Happy Mountain',
          id: '2',
          price: '6',
          alcoholContent: '.05',
          pintsLeft: '121'
        },
        '3' : {
          name: 'Dragon Fruit',
          brand: 'Stormy Lake',
          id: '3',
          price: '10',
          alcoholContent: '.03',
          pintsLeft: '53'
        },
        '4' : {
          name: 'Dragon Fruit',
          brand: 'Angry River',
          id: '4',
          price: '4',
          alcoholContent: '.02',
          pintsLeft: '89'
        }
      },
      kegForEditing: null
    };
    this.handleAddNewKeg = this.handleAddNewKeg.bind(this);
    this.handleEditKeg = this.handleEditKeg.bind(this);
    this.handleDeleteKeg = this.handleDeleteKeg.bind(this);
  }

  handleAddNewKeg(newKeg){
    var newKegId = v4();
    let newKegList = Object.assign({}, this.state.masterKegList, {
      [newKegId]: newKeg
    });
    this.setState({masterKegList: newKegList});
  }

  handleDeleteKeg(id){
    let newKegList = this.state.masterKegList;
    delete newKegList[id];
    this.setState({masterKegList: newKegList});
  }

  handleEditKeg(id){
    let selectedKeg = Object.assign({}, this.state.masterKegList[id], {});
    this.setState({kegForEditing: selectedKeg});
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
          <Route path='/admin' render={(props)=><Admin kegList={this.state.masterKegList} currentRouterPath={props.location.pathname}onDeleteKeg={this.handleDeleteKeg}
          onEditKeg={this.handleEditKeg}
          selectedKeg={this.state.kegForEditing}
          />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
