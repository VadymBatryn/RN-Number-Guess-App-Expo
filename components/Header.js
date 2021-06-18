import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Header() {
	return (
		<View style={styles.header}>
			<LinearGradient
				colors={['#4c669f', '#3b5998', '#192f6a']}
				style={styles.header}>
				<Text style={styles.title}>Guess the Number</Text>
			</LinearGradient>
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		height: 100,
		width: '100%',
		alignItems: 'center',
	},
	title: {
		paddingTop: 50,
		fontSize: 24,
		color: '#fff',
	},
});
