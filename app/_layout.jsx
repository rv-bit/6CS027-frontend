import { Stack } from 'expo-router'

const RootLayout = () => {
	return (
		<Stack>
			<Stack.Screen name='(tabs)' options={{ headerShown: false, headerBackTitle: 'Back' }} />
		</Stack>
	)
}

export default RootLayout
