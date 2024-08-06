import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {SIZES, COLORS, FONTS, icons, images} from '../../constans';
import ButtonCustom from '../button';

const Cart = ({
  cartboxstyle,
  title,
  mrp,
  off,
  brand,
  price,
  rate,
  rating,
  onPress,
  isHomePage,
  isAdded,
}) => {
  return (
    <>
      <View
        activeOpacity={0.6}
        style={[styles.cartbox, cartboxstyle]}
        disabled={true}>
        <View>
          <Image source={images.contact} style={styles.mainimg} />
        </View>
        <View style={styles.textbox}>
          <View style={styles.row}>
            <View style={styles.greenbox}>
              <Text style={styles.rate}>{rate}</Text>
              <Image source={icons.star} style={styles.star} />
            </View>
            <Text style={styles.brand}>({rating} ratings)</Text>
          </View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.brand}>Brand : {brand}</Text>
          <View style={styles.row}>
            <Text style={styles.brand}>MRP </Text>
            <Text style={[styles.brand, {textDecorationLine: 'line-through'}]}>
              ₹{mrp}
            </Text>
            <Text style={styles.offtext}>{off} %OFF</Text>
          </View>
          <Text style={styles.price}>₹{price}</Text>

          {isHomePage && <ButtonCustom onPress={onPress} isAdded={isAdded} />}
        </View>
      </View>
    </>
  );
};

export default Cart;

const styles = StyleSheet.create({
  cartbox: {
    width: SIZES.width * 0.94,
    borderWidth: 1,
    borderColor: COLORS.gray10,
    borderRadius: 10,
    paddingVertical: SIZES.height * 0.01,
    marginVertical: SIZES.height * 0.008,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textbox: {
    width: SIZES.width * 0.6,
    paddingHorizontal: SIZES.width * 0.02,
    // borderWidth: 1,
  },
  title: {
    fontSize: SIZES.width * 0.035,
    ...FONTS.fiveHundred,
    color: 'black',
    marginVertical: 4,
  },
  rate: {
    fontSize: SIZES.width * 0.028,
    ...FONTS.fiveHundred,
    color: COLORS.white,
    marginBottom: -5,
  },
  brand: {
    fontSize: SIZES.width * 0.035,
    ...FONTS.fiveHundred,
    color: COLORS.gray50,
    marginVertical: 1,
  },
  offtext: {
    fontSize: SIZES.width * 0.028,
    ...FONTS.fiveHundred,
    color: COLORS.pink,
    marginLeft: SIZES.width * 0.04,
  },
  price: {
    fontSize: SIZES.width * 0.036,
    ...FONTS.fiveHundred,
    color: COLORS.black,
    marginVertical: 4,
  },
  mainimg: {
    width: SIZES.width * 0.6,
    height: SIZES.height * 0.2,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  heartbox: {
    width: SIZES.width * 0.12,
    height: SIZES.height * 0.04,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
  heart: {
    width: SIZES.width * 0.054,
    height: SIZES.height * 0.04,
    resizeMode: 'contain',
  },
  star: {
    width: SIZES.width * 0.04,
    height: SIZES.height * 0.014,
    resizeMode: 'contain',
    tintColor: COLORS.white,
    // borderWidth:1,
  },

  carticon: {
    width: SIZES.width * 0.06,
    height: SIZES.width * 0.06,
    resizeMode: 'contain',
  },
  carticonbox: {
    borderWidth: 1,
    borderColor: COLORS.primary,
    marginRight: SIZES.width * 0.03,
    width: SIZES.width * 0.09,
    height: SIZES.width * 0.085,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  greenbox: {
    backgroundColor: 'green',
    flexDirection: 'row',
    alignItems: 'center',
    width: SIZES.width * 0.12,
    borderRadius: 3,
    justifyContent: 'center',
    height: SIZES.height * 0.024,
    marginRight: SIZES.width * 0.03,
  },
  btnstyle: {width: SIZES.width * 0.28, height: SIZES.height * 0.044},
  redboxstyle: {
    position: 'absolute',
  },
});
