import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Header() {
	return (
		<View style={styles.header}>
			{Platform.OS === 'android' ? (
				<LinearGradient
					colors={['#4c669f', '#3b5998', '#192f6a']}
					style={styles.header}>
					<Text style={styles.title}>Guess the Number</Text>
				</LinearGradient>
			) : Platform.OS === 'ios' ? (
				<View style={styles.header}>
					<Text style={styles.title}>Guess the Number</Text>
				</View>
			) : null}
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		height: 100,
		width: '100%',
		alignItems: 'center',
		borderBottomWidth: Platform.OS === 'ios' ? 1 : 0,
	},
	title: {
		paddingTop: 50,
		fontSize: 24,
		color: Platform.OS === 'ios' ? '#3b5998' : '#fff',
	},
});
