import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Image,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native'
import { useTheme } from '@/Hooks'
import { ScrollView } from 'react-native-gesture-handler'

const TITLES = ['Order online', 'Wash. Dry. Fold.', 'Deliver on time']
const DESCRIPTIONS = [
  'Place your order. Feel free to provide any special instructions and we will pick it up.',
  'We will wash, dry & fold your items and follow any special instructions',
  'We return your laundry the same day we pick up to your desired location.',
]

const ReportProblemCom = ({ onClose }) => {
  const { Layout, Images, Gutters } = useTheme()
  const [currentStep, setCurrentStep] = useState(1)

  const images = [Images.howItWorks1, Images.howItWorks2, Images.howItWorks3]

  const onNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    } else {
      onClose()
    }
  }

  return (
      <SafeAreaView style={styles.wrapper}>
        <View style={[styles.header, Layout.row, Layout.alignItemsCenter]}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Image source={Images.close} resizeMode="contain" />
          </TouchableOpacity>
          <Text style={styles.title}>Report a problem</Text>
        </View>

        <View style={[Layout.fill]}>
          <View
            style={[
              styles.imageWrapper,
              Layout.fill,
              Layout.alignItemsCenter,
              Layout.justifyContentCenter,
            ]}
          >
            <Image source={images[currentStep - 1]} style={{marginTop: currentStep == 2? 30: 90}} resizeMode="contain" />
          </View>
        <View style={[Layout.alignItemsCenter, styles.orderOnline]}>
            <View style={styles.stepNumberWrapper}>
              <Text style={styles.stepNumber}>{currentStep}</Text>
            </View>
            <Text style={styles.stepTitle}>{TITLES[currentStep - 1]}</Text>
            <Text style={styles.description}>
              {DESCRIPTIONS[currentStep - 1]}
            </Text>
            <TouchableOpacity style={styles.button} onPress={onNext}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
            <View style={[Layout.row, Gutters.regularBMargin]}>
              {Array(3)
                .fill()
                .map((value, index) => (
                  <TouchableOpacity
                    key={index}
                    style={[
                      styles.stepDot,
                      index === currentStep - 1 && styles.dotSelected,
                    ]}
                  />
                ))}
            </View>
          </View>
        </View>
      </SafeAreaView>
  )
}

export default ReportProblemCom

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  header: {
    position: 'relative',
    height: 30,
    justifyContent: 'center',
    marginTop: 10,
  },
  title: {
    color: '#0E0E0E',
    fontSize: 18,
  },
  closeButton: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
  },
  imageWrapper: {
    marginVertical: 50,
    marginTop: 30,
  },
  orderOnline: {
    marginTop: -20
  },
  stepNumberWrapper: {
    width: 45,
    height: 45,
    borderRadius: 40,
    borderColor: '#43C3EF',
    borderWidth: 1,
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'center',
  },
  stepNumber: {
    color: '#43C3EF',
    fontSize: 16,
    fontWeight: '700',
  },
  stepTitle: {
    color: '#43C3EF',
    fontWeight: '900',
    fontSize: 48,
    marginTop: 30,
  },
  description: {
    color: '#A7A7A7',
    textAlign: 'center',
    paddingHorizontal: 40,
    marginVertical: 30,
    fontSize: 16,
  },
  button: {
    height: 45,
    borderRadius: 80,
    backgroundColor: '#43C3EF',
    marginTop: 20,
    marginBottom: 50,
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '700',
  },
  stepDot: {
    width: 12,
    height: 12,
    borderRadius: 20,
    backgroundColor: '#E2E2E2',
    marginHorizontal: 5,
  },
  dotSelected: {
    backgroundColor: '#43C3EF',
  },
})
