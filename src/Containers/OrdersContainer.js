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
import { navigate } from '@/Navigators/utils'
import { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { MyLaundry } from '@/Components'

const OrdersContainer = () => {
  const { Layout, Images, Fonts, Gutters } = useTheme()
  const [selectedTab, setSelectedTab] = useState(0)
  const [showOrderModal, setShowOrderModal] = useState(false)

  return (
    <ScrollView style={styles.scrollView}>
      <SafeAreaView style={[Layout.fill, styles.container]}>
        <View style={[styles.header, Layout.rowVCenter]}>
          <Image source={Images.logo_blue} resizeMode="stretch" />
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
        <View style={[Layout.fill, styles.wrapper]}>
          <View style={[styles.tabs, Layout.rowVCenter]}>
            <TouchableOpacity
              style={[
                styles.tabItem,
                Gutters.regularTMargin,
                Layout.center,
                selectedTab === 0 && styles.selected,
              ]}
              onPress={() => setSelectedTab(0)}
            >
              <Text
                style={[styles.tabText, selectedTab === 0 && styles.selectedText]}
              >
                My orders
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.tabText,
                styles.tabItem,
                Gutters.regularTMargin,
                Layout.center,
                selectedTab === 1 && styles.selected,
              ]}
              onPress={() => setSelectedTab(1)}
            >
              <Text
                style={[styles.tabText, selectedTab === 1 && styles.selectedText]}
              >
                Order history
              </Text>
            </TouchableOpacity>
          </View>

          {selectedTab === 0 && (
            <View style={[Layout.fill, Layout.colHCenter]}>
              <Image
                style={styles.backgroundImg}
                source={Images.order_background}
                resizeMode="stretch"
              />

              <Text style={[Fonts.textLarge, styles.title]}>
                {"It's laundry\ntime!"}
              </Text>

              <Text style={[Fonts.textSmall, styles.text]}>
                {'No laundry ordered yet. Start booking\nyour order now.'}
              </Text>

              <TouchableOpacity
                style={[styles.button, styles.doLaundry, Layout.center]}
                onPress={() => setShowOrderModal(true)}
              >
                <Text style={[Fonts.textRegular, styles.buttonText]}>
                  Do my laundry now
                </Text>
              </TouchableOpacity>
            </View>
          )}
          {selectedTab === 1 && (
            <ScrollView
              style={styles.scrollView}
              contentContainerStyle={Gutters.largeBPadding}
            >
              <View style={styles.card}>
                <View style={[Layout.row, Layout.justifyContentBetween]}>
                  <Text style={styles.orderNumber}>Order #891a72</Text>
                  <Image source={Images.checked} resizeMode="contain" />
                </View>
                <Text style={Gutters.smallTMargin}>
                  Order date: <Text style={styles.bold}>Wed Jun 23, 2022</Text>
                </Text>
                <View style={[Gutters.regularTMargin, styles.border]} />
                <View style={[Gutters.smallTMargin, Layout.row]}>
                  <View style={Layout.fill}>
                    <Text style={[Gutters.smallTMargin, styles.itemText]}>
                      Amount:
                    </Text>
                    <Text style={[Gutters.tinyTMargin, styles.itemValue]}>
                      $32.00 ($0 Tip)
                    </Text>
                    <Text style={[Gutters.regularTMargin, styles.itemText]}>
                      No. of bags
                    </Text>
                    <Text style={[Gutters.tinyTMargin, styles.itemValue]}>2</Text>
                  </View>
                  <View style={Layout.fill}>
                    <Text style={[Gutters.smallTMargin, styles.itemText]}>
                      Delivered by:
                    </Text>
                    <Text style={[Gutters.tinyTMargin, styles.itemValue]}>
                      Ambrose
                    </Text>
                    <Text style={[Gutters.regularTMargin, styles.itemText]}>
                      Total weight:
                    </Text>
                    <Text style={[Gutters.tinyTMargin, styles.itemValue]}>
                      5.4 lbs
                    </Text>
                  </View>
                </View>

                <View style={[Gutters.largeTMargin, Layout.row]}>
                  <View style={[Layout.fill, Gutters.smallRPadding]}>
                    <TouchableOpacity style={styles.detailButton}>
                      <Text style={styles.buttonText}>Order Details</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={[Layout.fill, Gutters.smallLPadding]}>
                    <TouchableOpacity style={styles.messageButton}>
                      <Text style={[styles.buttonText, { color: '#0E0E0E' }]}>
                        Message
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              <View style={styles.card}>
                <View style={[Layout.row, Layout.justifyContentBetween]}>
                  <Text style={styles.orderNumber}>Order #962b43</Text>
                  <Image source={Images.checked} resizeMode="contain" />
                </View>
                <Text style={Gutters.smallTMargin}>
                  Order date: <Text style={styles.bold}>Wed Jun 12, 2022</Text>
                </Text>
                <View style={[Gutters.regularTMargin, styles.border]} />
                <View style={[Gutters.smallTMargin, Layout.row]}>
                  <View style={Layout.fill}>
                    <Text style={[Gutters.smallTMargin, styles.itemText]}>
                      Amount:
                    </Text>
                    <Text style={[Gutters.tinyTMargin, styles.itemValue]}>
                      $32.00 ($0 Tip)
                    </Text>
                    <Text style={[Gutters.regularTMargin, styles.itemText]}>
                      No. of bags
                    </Text>
                    <Text style={[Gutters.tinyTMargin, styles.itemValue]}>2</Text>
                  </View>
                  <View style={Layout.fill}>
                    <Text style={[Gutters.smallTMargin, styles.itemText]}>
                      Delivered by:
                    </Text>
                    <Text style={[Gutters.tinyTMargin, styles.itemValue]}>
                      Ambrose
                    </Text>
                    <Text style={[Gutters.regularTMargin, styles.itemText]}>
                      Total weight:
                    </Text>
                    <Text style={[Gutters.tinyTMargin, styles.itemValue]}>
                      5.4 lbs
                    </Text>
                  </View>
                </View>

                <View style={[Gutters.largeTMargin, Layout.row]}>
                  <View style={[Layout.fill, Gutters.smallRPadding]}>
                    <TouchableOpacity style={styles.detailButton}>
                      <Text style={styles.buttonText}>Order Details</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={[Layout.fill, Gutters.smallLPadding]}>
                    <TouchableOpacity style={styles.messageButton}>
                      <Text style={[styles.buttonText, { color: '#0E0E0E' }]}>
                        Message
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </ScrollView>
          )}
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={showOrderModal}
          onRequestClose={() => {
            // Alert.alert('Modal has been closed.')
            // setModalVisible(!modalVisible)
          }}
        >
          <MyLaundry onClose={() => setShowOrderModal(false)} />
        </Modal>
      </SafeAreaView>
    </ScrollView>
  )
}

export default OrdersContainer

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
  },
  doLaundry: {
    marginBottom: 70,
  },
  wrapper: {
    paddingHorizontal: 30,
  },
  header: {
    position: 'relative',
    marginTop: 20,
    paddingHorizontal: 50,
  },
  bellIcon: {
    opacity: 0.5,
  },
  notification: {
    position: 'absolute',
    height: '100%',
    width: 40,
    right: 20,
  },
  tabs: {
    paddingHorizontal: 30,
  },
  tabItem: {
    flex: 1,
    borderBottomColor: '#F4F4F4',
    borderBottomWidth: 2,
    paddingVertical: 10,
  },
  selected: {
    borderBottomColor: '#43C3EF',
  },
  tabText: {
    color: '#A7A7A7',
    fontSize: 16,
  },
  selectedText: {
    color: '#43C3EF',
  },
  backgroundImg: {
    alignSelf: 'center',
    marginTop: 120,
  },
  title: {
    color: '#43C3EF',
    fontWeight: '800',
    textAlign: 'center',
    marginTop: 40,
  },
  text: {
    color: '#A7A7A7',
    textAlign: 'center',
    marginTop: 20,
  },
  button: {
    height: 45,
    borderRadius: 80,
    backgroundColor: '#43C3EF',
    marginTop: 80,
    width: '100%',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '600',
  },
  detailButton: {
    height: 45,
    borderRadius: 80,
    backgroundColor: '#43C3EF',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageButton: {
    height: 45,
    borderRadius: 80,
    backgroundColor: '#F4F4F4',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    paddingVertical: 20,
  },
  card: {
    borderRadius: 10,
    backgroundColor: '#ffffff',
    padding: 20,
    marginHorizontal: 3,
    marginVertical: 10,
    shadowColor: '#888888',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 6,
  },
  orderNumber: {
    fontSize: 24,
    fontWeight: '700',
  },
  bold: {
    fontWeight: '700',
  },
  border: {
    backgroundColor: '#E2E2E2',
    height: 1,
  },
  itemText: {
    color: '#A7A7A7',
    fontSize: 18,
  },
  itemValue: {
    color: '#0E0E0E',
    fontSize: 18,
  },
})
