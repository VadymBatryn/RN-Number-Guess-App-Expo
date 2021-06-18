import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import Header from './components/Header';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
	const [userNumber, setUserNumber] = useState();
	const [roundCount, setRoundCount] = useState(0);

	const newGameHandler = () => {
		setRoundCount(0);
		setUserNumber(null);
	};

	const startGameHandler = (selectedNumber) => {
		setUserNumber(selectedNumber);
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
		content = (
			<GameOverScreen
				userNumber={userNumber}
				numOfRounds={roundCount}
				startNewGame={newGameHandler}
			/>
		);
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
