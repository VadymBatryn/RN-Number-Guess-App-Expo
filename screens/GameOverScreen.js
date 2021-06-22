import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	Button,
	Image,
	Dimensions,
} from 'react-native';

export default function GameOverScreen(props) {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>GAME IS OVER!</Text>
			<View style={styles.gameOverImage}>
				<Image style={styles.image} source={require('../assets/success.png')} />
			</View>
			<Text style={styles.description}>
				Your phone needed{' '}
				<Text style={styles.highlight}>{props.numOfRounds}</Text> to guess the
				number <Text style={styles.highlight}>{props.userNumber}</Text>
			</Text>
			<View style={styles.button}>
				<Button title='Restart' onPress={props.startNewGame} />
			</View>
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
		fontSize: Dimensions.get('window').height < 400 ? 18 : 24,
		fontWeight: '800',
		color: 'coral',
	},
	highlight: {
		color: 'coral',
		fontWeight: '700',
	},
	description: {
		fontSize: Dimensions.get('window').height < 400 ? 16 : 20,
		paddingHorizontal: Dimensions.get('window').height / 40,
		textAlign: 'center',
	},
	button: {
		marginVertical: Dimensions.get('window').height / 40,
	},
	gameOverImage: {
		width: Dimensions.get('window').width * 0.7,
		height: Dimensions.get('window').width * 0.7,
		borderRadius: (Dimensions.get('window').width * 0.7) / 2,
		overflow: 'hidden',
		borderWidth: 3,
		marginVertical: Dimensions.get('window').height / 40,
	},
	image: {
		width: '100%',
		height: '100%',
	},
});
