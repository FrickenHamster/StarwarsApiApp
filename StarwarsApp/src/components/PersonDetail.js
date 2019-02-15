import { Text, View } from "react-native";
import React, {Component} from "react";


class PersonDetail extends Component {

	constructor(props) {
		super(props);

		this.state={person: null, data: null}
	}
	componentWillReceiveProps(nextProps){
		//console.log('new person', nextProps)
		if (nextProps.person)
		fetch(`http://localhost:3000${nextProps.person.url.substring(16)}`)
			.then(resp => resp.json())
			.then(json => {
				console.log(json);
				this.setState({data: json});
			})
			.catch(err => console.log(err));
	}

	render() {


		if (!this.state.data)
			return null;

		return (
			<View style={{flex: 1, width: '100%'}}>
				<Text>{this.state.data.name}</Text>
				<Text>Birth Year: {this.state.data.birth_year}</Text>
				<Text>gender: {this.state.data.gender}</Text>
				<Text>mass: {this.state.data.birth_year}</Text>
				<Text>skin: {this.state.data.skin_color}</Text>

			</View>
		)
	}

}

export default PersonDetail;
