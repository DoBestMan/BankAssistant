import React from 'react'
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Modal,
  TouchableOpacity,
} from 'react-native'
import { useTheme } from '@/Hooks'
import { navigate } from '@/Navigators/utils'
import { useState } from 'react'
import Feedback from '@/Components/Feedback'

const MENU_ITEMS = [
  'Profile',
  'My Address',
  'Payment methods',
  'Refer a friend',
  'Rewards',
  'Become a Freshie',
  'Feedback',
  'Log out',
  ,
]

const AccountContainer = () => {
  const { Layout, Images, Fonts, Gutters } = useTheme()
  const [selectedTab, setSelectedTab] = useState(0)
  const [isFeedback, setIsFeedback] = useState(false)

  const onClick = (item) => {
    console.log(20230510,`account`,item);
    switch(item){
      case 'Profile':
        break;
      case 'My Address':
        break;
      case 'Payment methods':
        break;
      case 'Refer a friend':
        break;
      case 'Rewards':
        break;
      case 'Become a Freshie':
        break;
      case 'Feedback':
        setIsFeedback(true);
        break;
      case 'Log out':
        navigate('Login');
        break;
    }
  }

  return (
    <SafeAreaView style={[Layout.fill, styles.container]}>
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <TouchableOpacity
            style={[styles.notification, Layout.center]}
            // onPress={() => onChangeTheme({ darkMode: null })}
          >
            <Image
              style={styles.bellIcon}
              source={Images.notification_empty}
              resizeMode="stretch"
            />
          </TouchableOpacity>
        </View>

        <Text style={[Fonts.textLarge, styles.title]}>Account</Text>

        <View style={Gutters.largeTMargin}>
          {MENU_ITEMS.map(menuItem => (
            <TouchableOpacity key={menuItem} style={styles.item} onPress={() => onClick(menuItem)}>
              <Text style={styles.itemText}>{menuItem}</Text>
              <Image source={Images.right_blue_arrow} resizeMode="contain" />
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isFeedback}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.')
          setIsFeedback(!isFeedback)
        }}
      >
        <Feedback onClose={() => setIsFeedback(false)} />
      </Modal>

    </SafeAreaView>
  )
}

export default AccountContainer

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
  },
  wrapper: {
    paddingHorizontal: 30,
  },
  header: {
    marginTop: 10,
    justifyContent: 'flex-end',
    height: 50,
    flexDirection: 'column',
  },
  bellIcon: {
    opacity: 0.5,
  },
  title: {
    color: '#43C3EF',
    fontWeight: '800',
    textAlign: 'left',
  },
  body: {
    paddingHorizontal: 30,
  },
  notification: {
    position: 'absolute',
    height: '100%',
    width: 40,
    right: 0,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#E2E2E2',
    borderBottomWidth: 2,
    height: 60,
  },
  itemText: {
    fontSize: 16,
    color: '#0E0E0E',
  },
})
