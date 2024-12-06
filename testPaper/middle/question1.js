/* eslint-disable no-unused-vars */
// - 問題1: **指定の文字列を完成させよう**
//    人の名前(userName)とその人が行う動作(action)の２つのプロパティを持つオブジェクトを引数に受け取り、
//    以下のような文字列を返す関数を完成させてください。
//    userNameに空文字("")か値が渡って来なかった時は人の名前を名無しに変更してください。
//    actionに空文字("")か値が渡って来なかった時は"~さんは何もしませんでした"に変更してください。

// 引数の例
// 1. {userName:"田中",action:"挨拶"}
// 2. {userName:"山田",action:"洗濯"}
// 3. {action:"勉強"} or {userName:"",action:"勉強"}
// 4. {userName:"佐藤"} or {userName:"佐藤",action:""}

// 返り値の例
// 1.田中さんが挨拶しました
// 2.山田さんが洗濯しました
// 3.名無しさんが勉強しました
// 4.佐藤さんは何もしませんでした

/**
 * @param {{userName?:string,action?:string}} object
 * @return {string}
 */

export const createUserActionString = (object) => {
  const userName = object.userName ? `${object.userName}さん` : "名無しさん";

  const action = object.action
    ? `が${object.action}しました`
    : "は何もしませんでした";

  return userName + action;
};
