import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Home from './components/Home/Home';

const Routes = createStackNavigator({
  Home: { screen: Home }
});

export default createAppContainer(Routes);