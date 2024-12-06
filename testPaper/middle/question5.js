/* eslint-disable no-unused-vars */
/// <reference lib="dom" />

// - 問題5:要素のテキストを変更する関数を作ろう
//    要素id(elementId)とテキスト(text)を引数として受け取ります。
//    受け取ったelementIdでdocumentからタグをさがして、あればそのタグのテキストを、引数で受け取ったtextに変えましょう。
//    もしそのタグが見つからなかった場合は引数で受け取ったidを持つdivタグをつくり引数で受け取ったtextに変更してbodyタグの子要素として追加しましょう。

/**
 * @param {string} elementId
 * @param {string} text
 */

export const changeElementText = (elementId, text) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.textContent = text;
  } else {
    const newElement = document.createElement("div");
    document.body.appendChild(newElement);
    newElement.id = elementId;
    const el = document.getElementById(elementId);
    el.textContent = text;
  }
};
