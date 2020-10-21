import React, { useState, useEffect } from 'react'
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { ErrorMessage } from '@hookform/error-message';
import axios from 'axios'
import { useParams, useHistory } from 'react-router-dom'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form'

const schema = yup.object().shape({
    //tests will go here
  });

const initialNewForm = {
    author_id: 0,
    title: '',
    description: '',
    street_address: '',
    address_notes: '',
    city: '',
    state: '',
    zip_code: '',
}

export default function EditIssue () {
    const [currentData, setCurrentData] = useState([]);
    const [newForm, setNewForm] = useState(initialNewForm);
    const { id } = useParams();
    const { push } = useHistory();
    const { register, handleSubmit, errors, reset  } = useForm({
        resolver: yupResolver(schema),
      });

    useEffect(() => {
        axios.get(`https://comake-backend-tt76.herokuapp.com/issues/3`)
            .then(res => {
                setCurrentData = res.data
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    
    useEffect(() => {
        axios.get(`https://comake-backend-tt76.herokuapp.com/issues/3`)
            .then(res => setNewForm(res.data))
            .catch(err => console.log(err))
      }, [id])

    // const onChange = evt => {
    //     const { name, value } = evt.target;
    //     setNewForm({...newForm, [name]: value})
    // }

    const onSubmit = evt => { 
        
        axios.put(`https://comake-backend-tt76.herokuapp.com/issues/3`, newForm)
        .then(res => {
            setCurrentData(
                currentData.map((data) => {
                    if(data.id === id){
                        return newForm
                    } else {
                        return data
                    }
                })
            )
            push('/')
        })
    }
    return (
        <div className='issues-list-container'>
            <Form>
                <Row form>
                    <Col md={3}>
                        <FormGroup>
                            <Label for='title'>Title of Report</Label>
                            <Input 
                                type='text' 
                                name='title' 
                                invalid={errors.title ? true : false}
                                innerRef={register({required: "A title is required"})} 
                                placeholder='What seems to be the issue?'
                            />
                            <ErrorMessage errors={errors} name='title' />
                        </FormGroup>
                    </Col>
                    <Col md={9}>
                        <FormGroup>
                            <Label for='description'>Description of problem</Label>
                            <Input 
                                type='text' 
                                name='description' 
                                invalid={errors.description ? true : false}
                                innerRef={register({required: "A description is required and needs to be 10 characters long", minLength: 10})} 
                                placeholder='What seems to be the issue?'
                            />
                            <ErrorMessage errors={errors} name='description' />
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={12}>
                        <FormGroup>
                            <Label for='street_address'>Incident Location</Label>
                            <Input 
                                type='text' 
                                name='street_address' 
                                innerRef={register} 
                                placeholder='1234 Main St (optional)'
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={12}>
                        <FormGroup>
                            <Label for='address_notes'>Special Instructions</Label>
                            <Input 
                                type='text' 
                                name='address_notes'
                                innerRef={register} 
                                placeholder='Is there anything else you need us to know? (optional)'
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for='city'>City</Label>
                            <Input 
                                type='text' 
                                name='city' 
                                invalid={errors.city ? true : false}
                                innerRef={register({required: "City is required"})}
                            />
                            <ErrorMessage errors={errors} name='city' />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for='state'>State</Label>
                            <Input 
                                type='text' 
                                name='state' 
                                invalid={errors.state ? true : false}
                                innerRef={register({required: "State is required"})}
                            />
                            <ErrorMessage errors={errors} name='state' />
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                            <Label for='zip_code'>Zip Code</Label>
                            <Input 
                                type='text' 
                                name='zip_code' 
                                invalid={errors.zip_code ? true : false}
                                innerRef={register({required: "Zip code is required"})}
                            />
                            <ErrorMessage errors={errors} name='zip_code' />
                        </FormGroup>
                    </Col>
                    <Button id='issueFormButton1' onClick={handleSubmit(onSubmit)} color="primary" size="lg">Submit</Button>{' '}
                    <Button onClick={() => reset()}outline color="secondary" size="lg">Clear</Button>
                </Row>
            </Form>
        </div>
    )
}
    
