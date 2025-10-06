// app/JobDescriptionSession.jsx
import { Image as ImageIcon, Video } from "lucide-react-native";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function JobDescriptionSession() {
  const [description, setDescription] = useState("");
  const [mediaFiles, setMediaFiles] = useState([]);

    // Pick Image from Gallery
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      allowsMultipleSelection: true, // allow multiple files
    });

    if (!result.canceled) {
      setMediaFiles([...mediaFiles, ...result.assets.map((file) => file.uri)]);
    }
  };

  // Pick Video from Gallery
  const pickVideo = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      quality: 1,
      allowsMultipleSelection: true,
    });

    if (!result.canceled) {
      setMediaFiles([...mediaFiles, ...result.assets.map((file) => file.uri)]);
    }
  };

  return (
    <View className="p-4">
      {/* Title */}
      <Text className="text-lg text-black font-semibold ml-4 mb-2">
        Add Your Description
      </Text>

      <View className="p-4 bg-gray-800 rounded-2xl shadow mb-4">
        {/* Description Input */}
        <TextInput
          className="border border-gray-100 rounded-xl p-3 h-28 text-white text-sm placeholder:text-white/80"
          placeholder="Provide specific guidance or requirements for the service"
          value={description}
          onChangeText={setDescription}
          multiline
        />

        {/* Media Upload Box */}
        <View className="border border-gray-100 rounded-xl p-3 mt-4 h-40 relative">
          {/* Avatar (static placeholder) */}
          <View className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden items-center justify-center mb-2">
            <Image
              source={{ uri: "https://i.pravatar.cc/100" }}
              className="w-10 h-10"
            />
          </View>

          {/* Text */}
          <Text className="text-gray-200 text-sm mb-6">
            Add images or videos
          </Text>

          {/* Icons at bottom-right */}
          <View className="absolute bottom-3 right-3 flex-row space-x-4">
            <TouchableOpacity className="px-2" onPress={() => pickImage()}>
              <ImageIcon size={20} color="#EB4899" />
            </TouchableOpacity>
            <TouchableOpacity className="px-2" onPress={() => pickVideo()}>
              <Video size={20} color="#EB4899" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
