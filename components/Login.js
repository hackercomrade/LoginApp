import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import BaseButton from './BaseButton';
import LoginSignUpBtn from './LoginSignUpBtn';
export default function Login(){
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    function onLoginClicked(){
        console.log("Login", email, pass);
    }
    function onSignUpClicked(){
        console.log("SignUp", "Enter Email", "Enter Password");
    }
    return(
        <ScrollView style = {styles.container}>
            <Text style = {styles.appTitle}>LOGIN</Text>
            <View style = {styles.loginForm}>
                <Text style = {styles.label}>Email Address : </Text>
                <TextInput style = {styles.input} placeholder = "abcd@gmail.com" value = {email} onChangeText ={(value)=> setEmail(value)} keyboardType = "email-address"/>
            <View style = {styles.divider}></View>
                <Text style = {styles.label}>Password : </Text>
                <TextInput style = {styles.input} placeholder = "**************" value = {pass} secureTextEntry onChangeText ={(value)=> setPass(value)}/>
            </View>
            <BaseButton text = "LOGIN" onPress = {onLoginClicked}/>
            <LoginSignUpBtn customStyle = {styles.signUp} text = "Don't have an Account?" btnText = "Sign Up" onPress = {onSignUpClicked}/>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        color: 'pink',
        flex: 1,
        backgroundColor: 'white',
        marginTop: 50,
        paddingHorizontal: 30,
        backgroundColor: 'pink',
        borderRadius: 5,
      },
    appTitle: {
        fontWeight: "500",
        fontSize: 40,
        color: "white",
        textAlign: 'center',
        backgroundColor: '#F78181',
        borderRadius: 8,
    },
    loginForm: {
        marginVertical: 30,
        textAlign : 'center',
    },
    input: {
        fontSize: 14,
        paddingVertical: 6,
        marginVertical: 20,
        borderWidth: 3,
        borderRadius: 10,
        borderColor: 'black',
        paddingLeft: 5,
        borderStyle: 'dotted',
    },
    label: {
        fontSize: 16,
        lineHeight: 18,
        color: "red",
        textAlign: 'left',
    },
    signUp: {
        marginTop: 40,
    },
})