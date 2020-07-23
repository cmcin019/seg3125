import React, {Component} from 'react';
import { Link } from 'react-router-dom';



import "../styles/Home.css";

class Home extends Component {
    // $(document).ready(function(){
    //     $('.tabs').tabs();
    //   });

    componentDidMount() {

        document.addEventListener('DOMContentLoaded', function(){
        const M = window.M;
        const myTabs = document.querySelector('.tabs')
        M.Tabs.init(myTabs, {});

        })


    }
    render() {

        return (
            <div className='container'>
                <h4 className='center'>Home</h4>
                <br/>
                <div className='from-home-wrapper'>
    
                    <Link to={'/Manage Banks'} className='nav-from-home '><span>Manage Banks <i class="fas fa-tasks"></i></span></Link>
                    <Link to={'/Banking Operations'} className='nav-from-home '><span>Banking Operations <i class="fas fa-university"></i></span></Link>
                    <Link to={'/Planning and Budget'} className='nav-from-home '><span>Planning and Budget <i class="fas fa-wallet"></i></span></Link>
                </div>
    
    
    
                {/* <div className="row">
                    <div className="col s12">
                    <ul claclassNamess="tabs">
                        <li className="tab col s3"><a href="#test1">Test 1</a></li>
                        <li className="tab col s3"><a className="active" href="#test2">Test 2</a></li>
                        <li className="tab col s3"><a href="#test3">Disabled Tab</a></li>
                        <li className="tab col s3"><a href="#test4">Test 4</a></li>
                    </ul>
                    </div>
                    <div id="test1" className="col s12">Test 1</div>
                    <div id="test2" className="col s12">Test 2</div>
                    <div id="test3" className="col s12">Test 3</div>
                    <div id="test4" className="col s12">Test 4</div>
                </div> */}
                




                
            </div>
        )



    }

}
export default Home