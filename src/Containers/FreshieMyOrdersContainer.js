import React, { useState } from 'react'
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
import { FreshieOrdersContainer } from '@/Containers'

const FreshieMyOrdersContainer = () => {
  const { Common, Layout, Images, Colors, Gutters } = useTheme()
  const [orderModalType, setOrderModalType] = useState('none')

  return (
    <SafeAreaView style={[Layout.fill, styles.container]}>
      <View style={[styles.header, Layout.rowVCenter]}>
        <Image source={Images.logo_blue} resizeMode="stretch" />
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

      <View style={[Gutters.largeHPadding, Gutters.largeVPadding]}>
        <View
          style={[
            Layout.center,
            Gutters.regularHPadding,
            Gutters.largeVPadding,
            Common.shadow,
            Common.borderRadius,
          ]}
        >
          <Image
            style={styles.avatar}
            source={Images.ambrose}
            resizeMode="contain"
          />
          <Text style={[styles.freshieName, Gutters.smallTMargin]}>
            Ambrose
          </Text>
          <Text style={[styles.cardText, Gutters.tinyTMargin]}>
            Joined 2 years
          </Text>
          <View
            style={[
              Gutters.regularTMargin,
              Gutters.regularHPadding,
              Layout.fullWidth,
              Layout.row,
              Layout.justifyContentBetween,
            ]}
          >
            <View>
              <View style={[Layout.row, Layout.alignItemsCenter]}>
                <Text style={styles.cardNumber}>4.9</Text>
                <Image
                  style={Gutters.tinyLMargin}
                  source={Images.rating}
                  resizeMode="contain"
                />
              </View>
              <Text style={[styles.cardText, { paddingTop: 2 }]}>Rating</Text>
            </View>

            <View style={Layout.alignItemsCenter}>
              <Text style={styles.cardNumber}>280</Text>
              <Text style={[styles.cardText, { paddingTop: 2 }]}>Delivers</Text>
            </View>

            <View style={Layout.alignItemsCenter}>
              <Text style={styles.cardNumber}>60</Text>
              <Text style={[styles.cardText, { paddingTop: 2 }]}>Reviews</Text>
            </View>
          </View>

          <View
            style={[
              Layout.fullWidth,
              Gutters.tinyHPadding,
              Gutters.largeTMargin,
              {
                position: 'relative',
              },
            ]}
          >
            <TouchableOpacity
              style={[
                Layout.fullWidth,
                Common.roundedButton,
                {
                  backgroundColor: Colors.gray,
                  height: 42,
                },
              ]}
            >
              <Text
                style={{ fontSize: 15, color: Colors.text, fontWeight: '700' }}
              >
                Message
              </Text>
            </TouchableOpacity>

            <View style={styles.badge}>
              <Text
                style={{ color: Colors.white, fontSize: 12, fontWeight: '700' }}
              >
                2
              </Text>
            </View>
          </View>
        </View>

        <View
          style={[
            Gutters.largeTMargin,
            Layout.fullWidth,
            Layout.justifyContentBetween,
            Layout.row,
          ]}
        >
          <TouchableOpacity
            style={[
              Layout.center,
              Gutters.regularVPadding,
              Gutters.regularHPadding,
              Common.borderRadius,
              {
                width: '47%',
                backgroundColor: Colors.primary,
              },
            ]}
            onPress={() => setOrderModalType('active')}
          >
            <Text style={[styles.largeText, { color: Colors.white }]}>3</Text>
            <Text
              style={[
                styles.paneText,
                Gutters.tinyTMargin,
                { color: Colors.white },
              ]}
            >
              Active
            </Text>
            <Text
              style={[styles.paneText, { color: Colors.white, marginTop: 2 }]}
            >
              Orders
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              Layout.center,
              Common.shadow,
              Gutters.regularVPadding,
              Gutters.regularHPadding,
              Common.borderRadius,
              {
                width: '47%',
              },
            ]}
            onPress={() => setOrderModalType('available')}
          >
            <Text style={[styles.largeText, { color: Colors.primary }]}>
              25
            </Text>
            <Text
              style={[
                styles.paneText,
                Gutters.tinyTMargin,
                { color: Colors.text },
              ]}
            >
              Available
            </Text>
            <Text
              style={[styles.paneText, { color: Colors.text, marginTop: 2 }]}
            >
              Orders
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={[
            Common.shadow,
            Common.borderRadius,
            Gutters.largeTMargin,
            Gutters.regularVPadding,
            Layout.center,
            Layout.row,
          ]}
          onPress={() => setOrderModalType('completed')}
        >
          <Text style={[styles.largeText, { color: Colors.primary }]}>280</Text>
          <Text
            style={[
              styles.paneText,
              Gutters.smallLMargin,
              { color: Colors.text },
            ]}
          >
            Completed Orders
          </Text>
        </TouchableOpacity>
      </View>

      <Modal animationType="fade" visible={orderModalType !== 'none'}>
        <FreshieOrdersContainer
          modalType={orderModalType}
          onClose={() => setOrderModalType('none')}
        />
      </Modal>
    </SafeAreaView>
  )
}

export default FreshieMyOrdersContainer

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
  },
  header: {
    position: 'relative',
    marginTop: 20,
    paddingHorizontal: 50,
  },
  bellIcon: {
    opacity: 0.5,
  },
  notification: {
    position: 'absolute',
    height: '100%',
    width: 40,
    right: 20,
  },
  avatar: {
    width: 80,
    height: 80,
  },
  freshieName: {
    color: '#0E0E0E',
    fontWeight: '900',
    fontSize: 28,
  },
  cardText: {
    color: '#A7A7A7',
    fontSize: 14,
  },
  cardNumber: {
    color: '#0E0E0E',
    fontSize: 18,
    fontWeight: '600',
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
  largeText: {
    fontSize: 45,
    fontWeight: '900',
  },
  paneText: {
    fontSize: 18,
    fontWeight: '800',
  },
})
