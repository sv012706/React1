
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

 class Management extends Component {
    render() {
        return (
            <div class="landing">
        <div class="light-overlay landing-inner text-dark">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 text-center">
                        <h1 class="text  display-3 mb-4">Personal  Tool</h1>
                        <p class="lead  text-secondary display-6">
                            Create your account to join active projects or start you own
                        </p>
                        &nbsp;
                        <hr />
                        &nbsp;  &nbsp;
                        <Link to="/register" class="btn btn-lg btn-primary  mr-2">
                            Sign Up
                        </Link>
                        &nbsp;   &nbsp;
                        <Link to="/login" class="btn btn-lg btn-primary mr-2">
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
      );
    }
}
export default Management;