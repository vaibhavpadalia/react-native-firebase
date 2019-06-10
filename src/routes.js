import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from './Home/Home';
import Main from './Main/Main';

const Routes = createStackNavigator({
    Home: { screen: Home },
    Main: { screen: Main }
})

export default createAppContainer(Routes);