import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import Animated, { FadeIn, FadeInDown, FadeInUp, FadeOut } from 'react-native-reanimated'
import { useNavigation } from '@react-navigation/native'

export default function SignupScreen() {
  const navigation = useNavigation();

  return (
    <View className="bg-white h-full w-full">
      <StatusBar style="light" />
      <Image className="h-full w-full absolute" source={require('../assets/images/background.png')} />

      {/* hives */}
      <View className="flex-row justify-around w-full absolute">
        <Animated.Image entering={FadeInUp.delay(200).duration(1000).springify().damping(3)} className="h-[255] w-[90]" source={require('../assets/images/hive.png')} />
        <Animated.Image entering={FadeInUp.delay(400).duration(1000).springify().damping(3)} className="h-[160] w-[65]" source={require('../assets/images/hive.png')} />
      </View>

      <View className="h-full w-full flex justify-around pt-48">
        {/* title and form */}
        <View className="flex items-center">
          <Animated.Text entering={FadeInUp.duration(1000).springify()} className="text-white font-bold tracking-wider text-5xl">
            Cadastre-se
          </Animated.Text>
        </View>

        <View className="flex items-center mx-4 space-y-4">
          <Animated.View entering={FadeInDown.duration(1000).springify()} className="bg-black/5 p-5 rounded-2xl w-full">
            <TextInput placeholder='Nome' placeholderTextColor={'gray'} />
          </Animated.View>

          <Animated.View entering={FadeInDown.delay(200).duration(1000).springify()} className="bg-black/5 p-5 rounded-2xl w-full">
            <TextInput placeholder='Email' placeholderTextColor={'gray'} />
          </Animated.View>

          <Animated.View entering={FadeInDown.delay(400).duration(1000).springify()} className="bg-black/5 p-5 rounded-2xl w-full mb-3">
            <TextInput placeholder='Senha' placeholderTextColor={'gray'} secureTextEntry />
          </Animated.View>

          <Animated.View entering={FadeInDown.delay(600).duration(1000).springify()} className="w-full">
            <TouchableOpacity
              className="w-full bg-yellow-400 p-3 rounded-2xl mb-3">
              <Text className="text-xl font-bold text-white text-center">Cadastre-se</Text>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View entering={FadeInDown.delay(800).duration(1000).springify()} className="flex-row justify-center">
            <Text>Já tem uma conta? </Text>
            <TouchableOpacity onPress={() => navigation.push('Login')}>
              <Text className="text-yellow-500">Login</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </View>
  )
}