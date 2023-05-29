import React from 'react'
import {
  StyleSheet,
  View,
  Image,
  Text,
  SafeAreaView,
} from 'react-native'
import { useTheme } from '@/Hooks'

const Rewards = () => {
  const { Layout, Images} = useTheme()

  return (
      <SafeAreaView style={styles.wrapper}>
        <View
          style={[
            styles.imageWrapper,
            Layout.fill,
            Layout.alignItemsCenter,
            Layout.justifyContentCenter,
          ]}
        >
          <View style={styles.reward}>
            <Image style={styles.rewardIcon} source={Images.reward} resizeMode="contain" />
          </View>
          
          <Text style={styles.title}>5 more to go!</Text>
          <Text style={[styles.description]}>{"Order 5 more times and save the \n service fee (-$7.50) on your next order."}</Text>
          <View style={[styles.tags, Layout.row, Layout.alignItemsCenter]}>
            <View style={styles.stepNumberWrapper}>
              <Text style={styles.stepNumber}>{1}</Text>
            </View>
            <View style={styles.stepNumberWrapper}>
              <Text style={styles.stepNumber}>{2}</Text>
            </View>
            <View style={styles.stepNumberWrapper}>
              <Text style={styles.stepNumber}>{3}</Text>
            </View>
            <View style={styles.stepNumberWrapper}>
              <Text style={styles.stepNumber}>{4}</Text>
            </View>
            <View style={styles.stepNumberWrapper}>
              <Image style={styles.lastTag} source={Images.LastTag} resizeMode="contain" />
            </View>
          </View>
          <View style={[styles.tags, Layout.row, Layout.alignItemsCenter]}>
            <View style={styles.stepNumberWrapper}>
              <Text style={styles.stepNumber}>{1}</Text>
            </View>
            <View style={styles.stepNumberWrapper}>
              <Text style={styles.stepNumber}>{2}</Text>
            </View>
            <View style={styles.stepNumberWrapper}>
              <Text style={styles.stepNumber}>{3}</Text>
            </View>
            <View style={styles.stepNumberWrapper}>
              <Text style={styles.stepNumber}>{4}</Text>
            </View>
            <View style={styles.stepNumberWrapper}>
              <Image style={styles.lastTag} source={Images.LastTag} resizeMode="contain" />
            </View>
          </View>
        </View>
      </SafeAreaView>
  )
}

export default Rewards

const styles = StyleSheet.create({
  reward: {
    marginTop: -150,
    backgroundColor: '#E3F5FC',
    width: '100%',
    height: 260,
  },
  lastTag: {
    width: 21,
    height: 21,
  },
  rewardIcon: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto'

  },
  wrapper: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  socialLink: {
    marginHorizontal: 25,
  },
  center: {
    textAlign: 'center',
    marginTop: 20,
  },
  topPg: {
    marginTop: 34,
  },
  footer: {
    marginTop: 40,
  },
  addressState: {
    width: '90%'
  },
  dropDown: {
    borderWidth: 1,
    borderColor: 'white',
  },
  items: { marginVertical: 15 },
  tags: {
    position: 'relative',
    height: 30,
    justifyContent: 'center',
    marginTop: 30,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: 30,
    justifyContent: 'center',
    marginTop: 30,
  },
  title: {
    color: '#43C3EF',
    fontWeight: '900',
    fontSize: 36,
    marginTop: 30,
  },
  closeButton: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
  },
  imageWrapper: {
    marginVertical: 50,
    marginTop: 30,
  },
  orderOnline: {
    marginTop: -20
  },
  stepNumberWrapper: {
    width: 45,
    height: 45,
    borderRadius: 40,
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 9,
    backgroundColor: '#F4F4F4',
    justifyContent: 'center',
  },
  stepNumber: {
    color: '#A7A7A7',
    fontSize: 16,
    fontWeight: '700',
  },
  stepTitle: {
    color: '#43C3EF',
    fontWeight: '900',
    fontSize: 48,
    marginTop: 30,
  },
  grey: {
    color: '#636363',
    fontSize: 13,
  },
  description: {
    textAlign: 'center',
    lineHeight: 22,
    color: '#0E0E0E',
    paddingHorizontal: 5,
    fontFamily: 'Inter',
    fontSize: 15,
  },
  goHome: {
    width: '70%',
  },
  button: {
    height: 45,
    borderRadius: 80,
    backgroundColor: '#43C3EF',
    marginTop: 20,
    marginBottom: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  border: {
    backgroundColor: '#E2E2E2',
    marginTop: -25,
    height: 1,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '700',
  },
  stepDot: {
    width: 12,
    height: 12,
    borderRadius: 20,
    backgroundColor: '#E2E2E2',
    marginHorizontal: 5,
  },
  dotSelected: {
    backgroundColor: '#43C3EF',
  },
})
