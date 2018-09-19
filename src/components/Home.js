import React, { Component } from 'react';
import Filters from './Filters';
import StrainList from './StrainList';
import Pagination from './Pagination';
import axios from 'axios';
import '../css/Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      strainList: [],
      isLoading: false,
      queryURL: 'https://www.cannabisreports.com/api/v1.0/strains',
      pageCount: 1,
      currentPage: 1
    };
    this.handleFilterSubmission = this.handleFilterSubmission.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  componentDidMount() {
    this.setState({isLoading: true});
    axios.get(`${this.state.queryURL}`)
      .then(response => this.setState({
        strainList: response.data.data,
        isLoading: false,
        pageCount: response.data.meta.pagination.total_pages
      }))
  }

  handleFilterSubmission(searchQuery) {
    this.setState({isLoading: true});
    axios.get(`https://www.cannabisreports.com/api/v1.0/strains/search/${searchQuery}`)
      .then(response => this.setState({
        strainList: response.data.data,
        isLoading: false,
        queryURL: `https://www.cannabisreports.com/api/v1.0/strains/search/${searchQuery}`,
        pageCount: response.data.meta.pagination.total_pages,
        currentPage: 1
      }))
  }

  handlePageChange(number) {
    if (number > 0 && number <= this.state.pageCount) {
      axios.get(`${this.state.queryURL}?page=${number}`)
        .then(response => this.setState({
          strainList: response.data.data,
          currentPage: number
        }))
    }
  }

  findVisiblePages(pageCount, currentPage) {
    let firstPage, lastPage;
    if (pageCount <= 10) {
      //10 or less pages, so show all
      firstPage = 1;
      lastPage = pageCount;
    }
    else {
      //more than 10 pages, so find start & end points
      if (currentPage <= 6) {
        firstPage = 1;
        lastPage = 10;
      }
      else if (currentPage + 4 >= pageCount) {
        firstPage = pageCount - 9;
        lastPage = pageCount;
      }
      else {
        firstPage = currentPage - 5;
        lastPage = currentPage + 4;
      }
    }
    return [...Array((lastPage + 1) - firstPage).keys()].map(i => firstPage + i);
  }

  render() {
    return (
      <div className="home">
        <Filters onFilterSubmission={this.handleFilterSubmission}/>
        <StrainList
          strainList={this.state.strainList}
          isLoading={this.state.isLoading}
        />
        <Pagination
          pageCount={this.state.pageCount}
          visiblePages={this.findVisiblePages(this.state.pageCount, this.state.currentPage)}
          currentPage={this.state.currentPage}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default Home;
