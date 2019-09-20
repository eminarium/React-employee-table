import React, {Component} from 'react'

class Form extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            name: '',
            job: ''
        };

        this.state = this.initialState;
    }

    handleChange = (event) => {
        const {name, value} = event.target;

        this.setState(
            {
                [name]: value
            }
        );
    }

    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const {name, job} = this.state;

        return (
            <form>
                <label>Name </label>
                <input name='name' value={name} onChange={this.handleChange} />
                <label>Job</label>
                <input name='job' value={job} onChange={this.handleChange} />
                <input type='button' onClick={this.submitForm} />
            </form>
        );
    }
}

export default Form