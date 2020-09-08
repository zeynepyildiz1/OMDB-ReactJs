import React, { Component } from 'react'
import {Table, ListGroupItem} from  'reactstrap';
import  * as actions  from "../redux/actions/action"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
 class App extends Component {
  constructor(props){ super(props)
 this.props.actions.getMovies(); 
   
  }
  componentDidMount() {  
    this.props.actions.getMovies();
  }
  render() {
    return (
      <div>
        {this.props.movies.map((movie) =>  {return(

<ListGroupItem>{movie.title}</ListGroupItem>
        )}
       
        )}
  
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movieReducer,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getMovies:bindActionCreators(actions.getMovies,dispatch),
    }
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(App)