import React, { useEffect } from 'react'
import {
  Alert,
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import { useState } from 'react'
import { useTheme } from '@/Hooks'
import { Brand } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import { navigate } from '@/Navigators/utils'
import jwt_decode from "jwt-decode";

const LoginContainer = () => {
  const { Layout, Images, Fonts, Common, Colors, Gutters } = useTheme()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onLogin = async () => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "email": email,
        "password": password
      })
    };
    const jwt_token = await fetch('https://freshfabrics.app/api/v1/login', requestOptions);
    console.log(`jwt_token`,jwt_token);

    const user = await jwt_token.json();
    console.log(`user`,user);

    const decoded_token = jwt_decode(user.bearerToken);
    console.log(`decoded_token`,decoded_token);

    navigate(decoded_token.role == 2 ? 'UserMain' : 'FreshieMain');
  }

  return (
    <SafeAreaView style={[Layout.fill, styles.background]}>
      <View>
        <View
          style={[Layout.row, Gutters.largeHMargin, Gutters.regularTMargin]}
        >
          <TouchableOpacity onPress={() => navigate('Home')}>
            <Image source={Images.left_arrow} resizeMode="contain" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={[Layout.fill, styles.container]}>
        <Text style={[Fonts.textLarge, styles.title]}>Log in Topic</Text>

        <View style={[Layout.fill, Gutters.largeBMargin]}>
          <Text style={[Gutters.smallBMargin, Gutters.largeTMargin]}>
            Email address
          </Text>
          <View style={[Common.shadow, Common.borderRadius]}>
            <TextInput
              style={[styles.textInput]}
              placeholder="Enter your email"
              onChangeText={text => setEmail(text)}
            />
          </View>

          <Text style={[Gutters.largeTMargin]}>Password</Text>
          <View
            style={[Gutters.smallTMargin, Common.shadow, Common.borderRadius]}
          >
            <TextInput
              style={[styles.textInput]}
              placeholder="Enter your password"
              onChangeText={text => setPassword(text)}
              secureTextEntry
            />
          </View>

          <TouchableOpacity
            style={[styles.button, Layout.center]}
            onPress={onLogin}
          >
            <Text style={[Fonts.textRegular, styles.buttonText]}>Log in</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[Layout.center, Gutters.regularTMargin]}>
            <Text style={[Fonts.textSmall, { color: '#43C3EF' }]}>
              Forgot your password
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default LoginContainer

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#ffffff',
  },
  backgroundImg: {
    width: '100%',
    marginBottom: 20,
  },
  title: {
    color: '#43C3EF',
    fontWeight: '800',
  },
  text: {
    color: '#ffffff',
    fontWeight: '500',
    lineHeight: 20,
    marginTop: 15,
  },
  container: {
    paddingHorizontal: 30,
    marginTop: 20,
  },
  textInput: {
    height: 50,
    backgroundColor: '#fffff',
    borderRadius: 10,
    borderColor: '#eeeeee',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  button: {
    height: 45,
    borderRadius: 80,
    backgroundColor: '#43C3EF',
    marginTop: 40,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '600',
  },
  progressWrapper: {
    backgroundColor: '#F4F4F4',
    height: 4,
    marginTop: 10,
  },
  progressBar: {
    backgroundColor: '#56DBAB',
    height: 4,
  },
  descriptionText: {
    color: '#A7A7A7',
    fontWeight: '500',
    lineHeight: 20,
    marginTop: 15,
  },
})
