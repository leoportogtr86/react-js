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

            <Container>
                <Row>
                    <Col>

                        <Alert variant="primary">Isto é um alerta primário</Alert>
                        <Alert variant="danger">Alerta danger</Alert>
                        <Alert variant="danger">Alerta danger</Alert>
                        <Alert variant="success">Alerta success</Alert>
                        <Alert variant="info">Alerta info</Alert>
                        <Alert variant="warning">Alerta warning</Alert>

                    </Col>
                </Row>
            </Container>



        </div>
    )
}