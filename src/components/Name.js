import React from 'react';
import {wishes} from './wishes'


export class Name extends React.Component {


  render() {
 
    let hi = Math.round(Math.random()*wishes.length);

    
const {name} = this.props
    return (
      <div>
        <h1>Hey, my name is {name}!</h1>
        <h2>Don't you think {name}is the prettiest name ever?</h2>
        <h2>Sure am glad that my parents picked {name}!</h2>
        <p>{wishes[hi]}</p>

      </div>
    );
  }
}
