import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchAcharya} from '../actions/show_all';
import {fetchAcharyaByCity} from '../actions/filter_city';
import {fetchAcharyaBySalutation} from '../actions/filter_salutation';

class SearchBar extends Component{
	
	constructor(props){
		super(props);
		this.state={
			option:'All',
			term:''
		}
		this.onFormSubmit=this.onFormSubmit.bind(this);
		this.handleSelect=this.handleSelect.bind(this);
		this.onInputChange=this.onInputChange.bind(this);
	}

	componentWillMount(){
		if(this.state.term=="")
		{
			this.props.fetchAcharya();
		}
	}

	onFormSubmit(event){
		event.preventDefault();
		if(this.state.option==="All")
		{
			this.props.fetchAcharya();
			this.setState({term:''});
		}
		else if (this.state.option==="City") 
		{
			this.props.fetchAcharyaByCity(this.state.term);
			this.setState({term:''});
		}
		else if (this.state.option==="Salutation") 
		{
			this.props.fetchAcharyaBySalutation(this.state.term);
			this.setState({term:''});
		}

	}

	onInputChange(event){
		this.setState({term:event.target.value});
	}

	handleSelect(event){
		this.setState({option:event.target.value});
	}

	render(){
		return(
			<form className="input-group" onSubmit={this.onFormSubmit}>

				<div className="input-group-btn">
	                <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown">
	                    <span>Search by</span>
		                <select onChange={this.handleSelect}>
		                  <option>All</option>
						  <option>City</option>
						  <option>Salutation</option>
						</select>
					</button>
	            </div>  

	            <input className="form-control"
					value={this.state.term}
				 	onChange={this.onInputChange} />

	            <span className="input-group-btn">
	                <button className="btn btn-secondary" type="submit">Search</button>
	            </span> 

			</form>
		)
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({fetchAcharya:fetchAcharya,fetchAcharyaByCity:fetchAcharyaByCity,fetchAcharyaBySalutation:fetchAcharyaBySalutation},dispatch);		
}

export default connect(null,mapDispatchToProps)(SearchBar);