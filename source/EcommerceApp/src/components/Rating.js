import React from 'react'
import {
  View, StyleSheet, Image,
} from 'react-native'
import PropTypes from 'prop-types'
import { star, starActive } from '../../assets/images'

const Rating = ({ rating }) => {
  const filledStars = Math.floor(rating / 2)
  const maxStars = Array(5 - filledStars).fill('star')
  const r = [...Array(filledStars).fill('startActive'), ...maxStars]

  return (
    <View style={styles.rating}>
      {r.map((type) => {
        return <View key={Math.random()}>{type === 'star' ? <Image source={star} size={12} /> : <Image source={starActive} size={12} />}</View>
      })}
    </View>
  )
}
const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    marginTop: 8,
    marginBottom: 16,
    marginVertical: 4,
  },
})
Rating.propTypes = {
  rating: PropTypes.string.isRequired,
}
export default Rating
