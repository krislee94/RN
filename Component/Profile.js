import React from 'react';
import {
  
    View,

    Text,
    Button,
} from 'react-native';

import { StackNavigator } from 'react-navigation';

export default class Profile extends React.Component{
        
     static navigationOptions = {
        
        title:'halo',
        
        headerTitleStyle:{fontSize:30,color:'red',},
         headerTintColor:'blue',  //左箭头颜色
         gesturesEnabled:true,
         headerStyle:{backgroundColor:'#f5f5f5'}
    }
    constructor(props){
        super(props);
        this.state = {
            visible:false,
            boom:5,
        }
    }
    goback(){
        const {navigate,goBack,state} = this.props.navigation;
        state.params.callback(this.state.boom);
        this.props.navigation.goBack();  
    }
   

    render(){      
        const { params } = this.props.navigation.state;
         const {navigate} = this.props.navigation;
         const {goBack} = this.props.navigation;
        return(
            <View style = {{marginTop:20,backgroundColor:'#f5f5f5',flex:1}}>
               
                 <Text>this is Profile</Text>
                 <Button
                     onPress={() => goBack()}
                     title="Go back from this HomeScreen"
                 />
                 <Button
                     onPress={() => goBack(null)}
                     title="Go back anywhere"
                 />
                 <Button
                     onPress={() => navigate('Home')}
                     title="返回主页"
                 />

            </View>
        );
    }
}