import React from 'react';

import { connect } from 'react-redux';

import { getSmurfs, addSmurf } from '../actions';

class SmurfList extends React.Component {
    // state = {

    // };

    componentDidMount() {
        this.props.getSmurfs();
    }

    render() {
        return (
            <div className="smurf-list">
                <h2>Smurf List</h2>
                {this.props.smurfs.map(smurf => {
                    return (
                        <div className="smurfs">
                            <h2>{smurf.name}</h2>
                            <p>{smurf.age} smurf years old</p>
                            <p>{smurf.height}</p>
                        </div>
                    );
                })}
            </div>
        );
    }
}

const mapStateToProps = ({
    smurfs,
    fetchingSmurfs,
    addingSmurf
}) => ({
    smurfs,
    fetchingSmurfs,
    addingSmurf
});

export default connect(mapStateToProps, { getSmurfs, addSmurf})(SmurfList);
