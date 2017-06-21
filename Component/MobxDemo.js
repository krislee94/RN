/**
 * Created by air on 2017/5/25.
 */
import React, { PropTypes, Component } from 'react';
import {
    View,
    Navigator,
    TouchableOpacity,
    Text,
    ListView,
    StyleSheet,
    ScrollView,
} from 'react-native';

import { observable, action, computed } from 'mobx';
import { observer } from 'mobx-react/native';
import StarRating from 'react-native-star-rating';

//mobx 结构
//isSelected =》
class CartItem {
    //从数据库取出来的
    name = '';
    price = 0;

    @observable
    count = 0 ;//数目

    @observable
    isSelected=false;

    @observable
    selectAll = false;
    constructor(name,price){
        this.name = name;
        this.price = price;
    }


    @action
    inc = () =>{
        ++this.count;
        this.isSelected = true;
    }

    @action
    dec = ()=>{
        if(this.count >1){
            --this.count;


        }else {
            this.count = 0;
            this.isSelected = false;
        }


    }
    @action
    select = ()=>{

        this.isSelected = !this.isSelected;
        if(this.isSelected){
            ++this.count;
        }else{
            this.count = 0;
        }
    }
    @action
    selectAll=()=>{
        if(this.selectAll == false) {
            this.selectAll = true;
            for (let i = 0; i < 150; i++) {
                this.isSelected = !this.isSelected;
                if (this.isSelected) {
                    ++this.count;
                } else {
                    this.count = 0;
                }
            }
        }
        else{
            this.selectAll == false;
        }
    }


};


//Cart
class Cart{

    @observable
    items = [];

    constructor(){
        for (let i = 0; i < 150; i++) {
            this.items.push(new CartItem(
                `商品${i}`,
                Math.floor(Math.random() * 100000)/100,
            ));
        }
    }
//通过计算得到的值。
    @computed
    get count(){
        return this.items.reduce((a,b)=>a+b.count, 0);
    }

    @computed
    get price(){

        return this.items.reduce((a,b)=>a + (b.price * b.count),0);
    }




}


@observer
class Item extends Component {
    // static propTypes = {
    //     data: PropTypes.instanceOf(CartItem),
    // };
    constructor(props){
        super(props);
        this.state = {
            starCount: 0
        };
    }

    onStarRatingPress(rating) {
        this.setState({
            starCount: rating
        });
    }


    render() {
        const { data } = this.props;

        return (

            <TouchableOpacity onPress = {data.select}>
                <View>

                <View style={styles.item}>
                    <Text  style = {data.isSelected ? styles.istrue :styles.isfalse}>{data.name}</Text>
                    <Text style={styles.price}>${data.price}</Text>
                    <Text style={styles.btn} onPress={data.inc}>+</Text>
                    <Text>{data.count}</Text>
                    <Text style={styles.btn} onPress={data.dec}>-</Text>

                </View>
                    <View>
                        <StarRating
                            disabled={false}
                            maxStars={5}
                            rating={this.state.starCount}
                            selectedStar={(rating) => this.onStarRatingPress(rating)}
                        />
                    </View>

                </View>
            </TouchableOpacity>
        )

    }
};

const Info = observer(function({cart}) {
    return (
        <Text>
            Count: {`${cart.count}`} {'\n'}
            Price: {cart.price.toFixed(2)} {'\n'}
        </Text>
    );
});


@observer
export default class MobxDemo extends Component {



    cart = new Cart();
    CartItem = new CartItem();

    ds = new ListView.DataSource({
        rowHasChanged: (v1, v2) => v1 !== v2,
    });

    renderRow = (data) => {
        return (
            <Item data={data}/>
        );
    };
    //返回
    render() {
        //const { data } = this.props;
        return (
            <View style={styles.container}>



                <ListView
                    dataSource={this.ds.cloneWithRows(this.cart.items.slice(0))}
                    renderRow={this.renderRow}

                />
                <Info cart={this.cart}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'white',
        marginTop:20,
    },
    item: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
    },
    price: {
        marginLeft: 10,
        flex: 1,
    },
    btn: {
        padding: 8,
        borderWidth: 1,
    },
    istrue:{
        color:'red',
    },
    isfalse:{
        color:'gray'
    }
});
