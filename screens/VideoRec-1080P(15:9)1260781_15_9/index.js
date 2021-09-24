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
      <View style={styles.View_15_10}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3900/ba81/55ed7ef9451833023890124725ca7d8a"
          }}
          style={styles.ImageBackground_60_43}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c965/30c6/ed2c5cb5d3d2392514b02cb8e720b4f9"
          }}
          style={styles.ImageBackground_60_46}
        />
        <View style={styles.View_60_49}>
          <View style={styles.View_60_50}>
            <View style={styles.View_60_51} />
            <View style={styles.View_60_52}>
              <Text style={styles.Text_60_52}>1080p</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_60_53} />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d8d/16b6/dce79c2c1b6779261a346429b4d6887e"
          }}
          style={styles.TouchableOpacity_60_54}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_617"))
          }
        />
        <TouchableOpacity
          style={styles.TouchableOpacity_60_55}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_593"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/54fd/7b95/b2776357e84b568abede9855dcbf4d90"
            }}
            style={styles.ImageBackground_60_56}
          />
          <View style={styles.View_60_59}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/34b6/9910/ed782b7ba57811f0f7388dfade92e9d5"
              }}
              style={styles.ImageBackground_60_60}
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
  View_15_10: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("100%"),
    minHeight: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06157635467980296%"),
    top: hp("0.4%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_60_43: {
    width: wp("169.42924912927185%"),
    height: hp("148.08152669270834%"),
    top: hp("-8.752994791666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-31.168985601716443%")
  },
  ImageBackground_60_46: {
    width: wp("6.157635467980295%"),
    height: hp("13.333333333333334%"),
    top: hp("43.333333333333336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.00738916256158%")
  },
  View_60_49: {
    width: wp("12.31527093596059%"),
    minWidth: wp("12.31527093596059%"),
    height: hp("10.666666666666668%"),
    minHeight: hp("10.666666666666668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.80541871921183%"),
    top: hp("5.466666666666666%")
  },
  View_60_50: {
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
  View_60_51: {
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
  View_60_52: {
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
  Text_60_52: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_60_53: {
    width: wp("78.81773399014779%"),
    minWidth: wp("78.81773399014779%"),
    height: hp("96%"),
    minHeight: hp("96%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4310344827586207%"),
    top: hp("2%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 3
  },
  TouchableOpacity_60_54: {
    width: wp("6.675412971985165%"),
    height: hp("0%"),
    top: hp("89.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.08128078817734%")
  },
  TouchableOpacity_60_55: {
    width: wp("6.157635467980295%"),
    minWidth: wp("6.157635467980295%"),
    height: hp("13.333333333333334%"),
    minHeight: hp("13.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.19458128078819%"),
    top: hp("81.99999999999999%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_60_56: {
    width: wp("5.514300398051445%"),
    height: hp("10.355987548828125%"),
    top: hp("2.977343750000003%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3676240667333701%")
  },
  View_60_59: {
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
  ImageBackground_60_60: {
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
