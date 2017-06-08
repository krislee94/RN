import React from 'react';
import {
  
    View,
    Image,
    Text,
    Button,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import {StackNavigator,TabNavigator,DrawerNavigator} from 'react-navigation';  

class MyHomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../img/gouwu.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
     <View>
      <Button
        onPress={() => this.props.navigation.navigate('Notifications')}
        title="Go to notifications"
      />
      <Button 
        onPress={()=>this.props.navigation.navigate('DrawerOpen')}
        title="open the draw"
      />
      </View>
    );
  }
}

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../img/quan.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
        <View>
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />

       <Button 
        onPress={()=>this.props.navigation.navigate('DrawerOpen')}
        title="open the draw"
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

const MyApp = DrawerNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Notifications: {
    screen: MyNotificationsScreen,
  },
});
export default class DrawNav extends React.Component {  
  static navigationOptions={
      title:'app',
      gesturesEnabled:false,
      header:null,
  }
  //打开的方法
  open(){
      this.props.navigation.navigate('DrawerOpen');
  }
  render() {  
        return (  
            <View style = {{flex:1,marginTop:20,}}>
                {/*<TouchableOpacity onPress = {this.open.bind(this)}>
                    <Image source = {require('../img/bianji.png')} style = {{width:36,height:36}}/>
                </TouchableOpacity>*/}
          <MyApp />  
          </View>
        );  
  }  
}  

  
