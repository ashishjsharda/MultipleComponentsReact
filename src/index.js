import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class List extends Component {
  render() {
    return(
      <ol>
        <li> Oil</li>
        <li> Shampoo</li>
      </ol>

    )
  }
}

class Title extends Component {

  render(){
    return <h1> List of Tasks</h1>
    
  }

}

class Main extends Component{
  render(){
    return<div>

<Title />
<List />
    </div> 
    
  }
}
ReactDOM.render(
  <Main/>,
  document.getElementById('root')
);

