import React, { useState } from 'react';
import {
	StyleSheet,
	Button,
	Text,
	View,
	TouchableWithoutFeedback,
	Keyboard,
	Alert,
	Pressable,
} from 'react-native';

import Header from '../components/Header';
import NumberInput from '../components/Input';
import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer';

export default function StartGameScreen() {
	const [inputNumber, setInputNumber] = useState('');
	const [isConfirmed, setConfrimTo] = useState(false);
	const [selectedNumber, setSelectedNumber] = useState();

	const changeInputNumber = (value) => {
		setInputNumber(value.replace(/[^0-9]/g, ''));
	};

	const resetInputNumber = () => {
		Keyboard.dismiss();
		setInputNumber('');
		setConfrimTo(false);
	};

	const confirmInputNumber = () => {
		if (isNaN(parseInt(inputNumber)) || inputNumber <= 0 || inputNumber > 99) {
			Alert.alert('Invalid number ...', 'Enter a number between 1 and 99', [
				{ text: 'Okay!', style: 'destructive', onPress: resetInputNumber },
			]);
			return;
		}
		setSelectedNumber(parseInt(inputNumber));
		setInputNumber('');
		Keyboard.dismiss();
		setConfrimTo(true);
	};

	let confirmedOutput;

	if (isConfirmed) {
		confirmedOutput = (
			<View>
				<Card style={styles.summaryContainer}>
					<Text style={styles.confirmationText}>You selected</Text>
					<NumberContainer number={selectedNumber} />
					<Button
						title='Start Game'
						onPress={() => {
							console.log('hello');
						}}
					/>
				</Card>
			</View>
		);
	}

	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View style={styles.container}>
				<Text style={styles.title}>Start a New Game!</Text>
				<Card>
					<Text style={styles.label}>Enter your number</Text>
					<NumberInput
						keyboardType='numeric'
						maxLength={2}
						style={styles.label}
						value={inputNumber}
						onChangeText={changeInputNumber}
						autoCapitalize='none'
						autoCorrect={false}
					/>
					<View style={styles.buttonContainer}>
						<Button title='RESET' color='#C70039' onPress={resetInputNumber} />
						<Button
							title='SUBMIT'
							color='#28B463'
							onPress={confirmInputNumber}
						/>
					</View>
				</Card>
				{confirmedOutput}
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
	},
	title: {
		paddingVertical: 25,
		textAlign: 'center',
		fontSize: 24,
	},
	label: {
		paddingVertical: 25,
		textAlign: 'center',
		fontSize: 20,
	},

	buttonContainer: {
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-evenly',
		paddingVertical: 25,
	},

	//--- start game card ---//

	summaryContainer: {
		padding: 25,
		marginTop: 20,
		minWidth: '55%',
	},
	confirmationText: {
		fontSize: 18,
	},
});
