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

const initialForm = {
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
    const [form, setForm] = useState(initialForm);
    const { id } = useParams();
    const { push } = useHistory();
    const fetchIssue = id => {
        axios.get(`https://comake-backend-tt76.herokuapp.com/issues/all/${id}`)
            .then(res => {
                setForm(res.data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchIssue(id)
      }, [id])

    const onChange = evt => {
        const { name, value } = evt.target;
        setForm({...form, [name]: value})
    }

    const deleteIssue = e => {
        e.preventDefault()
    }

    const onSubmit = evt => { 
        evt.preventDefault();
        // axios.put(`https://comake-backend-tt76.herokuapp.com/issues/${id}`, form)
        // .then(res => {
        //     setCurrentData(
        //         currentData.map((data) => {
        //             if(data.id === id){
        //                 return form
        //             } else {
        //                 return data
        //             }
        //         })
        //     )
        //     push('/')
        // })
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
                                onChange={onChange}
                                value={form.title
                                }
                                placeholder='What seems to be the issue?'
                            />
                        </FormGroup>
                    </Col>
                    <Col md={9}>
                        <FormGroup>
                            <Label for='description'>Description of problem</Label>
                            <Input 
                                type='text' 
                                name='description' 
                                onChange={onChange}
                                placeholder='What seems to be the issue?'
                            />
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
                                onChange={onChange}
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
                                onChange={onChange} 
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
                                onChange={onChange}
                            />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for='state'>State</Label>
                            <Input 
                                type='text' 
                                name='state' 
                                onChange={onChange}
                            />
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                            <Label for='zip_code'>Zip Code</Label>
                            <Input 
                                type='text' 
                                name='zip_code' 
                                onChange={onChange}
                            />
                        </FormGroup>
                    </Col>
                    <Button id='issueFormButton1' onClick={onSubmit} color="primary" size="lg">Submit</Button>{' '}
                    <Button onClick={() => setForm(initialForm)}outline color="secondary" size="lg">Clear</Button>
                    <Button id='deleteIssueButton' onClick={() => deleteIssue(id)}>Delete Issue</Button>
                </Row>
            </Form>
        </div>
    )
}
    

