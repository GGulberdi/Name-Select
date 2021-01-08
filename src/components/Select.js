import React from 'react';
import {names} from './names'

    export class Select extends React.Component {
  constructor(props){
    super(props)
     

    this.handleChange=this.handleChange.bind(this)
}
    

     handleChange(e){
      this.props.changeName(e.target.value)
      }


  render() {
    
    
    return (
      <div>
        <h1>Pickup a name :</h1>
        <select onChange={this.handleChange} id="great-names">
          {names.map((item,index)=>{
            return <option key={index}>{item}</option>
          })}
          <option value="Cornelius">Cornelius</option>
          <option value="Philomena">Philomena</option>
          <option value="Rhythm">Rhythm</option>
        </select>
      </div>
    );
  }
}