import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { Text, View, Pressable } from 'react-native'

const Home = () => {
	return (
		<View className='flex-1 flex-col gap-5 items-center justify-center bg-gray-500'>
			<Text>Open up App.js to start working on your app! yesyeseyjhjhjhjs</Text>
			<Link href='/home/settings'>Push to settings</Link>
			<Link href='/users/1'>Push to user 1</Link>
			<StatusBar style='auto' />
		</View>
	)
}

export default Home
