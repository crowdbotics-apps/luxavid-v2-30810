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
      <View style={styles.View_66_96}>
        <View style={styles.View_66_97}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/625a/e9cb/f2bc5e62eca24498c704e50d6a21dfd3"
            }}
            style={styles.ImageBackground_66_98}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/625a/e9cb/f2bc5e62eca24498c704e50d6a21dfd3"
            }}
            style={styles.ImageBackground_66_99}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2fd1/001e/dcdff1158003225c175fd5824f4f793b"
            }}
            style={styles.ImageBackground_66_100}
          />
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_66_101}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("66_267"))
          }
        >
          <View style={styles.View_66_102} />
          <View style={styles.View_66_103}>
            <Text style={styles.Text_66_103}>4k</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_66_104}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("66_314"))
          }
        >
          <View style={styles.View_66_105} />
          <View style={styles.View_66_106}>
            <Text style={styles.Text_66_106}>1080p</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_66_107}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("66_120"))
          }
        >
          <View style={styles.View_66_108} />
          <View style={styles.View_66_109}>
            <Text style={styles.Text_66_109}>720p</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d8d/16b6/dce79c2c1b6779261a346429b4d6887e"
          }}
          style={styles.TouchableOpacity_66_117}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_593"))
          }
        />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/efae/5f79/fcb6af84a19b15b2369ea061130b9d23"
          }}
          style={styles.TouchableOpacity_66_118}
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
  View_66_96: {
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
  View_66_97: {
    width: wp("176.23152709359607%"),
    minWidth: wp("176.23152709359607%"),
    height: hp("283.2%"),
    minHeight: hp("283.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-41.933497536945815%"),
    top: hp("-117.46666666666667%")
  },
  ImageBackground_66_98: {
    width: wp("76.35467980295566%"),
    minWidth: wp("76.35467980295566%"),
    height: hp("165.33333333333334%"),
    minHeight: hp("165.33333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("99.8768472906404%"),
    top: hp("0%")
  },
  ImageBackground_66_99: {
    width: wp("76.35467980295566%"),
    minWidth: wp("76.35467980295566%"),
    height: hp("165.33333333333334%"),
    minHeight: hp("165.33333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("117.86666666666666%")
  },
  ImageBackground_66_100: {
    width: wp("38.793103448275865%"),
    height: hp("23.200000000000003%"),
    top: hp("130.26666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.47536945812809%")
  },
  TouchableOpacity_66_101: {
    width: wp("27.15390210081204%"),
    minWidth: wp("27.15390210081204%"),
    height: hp("8.392183430989583%"),
    minHeight: hp("8.392183430989583%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.21541982566195%"),
    top: hp("44.66666666666667%")
  },
  View_66_102: {
    width: wp("27.15390210081204%"),
    height: hp("8.33463134765625%"),
    top: hp("0.05755208333333428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(86, 165, 241, 1)"
  },
  View_66_103: {
    width: wp("26.970443349753694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.16142746497845195%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_66_103: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_66_104: {
    width: wp("27.153909617456897%"),
    minWidth: wp("27.153909617456897%"),
    height: hp("8.533333333333333%"),
    minHeight: hp("8.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.2988545835899%"),
    top: hp("56.13333333333333%")
  },
  View_66_105: {
    width: wp("27.153909617456897%"),
    height: hp("8.334619140625001%"),
    top: hp("0.1016845703125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(86, 165, 241, 1)"
  },
  View_66_106: {
    width: wp("26.970443349753694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.07799270705049821%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_66_106: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_66_107: {
    width: wp("27.159381734913797%"),
    minWidth: wp("27.159381734913797%"),
    height: hp("8.387532552083334%"),
    minHeight: hp("8.387532552083334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.3768472906404%"),
    top: hp("67.74580078124998%")
  },
  View_66_108: {
    width: wp("27.15390585913447%"),
    height: hp("8.334615071614584%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.005472117456889691%"),
    backgroundColor: "rgba(86, 165, 241, 1)"
  },
  View_66_109: {
    width: wp("26.970443349753694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.12086588541667709%"),
    justifyContent: "center"
  },
  Text_66_109: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_66_117: {
    width: wp("6.675412971985165%"),
    height: hp("3.031649005909761e-14%"),
    top: hp("85.73333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.972906403940887%")
  },
  TouchableOpacity_66_118: {
    width: wp("7.389162561576355%"),
    height: hp("16%"),
    top: hp("4.8%"),
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
