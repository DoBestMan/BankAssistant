import React, { useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { useTheme } from '@/Hooks'
import { Brand } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import { navigateAndSimpleReset } from '@/Navigators/utils'

const StartupContainer = () => {
  const { Layout } = useTheme()

  const init = async () => {
    await new Promise(resolve =>
      setTimeout(() => {
        resolve(true)
      }, 2000),
    )
    await setDefaultTheme({ theme: 'default', darkMode: null })
    navigateAndSimpleReset('Home')
  }

  useEffect(() => {
    init()
  })

  return (
    <View style={[Layout.fill, Layout.colCenter, styles.background]}>
      <Brand />
    </View>
  )
}

export default StartupContainer

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#43C3EF',
  },
})
