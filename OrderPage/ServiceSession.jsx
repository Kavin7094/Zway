import { View, Text, Image, TextInput } from "react-native";

export default function ServiceSession() {
  return (
    <View className="p-4">
      {/* Section Title */}
      <Text className="text-lg font-semibold text-gray-900 mb-3">
        Services
      </Text>

      {/* Service Card */}
      <View className="flex-row items-center bg-gray-800 rounded-2xl shadow-md p-3">
        {/* Service Image */}
        <Image
          source={{  uri: "https://i.pravatar.cc/100"  }} // Replace with your image
          className="w-14 h-14 rounded-xl opacity-100"
        />

        {/* Service Info */}
        <View className="ml-3 flex-1">
          <Text className="text-base font-semibold text-white">
            Service A 
          </Text>

          {/* Editable Duration */}
          <TextInput
            className="text-sm text-[#EB4899]/70 border-b border-gray-300 w-32"
            placeholder="Duration (1 hour)"
            defaultValue="1 hour"
          />
        </View>
      </View>
    </View>
  );
}
