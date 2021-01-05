import React from 'react'
import { Alert, Container, Row, Col } from 'react-bootstrap'


export default props => {

    return (

        <div>


            <Container className="mt-5">

                <Row>
                    <Col xs="3">
                        <Alert variant="danger">Danger</Alert>
                    </Col>
                    <Col xs="3">
                        <Alert variant="primary">Primary</Alert>
                    </Col>
                    <Col xs="3">
                        <Alert variant="success">Success</Alert>
                    </Col>
                    <Col xs="3">
                        <Alert variant="secondary">Secondary</Alert>
                    </Col>
                </Row>

                <Row>
                    <Col xs="6">
                        <Alert variant="danger">Danger</Alert>
                    </Col>
                    <Col xs="2">
                        <Alert variant="primary">Primary</Alert>
                    </Col>
                    <Col xs="2">
                        <Alert variant="success">Success</Alert>
                    </Col>
                    <Col xs="2">
                        <Alert variant="secondary">Secondary</Alert>
                    </Col>
                </Row>

                <Row>
                    <Col xs="8">
                        <Alert variant="danger">Danger</Alert>
                    </Col>
                    <Col xs="2">
                        <Alert variant="primary">Primary</Alert>
                    </Col>
                    <Col xs="1">
                        <Alert variant="success">Success</Alert>
                    </Col>
                    <Col xs="1">
                        <Alert variant="secondary">Secondary</Alert>
                    </Col>
                </Row>
            </Container>



        </div>
    )
}