# ひらがな れんしゅう

小学校低学年向けの ひらがな練習サービスです。
なぞる練習、書き順アニメーション、自由書きスペース、判定機能を提供します。

## 機能

- 五十音グリッドから練習したい文字を選択
- 書き順をアニメーションで表示
- なぞるブロック（テンプレート上をなぞる、書き順番号つき）
- カバレッジ判定（甘め判定: お手本の上を何%なぞれたか）
- 自由書きスペース（田の字ガイドつき）
- 描画リセットボタン
- 該当ひらがなを使った例単語＋絵文字表示

## 技術スタック

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Docker / Docker Compose

## 起動方法

```bash
docker compose up
```

ブラウザで <http://localhost:3000> を開きます。

初回起動時は `npm install` が自動実行されるため、少し時間がかかります。

## 開発

すべての開発は Docker コンテナ内で行います。

```bash
# コンテナ内でコマンド実行
docker compose exec web sh

# Lint
docker compose exec web npm run lint

# ビルド
docker compose exec web npm run build
```

## ディレクトリ構成

```
.
├── app/                     # Next.js App Router
│   ├── layout.tsx
│   ├── page.tsx             # 五十音グリッド (ホーム)
│   └── practice/[char]/
│       └── page.tsx         # 練習ページ
├── components/
│   ├── DrawingCanvas.tsx    # 共通: ポインタ入力で描画する canvas
│   ├── StrokeAnimation.tsx  # 書き順アニメーション (SVG)
│   ├── TraceCanvas.tsx      # なぞる枠＋判定
│   ├── FreeCanvas.tsx       # 自由書きスペース
│   └── WordExamples.tsx     # 例単語表示
├── lib/
│   ├── hiragana.ts          # 46文字データ＋書き順 SVG path
│   └── judge.ts             # カバレッジ判定ロジック
├── Dockerfile
├── docker-compose.yml
└── package.json
```

## 書き順データの拡張

`lib/hiragana.ts` の `HIRAGANA_LIST` の各エントリに `strokes` (SVG path d-attribute の配列) を追加するだけで、新しい文字の書き順練習を有効化できます。viewBox は `0 0 100 100` です。

現在 書き順データを同梱している文字: あ・い・う・え・お・か・き・く・け・こ・さ・し・す・せ・そ (15文字)

## 判定の仕組み

`lib/judge.ts` の `judgeTrace` は、お手本の各ストロークパスに沿って点をサンプリングし、ユーザーが描いたキャンバスの該当付近にインクがあるかを判定して、カバレッジ % を計算します。

- 85% 以上: はなまる
- 65% 以上: よくできました
- 40% 以上: もうすこし
- 40% 未満: もういちど
