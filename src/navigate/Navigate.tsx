import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";
import Notification from "../screens/Notification";

type screen1Props = {

};
type screen2Props = {

};
type HomeStackProps = {

};

type Bottom1StackProps = {

};
type Bottom2StackProps = {
    
};

type Bottom3StackProps = {
    
};
type InfoProps = {
    
};
type NotificationProps = {
    
};
type DrawerProps =  any;




export type MainStackParamList = {
    Screen1: screen1Props | undefined;
    Screen2: screen2Props | undefined;
    HomeStack: HomeStackProps | undefined;
    Bottom1:Bottom1StackProps| undefined;
    Bottom2:Bottom2StackProps| undefined;
    Bottom3:Bottom3StackProps| undefined;
    Info: InfoProps | undefined;
    Notification: NotificationProps | undefined;
    Drawer: DrawerProps | undefined;

};

export type MainStackNavigation = StackNavigationProp<MainStackParamList>;


export type S = keyof MainStackParamList;


export type MainStackScreenProps<RouterName extends S> = StackScreenProps<
    MainStackParamList,
    RouterName
>;