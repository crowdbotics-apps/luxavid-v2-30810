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
      <View style={styles.View_13_6}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c46/ad51/ed36884a59fa6005a188585e8c0c353b"
          }}
          style={styles.ImageBackground_13_39}
        />
        <TouchableOpacity
          style={styles.TouchableOpacity_13_40}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_617"))
          }
        >
          <View style={styles.View_2_598} />
          <View style={styles.View_2_599}>
            <Text style={styles.Text_2_599}>Rec Settings</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_13_45}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("100_57"))
          }
        >
          <View style={styles.View_13_46} />
          <View style={styles.View_13_47}>
            <Text style={styles.Text_13_47}>Luxavid App</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_13_48}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("17_5"))
          }
        >
          <TouchableOpacity
            style={styles.TouchableOpacity_13_49}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("17_5"))
            }
          />
          <View style={styles.View_13_50}>
            <Text style={styles.Text_13_50}>Video Player</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_13_51}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_633"))
          }
        >
          <TouchableOpacity
            style={styles.TouchableOpacity_13_52}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("2_633"))
            }
          />
          <View style={styles.View_13_53}>
            <Text style={styles.Text_13_53}>Video List</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_13_41}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_12"))
          }
        >
          <TouchableOpacity
            style={styles.TouchableOpacity_13_42}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("2_37"))
            }
          />
        </TouchableOpacity>
        <View style={styles.View_13_43}>
          <Text style={styles.Text_13_43}>Log Out</Text>
        </View>
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d2cf/08a0/8562c3c3448259440f7d2993ab32a657"
          }}
          style={styles.TouchableOpacity_13_30}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_37"))
          }
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/205c/435c/308ab729ce429f09a9f81167ba5ff76f"
          }}
          style={styles.ImageBackground_34_28}
        />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/efae/5f79/fcb6af84a19b15b2369ea061130b9d23"
          }}
          style={styles.TouchableOpacity_60_85}
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
  View_13_6: {
    width: wp("99.50738916256158%"),
    height: hp("100%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.49261083743842365%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_13_39: {
    width: wp("166.79926529306496%"),
    height: hp("180%"),
    top: hp("-36.93333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-29.914412474984605%")
  },
  TouchableOpacity_13_40: {
    width: wp("27.16547585473272%"),
    minWidth: wp("27.16547585473272%"),
    height: hp("8.338460286458334%"),
    minHeight: hp("8.338460286458334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.418273625115454%"),
    top: hp("45.2%")
  },
  View_2_598: {
    width: wp("27.12034216068061%"),
    height: hp("8.334623209635417%"),
    top: hp("0.0038411458333342807%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(86, 165, 241, 1)"
  },
  View_2_599: {
    width: wp("26.84729064039409%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.31817957685498754%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_2_599: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_13_45: {
    width: wp("27.16547585473272%"),
    minWidth: wp("27.16547585473272%"),
    height: hp("8.339420572916667%"),
    minHeight: hp("8.339420572916667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.418273625115454%"),
    top: hp("60.66666666666667%")
  },
  View_13_46: {
    width: wp("27.12034216068061%"),
    height: hp("8.334619140625001%"),
    top: hp("0.004801432291664298%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(86, 165, 241, 1)"
  },
  View_13_47: {
    width: wp("26.84729064039409%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.31817957685498754%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_13_47: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_13_48: {
    width: wp("27.186659639104832%"),
    minWidth: wp("27.186659639104832%"),
    height: hp("8.339420572916667%"),
    minHeight: hp("8.339420572916667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.77093596059113%"),
    top: hp("60.66666666666667%")
  },
  TouchableOpacity_13_49: {
    width: wp("27.120340281519397%"),
    height: hp("8.334619140625001%"),
    top: hp("0.004801432291664298%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06632687423029182%"),
    backgroundColor: "rgba(86, 165, 241, 1)"
  },
  View_13_50: {
    width: wp("26.84729064039409%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_13_50: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_13_51: {
    width: wp("27.186663397427264%"),
    minWidth: wp("27.186663397427264%"),
    height: hp("8.338460286458334%"),
    minHeight: hp("8.338460286458334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.77093596059113%"),
    top: hp("45.2%")
  },
  TouchableOpacity_13_52: {
    width: wp("27.120340281519397%"),
    height: hp("8.334623209635417%"),
    top: hp("0.0038411458333342807%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06632687423029182%"),
    backgroundColor: "rgba(86, 165, 241, 1)"
  },
  View_13_53: {
    width: wp("26.84729064039409%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_13_53: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_13_41: {
    width: wp("27.120340281519397%"),
    minWidth: wp("27.120340281519397%"),
    height: hp("8.334635416666666%"),
    minHeight: hp("8.334635416666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.66939570985991%"),
    top: hp("74.58033854166666%")
  },
  TouchableOpacity_13_42: {
    width: wp("27.120340281519397%"),
    height: hp("8.334635416666666%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(86, 165, 241, 1)"
  },
  View_13_43: {
    width: wp("26.84729064039409%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.76108374384236%"),
    top: hp("74.53333333333333%"),
    justifyContent: "center"
  },
  Text_13_43: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_13_30: {
    width: wp("15.39408866995074%"),
    height: hp("33.33333333333333%"),
    top: hp("6.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("127.83251231527093%")
  },
  ImageBackground_34_28: {
    width: wp("39.18103748941657%"),
    height: hp("23.200000000000003%"),
    top: hp("12.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.847288235067733%")
  },
  TouchableOpacity_60_85: {
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
