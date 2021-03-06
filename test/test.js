'use strict';
const expect = require('chai').expect;
const YaxisTransformer = require('../dist/YAxisTransformer').YAxisTransformer
const AxisHelper = require('../dist/AxisHelper')

/* 
describe('yaxis transform test 1', () => {
  it('result ', () => {

    const yaxisTransformer = new YaxisTransformer([100, 22555])
    let transformResult = yaxisTransformer
      .withCount(3)
      .withMinToZero(false)
      .withFormatRuler((data, decimal) => {
        return data.toFixed(decimal)
      })
      .withUnitSet([{
        range: 10000,
        unit: "万"
      }])
      .transform()

    expect(transformResult.adviseDecimal).equal(2)
    expect(transformResult.data).deep.equal([100, 10100, 20100, 30100]).deep
    expect(transformResult.dataUnit).deep.equal(['0.01万', '1.01万', '2.01万', '3.01万']).deep
  });
});

describe('yaxis transform test 2', () => {
  it('result ', () => {

    const yaxisTransformer = new YaxisTransformer([1542, 6100])
    let transformResult = yaxisTransformer
      .withCount(3)
      .withMinToZero(false)
      .withUnitFollowMax(false)
      .withFormatRuler((data, decimal) => {
        return data.toFixed(decimal)
      })
      .withUnitSet([{
        range: 10000,
        unit: "万"
      }])
      .transform()

    expect(transformResult.adviseDecimal).equal(0)
    expect(transformResult.data).deep.equal([1000, 3000, 5000, 7000]).deep
    expect(transformResult.dataUnit).deep.equal(['1000', '3000', '5000', '7000']).deep


  });
});


describe('yaxis transform test 3', () => {
  it('result ', () => {

    const yaxisTransformer = new YaxisTransformer([100, 22555])
    let transformResult = yaxisTransformer
      .withCount(3)
      .withMinToZero(false)
      .withUnitFollowMax(false)
      .withFormatRuler((data, decimal) => {
        return data.toFixed(decimal)
      })
      .withUnitSet([{
        range: 10000,
        unit: "万"
      }])
      .transform()

    expect(transformResult.adviseDecimal).equal(0)
    expect(transformResult.data).deep.equal([100, 10100, 20100, 30100]).deep
    expect(transformResult.dataUnit).deep.equal(['100', '10100', '20100', '30100']).deep


  });
});


describe('yaxis transform test 4', () => {
  it('result ', () => {

    const yaxisTransformer = new YaxisTransformer([100, 22555])
    let transformResult = yaxisTransformer
      .withCount(3)
      .withMinToZero(true)
      .withFormatRuler((data, decimal) => {
        return data.toFixed(decimal)
      })
      .withUnitSet([{
        range: 10000,
        unit: "万"
      }])
      .transform()

    expect(transformResult.adviseDecimal).equal(0)
    expect(transformResult.data).deep.equal([0, 10000, 20000, 30000]).deep
    expect(transformResult.dataUnit).deep.equal(['0', '1万', '2万', '3万']).deep
  });
});

describe('yaxis transform test 5', () => {
  it('result ', () => {

    const yaxisTransformer = new YaxisTransformer([0.25, 0, 0, 0.00990099009900991, 0, 0.010101010101010166])
    let transformResult = yaxisTransformer
      .withCount(3)
      .withMinToZero(true)
      .withUnitSet([{
        range: 10000,
        unit: "万"
      }])
      .transform()

    expect(transformResult.adviseDecimal).equal(1)
    expect(transformResult.data).deep.equal([0, 0.1, 0.2, 0.30000000000000004]).deep
    expect(transformResult.dataUnit).deep.equal(['0', '0.1', '0.2', '0.3']).deep
  });
});

describe('yaxis transform test 7', () => {
  it('result ', () => {

    const yaxisTransformer = new YaxisTransformer([0.5, 6.5])
    let transformResult = yaxisTransformer
      .withCount(3)
      .withMinToZero(false)
      .transform()

    expect(transformResult.adviseDecimal).equal(1)
    expect(transformResult.data).deep.equal([0.5, 2.5, 4.5, 6.5]).deep
    expect(transformResult.dataUnit).deep.equal(['0.5', '2.5', '4.5', '6.5']).deep
  });
});


describe('yaxis transform test 8', () => {
  it('result ', () => {

    const yaxisTransformer = new YaxisTransformer([
      -0.1110716308666484,
      -0.08482853616429809,
      -0.09731445038757636,
      -0.12409227113546528,
      -0.10157881013488756,
      -0.12611438359020577
    ])
    let transformResult = yaxisTransformer
      .withCount(3)
      .withMinToZero(false)
      .withKeepZeroDecimal(false)
      .transform()

    expect(transformResult.adviseDecimal).equal(2)
    expect(transformResult.dataUnit).deep.equal(['-0.15', '-0.10', '-0.05', '0']).deep
  });
});


describe('yaxis transform test 9', () => {
  it('result ', () => {

    const yaxisTransformer = new YaxisTransformer([
      123456789,
      10000
    ])
    let transformResult = yaxisTransformer
      .withMinToZero(false)
      .withMaxDecimal(3)
      .withKeepZeroDecimal(false)
      .transform()

    expect(transformResult.adviseDecimal).equal(3)
    expect(transformResult.dataUnit).deep.equal(['0', '0.500亿', '1.000亿', '1.500亿', '2.000亿']).deep
  });
});

describe('yaxis transform test 10', () => {
  it('result ', () => {

    const yaxisTransformer = new YaxisTransformer([
      123456789,
      10000
    ])

    let transformResult = yaxisTransformer
      .withMinToZero(false)
      .withKeepZeroDecimal(false)
      .transform()

    expect(transformResult.adviseDecimal).equal(4)
    expect(transformResult.min).equal(10000)
    expect(transformResult.max).equal(200010000)
    expect(transformResult.unit).deep.equal({unit:"亿", range:100000000}).deep
    expect(transformResult.dataUnit).deep.equal(['0.0001亿', '0.5001亿', '1.0001亿', '1.5001亿', '2.0001亿']).deep

  });
});

describe('yaxis transform test 11', () => {
  it('result ', () => {

    const yaxisTransformer = new YaxisTransformer()

    let transformResult = yaxisTransformer
      .withMinMaxData(-0.142, 0.181)
      .withMinToZero(false)
      .withKeepZeroDecimal(false)
      .transform()

    expect(AxisHelper.getDecimalNum(1)).equal(0)
    expect(AxisHelper.getDecimalNum(-0.14)).equal(2)
    expect(AxisHelper.getDecimalNum(1.567)).equal(3)
    expect(transformResult.dataUnit).deep.equal(['-0.2', '-0.1', '0', '0.1', '0.2']).deep

  });
});

describe('yaxis transform test 12', () => {
  it('test positive ', () => {

    const yaxisTransformer = new YaxisTransformer()

    let transformResult = yaxisTransformer
      .withMinMaxData(9.7457674E9, 9.7457674E9)
      .transform()

    expect(transformResult.dataUnit).deep.equal(['-1', '0', '1', '2', '3']).deep

  });
}); */

  describe('pre handle min', () => {
  it('test baseGen ', () => {

    const array = [
      {x:70.91, y:72.91},
      {x:30.9, y:108},
      {x:0.363, y:0.667},
      {x:0.34, y:0.439}, 
      {x:0.034, y:0.439}, 
      {x:201.7, y:450.2},
      {x:201.7, y:850.2},      
      {x:0.484, y:0.649},
      {x:0.58, y:1.24},
      {x:58, y:124},
      {x:3302, y:8000},
      {x:3.1, y:12.8},
      {x:0.8, y:4.8},
      {x:4.7, y:8.5},
      {x:173, y:926},
      {x:52, y:218},
      {x:52, y:218},
      {x:4, y:10},
      {x:23, y:42},
      {x:442, y:550},
      {x:17.9, y:22.7},
      {x:80, y:200},
      {x:-20, y:80},
      {x:-200, y:-80},
      {x:-2, y:0},
      {x:-2, y:-0.5},
      {x:0.183, y:0.227},
      {x:4, y:21},
      {x:4, y:21},
      {x:3.3, y:4.2},
      {x:4.5, y:6.4},
      {x:29.5, y:42},
      {x:0.01, y:0.07},
      {x:0.8, y:19.9},
      {x:0.005, y:0.11},
      {x:0.003, y:0.076},
      {x:13, y:16},
      {x:4267, y:4383},
      {x:-0.003, y:0.119},
      {x:23, y:60},
      {x:23, y:114},
      {x:23, y:138},
      {x:23000000, y:138000000},
      {x:6520, y:13800},
      {x:100, y:9900},
      {x:42670, y:43800},
      {x:9000, y:10800},
      {x:14.5, y:14.5},
      {x:0, y:0},
      {x:0.096, y:0.096},
      {x:3.2589, y:3.6549},
      {x:3.2589, y:3.6549},
      {x:1566849695.4393, y:5231202333.9184 },
      {x:15, y:52 },
      {x:-9727404112.48, y:2920489549.08 },
      {x:-0.2923, y:0.0093 },
      {x:0.3274969378504763, y:0.5411613159439665 },
      {x:-0.5258, y:0.0071}
    ]
    
  

    const yaxisTransformer = new YaxisTransformer()
    array.forEach((item) => {
      const result = yaxisTransformer.withMinMaxData(item.x, item.y)
      .transform()
  
      console.log(JSON.stringify(result.dataUnit)  + "\n")
    })

  });

})  
