"use client";

import { useState } from "react";

const faqs = [
  {
    q: "どんな味ですか？",
    a: "完熟いちごの甘さと程よい酸味が楽しめます。果肉感たっぷりで、いちご本来の風味が口いっぱいに広がります。",
  },
  {
    q: "キラキラはどこから来ていますか？",
    a: "食品グレードの食用パール（マイカ由来）を使用しています。安全性が確認された素材のみ使用しているので安心してお召し上がりください。",
  },
  {
    q: "賞味期限はどのくらいですか？",
    a: "未開封で製造から12ヶ月です。開封後は冷蔵保存で2週間以内にお召し上がりください。",
  },
  {
    q: "アレルギーが心配です",
    a: "本製品はいちご・砂糖・食用グリッターのみを使用しています。製造工場では乳製品・小麦・大豆を含む製品を製造しておりますのでご注意ください。",
  },
  {
    q: "ギフトとして購入できますか？",
    a: "はい！ギフトボックスへの有料変更が可能です。誕生日・バレンタイン・ホワイトデーなどに大変人気です。",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="relative py-24 px-6 bg-[#0a0018]">
      {/* グロー */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#ff1a8c] rounded-full opacity-15 blur-[110px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#c026d3] rounded-full opacity-12 blur-[90px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* タイトル */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1 glass-pink text-pink-300 rounded-full text-sm font-bold mb-4 tracking-widest">
            ✦ FAQ ✦
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white">
            よくある{" "}
            <span className="text-galaxy">ご質問</span>
          </h2>
        </div>

        {/* アコーディオン */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="glass rounded-2xl overflow-hidden">
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left font-bold text-white hover:bg-white/5 transition-colors duration-150"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="flex items-center gap-3">
                  <span className="text-pink-400 font-black">Q.</span>
                  {faq.q}
                </span>
                <span
                  className={`text-pink-400 text-xl transition-transform duration-200 flex-shrink-0 ${open === i ? "rotate-45" : "rotate-0"}`}
                >
                  ＋
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-gray-300 text-sm leading-relaxed border-t border-white/10 pt-4">
                  <span className="text-pink-400 font-black mr-2">A.</span>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
