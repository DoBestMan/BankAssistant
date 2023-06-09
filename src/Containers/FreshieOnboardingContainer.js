import React, { useEffect } from 'react'
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
import { ScrollView } from 'react-native-gesture-handler'
import { launchImageLibrary } from "react-native-image-picker"

const FreshieOnboardingContainer = () => {
  const { Layout, Images, Fonts, Gutters } = useTheme()
  const [currentStep, setCurrentStep] = useState(1)
  const [email, setEmail] = useState('')
  const [filePath, setFilePath] = useState({});
  const [filePathBack, setFilePathBack] = useState({});

  const [isMale, setIsMale] = useState(false)

  const chooseFileBack = (type) => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
    launchImageLibrary(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        alert('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      }
      console.log('base64 -> ', response.base64);
      console.log('uri -> ', response.uri);
      console.log('width -> ', response.width);
      console.log('height -> ', response.height);
      console.log('fileSize -> ', response.fileSize);
      console.log('type -> ', response.type);
      console.log('fileName -> ', response.fileName);

      setFilePathBack(response.assets[0]);
    });
  };

  const chooseFile = (type) => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
    launchImageLibrary(options, (response) => {
      console.log('Response = ', response);
      if (response.didCancel) {
        alert('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      }
      console.log('base64 -> ', response.base64);
      console.log('uri -> ', response.uri);
      console.log('width -> ', response.width);
      console.log('height -> ', response.height);
      console.log('fileSize -> ', response.fileSize);
      console.log('type -> ', response.type);
      console.log('fileName -> ', response.fileName);
      setFilePath(response.assets[0]);
    });
  };

  useEffect(() => { console.log(20230510, email) }, [email])

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

          <View style={[Layout.fill, Gutters.largeBMargin]}>
            <Text style={Gutters.largeTMargin}>Email address</Text>
            <View style={[styles.inputWrapper, Gutters.smallTMargin]}>
              <TextInput
                style={styles.textInput}
                value={email}
                onChangeText={setEmail}
                placeholder="Enter your email"
              />
            </View>

            <Text style={Gutters.largeTMargin}>Password</Text>
            <View style={[styles.inputWrapper, Gutters.smallTMargin]}>
              <TextInput
                style={styles.textInput}
                placeholder="Enter your password"
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

      {currentStep === 2 && (
        <View style={[Layout.fill, styles.container]}>
          <Text style={[Fonts.textLarge, styles.title]}>Verify phone</Text>
          <Text style={[Fonts.textLarge, styles.title]}>number</Text>

          <View style={[Layout.fill, Gutters.largeBMargin]}>
            <View style={[styles.inputWrapper, Gutters.largeTMargin]}>
              <TextInput
                style={styles.textInput}
                placeholder="+1(000) 000-0000"
              />
            </View>

            <TouchableOpacity
              style={[styles.button, Layout.center]}
              onPress={() => setCurrentStep(3)}
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

      {currentStep === 3 && (
        <View style={[Layout.fill, styles.container]}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={[Fonts.textLarge, styles.title]}>Identity</Text>
            <Text style={[Fonts.textLarge, styles.title]}>verification</Text>

            <View style={[Layout.fill, Gutters.largeBMargin]}>
              <Text style={[styles.descriptionText, Gutters.regularTMargin]}>
                Information provided must match your driver’s license and will
                be used to verify your identity. All information provided is
                secure and confidential. Your provacy is important to us.
              </Text>

              <View style={[Layout.row, Gutters.regularTMargin]}>
                <View
                  style={[
                    Layout.fill,
                    Gutters.smallRMargin,
                    styles.inputWrapper,
                    !isMale && styles.selected,
                  ]}
                >
                  <TouchableOpacity
                    style={styles.toggleButton}
                    onPress={() => setIsMale(false)}
                  >
                    <Text>Female</Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={[
                    Layout.fill,
                    Gutters.smallLMargin,
                    styles.inputWrapper,
                    isMale && styles.selected,
                  ]}
                >
                  <TouchableOpacity
                    style={styles.toggleButton}
                    onPress={() => setIsMale(true)}
                  >
                    <Text>Male</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <Text style={[Gutters.smallBMargin, Gutters.largeTMargin]}>
                Full legal first name
              </Text>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={[styles.textInput]}
                  placeholder="Enter your legal first name"
                />
              </View>

              <Text style={[Gutters.smallBMargin, Gutters.regularTMargin]}>
                Full legal last name
              </Text>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={[styles.textInput]}
                  placeholder="Enter your legal last name"
                />
              </View>

              <Text style={[Gutters.smallBMargin, Gutters.regularTMargin]}>
                Date of birth
              </Text>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={[styles.textInput]}
                  placeholder="MM / DD / YYYY"
                />
              </View>

              <Text style={[Gutters.smallBMargin, Gutters.regularTMargin]}>
                Social Security Number
              </Text>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={[styles.textInput]}
                  placeholder="Enter your number"
                />
              </View>

              <Text style={[Gutters.smallBMargin, Gutters.regularTMargin]}>
                Your driver&apos;s license (Front)
              </Text>
              <View style={styles.shadow}>
                <TouchableOpacity>
                  <View
                    style={[Layout.row, Layout.center, { paddingVertical: 30 }]}
                  >
                    {Object.keys(filePath).length == 0 &&
                      <Text onPress={()=>{chooseFile('photo')}}>
                        <Image source={Images.camera} resizeMode="contain" />
                        <Text style={[Gutters.smallLMargin, { color: '#43C3EF' }]}>
                          Upload document image
                        </Text> 
                      </Text>}
                    {Object.keys(filePath).length != 0 && <Image source={{ uri: filePath.uri }} style={styles.imageStyle} />}

                  </View>
                </TouchableOpacity>
              </View>

              <Text style={[Gutters.smallBMargin, Gutters.regularTMargin]}>
                Your driver&apos;s license (Back)
              </Text>

              <View style={styles.shadow}>
                <TouchableOpacity>
                  <View
                    style={[Layout.row, Layout.center, { paddingVertical: 30 }]}
                  >
                    {Object.keys(filePathBack).length == 0 &&
                      <Text onPress={()=>{chooseFileBack('photo')}}>
                        <Image source={Images.camera} resizeMode="contain" />
                        <Text style={[Gutters.smallLMargin, { color: '#43C3EF' }]}>
                          Upload document image
                        </Text> 
                      </Text>}
                    {Object.keys(filePathBack).length != 0 && <Image source={{ uri: filePathBack.uri }} style={styles.imageStyle} />}
                  </View>
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                style={[styles.button, Layout.center]}
                onPress={() => setCurrentStep(4)}
              >
                <Text style={[Fonts.textRegular, styles.buttonText]}>
                  Continue
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
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
              onPress={() => navigate('FreshieIntroduction')}
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

export default FreshieOnboardingContainer

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
  imageStyle: {
    width: 200,
    height: 100,
    margin: 5,
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
})
