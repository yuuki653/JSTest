import { createUserActionString } from "../testPaper/middle/question1";
import { priceCalculator } from "../testPaper/middle/question2";
import { sumAndAverage } from "../testPaper/middle/question3";
import { toggleArrayElement } from "../testPaper/middle/question4";
import { changeElementText } from "../testPaper/middle/question5";
import TestComponent1 from "../testPaper/middle/question6";
import TestComponent2 from "../testPaper/middle/question7";

type Question = {
  no: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  title: string;
  func: Function;
  testCases: {
    arg: unknown;
    result?: unknown;
    point: number;
    hints: string[];
    others?: Record<string, unknown>;
  }[];
};
export const questions = [
  {
    no: 1,
    func: createUserActionString,
    testCases: [
      {
        arg: { userName: "田中", action: "洗濯" },
        result: "田中さんが洗濯しました",
        point: 5,
        hints: [
          "- [ ] [文字列結合](https://cvo2.onrender.com/lectures/js-easy_js-basic#%e6%96%87%e5%ad%97%e5%88%97%e7%b5%90%e5%90%88)",
        ],
      },
      {
        arg: { action: "勉強" },
        result: "名無しさんが勉強しました",
        point: 5,
        hints: [
          "- [ ] [文字列結合](https://cvo2.onrender.com/lectures/js-easy_js-basic#%e6%96%87%e5%ad%97%e5%88%97%e7%b5%90%e5%90%88)",
          "- [ ] [条件分岐](https://cvo2.onrender.com/lectures/js-easy_js-basic#step3%e3%80%80%e6%9d%a1%e4%bb%b6%e5%88%86%e5%b2%90)",
        ],
      },
      {
        arg: { userName: "斎藤" },
        result: "斎藤さんは何もしませんでした",
        point: 5,
        hints: [
          "- [ ] [文字列結合](https://cvo2.onrender.com/lectures/js-easy_js-basic#%e6%96%87%e5%ad%97%e5%88%97%e7%b5%90%e5%90%88)",
          "- [ ] [条件分岐](https://cvo2.onrender.com/lectures/js-easy_js-basic#step3%e3%80%80%e6%9d%a1%e4%bb%b6%e5%88%86%e5%b2%90)",
        ],
      },
      {
        arg: {},
        result: "名無しさんは何もしませんでした",
        point: 5,
        hints: [
          "- [ ] [文字列結合](https://cvo2.onrender.com/lectures/js-easy_js-basic#%e6%96%87%e5%ad%97%e5%88%97%e7%b5%90%e5%90%88)",
          "- [ ] [条件分岐](https://cvo2.onrender.com/lectures/js-easy_js-basic#step3%e3%80%80%e6%9d%a1%e4%bb%b6%e5%88%86%e5%b2%90)",
        ],
      },
    ],
    title: "- 問題1:指定の文字列を完成させよう",
  },
  {
    //問題かえるかも
    no: 2,
    func: priceCalculator,
    testCases: [
      {
        arg: { price: 1500, isTakeOut: false },
        result: 1650,
        point: 6,
        hints: [
          "- [ ] [数値計算](https://developer.mozilla.org/ja/docs/Learn/JavaScript/First_steps/Math)",
        ],
      },
      {
        arg: { price: 2400, isTakeOut: true },
        result: 2592,
        point: 7,
        hints: [
          "- [ ] [条件分岐](https://cvo2.onrender.com/lectures/js-easy_js-basic#step3%e3%80%80%e6%9d%a1%e4%bb%b6%e5%88%86%e5%b2%90)",
          "- [ ] [数値計算](https://developer.mozilla.org/ja/docs/Learn/JavaScript/First_steps/Math)",
        ],
      },
      {
        arg: { price: 298, isTakeOut: false },
        result: 327,
        point: 7,
        hints: [
          "- [ ] [条件分岐](https://cvo2.onrender.com/lectures/js-easy_js-basic#step3%e3%80%80%e6%9d%a1%e4%bb%b6%e5%88%86%e5%b2%90)",
          "- [ ] [数値計算](https://developer.mozilla.org/ja/docs/Learn/JavaScript/First_steps/Math)",
          "- [ ] [四捨五入](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/round)",
        ],
      },
    ],
    title: "- 問題2:消費税を含めた料金を計算しよう",
  },
  {
    no: 3,
    func: sumAndAverage,
    testCases: [
      {
        arg: [1, 2, 3, 4, 5],
        result: { sum: 15, average: 3 },
        point: 20,
        hints: [
          "- [ ] [四捨五入](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/round)",
          "- [ ] [ループ](https://cvo2.onrender.com/lectures/js-easy_js-basic#step4%20%e3%83%ab%e3%83%bc%e3%83%97)",
          "- [ ] [オブジェクト](https://jsprimer.net/basic/object/)",
        ],
      },
    ],
    title: "- 問題3:合計値、平均値を出そう",
  },
  {
    no: 4,
    func: toggleArrayElement,
    testCases: [
      {
        arg: { array: [1, 2, 3, 4, 5], element: 2 },
        result: [1, 3, 4, 5],
        hints: [
          "- [ ] [配列の操作](https://cvo2.onrender.com/lectures/js-easy_js-basic#%e9%85%8d%e5%88%97%e3%81%ae%e6%93%8d%e4%bd%9c)",
          "- [ ] [条件分岐](https://cvo2.onrender.com/lectures/js-easy_js-basic#step3%e3%80%80%e6%9d%a1%e4%bb%b6%e5%88%86%e5%b2%90)",
        ],
        point: 10,
      },
      {
        arg: {
          array: ["aa", "bb", "cc", "dd", "ee", "ff", "gg"],
          element: "zz",
        },
        result: ["aa", "bb", "cc", "dd", "ee", "ff", "gg", "zz"],
        hints: [
          "- [ ] [配列の操作](https://cvo2.onrender.com/lectures/js-easy_js-basic#%e9%85%8d%e5%88%97%e3%81%ae%e6%93%8d%e4%bd%9c)",
          "- [ ] [条件分岐](https://cvo2.onrender.com/lectures/js-easy_js-basic#step3%e3%80%80%e6%9d%a1%e4%bb%b6%e5%88%86%e5%b2%90)",
        ],
        point: 10,
      },
    ],
    title: "- 問題4:配列内の特定の要素をトグルする関数を作ろう",
  },
  {
    no: 5,
    title: "- 問題5:要素のテキストを変更する関数を作ろう",
    func: changeElementText,
    testCases: [
      {
        arg: {
          id: "test",
          text: "こんにちは",
        },
        result: "こんにちは",
        hints: [
          "- [ ] [要素のテキストの編集,取得](https://cvo2.onrender.com/lectures/js-easy_dom#%e8%a6%81%e7%b4%a0%e3%81%ae%e6%83%85%e5%a0%b1%e3%82%92%e5%8f%96%e5%be%97%e3%81%99%e3%82%8b%e3%80%81%e6%93%8d%e4%bd%9c%e3%81%99%e3%82%8b)",
        ],
        point: 10,
        others: { body: "<div id='test'></div>" },
      },
      {
        arg: {
          id: "test2",
          text: "こんばんは",
        },
        others: {
          body: "<div></div>",
        },
        hints: [
          "- [ ] [要素の追加](https://cvo2.onrender.com/lectures/js-easy_dom#%e8%a6%81%e7%b4%a0%e3%81%ae%e8%bf%bd%e5%8a%a0)",
          "- [ ] [属性の追加](https://cvo2.onrender.com/lectures/js-easy_dom#%e8%a6%81%e7%b4%a0%e3%81%ae%e6%83%85%e5%a0%b1%e3%82%92%e5%8f%96%e5%be%97%e3%81%99%e3%82%8b%e3%80%81%e6%93%8d%e4%bd%9c%e3%81%99%e3%82%8b)",
          "- [ ] [要素の作成](https://cvo2.onrender.com/lectures/js-easy_dom#%e5%ad%90%e8%a6%81%e7%b4%a0%e3%82%92%e8%bf%bd%e5%8a%a0%e3%83%bb%e5%89%8a%e9%99%a4%e3%81%99%e3%82%8b)",
          "- [ ] [条件分岐](https://cvo2.onrender.com/lectures/js-easy_js-basic#step3%e3%80%80%e6%9d%a1%e4%bb%b6%e5%88%86%e5%b2%90)",
        ],
        point: 10,
        result: "こんばんは",
      },
    ],
  },
  {
    no: 6,
    title: "- 問題6:人の名前を表示してチェックできるようにしよう",
    func: TestComponent1,
    testCases: [
      {
        point: 10,
        arg: { userName: "田中" },
        hints: [
          "- [ ] [state](https://cvo2.onrender.com/lectures/React-Next-basic_lecture-01#state)",
          "- [ ] [三項演算子](https://cvo2.onrender.com/lectures/React-Next-basic_lecture-01#state%e3%81%ab%e3%82%88%e3%82%8b%e6%8f%8f%e5%86%99%e3%81%ae%e5%a4%89%e6%9b%b4)",
        ],
      },
    ],
  },
  {
    no: 7,
    title: "- 問題7:人の名前のチェックリストを作ろう",
    func: TestComponent2,
    testCases: [
      {
        point: 10,
        arg: {
          userNames: ["田中", "本田", "佐藤", "森", "林", "山田", "自分"],
        },
        hints: [
          "- [ ] [props](https://cvo2.onrender.com/lectures/React-Next-basic_lecture-01#props)",
          "- [ ] [条件分岐](https://cvo2.onrender.com/lectures/js-easy_js-basic#step3%e3%80%80%e6%9d%a1%e4%bb%b6%e5%88%86%e5%b2%90)",
          "- [ ] [Array.prototype.map](https://cvo2.onrender.com/lectures/React-Next-basic_lecture-02#array-prototype-map)",
          "- [ ] [key](https://cvo2.onrender.com/lectures/React-Next-basic_lecture-02#key)",
        ],
      },
    ],
  },
] satisfies Question[];
