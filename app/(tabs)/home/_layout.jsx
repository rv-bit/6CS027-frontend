import { Stack } from 'expo-router'

const StackLayout = () => {
	return (
		<Stack>
			<Stack.Screen
				name='index'
				options={{
					headerTitle: 'Home Page',
				}}
			/>
		</Stack>
	)
}

export default StackLayout
