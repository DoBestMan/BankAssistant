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

const MENU_ITEMS = [
  [ 'Ordering', "What's included?", 'Is there a minimum?', 'Do you service my area?' ],
  [ 'Preparing for pick', 'Do I put my clothes out for pick up in laundry bags?', 'What days do you pick up and deliver?', 'Do I have to serparate lights and darks?' ],
  [ 'Care of clothes', 'Do you launder clothes in cold wather or hot?', 'Do you use fabric softener' ]
]

const FaqCom = ({ onClose }) => {
  const { Layout, Images, Gutters, Fonts } = useTheme()
  const [question, setQuestion] = useState('')

  const onClickSubtitle = (question) => {
    setQuestion(question);
  }

  const onBack = () => {
    if(question) setQuestion('');
    else onClose();
  }
  
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView style={styles.wrapper}>
        <View style={[styles.header, Layout.row, Layout.alignItemsCenter]}>
          <TouchableOpacity style={styles.closeButton} onPress={onBack}>
            <Image source={Images.left_arrow} resizeMode="contain" />
          </TouchableOpacity>
          { !question &&
            <TouchableOpacity
              style={[styles.notification, Layout.right]}
            >
              <Image
                style={styles.bellIcon}
                source={Images.notification_empty}
                resizeMode="stretch"
              />
            </TouchableOpacity>
          }
        </View>
        { !question && 
          <View style={styles.wrapper}>
            <Text style={[Fonts.textLarge, styles.title]}>FAQ</Text>
            <View style={Gutters.largeTMargin}>
              <Text style={[ styles.subtitle]}>Ordering</Text>
              <TouchableOpacity
                  key={"What's included?"}
                  style={styles.item}
                  onPress={() => onClickSubtitle("What's included?")}
                >
                <Text style={styles.itemText}>{"What's included?"}</Text>
                <Image source={Images.right_blue_arrow} resizeMode="contain" />
              </TouchableOpacity>
              <TouchableOpacity
                  key={'Is there a minimum?'}
                  style={styles.item}
                  onPress={() => onClickSubtitle('Is there a minimum?')}
                >
                <Text style={styles.itemText}>{'Is there a minimum?'}</Text>
                <Image source={Images.right_blue_arrow} resizeMode="contain" />
              </TouchableOpacity>
              <TouchableOpacity
                  key={'Do you service my area?'}
                  style={styles.item}
                  onPress={() => onClickSubtitle('Do you service my area?')}
                >
                <Text style={styles.itemText}>{'Do you service my area?'}</Text>
                <Image source={Images.right_blue_arrow} resizeMode="contain" />
              </TouchableOpacity>
            </View>

            <View style={Gutters.largeTMargin}>
              <Text style={[ styles.subtitle]}>Preparing for pick</Text>
              <TouchableOpacity
                  key={"Do I put my clothes out for pick up in laundry bags?"}
                  style={styles.item}
                  onPress={() => onClickSubtitle("Do I put my clothes out for pick up in laundry bags?")}
                >
                <Text style={styles.itemText}>{"Do I put my clothes out for pick up in laundry bags?"}</Text>
                <Image source={Images.right_blue_arrow} resizeMode="contain" />
              </TouchableOpacity>
              <TouchableOpacity
                  key={'What days do you pick up and deliver?'}
                  style={styles.item}
                  onPress={() => onClickSubtitle('What days do you pick up and deliver?')}
                >
                <Text style={styles.itemText}>{'What days do you pick up and deliver?'}</Text>
                <Image source={Images.right_blue_arrow} resizeMode="contain" />
              </TouchableOpacity>
              <TouchableOpacity
                  key={'Do I have to serparate lights and darks?'}
                  style={styles.item}
                  onPress={() => onClickSubtitle('Do I have to serparate lights and darks?')}
                >
                <Text style={styles.itemText}>{'Do I have to serparate lights and darks?'}</Text>
                <Image source={Images.right_blue_arrow} resizeMode="contain" />
              </TouchableOpacity>
            </View>

            <View style={Gutters.largeTMargin}>
              <Text style={[ styles.subtitle]}>Care of clothes</Text>
              <TouchableOpacity
                  key={"Do you launder clothes in cold wather or hot?"}
                  style={styles.item}
                  onPress={() => onClickSubtitle("Do you launder clothes in cold wather or hot?")}
                >
                <Text style={styles.itemText}>{"Do you launder clothes in cold wather or hot?"}</Text>
                <Image source={Images.right_blue_arrow} resizeMode="contain" />
              </TouchableOpacity>
              <TouchableOpacity
                  key={'Do you use fabric softener'}
                  style={styles.item}
                  onPress={() => onClickSubtitle('Do you use fabric softener')}
                >
                <Text style={styles.itemText}>{'Do you use fabric softener'}</Text>
                <Image source={Images.right_blue_arrow} resizeMode="contain" />
              </TouchableOpacity>
            </View>
          </View>
        }
        { question && 
          <View style={styles.wrapper}>
            <Text style={[styles.subtitle, styles.question]}>{question}</Text>
            <Text style={[styles.itemText, styles.itemPg]}>FAQ article goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquet tempor lacus eu sollicitudin. Nunc a diam in ligula mattis fringilla. Nulla congue felis nec ex luctus, vitae elementum diam venenatis. Quisque libero ligula, pretium at aliquam id, vestibulum nec massa. Nulla quam massa, tristique quis gravida a, vulputate a tortor. Suspendisse potenti. Morbi placerat aliquam vestibulum. Praesent cursus pellentesque felis, et condimentum tellus fringilla eu.
</Text>
            <Text style={[ styles.subtitle]}>Subtitle goes here</Text>
            <Text style={[styles.itemText, styles.itemPg]}>FAQ article goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquet tempor lacus eu sollicitudin. Nunc a diam in ligula mattis fringilla. Nulla congue felis nec ex luctus, vitae elementum diam venenatis. Quisque libero ligula, pretium at ulputate a tortor. Suspendisse potenti. Morbi placerat aliquam vestibulum. Praesent cursus pellentesque felis, et condimentum tellus fringilla eu.

Nulla congue felis nec ex luctus, vitae elementum diam venenatis. Quisque libero ligula, pretium at ulputate a tortor. Suspendisse potenti. 
</Text>
          </View>
        }
      </SafeAreaView>
    </ScrollView>
  )
}

export default FaqCom

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  question: {
    fontSize: 30
  },
  itemPg: {
    marginTop: 10,
    marginBottom: 10,
  },
  title: {
    fontFamily: 'Program OT',
    fontWeight: '700',
    color: '#43C3EF'
  },
  header: {
    position: 'relative',
    height: 30,
    justifyContent: 'center',
    marginTop: 10,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#E2E2E2',
    borderBottomWidth: 2,
    height: 60,
  },
  subtitle: {
    color: '#43C3EF',
    fontSize: 16,
    fontWeight: '500',
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
  notification: {
    marginLeft: 'auto',
    marginRight: 30,
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
