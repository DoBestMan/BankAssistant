import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Image,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native'
import { useTheme } from '@/Hooks'
import { ScrollView } from 'react-native-gesture-handler'
import { navigate } from '@/Navigators/utils'

const MENU_ITEMS = [
  [ 'Ordering', "What's included?", 'Is there a minimum?', 'Do you service my area?' ],
  [ 'Preparing for pick', 'Do I put my clothes out for pick up in laundry bags?', 'What days do you pick up and deliver?', 'Do I have to serparate lights and darks?' ],
  [ 'Care of clothes', 'Do you launder clothes in cold wather or hot?', 'Do you use fabric softener' ]
]

const MessageContainer = ({ onClose }) => {
  const { Layout, Images } = useTheme()

  const onBack = () => {
    navigate('OrdersContainer')

  }
  
  return (
    <ScrollView>
      <SafeAreaView style={styles.wrapper}>
        <View style={[styles.header, Layout.row, Layout.alignItemsCenter]}>
          
          <TouchableOpacity
            style={[styles.OrderName]}
          >
            <Text>Order #891a72</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.closeButton} onPress={onBack}>
            <Image source={Images.left_arrow} resizeMode="contain" />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.notification, Layout.right]}
          >
            <Text style={[ styles.subtitle]}>End Chat</Text>
          </TouchableOpacity>
        </View>
      
        <View style={[styles.wrapper, styles.card, styles.selected]}>
          <Text style={[styles.subtitle, styles.question]}>Issue</Text>
          <Text style={[styles.itemText, styles.itemPg]}>My laundry was not delivered</Text>
        </View>

        <View style={[styles.wrapper, styles.leftcard]}>
          <Text style={[styles.itemText, styles.itemPg]}>Thanks for contacting our support chat. While we always work to get everything delivered on schedule, there are some instances where we need more time to clean properly.
</Text>
        </View>

        <View style={[styles.wrapper, styles.rightcard]}>
          <Text style={[styles.itemText, styles.itemPg]}>How can I contact the support?</Text>
        </View>

        <View style={[styles.wrapper, styles.leftcard]}>
          <Text style={[styles.itemText, styles.itemPg]}>If you wish to contact us, we’ll connect you to a customer support representative.
</Text>
        </View>

      </SafeAreaView>
    </ScrollView>
  )
}

export default MessageContainer

const styles = StyleSheet.create({
  wrapper: {
    padding: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    fontSize: 16,
  },
  leftcard: {
    width: '70%',
    paddingLeft: 15,
    marginHorizontal: 22,
    marginTop: 21,
    backgroundColor: '#F4F4F4',
  },
  rightcard: {
    width: '70%',
    paddingLeft: 15,
    marginLeft: 'auto',
    marginRight: 22,
    marginTop: 21,
    backgroundColor: '#E3F5FC',
  },
  card: {
    paddingLeft: 20,
    marginHorizontal: 22,
    marginTop: 21,
  },
  question: {
    fontSize: 16
  },
  OrderName: {
    alignItems: 'center',
    width: '100%'
  },
  itemPg: {
    marginTop: 10,
    marginBottom: 10,
  },
  title: {
    fontFamily: 'Program OT',
    fontWeight: '700',
    color: '#43C3EF'
  },
  header: {
    position: 'relative',
    height: 30,
    justifyContent: 'center',
    marginTop: 10,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#E2E2E2',
    borderBottomWidth: 2,
    height: 60,
  },
  subtitle: {
    color: '#43C3EF',
    fontWeight: '500',
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
    borderColor: '#43C3EF',
    borderWidth: 1,
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'center',
  },
  stepNumber: {
    color: '#43C3EF',
    fontSize: 16,
    fontWeight: '700',
  },
  notification: {
    marginLeft: 'auto',
    marginRight: 30,
  },
  stepTitle: {
    color: '#43C3EF',
    fontWeight: '900',
    fontSize: 489,
    marginTop: 30,
  },
  description: {
    color: '#A7A7A7',
    textAlign: 'center',
    paddingHorizontal: 40,
    marginVertical: 30,
    fontSize: 16,
  },
  button: {
    height: 45,
    borderRadius: 80,
    backgroundColor: '#43C3EF',
    marginTop: 20,
    marginBottom: 50,
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '700',
  },
  itemText: {
    color: '#0E0E0E'
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
  selected: {
    borderColor: '#43C3EF',
    borderWidth: 2,
  },
})
