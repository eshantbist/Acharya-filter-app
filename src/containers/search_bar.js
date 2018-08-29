import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchAcharya} from '../actions/show_all';
class SearchBar extends Component{
	
	constructor(props){
		super(props);
		this.onFormSubmit=this.onFormSubmit.bind(this);
	}

	onFormSubmit(event){
		event.preventDefault();
		this.props.fetchAcharya();

	}

	render(){
		return(
			<form className="input-group" onSubmit={this.onFormSubmit}>
				<input className="form-control"/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</span> 
			</form>
		)
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({fetchAcharya},dispatch);		
}

export default connect(null,mapDispatchToProps)(SearchBar);