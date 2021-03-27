import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
export default function BaseButton({text, onPress}){
    return(
        <TouchableOpacity style = {styles.container} onPress = {onPress} >
            <Text style = {styles.text}>{text}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "green",
        padding: 10,
        borderRadius: 25,
    },
    text: {
        color: 'pink',
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center',
        },
})