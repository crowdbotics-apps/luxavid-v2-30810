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
      <View style={styles.View_9_3}>
        <View style={styles.View_34_5}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2fd1/001e/dcdff1158003225c175fd5824f4f793b"
            }}
            style={styles.ImageBackground_9_11}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/625a/e9cb/f2bc5e62eca24498c704e50d6a21dfd3"
            }}
            style={styles.ImageBackground_2_41}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/625a/e9cb/f2bc5e62eca24498c704e50d6a21dfd3"
            }}
            style={styles.ImageBackground_2_40}
          />
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_9_4}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_12"))
          }
        >
          <View style={styles.View_9_5} />
          <View style={styles.View_9_10}>
            <Text style={styles.Text_9_10}>Powering Off</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.View_81_43}>
        <View style={styles.View_81_44}>
          <View style={styles.View_81_45}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cfdc/11fb/f875e06b8258ba5e1bba0402c56d90a0"
              }}
              style={styles.ImageBackground_81_46}
            />
          </View>
          <View style={styles.View_81_48}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f01/3aa5/3c1aafc81458384f41664593cc1414d1"
              }}
              style={styles.ImageBackground_81_49}
            />
          </View>
          <View style={styles.View_81_51}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3808/9b54/8afdbd980475ae393dfe4a7dcde10667"
              }}
              style={styles.ImageBackground_81_52}
            />
          </View>
          <View style={styles.View_81_54}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cfdc/11fb/f875e06b8258ba5e1bba0402c56d90a0"
              }}
              style={styles.ImageBackground_81_55}
            />
          </View>
          <View style={styles.View_81_57}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e87/d67b/4097d910e1117089a2586b72453161fb"
              }}
              style={styles.ImageBackground_81_58}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9686/691c/221e0098458978cc6111a92912dd1798"
              }}
              style={styles.ImageBackground_81_60}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("100%") },
  View_9_3: {
    width: wp("100%"),
    minWidth: wp("100%"),
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
  View_34_5: {
    width: wp("207.14285714285717%"),
    minWidth: wp("207.14285714285717%"),
    height: hp("224.53333333333333%"),
    minHeight: hp("224.53333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-48.58374384236453%"),
    top: hp("-42%")
  },
  ImageBackground_9_11: {
    width: wp("38.793103448275865%"),
    height: hp("23.200000000000003%"),
    top: hp("54.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.12561576354679%")
  },
  ImageBackground_2_41: {
    width: wp("76.35467980295566%"),
    minWidth: wp("76.35467980295566%"),
    height: hp("165.33333333333334%"),
    minHeight: hp("165.33333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("59.2%")
  },
  ImageBackground_2_40: {
    width: wp("76.35467980295566%"),
    minWidth: wp("76.35467980295566%"),
    height: hp("165.33333333333334%"),
    minHeight: hp("165.33333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("130.78817733990147%"),
    top: hp("0%")
  },
  TouchableOpacity_9_4: {
    width: wp("27.216748768472904%"),
    minWidth: wp("27.216748768472904%"),
    height: hp("8.533333333333333%"),
    minHeight: hp("8.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.391625615763544%"),
    top: hp("45.733333333333334%")
  },
  View_9_5: {
    width: wp("27.173911409425035%"),
    height: hp("8.4439697265625%"),
    top: hp("0.01516927083333286%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.040544782366076504%"),
    backgroundColor: "rgba(86, 165, 241, 1)"
  },
  View_9_10: {
    width: wp("27.216748768472904%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_9_10: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_81_43: {
    width: wp("10.83743842364532%"),
    minWidth: wp("10.83743842364532%"),
    height: hp("23.466666666666665%"),
    minHeight: hp("23.466666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.36206896551724%"),
    top: hp("0.9333333333333335%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_81_44: {
    width: wp("8.59051408438847%"),
    height: hp("18.601326497395835%"),
    top: hp("2.4326822916666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1234678071120783%")
  },
  View_81_45: {
    width: wp("5.665024630541872%"),
    height: hp("12.266666666666666%"),
    top: hp("3.167317708333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4627390894396513%")
  },
  ImageBackground_81_46: {
    width: wp("5.665024630541872%"),
    height: hp("12.266666666666666%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_81_48: {
    width: wp("6.324504514045904%"),
    height: hp("13.69466044108073%"),
    top: hp("2.4533203125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1329989127924733%")
  },
  ImageBackground_81_49: {
    width: wp("6.324504514045904%"),
    height: hp("13.69466044108073%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_81_51: {
    width: wp("8.59051408438847%"),
    height: hp("18.601326497395835%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_81_52: {
    width: wp("8.59051408438847%"),
    height: hp("18.601326497395835%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_81_54: {
    width: wp("5.665024630541872%"),
    height: hp("12.266666666666666%"),
    top: hp("3.167317708333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4627390894396513%")
  },
  ImageBackground_81_55: {
    width: wp("5.665024630541872%"),
    height: hp("12.266666666666666%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_81_57: {
    width: wp("2.8305941614611396%"),
    height: hp("6.284533182779948%"),
    top: hp("6.158268229166667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.879867177878694%")
  },
  ImageBackground_81_58: {
    width: wp("0.3694581280788177%"),
    height: hp("3.040533447265625%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2358416477447633%")
  },
  ImageBackground_81_60: {
    width: wp("2.8305941614611396%"),
    height: hp("5.747526041666666%"),
    top: hp("0.5370117187499996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
