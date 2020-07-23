import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
// import Tabs from 'react-bootstrap/Tabs';
// import Tab from 'react-bootstrap/Tab';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import 'react-tabs/style/react-tabs.css';

// import { Line } from 'react-chartjs-2';
// import { MDBContainer } from "mdbreact";

import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';

import "../styles/BankingOperations.css";



const data = [
    {name: 'Lundi', CAD: 4000},
    {name: 'Mardi', CAD: 3000},
    {name: 'Mercredi', CAD: 2000},
    {name: 'Jeudi', CAD: 2780},
    {name: 'Vendredi', CAD: 1890},
    {name: 'Samedi', CAD: 2390},
    {name: 'Dimanche', CAD: 3490},
];


class OperationBancaire extends Component {

    render() {


        return (
            <div className='container'>
                <h4 className='center'>Opérations bancaires</h4>
                <br/>
                <Container>
                    <Row>
                        <Col sm={6}>
                            <div className='banking-stats'>

<Tabs className='tabs-contain'>
    <TabList>
      <Tab className='tab'><button className='btn'>Activités</button></Tab>
      <Tab className='tab'><button className='btn'>Résumé</button></Tab>
    </TabList>
 
    <TabPanel>
    <Container>
                                    <Row>
                                        <Col>Comptes :</Col><Col>3</Col>
                                    </Row>
                                    <Row>
                                        <Col>Solde disponible :</Col><Col>$4000</Col>
                                    </Row>
                                    <Row>
                                        <Col>Ave nette quotidienne :</Col><Col>-$100</Col>
                                    </Row>
                                </Container>
    </TabPanel>
    <TabPanel>
    <Container>
                                    <Row>
                                        <Col sm={4}><h5>Aujourd'hui</h5></Col><Col sm={8}></Col>
                                    </Row>
                                    <Row>
                                        <Col sm={4}>Shoes</Col><Col sm={8}>-$100</Col>
                                    </Row>
                                    <Row>
                                        <Col sm={4}>Pizza</Col><Col sm={8}>-$11</Col>
                                    </Row>
                                    <Row>
                                        <Col sm={4}>Glasses</Col><Col sm={8}>-$150</Col>
                                    </Row>
                                </Container> 
    </TabPanel>
  </Tabs>









                            </div>
                        </Col>
                        {/* <Col sm={1}></Col> */}
                        <Col sm={6}>


                            <span>Moyenne dépensée en vêtements</span>
                            <div className='lineChart-wrapper'>
                                <LineChart
                                    width={500}
                                    height={250}
                                    data={data}
                                    margin={{
                                        top: 5, right: 30, left: 20, bottom: 5,
                                    }}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="CAD" stroke="#82ca9d" />
                                </LineChart>
                            </div>

                            <span>Moyenne dépensée en nourriture</span>
                            <div className='lineChart-wrapper'>
                                <LineChart
                                    width={500}
                                    height={250}
                                    data={data}
                                    margin={{
                                        top: 5, right: 30, left: 20, bottom: 5,
                                    }}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="CAD" stroke="#82ca9d" />
                                </LineChart>
                            </div>

                            <span>Moyenne dépensée à l'école</span>
                            <div className='lineChart-wrapper'>
                                <LineChart
                                    width={500}
                                    height={250}
                                    data={data}
                                    margin={{
                                        top: 5, right: 30, left: 20, bottom: 5,
                                    }}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="CAD" stroke="#82ca9d" />
                                </LineChart>
                            </div>

                        </Col>
                    </Row>
                </Container>



                <br/>
                <br/>
                <br/>
                <br/>

















                
            </div>
        )   
    }

}
export default OperationBancaire