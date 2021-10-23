import React from 'react'
import styled from 'styled-components/native'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const ResturantCard = styled(Card)`
  padding: 20px;
  background-color: ${props => props.theme.colors.brand.muted}
`

const ResturantCardCover = styled(Card.Cover)`
`

const ResturantInfoCard = ({ resturant }) => {
  const {
    name = 'Some Resturant',
    icon = 'folder',
    photos = ['https://cdn.cnn.com/cnnnext/dam/assets/140430115517-06-comfort-foods.jpg'],
    address = 'some resturant address',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false
  } = resturant

  return (
    <ResturantCard style={{}}>
      <ResturantCardCover source={{ uri: photos[0] }} />
      {/* <Card.Title title={name} subtitle={address} left={LeftContent} /> */}
      {/* <Card.Actions> */}
      {/*   <Button onPress={() => console.log('hello')}>Cancel</Button> */}
      {/*   <Button>Ok</Button> */}
      {/* </Card.Actions> */}
      {/* <Card.Content> */}
      {/*   <Title>Card title</Title> */}
      {/*   <Paragraph>Card content</Paragraph> */}
      {/* </Card.Content> */}
    </ResturantCard>
  )
}

export default ResturantInfoCard
