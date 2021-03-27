import React, {Component} from 'react';
import Divider from './Divider';
import SnackBar from './SnackBar';
import {Audio} from 'expo-av';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import BaseButton from './BaseButton';
import LoginSignUpBtn from './LoginSignUpBtn';
import {Picker} from '@react-native-picker/picker';
import ValidationComponent from 'react-native-form-validator';
export default class SignUp extends ValidationComponent{
    constructor(props){
        super(props)
        this.state = {
            name: "",
            email: "",
            ageGroup: "",
            pass: "",
            confirmPass: "",
            snackBarVisible: false,
            snackBarType: "",
            snackBarText: "",
        }
    };
    onSignInClicked(){
        console.log('SignIn Clicked')
    };
    onRegisterClicked=()=>{
        this.validate({
            name: {minLength: 2, maxLength: 30, required: true},
            email: {email: true, required: true},
            ageGroup: {required: true},
            pass: {required: true},
            confirmPass: {equalPassword: this.state.pass, required: true}
        })
        if(this.getErrorMessages()){
            this.displaySnackBar("error", this.getErrorMessages())
        }
        else{
            this.hideSnackBar()
            this.playAudio()
            this.displaySnackBar("success", "Registration Successful")
        }
    };
    displaySnackBar=(type, text)=>{
        this.setState({
            snackBarType: type,
            snackBarText: text,
            snackBarVisible: true,
        })
    }
    hideSnackBar=()=>{
        this.setState({
            snackBarVisible: false,
        })
    }
    playAudio=async()=>{
        try{
            const soundObject=new Audio.Sound()
            await soundObject.loadAsync(require('../assets/ding2.mp3'))
            await soundObject.playAsync()
        }
        catch(error){
            //errorOccurred
        }
    }
    render(){
        return(
        <>
        <ScrollView style = {styles.container}>
            <Text style = {styles.appTitle}>SignUp</Text>
            <View style = {styles.signUpForm}>
                <Text style = {styles.label}>Name : </Text>
                <TextInput style = {styles.input} placeholder = "Enter Your Name." value = {this.state.name} onChangeText ={(name)=> this.setState({name})} />
                <View style = {styles.divider}></View>
                <Text style = {styles.label}>Email Address : </Text>
                <TextInput style = {styles.input} placeholder = "abcd@gmail.com" value = {this.state.email} onChangeText ={(email)=> this.setState({email})} keyboardType = "email-address"/>
            <View style = {styles.divider}></View>
                <Text style = {styles.label}>Age Group : </Text>
                <Picker style = {styles.input} selectedValue = {this.state.ageGroup} onValueChange = {(ageGroup,index)=>this.setState({ageGroup})}>
                    <Picker.Item label = "None" value = "O"/>
                    <Picker.Item label = "1-5" value = "1-5"/>
                    <Picker.Item label = "6-10" value = "6-10"/>
                    <Picker.Item label = "11-15" value = "11-15"/>
                    <Picker.Item label = "16-20" value = "16-20"/>
                    <Picker.Item label = "21-25" value = "21-25"/>
                    <Picker.Item label = "26-30" value = "26-30"/>
                    <Picker.Item label = "31-35" value = "31-35"/>
                    <Picker.Item label = "36-40" value = "36-40"/>
                    <Picker.Item label = "41-45" value = "41-45"/>
                    <Picker.Item label = "46-50" value = "46-50"/>
                    <Picker.Item label = "51-55" value = "51-55"/>
                    <Picker.Item label = "56-60" value = "56-60"/>
                    <Picker.Item label = "61-65" value = "61-65"/>
                    <Picker.Item label = "66-70" value = "66-70"/>
                    <Picker.Item label = "71-75" value = "71-75"/>
                    <Picker.Item label = "76-80" value = "76-80"/>
                    <Picker.Item label = "80+" value = "80+"/>
                </Picker>
            <View style = {styles.divider}></View>
                <Text style = {styles.label}>Password : </Text>
                <TextInput style = {styles.input} placeholder = "**************" value = {this.state.pass} secureTextEntry onChangeText ={(pass)=> this.setState({pass})}/>
            <View style = {styles.divider}></View>
            <Text style = {styles.label}>Confirm Password : </Text>
                <TextInput style = {styles.input} placeholder = "**************" value = {this.state.confirmPass} secureTextEntry onChangeText ={(confirmPass)=> this.setState({confirmPass})}/> 
            </View>
            <BaseButton text = "SignUp" onPress = {this.onRegisterClicked}/>
            <Divider/>
            <LoginSignUpBtn customStyle = {styles.login} text = "Already have an Account?" btnText = "Login" onPress = {this.onSignInClicked}/>
        </ScrollView>
        {
            this.state.snackBarVisible?
            <SnackBar 
            isVisible = {this.state.snackBarVisible} 
            text = {this.state.snackBarText}
            type = {this.state.snackBarType}
            onClose = {this.hideSnackBar}/>
            :null
        }
        </>
        )   
}
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    signUpForm: {
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
    login: {
        marginTop: 40,
    },
    divider: {
        paddingVertical: 8,
    }
})