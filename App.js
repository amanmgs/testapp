import React from 'react';
import { StyleSheet, View, Dimensions} from 'react-native';
import {LineChart} from "react-native-chart-kit";

export default function App() {
  // Data to represent on graph
  const data = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
        { data: [0,18,38,29,6,47,50], 
          color: () =>'#4286F5',
          strokeWidth: 2 },
          { data: [0,-13, -47, -50, -37, -25, -8], 
          color: () =>'#DC4437',
          strokeWidth: 2 }
          ],
  }

  //Bezier Line Chart to represent data on chart
  return (
    <View style={styles.container}>
    <LineChart
      data={data}
      width={Dimensions.get('window').width-30}
      height={Dimensions.get('window').height-500}
      bezier
      fromZero
      chartConfig={{
        backgroundColor: '#1cc910',
        backgroundGradientFrom: '#eff3ff',
        backgroundGradientTo: '#efefef',
        decimalPlaces: 1,
        color: () => `rgb(0, 0, 255)`,
        style: {
          borderRadius: 16,
        },
      }}
      style={{
        marginVertical: 8,
        borderRadius: 16,
      }}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
