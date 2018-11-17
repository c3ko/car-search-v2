import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CarSearchForm from '../components/CarSearchForm';
import { fetchCars } from '../actions';




class SearchCar extends Component {
    constructor(props){
        super(props);
        this.state ={
            fields: {
              make: {
                value: '',
              },
              model: {
                value: '',
              }
            },
        };
        this.handleFormChange = this.handleFormChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }


  handleFormChange = (changedFields) => {
    this.setState(({ fields }) => ({
      fields: { ...fields, ...changedFields },
    }));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.fetchCars(this.state.fields.make.value, this.state.fields.model.value);
  }
  
  render() {
    const fields = this.state.fields;
    return (
      <div>
        <CarSearchForm {...fields} onChange={this.handleFormChange} handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchCars }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchCar);



