import React from 'react';
import {Image, View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {COLORS, FONTS, icons, SIZES, isAdded} from '../../constans';

const ButtonCustom = ({onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.6}
      disabled={isAdded}
      style={[styles.longButton, isAdded && styles.addedButton]}>
      <View style={styles.iconbtnbox}>
        <Image source={icons.card} style={styles.iconbtn} />
      </View>
      <Text style={styles.buttonText}>{isAdded ? 'Added' : 'Add to Cart'}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  longButton: {
    width: SIZES.width * 0.43,
    height: SIZES.height * 0.05,
    backgroundColor: COLORS.green1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: COLORS.primary,
    flexDirection: 'row',
    shadowRadius: 10,
    alignSelf: 'center',
    // borderWidth:1,
    marginLeft: SIZES.width * 0.5,
  },
  addedButton: {
    backgroundColor: COLORS.gray10,
  },
  buttonText: {
    color: COLORS.white,
    textAlign: 'center',
    ...FONTS.fiveHundred,
    fontSize: SIZES.width * 0.036,
    marginBottom: -3,
  },

  iconbtnbox: {
    width: SIZES.width * 0.08,
    height: SIZES.width * 0.08,
    borderRadius: 30,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SIZES.width * 0.02,
    marginLeft: SIZES.width * -0.01,
  },
  iconbtn: {
    width: SIZES.width * 0.03,
    height: SIZES.width * 0.03,
    resizeMode: 'contain',
  },
});
export default ButtonCustom;
