import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Card(props) {
	return (
		<View style={{ ...styles.card, ...props.style }}>{props.children}</View>
	);
}

const styles = StyleSheet.create({
	card: {
		width: '70%',
		minWidth: 300,
		alignItems: 'center',
		borderRadius: 10,
		backgroundColor: 'white',
		shadowColor: 'black',
		shadowRadius: 5,
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.26,
		elevation: 5,
	},
});
