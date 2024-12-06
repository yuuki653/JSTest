/* eslint-disable no-unused-vars */
// - 問題3: 合計値、平均値を出そう
//    要素が数値の配列を引数として受け取り、
//    平均値(小数点第一位で四捨五入)、合計値を計算した結果のオブジェクトを返す関数を作ってください。

// 引数の例
// 1. [1,2,3,4,5]

// 返り値の例
// 1. {sum: 15,average:3}

/**
 * @param {number[]} array
 *  @return {{sum:number,average:number}}
 */
export const sumAndAverage = (array) => {
  let obj = {
    sum: array.reduce((sum, element) => sum + element),
    average: Math.round(
      array.reduce((sum, element) => sum + element) / array.length,
    ),
  };

  return obj;
};
