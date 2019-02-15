
import React, { Component } from 'react';
import {
	FlatList,
	View,
	StyleSheet,
	Text,
	TouchableOpacity,
	Image
}  from 'react-native';
import PersonDetail from './PersonDetail';


const PeopleItem = ({person, onPress}) => {
	return (<View style={{borderBottomWidth: 1, width: "100%", height: 36}}>
		<TouchableOpacity onPress={() => onPress(person)}>
		<Text>{person.name}</Text>
		<Text>age: {person.age} gender: {person.gender}</Text>
		</TouchableOpacity>
	</View>);
};

class PeopleList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			data: [],
			selectedPerson: null,
		}
		this.selectPerson = this.selectPerson.bind(this);
		this.renderItem = this.renderItem.bind(this);

	}

	componentDidMount() {
		fetch('http://localhost:3000/api/people')
			.then(resp => resp.json())
			.then(json => {
				console.log(json);
				this.setState({data: json.results});
			})
			.catch(err => console.log(err));
	}

	renderItem({item}) {
		return (<PeopleItem person={item} onPress={this.selectPerson}/>)
	}

	selectPerson(person) {
			this.setState({selectedPerson: person});

	}

	render() {
		return (
			<View style={{flex: 1, paddingTop: 40, width: '100%'}}>
				<Text>Starwars People</Text>
			<FlatList renderItem={this.renderItem}
					  data={this.state.data}
					  keyExtractor={(item => item.name)}
					  style={{flex: 1}}
			/>
				<PersonDetail
					person={this.state.selectedPerson}
				/>
			</View>
		)
	}

}



export default PeopleList;

