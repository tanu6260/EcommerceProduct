import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../constans';

const styles = StyleSheet.create({
  mainConianer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  innerContainer: {
    width: SIZES.width * 0.94,
    alignSelf: 'center',
    backgroundColor: COLORS.white,
  },
});

export default styles;
