import * as React from 'react';
import { Text, View, StyleSheet, Image, Alert } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Колибри 🐦 </Text>
      <Card>
        <Image style={{justifyContent:"center", alignSelf: "center"}} source={require('./assets/Jacobin.png')}/>
        <Text style={styles.paragraph}>Интересный факт</Text>
        <Text style={styles.text}>Колибри — самые маленькие птицы на Земле. Вес самых маленьких колибри из числа взрослых особей не составляет порядка трёх граммов.</Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    marginTop: 30,
    marginLeft: 24,
    fontSize: 35,
    fontWeight: 'bold',
  },
  title: {
    margin: 20,
    fontSize: 40,
    fontWeight: 'bold',
    alignSelf: "center"
  },
  text: {
    marginLeft: 25,
    marginRight: 24,
    marginTop: 15,
    fontSize: 20,
    marginBottom: 20
  }
});