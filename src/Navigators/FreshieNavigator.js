import React from 'react'
import { Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useTheme } from '@/Hooks'
import {
  FreshieMyOrdersContainer,
  MyMoneyContainer,
  HelpContainer,
  AccountContainer,
} from '@/Containers'

const Tab = createBottomTabNavigator()

const FreshieNavigator = () => {
  const { Images } = useTheme()

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#43C3EF',
        tabBarInactiveTintColor: '#636363',
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Orders"
        component={FreshieMyOrdersContainer}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? Images.orders_active : Images.orders_default}
              style={{ width: 24 }}
              resizeMode="contain"
            />
          ),
          tabBarLabelPosition: 'below-icon',
          title: 'My Orders',
        }}
      />
      <Tab.Screen
        name="Pricing"
        component={MyMoneyContainer}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? Images.wallet_active : Images.wallet}
              style={{ width: 24 }}
              resizeMode="contain"
            />
          ),
          tabBarLabelPosition: 'below-icon',
          title: 'My Money',
        }}
      />
      <Tab.Screen
        name="Help"
        component={HelpContainer}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused ? Images.question_active : Images.question_default
              }
              style={{ width: 24 }}
              resizeMode="contain"
            />
          ),
          tabBarLabelPosition: 'below-icon',
          title: 'Help',
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountContainer}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? Images.account_active : Images.account_default}
              style={{ width: 24 }}
              resizeMode="contain"
            />
          ),
          tabBarLabelPosition: 'below-icon',
          title: 'Account',
        }}
      />
    </Tab.Navigator>
  )
}

export default FreshieNavigator
