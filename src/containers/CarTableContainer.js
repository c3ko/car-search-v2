import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCars } from '../actions';
import CarTable from '../components/CarTable';

function mapStateToProps({ cars }) {
    return {
        cars: cars.list
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchCars }, dispatch);
}


class CarTableContainer extends Component {
    componentDidMount(){
    }
    render() {
        return (
            <CarTable data={this.props.cars}/>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CarTableContainer);