import React from 'react';
import { StyleSheet, View } from 'react-native';
import Login from './components/Login';
import SignUp from './components/SignUp';
export default function App() {
  return (
    <View style={styles.container}>
      <SignUp/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FA5858',
  },
});