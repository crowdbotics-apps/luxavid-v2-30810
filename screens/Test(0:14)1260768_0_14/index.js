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
      <View style={styles.View_0_19}>
        <View style={styles.View_34_6}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2fd1/001e/dcdff1158003225c175fd5824f4f793b"
            }}
            style={styles.ImageBackground_141_14}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/625a/e9cb/f2bc5e62eca24498c704e50d6a21dfd3"
            }}
            style={styles.ImageBackground_141_15}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/625a/e9cb/f2bc5e62eca24498c704e50d6a21dfd3"
            }}
            style={styles.ImageBackground_141_16}
          />
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_0_20}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_546"))
          }
        >
          <View style={styles.View_0_21} />
          <View style={styles.View_0_22}>
            <Text style={styles.Text_0_22}>Sign up</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_0_23}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_12"))
          }
        >
          <View style={styles.View_0_24} />
          <View style={styles.View_0_25}>
            <Text style={styles.Text_0_25}>Login</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d2cf/08a0/8562c3c3448259440f7d2993ab32a657"
          }}
          style={styles.TouchableOpacity_0_26}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_37"))
          }
        />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/efae/5f79/fcb6af84a19b15b2369ea061130b9d23"
          }}
          style={styles.TouchableOpacity_60_83}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_37"))
          }
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("100%") },
  View_0_19: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("100%"),
    minHeight: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_34_6: {
    width: wp("208.16831683168314%"),
    minWidth: wp("208.16831683168314%"),
    height: hp("224.53333333333333%"),
    minHeight: hp("224.53333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-48.886138613861384%"),
    top: hp("-41.86666666666667%")
  },
  ImageBackground_141_14: {
    width: wp("38.98515229177947%"),
    height: hp("23.199995930989584%"),
    top: hp("54.66666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.57920792079207%")
  },
  ImageBackground_141_15: {
    width: wp("76.73267326732673%"),
    height: hp("165.33333333333334%"),
    minHeight: hp("165.33333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("59.2%")
  },
  ImageBackground_141_16: {
    width: wp("76.73267326732673%"),
    height: hp("165.33333333333334%"),
    minHeight: hp("165.33333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("131.43564356435644%"),
    top: hp("0%")
  },
  TouchableOpacity_0_20: {
    width: wp("27.173916656191988%"),
    minWidth: wp("27.173916656191988%"),
    height: hp("8.533329264322917%"),
    minHeight: hp("8.533329264322917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.41305300268796%"),
    top: hp("59.599999999999994%")
  },
  View_0_21: {
    width: wp("27.173916656191988%"),
    height: hp("8.4541015625%"),
    top: hp("0.0618489583333357%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(83, 245, 69, 1)"
  },
  View_0_22: {
    width: wp("27.103960396039607%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.03498190700418036%"),
    justifyContent: "center"
  },
  Text_0_22: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_0_23: {
    width: wp("27.173916656191988%"),
    minWidth: wp("27.173916656191988%"),
    height: hp("8.573885091145833%"),
    minHeight: hp("8.573885091145833%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.41305300268796%"),
    top: hp("47.826106770833334%")
  },
  View_0_24: {
    width: wp("27.173916656191988%"),
    height: hp("8.45408935546875%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(86, 165, 241, 1)"
  },
  View_0_25: {
    width: wp("27.103960396039607%"),
    top: hp("0.04055989583333286%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.03498190700418036%"),
    justifyContent: "center"
  },
  Text_0_25: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_0_26: {
    width: wp("15.47029702970297%"),
    height: hp("33.33333333333333%"),
    top: hp("6.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("128.46534653465346%")
  },
  TouchableOpacity_60_83: {
    width: wp("7.425742574257425%"),
    height: hp("16%"),
    top: hp("4.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.22277227722772%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
