

import React, {Component} from 'react'

import {

    StyleSheet
} from 'react-native'
import
    Modal

    from 'react-native-root-modal'

import Loading from './Loading'

export default class ModalActivity extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        console.log("  "+this.props.visible);
        this.state = {
            onRequestClose: true,
            visibleM:this.props.visible,
        };
    }

    componentWillMount() {

    }


    componentWillReceiveProps(nextProps) {
        let _this = this;
        this.setState({
            visibleM:true,
        })
        if(nextProps.visible){
            console.log("进入判断");
            this.timer = setTimeout(()=>{
                console.log("333")
                _this.setState({
                    visibleM:false,
                })
            },4000)

        }
       // console.log("2222"+this.state.visibleM)
       // return true;
        return nextProps;
    }


    render(){
        console.log("打印子组件state   "+this.state.visibleM);
        return(
            <Modal animationType={'none'}
                   transparent={true}
                   visible={this.state.visibleM}
                   onRequestClose={() => {this._setModalVisible(false)}}>
                <Loading/>
            </Modal>
        )
    }


    _setModalVisible(visible) {
        this.setState({
            onRequestClose: visible}
        );
    }

}

const styles = StyleSheet.create({

});