/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @LichAmnesia
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ListView,
  Navigator
} from 'react-native';

import MyScene from './MyScene';

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}
class Blink extends Component{
	constructor(props){
		super(props);
		this.state = {showText: true};

		setInterval(() => {
			this.setState({ showText: !this.state.showText });
		}, 3000);
  }
  render(){
  	let display = this.state.showText ? this.props.text : ' ';
  	return (
  		<Text style={styles.welcome}>{display}</Text>
  	);
  }
}
class AProject extends Component {
  render() {
    let pic = {
        uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={styles.container}>
        <Image source={pic} style={{width: 193, height: 110}}/>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
          SB Windows
        </Text>
        <Greeting name='Rexxar' />
        <Greeting name='Jaina' />
        <Greeting name='Valeera' />
        <Blink  text='This is will blink every 3 seconds.'/>
        <View style={{width: 50, height: 100, backgroundColor: 'powderblue'}}/>
      </View>

    );
  }
}


class FlexDimensionsBasics extends Component {
  render() {
    return (
      // Try removing the `flex: 1` on the parent View.
      // The parent will not have dimensions, so the children can't expand.
      // What if you add `height: 300` instead of `flex: 1`?
      <View style={{
      		flex:1,
      		flexDirection: 'row',
      		justifyContent: 'flex-start',
//      		alignItems: 'center',
      }}>
        <View style={{height: 50, width: 50, backgroundColor: 'powderblue'}} />
        <View style={{height: 50, width: 50, backgroundColor: 'skyblue'}} />
        <View style={{height: 50, width: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
};

class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  render(){
  	return (
  		<View style={{padding: 20}}>
  			<TextInput
  				style={{height: 40}}
  				placeholder="what fuck u say"
  				onChangeText={(text) => this.setState({text})}
  			/>
				<Text style={{padding: 20, frontSize: 40}}>
					{this.state.text.split(' ').map((word) => 'sdwac').join(' ')}
				</Text>
  		</View>
  	)
  }
 }

class ListViewBasics extends Component {
  // Initialize the hardcoded data
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'John', 'Joel', 'ssss', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
      ])
    };
  }

  render() {
    return (
      <View style={{paddingTop: 22}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />
//        <Text>{this.getMoviesFromApiAsync()}</Text>
      </View>
    );
  }
}

class YoDawgApp extends Component {
  render() {
    return (
   		<Navigator
          initialRoute={{ title: 'My Initial Scene', index: 0 }}
          renderScene={(route, navigator) => {
            return (
							<MyScene
								title={route.title}

								// Function to call when a new scene should be displayed
                onForward = {() => {
                	const nextIndex = route.index + 1;
                	navigator.push({
                		title: 'Scene' + nextIndex,
                		index: nextIndex,
                	});
                }}
                // Function to call to go back to the previous scene
                onBack={() => {
                	if (route.index > 0) {
                		navigator.pop();
                	}
                }}
							/>
            )
          }}
       />
//      <MyScene />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});



AppRegistry.registerComponent('AProject', () => YoDawgApp);
