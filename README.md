# 銀河果実 いちごジャム LP

架空商品「銀河果実 いちごジャム」のランディングページ。ポートフォリオ用。

## 起動手順

### 1. Node.js のインストール

[https://nodejs.org](https://nodejs.org) から LTS 版をダウンロードしてインストール。

> インストール中に **「Add to PATH」にチェックが入っていること**を確認。

インストール後は **PC を再起動**する。

### 2. インストール確認

ターミナルで以下を実行し、バージョンが表示されればOK。

```bash
node --version
npm --version
```

### 3. 依存パッケージのインストール

```bash
cd "c:/Users/tomoh/OneDrive/デスクトップ/AIプロジェクト/LP_ポートフォリオ/lp-site"
npm install
```

### 4. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3001](http://localhost:3001) を開く。

---

## トラブルシューティング

### `npm` が認識されない場合

- Node.js を再インストールし、PC を再起動する
- それでも解決しない場合は、VSCode を**管理者として実行**してターミナルを開き直す
