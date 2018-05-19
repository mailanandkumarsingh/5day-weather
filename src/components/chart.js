import _ from 'lodash';
import React from 'react';
import { BarChart } from 'react-d3';

function average(data) {
  return _.round(_.sum(data)/data.length);
}

function barDataNeeded(data) {
  console.log('What is the data ', data);
  return [
    { 
      "name": "Series A",
      "values": [
        { "x": 'Day 1', "y":  data[0]},
        { "x": 'Day 2', "y":  data[8]},
        { "x": 'Day 3', "y":  data[16]},
        { "x": 'Day 4', "y":  data[24]},
        { "x": 'Day 5', "y":  data[32]},
      ]
    },
  ];
};


export default (props) => {
  const barData = barDataNeeded(props.data);
  const viewobj = {
    x: 0,
    y: 0,
    width: 500,
    height: 400
  };

  return (
    <div>
      <BarChart
        data={barData}
        width={350}
        height={250}
        fill={'#3182bd'}
        //title='Bar Chart'
        yAxisLabel='Temperature'
        //xAxisLabel='Day'
      />
    </div>
  );
}
