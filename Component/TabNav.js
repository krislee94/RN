import React from 'react';
import {

    View,
    module,
    Text,
    Button,
    StyleSheet,
    Image,
} from 'react-native';
import { TabNavigator } from "react-navigation";


class RecentChatsScreen extends React.Component {
    static navigationOptions = {
    tabBarLabel: 'Home',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../img/gouwu.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };
  render() {
    return <Text>List of recent chats</Text>
  }
}

class AllContactsScreen extends React.Component {
 static navigationOptions = {
    tabBarLabel: 'Notifications',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../img/quan.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return <Text>List of all contacts</Text>
  }
}
 const TabNavigation = TabNavigator({
  Recent: { screen: RecentChatsScreen },
  All: { screen: AllContactsScreen },
});

export default class TabNav extends React.Component{
    static navigationOptions = {
        title:'TabNav',
};
    render(){
        return(
           
                <TabNavigation />
                
       
        );
    }
}

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});

