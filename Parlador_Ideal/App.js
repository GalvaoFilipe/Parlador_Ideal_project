import 'react-native-gesture-handler';
import React from 'react';
import Login from "./Views/Login/Login";
import Feed from "./Views/Feed/Feed";
import MyPost from "./Views/MyPost/MyPost";
import NewPost from "./Views/NewPost/NewPost";
import NewAccount from "./Views/NewAccount/NewAccount";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

const navigator = createStackNavigator({
  Login: {screen: Login},
  Feed: {screen: Feed},
  MyPost: {screen: MyPost},
  NewPost: {screen: NewPost},
  NewAccount: {screen: NewAccount}

})

const AppContainer = createAppContainer(navigator);

const App: () => React$Node = () => {
  return (
    <>
      <AppContainer/>
    </>
  );
};

export default App;
