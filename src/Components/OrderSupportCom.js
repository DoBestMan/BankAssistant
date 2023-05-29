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

const OrderSupportCom = ({ onClose }) => {
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
          <Text style={[Fonts.textLarge, styles.title]}>Order Support</Text>
          <View style={Gutters.largeTMargin}>
            <Text style={[ styles.subtitle]}>Select your issue or question</Text>
            <TouchableOpacity
                key={"When will my laundry be picked up/dropped off?"}
                style={styles.item}
                onPress={() => onClickSubtitle("When will my laundry be picked up/dropped off?")}
              >
              <Text style={styles.itemText}>{"When will my laundry be picked up/dropped off?"}</Text>
              <Image source={Images.right_blue_arrow} resizeMode="contain" />
            </TouchableOpacity>
            
            <TouchableOpacity
                key={"How much does my laundry weight? What is the cost?"}
                style={styles.item}
                onPress={() => onClickSubtitle("How much does my laundry weight? What is the cost?")}
              >
              <Text style={styles.itemText}>{"How much does my laundry weight? What is the cost?"}</Text>
              <Image source={Images.right_blue_arrow} resizeMode="contain" />
            </TouchableOpacity>

            <TouchableOpacity
                key={"Do I need to separate my clothes?"}
                style={styles.item}
                onPress={() => onClickSubtitle("Do I need to separate my clothes?")}
              >
              <Text style={styles.itemText}>{"Do I need to separate my clothes?"}</Text>
              <Image source={Images.right_blue_arrow} resizeMode="contain" />
            </TouchableOpacity>

            <TouchableOpacity
                key={"What is included in my order?"}
                style={styles.item}
                onPress={() => onClickSubtitle("What is included in my order?")}
              >
              <Text style={styles.itemText}>{"What is included in my order?"}</Text>
              <Image source={Images.right_blue_arrow} resizeMode="contain" />
            </TouchableOpacity>

            <TouchableOpacity
                key={"Cancelled order"}
                style={styles.item}
                onPress={() => onClickSubtitle("Cancelled order")}
              >
              <Text style={styles.itemText}>{"Cancelled order"}</Text>
              <Image source={Images.right_blue_arrow} resizeMode="contain" />
            </TouchableOpacity>

            <TouchableOpacity
                key={"My freshie did not arrive"}
                style={styles.item}
                onPress={() => onClickSubtitle("My freshie did not arrive")}
              >
              <Text style={styles.itemText}>{"My freshie did not arrive"}</Text>
              <Image source={Images.right_blue_arrow} resizeMode="contain" />
            </TouchableOpacity>

            <TouchableOpacity
                key={"My laundry was not delivered"}
                style={styles.item}
                onPress={() => onClickSubtitle("My laundry was not delivered")}
              >
              <Text style={styles.itemText}>{"My laundry was not delivered"}</Text>
              <Image source={Images.right_blue_arrow} resizeMode="contain" />
            </TouchableOpacity>

            <TouchableOpacity
                key={"Why my order may be canceled?"}
                style={styles.item}
                onPress={() => onClickSubtitle("Why my order may be canceled?")}
              >
              <Text style={styles.itemText}>{"Why my order may be canceled?"}</Text>
              <Image source={Images.right_blue_arrow} resizeMode="contain" />
            </TouchableOpacity>

            <TouchableOpacity
                key={"Do you pick up in my neighborhood?"}
                style={styles.item}
                onPress={() => onClickSubtitle("Do you pick up in my neighborhood?")}
              >
              <Text style={styles.itemText}>{"Do you pick up in my neighborhood?"}</Text>
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
  )
}

export default OrderSupportCom

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
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
