import React from 'react';
import {
    AppRegistry,
    View,
    Navigator,
    Text,
    Button,
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import TabNav from './Component/TabNav';
import Dsome from './Component/Dsome';
import DrawNav from './Component/DrawNav';
import MobxDemo from './Component/MobxDemo';
import Profile from './Component/Profile';
import WeChatDemo from './Component/WeChatDemo';
import CameraDemo from './Component/CameraDemo';

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

         <Button
          onPress={() => navigate('TabNav')}
          title="调到TabBar"
        />

        <Button
          onPress={() => navigate('DrawNav')}
          title="抽屉导航"
        />

          <Button
            onPress={()=>navigate('MobxDemo')}
            title="Mobx案例(一)"
          />
          <Button 
            onPress={()=>navigate('wechat')}
            title="wechat分享"
          />
          <Button
            onPress = {()=>navigate('cam')}
            title = '相机相册'
          />
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
  TabNav:{screen:TabNav},
  DrawNav:{screen:DrawNav},
  MobxDemo:{screen:MobxDemo},
  Profile:{screen:Profile},
  wechat:{screen:WeChatDemo},
    cam:{screen:CameraDemo},
});

AppRegistry.registerComponent('Hello', () => SimpleApp);
