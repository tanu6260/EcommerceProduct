import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, FlatList} from 'react-native';
import { useDispatch, useSelector} from 'react-redux';
import Cart from '../../components/cart';
import {
  addItemAction,
  getItemsAction,
} from '../../redux/action/productAction';
import styles from './styles';

const Home = () => {
  const [addedItems, setAddedItems] = useState([]);
  const dispatch = useDispatch();
  const items = useSelector(state => state.items);

  useEffect(() => {
      dispatch(getItemsAction());
  }, [dispatch]);

  const handleAddToCart = (item) => {
      dispatch(addItemAction(item));
      setAddedItems([...addedItems, item?.id]);
  };

  return (
      <View style={styles.mainConianer}>
          <ScrollView style={styles.innerContainer}
          showsVerticalScrollIndicator={false}
          >
              <FlatList
                  data={items}
                  keyExtractor={item => item.id.toString()}
                  renderItem={({ item, index }) => (
                      <Cart
                          key={index}
                          title={item?.title}
                          mrp={item?.price + 10} 
                          off={10}
                          brand={item?.category}
                          price={item?.price}
                          img={item?.image}
                          rate={item?.rating?.rate}
                          rating={item?.rating?.count}
                          isAdded={addedItems?.includes(item?.id)}
                          onPress={() => handleAddToCart(item)}
                          isHomePage={true}
                      />
                  )}
              />
          </ScrollView>
      </View>
  );
};

export default Home;
