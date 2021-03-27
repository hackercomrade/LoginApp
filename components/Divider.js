import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
export default function Divider(){
    return(
        <View style = {styles.container}>
            <View style = {styles.line}></View>
            <Text style = {styles.text}>OR</Text>
            <View style = {styles.line}></View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 10,
    },
    line: {
        height: 1,
        width: "50%",
        backgroundColor: "red",
    },
    text: {
        fontWeight: '500',
        fontSize: 14,
        color: 'black',
        lineHeight: 18,
    },
})