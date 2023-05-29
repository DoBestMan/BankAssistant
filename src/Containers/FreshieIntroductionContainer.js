import React from 'react'
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import { useState } from 'react'
import { useTheme } from '@/Hooks'
import { navigate } from '@/Navigators/utils'

const FreshieIntroductionContainer = () => {
  const { Layout, Images, Fonts, Gutters } = useTheme()
  const [currentStep, setCurrentStep] = useState(0)

  return (
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
          {currentStep > 0 && <Text>{`Instructions ${currentStep} of 8`}</Text>}
          <View style={{ width: 20 }} />
        </View>
      </View>

      {currentStep > 0 && (
        <View style={[styles.progressWrapper, Layout.column]}>
          <View
            style={[
              styles.progressBar,
              Layout.column,
              { width: `${12.5 * currentStep}%` },
            ]}
          />
        </View>
      )}

      {currentStep === 0 && (
        <View style={Gutters.largeTMargin}>
          <Text
            style={[Fonts.textLarge, styles.title, { textAlign: 'center' }]}
          >
            Introduction
          </Text>

          <Text
            style={[
              styles.descriptionText,
              Gutters.regularTMargin,
              { color: '#636363', textAlign: 'center' },
            ]}
          >
            These in-app onboarding training consists of:
          </Text>

          <View style={[Layout.center, Gutters.largeTMargin]}>
            <View style={styles.circle}>
              <Text style={Fonts.textRegular}>1</Text>
            </View>
            <Text style={styles.introductionStepText}>Instructions</Text>
            <Text
              style={[
                styles.descriptionText,
                { color: '#636363', textAlign: 'center', marginTop: 5 },
              ]}
            >
              Approx. 5 minutes
            </Text>
          </View>

          <View style={[Layout.center, Gutters.largeTMargin]}>
            <View style={styles.circle}>
              <Text style={Fonts.textRegular}>2</Text>
            </View>
            <Text style={styles.introductionStepText}>
              A test, which you must pass to proceed
            </Text>
            <Text
              style={[
                styles.descriptionText,
                { color: '#636363', textAlign: 'center', marginTop: 5 },
              ]}
            >
              Approx. 7 minutes
            </Text>
          </View>

          <View style={[Layout.center, Gutters.largeTMargin]}>
            <View style={styles.circle}>
              <Text style={Fonts.textRegular}>3</Text>
            </View>
            <Text style={styles.introductionStepText}>Receive a</Text>
            <Text style={[styles.introductionStepText, { marginTop: 5 }]}>
              confirmation email
            </Text>
          </View>

          <TouchableOpacity
            style={[
              styles.button,
              Layout.center,
              { width: '80%', alignSelf: 'center' },
            ]}
            onPress={() => setCurrentStep(1)}
          >
            <Text style={[Fonts.textRegular, styles.buttonText]}>Start</Text>
          </TouchableOpacity>
        </View>
      )}

      {currentStep === 1 && (
        <View style={[Layout.fill, styles.container, { paddingHorizontal: 0 }]}>
          <Text style={[Fonts.textLarge, styles.title, Gutters.regularLMargin]}>
            Accept & deliver
          </Text>
          <Text style={[Fonts.textLarge, styles.title, Gutters.regularLMargin]}>
            your orders
          </Text>

          <View style={{ width: '100%', marginTop: 20 }}>
            <Image
              style={{ width: '100%' }}
              source={Images.instructionBackground}
              resizeMode="cover"
            />
          </View>

          <Text style={{ paddingHorizontal: 20, marginTop: 30 }}>
            How to accept a laundry order?
          </Text>
          <Text style={{ paddingHorizontal: 20, marginTop: 30 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at
            eros at velit ornare rutrum. Nullam venenatis elementum luctus. Sed
            fermentum, nulla in venenatis dignissim, quam massa sodales.
          </Text>

          <TouchableOpacity
            style={[
              styles.button,
              Layout.center,
              { width: '80%', alignSelf: 'center' },
            ]}
            onPress={() => setCurrentStep(2)}
          >
            <Text style={[Fonts.textRegular, styles.buttonText]}>
              Next section
            </Text>
          </TouchableOpacity>
        </View>
      )}

      {currentStep === 2 && (
        <View style={[Layout.fill, styles.container]}>
          <Text style={[Fonts.textLarge, styles.title, { fontSize: 30 }]}>
            Supplies &
          </Text>
          <Text style={[Fonts.textLarge, styles.title, { fontSize: 30 }]}>
            equipment required
          </Text>

          <View style={[Layout.fill, Gutters.largeBMargin]}>
            <Text style={{ marginTop: 30 }}>
              Things you will need in order to become a Freshie.
            </Text>
            <Text style={Gutters.regularTMargin}>Mandatory</Text>
            <Text
              style={[
                Gutters.regularTMargin,
                styles.subItemText,
                styles.blackColor,
              ]}
            >
              {'\u2022'} Washer & dyer
            </Text>
            <Text
              style={[
                Gutters.smallTMargin,
                styles.subItemText,
                styles.blackColor,
              ]}
            >
              {'\u2022'} Detergent
            </Text>
            <Text
              style={[
                Gutters.smallTMargin,
                styles.subItemText,
                styles.blackColor,
              ]}
            >
              {'\u2022'} Vehicle
            </Text>
            <Text
              style={[
                Gutters.smallTMargin,
                styles.subItemText,
                styles.blackColor,
              ]}
            >
              {'\u2022'} Clear garment bags
            </Text>
            <Text
              style={[
                Gutters.smallTMargin,
                styles.subItemText,
                styles.blackColor,
              ]}
            >
              {'\u2022'} Stickers
            </Text>
            <Text
              style={[
                Gutters.smallTMargin,
                styles.subItemText,
                styles.blackColor,
              ]}
            >
              {'\u2022'} Hangers
            </Text>
            <Text
              style={[
                Gutters.smallTMargin,
                styles.subItemText,
                styles.blackColor,
              ]}
            >
              {'\u2022'} Scale
            </Text>

            <Text style={Gutters.regularTMargin}>Recommend</Text>
            <Text
              style={[
                Gutters.regularTMargin,
                styles.subItemText,
                styles.blackColor,
              ]}
            >
              {'\u2022'} dry rack(for hang to dry items)
            </Text>
            <Text
              style={[
                Gutters.smallTMargin,
                styles.subItemText,
                styles.blackColor,
              ]}
            >
              {'\u2022'} Folding board
            </Text>
            <Text
              style={[
                Gutters.smallTMargin,
                styles.subItemText,
                styles.blackColor,
              ]}
            >
              {'\u2022'} Lint roller
            </Text>
            <Text
              style={[
                Gutters.smallTMargin,
                styles.subItemText,
                styles.blackColor,
              ]}
            >
              {'\u2022'} Box (to pack & shape clothes neatly)
            </Text>

            <TouchableOpacity
              style={[styles.button, Layout.center]}
              onPress={() => setCurrentStep(3)}
            >
              <Text style={[Fonts.textRegular, styles.buttonText]}>
                Next Section
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {currentStep === 3 && (
        <View style={[Layout.fill, styles.container]}>
          <View style={[Layout.center, { marginTop: 50, marginBottom: 30 }]}>
            <Image source={Images.freshieTest} resizeMode="contain" />
          </View>
          <Text style={[Fonts.textLarge, styles.title]}>Are you ready for</Text>
          <Text style={[Fonts.textLarge, styles.title]}>the Freshie test?</Text>

          <Text style={{ paddingHorizontal: 20, marginTop: 30 }}>
            You are required to complete our test in order to become a Freshie.
            You will only be allowed to miss 3 questions of the test.
          </Text>

          <Text style={{ paddingHorizontal: 20, marginTop: 30 }}>
            If you fail, you will need to start the instruction over again.
          </Text>

          <TouchableOpacity
            style={[styles.button, Layout.center]}
            onPress={() => setCurrentStep(4)}
          >
            <Text style={[Fonts.textRegular, styles.buttonText]}>
              Start the test
            </Text>
          </TouchableOpacity>
        </View>
      )}

      {currentStep === 4 && (
        <View style={[Layout.fill, styles.container]}>
          <Text style={[Fonts.textLarge, styles.title]}>Connect bank</Text>

          <Text style={[styles.descriptionText, Gutters.regularTMargin]}>
            How would you like to get paid?
          </Text>

          <View style={[Layout.fill, Gutters.largeBMargin]}>
            <Text style={[Gutters.smallBMargin, Gutters.largeTMargin]}>
              Routing number
            </Text>
            <View style={styles.shadow}>
              <TextInput
                style={[styles.textInput]}
                placeholder="Enter number here"
              />
            </View>

            <Text style={[Gutters.regularTMargin]}>Account number</Text>
            <View style={[styles.shadow, Gutters.smallTMargin]}>
              <TextInput
                style={[styles.textInput]}
                placeholder="Enter number here"
              />
            </View>

            <View
              style={[
                Layout.row,
                Layout.alignItemsCenter,
                { justifyContent: 'flex-end', marginTop: 20 },
              ]}
            >
              <Text style={{ color: '#43C3EF', marginLeft: 5 }}>
                Where can I find this info?
              </Text>
            </View>

            <TouchableOpacity
              style={[styles.button, Layout.center]}
              onPress={() => navigate('Login')}
            >
              <Text style={[Fonts.textRegular, styles.buttonText]}>
                Continue
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </SafeAreaView>
  )
}

export default FreshieIntroductionContainer

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#ffffff',
  },
  backgroundImg: {
    width: '100%',
    marginBottom: 20,
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
  toggleButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    borderRadius: 10,
  },
  shadow: {
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
  selected: {
    borderColor: '#43C3EF',
    borderWidth: 2,
  },
  circle: {
    width: 45,
    height: 45,
    borderRadius: 45,
    borderWidth: 1,
    borderColor: '#0E0E0E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  introductionStepText: {
    fontSize: 24,
    color: '#0E0E0E',
    fontWeight: '800',
    marginTop: 10,
    textAlign: 'center',
    width: '70%',
  },
})
