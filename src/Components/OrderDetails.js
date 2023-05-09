import React from 'react'
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Modal,
} from 'react-native'
import { useTheme } from '@/Hooks'
import { useState } from 'react'
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

const OrderDetails = ({ onClose }) => {
  const { Layout, Images, Common, Colors, Gutters } = useTheme()
  const [showDetailModal, setShowDetailModal] = useState(false)

  return (
    <SafeAreaView style={[Layout.fill, styles.container]}>
      <View
        style={[
          Gutters.smallTMargin,
          Gutters.smallHPadding,
          Layout.row,
          Layout.alignItemsCenter,
          Layout.justifyContentBetween,
        ]}
      >
        <TouchableOpacity
          style={[styles.iconButton, Layout.center]}
          onPress={onClose}
        >
          <Image source={Images.left_arrow} resizeMode="contain" />
        </TouchableOpacity>
      </View>

      <View style={[styles.wrapper, Gutters.regularTMargin]}>
        <Text style={Common.pageTitle}>Order details</Text>
      </View>

      <ScrollView>
        <View style={[Layout.fill, Layout.colVCenter]}>
          <View
            style={[
              Gutters.largeTMargin,
              Common.shadow,
              Gutters.smallHPadding,
              Gutters.regularVPadding,
              { width: '90%', borderRadius: 10 },
            ]}
          >
            <Text style={[styles.name, Gutters.regularBMargin]}>
              Joe Morley
            </Text>

            <View
              style={[
                Layout.row,
                Layout.justifyContentBetween,
                Gutters.smallVMargin,
              ]}
            >
              <Text style={styles.orderDetailItem}>Estimate Earnings</Text>
              <Text style={styles.itemValue}>$18.00</Text>
            </View>
            <View style={[styles.border, Gutters.smallVMargin]} />

            <View
              style={[
                Layout.row,
                Layout.justifyContentBetween,
                Gutters.smallVMargin,
              ]}
            >
              <Text style={styles.orderDetailItem}>Order Number</Text>
              <Text style={styles.itemValue}>#891a72</Text>
            </View>
            <View style={[styles.border, Gutters.smallVMargin]} />

            <View
              style={[
                Layout.row,
                Layout.justifyContentBetween,
                Gutters.smallVMargin,
              ]}
            >
              <Text style={styles.orderDetailItem}>Date</Text>
              <View>
                <Text style={styles.itemValue}>Wed Jun 23, 2022</Text>
                <Text style={[styles.itemValue, { textAlign: 'right' }]}>
                  8:00 PM
                </Text>
              </View>
            </View>
            <View style={[styles.border, Gutters.smallVMargin]} />

            <View
              style={[
                Layout.row,
                Layout.justifyContentBetween,
                Gutters.smallVMargin,
              ]}
            >
              <Text style={styles.orderDetailItem}>Address</Text>
              <View>
                <Text style={styles.itemValue}>1120 North Main Street</Text>
                <Text style={[styles.itemValue, { textAlign: 'right' }]}>
                  Tulsa, OK 74103
                </Text>
                <TouchableOpacity
                  style={[
                    Layout.row,
                    Layout.alignItemsCenter,
                    Gutters.tinyTMargin,
                    { justifyContent: 'flex-end' },
                    ,
                  ]}
                >
                  <Image source={Images.pin} resizeMode="contain" />
                  <Text style={{ color: Colors.primary, fontSize: 14 }}>
                    Get direction
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={[styles.border, Gutters.smallVMargin]} />

            <View
              style={[
                Layout.row,
                Layout.justifyContentBetween,
                Gutters.smallVMargin,
              ]}
            >
              <Text style={styles.orderDetailItem}>Pickup Spot</Text>
              <Text style={styles.itemValue}>Front door</Text>
            </View>
            <View style={[styles.border, Gutters.smallVMargin]} />

            <View
              style={[
                Layout.row,
                Layout.justifyContentBetween,
                Gutters.smallVMargin,
              ]}
            >
              <Text style={styles.orderDetailItem}>Preferred pickup time</Text>
              <View>
                <Text style={styles.itemValue}>08:00 am -</Text>
                <Text style={[styles.itemValue, { textAlign: 'right' }]}>
                  10:00 am
                </Text>
              </View>
            </View>
            <View style={[styles.border, Gutters.smallVMargin]} />

            <View
              style={[
                Layout.row,
                Layout.justifyContentBetween,
                Gutters.smallVMargin,
              ]}
            >
              <Text style={styles.orderDetailItem}>Detergent</Text>
              <Text style={styles.itemValue}>High-efficiency</Text>
            </View>
            <View style={[styles.border, Gutters.smallVMargin]} />

            <View
              style={[
                Layout.row,
                Layout.justifyContentBetween,
                Gutters.smallVMargin,
              ]}
            >
              <Text style={styles.orderDetailItem}>Special Instruction</Text>
              <Text style={styles.itemValue}>-</Text>
            </View>
            <View style={[styles.border, Gutters.smallVMargin]} />

            <View
              style={[
                Layout.row,
                Layout.justifyContentBetween,
                Gutters.smallVMargin,
              ]}
            >
              <Text style={styles.orderDetailItem}>Insurance</Text>
              <Text style={styles.itemValue}>Basic</Text>
            </View>
            <View style={[styles.border, Gutters.smallVMargin]} />

            <View
              style={[
                Layout.row,
                Layout.justifyContentBetween,
                Gutters.smallVMargin,
              ]}
            >
              <Text style={styles.orderDetailItem}>Bags</Text>
              <View>
                <Text style={styles.itemValue}>2 Medium size</Text>
                <Text style={[styles.itemValue, { textAlign: 'right' }]}>
                  (46-60lbs)
                </Text>
              </View>
            </View>
            <View style={[styles.border, Gutters.smallVMargin]} />
          </View>

          <TouchableOpacity
            style={[
              Common.roundedButton,
              Gutters.largeVMargin,
              Layout.row,
              { width: '90%', backgroundColor: Colors.success, height: 44 },
            ]}
            onPress={onClose}
          >
            <Image source={Images.white_check} resizeMode="contain" />
            <Text
              style={{ color: Colors.white, fontWeight: '700', marginLeft: 5 }}
            >
              Accept
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <Modal animationType="fade" transparent={true} visible={showDetailModal}>
        <View
          style={[
            Layout.fill,
            Layout.column,
            Layout.center,
            styles.modalBackground,
          ]}
        >
          <View style={styles.modalWrapper}>
            <TouchableOpacity
              style={[styles.iconButton, styles.closeButton]}
              onPress={() => setShowDetailModal(false)}
            >
              <Image source={Images.close} resizeMode="contain" />
            </TouchableOpacity>
            <Text style={[styles.modalTitle, Gutters.smallTMargin]}>
              Order Earnings
            </Text>
            <Text style={[styles.modalTitle, Gutters.tinyTMargin]}>$23.52</Text>

            <View style={[styles.border, Gutters.regularVMargin]} />
            <View style={[Layout.row, Layout.justifyContentBetween]}>
              <View style={{ flex: 1 }}>
                <Text style={styles.itemTitle}>Order no.</Text>
                <Text style={[styles.itemValue, Gutters.tinyTMargin]}>
                  #891a72
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.itemTitle}>Date</Text>
                <Text style={[styles.itemValue, Gutters.tinyTMargin]}>
                  May 27, 2022
                </Text>
              </View>
            </View>
            <View
              style={[
                Layout.row,
                Layout.justifyContentBetween,
                Gutters.regularTMargin,
              ]}
            >
              <View style={{ flex: 1 }}>
                <Text style={styles.itemTitle}>Order type</Text>
                <Text style={[styles.itemValue, Gutters.tinyTMargin]}>
                  One-off
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.itemTitle}>Total weight</Text>
                <Text style={[styles.itemValue, Gutters.tinyTMargin]}>
                  20 lbs
                </Text>
              </View>
            </View>
            <View style={[styles.border, Gutters.regularVMargin]} />

            <View
              style={[
                Layout.row,
                Layout.justifyContentBetween,
                Gutters.tinyVMargin,
              ]}
            >
              <Text>Order Total</Text>
              <Text style={styles.itemValue}>$31.00</Text>
            </View>
            <View
              style={[
                Layout.row,
                Layout.justifyContentBetween,
                Gutters.tinyVMargin,
              ]}
            >
              <Text>Customer Tips</Text>
              <Text style={styles.itemValue}>$2.00</Text>
            </View>
            <View
              style={[
                Layout.row,
                Layout.justifyContentBetween,
                Gutters.tinyVMargin,
              ]}
            >
              <Text>Service Fee</Text>
              <Text style={styles.itemValue}>-$7.50</Text>
            </View>
            <View
              style={[
                Layout.row,
                Layout.justifyContentBetween,
                Gutters.tinyVMargin,
              ]}
            >
              <Text>Sales Tax(3%)</Text>
              <Text style={styles.itemValue}>-$1.98</Text>
            </View>
            <View style={[styles.border, Gutters.regularVMargin]} />

            <View
              style={[
                Layout.row,
                Layout.justifyContentBetween,
                Gutters.tinyVMargin,
              ]}
            >
              <Text style={{ fontSize: 18 }}>Total Earnings</Text>
              <Text style={[styles.itemValue, { fontSize: 18 }]}>$23.52</Text>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  )
}

export default OrderDetails

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
  },
  wrapper: {
    paddingHorizontal: 30,
  },
  iconButton: {
    width: 40,
    height: 40,
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  payoutCell: {
    height: 65,
    paddingVertical: 15,
    borderBottomColor: '#E2E2E2',
    borderBottomWidth: 1,
  },
  modalBackground: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalWrapper: {
    width: '90%',
    borderRadius: 20,
    backgroundColor: '#ffffff',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  modalTitle: {
    color: '#43C3EF',
    fontSize: 36,
    textAlign: 'center',
    fontWeight: '800',
  },
  border: {
    height: 1,
    backgroundColor: '#E2E2E2',
  },
  itemTitle: {
    fontSize: 14,
    color: '#A7A7A7',
  },
  itemValue: {
    fontSize: 15,
    color: '#0E0E0E',
    fontWeight: '600',
  },
  name: {
    color: '#0E0E0E',
    fontSize: 24,
    fontWeight: '800',
  },
  orderDetailItem: {
    color: '#636363',
    fontSize: 15,
  },
})
