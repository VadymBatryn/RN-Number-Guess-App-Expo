import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';

const generateRandomNumber = (min, max, exclude) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	let randomNumber = Math.floor(Math.random() * (max - min)) + min;
	if (randomNumber === exclude) generateRandomNumber(min, max, exclude);
	else return randomNumber;
};

export default function GameScreen(props) {
	const { userNumber, onGameOver } = props;

	const [computerNumber, setComputerNumber] = useState(
		generateRandomNumber(1, 100, userNumber)
	);
	const [numOfRounds, setNumOfRounds] = useState(0);

	const currentLow = useRef(1);
	const currentHigh = useRef(100);

	useEffect(() => {
		if (computerNumber === userNumber) {
			onGameOver(numOfRounds);
		}
	}, [computerNumber, userNumber, onGameOver]);

	const nextGuessHandler = (direction) => {
		if (
			(direction === 'lower' && userNumber > computerNumber) ||
			(direction === 'greater' && userNumber < computerNumber)
		) {
			Alert.alert('Dont lie to me ...', 'You know that was wrong...', [
				{ text: 'Sorry...', style: 'destructive' },
			]);
		}
		if (direction === 'lower') {
			currentHigh.current = computerNumber;
		} else {
			currentLow.current = computerNumber + 1;
		}
		const nextNumber = generateRandomNumber(
			currentLow.current,
			currentHigh.current,
			computerNumber
		);
		setComputerNumber(nextNumber);
		setNumOfRounds((current) => current + 1);
	};
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Opponent's Guess</Text>
			<NumberContainer number={computerNumber} />
			<Card style={styles.buttonContainer}>
				<Button title='LOWER' onPress={nextGuessHandler.bind(this, 'lower')} />
				<Button
					title='GREATER'
					onPress={nextGuessHandler.bind(this, 'greater')}
				/>
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
		width: 300,
		maxWidth: '80%',
	},
});
