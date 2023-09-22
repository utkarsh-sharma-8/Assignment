import React from "react";
import {
    ImageBackground,
    View
} from 'react-native';
const Background=({children})=>{
    return(
    <View>
        <ImageBackground source={require("../img/background.jpg")} style={{height:'100%'}}/>
        <View style={{position:"absolute"}}>
            {children}
        </View>
    </View>

    );
}

export default Background;