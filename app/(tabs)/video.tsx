import React, { useCallback, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

export default function Video() {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state: string) => {
    if (state === "ended") {
      setPlaying(false);
      alert("¡Gracias por ver el video!");
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mi Experiencia</Text>

      <View style={styles.videoContainer}>
        <YoutubePlayer
          height={220}
          play={playing}
          videoId={"0zk16Jcq3FI"}
          onChangeState={onStateChange}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
    color: "#333",
  },
  videoContainer: {
    marginTop: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
});
