import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SIZES } from '../../constans'

const styles = StyleSheet.create({
    bottomTabIcon: {
        width: SIZES.width * 0.05,
        height:  SIZES.width * 0.05,
        resizeMode: 'contain',
        // marginRight: SIZES.width * 0.02,
      },
})

export default styles