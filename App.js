import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, TouchableOpacity } from 'react-native';

const CostomBtn = (props) => {
  let color = null;
  let colortxt = null;
  switch (props.type) {
    case "Primary": color = "blue", colortxt = "white";
      break;
    case "Secondary": color = "grey", colortxt = "white";
      break;
    case "Success": color = "green", colortxt = "white";
      break;
    case "Warning": color = "yellow", colortxt = "black";
      break;
    case "Danger": color = "red", colortxt = "white";
      break;
    case "Info": color = "skyblue", colortxt = "white";
      break;
    case "Light": color = "white", colortxt = "black";
      break;
    case "Dark": color = "black", colortxt = "white";
      break;
    default: color = 'orange', colortxt = "white";
  }
  return (
    <TouchableOpacity style={[styles.bouton, { backgroundColor: color }]}>
      <Text style={[styles.words, { color: colortxt }]}>{props.label}</Text>
    </TouchableOpacity >
  )
}
export default function App() {
  return (
    <View style={styles.container}>
      <CostomBtn type="Primary" label="Primary" />
      <CostomBtn type="Secondary" label="Secondary" />
      <CostomBtn type="Success" label="Success" />
      <CostomBtn type="Warning" label="Warning" />
      <CostomBtn type="Danger" label="Danger" />
      <CostomBtn type="Info" label="Info" />
      <CostomBtn type="Light" label="Light" />
      <CostomBtn type="Dark" label="Dark" />
    </View >
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  words: {
    alignItems: 'center',
    textAlign: 'center',
  },
  bouton: {
    textAlignVertical: 'center',
    justifyContent: 'center',
    width: "60%", height: 50,
    borderColor: 'black',
    borderWidth: 2.5,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12, },
    shadowOpacity: 0.80,
    shadowRadius: 16,
    elevation: 24,
  }
});
