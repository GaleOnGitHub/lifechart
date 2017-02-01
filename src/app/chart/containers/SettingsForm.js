import React, { Component } from 'react'
import { Countries } from '../data/Countries'
import { connect } from 'react-redux'
import { update } from '../actions'

const mapToProps = (state) => {
  const {lifespan, dob, country} = state.chart
  return {
    dob,
    lifespan,
    country
  }
}
const renderError = (message) => (
  <div className="error">{ message }</div>
)

const renderCountryOptions = () => (
  <optgroup label="Countries">
    {Countries.map((val,index) => 
      <option value={val.name} key={index}>{val.name}</option>
    )}
  </optgroup>
)

const validate = values => {
  const errors = {}
  
  if(!values.dob){ 
    errors.dob = 'Required.'
  }else if(new Date(values.dob) > new Date()){
    errors.dob = 'Date must be before today.'
  }
  
  if(!values.lifespan){
    errors.lifespan = 'Required.'
  }else if(!values.lifespan.toString().match(/^((100)|(\d{1,2}))$/)){
    errors.lifespan = 'Age must be an integer between 1 and 100.'
  }

  return errors
}

class SettingsForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      values:{ 
        dob: this.props.dob,
        country: this.props.country,
        lifespan: this.props.lifespan
      },
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
    if(key === 'country' && value != 'custom'){ //replace value with country's'
      values['lifespan'] = this.findCountryLifeExpectancy(value) 
    }else if(key === 'lifespan'){ //change option if value input
      values['country'] = 'Custom'  
    }
    values[key] = value
    this.setState({values}, () => this.validateField(key))
  }
  validateField(key){
    if(key === 'country') //country should remove lifespan error
      key = 'lifespan' 
    const errors = this.state.errors
    errors[key] = validate(this.state.values)[key]
    this.setState({errors})
  }
  findCountryLifeExpectancy(country){
    return Countries.find((c) => c.name === country).value
  }
  tryDispatch(){
    if(Object.keys(this.state.errors).length === 0){ //no error
      const {dob, country, lifespan} = this.state.values
      this.props.dispatch(update(dob, lifespan, country, 'YEARS'))
      this.props.router.push('/chart') //go to chart
    }else{ //error
      this.setState({submitting:false}) //allow user to submit again 
    }
    
  }
  render(){
    const {values, errors, submitting} = this.state
    return (
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <label>Date of Birth</label>
            <input 
              className={errors.dob ? "error-field" : ""}
              type="date" 
              value={values.dob}
              onChange={(e) => this.handleChange('dob',e.target.value)}/>
              {errors.dob ? renderError(errors.dob) : ''}
          </fieldset>
          <fieldset>
            <label>Life Expectancy</label>
            <select value={values.country} onChange={(e) => this.handleChange('country', e.target.value)}>
              <optgroup label="Value">
                <option value="Custom">Custom</option>
              </optgroup>
              { renderCountryOptions() }
            </select>
            <input
              className={ errors.lifespan ? "input-sm error-field" : "input-sm"}
              type="number"
              value={values.lifespan}
              onChange={(e) => this.handleChange('lifespan',e.target.value)}/>
              {errors.lifespan ? renderError(errors.lifespan) : ''}
          </fieldset>
          <button className="btn btn-dbl" type="submit" disabled={submitting}>Save</button>
          <button className="btn btn-dbl" type="button" onClick={() => this.props.router.push('/chart')}>Cancel</button>
        </form>
    )
  }
}
SettingsForm = connect(mapToProps)(SettingsForm)
export default SettingsForm