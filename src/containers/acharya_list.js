import React,{Component} from 'react';
import {connect} from 'react-redux';
import {selectedAcharya} from '../actions/selected_acharya';
import {bindActionCreators} from 'redux';

class AcharyaList extends Component{

	renderlist(){
		console.log(this.props.displayacharyas);

		return this.props.displayacharyas.map((list)=>
			list.acharyas.map((acharya)=>{
				return(
						<li 
						onClick={()=>this.props.displayselectedacharya(acharya)}
						className="list-group-item" key={acharya.id}>
						{acharya.last_name}
						</li>
				)
			})
		);
	}

	render(){
		return(
			<div className="col-sm-3">
				<h4>Acharyas List</h4>
				<ul className="list-group">{this.renderlist()}</ul>
			</div>	
		);
	}
}

function mapStateToProps(state){

	return{displayacharyas:state.acharyas};
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({displayselectedacharya:selectedAcharya},dispatch);
}


export default connect(mapStateToProps,mapDispatchToProps)(AcharyaList);