import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function GameOverScreen(props) {
	return (
		<View style={styles.container}>
			<Text>GAME OVER!</Text>
			<Button title='Restart' onPress={props.startNewGame} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
