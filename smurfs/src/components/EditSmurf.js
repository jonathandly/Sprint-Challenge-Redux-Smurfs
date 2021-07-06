import React from 'react';
import { connect } from 'react-redux';
import { updateSmurf } from '../actions';

class EditSmurf extends React.Component {
    state = {
        smurf: {
            name: '',
            age: '',
            height: ''
        }
    }

    handleChanges = e => {
        let value = e.target.value;
        
        this.setState({
            smurf: {
                ...this.state.smurf,
                [e.target.name]: value
            }
        })
    }

    updateSmurf = e => {
        e.preventDefault();
        this.props.updateSmurf(this.state.smurf);
    }

    render() {
        return (
            <div className="edit-form">
                <form className="edit-form" onSubmit={this.updateSmurf}>
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
                        type="text"
                        name="age"
                        placeholder="Age"
                        onChange={this.handleChanges}
                        value={this.state.smurf.age}
                    />

                    <label for="height">Height</label>
                    <input 
                        type="text"
                        name="height"
                        placeholder="Height"
                        onChange={this.handleChanges}
                        value={this.state.smurf.height}
                    />

                    <button>
                        Update Smurf
                    </button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = ({
    smurfs,
    updatingSmurf
}) => ({
    smurfs,
    updatingSmurf
})

export default connect(mapStateToProps, { updateSmurf })(EditSmurf);
