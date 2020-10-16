import React from 'react'
import {
  View, ScrollView, StyleSheet, Image, TouchableOpacity,
} from 'react-native'
import { logo, logoSigUp, frameLogo } from '../../../assets/images'
import { calRepository, Colors, Fonts } from '../../../assets/styles'

import { Text } from '../../components'
import Button from '../../components/Button'
import { SCREEN_NAME } from '../../configs'

const SigupAndSigIn = (props) => {
  const { navigation } = props
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View style={{ alignItems: 'center' }}>
            <Image source={frameLogo} style={{ width: 423, height: 504 }} />
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              position: 'absolute',
              marginTop: 50,
            }}
            >
              <Text style={styles.titleLogo}>
                Silent
              </Text>
              <Image
                source={logo}
                style={{
                  width: 30 * calRepository,
                  height: 30 * calRepository,
                  marginHorizontal: 10 * calRepository,

                }}
              />
              <Text style={styles.titleLogo}>
                Moon
              </Text>
            </View>
            <View style={{ marginHorizontal: 45 * calRepository, marginTop: 160 * calRepository, position: 'absolute' }}>
              <Image source={logoSigUp} style={{ width: 332 * calRepository, height: 242 * calRepository }} />
            </View>
          </View>
          <View style={{ marginTop: 30 * calRepository, alignItems: 'center' }}>
            <Text style={{
              ...Fonts.bold, fontSize: 30, lineHeight: 41, color: Colors.primaryBlackText,
            }}
            >
              We are what we do
            </Text>
            <Text style={{
              fontSize: 16,
              marginTop: 15 * calRepository,
              paddingHorizontal: 58 * calRepository,
              textAlign: 'center',
              lineHeight: 26,
            }}
            >
              Thousand of people are usign silent moon for smalls meditation
            </Text>
          </View>

          <View style={{ margin: 20 * calRepository, marginTop: 62 * calRepository }}>
            <Button title="Sign Up" />
          </View>
          <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAME.LoginScreen)}>
            <View style={{ marginBottom: 80 }}>
              <Text style={{ textAlign: 'center' }}>
                ALREADY HAVE AN ACCOUNT?
                {' '}
                <Text style={{ color: Colors.bgButtonPurple }}>LOG IN</Text>
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  titleLogo: {
    ...Fonts.airbnbBold, fontSize: 16, color: Colors.primaryBlackTex, lineHeight: 21,
  },

})
export default SigupAndSigIn
