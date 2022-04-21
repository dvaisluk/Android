import * as React from 'react';
import { List } from 'react-native-paper';
import { Searchbar } from 'react-native-paper';
import { Avatar } from 'react-native-elements';
import { Divider } from 'react-native-elements';
import { Text, View, Image, StyleSheet, Button, Alert, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function HomeScreen() {
  const navigation = useNavigation();

  function toProfile(i) {
        navigation.navigate("Контакт " + i);
  }
  function toMyProfile() {
        navigation.navigate("Мой профиль")
  }
  return(<ScrollView>
    <List.Item
    title="Alex"
    titleStyle={{ fontWeight: 'bold' }}
    description="Мой профиль"
    onPress={() => toMyProfile()}
    left={props => <Avatar rounded size={140} source={require('../clego.jpg')} />}
    />
    <Divider orientation="horizontal" />
    <List.Item
    title="Gergy"
    bottomDivider
    titleStyle={{ fontWeight: 'bold' }}
    onPress= {() => toProfile("1")}
    left={props => <Avatar rounded size={80} source={require('../lego1.jpg')} />}
    />
    <Divider orientation="horizontal" />
    <List.Item
    title="Mila"
    titleStyle={{ fontWeight: 'bold' }}
    onPress= {() => toProfile("2")}
    left={props => <Avatar rounded size={80} source={require('../lego2.jpg')} />}
    />
    <Divider orientation="horizontal" />
    <List.Item
    title="Igor"
    bottomDivider
    titleStyle={{ fontWeight: 'bold' }}
    onPress= {() => toProfile("3")}
    left={props => <Avatar rounded size={80} source={require('../lego3.jpg')} />}
    />
    <Divider orientation="horizontal" />
    <List.Item
    title="Anton"
    bottomDivider
    titleStyle={{ fontWeight: 'bold' }}
    onPress= {() => toProfile("4")}
    left={props => <Avatar rounded size={80} source={require('../lego4.jpg')} />}
    />
    <Divider orientation="horizontal" />
    <List.Item
    title="Dima"
    titleStyle={{ fontWeight: 'bold' }}
    onPress= {() => toProfile("5")}
    left={props => <Avatar rounded size={80} source={require('../notlego.jpg')} />}
    bottomDivider
    />
    <Divider orientation="horizontal" />
    <List.Item
    title="Nikita"
    titleStyle={{ fontWeight: 'bold' }}
    onPress= {() => toProfile("6")}
    left={props => <Avatar rounded size={80} source={require('../lego5.jpg')} />}
    />
  </ScrollView>);
}

