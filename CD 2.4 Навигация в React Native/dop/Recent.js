import * as React from 'react';
import { List } from 'react-native-paper';
import { Searchbar } from 'react-native-paper';
import { Avatar } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import { Divider } from 'react-native-elements';
import { Text, View, Image, StyleSheet, Button, Alert, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function RecentScreen() {
  return (<ScrollView style={{marginTop:20}}>
    <List.Item
    title="Anton"
    description='14:26'
    titleStyle={{ fontWeight: 'bold'}}
    onPress={() => Alert.alert('Перезвонить')}
    left={props => <Avatar rounded size={80} source={require('../lego4.jpg')} />}
    right={props => <Icon name='phone-incoming' type='feather' style={{flex:1, justifyContent: 'center', alignSelf:'center'}}/>}
    />
    <Divider orientation="horizontal" />
    <List.Item
    title="Anton"
    description='14:24'
    titleStyle={{ fontWeight: 'bold'}}
    onPress={() => Alert.alert('Перезвонить')}
    left={props => <Avatar rounded size={80} source={require('../lego4.jpg')} />}
    right={props => <Icon name='phone-incoming' type='feather' style={{flex:1, justifyContent: 'center', alignSelf:'center'}}/>}
    />
    <Divider orientation="horizontal" />
    <List.Item
    title="Anton"
    description='14:23'
    titleStyle={{ fontWeight: 'bold'}}
    onPress={() => Alert.alert('Перезвонить')}
    left={props => <Avatar rounded size={80} source={require('../lego4.jpg')} />}
    right={props => <Icon name='phone-forwarded' type='feather' style={{flex:1, justifyContent: 'center', alignSelf:'center'}}/>}
    />
    <Divider orientation="horizontal" />
    <List.Item
    title="Igor"
    description='Пятница'
    titleStyle={{ fontWeight: 'bold'}}
    onPress={() => Alert.alert('Перезвонить')}
    left={props => <Avatar rounded size={80} source={require('../lego3.jpg')} />}
    right={props => <Icon name='phone-incoming' type='feather' style={{flex:1, justifyContent: 'center', alignSelf:'center'}}/>}
    />
    <Divider orientation="horizontal" />
    <List.Item
    title="Anton"
    description='Среда'
    titleStyle={{ fontWeight: 'bold'}}
    onPress={() => Alert.alert('Перезвонить')}
    left={props => <Avatar rounded size={80} source={require('../lego4.jpg')} />}
    right={props => <Icon name='phone-missed' type='feather' style={{flex:1, justifyContent: 'center', alignSelf:'center'}}/>}
    />
    <List.Item
    title="Неизвестный номер"
    description={'89251717929\nВторник'}
    bottomDivider
    titleStyle={{ fontWeight: 'bold'}}
    onPress={() => Alert.alert('Перезвонить')}
    left={props => <Avatar rounded size={80} source={require('../legounknown.jpg')} />}
    right={props => <Icon name='phone-incoming' type='feather' style={{flex:1, justifyContent: 'center', alignSelf:'center'}}/>}
    />
    <Divider orientation="horizontal" />
    <List.Item
    title="Dima"
    description='Понедельник'
    titleStyle={{ fontWeight: 'bold'}}
    onPress={() => Alert.alert('Перезвонить')}
    left={props => <Avatar rounded size={80} source={require('../notlego.jpg')} />}
    right={props => <Icon name='phone-incoming' type='feather' style={{flex:1, justifyContent: 'center', alignSelf:'center'}}/>}
    />
    <Divider orientation="horizontal" />
    <List.Item
    title="Неизвестный номер"
    description={'86749672039\nПонедельник'}
    bottomDivider
    titleStyle={{ fontWeight: 'bold'}}
    onPress={() => Alert.alert('Перезвонить')}
    left={props => <Avatar rounded size={80} source={require('../legounknown.jpg')} />}
    right={props => <Icon name='phone-incoming' type='feather' style={{flex:1, justifyContent: 'center', alignSelf:'center'}}/>}
    />
    <Divider orientation="horizontal" />
    <List.Item
    title="Dima"
    description='Понедельник'
    titleStyle={{ fontWeight: 'bold'}}
    onPress={() => Alert.alert('Перезвонить')}
    left={props => <Avatar rounded size={80} source={require('../notlego.jpg')} />}
    right={props => <Icon name='phone-incoming' type='feather' style={{flex:1, justifyContent: 'center', alignSelf:'center'}}/>}
    />
  </ScrollView>
);
}