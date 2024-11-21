/// <reference lib="dom" />
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterAll, afterEach, describe, expect, test } from "bun:test";
import core from "@actions/core";
import { questions } from "./middleQuestionTestData";

let sumPoint = 0;
const missTitles: string[] = [];
const missMessages: string[] = [];
describe("中間テスト", () => {
  afterAll(() => {
    console.log("misstitle", missTitles);
    console.log("missMessage", missMessages);
    core.setOutput(
      "jsOutput",
      sumPoint === 100
        ? `# ⭕ 合格
あなたの点数は100点中${sumPoint}点です。次のカリキュラムにすすみましょう！
[解答](https://github.com/codevillagejp/examinationAnswer/tree/main/testPaper/middle)`
        : sumPoint > 70
          ? `# ⭕ 合格
あなたの点数は100点中${sumPoint}点です。間違った部分の復習をして、次のカリキュラムに進みましょう
[解答](https://github.com/codevillagejp/examinationAnswer/tree/main/testPaper/middle)。

### 間違った問題
${missTitles.join("\n")}

### 復習ポイント
${Array.from(new Set(missMessages)).join("\n")}
`
          : `# ❌  不合格 
あなたの点数は100点中${sumPoint}点です。一度間違った部分をカリキュラムで復習して再チャレンジしましょう！。
再チャレンジするには再度pushするだけでokです!

### 間違った問題
${missTitles.join("\n")}

### 復習ポイント
${Array.from(new Set(missMessages)).join("\n")}
`,
    );
  });
  questions.forEach((question) => {
    switch (question.no) {
      case 1:
        describe.each(question.testCases)(
          question.title,
          ({ arg, result, point, hints }) => {
            test(`${question.func.name}(${JSON.stringify(
              arg,
            )}) returns ${JSON.stringify(result)}`, () => {
              try {
                expect(question.func(arg)).toBe(result);
                sumPoint += point;
              } catch (er) {
                if (!missTitles.includes(question.title)) {
                  missTitles.push(question.title);
                }
                hints.forEach((hint) => {
                  missMessages.push(hint);
                });
                throw er;
              }
            });
          },
        );
        break;
      case 2:
        describe.each(question.testCases)(
          question.title,
          ({ arg, result, point, hints }) => {
            test(`${question.func.name}(${JSON.stringify(
              arg,
            )}) returns ${JSON.stringify(result)}`, () => {
              try {
                expect(question.func(arg.price, arg.isTakeOut)).toBe(result);
                sumPoint += point;
              } catch (er) {
                if (!missTitles.includes(question.title)) {
                  missTitles.push(question.title);
                }
                hints.forEach((hint) => {
                  missMessages.push(hint);
                });
                throw er;
              }
            });
          },
        );
        break;
      case 3:
        describe.each(question.testCases)(
          question.title,
          ({ arg, result, point, hints }) => {
            test(`${question.func.name}([${JSON.stringify(
              arg,
            )}]) returns ${JSON.stringify(result)}`, () => {
              try {
                expect(question.func(arg)).toEqual(result);
                sumPoint += point;
              } catch (er) {
                if (!missTitles.includes(question.title)) {
                  missTitles.push(question.title);
                }
                hints.forEach((hint) => {
                  missMessages.push(hint);
                });
                throw er;
              }
            });
          },
        );
        break;
      case 4:
        describe.each(question.testCases)(
          question.title,
          ({ arg, result, point, hints }) => {
            test(`${question.func.name}(${JSON.stringify(
              arg,
            )}) returns ${JSON.stringify(result)}`, () => {
              try {
                expect(question.func(arg.array, arg.element)).toEqual(result);
                sumPoint += point;
              } catch (er) {
                if (!missTitles.includes(question.title)) {
                  missTitles.push(question.title);
                }
                hints.forEach((hint) => {
                  missMessages.push(hint);
                });
                throw er;
              }
            });
          },
        );
        break;
      case 5:
        describe.each(question.testCases)(
          question.title,
          ({ arg, result, point, hints, others: { body } }) => {
            test(`${question.func.name}(${JSON.stringify(arg)})`, () => {
              try {
                document.body.innerHTML = body;
                question.func(arg.id, arg.text);
                const div = document.getElementById(arg.id);
                expect(div?.textContent).toBe(result);
                sumPoint += point;
              } catch (er) {
                if (!missTitles.includes(question.title)) {
                  missTitles.push(question.title);
                }
                hints.forEach((hint) => {
                  missMessages.push(hint);
                });
                throw er;
              }
              document.body.innerHTML = "";
            });
          },
        );
        break;
      case 6:
        describe.each(question.testCases)(
          question.title,
          ({ arg, point, hints }) => {
            afterEach(cleanup);
            test(`${question.func.name}(${JSON.stringify(arg)})`, () => {
              try {
                const Component = question.func;
                const { getByRole } = render(
                  <Component userName={arg.userName} />,
                );
                const button = getByRole("button");
                const span = screen.getByText("田中");
                // 1 spanタグで作っているか
                expect(span.tagName).toBe("SPAN");
                // 3 クリックする前にspanタグにスタイルがついていないか
                expect(span.style.textDecoration).not.toBe("line-through");
                // 3 クリックした時にspanタグにスタイルがついているか
                expect(button.textContent).toBe("完了");
                fireEvent.click(button);
                expect(span.style.textDecoration).toBe("line-through");
                expect(button.textContent).toBe("完了取消");
                fireEvent.click(button);
                expect(button.textContent).toBe("完了");
                expect(span.style.textDecoration).not.toBe("line-through");

                sumPoint += point;
              } catch (er) {
                if (!missTitles.includes(question.title)) {
                  missTitles.push(question.title);
                }
                hints.forEach((hint) => {
                  missMessages.push(hint);
                });
                throw er;
              }
              document.body.innerHTML = "";
            });
          },
        );
        break;
      case 7:
        describe.each(question.testCases)(
          question.title,
          ({ arg, point, hints }) => {
            test(`${question.func.name}(${JSON.stringify(arg)})`, () => {
              try {
                //ulタグがあるか
                const Component = question.func;
                render(<Component userNames={arg.userNames} />);
                //ulがあるか
                expect(screen.queryByRole("list")?.tagName).toBe("UL");
                //自分というテキストが見つからないか
                arg.userNames.forEach((userName) => {
                  if (userName === "自分") {
                    expect(screen.queryByText("自分")).toBeNull();
                  } else {
                    expect(screen.queryByText(userName)).not.toBeNull();
                  }
                });
                const lists = screen.queryAllByRole("listitem");
                lists.forEach((li) => {
                  const button = li.querySelector("button");
                  const span = li.querySelector("span");
                  if (button && span) {
                    expect(span.style.textDecoration).not.toBe("line-through");
                    expect(button.textContent).toBe("完了");
                    fireEvent.click(button);
                    expect(button.textContent).toBe("完了取消");
                    expect(span.style.textDecoration).toBe("line-through");
                  } else {
                    throw "cannot use TestComponent1";
                  }
                });
                screen.debug();

                sumPoint += point;
              } catch (er) {
                if (!missTitles.includes(question.title)) {
                  missTitles.push(question.title);
                }
                hints.forEach((hint) => {
                  missMessages.push(hint);
                });
                throw er;
              }
              document.body.innerHTML = "";
            });
          },
        );
        break;
      default:
        return;
    }
  });
});
