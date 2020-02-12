import React, { Component } from 'react'
import FormFields from './FormFields'
import { connect } from 'react-redux'
import { getCountries } from '../redux/actions'

class Form extends Component {
  state = {}

  componentDidMount() {
    this.props.getCountries()
  }
  
  render() {
    return (
      <>
        <FormFields />
      </>
    )
  }
}

export default connect({ getCountries })(Form)