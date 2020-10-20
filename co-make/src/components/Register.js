import React, { useRef, useState }from 'react';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import {Form, Button, Label, Input, FormGroup, Col, Row} from 'reactstrap'





export default function Register() {
   const { register, handleSubmit, errors, reset, watch, setValue } = useForm({ 
      mode: "onBlur",
      
      
    });

    

   const password = useRef({});
  password.current = watch("password", "");


  const onSubmit = (data) => { 

    console.log(data)
    reset()
  }
  console.log("MY ERRORS FROM REG FORM =>", errors)
    


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
        <Label for="phone" >Phone Number</Label>
        <Input 
        type="tel" 
        placeholder="Phone number" 
        name="phone"
        innerRef={register}
        />
      </FormGroup>

      <FormGroup>
        <Label for="street_address" >Street Address</Label>
        <Input 
        type="text" 
        placeholder="Street Address" 
        name="street_address"
        innerRef={register}
        />
      </FormGroup>
    <Row>
    <Col md={5}>
      <FormGroup>
        <Label for="city" >City</Label>
        <Input 
        type="text" 
        placeholder="City" 
        name="city"
        innerRef={register}
        />
      </FormGroup>
    </Col>
    <Col md={3}>
      <FormGroup>
        <Label for="state" >State</Label>
        <Input 
        type="text" 
        placeholder="CA" 
        name="state"
        innerRef={register({
          max: 2
        })}
        />
      </FormGroup>
    </Col>
    <Col md={4}> 
      <FormGroup>
        <Label for="zip_code" >Zip Code</Label>
        <Input 
        type="number" 
        placeholder="Zip" 
        name="zip_code"
        innerRef={register}
        />
      </FormGroup>
    </Col> 
    </Row> 

      <Button type="submit" color="primary" onClick={() => setValue("role", "Grace")}>Sign Up</Button>
      
    </Form>
    </div>
    
   )
}