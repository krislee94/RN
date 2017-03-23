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

import FirstPageComponent from './FirstPageComponent';

const USER_MODELS={
    1: { name: 'mot', age: 23 },
    2: { name: '晴明大大', age: 25 }
};
export default class SecondPageComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id:null
        };
    }
    componentDidMount(){
        this.setState({id:this.props.id});
    }
    _pressButton() {
        const { navigator } = this.props;
        if(this.props.getUser){
            let user = USER_MODELS[this.props.id];
            this.props.getUser(user);
        }
        if (navigator){
            navigator.pop();
        }
    }


    render() {
        return (
            <View style={{marginTop:100,marginLeft:100}}>
                <Text>获取的参数为:id={this.state.id}</Text>
                <TouchableOpacity onPress={this._pressButton.bind(this)} >
                    <Text>点我跳回去</Text>
                </TouchableOpacity>
            </View>
        );
    }
}