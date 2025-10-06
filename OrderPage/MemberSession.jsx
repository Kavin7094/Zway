// app/MemberSession.jsx
import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function MemberSession() {
    const [count, setCount] = useState(1);

    const increase = () => setCount(count + 1);
    const decrease = () => {
        if (count > 1) setCount(count - 1);
    };

    return (
        <View className="text-lg font-semibold text-white mb-3">
            {/* Title */}
            <Text className="text-lg text-black font-semibold ml-4 mb-2">Add Members</Text>

            <View className="px-4 py-6 bg-gray-800 rounded-2xl  mb-2 mx-4">
                {/* Counter Row */}
                <View className="flex-row items-center justify-between">
                    <Text className="text-base text-white">Members</Text>

                    {/* Counter Control */}
                    <View className="flex-row items-center space-x-4">
                        {/* Decrease Button */}
                        <TouchableOpacity
                            onPress={decrease}
                            className="w-8 h-8 mr-2 rounded-full bg-[#EB4899] items-center justify-center"
                        >
                            <Text className="text-lg text-white font-bold">-</Text>
                        </TouchableOpacity>

                        {/* Count Display */}
                        <Text className="mx-4 text-lg text-white font-semibold">{count}</Text>

                        {/* Increase Button */}
                        <TouchableOpacity
                            onPress={increase}
                            className="w-8 h-8 mr-3 rounded-full bg-[#EB4899] items-center justify-center"
                        >
                            <Text className="text-lg text-white font-bold">+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}
