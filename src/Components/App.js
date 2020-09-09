import React, { Component } from 'react'
import {Table, Input,Row,Col,Label,Form,Button} from  'reactstrap';
import  * as actions  from "../redux/actions/action"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Pagination from "./Pagination";
 class App extends Component {

  constructor() {
    super();
    this.state = {
        pageOfItems: [],
        title: "pokemon",
        year: "",
        option:"movie",
    };

    // bind function in constructor instead of render (https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)
    this.onChangePage = this.onChangePage.bind(this);
}
handleChange = (event) => {
  const { name, value } = event.target;
  this.setState({ [name]: value });
  console.log(this.state.option);

};
onChangePage(pageOfItems) {
    // update state with new page of items
    this.setState({ pageOfItems: pageOfItems });
}

  componentDidMount() {  
    this.props.actions.getMovies({title:this.state.title,year:this.state.year,option:this.state.option});
   
   
  }
  

handleSave = async (event) => {
  console.log("burada",this.state.option);
  this.props.actions.getMovies({title:this.state.title,year:this.state.year,option:this.state.option});
  }

  render() {
    return (
      <div>
       <div className="container">,
       <h1>Movie App</h1>
       <Form>
       <Row form>
        <Col md={4}>
          <Row><Label for="exampleEmail">Title</Label>
            <Input type="text" name="title" id="title"  onChange={this.handleChange} placeholder="movie" /></Row>
            
         
        </Col>
        <Col md={4}>
        <Row><Label for="exampleEmail">Year</Label>
            <Input type="text" name="year" id="year"  onChange={this.handleChange} placeholder="year" /></Row>
          
        </Col>
        <Col md={4}>
        <Row>  
        <Label for="exampleSelectMulti">Select Multiple</Label>
        <Input type="select" name="option" onChange={this.handleChange} id="option">
          <option value="movie">movie</option>
          <option value="series">series</option>
         
        </Input>
      </Row>
          
        </Col>
        <Col md={4}>
        <Row><Button onClick={this.handleSave} className="primary-button">
                Gönder
              </Button></Row>
          
        </Col>
      </Row>
      </Form>
   <Table>
      <thead>
        <tr>
          <th>#</th>
          
          <th>Film Adı</th>
          <th>Yayınlanma Tarihi</th>
          <th>Imdb Id</th>
          <th>Kategori</th>
        </tr>
      </thead>
      <tbody>
      {this.state.pageOfItems.map(item =>
                          <tr>
                          <th></th>
                          <th scope="row">{item.Title}</th>
                        <td>{item.Year}</td>
                        <td>{item.imdbID}</td>
                        <td>{item.Type}</td>
                        
                      </tr>
                        )}
      </tbody>
    </Table>
   
    <Pagination items={this.props.movies.movies} onChangePage={this.onChangePage} />
    </div>  
      </div>
    )
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
    }
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(App)