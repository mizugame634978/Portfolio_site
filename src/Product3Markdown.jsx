import * as React from "react";
import ReactMarkdown from "react-markdown";
import 'github-markdown-css/github-markdown.css';
import gfm from 'remark-gfm';


const markdownText = `

# 開発した経緯
- 履歴書に開発実績をかけない企業があったため
- 規模の大小を問わずReactで人に見せれるものを作りたかった
# 工夫点
- これらのプロダクトごとの個別ベージはマークダウンで既述できるようにした
# 今後の改善点
- 現在はマークダウンをjsの変数に直接記述している。これを別ファイルのマークダウンを読み込む形式にしたい
# その他
- muiを用いて開発する際にbootstrapの知識が少し活かせた
`;


export default function Markdown1() {
  return (
    <>
      <ReactMarkdown className="" remarkPlugins={[gfm]} children={markdownText} />
    </>
  );
}
