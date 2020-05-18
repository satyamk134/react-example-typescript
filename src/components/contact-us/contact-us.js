import React from 'react'

import ButtonLink  from '../ButtonLink';
class Contact extends React.Component {
  render() {
    return <h1>Contact<ButtonLink link="dashboard" text="LOGIN" color="primary" />
    <ButtonLink className="register-btn" color="secondary" link="register" text="REGISTER" /></h1>
  }
}
export default Contact