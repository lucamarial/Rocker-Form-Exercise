import React, { Component } from 'react'
import FormFields from './FormFields'
import { connect } from 'react-redux'
import { getCountries } from '../redux/actions'

class Form extends Component {
  state = {
    ssn: '',
    phone: '',
    email: '',
    country: 'Afghanistan',
    errors: {
      ssn: '',
      phone: '',
      email: '',
    }
  }

  componentDidMount() {
    this.props.getCountries()
  }

  render() {
    let { remoteCountries } = this.props
    let options

    if (remoteCountries.length > 0) {
      options = remoteCountries.map(rc => {
        return (
          <option key= {rc.name} value={rc.name}>{rc.name}</option>
        )
      })
    }

    return (
      <>
        <FormFields 
          options = {options}
          ssn = {this.state.ssn}
          phone = {this.state.phone}
          email = {this.state.email}
          country = {this.state.country}
        />
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    remoteCountries: state.remoteCountries
  }
}

export default connect(mapStateToProps, { getCountries })(Form)