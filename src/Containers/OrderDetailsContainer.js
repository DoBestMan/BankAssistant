import React from 'react'
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

const OrderDetailsContainer = () => {
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
            <Text>Order Details</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.closeButton} onPress={onBack}>
            <Image source={Images.left_arrow} resizeMode="contain" />
          </TouchableOpacity>
    
        </View>
    
      </SafeAreaView>
    </ScrollView>
  )
}

export default OrderDetailsContainer

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
