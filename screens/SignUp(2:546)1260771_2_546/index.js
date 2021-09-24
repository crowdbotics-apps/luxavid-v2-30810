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
      <View style={styles.View_9_13}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/547a/7693/f72ed53bcca97490e1f32004194a31b9"
          }}
          style={styles.ImageBackground_34_14}
        />
        <View style={styles.View_13_16}>
          <TouchableOpacity
            style={styles.TouchableOpacity_9_43}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("2_12"))
            }
          >
            <Text style={styles.Text_9_43}>Already have an account? Login</Text>
          </TouchableOpacity>
          <View style={styles.View_9_44}>
            <Text style={styles.Text_9_44}>Already have an account? </Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/76aa/4692/9b92029ab65b879bbc0089fd0b9e33d2"
          }}
          style={styles.ImageBackground_11_65}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0838/b968/eedfffdc1a00e505404a603a4a03f0f3"
          }}
          style={styles.ImageBackground_11_68}
        />
        <TouchableOpacity
          style={styles.TouchableOpacity_9_40}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_12"))
          }
        >
          <View style={styles.View_9_41} />
          <View style={styles.View_9_42}>
            <Text style={styles.Text_9_42}>Sign up</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.View_11_48}>
          <View style={styles.View_34_22} />
          <View style={styles.View_2_562}>
            <Text style={styles.Text_2_562}>Confirm Password</Text>
          </View>
        </View>
        <View style={styles.View_9_18}>
          <View style={styles.View_34_20} />
          <View style={styles.View_2_559}>
            <Text style={styles.Text_2_559}>Password</Text>
          </View>
        </View>
        <View style={styles.View_9_16}>
          <View style={styles.View_34_21} />
          <View style={styles.View_2_553}>
            <Text style={styles.Text_2_553}>Input your email</Text>
          </View>
        </View>
        <View style={styles.View_2_563}>
          <Text style={styles.Text_2_563}>I agree with Terms and Privacy</Text>
        </View>
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/efae/5f79/fcb6af84a19b15b2369ea061130b9d23"
          }}
          style={styles.TouchableOpacity_34_18}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_37"))
          }
        />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d8d/16b6/dce79c2c1b6779261a346429b4d6887e"
          }}
          style={styles.TouchableOpacity_67_398}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("0_14"))
          }
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("100%") },
  View_9_13: {
    width: wp("99.50738916256158%"),
    minWidth: wp("99.50738916256158%"),
    height: hp("100%"),
    minHeight: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_34_14: {
    width: wp("207.14285714285717%"),
    minWidth: wp("207.14285714285717%"),
    height: hp("224.53333333333333%"),
    minHeight: hp("224.53333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-48.645320197044335%"),
    top: hp("-41.86666666666667%")
  },
  View_13_16: {
    width: wp("24.633120081107602%"),
    minWidth: wp("24.633120081107602%"),
    height: hp("4.721346028645834%"),
    minHeight: hp("4.721346028645834%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.19211822660098%"),
    top: hp("89.33333333333333%")
  },
  TouchableOpacity_9_43: {
    width: wp("24.633120081107602%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_43: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_44: {
    width: wp("19.83281403339555%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_9_44: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_11_65: {
    width: wp("2.4630541871921183%"),
    height: hp("5.333333333333334%"),
    top: hp("81.06666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.09852216748769%")
  },
  ImageBackground_11_68: {
    width: wp("2.4630541871921183%"),
    height: hp("5.333333333333334%"),
    top: hp("81.06666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.09852216748769%")
  },
  TouchableOpacity_9_40: {
    width: wp("27.040047481142242%"),
    minWidth: wp("27.040047481142242%"),
    height: hp("8.4541015625%"),
    minHeight: hp("8.4541015625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.330049261083744%"),
    top: hp("69.86666666666666%")
  },
  View_9_41: {
    width: wp("27.040047481142242%"),
    height: hp("8.4541015625%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(83, 245, 69, 1)"
  },
  View_9_42: {
    width: wp("10.831331149697892%"),
    top: hp("2.3619466145833314%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.810312656346213%"),
    justifyContent: "center"
  },
  Text_9_42: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_48: {
    width: wp("38.49469640572083%"),
    minWidth: wp("38.49469640572083%"),
    height: hp("8.745454915364585%"),
    minHeight: hp("8.745454915364585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.926108374384235%"),
    top: hp("55.46666666666666%")
  },
  View_34_22: {
    width: wp("38.49469640572083%"),
    height: hp("8.745454915364585%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.5600000023841858
  },
  View_2_562: {
    width: wp("36.256630432429574%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2380659732912633%"),
    justifyContent: "center"
  },
  Text_2_562: {
    color: "rgba(89, 89, 89, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_18: {
    width: wp("38.49469640572083%"),
    minWidth: wp("38.49469640572083%"),
    height: hp("8.745454915364585%"),
    minHeight: hp("8.745454915364585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.926108374384235%"),
    top: hp("36.53333333333333%")
  },
  View_34_20: {
    width: wp("38.49469640572083%"),
    height: hp("8.745454915364585%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.5600000023841858
  },
  View_2_559: {
    width: wp("35.95822338987454%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.536469257523862%"),
    justifyContent: "center"
  },
  Text_2_559: {
    color: "rgba(89, 89, 89, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_9_16: {
    width: wp("38.793103448275865%"),
    minWidth: wp("38.793103448275865%"),
    height: hp("8.969697062174479%"),
    minHeight: hp("8.969697062174479%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.926108374384235%"),
    top: hp("19.733333333333334%")
  },
  View_34_21: {
    width: wp("38.793103448275865%"),
    height: hp("8.745454915364585%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.5600000023841858
  },
  View_2_553: {
    width: wp("36.256630432429574%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.536469257523862%"),
    justifyContent: "center"
  },
  Text_2_553: {
    color: "rgba(89, 89, 89, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_563: {
    width: wp("31.2807881773399%"),
    minWidth: wp("31.2807881773399%"),
    minHeight: hp("5.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.669950738916256%"),
    top: hp("81.33333333333333%"),
    justifyContent: "center"
  },
  Text_2_563: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_34_18: {
    width: wp("7.389162561576355%"),
    height: hp("16%"),
    top: hp("4.666666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.71674876847291%")
  },
  TouchableOpacity_67_398: {
    width: wp("6.675412971985165%"),
    height: hp("3.031649005909761e-14%"),
    top: hp("85.86666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.911330049261084%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
