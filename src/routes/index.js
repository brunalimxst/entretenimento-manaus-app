import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'; 

import Inicio from '../pages/Inicio';
import Login from "../pages/Login";
import Principal from "../pages/Principal";
import Register from '../pages/Register';
import Cupons from "../pages/Cupons";

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MateriaCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function Tabs() {
    return(
        <Tab.Navigator
        shifting={true}
        labeled={true} 
        activeColor="black"
        inactiveColor="black"
        barStyle={{ backgroundColor: '#FFA94D' }}>
            
            <Tab.Screen 
            name="Principal" 
            component={Principal} 
            options={{
                tabBarIcon: ({ color }) => (
                    <FontAwesomeIcon name='home' color={color} size={25}/>
                    
                    )
               
            }}/>

            <Tab.Screen 
            name="Cupons" 
            component={Cupons}
             options={{
                tabBarIcon: ({ color }) => (
                    <MateriaCommunityIcons name='ticket' color={color} size={25}/>
                )
             }}/>
           
           <Tab.Screen 
            name="Register" 
            component={Register}
             options={{
                tabBarIcon: ({ color }) => (
                    <FeatherIcon name='user-plus' color={color} size={25}/>
                )
             }}/>

            <Tab.Screen 
            name="Inicio" 
            component={Inicio}
            options={{
                tabBarIcon: ({ color }) => (
                    <MateriaCommunityIcons name='home-import-outline' color={color} size={25}/>
                )
            }}/> 
           

           

            
                
            

        </Tab.Navigator>
    )
}

export default function Routes() {
    return(


        <Stack.Navigator>
            <Stack.Screen
            name="Inicio"
            component={Inicio}
            options= {{ headerShown: false }}
            />
            <Stack.Screen
            name="Login"
            component={Login}
            options= {{ headerShown: false }}
            />
            <Stack.Screen
            name="Register"
            component={Register}
            options= {{ headerShown: false }}
            />
            <Stack.Screen
            name="Principal"
            component={Tabs}
            options= {{ headerShown: false }}
            />
            <Stack.Screen
            name="Cupons"
            component={Cupons}
            options= {{ headerShown: false }}
            />
        </Stack.Navigator>

        
    )
}