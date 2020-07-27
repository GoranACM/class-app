import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { TextBox } from './components/TextBox';
import { ClickCounter } from './components/ClickCounter';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Hello world!</Text>
      <Button title="Click me" color="green"/>
      <StatusBar style="auto" />
      <TextBox color="green" size={30} text="Custom Component"/>
      <ClickCounter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  greeting: {
    color: 'red',
    fontSize: 50,
  }
});

