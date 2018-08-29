import React, {Component} from 'react';
import {connect} from 'react-redux';

function mapStateToProps(state){

	return{
		acharya:state.acharyaDetail
	};
}


class AcharyaDetails extends Component{

	renderdetails(){
		return this.props.acharya.map((acharya)=>{
				return(	
						<ul key={acharya.id}>
							<li className="list-group-item">
								Name: {acharya.last_name}
							</li>
							<li className="list-group-item">
								Salutation: {acharya.salutation}
							</li>
							<li className="list-group-item">
								City: {acharya.city}
							</li>
							<li className="list-group-item">
								Salutation: {acharya.phone}
							</li>
						</ul>

				)
			});
	}

	render(){
		return(
			<div className="col-sm-6">
				<h4>Details of: {this.props.acharya.map((acharya)=>acharya.last_name)}</h4>
				{this.renderdetails()}
			</div>
		);
	}
}

export default connect(mapStateToProps)(AcharyaDetails);