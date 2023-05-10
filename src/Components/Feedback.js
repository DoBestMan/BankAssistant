import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Image,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native'
import { useTheme } from '@/Hooks'
import { ScrollView } from 'react-native-gesture-handler'
import DropDownPicker from "react-native-dropdown-picker";

const Feedback = ({ onClose }) => {
  const { Layout, Images, Common } = useTheme()
  const [isSent, setIsSent] = useState(false)

  const images = [Images.howItWorks1, Images.howItWorks2, Images.howItWorks3]

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("1");
  const [items, setItems] = useState([
    { value: "1", label: "I would like to report a problem" },
    { value: "2", label: "I would like to rate  you" },
  ]);

  const onSubmit = () => {
    console.log(20230510,'onsubmit');
    setIsSent(true);
  }

  const goHome = () => {
    console.log(20230510,'goHome');
    onClose();
  }

  return (
      <SafeAreaView style={styles.wrapper}>
        <View style={[styles.header, Layout.row, Layout.alignItemsCenter]}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Image source={Images.close} resizeMode="contain" />
          </TouchableOpacity>
        </View>
        { !isSent && 
          <>
            <Text style={styles.title}>Feedback</Text>
            <View style={[Layout.fill]}>
              <View
                style={[
                  styles.imageWrapper,
                  Layout.fill,
                  Layout.alignItemsCenter,
                  Layout.justifyContentCenter,
                ]}
              >
                <Text style={styles.description}>We’re here to help! If you have any feedback for us or would like to request new features, please using the form below.</Text>
              </View>
            </View>

            <Text style={[styles.description, styles.selectTopic]}>Select a topic</Text>
            <DropDownPicker
              style={[
                styles.dropDown, Common.shadow, styles.items
              ]}
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              disableBorderRadius={true}
              setItems={setItems}
            />
            <View style={[Common.shadow, Common.borderRadius]}>
              <TextInput
                style={styles.textInput}
                placeholder="Message here"
                multiline={true}
              />
            </View>
            <TouchableOpacity style={[styles.button]} onPress={onSubmit}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </>
        }
        { isSent && 
          <>
            <View
              style={[
                styles.imageWrapper,
                Layout.fill,
                Layout.alignItemsCenter,
                Layout.justifyContentCenter,
              ]}
            >
              <Image source={Images.success} resizeMode="contain" />
              <Text style={styles.title}>Thanks for submitting!</Text>
              <Text style={[styles.description, styles.grey]}>Your message has been sent!</Text>
              <TouchableOpacity style={[styles.button, styles.goHome]} onPress={goHome}>
              <Text style={styles.buttonText}>Go to Home</Text>
            </TouchableOpacity>
            </View>
          </>
        }
      </SafeAreaView>
  )
}

export default Feedback

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  dropDown: {
    borderWidth: 1,
    borderColor: 'white',
  },
  textInput: {
    textAlignVertical: 'top',
    paddingTop: 15,
    paddingLeft: 5,
    height: 150, 
  },
  items: { marginVertical: 15 },
  header: {
    position: 'relative',
    height: 30,
    justifyContent: 'center',
    marginTop: 10,
  },
  title: {
    color: '#43C3EF',
    fontWeight: '900',
    fontSize: 48,
    marginTop: 30,
  },
  selectTopic: {
    marginBottom: 5
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
  grey: {
    color: '#636363',
    fontSize: 13,
  },
  description: {
    color: '#0E0E0E',
    paddingHorizontal: 5,
    fontSize: 15
  },
  goHome: {
    width: '70%',
  },
  button: {
    height: 45,
    borderRadius: 80,
    backgroundColor: '#43C3EF',
    marginTop: 20,
    marginBottom: 50,
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
