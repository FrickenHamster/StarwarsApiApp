
import React, { Component } from 'react';
import {
	FlatList,
	View,
	StyleSheet,
	Text,
	TouchableOpacity,
	Image
}  from 'react-native';


const PeopleItem = ({person}) => {
	return (<View style={{borderBottomWidth: 1, width: "100%", height: 36}}>
		<TouchableOpacity>
		<Text>{person.name}</Text>
		<Text>age: {person.age} gender: {person.gender}</Text>
		</TouchableOpacity>
	</View>);
}


class PeopleList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			data: []
		}
	}

	componentDidMount() {
		console.log('here')
		fetch('http://localhost:3000/api/people')
			.then(resp => resp.json())
			.then(json => {
				console.log(json);
				this.setState({data: json.results});
			})
			.catch(err => console.log(err));
	}

	renderItem({item}) {
		return (<PeopleItem person={item}/>)
	}


	render() {
		return (
			<View style={{flex: 1, paddingTop: 40, width: '100%'}}>
				<Text>Starwars People</Text>
			<FlatList renderItem={this.renderItem}
					  data={this.state.data}
			/>
			</View>
		)
	}

}



export default PeopleList;

