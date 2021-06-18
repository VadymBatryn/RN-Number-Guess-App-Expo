import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import Header from './components/Header';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
	const [userNumber, setUserNumber] = useState();
	const [roundCount, setRoundCount] = useState(0);

	const startGameHandler = (selectedNumber) => {
		setUserNumber(selectedNumber);
		setRoundCount(0);
	};

	const gameOverHandler = (numOfRounds) => {
		setRoundCount(numOfRounds);
	};

	let content = <StartGameScreen onStartGame={startGameHandler} />;

	if (userNumber && roundCount === 0) {
		content = (
			<GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
		);
	} else if (roundCount > 0) {
		content = <GameOverScreen />;
	}

	return (
		<View style={styles.screen}>
			<Header />
			{content}
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		textAlign: 'center',
		flex: 1,
	},
});
