import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { connect } from "react-redux";

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';



import "../styles/PlanningBudget.css";

class PlanningBudget extends Component {

    componentDidMount() {
        const M = window.M;
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.modal');
            M.Modal.init(elems, {});
        });
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.tooltipped');
            M.Tooltip.init(elems, {});
        });
    }

    deleteItem(id, amount) {
        this.props.deleteItem(id, amount);
    }
    totalBudgetcalc(lst) {
        var tmp = 0;
        for (let i = 0; i < lst.length; i++) {
            tmp = Number(tmp) + Number(lst[i].amount);
        }
        // alert(tmp);
        return tmp;
    }

    checkSubmit() {
        var itemInput = document.getElementById("nameOfItem");
        var amountInput = document.getElementById("itemBudgetAmount");
        var prev = document.getElementById('prevent');
        prev.innerHTML = '';
        if (itemInput.value === '' || amountInput.value === '') {
            var message = document.createElement('span');
            message.innerHTML = '* Please check your information'
            message.style.color = 'red';
            prev.appendChild(message);
        } else {
            this.props.addItem(itemInput.value, amountInput.value);
        }
    }

    checkSubmitEvent() {
        var itemInput = document.getElementById("nameOfItemEvent");
        var amountInput = document.getElementById("itemBudgetAmountEvent");
        var prev = document.getElementById('preventEvent');
        prev.innerHTML = '';
        if (itemInput.value === '' || amountInput.value === '') {
            var message = document.createElement('span');
            message.innerHTML = '* Please check your information'
            message.style.color = 'red';
            prev.appendChild(message);
        } else {
            this.props.addDate(itemInput.value, amountInput.value);
        }
    }


    render() {
        const {budget} = this.props;

        const budgetList = budget.length ? (
            budget.map(item => {
              return (

                <li className='budget-item' onClick={() => this.deleteItem(item.name, item.amount)}><span>{item.name} : </span><span>${item.amount}</span></li>
  
              )
            })
        ) : (
        <div className="center">No items to show</div>
        );

        const totalBudget = this.totalBudgetcalc(budget);



        return (
            <div className='container'>
                <h4 className='center'>Planning and Budget</h4>
                <br/>
    

            <Container>
                <Row>
                    <Col sm={4}>



                        <div className='budget-wrapper'>
                            <div className='budget-header'>

                                <span>Budget</span><span><i className="fas fa-question tooltipped" data-position="left" data-tooltip="Select item to remove"></i></span>
                                <div className='divider'></div>

                            </div>
                            <div>


                                <ul>
                                    {/* <li><span>Total Budget :</span> <span>$3000</span></li> */}
                                    {budgetList}
                                </ul>
                                <span>Total Budget :</span> <span id='total'>${totalBudget}</span>
                                <button className='btn modal-trigger' data-target="addToBudget"><i class="fas fa-plus"></i> <span> Add More</span></button>
                            </div>

                        </div>






                        <div id="addToBudget" className="modal">
                            <div className="modal-content">
                                <h4>Add Element To Budget </h4>


                                <div className="input-field">
                                        <input placeholder="Optional message" id="nameOfItem" type="text" className="validate"/>
                                        <label htmlFor="#message-send">Item Name</label>
                                </div>

                                <div className="input-field">
                                        <input placeholder="Optional message" id="itemBudgetAmount" type="number" className="validate"/>
                                        <label htmlFor="">Amount</label>
                                </div>

                                <button className="btn waves-effect waves-light " type="submit" name="action" onClick={() => this.checkSubmit()}><i class="fas fa-plus"></i> <span>Add </span>
                                </button>
                                <div id='prevent'></div>

                            </div>
                        </div>
                        <br/>
                        <br/>
                        <button className='btn modal-trigger' data-target="addEventToCalender"><i class="fas fa-calendar-week"></i> <span> Add Event</span></button>
                        


                        <div id="addEventToCalender" className="modal">
                            <div className="modal-content">
                                <h4>Add Event</h4>


                                <div className="input-field">
                                        <input placeholder="Optional message" id="nameOfItemEvent" type="text" className="validate"/>
                                        <label htmlFor="#message-send">Event Name</label>
                                </div>

                                <div className="input-field">
                                        <input placeholder="Optional message" id="itemBudgetAmountEvent" type="date" className="validate"/>
                                        <label htmlFor="">Date</label>
                                </div>

                                <button className="btn waves-effect waves-light " type="submit" name="action" onClick={() => this.checkSubmitEvent()}><i class="fas fa-plus"></i> <span>Add </span>
                                </button>
                                <div id='preventEvent'></div>

                            </div>
                        </div>










                    </Col>
                    <Col>
                        
                        <FullCalendar plugins={[ dayGridPlugin ]}
                        initialView="dayGridWeek"
                        events={this.props.events}/>

                    </Col>
                </Row>
            </Container>







            </div>
        )
    }

}


const mapStateToProps = (state) => {
    return {
        budget: state.budget,
        events: state.events
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteItem: (id, amount) => { dispatch({type: 'DELETE_ITEM', id: id, amount: amount})},
        addItem: (id, amount) => { dispatch({type: 'ADD_ITEM', id: id, amount: amount})},
        addDate: (name, date) => { dispatch({type: 'ADD_DATE', name: name, date: date})}
    
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PlanningBudget)