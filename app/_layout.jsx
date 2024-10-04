import { Stack } from 'expo-router'

const RootLayout = () => {
	return (
		<Stack>
			<Stack.Screen
				name='index'
				options={{
					headerTitle: 'Home Page',
				}}
			/>
			<Stack.Screen
				name='profile/[id]'
				options={{
					headerTitle: 'Profile Page',
				}}
			/>
		</Stack>
	)
}

export default RootLayout
