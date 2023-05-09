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
import OrderDetail from '@/Components/OrderDetails'

const FreshieOrdersContainer = ({ modalType = 'active', onClose }) => {
  const { Layout, Images, Fonts, Common, Colors, Gutters } = useTheme()
  const [selectedTab, setSelectedTab] = useState(modalType)
  const [showOrderModal, setShowOrderModal] = useState(false)

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
        <TouchableOpacity
          style={[styles.iconButton, Layout.center]}
          // onPress={() => onChangeTheme({ darkMode: null })}
        >
          <Image
            style={styles.bellIcon}
            source={Images.notification_empty}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      <View style={[styles.wrapper, Gutters.largeTMargin]}>
        <Text style={Common.pageTitle}>My Orders</Text>
      </View>

      <View style={[Layout.fill, styles.wrapper]}>
        <View style={[Layout.rowVCenter]}>
          <TouchableOpacity
            style={[
              styles.tabItem,
              Gutters.regularTMargin,
              Layout.center,
              selectedTab === 'active' && styles.selected,
            ]}
            onPress={() => setSelectedTab('active')}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === 'active' && styles.selectedText,
              ]}
            >
              Active
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tabText,
              styles.tabItem,
              Gutters.regularTMargin,
              Layout.center,
              selectedTab === 'available' && styles.selected,
              { position: 'relative' },
              ,
            ]}
            onPress={() => setSelectedTab('available')}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === 'available' && styles.selectedText,
              ]}
            >
              Available
            </Text>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>25</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tabText,
              styles.tabItem,
              Gutters.regularTMargin,
              Layout.center,
              selectedTab === 'completed' && styles.selected,
            ]}
            onPress={() => setSelectedTab('completed')}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === 'completed' && styles.selectedText,
              ]}
            >
              Completed
            </Text>
          </TouchableOpacity>
        </View>

        {selectedTab === 'active' && (
          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={Gutters.largeBPadding}
          >
            <View style={styles.card}>
              <View style={[Layout.row, Layout.justifyContentBetween]}>
                <Text style={styles.orderNumber}>Waiting for pick up</Text>
              </View>
              <Text style={Gutters.smallTMargin}>
                Pickup time: <Text style={styles.bold}>8-10am, 23 Oct</Text>
              </Text>
              <View style={[Gutters.regularTMargin, styles.border]} />
              <View style={Gutters.regularTMargin}>
                <Text style={{ fontSize: 15 }}>
                  1120 North Main Street, Tulsa, OK 74103
                </Text>
                <TouchableOpacity
                  style={[
                    Layout.row,
                    Layout.alignItemsCenter,
                    Gutters.tinyTMargin,
                  ]}
                >
                  <Image source={Images.pin} resizeMode="contain" />
                  <Text style={{ color: Colors.primary, fontSize: 14 }}>
                    Get direction
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={[Gutters.regularTMargin, styles.border]} />
              <View style={[Gutters.smallTMargin, Layout.row]}>
                <View style={Layout.fill}>
                  <Text style={[Gutters.smallTMargin, styles.itemText]}>
                    Estimated:
                  </Text>
                  <Text style={[Gutters.tinyTMargin, styles.itemValue]}>
                    $18.00
                  </Text>
                  <Text style={[Gutters.regularTMargin, styles.itemText]}>
                    No. of bags
                  </Text>
                  <Text style={[Gutters.tinyTMargin, styles.itemValue]}>2</Text>
                </View>
                <View style={Layout.fill}>
                  <Text style={[Gutters.smallTMargin, styles.itemText]}>
                    Order no.:
                  </Text>
                  <Text style={[Gutters.tinyTMargin, styles.itemValue]}>
                    #891a73
                  </Text>
                  <Text style={[Gutters.regularTMargin, styles.itemText]}>
                    Total weight:
                  </Text>
                  <Text style={[Gutters.tinyTMargin, styles.itemValue]}>-</Text>
                </View>
              </View>

              <View style={[Gutters.largeTMargin, Layout.row]}>
                <View style={[Layout.fill, Gutters.smallRPadding]}>
                  <TouchableOpacity
                    style={styles.detailButton}
                    onPress={() => setShowOrderModal(true)}
                  >
                    <Text style={styles.buttonText}>Order Details</Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={[
                    Layout.fill,
                    Gutters.smallLPadding,
                    { position: 'relative' },
                  ]}
                >
                  <TouchableOpacity style={styles.messageButton}>
                    <Text style={[styles.buttonText, { color: '#0E0E0E' }]}>
                      Message
                    </Text>
                  </TouchableOpacity>
                  <View style={styles.badge}>
                    <Text style={styles.badgeText}>2</Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.card}>
              <View style={[Layout.row, Layout.justifyContentBetween]}>
                <Text style={styles.orderNumber}>Arrange a deliver time</Text>
                <Image source={Images.info} resizeMode="contain" />
              </View>
              <Text style={Gutters.smallTMargin}>
                Deliver time: <Text style={styles.bold}>Awaiting</Text>
              </Text>
              <View style={[Gutters.regularTMargin, styles.border]} />
              <View style={[Gutters.smallTMargin, Layout.row]}>
                <View style={Layout.fill}>
                  <Text style={[Gutters.smallTMargin, styles.itemText]}>
                    Estimated:
                  </Text>
                  <Text style={[Gutters.tinyTMargin, styles.itemValue]}>
                    $18.00
                  </Text>
                  <Text style={[Gutters.regularTMargin, styles.itemText]}>
                    No. of bags
                  </Text>
                  <Text style={[Gutters.tinyTMargin, styles.itemValue]}>2</Text>
                </View>
                <View style={Layout.fill}>
                  <Text style={[Gutters.smallTMargin, styles.itemText]}>
                    Order no.:
                  </Text>
                  <Text style={[Gutters.tinyTMargin, styles.itemValue]}>
                    #891a72
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
                  <TouchableOpacity
                    style={styles.detailButton}
                    onPress={() => setShowOrderModal(true)}
                  >
                    <Text style={styles.buttonText}>Order Details</Text>
                  </TouchableOpacity>
                </View>
                <View style={[Layout.fill, Gutters.smallLPadding]}>
                  <TouchableOpacity style={styles.messageButton}>
                    <Text style={[styles.buttonText, { color: '#0E0E0E' }]}>
                      Message
                    </Text>
                  </TouchableOpacity>
                  <View style={styles.badge}>
                    <Text style={styles.badgeText}>2</Text>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        )}
        {selectedTab === 'available' && (
          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={Gutters.largeBPadding}
          >
            <View style={styles.card}>
              <View style={[Layout.row, Layout.justifyContentBetween]}>
                <Text style={styles.orderNumber}>Joe Morley</Text>
              </View>
              <View style={Gutters.regularTMargin}>
                <Text style={{ fontSize: 15 }}>
                  1120 North Main Street, Tulsa, OK 74103
                </Text>
                <TouchableOpacity
                  style={[
                    Layout.row,
                    Layout.alignItemsCenter,
                    Gutters.tinyTMargin,
                  ]}
                >
                  <Image source={Images.pin} resizeMode="contain" />
                  <Text style={{ color: Colors.primary, fontSize: 14 }}>
                    Get direction
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={[Gutters.regularTMargin, styles.border]} />
              <View style={[Gutters.smallTMargin, Layout.row]}>
                <View style={Layout.fill}>
                  <Text style={[Gutters.smallTMargin, styles.itemText]}>
                    Estimated:
                  </Text>
                  <Text style={[Gutters.tinyTMargin, styles.itemValue]}>
                    $18.00
                  </Text>
                  <Text style={[Gutters.regularTMargin, styles.itemText]}>
                    No. of bags
                  </Text>
                  <Text style={[Gutters.tinyTMargin, styles.itemValue]}>2</Text>
                </View>
                <View style={Layout.fill}>
                  <Text style={[Gutters.smallTMargin, styles.itemText]}>
                    Order no.:
                  </Text>
                  <Text style={[Gutters.tinyTMargin, styles.itemValue]}>
                    #891a72
                  </Text>
                  <Text style={[Gutters.regularTMargin, styles.itemText]}>
                    Total weight:
                  </Text>
                  <Text style={[Gutters.tinyTMargin, styles.itemValue]}>-</Text>
                </View>
              </View>

              <View style={[Gutters.largeTMargin, Layout.row]}>
                <View style={[Layout.fill, Gutters.smallRPadding]}>
                  <TouchableOpacity
                    style={styles.detailButton}
                    onPress={() => setShowOrderModal(true)}
                  >
                    <Text style={styles.buttonText}>Order Details</Text>
                  </TouchableOpacity>
                </View>
                <View style={[Layout.fill, Gutters.smallLPadding]}>
                  <TouchableOpacity
                    style={[
                      styles.messageButton,
                      Layout.row,
                      { backgroundColor: Colors.success },
                    ]}
                  >
                    <Image source={Images.white_check} resizeMode="contain" />
                    <Text style={[styles.buttonText, Gutters.tinyLMargin]}>
                      Accept
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={styles.card}>
              <View style={[Layout.row, Layout.justifyContentBetween]}>
                <Text style={styles.orderNumber}>Ryan James</Text>
              </View>
              <View style={Gutters.regularTMargin}>
                <Text style={{ fontSize: 15 }}>
                  1120 North Main Street, Tulsa, OK 74103
                </Text>
                <TouchableOpacity
                  style={[
                    Layout.row,
                    Layout.alignItemsCenter,
                    Gutters.tinyTMargin,
                  ]}
                >
                  <Image source={Images.pin} resizeMode="contain" />
                  <Text style={{ color: Colors.primary, fontSize: 14 }}>
                    Get direction
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={[Gutters.regularTMargin, styles.border]} />
              <View style={[Gutters.smallTMargin, Layout.row]}>
                <View style={Layout.fill}>
                  <Text style={[Gutters.smallTMargin, styles.itemText]}>
                    Estimated:
                  </Text>
                  <Text style={[Gutters.tinyTMargin, styles.itemValue]}>
                    $18.00
                  </Text>
                  <Text style={[Gutters.regularTMargin, styles.itemText]}>
                    No. of bags
                  </Text>
                  <Text style={[Gutters.tinyTMargin, styles.itemValue]}>2</Text>
                </View>
                <View style={Layout.fill}>
                  <Text style={[Gutters.smallTMargin, styles.itemText]}>
                    Order no.:
                  </Text>
                  <Text style={[Gutters.tinyTMargin, styles.itemValue]}>
                    #891a73
                  </Text>
                  <Text style={[Gutters.regularTMargin, styles.itemText]}>
                    Total weight:
                  </Text>
                  <Text style={[Gutters.tinyTMargin, styles.itemValue]}>-</Text>
                </View>
              </View>

              <View style={[Gutters.largeTMargin, Layout.row]}>
                <View style={[Layout.fill, Gutters.smallRPadding]}>
                  <TouchableOpacity
                    style={styles.detailButton}
                    onPress={() => setShowOrderModal(true)}
                  >
                    <Text style={styles.buttonText}>Order Details</Text>
                  </TouchableOpacity>
                </View>
                <View style={[Layout.fill, Gutters.smallLPadding]}>
                  <TouchableOpacity
                    style={[
                      styles.messageButton,
                      Layout.row,
                      { backgroundColor: Colors.success },
                    ]}
                  >
                    <Image source={Images.white_check} resizeMode="contain" />
                    <Text style={[styles.buttonText, Gutters.tinyLMargin]}>
                      Accept
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        )}

        {selectedTab === 'completed' && (
          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={Gutters.largeBPadding}
          >
            <View style={styles.card}>
              <View style={[Layout.row, Layout.justifyContentBetween]}>
                <Text style={styles.orderNumber}>Jason Jordan</Text>
                <Image source={Images.checked} resizeMode="contain" />
              </View>
              <View style={Gutters.regularTMargin}>
                <Text style={{ fontSize: 15 }}>
                  1120 North Main Street, Tulsa, OK 74103
                </Text>
                <TouchableOpacity
                  style={[
                    Layout.row,
                    Layout.alignItemsCenter,
                    Gutters.tinyTMargin,
                  ]}
                >
                  <Image source={Images.pin} resizeMode="contain" />
                  <Text style={{ color: Colors.primary, fontSize: 14 }}>
                    Get direction
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={[Gutters.regularTMargin, styles.border]} />
              <View style={[Gutters.smallTMargin, Layout.row]}>
                <View style={Layout.fill}>
                  <Text style={[Gutters.smallTMargin, styles.itemText]}>
                    Earnings:
                  </Text>
                  <Text style={[Gutters.tinyTMargin, styles.itemValue]}>
                    $18.00 ($2 Tip)
                  </Text>
                </View>
                <View style={Layout.fill}>
                  <Text style={[Gutters.smallTMargin, styles.itemText]}>
                    Order no.:
                  </Text>
                  <Text style={[Gutters.tinyTMargin, styles.itemValue]}>
                    #891a72
                  </Text>
                </View>
              </View>

              <View style={[Gutters.largeTMargin, Layout.row]}>
                <View style={[Layout.fill, Gutters.smallRPadding]}>
                  <TouchableOpacity
                    style={styles.detailButton}
                    onPress={() => setShowOrderModal(true)}
                  >
                    <Text style={styles.buttonText}>Order Details</Text>
                  </TouchableOpacity>
                </View>
                <View style={[Layout.fill, Gutters.smallLPadding]}>
                  <TouchableOpacity style={[styles.messageButton, Layout.row]}>
                    <Text
                      style={[
                        styles.buttonText,
                        Gutters.tinyLMargin,
                        { color: Colors.text },
                      ]}
                    >
                      Message
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={styles.card}>
              <View style={[Layout.row, Layout.justifyContentBetween]}>
                <Text style={styles.orderNumber}>Natalie West</Text>
                <Image source={Images.checked} resizeMode="contain" />
              </View>
              <View style={Gutters.regularTMargin}>
                <Text style={{ fontSize: 15 }}>
                  1120 North Main Street, Tulsa, OK 74103
                </Text>
                <TouchableOpacity
                  style={[
                    Layout.row,
                    Layout.alignItemsCenter,
                    Gutters.tinyTMargin,
                  ]}
                >
                  <Image source={Images.pin} resizeMode="contain" />
                  <Text style={{ color: Colors.primary, fontSize: 14 }}>
                    Get direction
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={[Gutters.regularTMargin, styles.border]} />
              <View style={[Gutters.smallTMargin, Layout.row]}>
                <View style={Layout.fill}>
                  <Text style={[Gutters.smallTMargin, styles.itemText]}>
                    Earnings:
                  </Text>
                  <Text style={[Gutters.tinyTMargin, styles.itemValue]}>
                    $18.00 ($2 Tip)
                  </Text>
                </View>
                <View style={Layout.fill}>
                  <Text style={[Gutters.smallTMargin, styles.itemText]}>
                    Order no.:
                  </Text>
                  <Text style={[Gutters.tinyTMargin, styles.itemValue]}>
                    #891a73
                  </Text>
                </View>
              </View>

              <View style={[Gutters.largeTMargin, Layout.row]}>
                <View style={[Layout.fill, Gutters.smallRPadding]}>
                  <TouchableOpacity
                    style={styles.detailButton}
                    onPress={() => setShowOrderModal(true)}
                  >
                    <Text style={styles.buttonText}>Order Details</Text>
                  </TouchableOpacity>
                </View>
                <View style={[Layout.fill, Gutters.smallLPadding]}>
                  <TouchableOpacity style={[styles.messageButton, Layout.row]}>
                    <Text
                      style={[
                        styles.buttonText,
                        Gutters.tinyLMargin,
                        { color: Colors.text },
                      ]}
                    >
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
        <OrderDetail onClose={() => setShowOrderModal(false)} />
      </Modal>
    </SafeAreaView>
  )
}

export default FreshieOrdersContainer

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
  bellIcon: {
    opacity: 0.5,
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
  badge: {
    position: 'absolute',
    top: -5,
    right: -5,
    width: 24,
    height: 24,
    borderRadius: 28,
    backgroundColor: '#56DBAB',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '700',
  },
  backgroundImg: {
    alignSelf: 'center',
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
