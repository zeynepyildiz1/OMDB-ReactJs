import React, { Component } from 'react'
import {Table,} from  'reactstrap';
import  * as actions  from "../redux/actions/action"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Pagination from "./Pagination";
import {Link} from "react-router-dom"
 class movieTable extends Component {

  constructor() {
    super();
    this.state = {
        pageOfItems: [],
        title: "pokemon",
        year: "",
        option:"",
        season:""
    };

    // bind function in constructor instead of render (https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)
    this.onChangePage = this.onChangePage.bind(this);
}
selectMovie(movie) {
    this.props.actions.getMovieDetail(movie);
  }; 
handleChange = (event) => {
  const { name, value } = event.target;
  this.setState({ [name]: value });
  
};
onChangePage(pageOfItems) {
    // update state with new page of items
    this.setState({ pageOfItems: pageOfItems });
}

  componentDidMount() {  
    this.props.actions.getMovies({title:this.state.title,year:this.state.year,option:this.state.option});
   
   
  }
  

handleSave = async (event) => {
  if(this.state.title!==""){
  this.props.actions.getMovies({title:this.state.title,year:this.state.year,option:this.state.option});}
  event.preventDefault();  
}

  renderTable() {
    return (
      <div>
      
   <Table striped>
      <thead>
        <tr>
          <th></th>
          
          <th>Title</th>
          <th>Release Date</th>
          <th>Imdb Id</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
      {this.state.pageOfItems.map((item, index) =>
                          <tr key={index}>
                          <th>{index+1}</th>
                          <td  scope="row"><Link className="link" to="/movie" onClick={()=>this.selectMovie(item.Title)}>{item.Title}</Link></td>
                        <td>{item.Year}</td>
                        <td>{item.imdbID}</td>
                        <td>{item.Type}</td>
                        
                      </tr>
                        )}
      </tbody>
    </Table>
   
    <Pagination items={this.props.movies.movies} onChangePage={this.onChangePage} />
    </div>  
     
    )
  }
  renderError() {
    return (
      <div>
<Table striped>
      <thead>
        <tr>
          <th>#</th>
          
          <th>Title</th>
          <th>Release Date</th>
          <th>Imdb Id</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
      {this.state.pageOfItems.map(item =>
                          <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        
                      </tr>
                        )}
      </tbody>
    </Table>
      </div>
    );
  }
  render() {
    return (
      
           <div className="container">
       <h1>Movie App</h1>
       <form>
       <label >Title</label>
            <input  required type="text" name="title" id="title"   onChange={this.handleChange} placeholder="movie" />
            
       <label >Year</label>
            <input type="text" name="year" id="year"  onChange={this.handleChange} placeholder="year" />
          
        <label >Type</label>
        <select type="select" name="option" onChange={this.handleChange} id="option">
        <option value="movie"></option>
          <option value="movie">movie</option>
          <option value="series">series</option>
          <option value="episode">episode</option>
        </select>
      <input type="submit" onClick={this.handleSave} value="Gönder" className="primary-button"></input>
       
      </form>
          {this.props.movies.movies!==undefined ? this.renderTable() : this.renderError()}
    
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
   movies:state.movieReducer,
   
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getMovies:bindActionCreators(actions.getMovies,dispatch),
      getMovieDetail:bindActionCreators(actions.getMovieDetail,dispatch),
    }
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(movieTable)