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
    this.validateKey = this.validateKey.bind(this)
    this.tryDispatch = this.tryDispatch.bind(this)
  }
  handleSubmit(e){
    e.preventDefault()
    const errors = validate(this.state.values)
    this.setState({errors, submitting: true}, this.tryDispatch)
  }
  handleChange(key, value){
    const values = this.state.values
    if(key === 'country' && value != 'custom'){
      values['lifespan'] = this.findCountryLifeExpectancy(value) 
    }else if(key === 'lifespan'){
      values['country'] = 'Custom'
    }
    values[key] = value
    this.setState({values}, () => this.validateField(key))
  }
  validateField(key){
    const errors = this.state.errors
    errors[key] = validate(this.state.values)[key]
    this.setState({errors})
  }
  findCountryLifeExpectancy(country){
    return Countries.find((c) => c.name === country).value
  }
  tryDispatch(){
    if(Object.keys(this.state.errors).length === 0){
      console.log(this.state)
      const {dob, country, lifespan} = this.state.values
      this.props.dispatch(update(dob, lifespan, country, 'MONTHS'))
      this.props.router.push('/')
    }else{
      console.log(this.state)
      this.setState({submitting:false})
    }
    
  }
  render(){
    const {values, errors, submitting} = this.state
    return (
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <label>Date of Birth?</label>
            <input 
              type="date" 
              value={values.dob}
              onChange={(e) => this.handleChange('dob',e.target.value)}/>
              {errors.dob ? errors.dob : ''}
          </fieldset>
          <fieldset>
            <label>Life Expectancy?</label>
            <select value={values.country} onChange={(e) => this.handleChange('country', e.target.value)}>
              <optgroup label="Value">
                <option value="Custom">Custom</option>
              </optgroup>
              { renderCountryOptions() }
            </select>
            <input 
              type="number"
              value={values.lifespan}
              onChange={(e) => this.handleChange('lifespan',e.target.value)}/>
              {errors.lifespan ? errors.lifespan : ''}
          </fieldset>
          <button type="submit" disabled={submitting}>Finish</button>
        </form>
    )
  }
}
SettingsForm = connect(mapToProps)(SettingsForm)
export default SettingsForm