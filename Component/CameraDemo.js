/**
 * Created by Krislee on 2017/7/5.
 * Krislee 用于测试相机相册。
 * 测试三方组件react-native-image-crop-picker。
 */
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
import ActionModal from './utils/ActionModal';
import ImagePicker from 'react-native-image-crop-picker';

var array = [];

export default class CameraDemo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            actionvisible:false,
            image:'',

        }
    }
    //调用单图选择器与裁剪
    singlePicker=()=> {
        this.hidePictureModal();
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
            cropperCircleOverlay:true,
        }).then(image => {
            console.log(image);
        });
    }
    //关闭modal
    hidePictureModal(){
        this.setState({actionvisible:false})
    }
    //调用选择多个图片的选择器
    multiPicker = ()=>{
        this.hidePictureModal();
        ImagePicker.openPicker({
            multiple: true,
            includeBase64:true,
            loadingLabelText:'正在加载...',
            enableRotationGesture:'true' //仅ios。
        }).then((images) => {
             array = [];
            // for(let i=0;i<images.length;i++){
            //     array.push(
            //         <Image key = {i} source={require(images[i].path)} style = {{width:50,height:50}}/>
            //     );
            // }

            for(let v of images){
                array.push(
                    v.path
                )
            }

            //console.log(array);

            console.log(images);
        }).catch((error)=>{
            alert("111");
        });

    }
    //拍照选择
    openCamera=()=>{
        this.hidePictureModal();
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image);
        });
    }

    //裁剪图片
    cutPicture=()=>{
        this.hidePictureModal();
        ImagePicker.openCropper({
            path: 'my-file-path.jpg',
            width: 300,
            height: 400
        }).then(image => {
            console.log(image);
        });
    }

    render(){
        return(
            <View>
                <Text style= {{fontSize:22,color:'blue',}}>用于测试相机相册。组件为：react-native-image-crop-picker </Text>
                <ActionModal
                    actionvisible = {this.state.actionvisible}
                    hideModal = {()=>{this.setState({actionvisible:false})}}
                    functiontext1 = {this.openCamera.bind(this)}
                    functiontext2 = {this.singlePicker.bind(this)}
                    closeAction = {()=>{this.setState({actionvisible:false})}}

                />
                <TouchableOpacity onPress={()=>{this.setState({actionvisible:true})}}>
                <Image source={require('../img/bianji.png')} style= {{width:40,height:40}} />
                <Text>choose picture</Text>

                </TouchableOpacity>
                    <View style = {{height:50}}/>
                {/*<View>*/}
                    {/*{array}*/}
                {/*</View>*/}
                {/*<View>*/}
                    {/*<Image source={require(array[0])}/>*/}
                {/*</View>*/}

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

