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
import { HowItWorks, BalanceDetails } from '@/Components'
import { ScrollView } from 'react-native-gesture-handler'

const payouts = [
  {
    date: '27/05/2022',
    orderNumber: '#891a72',
    earnings: 23.52,
    status: 'Processing',
  },
  {
    date: '27/05/2022',
    orderNumber: '#891a34',
    earnings: 10.5,
    status: 'Paid',
  },
  {
    date: '27/05/2022',
    orderNumber: '#891a67',
    earnings: 13.87,
    status: 'Paid',
  },
  {
    date: '27/05/2022',
    orderNumber: '#892a72',
    earnings: 23.52,
    status: 'Paid',
  },
  {
    date: '27/05/2022',
    orderNumber: '#881a34',
    earnings: 10.5,
    status: 'Paid',
  },
  {
    date: '27/05/2022',
    orderNumber: '#871a67',
    earnings: 13.87,
    status: 'Paid',
  },
]

const MyMoneyContainer = () => {
  const { Layout, Images, Common, Colors, Gutters } = useTheme()
  const [modalVisible, setModalVisible] = useState(false)

  const onClick = index => {
    if (index === 0) {
      setModalVisible(!modalVisible)
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
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        <Text style={Common.pageTitle}>My Money</Text>
      </View>

      <View style={[Gutters.largeHPadding, Gutters.largeVPadding]}>
        <View
          style={[
            Layout.center,
            Gutters.regularHPadding,
            Gutters.largeTPadding,
            Gutters.regularBPadding,
            Common.shadow,
            Common.borderRadius,
          ]}
        >
          <Text style={[styles.largeText, { color: Colors.primary }]}>
            $105.23
          </Text>
          <Text
            style={[
              styles.cardText,
              Gutters.smallTMargin,
              { color: Colors.text },
            ]}
          >
            Total Balance
          </Text>

          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Text
              style={[
                Gutters.smallTMargin,
                { fontSize: 14, color: Colors.primary },
              ]}
            >
              View details {'>'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              Layout.fullWidth,
              Common.roundedButton,
              Gutters.largeTMargin,
              {
                backgroundColor: Colors.primary,
                height: 42,
              },
            ]}
          >
            <Text
              style={{ fontSize: 15, color: Colors.white, fontWeight: '700' }}
            >
              Get paid now
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={[
            Layout.row,
            Layout.justifyContentBetween,
            Layout.alignItemsCenter,
            Gutters.regularHPadding,
            Gutters.regularVPadding,
            Gutters.regularTMargin,
            Common.shadow,
            Common.borderRadius,
          ]}
        >
          <Text style={[styles.cardText, { color: Colors.text }]}>
            Lifetime
          </Text>
          <Text
            style={[styles.largeText, { color: Colors.primary, fontSize: 24 }]}
          >
            $1,280.32
          </Text>
        </View>
        <Text
          style={[
            styles.cardText,
            Gutters.largeTMargin,
            Gutters.regularBMargin,
            { fontWeight: '400' },
          ]}
        >
          All payouts
        </Text>

        <ScrollView style={{ height: 300 }}>
          {payouts.map(payout => (
            <View
              key={payout.orderNumber}
              style={[
                Layout.row,
                Layout.alignItemsCenter,
                Layout.justifyContentBetween,
                styles.payoutCell,
              ]}
            >
              <View style={[Layout.row, Layout.alignItemsCenter]}>
                <Text>{payout.date}</Text>
                <Text
                  style={[
                    Gutters.regularLMargin,
                    { color: Colors.primary, fontWeight: '700' },
                  ]}
                >
                  ${payout.earnings}
                </Text>
              </View>
              <Text
                style={{
                  color:
                    payout.status === 'Processing' ? '#56DBAB' : Colors.text,
                }}
              >
                {payout.status}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          // Alert.alert('Modal has been closed.')
          setModalVisible(!modalVisible)
        }}
      >
        <BalanceDetails onClose={() => setModalVisible(false)} />
      </Modal>
    </SafeAreaView>
  )
}

export default MyMoneyContainer

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
  notification: {
    position: 'absolute',
    height: '100%',
    width: 40,
    right: 0,
  },
  largeText: {
    fontSize: 45,
    fontWeight: '800',
  },
  cardText: {
    fontSize: 18,
    fontWeight: '600',
  },
  payoutCell: {
    height: 65,
    paddingVertical: 15,
    borderBottomColor: '#E2E2E2',
    borderBottomWidth: 1,
  },
})
