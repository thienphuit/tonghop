import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {
  shapeLeft,
  three_dot,
  iconUser,
  iconGrid,
  listImage,
  iconBottoms,
} from '../assets/images';
const {width} = Dimensions.get('window');
const calWidth = width / 375;
const numColumns = 3;
const titleSize = width / numColumns;

export default class GaleryScreen extends React.Component {
  renderItem = (item) => {
    return (
      <View key={item.id}>
        <Image source={item.imgUrl} style={styles.itemImage} />
      </View>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView>
          <View style={styles.topBar}>
            <Image
              source={shapeLeft}
              style={{width: 10 * calWidth, height: 17 * calWidth}}
            />
            <Text style={styles.titleName}>antoninagarsia</Text>
            <Image
              source={three_dot}
              style={{width: 13 * calWidth, height: 3 * calWidth}}
            />
          </View>
        </SafeAreaView>
        <ScrollView>
          <View>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.iconTabLayout}>
                <Image
                  source={iconGrid}
                  style={{width: 23 * calWidth, height: 23 * calWidth}}
                />
              </View>
              <View style={styles.iconTabLayout2}>
                <Image
                  source={iconUser}
                  style={{width: 24 * calWidth, height: 24 * calWidth}}
                />
              </View>
            </View>
            <FlatList
              numColumns={numColumns}
              data={listImage}
              renderItem={({item}) => this.renderItem(item)}
              keyExtractor={(item) => item.id}
            />
          </View>
        </ScrollView>
        <SafeAreaView>
          <View style={styles.bottomBar}>
            {iconBottoms.map((item) => {
              return (
                <View
                  style={{
                    marginLeft: 18 * calWidth,
                    marginRight: 14 * calWidth,
                  }}>
                  <Image source={item.imgUrl} />
                </View>
              );
            })}
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bottomBar: {
    height: 48 * calWidth,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1 * calWidth,
    borderTopColor: '#DADBDA',
    alignItems: 'center',
  },
  itemImage: {
    width: titleSize,
    height: titleSize,
    marginRight: 1,
    marginBottom: 1,
  },
  iconTabLayout: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    borderBottomColor: '#262626',
    borderBottomWidth: 1 * calWidth,
    paddingBottom: 14 * calWidth,
  },
  iconTabLayout2: {
    alignItems: 'center',
    flex: 1 * calWidth,
    justifyContent: 'center',
    paddingBottom: 14 * calWidth,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 19 * calWidth,
    paddingVertical: 12 * calWidth,
  },
  titleName: {
    fontFamily: 'SFProDisplay-Bold',
    color: '#262626',
    fontSize: 18 * calWidth,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
  },
});
