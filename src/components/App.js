import React from 'react';
import { Select } from './Select';
import { Name } from './Name';


export class App extends React.Component {
constructor(props){
  super(props)
  this.state={
    name:''
  }
  this.changeName=this.changeName.bind(this)
}  

changeName(e){
  this.setState({
    name:e
  })
}

fromNames(e){
console.log(e)
  this.Setstate({

})
}
  render() {
    return (
      <div>
        <Select changeName={this.changeName}/>
        <Name name={this.state.name}/>
      </div>
    );
  }
}

