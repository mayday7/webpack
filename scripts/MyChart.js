import React, {Component} from 'react';

import 'echarts/lib/chart/gauge';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import echarts from "echarts/lib/echarts";

class MyChart extends Component{


  componentDidMount() {
    console.log("3-1....componentDidMount");
    // 第一次绘制图标
    this.drawChart()


  }

  // 绘制图表
  drawChart() {
    var myChart = echarts.init(document.getElementById('main'));
    let option = {
      tooltip : {
        formatter: "{a} <br/>{b} : {c}%"
      },
      toolbox: {
        feature: {
          restore: {},
          saveAsImage: {}
        }
      },
      series: [
        {
          name: '业务指标',
          type: 'gauge',
          detail: {formatter:'{value}%'},
          data: [{value: 50, name: '完成率'}]
        }
      ]
    }
    // 绘制图表

    setInterval(function () {
      option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
      myChart.setOption(option, true);
    },2000);
  }

  componentWillUnmount() {
    console.log("8...componentWillUnmount");

    clearInterval(this.timeout);

  };

  render(){
    return(
      <div id="main">
      </div>
    )
  }

}

export default MyChart;
