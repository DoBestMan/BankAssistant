import React from 'react'
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native'
import { useState } from 'react'
import { useTheme } from '@/Hooks'
import { navigate } from '@/Navigators/utils'
import { ScrollView } from 'react-native-gesture-handler'

const CustomerOnboardingContainer = () => {
  const { Layout, Images, Fonts, Common, Gutters } = useTheme()
  const [currentStep, setCurrentStep] = useState(1)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPasswrd] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [addressSecond, setAddressSecond] = useState('')
  const [state, setState] = useState('')
  const [zip, setZip] = useState('')
  const [cardName, setCardName] = useState('')
  const [cardInfo, setCardInfo] = useState('')
  const [cardDate, setCardDate] = useState('')
  const [cardCVC, setCardCVC] = useState('')
  const [verificationCode, setVerificationCode] = useState('')

  const sendVerification = async () => {
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
    
    if(response.status === 200){
      setCurrentStep(5);
    } else if(response.status === 400){
      const user = await response.json();
      console.log(20230510, response);
      console.log(20230510, user);
      Alert.alert(user.value);
    }
  }

  const onSignUp = async () => {

    const response = await fetch('https://freshfabrics.app/api/v1/register/customer/inputs/verify', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            firstName: firstName,
            lastName: lastName,
            password: password,
            phonenumber: phone,
            address: address,
            addressSecond: addressSecond,
            state: state,
            city: address,
            zip: zip,
            verificationCode: "723910",
            cardName: cardName,
            cardInfo: cardInfo,
            cardDate: cardDate,
            cardCVC: cardCVC,
        }),
      })
      if(response.status === 200){
        navigate('Login');
        const paymentCard = await fetch('https://freshfabrics.app/api/v1/paymentCard/create', {
          fullName: firstName+' '+lastName,
          cardNumber: cardInfo,
          expMonth: cardDate.split('/')[0],
          expYear: cardDate.split('/')[1],
          cvc: cardCVC,
        });
        const paymentCardJson = await paymentCard.json();

        Alert.alert(`create paymentCard`,paymentCardJson);
      }
      else if(response.status === 400){
        const user = await response.json();
        console.log(20230510, response);
        console.log(20230510, user);
        Alert.alert(user.value);
      }
    }

  return (
    <ScrollView style={{height: '100%', backgroundColor: '#fff'}}>
      <SafeAreaView style={[Layout.fill, styles.background]}>
        <View>
          <View
            style={[
              Layout.row,
              Layout.rowCenter,
              Layout.justifyContentBetween,
              Gutters.largeHMargin,
              Gutters.regularTMargin,
            ]}
          >
            <TouchableOpacity
              onPress={() => {
                if (currentStep === 1) {
                  navigate('Home')
                } else {
                  setCurrentStep(currentStep - 1)
                }
              }}
            >
              <Image source={Images.left_arrow} resizeMode="contain" />
            </TouchableOpacity>
            <Text>{`Step ${currentStep} of 4`}</Text>
            <View style={{ width: 20 }} />
          </View>
        </View>
        <View style={[styles.progressWrapper, Layout.column]}>
          <View
            style={[
              styles.progressBar,
              Layout.column,
              { width: `${25 * currentStep}%` },
            ]}
          />
        </View>
        {currentStep === 1 && (
          <View style={[Layout.fill, styles.container]}>
            <Text style={[Fonts.textLarge, styles.title]}>Create your</Text>
            <Text style={[Fonts.textLarge, styles.title]}>account</Text>

            <View
              style={[
                Layout.fill,
                Layout.justifyContentCenter,
                Gutters.largeBMargin,
              ]}
            >
              <Text style={ [Gutters.smallBMargin, styles.firstName] }>Your first name</Text>
              <View style={[Common.shadow, Common.borderRadius]}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Enter your first name"
                  value={firstName}
                  onChangeText={setFirstName}
                />
              </View>

              <Text style={[Gutters.smallBMargin, Gutters.largeTMargin]}>
                Your last name
              </Text>
              <View style={[Common.shadow, Common.borderRadius]}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Enter your last name"
                  value={lastName}
                  onChangeText={setLastName}
                />
              </View>

              <Text style={[Gutters.smallBMargin, Gutters.largeTMargin]}>
                Email address
              </Text>
              <View style={[Common.shadow, Common.borderRadius]}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Enter your email"
                  value={email}
                  onChangeText={setEmail}
                />
              </View>

              <Text style={[Gutters.smallBMargin, Gutters.largeTMargin]}>
                Password
              </Text>
              <View style={[Common.shadow, Common.borderRadius]}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Enter your password"
                  secureTextEntry
                  value={password}
                  onChangeText={setPasswrd}
                />
              </View>

              <TouchableOpacity
                style={[styles.button, Layout.center]}
                onPress={() => setCurrentStep(2)}
              >
                <Text style={[Fonts.textRegular, styles.buttonText]}>
                  Continue
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {currentStep === 4 && (
          <View style={[Layout.fill, styles.container]}>
            <Text style={[Fonts.textLarge, styles.title]}>Verify phone</Text>
            <Text style={[Fonts.textLarge, styles.title]}>number</Text>

            <View style={[Layout.fill, Gutters.largeBMargin]}>
              <View
                style={[Common.shadow, Common.borderRadius, Gutters.largeTMargin]}
              >
                <TextInput
                  style={[styles.textInput]}
                  placeholder="+1(000) 000-0000"
                  value={phone}
                  onChangeText={setPhone}
                />
              </View>

              <TouchableOpacity
                style={[styles.button, Layout.center]}
                onPress={() => sendVerification()}
              >
                <Text style={[Fonts.textRegular, styles.buttonText]}>
                  Send Verification Code
                </Text>
              </TouchableOpacity>
              <Text style={[styles.descriptionText, Gutters.largeTMargin]}>
                I agree to receive calls and text messages from Fresh Fabrics.
                Please see the{' '}
                <Text style={{ color: '#636363' }}>Terms of Service</Text> for
                more information.
              </Text>
            </View>
          </View>
        )}

        {currentStep === 5 && (
          <View style={[Layout.fill, styles.container]}>
            <Text style={[Fonts.textLarge, styles.title]}>Enter Verification</Text>
            <Text style={[Fonts.textLarge, styles.title]}>code</Text>

            <View style={[Layout.fill, Gutters.largeBMargin]}>
              <View
                style={[Common.shadow, Common.borderRadius, Gutters.largeTMargin]}
              >
                <TextInput
                  style={[styles.textInput]}
                  placeholder="000-000"
                  value={verificationCode}
                  onChangeText={setVerificationCode}
                />
              </View>

              <TouchableOpacity
                style={[styles.button, Layout.center]}
                onPress={() => onSignUp()}
              >
                <Text style={[Fonts.textRegular, styles.buttonText]}>
                  Verify Code
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[ Layout.center]}
                onPress={() => sendVerification()}
              >
                <Text style={[Fonts.textRegular, styles.buttonText, styles.resend]}>
                  Resend Code
                </Text>
              </TouchableOpacity>
              <Text style={[styles.descriptionText, Gutters.largeTMargin]}>
                I agree to receive calls and text messages from Fresh Fabrics.
                Please see the{' '}
                <Text style={{ color: '#636363' }}>Terms of Service</Text> for
                more information.
              </Text>
            </View>
          </View>
        )}

        {currentStep === 2 && (
          <View style={[Layout.fill, styles.container]}>
            <Text style={[Fonts.textLarge, styles.title]}>Your delivery</Text>
            <Text style={[Fonts.textLarge, styles.title]}>address</Text>

            <View style={[Layout.fill, Gutters.largeBMargin]}>
              <Text style={[Gutters.smallBMargin, Gutters.largeTMargin]}>
                Address
              </Text>
              <View style={[Common.shadow, Common.borderRadius]}>
                <TextInput
                  style={[styles.textInput]}
                  placeholder="Enter your address"
                  value={address}
                  onChangeText={setAddress}
                />
              </View>

              <View
                style={[
                  Common.shadow,
                  Common.borderRadius,
                  Gutters.regularTMargin,
                ]}
              >
                <TextInput
                  style={[styles.textInput]}
                  placeholder="Address line 2"
                  value={addressSecond}
                  onChangeText={setAddressSecond}
                />
              </View>

              <View style={[Layout.row]}>
                <View style={[Layout.fill, Gutters.smallRMargin]}>
                  <Text style={[Gutters.smallBMargin, Gutters.largeTMargin]}>
                    State
                  </Text>
                  <View style={[Common.shadow, Common.borderRadius]}>
                    <TextInput
                      style={[styles.textInput]}
                      placeholder="Oklahoma"
                      value={state}
                      onChangeText={setState}
                    />
                  </View>
                </View>
                <View style={[Layout.fill, Gutters.smallLMargin]}>
                  <Text style={[Gutters.smallBMargin, Gutters.largeTMargin]}>
                    Zip code
                  </Text>
                  <View style={[Common.shadow, Common.borderRadius]}>
                    <TextInput style={[styles.textInput]} placeholder="00000" value={zip}
                  onChangeText={setZip} />
                  </View>
                </View>
              </View>

              <TouchableOpacity
                style={[styles.button, Layout.center]}
                onPress={() => setCurrentStep(3)}
              >
                <Text style={[Fonts.textRegular, styles.buttonText]}>
                  Continue
                </Text>
              </TouchableOpacity>

              {/* <TouchableOpacity
                style={[Layout.center, Gutters.regularTMargin]}
                onPress={() => setCurrentStep(4)}
              >
                <Text style={[Fonts.textSmall, { color: '#43C3EF' }]}>
                  Skip for now
                </Text>
              </TouchableOpacity> */}
            </View>
          </View>
        )}

        {currentStep === 3 && (
          <View style={[Layout.fill, styles.container]}>
            <Text style={[Fonts.textLarge, styles.title]}>Your payment</Text>
            <Text style={[Fonts.textLarge, styles.title]}>method</Text>

            <View style={[Layout.fill, Gutters.largeBMargin]}>
              <Text style={[Gutters.smallBMargin, Gutters.largeTMargin]}>
                Name on card
              </Text>
              <View style={[Common.shadow, Common.borderRadius]}>
                <TextInput style={[styles.textInput]} value={cardName}
                  onChangeText={setCardName} placeholder="Enter here" />
              </View>

              <Text style={[Gutters.largeTMargin]}>Card information</Text>
              <View
                style={[Common.shadow, Common.borderRadius, Gutters.smallTMargin]}
              >
                <TextInput
                  style={[styles.textInput]}
                  placeholder="1234 1234 1234 1234"
                  value={cardInfo}
                  onChangeText={setCardInfo}
                />
              </View>

              <View style={[Layout.row, Gutters.regularTMargin]}>
                <View style={[Layout.fill, Gutters.smallRMargin]}>
                  <View style={[Common.shadow, Common.borderRadius]}>
                    <TextInput style={[styles.textInput]} placeholder="MM / YY" value={cardDate}
                  onChangeText={setCardDate} />
                  </View>
                </View>
                <View style={[Layout.fill, Gutters.smallLMargin]}>
                  <View style={[Common.shadow, Common.borderRadius]}>
                    <TextInput style={[styles.textInput]} placeholder="CVC" value={cardCVC}
                  onChangeText={setCardCVC} />
                  </View>
                </View>
              </View>

              {/* <TouchableOpacity
                style={[styles.button, Layout.center]}
                onPress={onSignUp}
              >
                <Text style={[Fonts.textRegular, styles.buttonText]}>Done</Text>
              </TouchableOpacity> */}

              <TouchableOpacity
                style={[styles.button, Layout.center]}
                onPress={() => setCurrentStep(4)}
              >
                <Text style={[Fonts.textRegular, styles.buttonText]}>
                  Continue
                </Text>
              </TouchableOpacity>

              {/* <TouchableOpacity
                style={[Layout.center, Gutters.regularTMargin]}
                onPress={() => setCurrentStep(4)}
              >
                <Text style={[Fonts.textSmall, { color: '#43C3EF' }]}>
                  Skip for now
                </Text>
              </TouchableOpacity> */}
            </View>
          </View>
        )}
      </SafeAreaView>
    </ScrollView>
  )
}

export default CustomerOnboardingContainer

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#ffffff',
  },
  firstName: {
    marginTop: 50,
  },
  backgroundImg: {
    width: '100%',
    marginBottom: 20,
  },
  resend: {
    marginTop: 25,
    color: '#43C3EF',
  },
  title: {
    color: '#43C3EF',
    fontWeight: '800',
  },
  text: {
    color: '#ffffff',
    fontWeight: '500',
    lineHeight: 20,
    marginTop: 15,
  },
  container: {
    paddingHorizontal: 30,
    marginTop: 20,
  },
  textInput: {
    height: 50,
    backgroundColor: '#fffff',
    borderRadius: 10,
    borderColor: '#eeeeee',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  button: {
    height: 45,
    borderRadius: 80,
    backgroundColor: '#43C3EF',
    marginTop: 40,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '600',
  },
  progressWrapper: {
    backgroundColor: '#F4F4F4',
    height: 4,
    marginTop: 10,
  },
  progressBar: {
    backgroundColor: '#56DBAB',
    height: 4,
  },
  descriptionText: {
    color: '#A7A7A7',
    fontWeight: '500',
    lineHeight: 20,
    marginTop: 15,
  },
})
