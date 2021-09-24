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
      <View style={styles.View_24_98}>
        <View style={styles.View_59_6}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/625a/e9cb/f2bc5e62eca24498c704e50d6a21dfd3"
            }}
            style={styles.ImageBackground_59_7}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/625a/e9cb/f2bc5e62eca24498c704e50d6a21dfd3"
            }}
            style={styles.ImageBackground_59_8}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2fd1/001e/dcdff1158003225c175fd5824f4f793b"
            }}
            style={styles.ImageBackground_59_9}
          />
        </View>
        <View style={styles.View_24_103}>
          <View style={styles.View_24_104} />
          <View style={styles.View_24_105}>
            <Text style={styles.Text_24_105}>Submit</Text>
          </View>
        </View>
        <View style={styles.View_24_106}>
          <View style={styles.View_24_107} />
          <View style={styles.View_24_108}>
            <Text style={styles.Text_24_108}>Input your email</Text>
          </View>
        </View>
        <View style={styles.View_24_109}>
          <Text style={styles.Text_24_109}>Password Reset</Text>
        </View>
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d8d/16b6/dce79c2c1b6779261a346429b4d6887e"
          }}
          style={styles.TouchableOpacity_59_10}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_12"))
          }
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("100%") },
  View_24_98: {
    width: wp("99.63054187192118%"),
    minWidth: wp("99.63054187192118%"),
    height: hp("100.53333333333335%"),
    minHeight: hp("100.53333333333335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.43103448275862066%"),
    top: hp("-0.13333333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_59_6: {
    width: wp("223.15270935960592%"),
    minWidth: wp("223.15270935960592%"),
    height: hp("221.06666666666666%"),
    minHeight: hp("221.06666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-54.86453201970443%"),
    top: hp("-90.8%")
  },
  ImageBackground_59_7: {
    width: wp("76.35467980295566%"),
    minWidth: wp("76.35467980295566%"),
    height: hp("165.33333333333334%"),
    minHeight: hp("165.33333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_59_8: {
    width: wp("76.35467980295566%"),
    minWidth: wp("76.35467980295566%"),
    height: hp("165.33333333333334%"),
    minHeight: hp("165.33333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("146.79802955665025%"),
    top: hp("55.73333333333334%")
  },
  ImageBackground_59_9: {
    width: wp("38.793103448275865%"),
    height: hp("23.200000000000003%"),
    top: hp("103.60000000000001%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.40640394088669%")
  },
  View_24_103: {
    width: wp("20.964963565319042%"),
    minWidth: wp("20.964963565319042%"),
    height: hp("9.771407063802084%"),
    minHeight: hp("9.771407063802084%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.347290640394085%"),
    top: hp("69.73333333333333%")
  },
  View_24_104: {
    width: wp("20.964963565319042%"),
    height: hp("9.771407063802084%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(99, 171, 255, 1)"
  },
  View_24_105: {
    width: wp("10.013118048606835%"),
    top: hp("2.6519531250000057%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.507205155095448%"),
    justifyContent: "flex-start"
  },
  Text_24_105: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_24_106: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("9.866666666666667%"),
    minHeight: hp("9.866666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.431034482758623%"),
    top: hp("52.666666666666664%")
  },
  View_24_107: {
    width: wp("49.94646645531866%"),
    height: hp("9.771415201822917%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.5600000023841858
  },
  View_24_108: {
    width: wp("48.275862068965516%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7241379310344804%"),
    justifyContent: "center"
  },
  Text_24_108: {
    color: "rgba(89, 89, 89, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_24_109: {
    width: wp("18.7192118226601%"),
    minWidth: wp("18.7192118226601%"),
    minHeight: hp("4.266666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.155172413793103%"),
    top: hp("45.46666666666666%"),
    justifyContent: "flex-start"
  },
  Text_24_109: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_59_10: {
    width: wp("6.675412971985165%"),
    minWidth: wp("6.675412971985165%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.972906403940887%"),
    top: hp("85.73333333333333%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
