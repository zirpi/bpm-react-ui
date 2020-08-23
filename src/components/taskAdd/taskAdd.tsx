import React, { useState } from "react"
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

interface Props{
    addTask: (variables: any) => any;
}

export const TaskAddComponent = (props: Props) => {
    
    const [customer, setCustomer] = useState()    
    const [customername, setCustomerName] = useState()
    const [addinfo, setAddinfo] = useState()
    const [islarge, setIslarge] = useState()
    const [amount, setAmount] = useState()

    const handleChangeCustomer = (e: any) => {
      setCustomer(e.target.value)
    }
    const handleChangeCustomerName = (e: any) => {
      setCustomerName(e.target.value)
    }
    const handleChangeAddinfo = (e: any) => {
        setAddinfo(e.target.value)
    }    
    const handleChangeIslarge = (e: any) => {
        setIslarge(e.target.value)
    }
    const handleChangeAmount = (e: any) => {
        setAmount(e.target.value);
    }

    const handleSubmit = (e: any) => {
        const request: any = {};
        request.customer = customer ? customer : "GoodCustomer";
        request.customerName = customername;
        request.addInfo = addinfo ? addinfo : "yes";
        request.isLarge = islarge ? islarge : "yes";
        request.amount = amount ? amount : "1000";
        const data = { request: request }   
        props.addTask(request);
        e.preventDefault()
      }

    return(
      <Form onSubmit={handleSubmit} >    
        <div>
            <br />
            <h3>Create new Task</h3>
        </div>
        <Form.Group>
            <Form.Label>Customer Type: </Form.Label>
            <Form.Control as="select" name="customer" value={customer} onChange={handleChangeCustomer}>
                <option value="GoodCustomer">Customer from white list</option>
                <option value="BadCustomer">Customer from black list</option>
            </Form.Control>     
        </Form.Group> 
        <Form.Group>
            <Form.Label>Customer Name: </Form.Label>
            <Form.Control  as="input" required placeholder="name of the customer"
                name="customername" value={customername} onChange={handleChangeCustomerName}>
            </Form.Control>     
        </Form.Group> 
        <Form.Group>
            <Form.Label>Add Info Required?  </Form.Label>
            <Form.Control as="select" name="addinfo" value={addinfo} onChange={handleChangeAddinfo}>
                <option value="yes">yes</option>
                <option value="no">no</option>
            </Form.Control>     
        </Form.Group> 
        <Form.Group>
            <Form.Label>Large Company?  </Form.Label>
            <Form.Control as="select" name="islarge" value={islarge} onChange={handleChangeIslarge} >
                <option value="yes">yes</option>
                <option value="no">no</option>
            </Form.Control>     
        </Form.Group> 
        <Form.Group>
            <Form.Label>Amount:  </Form.Label>
            <Form.Control as="select" name="amount" value={amount} onChange={handleChangeAmount}>
                <option value="100">100</option>
                <option value="500">500</option>
                <option value="1000">1000</option>
                <option value="5000">5000</option>
                <option value="10000">10000</option>
                <option value="50000">50000</option>
            </Form.Control>     
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    )

}