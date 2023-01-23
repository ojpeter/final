import React from 'react'
import { View, StyleSheet, Modal, Text } from 'react-native'
import * as Progress from 'react-native-progress'
import LottieView from 'lottie-react-native'

// import colors from '../config/colors'
import { useTheme } from '@react-navigation/native'
import AppText from '../components/Text'
import colors from '../config/colors'

function UploadScreen({ onDone, err, message, progress = 0, visible = false }) {
  const { colors } = useTheme()
  return (
    <Modal visible={visible}>
      {err === true ? (
        <View style={styles.container}>
          {progress < 1 ? (
            <Progress.Bar color="#F54EA2" progress={progress} width={200} />
          ) : (
            <>
              <LottieView
                resizeMode="center"
                autoPlay
                loop={false}
                onAnimationFinish={onDone}
                source={require('../assets/animations/fail.json')}
                style={styles.animation}
              />
              <AppText
                style={{
                  color: '#F54EA2',
                  fontFamily: 'Poppins_500Medium',

                  fontSize: 18,
                }}
              >
                {message}
              </AppText>
            </>
          )}
        </View>
      ) : (
        <View style={styles.container}>
          {progress < 1 ? (
            <Progress.Bar color="#4ecdc4" progress={progress} width={200} />
          ) : (
            <>
              <LottieView
                resizeMode="cover"
                autoPlay
                loop={false}
                onAnimationFinish={onDone}
                source={require('../assets/animations/done.json')}
                style={styles.animation}
              />
              <AppText
                style={{
                  fontWeight: 'bold',
                  color: '#4ecdc4',

                  fontSize: 18,
                }}
              >
                {message}
              </AppText>
            </>
          )}
        </View>
      )}
    </Modal>
  )
}

const styles = StyleSheet.create({
  animation: {
    width: 100,
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.backgroundColor,
  },
})

export default UploadScreen
