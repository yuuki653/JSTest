/* eslint-disable no-unused-vars */
// 問6:**人の名前を表示してチェックできるようにしよう**
//    propsとして渡ってくるuserName:人の名前(文字列)を表示するコンポーネントを完成させてください。
//    また、このコンポーネントには以下のような機能をつけてください。
// 1. 親のタグはliタグにしてください。
// 2. 名前を表示する部分のタグはspanタグにしましょう。
// 3. spanタグの横(左右どちらでも)にbuttonを配置しましょう。
// 4. buttonには完了という文字が表示されるようにしましょう・
// 5. buttonをクリックしたら、spanタグに打ち消し線が入るようにしてbuttonは完了取消という文字に変更しましょう
// 6. 再度buttonをクリックしたら、spanタグの打消線が消え、buttonの文字は完了に戻しましょう。
// 7. styleの付け方はインラインスタイルを適応してください。

/**
 * @param {{userName:string}} props
 * @returns {ReactNode}
 */
import { useState } from "react";

const TestComponent1 = ({ userName }) => {
  const [isFinished, setIsFinishes] = useState("完了");

  const handleClick = () => {
    setIsFinishes((text) => (text === "完了" ? "完了取消" : "完了"));
  };

  return (
    <li>
      <span
        style={{
          textDecoration: isFinished === "完了" ? "none" : "line-through",
        }}
      >
        {userName}
      </span>
      <button onClick={handleClick}>{isFinished}</button>
    </li>
  );
};

export default TestComponent1;
