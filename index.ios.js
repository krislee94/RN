import React from 'react';
import {
    AppRegistry,
    View,
    Navigator,
    Text,
    Button,
} from 'react-native';

import { StackNavigator } from 'react-navigation';
//import TabNav from './Component/TabNav';
import Dsome from './Component/Dsome';

class HomeScreen extends React.Component {
  
  static navigationOptions = {
    title: 'Welcome',
  };
  constructor(){
    super();
    this.state={
      boom:4,
    }
  }
  render() {
    const { navigate } = this.props.navigation;
   
    return(
       
      <View>
        <Text>Hello, Chat App!</Text>
        <Button
          onPress={() => navigate('Chat', { user: 'Lucy' })}
          title="Chat with Lucy"
        />
        <Button 
          onPress={()=>navigate('Dsome',{
            boom:this.state.boom,
              callback: (data)=>{
                    this.setState({
                      boom:data,
                    })
                     }
          }
           )}
          title="Dsome"
        />

        <Text>我的参数为:{this.state.boom}</Text>
      </View>
    );
  }
}
class ChatScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Chat with ${navigation.state.params.user}`,
  });
  render() {
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>Chat with {params.user}</Text>
      
      </View>
    );
  }
}
const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
  Dsome:{screen:Dsome},
});

AppRegistry.registerComponent('Hello', () => SimpleApp);
