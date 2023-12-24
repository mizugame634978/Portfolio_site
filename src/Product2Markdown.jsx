import * as React from "react";
import ReactMarkdown from "react-markdown";
import 'github-markdown-css/github-markdown.css';
import gfm from 'remark-gfm';


const markdownText = `

# なんのアプリ？
- スマブラでキャラクター対策（キャラ対）をするために、相手キャラごとに感想などを投稿
- 複数キャラ使いが相手のキャラに対してどのキャラを当てればよいかを勝率を表示することでサポート

# 開発した経緯
市場に自分のほしいと思ったアプリがなかったから
# 方向性
ユーザーが考えることを減らし、質を落としてでも記録を残してもらえるように作った
# 工夫した点
- キャラ数が多いのでPC、タブレット向けにUIを設計した
# 学んだ点:
- 理解が曖昧でもなんとなくわかるなら作り始めたが、この方法だとモティベーションを保ちやすいことが分かった。
- フレームワークがクラスからテーブルを作成する場合は、考えたテーブルをそのままクラスに書いてはいけないことがわかった。
# 今後の改善点
- 勝率などをグラフでみたい
- 期間で絞り込みたい
- 新作が出た時ように、投稿日時からverを自動挿入する機能
`;


export default function Markdown1() {
  return (
    <>
      <ReactMarkdown className="" remarkPlugins={[gfm]} children={markdownText} />
    </>
  );
}
