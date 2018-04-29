import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Tile from "../components/Tile";
import { colors } from "../config";

class Home extends React.Component {
  _goToScreen(screenName, payload) {
    this.props.navigation.navigate(screenName, payload);
  }

  render() {
    return (
      <View style={styles.main}>
        <Image
          style={styles.logo}
          source={require("../images/logo.png")}
          resizeMode="contain"
        />
        <View style={styles.tiles}>
          <Tile
            id={1}
            title="Create a new wallet"
            dark
            onPress={() =>
              this._goToScreen("CreateWallet", { useExistingKey: false })
            }
          />
          <Tile
            id={2}
            title="Login using a saved wallet"
            onPress={() => this._goToScreen("LoginWallet")}
          />
          <Tile
            id={3}
            title="Encrypt an existing key"
            dark
            onPress={() =>
              this._goToScreen("CreateWallet", { useExistingKey: true })
            }
          />
          <Tile
            id={4}
            title="Login using an encrypted key"
            onPress={() => this._goToScreen("LoginWithEncryptedKey")}
          />
          <Tile
            id={5}
            title="Manage settings"
            dark
            onPress={() => this._goToScreen("Settings")}
          />
          <Tile
            id={6}
            title="Login using a private key"
            onPress={() => this._goToScreen("LoginWithPrivateKey")}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: colors.purple,
    flex: 1,
    marginTop: 20,
    flexDirection: "column",
    justifyContent: "flex-start"
  },
  tiles: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 10
  },
  logo: {
    width: 180,
    height: 50,
    marginLeft: 15
  }
});

export default Home;
