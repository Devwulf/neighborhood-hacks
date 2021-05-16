import React from "react";
import { NativeScrollEvent, NativeSyntheticEvent, StyleSheet } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Text, View } from "./Themed";

export type HashtagsProps = {
    tags: string[];
    onHashtagPress?: (tag: string) => void;
};
export type HashtagsState = {
    currentScroll: number;
    intervalHandle: NodeJS.Timeout | undefined;
};

export class Hashtags extends React.Component<HashtagsProps, HashtagsState>  {
    private scrollViewRef: React.RefObject<ScrollView>;
    constructor(props: HashtagsProps) {
        super(props);

        this.scrollViewRef = React.createRef<ScrollView>();

        this.state = {
            currentScroll: 0,
            intervalHandle: undefined
        };

        this.goToScroll = this.goToScroll.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.handleStartScroll = this.handleStartScroll.bind(this);
        this.handleStopScroll = this.handleStopScroll.bind(this);
        this.stopInterval = this.stopInterval.bind(this);
        this.startInterval = this.startInterval.bind(this);
    }

    componentDidMount() {
        this.startInterval();
    }

    goToScroll() {
        const newX = this.state.currentScroll + Math.random() * 100 + 50;
        
        if (this.scrollViewRef) {
            this.scrollViewRef.current?.scrollTo({x: newX, animated: true});
        }
    }

    handleScroll(event: NativeSyntheticEvent<NativeScrollEvent>) {
        const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
        if (!contentOffset)
            return;

        this.setState(prevstate => ({currentScroll: contentOffset.x}), () => {
            if (layoutMeasurement.width + contentOffset.x >= contentSize.width) {
                this.scrollViewRef.current?.scrollTo({x: 0, animated: true});
                this.setState({currentScroll: 0});
            }
        });
    }

    handleStartScroll() {
        console.log("Start scroll");
        this.stopInterval();
    }

    handleStopScroll() {
        console.log("Stop scroll");
        setTimeout(this.startInterval, 1000);
    }

    stopInterval() {
        const { intervalHandle } = this.state;
        if (intervalHandle) {
            clearInterval(intervalHandle);
            this.setState({intervalHandle: undefined});
        }
    }

    startInterval() {
        if (this.state.intervalHandle)
            return;

        const handle = setInterval(this.goToScroll, Math.random() * 2000 + 1500);
        this.setState({intervalHandle: handle}); 
    }

    render() {
        const { tags, onHashtagPress } = this.props;
        return (
            <View style={{ height: "2rem", marginVertical: "0.25rem" }}
                onTouchStart={this.handleStartScroll}
                onTouchEnd={this.handleStopScroll}>
                <ScrollView 
                    ref={this.scrollViewRef} 
                    showsHorizontalScrollIndicator={false} 
                    horizontal
                    style={{width: "100vw", height: "1rem"}} 
                    onScroll={this.handleScroll}>
                    {tags.map((value, index) => (
                        <View style={{width: "6rem", height: "1rem", marginHorizontal: "0.5rem"}} key={index}>
                            <TouchableOpacity style={styles.hashTagsButton} onPress={() => { if(onHashtagPress) onHashtagPress(value); }}>
                                <Text style={{color: "white"}}>{value}</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    hashTags: {
        width: "100vw",
    },
    hashTagsButton: {
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        width: "100%",
        height: "2rem",
        backgroundColor: "black",
        borderRadius: 8
    }
});