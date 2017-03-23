/**
 * Created by air on 2017/3/22.
 */
import React from 'react';
import {
    View,
    Navigator,
    TouchableOpacity,
    Text
} from 'react-native';

import SecondPageComponent from './SecondPageComponent';

export default class FirstPageComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id:2,
            user:null,
        };
    }
    _pressButton() {
        let _this = this;
        const { navigator } = this.props;
        //为什么这里可以取得 props.navigator?请看上文:
        //<Component {...route.params} navigator={navigator} />
        //这里传递了navigator作为props
        if(navigator) {
            navigator.push({
                name: 'SecondPageComponent',
                component: SecondPageComponent,
                params: {
                    id: this.state.id,
                    //从SecondPageComponent获取user

                    getUser:function(user){
                        _this.setState({
                            user:user
                        })
                    }
                }
            });
        }
    }
    render() {
        if( this.state.user){
            return(
              <View style={{marginTop:100,marginLeft:100}}>
                  <Text>用户信息：{JSON.stringify(this.state.user)}</Text>
              </View>
            );
        }else {
            return(
                <View style={{marginTop:100,marginLeft:100}}>
                    <TouchableOpacity onPress={this._pressButton.bind(this)}>
                        <Text>查询ID为{ this.state.id }的用户信息</Text>
                    </TouchableOpacity>
                </View>
            );
        }

    }
}