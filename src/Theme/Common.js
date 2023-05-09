/**
 * This file defines the base application styles.
 *
 * Use it to define generic component styles (e.g. the default text styles, default button styles...).
 */
import { StyleSheet } from 'react-native'
import { Layout } from '.'
import buttonStyles from './components/Buttons'
/**
 *
 * @param Theme can be spread like {Colors, NavigationColors, Gutters, Layout, Common, ...args}
 * @return {*}
 */
export default function ({ Colors, ...args }) {
  return {
    button: buttonStyles({ Colors, ...args }),
    ...StyleSheet.create({
      backgroundPrimary: {
        backgroundColor: Colors.primary,
      },
      backgroundReset: {
        backgroundColor: Colors.transparent,
      },
      textInput: {
        borderWidth: 1,
        borderColor: Colors.text,
        backgroundColor: Colors.inputBackground,
        color: Colors.text,
        minHeight: 50,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
      },
      shadow: {
        shadowColor: '#888888',
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.15,
        shadowRadius: 10,
        elevation: 6,
        backgroundColor: '#ffffff',
      },
      borderRadius: {
        borderRadius: 10,
      },
      roundedButton: {
        backgroundColor: Colors.primary,
        borderRadius: 80,
        alignItems: 'center',
        justifyContent: 'center',
      },
      pageTitle: {
        color: Colors.primary,
        fontWeight: '800',
        textAlign: 'left',
        fontSize: 36,
      },
    }),
  }
}
