"use client";

import { useState, useRef, useEffect } from "react";

type Message = {
  role: "bot" | "user";
  text: string;
};

// キーワードと回答のマッピング
const FAQ_RESPONSES: { keywords: string[]; answer: string }[] = [
  {
    keywords: ["味", "どんな", "おいしい", "美味"],
    answer: "完熟いちごの甘さと程よい酸味が楽しめます🍓 果肉感たっぷりで、いちご本来の風味が口いっぱいに広がります！",
  },
  {
    keywords: ["キラキラ", "グリッター", "光", "輝き", "ピカピカ"],
    answer: "食品グレードの食用パール（マイカ由来）を使用しています✨ 安全性が確認された素材のみなので安心してお召し上がりください！",
  },
  {
    keywords: ["賞味期限", "期限", "いつまで", "保存"],
    answer: "未開封で製造から12ヶ月です📦 開封後は冷蔵保存で2週間以内にお召し上がりください。",
  },
  {
    keywords: ["アレルギー", "アレルゲン", "小麦", "乳", "大豆"],
    answer: "本製品はいちご・砂糖・食用グリッターのみ使用しています。ただし製造工場では乳製品・小麦・大豆を含む製品も製造しておりますのでご注意ください⚠️",
  },
  {
    keywords: ["ギフト", "プレゼント", "贈り物", "誕生日", "包装"],
    answer: "ギフトボックスへの変更が可能です🎁 誕生日・バレンタイン・ホワイトデーなどに大人気です！ご購入時にオプションをご選択ください。",
  },
  {
    keywords: ["値段", "価格", "いくら", "円"],
    answer: "1瓶（230g）¥1,280（税込）です💜 送料無料でお届けします！",
  },
  {
    keywords: ["送料", "配送", "届く", "発送", "いつ"],
    answer: "送料は無料です🚚 ご注文から2〜3営業日以内に発送いたします。",
  },
  {
    keywords: ["返金", "返品", "交換"],
    answer: "万が一商品に不備があった場合は返金・交換対応しております✅ お問い合わせページよりご連絡ください。",
  },
  {
    keywords: ["購入", "買い方", "注文", "どこで"],
    answer: "ページ上部または下部の「今すぐ購入する」ボタンからご注文いただけます🛒",
  },
];

const FALLBACK = "申し訳ありません、その質問にはまだ対応していません😢 詳しくはお問い合わせページよりご連絡ください。";

const SUGGESTIONS = ["味は？", "キラキラの正体は？", "賞味期限は？", "ギフト対応してる？", "いくら？"];

function getBotReply(input: string): string {
  const normalized = input.replace(/[？?！!。、\s]/g, "");
  for (const faq of FAQ_RESPONSES) {
    if (faq.keywords.some((kw) => normalized.includes(kw))) {
      return faq.answer;
    }
  }
  return FALLBACK;
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: "こんにちは！✨ 銀河果実のチャットボットです。気になることを何でも聞いてね🍓" },
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const send = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { role: "user", text };
    const botMsg: Message = { role: "bot", text: getBotReply(text) };
    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  };

  return (
    <>
      {/* チャットウィンドウ */}
      {open && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-[340px] sm:w-[380px] flex flex-col rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(168,85,247,0.4)] border border-purple-500/30"
          style={{ maxHeight: "520px" }}
        >
          {/* ヘッダー */}
          <div className="flex items-center justify-between px-5 py-4 bg-gradient-to-r from-purple-900 to-indigo-900 border-b border-purple-500/30">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-lg shadow">
                🍓
              </div>
              <div>
                <p className="text-white font-black text-sm">銀河果実 サポート</p>
                <p className="text-purple-300 text-xs">よくある質問に答えます</p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="text-gray-400 hover:text-white transition-colors text-xl leading-none">
              ✕
            </button>
          </div>

          {/* メッセージエリア */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-[#0d0020]" style={{ minHeight: "260px", maxHeight: "320px" }}>
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                {msg.role === "bot" && (
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-sm mr-2 flex-shrink-0 mt-1">
                    🍓
                  </div>
                )}
                <div
                  className={`max-w-[75%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    msg.role === "bot"
                      ? "bg-white/10 text-gray-100 rounded-tl-sm"
                      : "bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-tr-sm"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* サジェスト */}
          <div className="px-4 py-2 flex gap-2 overflow-x-auto bg-[#0a001a] border-t border-white/5">
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                onClick={() => send(s)}
                className="flex-shrink-0 px-3 py-1.5 glass rounded-full text-purple-300 text-xs font-bold hover:bg-white/10 transition-all border border-purple-500/30"
              >
                {s}
              </button>
            ))}
          </div>

          {/* 入力エリア */}
          <div className="px-4 py-3 bg-[#0a001a] border-t border-white/10 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send(input)}
              placeholder="メッセージを入力..."
              className="flex-1 bg-white/10 text-white text-sm rounded-full px-4 py-2 outline-none placeholder-gray-500 border border-white/10 focus:border-purple-500/60 transition-colors"
            />
            <button
              onClick={() => send(input)}
              disabled={!input.trim()}
              className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white disabled:opacity-30 hover:scale-110 transition-all shadow"
            >
              ↑
            </button>
          </div>
        </div>
      )}

      {/* フローティングボタン */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-4 sm:right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-2xl shadow-[0_0_24px_rgba(168,85,247,0.6)] hover:scale-110 transition-all"
      >
        {open ? "✕" : "💬"}
      </button>
    </>
  );
}
