import React, { Component } from "react";
import "../styles/Navbar.css";
import {Link} from 'react-router-dom';

class Navbar extends Component {
    ChangeLanguage(str) {
        var fr = document.getElementById('fr');
        var eng = document.getElementById('eng');
        if (str === 'fr') {
            // alert();
            fr.style.display = 'none';
            eng.style.display = 'block';
        } else {
            eng.style.display = 'none';
            fr.style.display = 'block';
        }
    }
    render() {
        return (
            <nav className='nav-wrapper blue darken-3'>
                <div className='container'>
                    <Link to='/' className='brand-logo'>Banking Plus</Link>
                    <ul className='right'>
                        <li><Link to='/Manage Banks'><i className="fas fa-tasks"></i></Link></li>
                        <li><Link to='/Banking Operations'><i className="fas fa-university"></i></Link></li>
                        <li><Link to='/Planning and Budget'><i className="fas fa-wallet"></i></Link></li>
                        <li id='fr'><Link to='/Operation Bancaire' onClick={() => this.ChangeLanguage('fr')}>FR</Link></li>
                        <li id='eng'><Link to='/Banking Operations' onClick={() => this.ChangeLanguage('eng')}>ENG</Link></li>
                    </ul>
                </div>
            </nav>
        )        
    }

}

export default Navbar