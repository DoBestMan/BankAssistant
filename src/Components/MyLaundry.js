import React, { useEffect, useState } from 'react'
import {
  StyleSheet,
  View,
  Image,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Dimensions,
  Modal,
} from 'react-native'
import { useTheme } from '@/Hooks'
import { navigate } from '@/Navigators/utils'
import AsyncStorage from '@react-native-async-storage/async-storage';

const screenHeight = Dimensions.get('window').height

const options = [
  'Small size (less than 45lbs)',
  'Medium size (46-60lbs)',
  'Large size (61-75lbs)',
  'Extra Large size (76-100lbs)',
  'Extra Extra Large size (101-150lbs)',
]

const MyLaundry = ({ onClose }) => {
  const { Layout, Images, Gutters, Fonts } = useTheme()
  const [currentStep, setCurrentStep] = useState(1)
  const [bagSize, setBagSize] = useState(0)
  const [bagCount, setBagCounts] = useState(2)
  const [preference, setPreference] = useState(0)
  const [insurance, setInsurance] = useState(0)
  const [pickupSpot, setPickupSpot] = useState(0)
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const onNext = async() => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1)
    } else if (currentStep === 5) {
      setShowSubscriptionModal(true)
    } else if(showSubscriptionModal){
      const response = await fetch('https://freshfabrics.app/api/v1/register/customer/inputs/verify', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "email": email,
        "firstName": firstName,
        "lastName": lastName,
        "phoneNumber": phone,
        "password": password
      }),
    })
    }else {
      onClose()
    }
  }

  useEffect( () => {

    const putLogs = async () => {
      const token = await AsyncStorage.getItem('token');
      console.log(20230517,`token`,token);
      console.log(20230517,`useEffect`);
      console.log(20230517,`currentStep`,currentStep);
      console.log(20230517,`bagSize`,bagSize);
      console.log(20230517,`bagCount`,bagCount);
      console.log(20230517,`preference`,preference);
      console.log(20230517,`insurance`,insurance);
      console.log(20230517,`showSubscriptionModal`,showSubscriptionModal);
      console.log(20230517,`pickupSpot`,pickupSpot);
      console.log(20230517,`showSuccessModal`,showSuccessModal);
    };

    putLogs();
  },[currentStep,bagSize,bagCount,preference,insurance,showSubscriptionModal,pickupSpot,showSuccessModal] )

  return (
    <ScrollView>
      <SafeAreaView style={styles.wrapper}>
        <View style={[styles.header, Layout.row, Layout.alignItemsCenter]}>
          <TouchableOpacity
            style={styles.prevButton}
            onPress={() => setCurrentStep(currentStep - 1)}
          >
            <Image source={Images.left_arrow} resizeMode="contain" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Do my laundry</Text>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Image source={Images.close} resizeMode="contain" />
          </TouchableOpacity>
          <View style={styles.progressBar}>
            <View style={[styles.progress, { width: `${20 * currentStep}%` }]} />
          </View>
        </View>

        {currentStep === 1 && (
          <View style={[styles.container, Layout.fill]}>
            <Text style={styles.title}>Bags</Text>
            <Text style={styles.description}>
              Number of bags/hampers to pickup
            </Text>
            <View
              style={[
                Gutters.largeTMargin,
                Layout.row,
                Layout.justifyContentCenter,
              ]}
            >
              <TouchableOpacity
                onPress={() => {
                  setBagCounts(bagCount - 1)
                }}
              >
                <Image source={Images.remove} resizeMode="contain" />
              </TouchableOpacity>
              <Text style={styles.bags}>{bagCount} Bags</Text>
              <TouchableOpacity
                onPress={() => {
                  setBagCounts(bagCount + 1)
                }}
              >
                <Image source={Images.add} resizeMode="contain" />
              </TouchableOpacity>
            </View>

            <View style={styles.optionList}>
              {options.map((option, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.optionButton,
                    index === bagSize && styles.boxSelected,
                  ]}
                  onPress={() => setBagSize(index)}
                >
                  <Text style={styles.optionText}>{option}</Text>
                  {bagSize === index && (
                    <Image
                      style={styles.check}
                      source={Images.checked}
                      resizeMode="contain"
                    />
                  )}
                </TouchableOpacity>
              ))}
            </View>

            <Text style={styles.description1}>
              For anything over 150lbs, please
            </Text>
            <Text style={styles.contact}>contact our customer service</Text>
          </View>
        )}

        {currentStep === 2 && (
          <View style={[styles.container, Layout.fill]}>
            <Text style={styles.title}>Preferences</Text>
            <Text style={[Gutters.largeTMargin, Fonts.textSmall]}>
              Detergent choice
            </Text>

            <View style={[Layout.alignItemsCenter]}>
              <TouchableOpacity
                style={[
                  styles.preferenceButton,
                  preference === 0 && styles.boxSelected,
                ]}
                onPress={() => setPreference(0)}
              >
                <Text style={styles.preferenceText}>High-efficiency</Text>
                <Text style={styles.description}>
                  A specially formulated solution for washing clothes
                </Text>
                {preference === 0 && (
                  <Image
                    style={[styles.check, { top: 10 }]}
                    source={Images.checked}
                    resizeMode="contain"
                  />
                )}
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.preferenceButton,
                  preference === 1 && styles.boxSelected,
                ]}
                onPress={() => setPreference(1)}
              >
                <Text style={styles.preferenceText}>Sensitive</Text>
                <Text style={styles.description}>
                  A delicate wash detergent for washing clothes
                </Text>
                {preference === 1 && (
                  <Image
                    style={[styles.check, { top: 10 }]}
                    source={Images.checked}
                    resizeMode="contain"
                  />
                )}
              </TouchableOpacity>
            </View>

            <Text style={[Gutters.largeTMargin, Fonts.textSmall]}>
              Special instructions
            </Text>
            <View style={[styles.inputWrapper, Gutters.smallTMargin]}>
              <TextInput
                editable
                multiline
                numberOfLines={4}
                textAlignVertical="top"
                style={styles.multiLineTextInput}
                placeholder="Type your instructions here"
              />
            </View>
          </View>
        )}

        {currentStep === 3 && (
          <View style={[styles.container, Layout.fill]}>
            <Text style={styles.title}>Insurance</Text>
            <Text style={[Gutters.largeTMargin, Fonts.textSmall]}>
              Upgrade your coverage plan?
            </Text>
            <Text style={styles.description}>
              Additional protection against damage/loss.
            </Text>

            <View style={[Layout.alignItemsCenter, Gutters.regularTMargin]}>
              <TouchableOpacity
                style={[
                  styles.preferenceButton,
                  insurance === 0 && styles.boxSelected,
                  {
                    height: 'auto',
                  },
                ]}
                onPress={() => setInsurance(0)}
              >
                <Text style={styles.preferenceText}>Basic</Text>
                <Text style={{ fontSize: 12, marginTop: 10 }}>
                  {'\u2022'} Up to $35 per garment
                </Text>
                <Text style={{ fontSize: 12 }}>
                  {'\u2022'} Maximum $200 per order
                </Text>
                <Text style={{ fontSize: 12, marginTop: 10, color: 'gray' }}>
                  Coverage valid for 48 hours after delivery.
                </Text>
                <Text style={{ fontSize: 12, color: 'gray' }}>
                  Subject to our{' '}
                  <Text style={{ color: 'black' }}>Temrs of Services</Text>
                </Text>
                {insurance === 0 && (
                  <Image
                    style={[styles.check, { top: 10 }]}
                    source={Images.checked}
                    resizeMode="contain"
                  />
                )}
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.preferenceButton,
                  insurance === 1 && styles.boxSelected,
                  {
                    height: 'auto',
                  },
                ]}
                onPress={() => setInsurance(1)}
              >
                <Text style={styles.preferenceText}>Premium</Text>
                {insurance === 1 && (
                  <Image
                    style={[styles.check, { top: 10 }]}
                    source={Images.checked}
                    resizeMode="contain"
                  />
                )}
              </TouchableOpacity>
            </View>
          </View>
        )}

        {currentStep === 4 && (
          <View style={[styles.container]}>
            <Text style={styles.title}>Contact Info</Text>

            <Text style={Gutters.largeTMargin}>Address</Text>
            <View style={[styles.inputWrapper, Gutters.smallTMargin]}>
              <TextInput
                style={[styles.textInput]}
                value="1120 North Main Street, Tulsa"
              />
            </View>
            <View style={[styles.inputWrapper, Gutters.smallTMargin]}>
              <TextInput
                style={[styles.textInput]}
                placeholder="Address line 2"
              />
            </View>

            <View style={[Layout.row, Gutters.regularTMargin]}>
              <View style={[Layout.fill, Gutters.smallRMargin]}>
                <Text>State</Text>
                <View style={[styles.inputWrapper, Gutters.smallTMargin]}>
                  <TextInput style={[styles.textInput]} value="Oklahoma" />
                </View>
              </View>

              <View style={Layout.fill}>
                <Text>Zip Code</Text>
                <View style={[styles.inputWrapper, Gutters.smallTMargin]}>
                  <TextInput style={[styles.textInput]} value="74103" />
                </View>
              </View>
            </View>

            <Text style={[Gutters.largeTMargin, Fonts.textSmall]}>
              Pickup spot
            </Text>

            <View style={Layout.alignItemsCenter}>
              <TouchableOpacity
                style={[
                  styles.preferenceButton,
                  pickupSpot === 0 && styles.boxSelected,
                  {
                    height: 'auto',
                  },
                ]}
                onPress={() => setPickupSpot(0)}
              >
                <Text style={styles.preferenceText}>Simple</Text>
                <Text style={{ fontSize: 12, color: 'gray', marginTop: 10 }}>
                  Put your laundry out for pick up in a spot that’s easily
                  accessible for our Freshie.
                </Text>
                <View style={[styles.inputWrapper, Gutters.smallTMargin]}>
                  <TextInput style={[styles.textInput]} value="Front door" />
                </View>
                <Text style={{ fontSize: 12, color: '#43C3EF', marginTop: 10 }}>
                  Add additional instruction
                </Text>
                {pickupSpot === 0 && (
                  <Image
                    style={[styles.check, { top: 10 }]}
                    source={Images.checked}
                    resizeMode="contain"
                  />
                )}
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.preferenceButton,
                  pickupSpot === 1 && styles.boxSelected,
                  {
                    height: 'auto',
                  },
                ]}
                onPress={() => setPickupSpot(1)}
              >
                <Text style={styles.preferenceText}>Custom</Text>
                <Text style={{ fontSize: 12, color: 'gray', marginTop: 10 }}>
                  Can't leave your laundry out for pickup?
                </Text>
                <Text style={{ fontSize: 12, color: 'gray' }}>
                  No problem, we can accomodate you.
                </Text>
                {pickupSpot === 1 && (
                  <Image
                    style={[styles.check, { top: 10 }]}
                    source={Images.checked}
                    resizeMode="contain"
                  />
                )}
              </TouchableOpacity>
            </View>

            <Text style={[Gutters.largeTMargin, Fonts.textSmall]}>
              Preferred pickup time
            </Text>

            <TouchableOpacity
              style={[
                Gutters.regularTMargin,
                styles.optionButton,
                styles.boxSelected,
              ]}
            >
              <Text style={styles.optionText}>08:00 am - 11:00 am</Text>

              <Image
                style={styles.check}
                source={Images.checked}
                resizeMode="contain"
              />
            </TouchableOpacity>

            <TouchableOpacity style={[Gutters.smallTMargin, styles.optionButton]}>
              <Text style={styles.optionText}>01:00 pm - 4:00 pm</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                Gutters.smallTMargin,
                Gutters.regularBMargin,
                styles.optionButton,
              ]}
            >
              <Text style={styles.optionText}>Anytime</Text>
            </TouchableOpacity>
          </View>
        )}

        {currentStep === 5 && (
          <View style={[styles.container]}>
            <Text style={styles.title}>Order details</Text>
            <View
              style={[
                styles.inputWrapper,
                styles.preferenceButton,
                { height: 'auto' },
              ]}
            >
              <View
                style={[
                  Layout.row,
                  Layout.alignItemsCenter,
                  Layout.justifyContentBetween,
                ]}
              >
                <Text style={styles.preferenceText}>2 Bags</Text>
                <TouchableOpacity>
                  <Text style={{ color: '#43C3EF' }}>Edit</Text>
                </TouchableOpacity>
              </View>
              <Text style={Gutters.regularTMargin}>Medium size(46-60lbs)</Text>
            </View>

            <Text style={[Gutters.regularTMargin, Fonts.textSmall]}>
              Preferences
            </Text>

            <View
              style={[
                styles.inputWrapper,
                styles.preferenceButton,
                { height: 'auto' },
              ]}
            >
              <View
                style={[
                  Layout.row,
                  Layout.alignItemsCenter,
                  Layout.justifyContentBetween,
                  {
                    paddingBottom: 10,
                    borderBottomColor: '#E2E2E2',
                    borderBottomWidth: 1,
                  },
                  ,
                ]}
              >
                <Text style={styles.preferenceText}>High-efficiency</Text>
                <TouchableOpacity>
                  <Text style={{ color: '#43C3EF' }}>Edit</Text>
                </TouchableOpacity>
              </View>
              <Text
                style={[
                  Gutters.regularTMargin,
                  { color: '#A7A7A7', fontSize: 12 },
                ]}
              >
                Special instructions:
              </Text>
              <Text style={[Gutters.smallTMargin, { fontSize: 12 }]}>
                No dry please
              </Text>
            </View>

            <Text style={[Gutters.regularTMargin, Fonts.textSmall]}>
              Insurance
            </Text>
            <View
              style={[
                styles.inputWrapper,
                styles.preferenceButton,
                { height: 'auto' },
              ]}
            >
              <View
                style={[
                  Layout.row,
                  Layout.alignItemsCenter,
                  Layout.justifyContentBetween,
                ]}
              >
                <Text style={styles.preferenceText}>Basic</Text>
                <TouchableOpacity>
                  <Text style={{ color: '#43C3EF' }}>Edit</Text>
                </TouchableOpacity>
              </View>
            </View>

            <Text style={[Gutters.regularTMargin, Fonts.textSmall]}>
              Pickup address
            </Text>
            <View
              style={[
                styles.inputWrapper,
                styles.preferenceButton,
                { height: 'auto' },
              ]}
            >
              <View
                style={[
                  Layout.row,
                  Layout.alignItemsCenter,
                  Layout.justifyContentBetween,
                  {
                    paddingBottom: 10,
                    borderBottomColor: '#E2E2E2',
                    borderBottomWidth: 1,
                  },
                  ,
                ]}
              >
                <Text style={{ fontSize: 12 }}>
                  1120 North Main Street, Tulsa, OK 74103
                </Text>
                <TouchableOpacity>
                  <Text style={{ color: '#43C3EF' }}>Edit</Text>
                </TouchableOpacity>
              </View>

              <Text style={[Gutters.regularTMargin, { fontSize: 12 }]}>
                <Text style={{ fontWeight: '700' }}>Pickup spot</Text>: Front door
              </Text>
            </View>

            <Text style={[Gutters.regularTMargin, Fonts.textSmall]}>
              Pickup pickup time
            </Text>
            <View
              style={[
                styles.inputWrapper,
                styles.preferenceButton,
                { height: 'auto' },
              ]}
            >
              <View
                style={[
                  Layout.row,
                  Layout.alignItemsCenter,
                  Layout.justifyContentBetween,
                ]}
              >
                <Text style={{ fontSize: 12 }}>01:00 pm - 4:00 pm</Text>
                <TouchableOpacity>
                  <Text style={{ color: '#43C3EF' }}>Edit</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}

        {currentStep === 6 && (
          <View style={[styles.container, { height: screenHeight - 300 }]}>
            <Text style={styles.title}>Checkout</Text>

            <Text style={[Gutters.regularTMargin, Fonts.textSmall]}>
              Order summary
            </Text>

            <View
              style={[
                styles.inputWrapper,
                styles.preferenceButton,
                { height: 'auto' },
              ]}
            >
              <View
                style={[
                  Layout.row,
                  Layout.alignItemsCenter,
                  Layout.justifyContentBetween,
                  {
                    paddingBottom: 10,
                    borderBottomColor: '#E2E2E2',
                    borderBottomWidth: 1,
                  },
                ]}
              >
                <Text style={{ color: '#636363' }}>Pre-Auth:</Text>
                <TouchableOpacity>
                  <Text style={{ color: '#0E0E0E', fontWeight: '700' }}>
                    $22.00
                  </Text>
                </TouchableOpacity>
              </View>

              <View
                style={[
                  Layout.row,
                  Layout.alignItemsCenter,
                  Layout.justifyContentBetween,
                  {
                    paddingTop: 10,
                  },
                ]}
              >
                <Text style={{ color: '#636363' }}>Amount Charged:</Text>
                <TouchableOpacity>
                  <Text style={{ color: '#0E0E0E', fontWeight: '700' }}>
                    $0.00
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={[
                Layout.row,
                Layout.alignItemsCenter,
                { justifyContent: 'flex-end', marginTop: 20 },
              ]}
            >
              <Image style={{}} source={Images.info} resizeMode="cover" />
              <Text style={{ color: '#43C3EF', marginLeft: 5 }}>
                What is Pre-Auth fee?
              </Text>
            </View>

            <Text style={[Gutters.largeTMargin, Fonts.textSmall]}>
              Payment Method
            </Text>

            <Text style={Gutters.regularTMargin}>Name on card</Text>
            <View style={[styles.inputWrapper, Gutters.smallTMargin]}>
              <TextInput style={[styles.textInput]} placeholder="Enter here" />
            </View>

            <Text style={Gutters.regularTMargin}>Card information</Text>
            <View style={[styles.inputWrapper, Gutters.smallTMargin]}>
              <TextInput
                style={[styles.textInput]}
                placeholder="1234 1234 1234 1234"
              />
            </View>

            <View style={[Layout.row, Gutters.smallTMargin]}>
              <View style={[Layout.fill, Gutters.smallRMargin]}>
                <View style={[styles.inputWrapper, Gutters.smallTMargin]}>
                  <TextInput style={[styles.textInput]} placeholder="MM / YY" />
                </View>
              </View>

              <View style={Layout.fill}>
                <View style={[styles.inputWrapper, Gutters.smallTMargin]}>
                  <TextInput style={[styles.textInput]} placeholder="CVC" />
                </View>
              </View>
            </View>

            <View style={Gutters.largeTMargin}>
              <TouchableOpacity
                style={[styles.button, { width: '100%' }]}
                onPress={() => setShowSuccessModal(true)}
              >
                <Text style={styles.buttonText}>Pay now</Text>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity
                style={[
                  Layout.row,
                  Layout.alignItemsCenter,
                  styles.button,
                  { width: '100%', backgroundColor: '#000' },
                ]}
                onPress={() => setShowSuccessModal(true)}
              >
                <Text style={[styles.buttonText, { color: '#fff' }]}>
                  Pay with
                </Text>
                <Image style={{}} source={Images.apple_pay} resizeMode="cover" />
              </TouchableOpacity>
            </View>
          </View>
        )}

        {currentStep < 6 && currentStep > 0 && (
          <View style={[Layout.alignItemsCenter]}>
            <TouchableOpacity style={[styles.button , styles.continueBtn]} onPress={onNext}>
              <Text style={styles.buttonText}>
                {currentStep === 5 ? 'Confirm order' : 'Continue'}
              </Text>
            </TouchableOpacity>
          </View>
        )}

        <Modal animationType="slide" visible={showSubscriptionModal}>
          <View style={[styles.modalContainer, Layout.fill]}>
            <TouchableOpacity
              style={[styles.closeButton, { left: -15, top: 15 }]}
              onPress={() => setShowSubscriptionModal(false)}
            >
              <Image source={Images.close} resizeMode="contain" />
            </TouchableOpacity>

            <Text
              style={{
                marginTop: 50,
                textAlign: 'center',
                fontSize: 30,
                fontWeight: '700',
                color: '#43C3EF',
              }}
            >
              Join our Monthly Plan to save more!
            </Text>
            <ScrollView horizontal contentContainerStyle={Gutters.largeVPadding}>
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
                  <Text style={[Gutters.regularLMargin, Gutters.regularBMargin]}>
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
                  <Text style={[Gutters.regularLMargin, Gutters.regularBMargin]}>
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
                  <Text style={[Gutters.regularLMargin, Gutters.regularBMargin]}>
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
              cancelled until then. You will be billed each month on the same day
              that you purchased. If you are interested in gift certificates
              please email or text us.
            </Text>

            <View style={[Layout.alignItemsCenter]}>
              <TouchableOpacity style={[styles.button]} onPress={onNext}>
                <Text style={styles.buttonText}>Continue to payment</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: '#F4F4F4' }]}
                onPress={() => {
                  setShowSubscriptionModal(false)
                  setCurrentStep(6)
                }}
              >
                <Text
                  style={[
                    styles.buttonText,
                    { color: '#000', fontWeight: '700' },
                  ]}
                >
                  No thanks
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <Modal animationType="slide" visible={showSuccessModal}>
          <View
            style={[
              styles.modalContainer,
              Layout.fill,
              Layout.justifyContentCenter,
              Layout.alignItemsCenter,
            ]}
          >
            <TouchableOpacity
              style={[styles.closeButton, { left: -15, top: 15 }]}
              onPress={() => setShowSuccessModal(false)}
            >
              <Image source={Images.close} resizeMode="contain" />
            </TouchableOpacity>

            <Image source={Images.success} resizeMode="contain" />

            <Text
              style={{
                textAlign: 'center',
                fontSize: 40,
                fontWeight: '700',
                color: '#43C3EF',
              }}
            >
              Order placed
            </Text>

            <Text
              style={[
                Gutters.largeTMargin,
                styles.description,
                { color: 'black', textAlign: 'center' },
              ]}
            >
              Your order is being assigned and you will receive a message from
              your Freshie with an estimated pickup time.
            </Text>

            <View
              style={[
                Layout.alignItemsCenter,
                Layout.largeTMargin,
                { width: '100%' },
              ]}
            >
              <TouchableOpacity
                style={[styles.button, { width: '100%' }]}
                onPress={() => navigate('OrderDetail')}
              >
                <Text style={styles.buttonText}>View my order</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </ScrollView>
  )
}

export default MyLaundry

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  header: {
    position: 'relative',
    justifyContent: 'center',
    marginTop: 10,
    paddingBottom: 10,
  },
  headerTitle: {
    color: '#0E0E0E',
    fontSize: 18,
  },
  prevButton: {
    position: 'absolute',
    left: 0,
    bottom: 4,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
  },
  closeButton: {
    position: 'absolute',
    right: 0,
    bottom: 4,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  progressBar: {
    height: 4,
    backgroundColor: '#F4F4F4',
    position: 'absolute',
    left: 0,
    bottom: -5,
    right: 0,
  },
  progress: {
    height: 4,
    backgroundColor: '#56DBAB',
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: '75%',
  },
  container: {
    padding: 30,
  },
  title: {
    color: '#43C3EF',
    fontWeight: '800',
    textAlign: 'left',
    fontSize: 30,
  },
  description: {
    color: '#A7A7A7',
    fontSize: 14,
    marginTop: 10,
  },
  bags: {
    fontWeight: '900',
    fontSize: 36,
    marginHorizontal: 10,
    width: 150,
    textAlign: 'center',
  },
  optionList: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  optionButton: {
    width: '100%',
    height: 48,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#888888',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 6,
    position: 'relative',
    marginBottom: 20,
  },
  preferenceButton: {
    marginTop: 20,
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 15,
    height: 120,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    justifyContent: 'center',
    shadowColor: '#888888',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 6,
    position: 'relative',
  },
  preferenceText: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'left',
  },
  optionText: {
    fontSize: 12,
  },
  check: {
    position: 'absolute',
    right: 10,
    width: 22,
  },
  button: {
    height: 45,
    borderRadius: 80,
    backgroundColor: '#43C3EF',
    marginTop: 20,
    marginBottom: 50,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '700',
  },
  description1: {
    textAlign: 'center',
    marginTop: 20,
  },
  continueBtn: {
    marginTop: -20
  },
  contact: {
    textAlign: 'center',
    color: '#43C3EF',
    marginTop: 10,
    marginBottom: 20,
  },
  textInput: {
    height: 50,
    backgroundColor: '#fffff',
    borderRadius: 10,
    borderColor: '#eeeeee',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  inputWrapper: {
    shadowColor: '#888',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4.65,
    elevation: 2,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  boxSelected: {
    borderColor: '#43C3EF',
    borderWidth: 2,
  },
  multiLineTextInput: {
    height: 120,
    padding: 10,
    marginTop: 5,
  },
  modalContainer: {
    backgroundColor: '#fff',
    margin: 30,
    position: 'relative',
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
