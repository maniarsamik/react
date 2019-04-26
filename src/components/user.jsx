import React, { Component } from 'react';

class User extends Component {
    render() {
        return (
            <React.Fragment>
                <span>Welcom Sam</span>
                <button onClick={this.props.clickData}>Logout</button>
            </React.Fragment>
        );
    }
}

export default User