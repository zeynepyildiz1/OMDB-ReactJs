import React, { Component } from 'react'
import  * as actions  from "../redux/actions/action"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class MovieDetail extends Component {
    render() {
      
        return (
            <div>
             
               <h1>Movie App</h1>
                <div className="movie-card">
                   
      <div className="col-40"><img top width="100%" src={this.props.movie.Poster} alt="Card image cap" /></div>  
       <div className="col-60">
           <div className="title-movie">{this.props.movie.Title}</div>
           <div className="text-box">
           <div className="text"><span>Genre: </span>{this.props.movie.Genre}</div>
        <div className="text"><span>Director: </span>{this.props.movie.Director}</div>
        <div className="text"><span>Runtime: </span>{this.props.movie.Runtime}</div>
        <div className="text"><span>Imdb Puanı: </span>{this.props.movie.imdbRating}</div>
        <div className="text"><span>Actors: </span>{this.props.movie.Actors}</div>
        <div className="text"><span>Language: </span>:{this.props.movie.Language}</div>
        <div className="text"><span>Plot: </span>:{this.props.movie.Plot}</div></div>
       </div>
      </div>
            </div>
        )
    }

}
function mapStateToProps(state) {
    return {
     movie:state.detailReducer,
     
    };
  }
  function mapDispatchToProps(dispatch) {
    return {
      actions: {
        getMovieDetail:bindActionCreators(actions.getMovieDetail,dispatch),
      }
    };
  }
  export default connect(mapStateToProps,mapDispatchToProps)(MovieDetail)