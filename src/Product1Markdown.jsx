import * as React from "react";
import ReactMarkdown from "react-markdown";
import 'github-markdown-css/github-markdown.css';
import gfm from 'remark-gfm';


const markdownText = `
# 開発の背景
- 私の開発理由
  - SEを目指すうえで、人に使われるサービスを作成したいと考えたため。
  - 大学で長いこと運用されるシステムを作成したいと思ったため
- 共同開発者数
  - 初期は9人で最終的には3人
- 期間
  - 2022年8月～2023年5月
  - 開発が本格的に動いたのは2023年1月から
# 内容/役割
DB設計と画面設計（チーム）、技術選定（チーム）を担当。
実際の開発ではslackで文章を送信する機能、本を借りる、削除する機能と画面を担当。
# 成果
長期的な運用保守を重視し、自分たちが卒業した後も研究室の生徒で運用できるように開発できた。
# 学んだ点
今回のチーム開発では、途中でリーダーが来なくなってから、全員のやるべきことが曖昧になった結果、モティベーションが落ちて、多くのメンバーが離脱した。
その際、自分がリーダーになり、やるべきことを大まかに決めた後、相手の意見を聞くことで、メンバーのやるべきことが明確になり、それ以降メンバーが離脱しなかった。
この経験からチーム開発をする上では周りを指揮できるリーダーと、メンバーのモティベーションが大事だということが分かった。
# 所感
そもそもの話でリーダーの経験がないメンバーしかいない場合はチームの人数が多いと、リーダーの役割を果たしづらいと思った。
またアプリの見た目やアニメーションに興味を持ち、フロントエンドの技術を学ぶようになった。
`;


export default function Markdown1() {
  return (
    <>
      <ReactMarkdown className="" remarkPlugins={[gfm]} children={markdownText} />
    </>
  );
}
