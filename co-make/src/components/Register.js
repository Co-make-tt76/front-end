import React, { useRef }from 'react';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import {Form, Button, Label, Input, FormGroup, Col, Row} from 'reactstrap'

export default function Register() {
   const { register, handleSubmit, errors, reset, watch } = useForm({ 
      mode: "onBlur", 
      
    });
   const password = useRef({});
  password.current = watch("password", "");


  const onSubmit = (data) => { 
    
    console.log(data)
    reset()
  }
  console.log("MY ERRORS FROM REG FORM=>", errors)
    


   return (
   <div className='auth-form-container  shadow' >
    
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Row form>
        <Col md={6}>
        <FormGroup>
          <Label for="first_name">First Name</Label>
          <Input 
          type="text" 
          placeholder="First name" 
          name="first_name" 
          invalid={errors.first_name ? true : false}
          innerRef={register({required: "First Name is required.",  maxLength: 100}, )} 
          />
          <ErrorMessage errors={errors} name="first_name" />

      </FormGroup>
      </Col>

      <Col md={6}>
      <FormGroup>
        <Label for="last_name">Last Name</Label>
        <Input 
        type="text" 
        placeholder="Last name" 
        name="last_name" 
        invalid={errors.last_name ? true : false}
        innerRef={register({required:  "Last Name is required.",  maxLength: 100})} 
        />
        <ErrorMessage errors={errors} name="last_name" />
      </FormGroup>
      </Col>
    </Row>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input 
        type="email" 
        placeholder="email" 
        name="email"
        invalid={errors.email ? true : false}
        innerRef={register({required: "Email is required"})} 
      
        />
        <ErrorMessage errors={errors} name="email" />
      </FormGroup>
      <Row form>
        <Col md={6}>
        <FormGroup>
          <Label for="password" >Password</Label>
          <Input 
          type="password" 
          placeholder="Password" 
          name="password" 
          invalid={errors.password ? true : false}
          innerRef={register({required: "Password is required.",  maxLength: 100}, )} 
          />
          <ErrorMessage errors={errors} name="password" />

      </FormGroup>
      </Col>

      <Col md={6}>
      <FormGroup >
        <Label for="confirm_password">Confirm Password</Label>
        <Input 
        type="password" 
        placeholder="Confirm" 
        name="confirm_password" 
        invalid={errors.confirm_password ? true : false}
        innerRef={register({
          validate: value =>
            value === password.current || "The passwords do not match"
        })} 
        />
        <ErrorMessage errors={errors} name="confirm_password" />
      </FormGroup>
      </Col>
    </Row>

      <FormGroup>
        <Label for="phone_number" >Phone Number</Label>
        <Input 
        type="tel" 
        placeholder="Mobile number" 
        name="phone_number"
        innerRef={register}
        />
      </FormGroup>

      <Button type="submit" color="primary">Sign Up</Button>
      
    </Form>
    </div>
    
   )
}