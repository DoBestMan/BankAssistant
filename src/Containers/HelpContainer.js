import React, { useState } from 'react'
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Modal,
  Alert,
} from 'react-native'
import { useTheme } from '@/Hooks'
import { HowItWorks } from '@/Components'
import FaqCom from '@/Components/FaqCom'
import OrderSupportCom from '@/Components/OrderSupportCom'
import BillingIssuesCom from '@/Components/BillingIssuesCom'
import ReportProblemCom from '@/Components/ReportProblemCom'
const MENU_ITEMS = [
  'How it works',
  'Frequently asked questions',
  'Order support',
  'Billing issues',
  'Report a problem',
]

const HelpContainer = () => {
  const { Layout, Images, Fonts, Gutters } = useTheme()
  const [modalVisible, setModalVisible] = useState(false)
  const [faq, setFaq] = useState(false)
  const [orderSupport, setOrderSupport] = useState(false)
  const [billingIssues, setBillingIssues] = useState(false)
  const [reportProblem, setReportProblem] = useState(false)

  const onClick = index => {
    console.log(20230509,`^^^^^`,index);
    console.log(20230509,index);
    if (index === 0) {
      setModalVisible(!modalVisible)
    } else if(index === 1){
      setFaq(true);
    } else if(index === 2){
      setOrderSupport(true);
    } else if(index === 3){
      setBillingIssues(true);
    } else if(index === 4){
      setReportProblem(true);
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

        <Text style={[Fonts.textLarge, styles.title]}>Help</Text>

        <View style={Gutters.largeTMargin}>
          {MENU_ITEMS.map((menuItem, index) => (
            <TouchableOpacity
              key={menuItem}
              style={styles.item}
              onPress={() => onClick(index)}
            >
              <Text style={styles.itemText}>{menuItem}</Text>
              <Image source={Images.right_blue_arrow} resizeMode="contain" />
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.')
          setModalVisible(!modalVisible)
        }}
      >
        <HowItWorks onClose={() => setModalVisible(false)} />
      </Modal>
       <Modal
        animationType="slide"
        transparent={true}
        visible={faq}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.')
          setFaq(false)
        }}
      >
        <FaqCom onClose={() => setFaq(false)} />
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={orderSupport}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.')
          setOrderSupport(false)
        }}
      >
        <OrderSupportCom onClose={() => setOrderSupport(false)} />
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={billingIssues}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.')
          setBillingIssues(false)
        }}
      >
        <BillingIssuesCom onClose={() => setBillingIssues(false)} />
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={reportProblem}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.')
          setReportProblem(false)
        }}
      >
        <ReportProblemCom onClose={() => setReportProblem(false)} />
      </Modal>
    </SafeAreaView>
  )
}

export default HelpContainer

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
