import React, {useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
export default function Divider({isVisible, timeOut=5000, text, type, boxStyle, textStyle, onClose}){
    useEffect(()=>{
        setTimeout(function(){
            console.log("Snack bar disappears in 5 seconds...")
            onClose()
        },timeOut)
    },[])
    function getSnackStyle(type){
        if(type === "error"){
            return styles.errorBox
        }
        else if(type === "success"){
            return styles.successBox
        }
        else if(type === "info"){
            return styles.infoBox
        }
        else{
            return ""
        }
    }

    return(
        isVisible?
        <View style = {styles.container}>
            <View style = {[styles.content, getSnackStyle(type), boxStyle]}>
                <TouchableOpacity style = {styles.closeIcon} onPress = {onClose}>
                    <Text style = {styles.closeIconText}>x</Text>
                </TouchableOpacity>
            <View style = {styles.textContainer}>
                <Text style = {[styles.text, textStyle]}>{text}</Text>
            </View>
        </View>
        </View>
        : null
    );
}
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 50,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        margin: 'auto',
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 6,
    },
    closeIcon: {
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignItems: 'center',
        width: 16,
        height: 16,
        marginTop: 2,
        marginRight: 2,
        borderRadius: 50,
    },
    closeIconText: {
        fontWeight: '500',
        fontSize: 16,
        color: 'white',
    },
    textContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 4,
        paddingBottom: 10,
    },
    text: {
        textAlign: 'center',
        fontSize: 12,
        color: 'red',
        },
    errorBox: {
        backgroundColor: 'red',
    },
    successBox: {
        backgroundColor: 'green',
    },
    infoBox: {
        backgroundColor: 'blue',
    }
})