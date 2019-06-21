import React from "react"


function btnXClicked() {
    alert("X!")
}



class App extends React.Component {

    constructor(){
        super()
        this.state = {
            count: 0,
            answer: "Yes"
        }
        this.countClicked = this.countClicked.bind(this)
    }

  sum(a,b){
    return a + b
  }

  btnYClicked() {
    alert("Y!")
  }

  countClicked() {
    // setState wont work if dont add bint to class in the constructor
    this.setState((prevState) => { // prevState in prev(current) version of state object
      return {
        count: prevState.count + 1
      }
    }) 
    // equals to =>  this.setState({count: this.state.count + 1}) 
  }
  
  

  render(){
    const s = this.sum(5,5)
    return (
      <div>
          <h1>Hi, sum is {s}</h1>
          <h3>if want to use [props] in a class, must write [this.props], also no need to defile props in function params</h3>
            <h2>answer is {this.state.answer}</h2>
            <button onClick={function() { alert("hi!")}}>Click Me!</button>
            <br /><br />
            <button onMouseOver={function() { alert("hi!")}}>hover Me!</button>
            <br /><br />
            <button onClick={btnXClicked}>Click Me3!</button>
            <br /><br />
            <button onClick={this.btnYClicked}>Click Me3!</button>
            <br /><br /><br /><br />
            <h1>{this.state.count}</h1>
            <button onClick={this.countClicked}>Add</button>

      </div>
    )
  }
}

export default App;
