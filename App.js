import * as React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import Homepage from './src/screens/Homepage';
import Circle from './src/screens/Homepage';


class App extends React.Component {

  render() {
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
       
       
<Homepage/>       
       
      </View>
    );
  }
}

export default App;
