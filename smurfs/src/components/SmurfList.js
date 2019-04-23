import React from 'react';

import { connect } from 'react-redux';

import { getSmurfs, addSmurf, updateSmurf, deleteSmurf } from '../actions';
import EditSmurf from './EditSmurf';

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
                            <EditSmurf 
                                smurf={smurf}
                                updateSmurf={updateSmurf}
                            />
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

export default connect(mapStateToProps, { getSmurfs, addSmurf, updateSmurf, deleteSmurf })(SmurfList);
