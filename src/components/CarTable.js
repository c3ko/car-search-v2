import React, { Component } from 'react';
import { Table, Button } from 'antd';


class CarTable extends Component {
  constructor(props){
    super(props);
    this.state = {filteredInfo: null, sortedInfo: null, selectedRowKeys: []};
  }

  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  }

  handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  }

  clearFilters = () => {
    this.setState({ filteredInfo: null });
  }

  clearAll = () => {
    this.setState({
      filteredInfo: null,
      sortedInfo: null,
    });
  }

  setYearSort = () => {
    this.setState({
      sortedInfo: {
        order: 'descend',
        columnKey: 'year',
      },
    });
  }
  getFilteredValues(key){
    return this.props.cars.map(car => { return {
      text: `${car[key]}`, value: `${car[key]}`}})
  }
  render() {
    let { sortedInfo, filteredInfo, selectedRowKeys} = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const columns = [
    {
      title: 'Year',
      dataIndex: 'year',
      key: 'year',
      sorter: (a, b) => a.year - b.year,
      sortOrder: sortedInfo.columnKey === 'year' && sortedInfo.order,
    }, 
    {
      title: 'Make',
      dataIndex: 'make',
      key: 'make',
      sorter: (a, b) => a.make.length - b.make.length,
      sortOrder: sortedInfo.columnKey === 'make' && sortedInfo.order,
    },
    {
      title: 'Model',
      dataIndex: 'model',
      key: 'model',
      sorter: (a, b) => a.model.length - b.model.length,
      sortOrder: sortedInfo.columnKey === 'model' && sortedInfo.order,
    },
    {
      title: 'Mileage',
      dataIndex: 'mileage',
      key: 'mileage',
      sorter: (a, b) => a.mileage - b.mileage,
      sortOrder: sortedInfo.columnKey === 'mileage' && sortedInfo.order,
    }, 
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      sorter: (a, b) => a.price - b.price,
      sortOrder: sortedInfo.columnKey === 'price' && sortedInfo.order,
    },

    {
      title: 'Transmission',
      dataIndex: 'transmission',
      key: 'transmission',
      filters: [
        { text: 'Automatic', value: 'Automatic' },
        { text: 'Manual', value: 'Manual' },
      ],
      filteredValue: filteredInfo.transmission || null,
      onFilter: (value, record) => record.transmission.includes(value),
      sorter: (a, b) => a.transmission.length - b.transmission.length,
      sortOrder: sortedInfo.columnKey === 'transmission' && sortedInfo.order,
      
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
      sorter: (a, b) => a.location.length - b.location.length,
      sortOrder: sortedInfo.columnKey === 'location' && sortedInfo.order,
    }, 
    {
      title: 'Date Posted',
      dataIndex: 'date_posted',
      key: 'date_posted',
      sorter: (a, b) => a.date_posted.length - b.date_posted.length,
      sortOrder: sortedInfo.columnKey === 'date' && sortedInfo.order,
    }

  ];
    return (
      <div>
        <div className="table-operations">
          <Button onClick={this.setYearSort}>Sort Year</Button>
          <Button onClick={this.clearFilters}>Clear filters</Button>
          <Button onClick={this.clearAll}>Clear filters and sorters</Button>
        </div>
        <div className="table-selections">

        </div>
        <Table rowSelection={rowSelection} columns={columns} dataSource={this.props.data} onChange={this.handleChange} />
      </div>
    );
  }
}
export default CarTable;
