import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';

const generateRandomnumber = (min, max, exclude) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	let randomNumber = Math.floor(Math.random() * (max - min)) + min;
	if (randomNumber === exclude) generateRandomnumber(min, max, exclude);
	else return randomNumber;
};

export default function GameScreen(props) {
	const [computerNumber, setComputerNumber] = useState(
		generateRandomnumber(1, 100, props.userNumber)
	);
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Opponent's Guess</Text>
			<NumberContainer number={computerNumber} />
			<Card style={styles.buttonContainer}>
				<Button title='LOWER' />
				<Button title='GREATER' />
			</Card>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		padding: 10,
	},
	title: {
		marginTop: 30,
		textAlign: 'center',
		fontSize: 24,
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		paddingVertical: 20,
	},
});
