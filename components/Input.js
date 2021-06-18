import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function NumberInput(props) {
	return <TextInput {...props} style={styles.inputNumber} />;
}

const styles = StyleSheet.create({
	inputNumber: {
		textAlign: 'center',
		fontSize: 24,
		borderBottomWidth: 1,
		borderBottomColor: 'grey',
		width: 50,
		marginVertical: 20,
	},
});
