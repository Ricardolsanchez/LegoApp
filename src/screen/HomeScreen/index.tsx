import React, {useState, useEffect} from 'react'
import { View, StyleSheet, FlatList, Image, TouchableOpacity, Text } from 'react-native'
import ProductItem from '../../components/ProductItem'
import products from '../../data/products';


const HomeScreen = ({navigation}) => {


    return (
        <View style={styles.page}>
            <View>  
                <Image
                style={styles.carti}
                source={require('../../assets/cart.png')}
                />
                <Text style={styles.cart}>1</Text>
            </View>
            <View style={styles.root}>
            <Image
                style={styles.image}
                source={require('../../assets/profile.jpg') } 
                />
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('Login')}><Text style={styles.text}>Log out</Text></TouchableOpacity>
        
            {/* Render Product Component*/}
            <FlatList
             data={products}
             renderItem={({item}) => <ProductItem item={item} />}
             showsVerticalScrollIndicator={false}
            /> 
        
        </View>
    );
};

const styles = StyleSheet.create ({
    page: {
        padding: 10,
    },
    root: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 50,
        justifyContent:'center',
        alignItems: 'center',
        marginLeft: 280,
        marginBottom: 10,
        borderColor: "#0000ff",
        borderWidth: 1,
    },
    text: {
        color: "blue",
        marginLeft: 298 
    },
    cart: {
        fontWeight:"bold",
        top: 50,
        color:"black"
    },
    carti: {
        top: 45,
        width: 20,
        height:20 ,
        flexDirection: "row"
    }
})


export default HomeScreen;