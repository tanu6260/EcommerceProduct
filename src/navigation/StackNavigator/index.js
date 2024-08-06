import {View, Text, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screen/home';
import {COLORS, FONTS, icons, SIZES} from '../../constans';
import styles from './styles';
import addCart from '../../screen/addCart';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: COLORS.blue,
        tabBarInactiveTintColor: COLORS.gray40,

        tabBarLabelStyle: {
          fontSize: SIZES.width * 0.035,
          fontFamily: FONTS.medium,
          // color:COLORS.blue
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          // title: 'Club List',
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.bag}
              style={[
                styles.bottomTabIcon,
                {tintColor: focused ? COLORS.blue : COLORS.gray40},
              ]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="addCart"
        component={addCart}
        options={{
          title: 'Add Cart',
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.card}
              style={[
                styles.bottomTabIcon,
                {tintColor: focused ? COLORS.blue : COLORS.gray40},
              ]}
            />
          ),
          // headerTitle: () => (
          //   <Text>bbbbbbbbb</Text>
          // ),
          // headerRight: () => <RightNotifyIcon notifyIcon={icons.Notify} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
