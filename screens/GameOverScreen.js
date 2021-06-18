import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function GameOverScreen(props) {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>GAME IS OVER!</Text>
			<View style={styles.gameOverImage}>
				<Image style={styles.image} source={require('../assets/success.png')} />
			</View>
			<Text style={styles.description}>
				Your phone needed{' '}
				<Text style={styles.highlight}>{props.numOfRounds}</Text> to guess your
				number <Text style={styles.highlight}>{props.userNumber}</Text>
			</Text>
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
	title: {
		fontSize: 24,
		fontWeight: '800',
		color: 'coral',
	},
	highlight: {
		color: 'coral',
		fontWeight: '700',
	},
	description: {
		fontSize: 20,
		paddingHorizontal: 20,
		textAlign: 'center',
	},
	gameOverImage: {
		width: 300,
		height: 300,
		borderRadius: 150,
		overflow: 'hidden',
		borderWidth: 3,
		marginVertical: 20,
	},
	image: {
		width: '100%',
		height: '100%',
	},
});
