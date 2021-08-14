import React from 'react';
import {View, Text, Image, SafeAreaView} from 'react-native';
import styles from './ProductCard.style'

const ProductCard = ({product}) => {
    return(
        <View style={styles.container}>

        <View style = {styles.inner_contanier}>
            <Image style = {styles.image} source={{uri: product.imgURL}}/>
        
            <Text style = {styles.title}> {product.title} </Text>
            <Text style = {styles.price}> {product.price} </Text>
            <Text style={styles.inStock}>{product.inStock === true ? '' : 'Stokta Yok'}</Text>
        </View>

        </View>
    )
}

export default ProductCard