import React from 'react'
import { SvgXml, SvgUri } from 'react-native-svg'
import starSvg from '../../../../assets/star'
import Spacer from '../../../components/utility/Spacer'
import Text from '../../../components/typography/Text'
import { ResturantCard, ResturantCardCover, Ratings, Section } from './ResturantInfoCard.styles'

const ResturantInfoCard = ({ resturant }) => {
  const {
    name = 'Some Resturant',
    icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos = ['https://cdn.cnn.com/cnnnext/dam/assets/140430115517-06-comfort-foods.jpg'],
    address = 'some resturant address',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = resturant

  const ratingArr = Array.from(new Array(Math.floor(rating)))
  return (
    <ResturantCard style={{ elevation: 3 }}>
      <ResturantCardCover source={{ uri: photos[0] }} />
      <Text varient='title'>{name}</Text>
      <Section>
        <Ratings>
          {ratingArr.map((_, idx) => (
            <SvgXml key={idx} marginRight={4} width='20' height='20' xml={starSvg} />
          ))}
        </Ratings>

        <Section style={{ marginLeft: 'auto' }}>
          {isClosedTemporarily && <Text varient='caption'>Clossed Temporarily</Text>}
          {isOpenNow && (
            <Spacer direction='left' size={2}>
              <SvgUri
                marginLeft={4}
                width='20'
                height='20'
                uri='http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg'
              />
            </Spacer>
          )}
        </Section>
      </Section>
      <Text>{address}</Text>
      <SvgUri width='20' height='20' uri={icon} />
    </ResturantCard>
  )
}

export default ResturantInfoCard
