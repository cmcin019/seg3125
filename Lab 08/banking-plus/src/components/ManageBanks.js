import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { connect } from "react-redux";
// import Carousel from "react-bootstrap/Carousel";
// import Collapsible from 'react-collapsible';
import "../styles/ManageBanks.css";

function showAmount(amount, str) {
    amount.addEventListener('change', function() {
        // var amount = document.getElementById('amount');
        var div = document.getElementById('showAmount-' + str);
        div.innerHTML = '';
        var span = document.createElement("span"); 
        span.innerHTML = '$ ' + amount.value;
        // span.style.fontSize = '16px';
        // div.style.textAlign = 'center';
        // div.style.borderBottom = '1px solid #9e9e9e';
        div.appendChild(span);
    });
}
class ManageBanks extends Component {

    componentDidMount() {
        const M = window.M;

        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.carousel');
            M.Carousel.init(elems, {});
            // M.Carousel.init(elems, {
            //     fullWidth: true,
            //     indicators: true
            //   });
        });

        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.collapsible');
            M.Collapsible.init(elems, {});
        });    
        
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.modal');
            M.Modal.init(elems, {});
        });

        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.tooltipped');
            M.Tooltip.init(elems, {});
        });

        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('select');
            M.FormSelect.init(elems, {});
        });

        var amountSend = document.getElementById('amount-send');
        var amountTransfer = document.getElementById('amount-transfer');
        var amountPay = document.getElementById('amount-pay');
        showAmount(amountSend, 'send');
        showAmount(amountTransfer, 'transfer');
        showAmount(amountPay, 'pay');
    
    }

    checkSubmit(str) {
        var acc = document.getElementById(str + '-account-form');
        var rec = document.getElementById(str +  '-recipient-form');
        var accVal = acc.value;
        var recVal = rec.value;
        var prev = document.getElementById(str + '-prevent');
        prev.innerHTML = '';
        if (accVal === '' || recVal === '' ) {
            var message = document.createElement('span');
            message.innerHTML = '* Please check your information'
            message.style.color = 'red';
            prev.appendChild(message);
        } else if (str === 'send') {
            var amount = document.getElementById('amount-' + str);
            var amountVal = amount.value;
            this.props.subtractBallance(acc.value, amountVal)
        } else if (str === 'transfer') {
            var amountTransfer = document.getElementById('amount-' + str);
            var amountValTransfer = amountTransfer.value;
            this.props.subtractBallance(acc.value, amountValTransfer);
            this.props.addBallance(rec.value, amountValTransfer);
            this.props.addTransfer(acc.value, rec.value, amountValTransfer);
        } else if (str === 'pay') {
            var amountPay = document.getElementById('amount-' + str);
            var amountValPay = amountPay.value;
            this.props.subtractBallance(acc.value, amountValPay);
            this.props.subtractBill(rec.value, amountValPay);
        }

    }

    render() {
        console.log(this.props);
        const {posts, transfers, bills} = this.props;
        // console.log(posts);


        const postList = posts.length ? (
            posts.map(post => {
              return (
                <div>
                    <Row><Col>{post.title}</Col><Col>$ {post.ballance}</Col></Row>
                </div>
              )
            })
          ) : (
            <div className="center">No posts to show</div>
          );

          const sendMoneylist = posts.length ? (
            posts.map(post => {
              return (
                <option value={post.title}>{post.title}</option>
              )
            })
          ) : (
            <div className="center">No posts to show</div>
          );

          const billsList = bills.length ? (
            bills.map(bill => {
              return (
                <div><Row><Col>{bill.name}</Col><Col>$ {bill.amount}</Col></Row></div>
              )
            })
          ) : (
            <div className="center">No bills to show</div>
          );

          const payBill = bills.length ? (
            bills.map(bill => {
                if (bill.amount <= 0) {
                    return null;
                }
              return (
                <option value={bill.name}>{bill.name} : ${bill.amount}</option>

              )
            })
          ) : (
            <div className="center">No bills to show</div>
          );


            const transferlist = transfers.length ? (
                transfers.map(transfer => {
                    if (transfer.amount <= 0) {
                        return null;
                    }
                  return (
                    <div><Row><Col>{transfer.sender} <i className="fas fa-long-arrow-alt-right"></i> {transfer.receiver}</Col><Col>$ {transfer.amount}</Col></Row><div>{transfer.date}</div></div>
                  )
                })
              ) : (
                <div className="center">No transfers to show</div>
              );



        return (
            <div className='container'>
                <h4 className='center'>Manage Banks</h4>
                <br/>
                <div>

                    <Container>

                    </Container>









                    <Container>
                        <Row>
                            <Col><div className='btn-wrapper'><button data-target="send" className="btn modal-trigger">Send Money</button></div></Col>
                            <Col><div className='btn-wrapper'><button data-target="transfer" className="btn modal-trigger">Transfer</button></div></Col>
                            <Col><div className='btn-wrapper'><button data-target="pay" className="btn modal-trigger">Pay Bill</button></div></Col>
                        </Row>
                    </Container>
                    <div className='modal-wrapper'>
                        <div id="send" className="modal">
                            <div className="modal-content">
                                <h4>Send Money</h4>
                                



                                <div className="input-field col s12">
                                    <select id='send-account-form' defaultValue='' required>
                                        <option value="" disabled>Select an account</option>
                                        {sendMoneylist}
                                    </select>
                                    <label>From Account</label>
                                </div>

                                <div className="input-field col s12">
                                    <select id='send-recipient-form' defaultValue='' required>
                                        <option value="" disabled>Select a recipient</option>
                                        <option value="1">Tim F.</option>
                                        <option value="2">Luke B.</option>
                                        <option value="3">Sam S.</option>
                                    </select>
                                    <label>To Recipient</label>
                                </div>

                                <label className='amount-id'>Amount</label>
                                <Container>
                                    <Row>
                                        <Col sm={2}>
                                            <div className='showAmount' id='showAmount-send'><span>$ 00</span></div>
                                        </Col>  
                                        <Col sm={10}>
                                            <div className='amount-wrapper'>
                                                <p className="range-field">
                                                    {/* <label>Amount</label> */}
                                                    <input type="range" id="amount-send" min="5" max="100" />
                                                </p>
                                            </div> 
                                        </Col>
                                    </Row>
                                </Container>

                                <div className="input-field col s6">
                                        <input placeholder="Optional message" id="message-send" type="text" className="validate"/>
                                        <label htmlFor="first_name">Message</label>
                                </div>

                                <button className="btn waves-effect waves-light " type="submit" name="action" onClick={() => this.checkSubmit('send')}><span>Submit </span>
                                    <i className="fas fa-paper-plane"></i>
                                </button>
                                <div id='send-prevent'></div>

                            </div>
                        </div>
                        <div id="transfer" className="modal">
                            <div className="modal-content">
                                <h4>Transfer</h4>







                                <div className="input-field col s12">
                                    <select id='transfer-account-form' defaultValue=''>
                                        <option value="" disabled>Select an account</option>
                                        {sendMoneylist}
                                    </select>
                                    <label>From Account</label>
                                </div>

                                <div className="input-field col s12">
                                    <select id='transfer-recipient-form' defaultValue=''>
                                        <option value="" disabled>Select an account</option>
                                        {sendMoneylist}
                                    </select>
                                    <label>To Account</label>
                                </div>

                                <label className='amount-id'>Amount</label>
                                <Container>
                                    <Row>
                                        <Col sm={2}>
                                            <div className='showAmount' id='showAmount-transfer'><span>$ 00</span></div>
                                        </Col>  
                                        <Col sm={10}>
                                            <div className='amount-wrapper'>
                                                <p className="range-field">
                                                    {/* <label>Amount</label> */}
                                                    <input type="range" id="amount-transfer" min="50" max="100" />
                                                </p>
                                            </div> 
                                        </Col>
                                    </Row>
                                </Container>

                                <div className="input-field col s6">
                                        <input placeholder="Optional message" id="message-transfer" type="text" className="validate"/>
                                        <label htmlFor="first_name">Message</label>
                                </div>

                                <button className="btn waves-effect waves-light " type="submit" name="action" onClick={() => this.checkSubmit('transfer')}><span>Submit </span>
                                    <i className="fas fa-paper-plane"></i>
                                </button>
                                <div id='transfer-prevent'></div>













                            </div>
                        </div>
                        <div id="pay" className="modal">
                            <div className="modal-content">
                                <h4>Pay Bill</h4>
                                









                                <div className="input-field col s12">
                                    <select id='pay-account-form' defaultValue=''>
                                        <option value="" disabled >Select an account</option>
                                        {sendMoneylist}
                                    </select>
                                    <label>From Account</label>
                                </div>

                                <div className="input-field col s12">
                                    <select id='pay-recipient-form' defaultValue=''>
                                        <option value="" disabled >Select a Bill</option>
                                        {payBill}
                                    </select>
                                    <label>Pay Bill</label>
                                </div>

                                <label className='amount-id'>Amount</label>
                                <Container>
                                    <Row>
                                        <Col sm={2}>
                                            <div className='showAmount' id='showAmount-pay'><span>$ 00</span></div>
                                        </Col>  
                                        <Col sm={10}>
                                            <div className='amount-wrapper'>
                                                <p className="range-field">
                                                    {/* <label>Amount</label> */}
                                                    <input type="range" id="amount-pay" min="50" max="100" />
                                                </p>
                                            </div> 
                                        </Col>
                                    </Row>
                                </Container>

                                <div className="input-field col s6">
                                        <input placeholder="Optional message" id="message-pay" type="text" className="validate"/>
                                        <label htmlFor="first_name">Message</label>
                                </div>

                                <button className="btn waves-effect waves-light " type="submit" name="action" onClick={() => this.checkSubmit('pay')} ><span>Submit </span>
                                    <i className="fas fa-paper-plane"></i>
                                </button>
                                <div id='pay-prevent'></div>















                            </div>
                        </div>
                    </div>
                    <ul className="collapsible">
                        <li>
                        <div className="collapsible-header blue darken-1"> <i className="fas fa-user"></i> Accounts<span><i className="fas fa-question tooltipped" data-position="left" data-tooltip="Select Account to view more details"></i></span></div>
                        <div className="collapsible-body">
                            <Container>
                                <Row>
                                    <Col sm={6}>
                                        {postList}
                                    </Col>
                                    <Col sm={6} className='info-text'><span>These are all your accounts for the selected bank. Click on any account to view more</span></Col>
                                </Row>
                            </Container>
                        </div>
                        </li>
                        <li>
                        <div className="collapsible-header blue darken-1"> <i className="fas fa-exchange-alt"></i> Transfers<span ><i className="fas fa-question tooltipped" data-position="left" data-tooltip="The date is under the transfer"></i></span></div>
                        <div className="collapsible-body">
                            <Container>
                                <Row>
                                    <Col sm={7}>
                                    {transferlist}
                                    </Col>
                                    <Col sm={5} className='info-text'><span>History of all your transfers from account to account. </span></Col>
                                </Row>
                            </Container>
                        </div>
                        </li>
                        <li>
                        <div className="collapsible-header blue darken-1"> <i className="fas fa-file-invoice-dollar"></i> Bills<span><i className="fas fa-question tooltipped" data-position="left" data-tooltip="Once payed off, the bill will disapear"></i></span></div>
                        <div className="collapsible-body">
                        <Container>
                                <Row>
                                    <Col sm={6}>
                                        {billsList}
                                    </Col>
                                    <Col sm={6} className='info-text'><span>Here you can see all the bills that you have to pay off.</span></Col>
                                </Row>
                            </Container>
                        </div>
                        </li>
                    </ul>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
        transfers: state.transfers,
        bills: state.bills
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        subtractBallance: (id, amount) => { dispatch({type: 'SUBTRACT_BALLANCE', id: id, amount: amount})},
        addBallance: (id, amount) => { dispatch({type: 'ADD_BALLANCE', id: id, amount: amount})},
        subtractBill: (id, amount) => { dispatch({type: 'SUBTRACT_BILL', id: id, amount: amount})},
        addTransfer: (acc, rec, amount) => { dispatch({type: 'ADD_TRANSFER', acc: acc, rec: rec, amount: amount})}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageBanks)
