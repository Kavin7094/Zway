// import React, { useEffect, useState } from "react";
// import { Card, CardContent } from "../components/ui/card";
// import { Button } from "../components/ui/button";

// export default function OrderSummarySession() {
//   const [subtotal, setSubtotal] = useState(0);
//   const [serviceFee, setServiceFee] = useState(0);
//   const [tax, setTax] = useState(0);
//   const [total, setTotal] = useState(0);

//   useEffect(() => {
//     // Fetching values from backend
//     fetch("/api/order-summary")
//       .then((res) => res.json())
//       .then((data) => {
//         setSubtotal(data.subtotal);
//         setServiceFee(data.serviceFee);
//         setTax(data.tax);
//         setTotal(data.subtotal + data.serviceFee + data.tax);
//       });
//   }, []);

//   const handlePlaceOrder = () => {
//     const orderData = {
//       subtotal,
//       serviceFee,
//       tax,
//       total,
//     };

//     // Send final data to backend
//     fetch("/api/place-order", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(orderData),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         alert("Order placed successfully!");
//       })
//       .catch((err) => console.error("Order failed:", err));
//   };

//   return (
//     <div className="p-4">
//       <Card className="rounded-2xl shadow-md p-4">
//         <CardContent>
//           <h2 className="text-lg font-semibold mb-3">Order Summary</h2>

//           <div className="flex justify-between py-1">
//             <span>Subtotal</span>
//             <span>₹{subtotal.toFixed(2)}</span>
//           </div>

//           <div className="flex justify-between py-1">
//             <span>Service Fee</span>
//             <span>₹{serviceFee.toFixed(2)}</span>
//           </div>

//           <div className="flex justify-between py-1">
//             <span>Tax</span>
//             <span>₹{tax.toFixed(2)}</span>
//           </div>

//           <div className="flex justify-between font-bold py-2 border-t mt-2">
//             <span>Total</span>
//             <span>₹{total.toFixed(2)}</span>
//           </div>

//           <Button
//             onClick={handlePlaceOrder}
//             className="w-full mt-4 rounded-2xl bg-pink-300 text-black font-semibold py-3"
//           >
//             Place Order
//           </Button>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }
import { View, Text, TouchableOpacity } from "react-native";

export default function OrderSummarySession() {
  return (
    <View className="m-4">
      <Text className="text-lg font-semibold text-white mb-3">Order Summary</Text>
   
    <View className="p-4 bg-white/50 rounded-2xl mx-1 mb-4">
      <View className="flex-row justify-between py-1">
        <Text>Subtotal</Text>
        <Text>₹120.00</Text>
      </View>

      <View className="flex-row justify-between py-1">
        <Text>Service Fee</Text>
        <Text>₹10.00</Text>
      </View>

      <View className="flex-row justify-between py-1">
        <Text>Tax</Text>
        <Text>₹5.00</Text>
      </View>

      <View className="flex-row justify-between py-2 border-t mt-2">
        <Text className="font-bold">Total</Text>
        <Text className="font-bold">₹135.00</Text>
      </View>
    </View>
    <TouchableOpacity className="bg-pink-300 p-3 mt-4 mb-10 rounded-2xl">
        <Text className="text-center font-semibold text-black">
          Place Order
        </Text>
      </TouchableOpacity>
     </View>
  );
}
