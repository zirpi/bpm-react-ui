import * as React from 'react';
import { Task } from '../../model/task';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Table from 'react-bootstrap/Table'

import { useEffect } from "react";

interface Props {
    id: string
    task: Task;
    loadTask: (id: string) => Task
    completeTask: (id: string, rejected: boolean) => any;
    history: any;
};

export const TaskViewComponent = (props : Props) => {
    
    useEffect( () => { props.loadTask(props.id)}, [] );

    const renderButtons = (props: Props ) => {
        const taskRef = props.task.workflowInstanceId;
        if (taskRef && taskRef.length > 0 ){
            return ( 
                <div>
                <button onClick={ () => props.completeTask(props.task.workflowInstanceId, false) }> Approve</button>&nbsp; or &nbsp;
                <button onClick={ () => props.completeTask(props.task.workflowInstanceId, true) }> Reject</button>
                </div>
            );
        } else {
            return <div></div>
        }
    };

    const renderHistoryRow = (step: any) => {
    return <tr><td>{step.name}</td><td>{step.performed}</td> <td>{step.variables}</td> </tr>;
    }

    const renderHistory = (props: Props) => {
        
        return (
        <div><h4>Application Processing History</h4>
        <Table striped bordered hover>
            <thead><th>Name</th><th>Perfomed</th><th>Variables</th></thead>
            <tbody>
         { props.task.steps.map( 
            (step: any) => renderHistoryRow(step) )
         }
         </tbody>
        </Table>
        </div>
        )
    };


    return (     
        <div>
        <br />
        <h3>Approve or Reject</h3>
        <Container>            
            { renderButtons(props) }
            <Row>
                <Col>Task Id:</Col>
                <Col>{ props.task.id }</Col>
            </Row>
            <Row>
                <Col>Most Recently Peformed Step:</Col>
                <Col>{ props.task.currentStep }</Col>
            </Row>
            <Row>
                <Col>Customer: </Col>
                <Col>{ props.task.customerName }</Col>
            </Row>
            <Row>
                <Col>Loan Amount:</Col>
                <Col>{ props.task.amount }</Col>
            </Row>
            <Row>
                <Col>Created:</Col>
                <Col>{ props.task.created }</Col>
            </Row>
            <Row>
                <Col>Final Decision:</Col>
                <Col>{ props.task.finalDecision }</Col>
            </Row>
            <Row>
                <Col>Variables</Col>
                <Col>{ props.task.variables }</Col>
            </Row>
        </Container>
        <br />
        {renderHistory(props)}
        </div>   
    );
  }