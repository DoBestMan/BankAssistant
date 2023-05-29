import React from 'react'
import { View, StatusBar } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import {
  StartupContainer,
  HomeContainer,
  CustomerOnboardingContainer,
  FreshieOnboardingContainer,
  LoginContainer,
  FreshieIntroductionContainer,
  MessageContainer,
  OrderDetailsContainer,
  OrdersContainer
} from '@/Containers'
import { useTheme } from '@/Hooks'
import MainNavigator from './Main'
import FreshieNavigator from './FreshieNavigator'
import { navigationRef } from './utils'

const Stack = createStackNavigator()

// @refresh reset
const ApplicationNavigator = () => {
  const { Layout, darkMode, NavigationTheme } = useTheme()
  const { colors } = NavigationTheme

  return (
    <View style={[Layout.fill, { backgroundColor: colors.card }]}>
      <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
        <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Startup" component={StartupContainer} />
          <Stack.Screen name="Home" component={HomeContainer} />
          <Stack.Screen
            name="CustomerOnboarding"
            component={CustomerOnboardingContainer}
          />
          <Stack.Screen
            name="FreshieOnboarding"
            component={FreshieOnboardingContainer}
          />
          <Stack.Screen
            name="FreshieIntroduction"
            component={FreshieIntroductionContainer}
          />
          <Stack.Screen name="Login" component={LoginContainer} />
          <Stack.Screen name="OrdersContainer" component={OrdersContainer} />
          <Stack.Screen
            name="UserMain"
            component={MainNavigator}
            options={{
              animationEnabled: false,
            }}
          />
          <Stack.Screen name="MessagePage" component={MessageContainer} />
          <Stack.Screen name="OrderDetailsPage" component={OrderDetailsContainer} />
          <Stack.Screen
            name="FreshieMain"
            component={FreshieNavigator}
            options={{
              animationEnabled: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  )
}

export default ApplicationNavigator
