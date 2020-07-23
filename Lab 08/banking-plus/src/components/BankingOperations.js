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
    {name: 'Monday', CAD: 4000},
    {name: 'Tuesday', CAD: 3000},
    {name: 'Wednesday', CAD: 2000},
    {name: 'Thursday', CAD: 2780},
    {name: 'Friday', CAD: 1890},
    {name: 'Saturday', CAD: 2390},
    {name: 'Sunday', CAD: 3490},
];


class BankingOperations extends Component {

    render() {


        return (
            <div className='container'>
                <h4 className='center'>Banking Operations</h4>
                <br/>
                <Container>
                    <Row>
                        <Col sm={6}>
                            <div className='banking-stats'>

<Tabs className='tabs-contain'>
    <TabList>
      <Tab className='tab'><button className='btn'>Activities</button></Tab>
      <Tab className='tab'><button className='btn'>Summary</button></Tab>
    </TabList>
 
    <TabPanel>
    <Container>
                                    <Row>
                                        <Col>Accounts :</Col><Col>3</Col>
                                    </Row>
                                    <Row>
                                        <Col>Available Balance :</Col><Col>$4000</Col>
                                    </Row>
                                    <Row>
                                        <Col>Daily net ave :</Col><Col>-$100</Col>
                                    </Row>
                                </Container>
    </TabPanel>
    <TabPanel>
    <Container>
                                    <Row>
                                        <Col sm={4}><h5>Today</h5></Col><Col sm={8}></Col>
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


                            <span>Average spent on cloths</span>
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

                            <span>Average spent on food</span>
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

                            <span>Average spent on school</span>
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
export default BankingOperations