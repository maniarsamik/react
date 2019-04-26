import React, {Component} from 'react';
import PropTypes from 'prop-types';
export default class Testsam1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uname: "test1",
            id: 101
        };
    }
    handleClick = (id, e) => {
        this.setState({ uname: "Test2" });
        console.log(id);
        console.log(e);
    }
    render() {
        var text = "Something!";
        return (
            <div>
                <p> In a new component!</p>
                <p>{text}</p>
                <p> Your name is {this.props.name}, your age is {this.props.age}</p>
                <p> Your name is {this.state.uname}</p>
                <p> User Object => Name: {this.props.user.name}</p>
                <div>
                    <h4>hobbies</h4>
                    <ul>
                        {this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
                        <button onClick={e => { this.handleClick(this.state.id, e); }}>Click Me</button>
                    </ul>
                </div>
            </div>
        );
    }
}

Testsam1.propTypes = {
    name: PropTypes.string.isRequired
};