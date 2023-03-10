import React, { useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'

import Screen from '../components/Screen'
import {
  ListItem,
  ListItemDeleteAction,
  ListItemSeparator,
} from '../components/lists'

const initialMessages = [
  {
    id: 1,
    title: 'Captain Grace',
    description: 'Hey! Is this bus still available?',
    image: require('../assets/peter.jpg'),
    date: "01-09-2021 11:28",
  },
  {
    id: 2,
    title: 'Daniel',
    description:
      "I'm interested in this booking the 1PM bus. When will you be able to confirm my booking?",
    image: require('../assets/peter.jpg'),
    date: "01-09-2021 01:28",
  },
]

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages)
  const [refreshing, setRefreshing] = useState(false)

  const handleDelete = (message) => {
    // Delete the message from messages
    setMessages(messages.filter((m) => m.id !== message.id))
  }

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            title2={item.date}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log('Message selected', item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: 'T2',
              description: 'D2',
              image: require('../assets/peter.jpg'),
            },
          ])
        }}
      />
    </Screen>
  )
}

const styles = StyleSheet.create({})

export default MessagesScreen
