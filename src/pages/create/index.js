import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux'

class Create extends Component{

  state = {
    name: "",
    job: ""
  }

  handleInput = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()


  }

  render(){
    return(
      <div>
        {console.log(this.props)}
        <h1>Cadastrar usuários</h1>
        <form onSubmit={ () => this.handleSubmit() }>
          <div>
            <TextField
            required
            type="text"
            name="name"
            onChange={ e => this.handleInput(e) }
            value={ this.state.name } />
          </div>
          <br />
          <div>
            <TextField required type="text" name="job" onChange={ e => this.handleInput(e) } value={this.state.job} />
          </div>
          <br />
          <Button variant="contained" color="primary">Cadastrar</Button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => (
  {
    type: 'CREATE',

  }
)


export default connect(null, mapDispatchToProps)(Create)