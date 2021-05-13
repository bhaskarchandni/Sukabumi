import * as React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import Homepage from './src/screens/Homepage';
import Ticket from './src/screens/Ticket';

class App extends React.Component {

  render() {
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
       
       
<Ticket/>       
       
      </View>
    );
  }
}

export default App;
