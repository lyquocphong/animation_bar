import React, { Component } from 'react';
import {
    View,
    Dimensions,
    StyleSheet,
    Animated,
    Easing,
} from 'react-native';

const { width, height } = Dimensions.get('window');


class AnimationBar extends Component {

    state = {
        progressStatus: 0,
    }
    anim = new Animated.Value(0);

    componentDidMount() {
        this.onAnimate();
    }

    onAnimate = () => {
        console.log('Animate');
        this.anim.setValue(0)
        this.anim.addListener(({ value }) => {
            console.log('set progress');
            this.setState({ progressStatus: parseInt(value, 10) });
        });
        Animated.timing(this.anim, {
            toValue: 100,
            duration: 10000,
        }).start();
    }

    render() {

        // const cover_value = this.spinValue.interpolate({
        //     inputRange: [0, 100],
        //     outputRange: ['0%', '100%']
        //   })

        return (
            <View style={style.container}>
                <View style={{ width: width - 40, height: 40, backgroundColor: "gray" }}>
                    <Animated.View style={{ width: this.state.progressStatus + "%", height: 40, backgroundColor: "red" }} />
                    <Animated.Text style={style.label}>
                        {this.state.progressStatus}%
                    </Animated.Text>
                </View>
            </View>
        )
    }
}

export default AnimationBar;

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    label: {
        fontSize: 23,
        color: "black",
        position: "absolute",
        zIndex: 1,
        alignSelf: "center",
    }
});