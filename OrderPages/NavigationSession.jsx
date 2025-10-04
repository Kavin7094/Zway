import { View, Text, TouchableOpacity } from "react-native";
import { ArrowLeft } from "lucide-react-native"; // using lucide-react-native for icons

export default function CheckoutHeader({ onBack }) {
  return (
    <View className="flex-row items-center justify-between bg-[#a92cc5ff] px-4 py-3 mt-8 shadow-sm">
      {/* Back Button */}
      <TouchableOpacity onPress={onBack} className="p-3">
        <ArrowLeft size={24} color="#e9e9e9ff" />
      </TouchableOpacity>

      {/* Title */}
      <Text className="text-lg font-semibold text-[#1A1A1A]">Checkout</Text>

      {/* Empty Space for Alignment */}
      <View className="w-8" />
    </View>
  );
}
