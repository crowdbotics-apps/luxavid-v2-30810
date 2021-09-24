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
      <View style={styles.View_2_17}>
        <TouchableOpacity
          style={styles.TouchableOpacity_2_26}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("24_119"))
          }
        >
          <View style={styles.View_2_27} />
          <View style={styles.View_2_28}>
            <Text style={styles.Text_2_28}>Login</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.View_2_29}>
          <View style={styles.View_2_30} />
          <View style={styles.View_2_31}>
            <Text style={styles.Text_2_31}>Input your email</Text>
          </View>
          <View style={styles.View_2_32}>
            <Text style={styles.Text_2_32}>Email</Text>
          </View>
        </View>
        <View style={styles.View_2_33}>
          <View style={styles.View_2_34} />
          <View style={styles.View_2_35}>
            <Text style={styles.Text_2_35}>********</Text>
          </View>
          <View style={styles.View_2_36}>
            <Text style={styles.Text_2_36}>Password</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_24_94}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("24_97"))
          }
        >
          <View style={styles.View_24_96}>
            <Text style={styles.Text_24_96}>Forgot Password?</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d8d/16b6/dce79c2c1b6779261a346429b4d6887e"
          }}
          style={styles.TouchableOpacity_24_117}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("0_14"))
          }
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a1d/85e8/4562a0d698d872e91300710edfb76510"
          }}
          style={styles.ImageBackground_34_10}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2fd1/001e/dcdff1158003225c175fd5824f4f793b"
          }}
          style={styles.ImageBackground_34_27}
        />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/efae/5f79/fcb6af84a19b15b2369ea061130b9d23"
          }}
          style={styles.TouchableOpacity_60_81}
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
  View_2_17: {
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
  TouchableOpacity_2_26: {
    width: wp("20.964963565319042%"),
    minWidth: wp("20.964963565319042%"),
    height: hp("9.771419270833333%"),
    minHeight: hp("9.771419270833333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.347290640394085%"),
    top: hp("79.86666666666667%")
  },
  View_2_27: {
    width: wp("20.964963565319042%"),
    height: hp("9.771419270833333%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(99, 171, 255, 1)"
  },
  View_2_28: {
    width: wp("6.037906590353679%"),
    top: hp("2.791829427083343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.379661522475374%"),
    justifyContent: "center"
  },
  Text_2_28: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_29: {
    width: wp("31.773399014778324%"),
    minWidth: wp("31.773399014778324%"),
    height: hp("16.8%"),
    minHeight: hp("16.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.80541871921183%"),
    top: hp("39.86666666666667%")
  },
  View_2_30: {
    width: wp("31.773399014778324%"),
    height: hp("10.4%"),
    top: hp("6.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.5600000023841858
  },
  View_2_31: {
    width: wp("29.926108374384235%"),
    top: hp("6.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8472906403940783%"),
    justifyContent: "center"
  },
  Text_2_31: {
    color: "rgba(89, 89, 89, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_32: {
    width: wp("6.896551724137931%"),
    minWidth: wp("6.896551724137931%"),
    minHeight: hp("5.866666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8472906403940783%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_2_32: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_33: {
    width: wp("31.773399014778324%"),
    minWidth: wp("31.773399014778324%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.80541871921183%"),
    top: hp("59.33333333333333%")
  },
  View_2_34: {
    width: wp("31.773399014778324%"),
    height: hp("9.866666666666667%"),
    top: hp("6.133333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.5600000023841858
  },
  View_2_35: {
    width: wp("29.926108374384235%"),
    top: hp("5.333333333333336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8472906403940783%"),
    justifyContent: "center"
  },
  Text_2_35: {
    color: "rgba(89, 89, 89, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_36: {
    width: wp("11.083743842364532%"),
    minWidth: wp("11.083743842364532%"),
    minHeight: hp("5.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8472906403940783%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_2_36: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_24_94: {
    width: wp("14.77832512315271%"),
    minWidth: wp("14.77832512315271%"),
    height: hp("5.7058349609375005%"),
    minHeight: hp("5.7058349609375005%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.595052484221064%"),
    top: hp("90.01569010416668%")
  },
  View_24_96: {
    width: wp("14.77832512315271%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_24_96: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_24_117: {
    width: wp("6.675412971985165%"),
    height: hp("0%"),
    top: hp("85.73333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.972906403940887%")
  },
  ImageBackground_34_10: {
    width: wp("208.86699507389164%"),
    minWidth: wp("208.86699507389164%"),
    height: hp("241.6%"),
    minHeight: hp("241.6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-57.57389162561576%"),
    top: hp("-87.06666666666666%")
  },
  ImageBackground_34_27: {
    width: wp("38.793103448275865%"),
    height: hp("23.200000000000003%"),
    top: hp("12.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.541871921182267%")
  },
  TouchableOpacity_60_81: {
    width: wp("7.389162561576355%"),
    height: hp("16%"),
    top: hp("4.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.77832512315271%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
