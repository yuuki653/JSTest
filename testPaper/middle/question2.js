/* eslint-disable no-unused-vars */
// - 問題2: **消費税を含めた料金を計算しよう**
//    引数に料金(数値)を表すpriceと持ち帰りかどうか(真偽値)を表すisTakeOutを受け取りその消費税を計算して返す関数を完成させてください。
//    持ち帰りの場合は 8パーセントの税率です。
//    持ち帰りでない場合は 10ーパーセントの税率です。
//    1円未満の端数があるときは、その端数を切り捨てるとする。

// 引数の例
// 1. price:100 ,isTakeOut:true
// 2. price:100 ,isTakeOut:false

// 返り値の例
// 1. 108
// 2. 110

/**
 * @param {number} price
 * @param {boolean} isTakeOut
 *
 *  @return {number}
 */

export const priceCalculator = (price, isTakeOut) => {
  if (isTakeOut) {
    return Math.floor(price * 1.08);
  }
  if (!isTakeOut) {
    return Math.floor(price * 1.1);
  }
};
