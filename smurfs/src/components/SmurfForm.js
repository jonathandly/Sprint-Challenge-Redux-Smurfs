import React from 'react';

import { connect } from 'react-redux';

import { addSmurf } from '../actions';

class SmurfForm extends React.Component {
    state = {
        smurf: {
            name: '',
            age: '',
            height: ''
        }
    };

    handleChanges = e => {
        let value = e.target.value;
        this.setState({
            smurf: {
                ...this.state.smurf,
                [e.target.name]: value
            }
        });
    }

    addSmurf = e => {
        e.preventDefault();
        this.props.addSmurf(this.state.smurf);

        this.setState({
            smurf: {
                name: '',
                age: '',
                height: ''
            }
        });
    }

    render() {
        return (
            <div className="smurf-form">
                <h2>Add Smurf</h2>
                <form className="form" onSubmit={this.addSmurf}>
                    <label for="name">Smurf Name</label>
                    <input 
                        type="text"
                        name="name"
                        placeholder="Papa Smurf"
                        onChange={this.handleChanges}
                        value={this.state.smurf.name}
                    />

                    <label for="age">Smurf Age</label>
                    <input 
                        type="number"
                        name="age"
                        placeholder="100,000,000"
                        onChange={this.handleChanges}
                        value={this.state.smurf.age}
                    />

                    <label for="height">Smurf Height</label>
                    <input 
                        type="text"
                        name="height"
                        placeholder="Height in cm"
                        onChange={this.handleChanges}
                        value={this.state.smurf.height}
                    />

                    <button>
                        Create Smurf
                    </button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = ({ 
    smurfs,
    addingSmurf
}) => ({
    smurfs,
    addingSmurf
});

export default connect(mapStateToProps, { addSmurf })(SmurfForm);
