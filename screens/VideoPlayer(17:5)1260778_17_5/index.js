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
      <View style={styles.View_17_6}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1d21/33a2/f36e2bab30764003afb4b10bc70150ab"
          }}
          style={styles.ImageBackground_59_30}
        />
        <View style={styles.View_17_24} />
        <TouchableOpacity
          style={styles.TouchableOpacity_59_19}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_593"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/99e8/f9c6/2080f1233546ac6f8c5438df88b7c80a"
            }}
            style={styles.ImageBackground_59_20}
          />
          <View style={styles.View_59_23}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/34b6/9910/ed782b7ba57811f0f7388dfade92e9d5"
              }}
              style={styles.ImageBackground_59_24}
            />
          </View>
        </TouchableOpacity>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc6c/7913/19b70101bc0108e4fdaf57ead3784fb3"
          }}
          style={styles.ImageBackground_17_31}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bbe5/69de/2d397e46ce287da5add2a3faa25deded"
          }}
          style={styles.ImageBackground_17_30}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a6e/26b5/113319afa5370d87d566e40fe4cd6661"
          }}
          style={styles.ImageBackground_17_29}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/657c/6d55/a056b1292504b2711a6d685b0551c772"
          }}
          style={styles.ImageBackground_17_28}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2469/5967/e0e69ce5cb1b5208514a3d35eff8e5af"
          }}
          style={styles.ImageBackground_17_27}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/02f1/ffcf/4b8598693214dd1b9b76096502b0d21c"
          }}
          style={styles.ImageBackground_17_26}
        />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0fa2/91af/0fb0c1e15501f6412856c3769ecfab0e"
          }}
          style={styles.TouchableOpacity_17_25}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_767"))
          }
        />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6675/293d/1f3f5b9b20df91c0657742e683d8cd7f"
          }}
          style={styles.TouchableOpacity_59_18}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_546"))
          }
        />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/efae/5f79/fcb6af84a19b15b2369ea061130b9d23"
          }}
          style={styles.TouchableOpacity_66_92}
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
  View_17_6: {
    width: wp("99.63054187192118%"),
    minWidth: wp("99.63054187192118%"),
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
  ImageBackground_59_30: {
    width: wp("162.80788177339903%"),
    minWidth: wp("162.80788177339903%"),
    height: hp("233.06666666666666%"),
    minHeight: hp("233.06666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-13.854679802955665%"),
    top: hp("-100.4%")
  },
  View_17_24: {
    width: wp("77.70935960591133%"),
    minWidth: wp("77.70935960591133%"),
    height: hp("70.66666666666667%"),
    minHeight: hp("70.66666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.172413793103448%"),
    top: hp("5.866666666666666%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 3
  },
  TouchableOpacity_59_19: {
    width: wp("6.157635467980295%"),
    minWidth: wp("6.157635467980295%"),
    height: hp("13.333333333333334%"),
    minHeight: hp("13.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.82512315270937%"),
    top: hp("82%")
  },
  ImageBackground_59_20: {
    width: wp("5.514300398051445%"),
    height: hp("10.355987548828125%"),
    top: hp("2.977343750000003%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3676240667333701%")
  },
  View_59_23: {
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
  ImageBackground_59_24: {
    width: wp("6.1592764455109394%"),
    height: hp("4.380163065592448%"),
    top: hp("0.31238606770833144%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.00027059921490035777%")
  },
  ImageBackground_17_31: {
    width: wp("5.541871921182266%"),
    height: hp("12%"),
    top: hp("80.70543619791667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.17252684344212%")
  },
  ImageBackground_17_30: {
    width: wp("5.541871921182266%"),
    height: hp("12%"),
    top: hp("80%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.38035064847598%")
  },
  ImageBackground_17_29: {
    width: wp("5.541871921182266%"),
    height: hp("12%"),
    top: hp("80%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.643376693349754%")
  },
  ImageBackground_17_28: {
    width: wp("5.541871921182266%"),
    height: hp("12%"),
    top: hp("80.70543619791667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.63054187192118%")
  },
  ImageBackground_17_27: {
    width: wp("5.541871921182266%"),
    height: hp("12%"),
    top: hp("80.70543619791667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.30848069966133%")
  },
  ImageBackground_17_26: {
    width: wp("5.541871921182266%"),
    height: hp("12%"),
    top: hp("80.7050537109375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.240473704972295%")
  },
  TouchableOpacity_17_25: {
    width: wp("5.21517598570274%"),
    height: hp("4.956050618489583%"),
    top: hp("66.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.07635467980296%")
  },
  TouchableOpacity_59_18: {
    width: wp("6.675412971985165%"),
    height: hp("3.031649005909761e-14%"),
    top: hp("85.73333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.603448275862069%")
  },
  TouchableOpacity_66_92: {
    width: wp("7.389162561576355%"),
    height: hp("16%"),
    top: hp("4.933333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.83990147783251%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
