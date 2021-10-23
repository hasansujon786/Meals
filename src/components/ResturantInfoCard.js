import React from 'react'

import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

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
    <Card style={{}}>
      <Card.Cover source={{ uri: photos[0] }} />
      <Card.Title title={name} subtitle={address} left={LeftContent} />
      <Card.Actions>
        <Button onPress={() => console.log('hello')}>Cancel</Button>
        <Button>Ok</Button>
      </Card.Actions>
      {/* <Card.Content> */}
      {/*   <Title>Card title</Title> */}
      {/*   <Paragraph>Card content</Paragraph> */}
      {/* </Card.Content> */}
    </Card>
  )
}

export default ResturantInfoCard
