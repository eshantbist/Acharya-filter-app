import React,{Component} from 'react';
import {connect} from 'react-redux';

class AcharyaList extends Component{

	renderlist(){

		if(this.props.displayacharyas == undefined)
		return;
      return this.props.displayfilteredacharyas.map((acharya)=>{
				const imageUrl=`https://d1dyr7ljeznkdv.cloudfront.net/wp-content/uploads/acharya_images/${acharya.image}`;
				return(
						<li 
						className="list-group-item col-md-12" key={acharya.id}>
							<img src={imageUrl} className="col-md-3"/>
							<div>Name:  {acharya.salutation} {acharya.last_name}</div>
							<div>Mail: {acharya.email}</div>
							<div>City:  {acharya.city}</div>
							<div>Phone:  {acharya.phone}</div>
						</li>
				)
			}
		);
	}

	render(){
		return(
			
				<ul className="list-group">{this.renderlist()}</ul>	
		);
	}
}

function mapStateToProps(state){
	if(state.acharyas.acharyas == undefined)
			return {};
	
	return{displayacharyas:state.acharyas.acharyas,displayfilteredacharyas:state.cityfilter};
}



export default connect(mapStateToProps)(AcharyaList);