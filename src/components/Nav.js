import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
    
    render() {

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                <div className="container-fluid">
                    <a className="navbar-brand">Beacon Financial</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            {
                                this.props.user.apitoken
                                ?
                                <>
                                    <Link className="nav-link" to="/feed">Feed</Link>
                                    {/* <Link className="nav-link" to="/feed">Instagram</Link>
                                    <Link className="nav-link" to="/todo">To Do List</Link>
                                    <Link className="nav-link" to="/test">Functional Component Test</Link>
                                    <Link className="nav-link" to="/shop">Shop</Link>
                                    <Link className="nav-link" to="/posts/create"><AiOutlinePlus /></Link> */}
                                    <Link className="nav-link" to="/login" onClick={this.props.logMeOut}>Log Out</Link>
                                    <p className='nav-link'>{this.props.user.username}</p>
                                </>
                                :
                                <>
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                    <Link className="nav-link" to="/login">Log In</Link>                                                        
                                    <Link className="nav-link" to="/signup">Sign Up</Link>
                                </>
                            }
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
};
