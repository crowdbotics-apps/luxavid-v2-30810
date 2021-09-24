import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_23_67}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a479/d46c/79690729edf33436f7aba88dd9c4457a"
          }}
          style={styles.ImageBackground_59_26}
        />
        <View style={styles.View_23_61}>
          <View style={styles.View_23_62} />
          <View style={styles.View_23_63}>
            <Text style={styles.Text_23_63}>Export Video</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_23_50}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("17_5"))
          }
        >
          <View style={styles.View_23_45} />
          <View style={styles.View_23_51}>
            <Text style={styles.Text_23_51}>Open Video</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.View_23_49}>
          <View style={styles.View_23_43} />
          <View style={styles.View_23_44}>
            <Text style={styles.Text_23_44}>Luxavid App</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_23_53}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_593"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/54fd/7b95/b2776357e84b568abede9855dcbf4d90"
            }}
            style={styles.ImageBackground_23_54}
          />
          <View style={styles.View_23_57}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/34b6/9910/ed782b7ba57811f0f7388dfade92e9d5"
              }}
              style={styles.ImageBackground_23_58}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.View_23_60} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("100%") },
  View_23_67: {
    width: wp("99.63054187192118%"),
    minWidth: wp("99.63054187192118%"),
    height: hp("100%"),
    minHeight: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.43103448275862066%"),
    top: hp("0.13333333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_59_26: {
    width: wp("217.11822660098522%"),
    minWidth: wp("217.11822660098522%"),
    height: hp("248%"),
    minHeight: hp("248%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-54.86453201970443%"),
    top: hp("-90.8%")
  },
  View_23_61: {
    width: wp("27.216748768472904%"),
    minWidth: wp("27.216748768472904%"),
    height: hp("8.334627278645833%"),
    minHeight: hp("8.334627278645833%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.14532019704434%"),
    top: hp("84.93333333333332%")
  },
  View_23_62: {
    width: wp("27.153909617456897%"),
    height: hp("8.334627278645833%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.02745078702277226%"),
    backgroundColor: "rgba(86, 165, 241, 1)"
  },
  View_23_63: {
    width: wp("27.216748768472904%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.26666666666667993%"),
    justifyContent: "center"
  },
  Text_23_63: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_23_50: {
    width: wp("27.216748768472904%"),
    minWidth: wp("27.216748768472904%"),
    height: hp("9.066666666666666%"),
    minHeight: hp("9.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.20443349753695%"),
    top: hp("84.39999999999999%")
  },
  View_23_45: {
    width: wp("27.153898342489608%"),
    height: hp("8.334627278645833%"),
    top: hp("0.5333333333333314%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.013710360221679707%"),
    backgroundColor: "rgba(86, 165, 241, 1)"
  },
  View_23_51: {
    width: wp("27.216748768472904%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_23_51: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_49: {
    width: wp("27.153909617456897%"),
    minWidth: wp("27.153909617456897%"),
    height: hp("8.454532877604166%"),
    minHeight: hp("8.454532877604166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.263546798029557%"),
    top: hp("84.93333333333332%")
  },
  View_23_43: {
    width: wp("27.153909617456897%"),
    height: hp("8.334627278645833%"),
    top: hp("0.11990559895833997%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(86, 165, 241, 1)"
  },
  View_23_44: {
    width: wp("27.093596059113302%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_23_44: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_23_53: {
    width: wp("6.157635467980295%"),
    minWidth: wp("6.157635467980295%"),
    height: hp("13.333333333333334%"),
    minHeight: hp("13.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.19458128078817%"),
    top: hp("82%")
  },
  ImageBackground_23_54: {
    width: wp("5.514300398051445%"),
    height: hp("10.355987548828125%"),
    top: hp("2.9773437499999886%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3676240667333843%")
  },
  View_23_57: {
    width: wp("6.157635467980295%"),
    minWidth: wp("6.157635467980295%"),
    height: hp("5.005393473307292%"),
    minHeight: hp("5.005393473307292%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_23_58: {
    width: wp("6.1592764455109394%"),
    height: hp("4.380163065592448%"),
    top: hp("0.3123860677083172%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.00027059921490035777%")
  },
  View_23_60: {
    width: wp("88.30049261083744%"),
    minWidth: wp("88.30049261083744%"),
    height: hp("76%"),
    minHeight: hp("76%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.263546798029557%"),
    top: hp("5.466666666666667%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 3
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
