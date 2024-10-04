import { Tabs } from 'expo-router'
import { TouchableOpacity } from 'react-native-web'

export default () => {
	return (
		<Tabs
			initial='home'
			screenOptions={{
				headerShown: false,
				headerBackTitle: '',
				headerLeft: () => (
					<TouchableOpacity>
						<Ionicons name='arrow-back' size={34} color='black' />
					</TouchableOpacity>
				),
			}}
		>
			<Tabs.Screen
				name='home'
				options={{
					headerTitle: 'Home Page',
				}}
			/>
			<Tabs.Screen
				name='profile'
				options={{
					headerTitle: 'Profile Page',
				}}
			/>
		</Tabs>
	)
}
