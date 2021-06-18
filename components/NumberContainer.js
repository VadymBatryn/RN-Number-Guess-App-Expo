import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function NumberContainer(props) {
	return (
		<View style={{ ...styles.numberContainer, ...props.style }}>
			<Text style={styles.roundedNumber}>{props.number}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	numberContainer: {
		width: 60,
		height: 60,
		borderRadius: 30,
		borderWidth: 3,
		borderColor: 'coral',
		justifyContent: 'center',
		marginVertical: 15,
		overflow: 'hidden',
	},
	roundedNumber: {
		fontSize: 22,
		textAlign: 'center',
	},
});
