import React, { Component } from 'react'
import { Countries } from '../data/Countries'
import { connect } from 'react-redux'
import { update } from '../actions'

const renderCountryOptions = () => (
  <optgroup label="Countries">
    {Countries.map((val,index) => 
      <option value={val.name} key={index}>{val.name}</option>
    )}
  </optgroup>
)
const renderError = (message) => (
  <div className="error error-setup">{ message }</div>
)

const validate = values => {
  const errors = {}
  if(!values.dob){
    errors.dob = 'Required'
  }else if(new Date(values.dob) > new Date()){
    errors.dob = 'Date must be before today'
  }
  return errors
}

class SetupForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      values:{dob:"",country:'Canada'},
      errors:{},
      submitting: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.validateField = this.validateField.bind(this)
    this.tryDispatch = this.tryDispatch.bind(this)
  }
  handleSubmit(e){
    e.preventDefault()
    const errors = validate(this.state.values)
    this.setState({errors, submitting: true}, this.tryDispatch)
  }
  handleChange(key, value){
    const values = this.state.values
    values[key] = value
    this.setState({values}, () => this.validateField(key))
  }
  validateField(key){
    const errors = this.state.errors
    errors[key] = validate(this.state.values)[key]
    this.setState({errors})
  }
  tryDispatch(){
    if(Object.keys(this.state.errors).length === 0){
      const {dob, country} = this.state.values
      const lifespan = Countries.find((c) => c.name === country).value
      this.props.dispatch(update(dob, lifespan, country, 'YEARS'))
      this.props.router.push('/chart')
    }else{
      console.log(this.state)
      this.setState({submitting:false})
    }
    
  }
  render(){
    const {values, errors, submitting} = this.state
    return (
        <form className="setup-form" onSubmit={this.handleSubmit}>
          <fieldset>
            <label>What is your date of birth?</label>
            <input 
              autoFocus
              type="date" 
              defaultValue={values.dob}
              onChange={(e) => this.handleChange('dob',e.target.value)}/>
              {errors.dob ? renderError(errors.dob) : ''}
          </fieldset>
          <fieldset>
            <label>Where do you live?</label>
            <select defaultValue={values.country} onChange={(e) => this.handleChange('country', e.target.value)}>
              { renderCountryOptions() }
            </select>
          </fieldset>
          <button className="btn btn-clear" type="submit" disabled={submitting}>Finish</button>
        </form>
    )
  }
}
SetupForm = connect()(SetupForm)
export default SetupForm