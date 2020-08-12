import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { Button, ThemeProvider } from 'react-native-elements';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Create React Native Web App</Text>
        <Text style={styles.text}>
          Open up src/App.js to start working on your app!
        </Text>
        <Text style={styles.text}>
          Changes you make will automatically reload.
        </Text>
        <ThemeProvider>
          <Button title="Hey!" />
        </ThemeProvider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282c34',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 300,
    height: 300,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  text: {
    color: '#fff',
  },
  button: {
    borderRadius: 3,
    padding: 20,
    marginVertical: 10,
    marginTop: 10,
    backgroundColor: '#1B95E0',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default App;
