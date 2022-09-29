// import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import { setAlert } from '../../actions/alert';
// import propTypes from 'prop-types';
import { 
  Footer 
} from '../../ui-components';


const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2:  ''
  });

  const { name, email, password, password2 } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      console.log('passwords do not match', 'danger');
    } else {
      console.log('success!')
    }
  }
  return (
    <Fragment>
    <section  className="register">
    <div className='registercontainer'>
      <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input 
          type="text" 
          placeholder="Name" 
          name="name" 
          value={name} 
          onChange={e => onChange(e)} 
          required />
        </div>
        <div className="form-group">
          <input 
          type="email" 
          placeholder='Email Address' name="email" 
          value={email}
          onChange={e => onChange(e)} 
          minLength='6'
          required /> 
        </div>
        <div className="form-group">
          <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={e => onChange(e)} required
          minLength="6"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={password2}
            onChange={e => onChange(e)} required            
            minLength="6"
          />
          <small className="form-text"
            >This site uses Gravatar so if you want a profile image, use a
            Gravatar email </small>
        </div>
        <input type="submit" className="btn btn-primary" value="Create Account" />
      </form>
      <p className="my-1">
        Already have an account? <Link to='/Login'>Sign In</Link>
      </p>
    </div>
    <Footer width = {"100%"} />
    </section>
    
    </Fragment>
  );
};

export default (Register);