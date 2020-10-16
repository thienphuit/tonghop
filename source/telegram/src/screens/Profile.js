import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Chat from 'react-native-vector-icons/MaterialCommunityIcons';
import { rectangle } from '../../assets/images';
const { width } = Dimensions.get('window');
const calcWidth = 414 / width;
export default class Profile extends React.Component {
  render() {
    return (
      <ScrollView>

        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity>
              <Icon name="angle-left" size={30 * calcWidth} color="#2675EC" />
            </TouchableOpacity>
            <Text style={styles.nameHeader}>@WdLam</Text>
          </View>
          <View style={styles.nameAndAvata}>
            <Image source={rectangle} style={{ width: 82 * calcWidth, height: 82 * calcWidth }} />
            <View style={styles.name}>
              <Text style={styles.labelName}>Gloria Mckinney</Text>
              <Text style={styles.numberOfName}>+375(29)9638433</Text>
            </View>
          </View>
          <View style={styles.accountSettings}>
            <View style={styles.account}>
              <Text style={styles.labelAccount}>Account</Text>
              <Text
                style={{
                  color: '#131313',
                  marginBottom: 6 * calcWidth,
                  fontFamily: 'Gilroy-Bold',
                  fontSize: 17 * calcWidth,
                }}>
                +375(29)9638433
            </Text>
              <Text style={styles.textStyle}>Tap to change phone number</Text>
            </View>
            <View style={styles.rectangle} />
            <View style={styles.username}>
              <Text style={styles.labelWDLam}>@WdLam</Text>
              <Text style={styles.labelUserName}>UserName</Text>
            </View>
            <View style={styles.rectangle} />
            <View style={styles.bio}>
              <Text style={styles.labelBio}>
                I’m Senior Frontend Developer from Microsoft
            </Text>
              <Text style={styles.textStyle}>Bio</Text>
            </View>
          </View>
          <View style={styles.settings}>
            <Text style={styles.labelSetting}>Settings</Text>
            <View style={styles.notifyAndSound}>
              <TouchableOpacity style={styles.touchable}>
                <Icon name="bell-o" size={22 * calcWidth} color="#131313" />
              </TouchableOpacity>
              <Text style={styles.labelIconSetting}>Notification and Sounds</Text>
            </View>
            <View style={styles.privateAndSecurity}>
              <TouchableOpacity style={styles.touchable}>
                <Icon name="lock" size={22 * calcWidth} color="#131313" />
              </TouchableOpacity>
              <Text style={styles.labelIconSetting}>Privaty and Security</Text>
            </View>
            <View style={styles.privateAndSecurity}>
              <TouchableOpacity style={styles.touchable}>
                <Icon name="line-chart" size={22 * calcWidth} color="#131313" />
              </TouchableOpacity>
              <Text style={styles.labelIconSetting}>Data and Stronge</Text>
            </View>
            <View style={styles.privateAndSecurity}>
              <TouchableOpacity style={styles.touchable}>
                <Chat name="message-text-outline" size={22 * calcWidth} color="#131313" />
              </TouchableOpacity>
              <Text style={styles.labelIconSetting}>Chat settings</Text>
            </View>
            <View style={styles.privateAndSecurity}>
              <TouchableOpacity style={styles.touchable}>
                <Icon name="tv" size={22 * calcWidth} color="#131313" />
              </TouchableOpacity>
              <Text style={styles.labelIconSetting}>Devices</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    color: '#848484',
    fontSize: 17 * calcWidth,
    fontWeight: '600',
    fontFamily: 'Gilroy-Bold',
  },
  labelIconSetting: {
    paddingLeft: 30 * calcWidth,
    color: '#131313',
    fontWeight: '600',
    fontFamily: 'Gilroy-Bold',
    fontSize: 18 * calcWidth,
  },
  touchable: {
    width: 24 * calcWidth,
    height: 24 * calcWidth,
  },
  labelWDLam: {
    fontSize: 17 * calcWidth,
    fontWeight: '600',
    fontFamily: 'Gilroy-Bold',
    marginBottom: 6 * calcWidth,
  },
  labelUserName: {
    fontSize: 17 * calcWidth,
    fontWeight: '600',
    fontFamily: 'Gilroy-Bold',
    color: '#848484',
  },
  labelBio: {
    color: '#131313',
    fontSize: 17 * calcWidth,
    fontWeight: '600',
    marginBottom: 6 * calcWidth,
    fontFamily: 'Gilroy-Bold',
  },
  rectangle: {
    height: 2 * calcWidth,
    borderBottomWidth: 2 * calcWidth,
    borderColor: '#f6f6f6',
    marginVertical: 25 * calcWidth,
  },
  labelSetting: {
    fontSize: 20 * calcWidth,
    fontWeight: 'bold',
    color: '#131313',
    marginBottom: 13 * calcWidth,
  },
  labelAccount: {
    fontSize: 20 * calcWidth,
    fontWeight: 'bold',
    color: '#131313',
    marginBottom: 13 * calcWidth,
    fontFamily: 'Gilroy-Bold',
  },
  nameAndAvata: {
    flexDirection: 'row',
  },
  nameHeader: {
    color: '#2675EC',
    fontWeight: 'bold',
    fontSize: 20 * calcWidth,
    marginLeft: 30 * calcWidth,
  },
  container: {
    flex: 1,
    marginHorizontal: 27 * calcWidth,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    color: '#2675EC',
    marginTop: 74 * calcWidth,
    marginBottom: 34 * calcWidth,
  },
  name: {
    marginLeft: 18 * calcWidth,
    justifyContent: 'center',
  },
  labelName: {
    fontFamily: 'Gilroy-Bold',
    fontWeight: 'bold',
    fontSize: 23 * calcWidth,
    color: '#131313',
    marginBottom: 5 * calcWidth,
  },
  numberOfName: {
    fontWeight: '600',
    fontSize: 17 * calcWidth,
    color: '#848484',
    fontFamily: 'Gilroy-Bold',
  },
  accountSettings: {
    marginTop: 34 * calcWidth,
  },
  settings: {
    marginTop: 33 * calcWidth,
    marginBottom: 21 * calcWidth,
  },
  notifyAndSound: {
    flexDirection: 'row',
    alignItems: 'center',
    color: '#131313',
    marginBottom: 31 * calcWidth,
  },
  privateAndSecurity: {
    flexDirection: 'row',
    marginBottom: 31 * calcWidth,
  },
});
