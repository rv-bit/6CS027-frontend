import { Link } from 'expo-router'
import { View, Text, Pressable } from 'react-native'

const Profile = () => {
	return (
		<View className='flex-1 flex-col gap-5 items-center justify-center bg-gray-500'>
			<Pressable className='bg-gray-200 p-5 rounded-lg uppercase text-white'>
				<Link href='/users/1'>Push to user 1</Link>
			</Pressable>

			<Pressable className='bg-gray-200 p-5 rounded-lg uppercase text-white'>
				<Link href='/users/2'>Push to user 2</Link>
			</Pressable>
		</View>
	)
}

export default Profile
