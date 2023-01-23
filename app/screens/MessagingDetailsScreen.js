import React, { useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { Form, FormField } from '../components/forms'

import Screen from '../components/Screen'
import {
  ListItem,
  ListItemDeleteAction,
  ListItemSeparator,
} from '../components/lists'

import * as Yup from 'yup'

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

const validationSchema = Yup.object().shape({
  sms: Yup.object().required().label('Message'),
})

function MessagingDetailsScreen({ route, navigation }) {
  const [messages, setMessages] = useState(initialMessages)
  const [refreshing, setRefreshing] = useState(false)

  const handleDelete = (message) => {
    // Delete the message from messages
    setMessages(messages.filter((m) => m.id !== message.id))
  }

  const handleSubmit = async (operator, { resetForm }) => {
    // console.log(location);
    // setProgress(0)
    // setUploadVisible(true)
    // const result = await operatorsApi.addOperator(
    //   { ...operator, location },
    //   (progress) => setProgress(progress),
    // )

    // if (!result.ok) {
    //   setUploadVisible(false)
    //   return alert('Could not register this user')
    // }
    // alert(result.data['message'])
    // // console.log(result);
    // resetForm()
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
      <Form
        initialValues={{
          sms: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >


        <FormField
          autoCorrect={false}
          icon="account"
          name="sms"
          placeholder="Message ..."
          textContentType="name"
        />
      </Form>
    </Screen>
  )
}

const styles = StyleSheet.create({})

export default MessagingDetailsScreen
