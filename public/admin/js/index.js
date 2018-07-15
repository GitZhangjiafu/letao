var myChart = echarts.init(document.querySelector('.chart-left'));

        // 指定图表的配置项和数据
        var option = {
            title: {
                text: '2017年注册人数'
            },
            tooltip: {},
            legend: {
                data:['人数','销量']
            },
            xAxis: {
                data: ["一月","二月","三月","四月","五月","六月"]
            },
            yAxis: {},
            series: [{
                name: '人数',
                type: 'bar',
                data: [500, 1000, 1360, 2000, 1200, 1500]
            },
            {
                name: '销量',
                type: 'bar',
                data: [1600, 1800, 2360, 2200, 1200, 1500]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
 
 
 
 
var myChart2 = echarts.init(document.querySelector('.chart-right'));
 var option2 = {
    title : {
        text: '热门品牌销售',
        subtext: '2018年7月',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['耐克','阿迪','特步','贵人鸟','安踏']
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:335, name:'耐克'},
                {value:310, name:'阿迪'},
                {value:234, name:'特步'},
                {value:135, name:'贵人鸟'},
                {value:1548, name:'安踏'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

myChart2.setOption(option2);