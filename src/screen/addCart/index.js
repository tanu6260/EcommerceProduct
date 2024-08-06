import {View, Text, ScrollView, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import Cart from '../../components/cart';
import styles from './styles';
import {connect, useSelector} from 'react-redux';

const AddCart = ({}) => {
  const cartItems = useSelector(state => state.cartItems);
  console.log('cartItems.................', cartItems);
  return (
    <View style={styles.mainConianer}

    >
      <ScrollView style={styles.innerContainer}
      showsVerticalScrollIndicator={false}
      >
        <FlatList
          data={cartItems}
          renderItem={({item, index}) => (
            <Cart
              key={index}
              title={item.title}
              mrp={item.price + 10} 
              off={10}
              brand={item.category}
              price={item.price}
              img={item.image}
              rate={item.rating.rate}
              rating={item.rating.count}
              isHomePage={false}
            />
          )}
        />
      </ScrollView>
    </View>
  );
};

export default AddCart;
