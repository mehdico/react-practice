import React from "react"


function btnXClicked() {
    alert("X!")
}



class App extends React.Component {

    constructor(){
        super()
        this.state = {
            count: 0,
            answer: "Yes",
            isLoading: true,
            isLoggedIn: false,
        }
        this.countClicked = this.countClicked.bind(this)
        this.logInOurClicked = this.logInOurClicked.bind(this)
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
  logInOurClicked() {
    this.setState(prevState => {
        return {
            isLoggedIn: !prevState.isLoggedIn
        }
    })
  }
  // LYFECYCLE METHODS >>>
  componentDidMount(){
    //componentDidMount() is invoked immediately after a component is mounted (inserted into the tree).


    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 1000);
  }
  
  componentWillUnmount() {
    // teardown or cleanup your code before your component disappears
    // (E.g. remove event listeners)
  }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   //getSnapshotBeforeUpdate() is invoked right before the most recently rendered output is committed to e.g. the DOM. It enables your component to capture some information from the DOM (e.g. scroll position) before it is potentially changed.
  // }
    // shouldComponentUpdate(nextProps, nextState) {
    //   // return true if want it to update
    //   // return false if not
    // }
// <<< LYFECYCLE METHODS

  render(){
    const s = this.sum(5,5)
    if(this.state.isLoading) {

    return (
      <div>
         
      <h1>Loading...</h1> 
      
  </div>
    )
    }else{

      let logInOutButtonText = this.state.isLoggedIn ? "LOG OUT" : "LOG IN"
      let loginStatusText = this.state.isLoggedIn ? "Logged in" : "Logged out"

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
              <br /><br /><br /><br />
              
              <button onClick={this.logInOurClicked}>{logInOutButtonText}</button>
              <h1>{loginStatusText}</h1>
        </div>
      )
    }
  }
}

export default App;
