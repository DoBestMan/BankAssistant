import React from 'react'
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native'
import { useTheme } from '@/Hooks'
import { navigate } from '@/Navigators/utils'
const HomeContainer = () => {
  const { Layout, Images, Fonts, Colors, Gutters } = useTheme()

  return (
      <View style={[Layout.fill, styles.background]}>
        <Image
          style={styles.backgroundImg}
          source={Images.home}
          resizeMode="stretch"
        />

        <View style={[Layout.fill, styles.container]}>
          <Image
            style={Gutters.smallVMargin}
            source={Images.logo_full}
            resizeMode="contain"
          />
          <Text style={[Fonts.textLarge, styles.title]}>Your best local</Text>
          <Text style={[Fonts.textLarge, styles.title]}>mobile laundry</Text>
          <Text style={[Fonts.textLarge, styles.title]}>service</Text>
          <Text style={[Fonts.textSmall, styles.text, { color: Colors.white }]}>
            Let us take a load off! Serving Tulsa, OK and surrounding areas Fresh
            Fabrics is a wash, dry, fold service that picks up and drops off at
            your desired location. Returning all items same day!
          </Text>

          <View
            style={[
              Layout.fill,
              Layout.justifyContentCenter,
              Gutters.largeBMargin,
            ]}
          >
            <TouchableOpacity
              style={[styles.startBtn, Layout.center]}
              onPress={() => navigate('CustomerOnboarding')}
            >
              <Text style={[Fonts.textRegular, styles.startBtnText]}>
                Get started
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.loginBtn, Gutters.regularTMargin, Layout.center]}
              onPress={() => navigate('Login')}
            >
              <Text style={[Fonts.textRegular, styles.loginBtnText]}>Log in</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[Gutters.regularTMargin, Layout.center]}
              onPress={() => navigate('FreshieOnboarding')}
            >
              <Text style={[Fonts.textRegular, styles.startBtnText]}>
                {'Become a Freshie >'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
  )
}

export default HomeContainer

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#43C3EF',
  },
  backgroundImg: {
    width: '100%',
    marginBottom: 0,
  },
  title: {
    color: '#ffffff',
    fontWeight: '800',
  },
  text: {
    color: '#ffffff',
    fontWeight: '500',
    lineHeight: 20,
    marginTop: 0,
  },
  container: {
    paddingHorizontal: 30,
  },
  startBtn: {
    height: 45,
    borderRadius: 80,
    backgroundColor: '#333593',
    marginTop: 25,
  },
  startBtnText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '600',
  },
  loginBtn: {
    height: 45,
    borderRadius: 80,
    backgroundColor: '#ffffff',
  },
  loginBtnText: {
    color: '#000000',
    fontSize: 15,
    fontWeight: '600',
  },
})
