import { StatusBar } from 'expo-status-bar';
import { Text, View, Pressable } from 'react-native';

export default function App() {
    return (
        <View className="flex-1 flex-col gap-5 items-center justify-center bg-gray-500">
            <Text>Open up App.js to start working on your app! yesyeseyjhjhjhjs</Text>
            <StatusBar style="auto" />

            <Pressable
                className="bg-gray-200 p-5 rounded-lg uppercase text-white"
                onPress={() => alert('Hello, world!')}
            >
                <Text>Press me</Text>
            </Pressable>
        </View>
    );
}