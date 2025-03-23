import { Tabs } from 'expo-router';
import { Home, Leaf } from 'lucide-react-native';

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#6D28D9', // Active tab color
                tabBarInactiveTintColor: '#9CA3AF', // Inactive tab color
                tabBarStyle: {
                    backgroundColor: '#031C5C', // Tab bar background color
                    borderTopWidth: 0, // Remove top border
                    elevation: 5, // Add shadow on Android (increase the value for a deeper shadow)
                },
                headerShown: false
            }}
        >
            {/* Home Tab */}
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color, focused }) => (
                        <Home color={color} size={24} />
                    ),
                    headerShown: false
                }}
            />
            <Tabs.Screen
                name="meditate"
                options={{
                    title: 'Meditate',
                    tabBarIcon: ({ color, focused }) => (
                        <Leaf color={color} size={24} />
                    ),
                    headerShown: false
                }}
            />
        </Tabs>
    );
}