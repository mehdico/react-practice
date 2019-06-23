import React from "react"

class Form extends React.Component {


  constructor() {
    super()
    this.state = {
      firstName: "A",
      lastName: "B",
      agree: true,
      gender: "",
      color: "red",
    }
    this.handleChange = this.handleChange.bind(this)
    this.cbHandleChange = this.cbHandleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
        [event.target.name]: event.target.value
    })
    // <<< equals >>
    // if(event.target.name == "firstName"){
    //   this.setState({
    //     firstName: event.target.value
    //   })
    // }else if (event.target.name == "lastName"){
    //   this.setState({
    //     lastName: event.target.value
    //   })
    // }

  }

  cbHandleChange(event) {
    const {name, value, type, checked} = event.target
    type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
  }

  handleSubmit(event) {
alert("sent!")
}

  render() {
    return (
      <form>
        <input
          type="text"
          value={this.state.firstName}
          name="firstName"
          placeholder="First Name"
          onChange={this.handleChange}
          />
        <input type="text" value={this.state.lastName} name="lastName" placeholder="Last Name" onChange={this.handleChange} />
        <h1>{this.state.firstName} {this.state.lastName}</h1>

        <br />
        <textarea value={"default value"} readOnly/>
        <br />
        <label>
        <input type="checkbox"
          name="agree"
          checked={this.state.agree}
          onChange={this.cbHandleChange}
          />
                       Is Agree?
         </label>
           <br />
           <br />
                <br />
           <label>
                    <input 
                        type="radio" 
                        name="gender"
                        value="male"
                        checked={this.state.gender === "male"}
                        onChange={this.handleChange}
                    /> Male
                </label>
            
                <label>
                    <input 
                        type="radio" 
                        name="gender"
                        value="female"
                        checked={this.state.gender === "female"}
                        onChange={this.handleChange}
                    /> Female
                </label>

                <h2>You are a {this.state.gender}</h2>


                <br />
           <br />
                <br />

                <label>Color:</label>
                <select 
                    value={this.state.color}
                    onChange={this.handleChange}
                    name="color"
                >
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="red">Red</option>
                    <option value="orange">Orange</option>
                    <option value="yellow">Yellow</option>
                </select>
                <h2>Your favorite color is {this.state.color}</h2>


                <button onClick={this.handleSubmit}>submit</button>
      </form>
    )
  }


}

export default Form
