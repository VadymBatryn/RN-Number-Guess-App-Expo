import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import Header from './components/Header';

export default function App() {
	return (
		<View style={styles.screen}>
			<Header />
			<GameScreen />
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		textAlign: 'center',
		flex: 1,
	},
});
