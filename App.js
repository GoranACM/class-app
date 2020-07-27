import { StatusBar } from 'expo-status-bar';
import React, { Component }  from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { TextBox } from './components/TextBox';
import { Start } from './components/Start';

// Changed code from function to a class
class App extends Component {

  state = {
    secret: 0,
    guess: 0,
    feedback: '',
    correct: false
  }

  // Constructor to pass props/values
  constructor () {
    super();
  }

  // Function to change state to a random number
  setSecret() {
    this.setState( { secret: Math.round(Math.random()*100) } )
  }

  // Component called automatically when the app is started
  componentDidMount() {
    this.setSecret()
  }

  // Main function render that react native uses to render the code and display
  render () {
    return (
      <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss();
      }}>
        <View style={styles.container}>
          <View style={styles.container1}>
            <TextBox color="blue" size={24} text="Guess my number..." />
          </View>
          <View style={styles.container1}>
            <TextInput style={styles.input} onChangeText={ this.updateGuess } placeholder={'Type here...'} placeholderTextColor={'blue'} ref={input => { this.TextInput = input }}/>  
          </View>
          <View style={styles.container1}>
            <Button title="Guess" color="green" onPress={ this.checkGuess }/>
          </View>
          <View style={styles.container1}>
            <Text>{ this.state.feedback }</Text>
          </View>
          <View style={styles.container1}>
            <Start correct={ this.state.correct } handler={this.restartGame} /> 
          </View>          
        </View>
      </TouchableWithoutFeedback>
    );
  }  

  // Function to restart the game

  restartGame = () => {
    this.setSecret()
    this.setState({ correct: false })
    this.TextInput.clear()
    this.setState({ feedback: '' })
  }

  // Function to update the number that the user guessed
  updateGuess = (userInput) => {
    this.setState( { guess: userInput} )
  }

  // Function to check if the user guessed correct
  checkGuess = () => {
    const userGuess = parseInt( this.state.guess )
    if ( this.state.guess == this.state.secret ) {
      this.setState({ feedback: "You guessed right!" })
      this.setState({ correct: true })
    }
    else if (this.state.guess > this.state.secret) {
      this.setState({ feedback: 'The number is smaller than ' + userGuess + '!' })      
    }
    else if (this.state.guess < this.state.secret) {
      this.setState({ feedback: 'The number is larger than ' + userGuess + '!' })
    }
    else if ( userInput != Int32Array ) {
      this.setState({ feedback: 'Please enter a number!'})
    }
    else {
      this.setState({ feedback: 'You guessed wrong!' })
    }
  }
}

// Stylesheet for the components above
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container1: {
    margin: 27
  },
  greeting: {
    color: 'red',
    fontSize: 35,
  },
  input: {
    minWidth: 200,
    padding: 10,
    textAlign: 'center',
    borderRadius: 2,
    borderWidth: 1,
    borderColor: 'blue',
    backgroundColor: 'white'
  }
});

// Export the class (It does not matter if you export here or on creation when you have only 1 class)
export default App;