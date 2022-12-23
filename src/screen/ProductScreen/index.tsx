import React, {useEffect, useState} from 'react';
import { Text, StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import styles from './styles'
import product from '../../data/ProductIndi';
import QuantitySelector from '../../components/QuantitySelector';
import Button from '../../components/Button';
import ImageCarousel from '../../components/ImageCarousel';


const ProductScreen = () => {
  const [selectedOption, setSelectedOption] = useState(product.options ? product.options[0]: null);
  const [quantity, setQuantity] = useState(1);
  

  const route = useRoute();
  console.log(route.params)

  return (
    <ScrollView style={styles.root}>
      <Text style={styles.title}>{product.title}</Text>

      {/*Image Carousel */}

      <ImageCarousel images={product.images} />

      {/*Option Selector */}

    
      {/* Price */}
      <Text style={styles.price}>{product.price}</Text>
      <Text>{product.oldPrice}</Text>

      {/* Description */}
      <Text style={styles.description}>{product.description}</Text>

      {/* Quantity Selector */}
      <QuantitySelector quantity={quantity} setQuantity={setQuantity}/>
      {/* Button */}
    
      <Button 
      text={'Add to cart'} 
      onPress={() => {
        console.warn('Add to cart')}}
        
      />
      <Button 
      text={'Buy now'} 
      onPress={() => {
        console.warn('Buy now')}} 
      />
    </ScrollView>
  )
}

export default ProductScreen;