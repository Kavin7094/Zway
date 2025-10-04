// app/PaymentSelectionSession.jsx
import { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

export default function PaymentSelectionSession({ onSelect }) {
  const [selectedMethod, setSelectedMethod] = useState(null);

  const paymentMethods = [
    {
      id: "upi",
      label: "UPI",
      icon: "https://img.icons8.com/ios-filled/50/000000/rupee.png",
    },
    {
      id: "netbanking",
      label: "Net Banking",
      icon: "https://img.icons8.com/ios-filled/50/000000/bank.png",
    },
    {
      id: "creditcard",
      label: "Credit Card",
      icon: "https://img.icons8.com/color/48/000000/mastercard-logo.png",
    },
    {
      id: "cod",
      label: "Cash on Delivery",
      icon: "https://img.icons8.com/ios-filled/50/000000/cash-in-hand.png",
    },
  ];

  const handleSelect = (method) => {
    setSelectedMethod(method);
    if (onSelect) onSelect(method); // send to backend
  };

  return (
    <View className="p-1">
    {/* Title */}
      <Text className="text-lg text-white font-semibold ml-4 mb-2">
        Payment Method
      </Text>
    <View className="bg-white/50 rounded-3xl mx-4 mb-4 p-4">
      {paymentMethods.map((method) => (
        <TouchableOpacity
          key={method.id}
          onPress={() => handleSelect(method.id)}
          className={`flex-row items-center p-3 rounded-xl mb-3 ${
            selectedMethod === method.id
              ? "border-blue-500 bg-blue-50 text-gray-100 text-base"
              : "border-gray-200 "
          }`}
        >
          <Image source={{ uri: method.icon }} className="w-8 h-8 ml-5 mr-10" />
          <Text className="text-gray-1000 text-base">{method.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
    </View>
    
  );
}
