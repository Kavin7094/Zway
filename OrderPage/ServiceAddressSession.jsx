import React from "react";
import { View, Text, Image } from "react-native";
import { MapPin } from "lucide-react-native";

const ServiceAddressSession = () => {
  return (
    <View className="px-4 py-3">
      <Text className="text-lg text-black font-semibold ml-1 mb-2">
        Service Address
      </Text>

      {/* Address Card */}
      <View className="flex-row items-center bg-gray-800 rounded-2xl p-3 shadow-sm">
        {/* Location Icon */}
        <View className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
          <MapPin size={22} color="#EB4899" />
        </View>

        {/* Address Info */}
        <View className="ml-3 flex-1">
          <Text className="text-base font-medium text-white">
            Anya Sharma
          </Text>
          <Text className="text-sm text-gray-200">
            456 Oak Avenue, Anytown, USA
          </Text>
          <Text className="text-sm text-gray-50">Home</Text>
        </View>
      </View>
    </View>
  );
};

export default ServiceAddressSession;
