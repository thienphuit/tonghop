import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  Dimensions,
  ScrollView,
  FlatList,
} from 'react-native';
import {
  photo,
  icon_tv,
  photoUsers,
  share_feed,
  avatar,
  three_dot,
  image_feed,
  userOnPhoto,
  sliderCounter,
  heart,
  comment,
  sliderDot,
  iconPath,
  likerUser,
  smallHeart,
  iconBottoms,
} from '../assets/images';

const {width} = Dimensions.get('window');
const calWidth = width / 375;
console.log(iconBottoms);

export default class NewFeed extends Component {
  itemUser = (item) => {
    return (
      <View
        key={item.id}
        style={
          {
            //marginLeft: 15 * calWidth,
          }
        }>
        {item.id === 1 ? (
          <View style={{marginHorizontal: 15 * calWidth}}>
            <Image
              style={{
                width: 56 * calWidth,
                height: 56 * calWidth,
                marginBottom: 9 * calWidth,
              }}
              source={item.imgUrl}
            />
            <Text style={styles.titleItem}>Your Story</Text>
          </View>
        ) : (
          <View>
            <Image
              style={{
                width: 62 * calWidth,
                height: 62 * calWidth,
                marginBottom: 6 * calWidth,
                marginRight: 13 * calWidth,
              }}
              source={item.imgUrl}
            />

            <Text style={[styles.titleItem, {color: '#262626'}]}>
              helge_nilsen
            </Text>
          </View>
        )}
      </View>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView>
          <View style={styles.appBar}>
            <Image source={photo} style={styles.photoAppBar} />
            <View style={{flexDirection: 'row'}}>
              <Image source={icon_tv} style={styles.tvAppBar} />
              <Image source={share_feed} style={styles.shareAppBar} />
            </View>
          </View>
        </SafeAreaView>
        <ScrollView>
          <View>
            <View style={styles.storyLine}>
              <FlatList
                data={photoUsers}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => this.itemUser(item)}
              />
            </View>
            <View style={styles.profileTopBar}>
              <View style={{flexDirection: 'row'}}>
                <Image style={styles.avatar} source={avatar} />
                <View>
                  <Text style={styles.nameProfile}>tammyolson</Text>
                  <Text style={styles.addressProfile}>Holland, Rotterdam</Text>
                </View>
              </View>
              <Image
                source={three_dot}
                style={{width: 13 * calWidth, height: 3 * calWidth}}
              />
            </View>
            <View>
              <Image style={styles.imageFeed} source={image_feed} />
              <Image source={userOnPhoto} style={styles.userOnPhoto} />
              <Image source={sliderCounter} style={styles.sliderCounter} />
            </View>
            <View style={styles.fillFeed}>
              <View style={{flexDirection: 'row'}}>
                <Image style={styles.heart} source={heart} />
                <Image style={styles.comment} source={comment} />
                <Image source={share_feed} style={styles.shareFeed} />
              </View>
              <Image style={styles.sliderDot} source={sliderDot} />
              <Image style={styles.iconPath} source={iconPath} />
            </View>
            <View style={styles.postContent}>
              <View style={styles.groupUser}>
                <Image source={likerUser} style={styles.likerUser} />
                <Text style={styles.nameUserLike}>
                  Liked by <Text style={{fontWeight: 'bold'}}> KnE</Text> and{' '}
                  <Text style={{fontWeight: 'bold'}}>115 311 others</Text>
                </Text>
              </View>
              <View
                style={{flexDirection: 'row', marginVertical: 6 * calWidth}}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 13 * calWidth,
                  }}>
                  tammyolson
                </Text>
                <Text style={styles.labelTag}> #amazing #travel</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginVertical: 6 * calWidth,
                  justifyContent: 'space-between',
                }}>
                <Text style={styles.labelTag}>
                  Users can make profiles, create works and other content, post
                  comment
                </Text>
                <Image
                  style={{width: 11 * calWidth, height: 9 * calWidth}}
                  source={smallHeart}
                />
              </View>
              <View style={styles.hashTag}>
                <Text style={styles.commentHastag}>
                  People use the hashtag symbol (#) before a relevant keyword or
                  phrase in their Tweet to categorize those Tweets and help them
                  show more easily in Twitter search
                </Text>
                <Image
                  style={{width: 11 * calWidth, height: 9 * calWidth}}
                  source={smallHeart}
                />
              </View>
            </View>
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
  commentHastag: {
    fontFamily: 'SFProDisplay-Regular',
    fontSize: 13 * calWidth,
    width: 305 * calWidth,
    marginLeft: 10 * calWidth,
  },
  hashTag: {
    marginLeft: 10 * calWidth,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderLeftWidth: 1 * calWidth,
    borderLeftColor: '#EFEFEF',
  },
  labelTag: {
    fontSize: 13 * calWidth,
    fontFamily: 'SFProDisplay-Regular',
    color: '#262626',
    width: 327 * calWidth,
  },
  groupUser: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameUserLike: {
    color: '#262626',
    fontSize: 13 * calWidth,
    fontFamily: 'SFProDisplay-Regular',
  },
  likerUser: {
    width: 29 * calWidth,
    height: 13 * calWidth,
    marginRight: 6 * calWidth,
  },
  postContent: {
    paddingLeft: 12 * calWidth,
    paddingRight: 10 * calWidth,
  },
  iconPath: {
    marginTop: 8 * calWidth,
    width: 21 * calWidth,
    height: 24 * calWidth,
  },
  fillFeed: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12 * calWidth,
    paddingBottom: 12 * calWidth,
  },
  sliderDot: {
    width: 50 * calWidth,
    height: 6 * calWidth,
    marginTop: 17 * calWidth,
  },
  shareFeed: {
    width: 24 * calWidth,
    height: 21 * calWidth,
    marginTop: 10 * calWidth,
  },
  comment: {
    width: 24 * calWidth,
    height: 24 * calWidth,
    marginTop: 8 * calWidth,
    marginHorizontal: 18 * calWidth,
  },
  heart: {
    width: 24 * calWidth,
    height: 22 * calWidth,
    marginTop: 9 * calWidth,
  },
  sliderCounter: {
    position: 'absolute',
    width: 43 * calWidth,
    height: 24 * calWidth,
    top: 12 * calWidth,
    right: 12 * calWidth,
  },
  userOnPhoto: {
    position: 'absolute',
    width: 24 * calWidth,
    height: 24 * calWidth,
    bottom: 13 * calWidth,
    marginLeft: 12 * calWidth,
  },
  imageFeed: {
    width: '100%',
    height: 278 * calWidth,
    position: 'relative',
  },
  nameProfile: {
    fontSize: 14 * calWidth,
    fontWeight: 'bold',
    fontFamily: 'SFProDisplay-Regular',
  },
  addressProfile: {
    fontSize: 11 * calWidth,
    fontFamily: 'Helvetica-Light',
    color: '#262626',
  },
  avatar: {
    width: 34 * calWidth,
    height: 34 * calWidth,
    marginRight: 9 * calWidth,
  },
  profileTopBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12 * calWidth,
    paddingHorizontal: 12 * calWidth,
  },
  titleItem: {
    fontFamily: 'Helvetica-Light',
    fontSize: 10 * calWidth,
    color: '#999999',
  },
  storyLine: {
    paddingVertical: 12 * calWidth,
    borderBottomColor: '#DADBDA',
    borderBottomWidth: 1 * calWidth,
  },
  shareAppBar: {
    width: 24 * calWidth,
    height: 21 * calWidth,
    marginTop: 3 * calWidth,
  },
  tvAppBar: {
    width: 22 * calWidth,
    height: 25 * calWidth,
    marginRight: 18 * calWidth,
  },
  photoAppBar: {
    width: 25 * calWidth,
    height: 23 * calWidth,
    marginTop: 1 * calWidth,
  },
  container: {
    flex: 1,
  },
  appBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 9 * calWidth,
    borderBottomWidth: 1 * calWidth,
    borderBottomColor: '#DADBDA',
    paddingLeft: 12 * calWidth,
    paddingRight: 10 * calWidth,
  },
});
