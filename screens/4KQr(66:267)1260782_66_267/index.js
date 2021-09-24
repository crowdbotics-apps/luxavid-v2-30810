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
      <View style={styles.View_66_291}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f0d/3f6e/2984b87143d8a6f818ba461d8a6fe953"
          }}
          style={styles.ImageBackground_66_292}
        />
        <TouchableOpacity
          style={styles.TouchableOpacity_66_296}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_650"))
          }
        >
          <View style={styles.View_66_297} />
          <View style={styles.View_66_298}>
            <Text style={styles.Text_66_298}>4k - Live Stream</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d8d/16b6/dce79c2c1b6779261a346429b4d6887e"
          }}
          style={styles.TouchableOpacity_66_312}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_617"))
          }
        />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/efae/5f79/fcb6af84a19b15b2369ea061130b9d23"
          }}
          style={styles.TouchableOpacity_66_313}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_37"))
          }
        />
        <TouchableOpacity
          style={styles.TouchableOpacity_67_377}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_593"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/99e8/f9c6/2080f1233546ac6f8c5438df88b7c80a"
            }}
            style={styles.ImageBackground_67_378}
          />
          <View style={styles.View_67_381}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/34b6/9910/ed782b7ba57811f0f7388dfade92e9d5"
              }}
              style={styles.ImageBackground_67_382}
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
  View_66_291: {
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
  ImageBackground_66_292: {
    width: wp("145.8128078817734%"),
    minWidth: wp("145.8128078817734%"),
    height: hp("338.1333333333333%"),
    minHeight: hp("338.1333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-38.60837438423645%"),
    top: hp("-104.4%")
  },
  TouchableOpacity_66_296: {
    width: wp("27.15390210081204%"),
    minWidth: wp("27.15390210081204%"),
    height: hp("8.392183430989583%"),
    minHeight: hp("8.392183430989583%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.74630541871921%"),
    top: hp("81.46666666666665%")
  },
  View_66_297: {
    width: wp("27.15390210081204%"),
    height: hp("8.33463134765625%"),
    minHeight: hp("8.33463134765625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.05755208333333428%"),
    backgroundColor: "rgba(86, 165, 241, 1)"
  },
  View_66_298: {
    width: wp("26.970443349753694%"),
    minHeight: hp("8.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1614199483335952%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_66_298: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_66_312: {
    width: wp("6.675412971985165%"),
    height: hp("3.031649005909761e-14%"),
    top: hp("85.73333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.972906403940887%")
  },
  TouchableOpacity_66_313: {
    width: wp("7.389162561576355%"),
    height: hp("16%"),
    top: hp("4.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.77832512315271%")
  },
  TouchableOpacity_67_377: {
    width: wp("6.157635467980295%"),
    minWidth: wp("6.157635467980295%"),
    height: hp("13.333333333333334%"),
    minHeight: hp("13.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.76354679802957%"),
    top: hp("82.13333333333333%")
  },
  ImageBackground_67_378: {
    width: wp("5.514300398051445%"),
    height: hp("10.355987548828125%"),
    top: hp("2.977343750000003%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3676240667333701%")
  },
  View_67_381: {
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
  ImageBackground_67_382: {
    width: wp("6.1592764455109394%"),
    height: hp("4.380163065592448%"),
    top: hp("0.31238606770833144%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.0002705992149145686%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
