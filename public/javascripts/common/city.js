//var cityData = [
//{
//value: '100000',
//text: '北京市',
//key: 'BJ',
//children: [{
//  value: "100000",
//  text: "北京市",
//  key:"BJ"
//}]
//},{
//value: '210000',
//text: '江苏省',
//key: 'JS',
//children: [{
//  value: "210000",
//  text: "南京市",
//  key: 'NJ'
//}]
//},{
//value: '200000',
//text: '上海市',
//key: 'SH',
//children: [{
//  value: "200000",
//  text: "上海市",
//  key: 'SH'
//}]
//}, {
//value: '510000',
//text: '广东省',
//key: 'GD',
//children: [{
//  value: "510000",
//  text: "广州市",
//  key: 'GZ'
//}, {
//  value: "518000",
//  text: "深圳市",
//  key: 'SZ'
//}]
//}
//]









// var city = [{
//     "name": "北京",
//     "sub": [
//       {
//         "name": "北京市",
//         "value": "100000",
//         "sub": [
//           {
//             "name": "全地区"
//           }
//         ],
//         "type": 0
//       }
//     ],
//     "type": 1
//   },{
//     "name": "上海",
//     "sub": [
//       {
//         "name": "上海市",
//         "value": "200000",
//         "sub": [
//           {
//             "name": "全地区"
//           }
//         ],
//         "type": 0
//       }
//     ],
//     "type": 1
//   },{
//     "name": "江苏省",
//     "sub": [
//       {
//         "name": "南京市",
//         "value": "210000",
//         "sub": [
//           {
//             "name": "全地区"
//           }
//         ],
//         "type": 0
//       }
//     ],
//     "type": 1
//   },{
//     "name": "广东省",
//     "sub": [
//       {
//         "name": "广州市",
//         "value": "510000",
//         "sub": [
//           {
//             "name": "全地区"
//           }
//         ],
//         "type": 0
//       },{
//         "name": "深圳市",
//         "value": "518000",
//         "sub": [
//           {
//             "name": "全地区"
//           }
//         ],
//         "type": 0
//       }
//     ],
//     "type": 1
// }

// ]


// var nameEl = document.getElementById('province');

// var first = []; /* 省，直辖市 */
// var second = []; /* 市 */
// var third = []; /* 镇 */

// var checked = [0, 0, 0]; /* 已选选项 */

// function creatList(obj, list){
//   obj.forEach(function(item, index, arr){
//   var temp = new Object();
//   temp.text = item.name;
//   temp.value = index;
//   list.push(temp);
//   })
// }

// creatList(city, first);

// if (city[0].hasOwnProperty('sub')) {
//   creatList(city[0].sub, second);
// } else {
//   second = [{text: '', value: 0}];
// }

// if (city[0].sub[0].hasOwnProperty('sub')) {
//   creatList(city[0].sub[0].sub, third);
// } else {
//   third = [{text: '', value: 0}];
// }

// var picker = new Picker({
// 	data: [first, second, third],
// 	selectedIndex: [0, 0, 0],
// 	title: '地址选择'
// });

// picker.on('picker.select', function (selectedVal, selectedIndex) {
//   var text1 = first[selectedIndex[0]].text;
//   var text2 = second[selectedIndex[1]].text;
//   var text3 = third[selectedIndex[2]] ? third[selectedIndex[2]].text : '';

// 	nameEl.innerText = text1 + ' ' + text2 + ' ' + text3;
// });

// picker.on('picker.change', function (index, selectedIndex) {
//   if (index === 0){
//     firstChange();
//   } else if (index === 1) {
//     secondChange();
//   }

//   function firstChange() {
//     second = [];
//     third = [];
//     checked[0] = selectedIndex;
//     var firstCity = city[selectedIndex];
//     if (firstCity.hasOwnProperty('sub')) {
//       creatList(firstCity.sub, second);
      
//       var secondCity = city[selectedIndex].sub[0]
//       if (secondCity.hasOwnProperty('sub')) {
//         creatList(secondCity.sub, third);
//       } else {
//         third = [{text: '', value: 0}];
//         checked[2] = 0;
//       }
//     } else {
//       second = [{text: '', value: 0}];
//       third = [{text: '', value: 0}];
//       checked[1] = 0;
//       checked[2] = 0;
//     }
    
//     picker.refillColumn(1, second);
//     picker.refillColumn(2, third);
//     picker.scrollColumn(1, 0)
//     picker.scrollColumn(2, 0)
//   }

//   function secondChange() {
//     third = [];
//     checked[1] = selectedIndex;
//     var first_index = checked[0];
//     if (city[first_index].sub[selectedIndex].hasOwnProperty('sub')) {
//       var secondCity = city[first_index].sub[selectedIndex];
//       creatList(secondCity.sub, third);
//       picker.refillColumn(2, third);
//       picker.scrollColumn(2, 0)
//     } else {
//       third = [{text: '', value: 0}];
//       checked[2] = 0;
//       picker.refillColumn(2, third);
//       picker.scrollColumn(2, 0)
//     }
//   }

// });

// picker.on('picker.valuechange', function (selectedVal, selectedIndex) {
//   console.log(selectedVal);
//   console.log(selectedIndex);
// });

// nameEl.addEventListener('click', function () {
// 	picker.show();
// });




