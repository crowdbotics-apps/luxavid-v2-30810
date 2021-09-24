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
      <View style={styles.View_24_120}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5d3/011f/1b3705a3286788a8a2af9ef7c4fe0157"
          }}
          style={styles.ImageBackground_24_131}
        />
        <View style={styles.View_24_135}>
          <View style={styles.View_24_136} />
          <View style={styles.View_24_137}>
            <Text style={styles.Text_24_137}>Log Out</Text>
          </View>
        </View>
        <View style={styles.View_34_24}>
          <View style={styles.View_34_25} />
          <View style={styles.View_34_26}>
            <Text style={styles.Text_34_26}>Logging you in...</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2fd1/001e/dcdff1158003225c175fd5824f4f793b"
          }}
          style={styles.ImageBackground_24_122}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a23/2489/ab51a10ae38803500a7ce7f4505c79e3"
          }}
          style={styles.ImageBackground_97_13}
        />
      </View>
      <View style={styles.View_97_15} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("100%") },
  View_24_120: {
    width: wp("147.04433497536945%"),
    minWidth: wp("147.04433497536945%"),
    height: hp("222.66666666666666%"),
    minHeight: hp("222.66666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_24_131: {
    width: wp("198.52216748768473%"),
    minWidth: wp("198.52216748768473%"),
    height: hp("272.8%"),
    minHeight: hp("272.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-54.864532019704434%"),
    top: hp("-90.8%")
  },
  View_24_135: {
    width: wp("27.173644568532556%"),
    minWidth: wp("27.173644568532556%"),
    height: hp("8.533333333333333%"),
    minHeight: hp("8.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.391625615763544%"),
    top: hp("87.06666666666666%")
  },
  View_24_136: {
    width: wp("27.173644568532556%"),
    height: hp("8.442666625976562%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(86, 165, 241, 1)"
  },
  View_24_137: {
    width: wp("27.093596059113302%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_24_137: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_34_24: {
    width: wp("27.216748768472904%"),
    minWidth: wp("27.216748768472904%"),
    height: hp("8.533333333333333%"),
    minHeight: hp("8.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.26847290640394%"),
    top: hp("70.26666666666667%")
  },
  View_34_25: {
    width: wp("27.173644568532556%"),
    height: hp("8.442666625976562%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(86, 165, 241, 1)"
  },
  View_34_26: {
    width: wp("27.216748768472904%"),
    top: hp("1.3333333333333286%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_34_26: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_24_122: {
    width: wp("38.793103448275865%"),
    height: hp("23.200000000000003%"),
    top: hp("12.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.541871921182267%")
  },
  ImageBackground_97_13: {
    width: wp("13.546798029556651%"),
    minWidth: wp("13.546798029556651%"),
    height: hp("22.933333333333334%"),
    minHeight: hp("22.933333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.16502463054187%"),
    top: hp("41.46666666666667%"),
    borderColor: "rgba(86, 165, 241, 1)",
    borderWidth: 1
  },
  View_97_15: {
    width: wp("236.45320197044336%"),
    minWidth: wp("236.45320197044336%"),
    height: hp("288%"),
    minHeight: hp("288%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-68.22660098522168%"),
    top: hp("-94%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
