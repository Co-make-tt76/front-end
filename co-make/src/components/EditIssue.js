import React, { useState } from 'react'
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { ErrorMessage } from '@hookform/error-message';
import axios from 'axios'
import { useParams, useHistory } from 'react-router-dom'
import * as yup from 'yup'
const schema = yup.object().shape({
    //tests will go here
  });

const initialNewForm = {
    firstName: '',
    lastName: '',
    report: '',
    proposedSolution: '',
    solution: '',
    incidentLocation: '',
    specialInstructions: '',
    city: '',
    state: '',
    zip: '',
    upvoteCount: 0,
    comments: []
}

export default function EditIssue (props) {
    const [currentData, setCurrentData] = props;
    const [newForm, setNewForm] = useState(initialNewForm);
    const { id } = useParams();
    const { push } = useHistory();
    const { register, handleSubmit, errors, reset  } = useForm({
        resolver: yupResolver(schema),
      });
    
    useEffect(() => {
        axios.get(`fakeurl/${id}`)
            .then(res => setNewForm(res.data))
            .catch(err => console.log(err))
      }, [id])

    // const onChange = evt => {
    //     const { name, value } = evt.target;
    //     setNewForm({...newForm, [name]: value})
    // }

    const onSubmit = evt => { 
        e.preventDefault();
        axios.put(`fakeurl/${id}`, newForm)
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
                    <Col md={6}>
                        <FormGroup>
                            <Label for='firstName'>First Name</Label>
                            <Input 
                            type='text' 
                            name='firstName' 
                            invalid={errors.firstName ? true : false}
                            innerRef={register({required: "First name is required and must be 3 characters long.", minLength: 3},)} 
                            placeholder='Enter your first name here'>
                            {currentData.firstName}
                            </Input>
                            <ErrorMessage errors={errors} name='firstName' />
                        </FormGroup>
                    </Col>
                    
                     <Col md={6}>
                        <FormGroup>
                            <Label for='lastName'>Last Name</Label>
                            <Input 
                            type='text' 
                            name='lastName'
                            invalid={errors.lastName ? true : false}
                            innerRef={register({required: "Last name is required and must be 3 characters long.", minLength: 3})} 
                            placeholder='Enter your last name here'>
                            {currentData.lastName}
                            </Input>
                            <ErrorMessage errors={errors} name='lastName' />
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={12}>
                        <FormGroup>
                            <Label for='report'>Report</Label>
                            <Input 
                            type='text' 
                            name='report' 
                            invalid={errors.report ? true : false}
                            innerRef={register({required: "A report is required"})} 
                            placeholder='What seems to be the issue?'>
                            {currentData.report}
                            </Input>
                            <ErrorMessage errors={errors} name='report' />
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={12}>
                        <FormGroup>
                            <Label for='proposedSolution'>Proposed Solution</Label>
                            <Input 
                            type='text' 
                            name='proposedSolution'
                            invalid={errors.proposedSolution ? true : false}
                            innerRef={register} 
                            placeholder='How can we help? (optional)'>
                            {currentData.proposedSolution}
                            </Input>
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={12}>
                        <FormGroup>
                            <Label for='address'>Incident Location</Label>
                            <Input 
                            type='text' 
                            name='address' 
                            innerRef={register} 
                            placeholder='1234 Main St (optional)'>
                            {currentData.address}
                            </Input>
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={12}>
                        <FormGroup>
                            <Label for='address2'>Special Instructions</Label>
                            <Input 
                            type='text' 
                            name='address2'
                            innerRef={register} 
                            placeholder='Is there anything else you need us to know? (optional)'>
                            {currentData.address2}
                            </Input>
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
                            innerRef={register({required: "City is required"})}>
                            {currentData.city}
                            </Input>
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
                            innerRef={register({required: "State is required"})}>
                            {currentData.state}
                            </Input>
                            <ErrorMessage errors={errors} name='state' />
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                            <Label for='zip'>Zip Code</Label>
                            <Input 
                            type='text' 
                            name='zip' 
                            invalid={errors.zip ? true : false}
                            innerRef={register({required: "Zip code is required"})}>
                            {currentData.zip}
                            </Input>
                            <ErrorMessage errors={errors} name='zip' />
                        </FormGroup>
                    </Col>
                    <Button id='issueFormButton1' onClick={handleSubmit(onSubmit)} color="primary" size="lg">Submit</Button>{' '}
                    <Button onClick={() => reset()}outline color="secondary" size="lg">Clear</Button>
                </Row>
            </Form>
        </div>
    )
}
    
