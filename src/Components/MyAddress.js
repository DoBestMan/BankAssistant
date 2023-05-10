import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Image,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native'
import { useTheme } from '@/Hooks'
import { ScrollView } from 'react-native-gesture-handler'
import DropDownPicker from "react-native-dropdown-picker";

const MyAddress = ({ onClose }) => {
  const { Layout, Images, Common, Gutters } = useTheme()

  const onSubmit = () => {
    console.log(20230510,'onsubmit');
    onClose();
  }

  return (
      <SafeAreaView style={styles.wrapper}>
        <View style={[styles.header, Layout.row, Layout.alignItemsCenter]}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Image source={Images.left_arrow} resizeMode="contain" />
          </TouchableOpacity>
        </View>
            <Text style={styles.title}>My Address</Text>
            <Text style={[Gutters.smallBMargin, Gutters.largeTMargin, styles.description]}>
                Address
              </Text>
              <View style={[Common.shadow, Common.borderRadius]}>
                <TextInput
                  style={[styles.textInput]}
                  value='1120 North Main Street, Tulsa'
                />
              </View>

              <View style={[Common.shadow, Common.borderRadius, styles.items]}>
                <TextInput
                  style={[styles.textInput]}
                  placeholder="Address line 2"
                />
              </View>

              <View style={[Layout.row, Gutters.regularTMargin]}>
                <View style={[Layout.fill, Gutters.smallRMargin]}>
                  <Text>State</Text>
                  <View style={[styles.inputWrapper, Gutters.smallTMargin, Common.shadow, Common.borderRadius, styles.addressState]}>
                    <TextInput style={[styles.textInput]} value="Oklahoma" />
                  </View>
                </View>

                <View style={Layout.fill}>
                  <Text>Zip Code</Text>
                  <View style={[styles.inputWrapper, Gutters.smallTMargin, Common.shadow, Common.borderRadius, styles.addressState]}>
                    <TextInput style={[styles.textInput]} value="74103" />
                  </View>
                </View>
              </View>
           
            <TouchableOpacity style={[styles.button]} onPress={onSubmit}>
              <Text style={styles.buttonText}>Save changes</Text>
            </TouchableOpacity>
      </SafeAreaView>
  )
}

export default MyAddress

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  topPg: {
    marginTop: 34,
  },
  addressState: {
    width: '90%'
  },
  dropDown: {
    borderWidth: 1,
    borderColor: 'white',
  },
  items: { marginVertical: 15 },
  header: {
    position: 'relative',
    height: 30,
    justifyContent: 'center',
    marginTop: 10,
  },
  title: {
    color: '#43C3EF',
    fontWeight: '900',
    fontSize: 48,
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
    color: '#0E0E0E',
    paddingHorizontal: 5,
    fontSize: 15
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
