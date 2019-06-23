import React from "react"




class App extends React.Component {

    constructor() {
      super()
      this.state = {
        isLoading: false,
        person: {}
      }

    }

    componentDidMount() {
      this.setState({isLoading:true})
      fetch("https://swapi.co/api/people/1")
        .then(response => response.json())
        .then(data => {
          this.setState({
            isLoading:false,
            person: data
          })
        })
    }


    render() {
      const text = this.state.isLoading ? "loading..." : this.state.person.name
      return (
        <div>
            {text}
        </div>
    )
  }
}

export default App;
