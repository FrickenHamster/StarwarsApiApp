/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import PeopleList from './src/components/PeopleList';
import { NativeRouter, Route, Link } from 'react-router-native'

type Props = {};
export default class App extends Component<Props> {
	render() {

		return (
			<View style={styles.container}>
			<PeopleList/>
			</View>
		)
		/*return (
			<View>
				<Text>wtffffff</Text>
				<View style={styles.container}>

				<NativeRouter>
						<Route path="home" component={PeopleList}/>
						<Route path="details" component={PeopleList}/>
				</NativeRouter>
				</View>

			</View>)*/
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});
