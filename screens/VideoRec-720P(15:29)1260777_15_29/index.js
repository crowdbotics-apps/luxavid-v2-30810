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
      <View style={styles.View_15_30}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f25b/222e/136d72a03a094cdddb4186d8b40e9aaf"
          }}
          style={styles.ImageBackground_60_62}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c965/30c6/ed2c5cb5d3d2392514b02cb8e720b4f9"
          }}
          style={styles.ImageBackground_60_65}
        />
        <View style={styles.View_60_68}>
          <View style={styles.View_60_69}>
            <View style={styles.View_60_70} />
            <View style={styles.View_60_71}>
              <Text style={styles.Text_60_71}>720p</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_60_72} />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d8d/16b6/dce79c2c1b6779261a346429b4d6887e"
          }}
          style={styles.TouchableOpacity_60_73}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_617"))
          }
        />
        <TouchableOpacity
          style={styles.TouchableOpacity_60_74}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_593"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/54fd/7b95/b2776357e84b568abede9855dcbf4d90"
            }}
            style={styles.ImageBackground_60_75}
          />
          <View style={styles.View_60_78}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/34b6/9910/ed782b7ba57811f0f7388dfade92e9d5"
              }}
              style={styles.ImageBackground_60_79}
            />
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("100%") },
  View_15_30: {
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
  ImageBackground_60_62: {
    width: wp("169.42924912927185%"),
    height: hp("148.08152669270834%"),
    top: hp("-8.752994791666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-31.169000635006157%")
  },
  ImageBackground_60_65: {
    width: wp("6.157635467980295%"),
    height: hp("13.333333333333334%"),
    top: hp("43.33333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.00738916256158%")
  },
  View_60_68: {
    width: wp("12.31527093596059%"),
    minWidth: wp("12.31527093596059%"),
    height: hp("10.666666666666668%"),
    minHeight: hp("10.666666666666668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.80541871921181%"),
    top: hp("5.466666666666667%")
  },
  View_60_69: {
    width: wp("12.31527093596059%"),
    minWidth: wp("12.31527093596059%"),
    height: hp("10.666666666666668%"),
    minHeight: hp("10.666666666666668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_60_70: {
    width: wp("12.31527093596059%"),
    minWidth: wp("12.31527093596059%"),
    height: hp("10.666666666666668%"),
    minHeight: hp("10.666666666666668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(83, 245, 69, 1)"
  },
  View_60_71: {
    width: wp("12.31527093596059%"),
    minWidth: wp("12.31527093596059%"),
    minHeight: hp("10.666666666666668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_60_71: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_60_72: {
    width: wp("78.81773399014779%"),
    minWidth: wp("78.81773399014779%"),
    height: hp("96%"),
    minHeight: hp("96%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.43103448275862066%"),
    top: hp("2%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 3
  },
  TouchableOpacity_60_73: {
    width: wp("6.675412971985165%"),
    height: hp("0%"),
    top: hp("89.19999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.08128078817735%")
  },
  TouchableOpacity_60_74: {
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
  ImageBackground_60_75: {
    width: wp("5.514300398051445%"),
    height: hp("10.355987548828125%"),
    top: hp("2.9773437499999886%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3676240667333843%")
  },
  View_60_78: {
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
  ImageBackground_60_79: {
    width: wp("6.1592764455109394%"),
    height: hp("4.380163065592448%"),
    top: hp("0.31236979166666856%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.00027059921490035777%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
