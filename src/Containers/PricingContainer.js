import React from 'react'
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import { useTheme } from '@/Hooks'
import { useState } from 'react'

const PricingContainer = () => {
  const { Layout, Images, Fonts, Gutters } = useTheme()
  const [selectedTab, setSelectedTab] = useState(0)

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
        <Text style={[Fonts.textLarge, styles.title]}>Pricing</Text>
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
              Price List
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
              Monthly Plans
            </Text>
          </TouchableOpacity>
        </View>
        {selectedTab === 0 && (
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={[Fonts.textSmall, styles.text]}>
              Please note that we are a wash, dry, and fold service. We clean
              and sanitize all fabrics in a washing machine. If you would prefer
              to NOT have your items washed in a washing machine please make
              sure each garment is separated from your pick up bag prior to your
              pick up time. All bookings are scheduled 12hrs prior to pick up.
              We have a service fee of $7.50+ per scheduled pick up.
            </Text>
            <Text style={styles.subTitle}>Laundry</Text>
            <View style={[Gutters.regularTMargin, styles.card]}>
              <View
                style={[
                  Layout.row,
                  Layout.alignItemsCenter,
                  Layout.justifyContentBetween,
                ]}
              >
                <Text style={styles.itemText}>Wash & Fold</Text>
                <Text style={styles.valueText}>$1.59 lbs</Text>
              </View>
              <Text style={styles.subItemText}>(25lb minimum)</Text>
              <View
                style={[
                  Layout.row,
                  Layout.alignItemsCenter,
                  Layout.justifyContentBetween,
                ]}
              >
                <Text
                  style={[
                    Gutters.smallTMargin,
                    styles.subItemText,
                    styles.blackColor,
                  ]}
                >
                  {'Each additional separate\nwash item'}
                </Text>
                <Text style={styles.valueText}>$5.00</Text>
              </View>
              <View style={[Gutters.regularTMargin, styles.border]} />
              <View
                style={[
                  Gutters.regularTMargin,
                  Layout.row,
                  Layout.alignItemsCenter,
                  Layout.justifyContentBetween,
                ]}
              >
                <Text style={styles.itemText}>Hangers</Text>
                <Text style={styles.valueText}>$1.00 per 3 pack </Text>
              </View>
              <View
                style={[
                  Gutters.regularTMargin,
                  Gutters.regularTMargin,
                  styles.border,
                ]}
              />

              <View
                style={[
                  Gutters.regularTMargin,
                  Layout.row,
                  Layout.alignItemsCenter,
                  Layout.justifyContentBetween,
                ]}
              >
                <Text style={styles.itemText}>Privacy bags</Text>
                <Text style={styles.valueText}>$5.00</Text>
              </View>

              <Text style={[Gutters.regularTMargin, styles.subItemText]}>
                These bags are great for undergarments and minimal items that
                need a special service. Once purchased it is yours to keep.
              </Text>

              <View style={[Gutters.regularTMargin, styles.border]} />

              <View
                style={[
                  Gutters.regularTMargin,
                  Layout.row,
                  Layout.alignItemsCenter,
                  Layout.justifyContentBetween,
                ]}
              >
                <Text style={styles.itemText}>
                  {'Sanitizen/\nodor control'}
                </Text>
                <Text style={styles.valueText}>$10.00+</Text>
              </View>
            </View>

            <Text style={styles.subTitle}>Household items</Text>
            <View style={[Gutters.regularTMargin, styles.card]}>
              <Text style={styles.itemText}>Comforter set includes:</Text>
              <Text
                style={[
                  Gutters.smallTMargin,
                  styles.subItemText,
                  styles.blackColor,
                ]}
              >
                {'\u2022'} Pillow Cases (4)
              </Text>
              <Text style={[styles.subItemText, styles.blackColor]}>
                {'\u2022'} Fitted sheet
              </Text>
              <Text style={[styles.subItemText, styles.blackColor]}>
                {'\u2022'} Flat sheet
              </Text>

              <View style={[Gutters.regularTMargin, styles.border]} />
              <View
                style={[
                  Gutters.regularTMargin,
                  Layout.row,
                  Layout.alignItemsCenter,
                  Layout.justifyContentBetween,
                ]}
              >
                <Text style={styles.itemText}>Twin set</Text>
                <Text style={styles.valueText}>$18.00</Text>
              </View>

              <View style={[Gutters.regularTMargin, styles.border]} />
              <View
                style={[
                  Gutters.regularTMargin,
                  Layout.row,
                  Layout.alignItemsCenter,
                  Layout.justifyContentBetween,
                ]}
              >
                <Text style={styles.itemText}>Queen set</Text>
                <Text style={styles.valueText}>$22.00</Text>
              </View>

              <View style={[Gutters.regularTMargin, styles.border]} />
              <View
                style={[
                  Gutters.regularTMargin,
                  Layout.row,
                  Layout.alignItemsCenter,
                  Layout.justifyContentBetween,
                ]}
              >
                <Text style={styles.itemText}>King set</Text>
                <Text style={styles.valueText}>$25.00</Text>
              </View>

              <View style={[Gutters.regularTMargin, styles.border]} />
              <View
                style={[
                  Gutters.regularTMargin,
                  Layout.row,
                  Layout.alignItemsCenter,
                  Layout.justifyContentBetween,
                ]}
              >
                <Text style={styles.itemText}>Blanket</Text>
                <Text style={styles.valueText}>$12.00+</Text>
              </View>

              <View style={[Gutters.regularTMargin, styles.border]} />
              <View
                style={[
                  Gutters.regularTMargin,
                  Layout.row,
                  Layout.alignItemsCenter,
                  Layout.justifyContentBetween,
                ]}
              >
                <Text style={styles.itemText}>Bed pillows</Text>
                <Text style={styles.valueText}>$8 (+$3 King)</Text>
              </View>
              <Text style={styles.subItemText}>(per pair)</Text>

              <View style={[Gutters.regularTMargin, styles.border]} />
              <View
                style={[
                  Gutters.regularTMargin,
                  Layout.row,
                  Layout.alignItemsCenter,
                  Layout.justifyContentBetween,
                ]}
              >
                <Text style={styles.itemText}>Bathroom rug set</Text>
                <Text style={styles.valueText}>$15.00+</Text>
              </View>
              <Text style={styles.subItemText}>(per set 3 piece)</Text>
            </View>
            <Text style={[Gutters.largeTMargin, styles.description]}>
              *These prices are subject to change. Up charges apply to certain
              fabrics and services, we can not insure every stain will be
              removed. Please check all pockets.
            </Text>
            <Text style={[Gutters.largeVMargin, styles.description]}>
              *We do not process pet items, excessive bodily fluids, mold, or
              items with pest/insects. If clothing appears to have any of the
              above your items may not be processed and will be returned.
            </Text>
          </ScrollView>
        )}
        {selectedTab === 1 && (
          <View>
            <ScrollView
              horizontal
              contentContainerStyle={Gutters.largeVPadding}
            >
              <View style={styles.planCard}>
                <Image
                  style={styles.markImage}
                  source={Images.best_value}
                  resizeMode="contain"
                />
                <Text style={styles.planTitle}>Gold Plan</Text>
                <View style={[Layout.row, styles.alignItemsEnd]}>
                  <View style={[Gutters.smallTMargin, Layout.row]}>
                    <Text
                      style={[
                        Gutters.regularTMargin,
                        styles.price,
                        styles.priceSymbol,
                      ]}
                    >
                      $
                    </Text>
                    <Text style={[styles.priceNumber, styles.price]}>111</Text>
                  </View>
                  <Text
                    style={[Gutters.regularLMargin, Gutters.regularBMargin]}
                  >
                    Every month
                  </Text>
                </View>

                <View style={[Gutters.regularTMargin, styles.border]} />
                <Text
                  style={[
                    Gutters.regularTMargin,
                    styles.subItemText,
                    styles.blackColor,
                  ]}
                >
                  {'\u2022'} Perfect for a family
                </Text>
                <Text
                  style={[
                    Gutters.tinyTMargin,
                    styles.subItemText,
                    styles.blackColor,
                  ]}
                >
                  {'\u2022'} Valid for 3 months
                </Text>
                <Text
                  style={[
                    Gutters.tinyTMargin,
                    styles.subItemText,
                    styles.blackColor,
                  ]}
                >
                  {'\u2022'} 2 pick ups
                </Text>
                <Text
                  style={[
                    Gutters.tinyTMargin,
                    styles.subItemText,
                    styles.blackColor,
                  ]}
                >
                  {'\u2022'} Free detergent
                </Text>
                <Text
                  style={[
                    Gutters.tinyTMargin,
                    styles.subItemText,
                    styles.blackColor,
                  ]}
                >
                  {'\u2022'} 80lbs per month
                </Text>
                <Text style={[Gutters.regularTMargin, styles.saveValue]}>
                  Save $28.00
                </Text>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Select and pay</Text>
                </TouchableOpacity>
              </View>

              <View style={[Gutters.largeLMargin, styles.planCard]}>
                <Text style={styles.planTitle}>Black Plan</Text>
                <View style={[Layout.row, styles.alignItemsEnd]}>
                  <View style={[Gutters.smallTMargin, Layout.row]}>
                    <Text
                      style={[
                        Gutters.regularTMargin,
                        styles.price,
                        styles.priceSymbol,
                      ]}
                    >
                      $
                    </Text>
                    <Text style={[styles.priceNumber, styles.price]}>222</Text>
                  </View>
                  <Text
                    style={[Gutters.regularLMargin, Gutters.regularBMargin]}
                  >
                    Every month
                  </Text>
                </View>

                <View style={[Gutters.regularTMargin, styles.border]} />
                <Text
                  style={[
                    Gutters.regularTMargin,
                    styles.subItemText,
                    styles.blackColor,
                  ]}
                >
                  {'\u2022'} Perfect for a busy family
                </Text>
                <Text
                  style={[
                    Gutters.tinyTMargin,
                    styles.subItemText,
                    styles.blackColor,
                  ]}
                >
                  {'\u2022'} Valid for 3 months
                </Text>
                <Text
                  style={[
                    Gutters.tinyTMargin,
                    styles.subItemText,
                    styles.blackColor,
                  ]}
                >
                  {'\u2022'} 4 pick ups
                </Text>
                <Text
                  style={[
                    Gutters.tinyTMargin,
                    styles.subItemText,
                    styles.blackColor,
                  ]}
                >
                  {'\u2022'} Free detergent
                </Text>
                <Text
                  style={[
                    Gutters.tinyTMargin,
                    styles.subItemText,
                    styles.blackColor,
                  ]}
                >
                  {'\u2022'} 150lbs per month
                </Text>
                <Text style={[Gutters.regularTMargin, styles.saveValue]}>
                  Save $40.50
                </Text>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Select and pay</Text>
                </TouchableOpacity>
              </View>

              <View style={[Gutters.largeLMargin, styles.planCard]}>
                <Text style={styles.planTitle}>Green Plan</Text>
                <View style={[Layout.row, styles.alignItemsEnd]}>
                  <View style={[Gutters.smallTMargin, Layout.row]}>
                    <Text
                      style={[
                        Gutters.regularTMargin,
                        styles.price,
                        styles.priceSymbol,
                      ]}
                    >
                      $
                    </Text>
                    <Text style={[styles.priceNumber, styles.price]}>60</Text>
                  </View>
                  <Text
                    style={[Gutters.regularLMargin, Gutters.regularBMargin]}
                  >
                    Every month
                  </Text>
                </View>

                <View style={[Gutters.regularTMargin, styles.border]} />
                <Text
                  style={[
                    Gutters.regularTMargin,
                    styles.subItemText,
                    styles.blackColor,
                  ]}
                >
                  {'\u2022'} Perfect for single person or couple
                </Text>
                <Text
                  style={[
                    Gutters.tinyTMargin,
                    styles.subItemText,
                    styles.blackColor,
                  ]}
                >
                  {'\u2022'} Valid for 3 months
                </Text>
                <Text
                  style={[
                    Gutters.tinyTMargin,
                    styles.subItemText,
                    styles.blackColor,
                  ]}
                >
                  {'\u2022'} 4 pick ups
                </Text>
                <Text
                  style={[
                    Gutters.tinyTMargin,
                    styles.subItemText,
                    styles.blackColor,
                  ]}
                >
                  {'\u2022'} Free detergent
                </Text>
                <Text
                  style={[
                    Gutters.tinyTMargin,
                    styles.subItemText,
                    styles.blackColor,
                  ]}
                >
                  {'\u2022'} 40lbs per month
                </Text>
                <Text style={[Gutters.regularTMargin, styles.saveValue]}>
                  Save $17.50
                </Text>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Select and pay</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
            <Text style={[Gutters.largeTMargin, styles.description]}>
              Membership plans are purchased for a 3 month period, & can not be
              cancelled until then. You will be billed each month on the same
              day that you purchased. If you are interested in gift certificates
              please email or text us.
            </Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  )
}

export default PricingContainer

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
  },
  wrapper: {
    paddingHorizontal: 30,
    flex: 1,
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
  },
  text: {
    color: '#0E0E0E',
    textAlign: 'left',
    marginTop: 20,
    fontSize: 15,
    lineHeight: 20,
  },
  button: {
    height: 45,
    borderRadius: 80,
    backgroundColor: '#43C3EF',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '600',
  },
  subTitle: {
    color: '#43C3EF',
    fontSize: 22,
    fontWeight: '700',
    marginTop: 30,
  },
  card: {
    borderRadius: 10,
    backgroundColor: '#ffffff',
    padding: 20,
    marginHorizontal: 3,
    shadowColor: '#888888',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 6,
  },
  planCard: {
    borderRadius: 10,
    backgroundColor: '#ffffff',
    marginHorizontal: 3,
    padding: 20,
    width: 270,
    height: 400,
    position: 'relative',
    shadowColor: '#888888',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 6,
  },
  markImage: {
    position: 'absolute',
    top: -20,
    right: -20,
    zIndex: 1,
  },
  itemText: {
    fontSize: 18,
    color: '#0E0E0E',
    fontWeight: '700',
  },
  subItemText: {
    color: '#A7A7A7',
    fontSize: 13,
    fontWeight: '500',
  },
  valueText: {
    fontSize: 16,
    color: '#0E0E0E',
    fontWeight: '700',
  },
  blackColor: {
    color: '#0E0E0E',
  },
  border: {
    backgroundColor: '#E2E2E2',
    height: 1,
  },
  description: {
    color: '#A7A7A7',
    fontSize: 12,
  },
  priceSymbol: {
    fontWeight: '700',
    fontSize: 16,
    marginRight: 3,
  },
  planTitle: {
    fontSize: 24,
    fontWeight: '700',
  },
  price: {
    color: '#43C3EF',
    fontWeight: '800',
  },
  priceNumber: {
    fontSize: 60,
    fontWeight: '700',
  },
  alignItemsEnd: {
    alignItems: 'flex-end',
  },
  saveValue: {
    color: '#56DBAB',
    fontSize: 16,
  },
})
