import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from './Home/Home';

const Routes = createStackNavigator({
  Home: { screen: Home }
});

export default createAppContainer(Routes);