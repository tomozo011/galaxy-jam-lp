"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// 静的な星
const STARS = Array.from({ length: 80 }, (_, i) => ({
  id: i,
  top: `${(i * 17 + 3) % 100}%`,
  left: `${(i * 23 + 7) % 100}%`,
  size: i % 5 === 0 ? "2px" : "1px",
  delay: `${(i * 0.37) % 4}s`,
  duration: `${2 + (i * 0.13) % 3}s`,
  opacity: 0.3 + (i % 7) * 0.1,
}));

type Props = { onPurchase: () => void };

export default function Hero({ onPurchase }: Props) {
  // ローディング演出ステート
  const [phase, setPhase] = useState<"black" | "reveal" | "done">("black");

  useEffect(() => {
    // 少し間を置いてから銀河を展開
    const t1 = setTimeout(() => setPhase("reveal"), 300);
    const t2 = setTimeout(() => setPhase("done"), 1800);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#000]">

      {/* ローディングオーバーレイ（暗転 → フェードアウト） */}
      <div
        className="absolute inset-0 z-50 bg-black pointer-events-none transition-opacity duration-[1500ms] ease-in-out"
        style={{ opacity: phase === "black" ? 1 : 0 }}
      />

      {/* 銀河フル背景画像 */}
      <div
        className="absolute inset-0 transition-all duration-[2000ms] ease-out"
        style={{
          transform: phase === "black" ? "scale(1.15)" : "scale(1)",
          opacity: phase === "black" ? 0 : 1,
        }}
      >
        <Image
          src="/images/banner.png"
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
        {/* オーバーレイ：左側を強く暗くして文字を読みやすく */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
      </div>

      {/* ネビュラグロー（ピンク×フクシア×紫） */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#ff1a8c] rounded-full opacity-20 blur-[160px]" />
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-[#c026d3] rounded-full opacity-25 blur-[130px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#7c3aed] rounded-full opacity-20 blur-[140px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-[#e879f9] rounded-full opacity-15 blur-[100px]" />
      </div>

      {/* 静的な星 */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {STARS.map((s) => (
          <div
            key={s.id}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              width: s.size, height: s.size,
              top: s.top, left: s.left,
              animationDelay: s.delay,
              animationDuration: s.duration,
              opacity: s.opacity,
            }}
          />
        ))}
      </div>

      {/* 流れ星 */}

      {/* メインコンテンツ（遅延フェードイン） */}
      <div
        className="relative z-20 w-full max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-10 transition-all duration-[1200ms] ease-out"
        style={{
          opacity: phase === "done" ? 1 : 0,
          transform: phase === "done" ? "translateY(0)" : "translateY(24px)",
          transitionDelay: "0ms",
        }}
      >
        {/* テキスト */}
        <div className="flex-1 text-center md:text-left">
          <div className="inline-block mb-6 px-5 py-2 glass-pink rounded-full text-pink-300 font-bold text-sm tracking-[0.25em]">
            ✦ NEW ARRIVAL ✦
          </div>

          <h1 className="font-black leading-none mb-6">
            {/* グロー用の影レイヤー（aria-hidden で読み上げ対象外） */}
            <span aria-hidden className="block text-[72px] md:text-[100px] leading-none font-black text-pink-400/40 blur-[6px] select-none absolute" style={{ letterSpacing: "-0.02em" }}>
              銀河果実
            </span>
            <span
              className="relative block text-[72px] md:text-[100px] text-galaxy leading-none"
              style={{ letterSpacing: "-0.02em" }}
            >
              銀河果実
            </span>
            <span className="block text-2xl md:text-3xl text-white font-bold tracking-[0.3em] mt-2" style={{ textShadow: "0 2px 12px rgba(0,0,0,1)" }}>
              いちごジャム
            </span>
          </h1>

          <div className="mb-8">
            <p className="text-2xl md:text-3xl text-white font-black tracking-wide mb-1" style={{ textShadow: "0 2px 16px rgba(0,0,0,1), 0 0 30px rgba(0,0,0,0.8)" }}>
              「銀河の煌めきを、
            </p>
            <p className="text-2xl md:text-3xl text-galaxy font-black tracking-wide">
              一口に」
            </p>
          </div>

          <p className="text-gray-200 text-sm md:text-base mb-10 leading-loose max-w-sm" style={{ textShadow: "0 1px 8px rgba(0,0,0,1)" }}>
            宇宙を閉じ込めたような輝くジャム。<br />
            完熟いちごと銀河グリッターが織りなす、<br />
            唯一無二の朝食体験。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button onClick={onPurchase} className="btn-galaxy px-10 py-4 text-white font-black text-lg rounded-full">
              今すぐ購入する →
            </button>
            <a href="#features" className="px-10 py-4 glass text-pink-200 font-bold text-lg rounded-full hover:bg-white/10 transition-all">
              詳しく見る
            </a>
          </div>
        </div>

        {/* 商品画像 */}
        <div className="flex-1 flex justify-center items-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full border border-pink-500/40 scale-110 animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-0 rounded-full border border-fuchsia-400/30 scale-125 animate-[spin_30s_linear_infinite_reverse]" />
            <div className="absolute inset-0 rounded-full bg-pink-600/20 blur-3xl scale-150 animate-glow-pulse" />

            <div className="animate-float relative w-72 h-72 md:w-[420px] md:h-[420px] rounded-full overflow-hidden shadow-[0_0_80px_rgba(255,26,140,0.7)]">
              <Image
                src="/images/jar-closed.png"
                alt="銀河果実 いちごジャム"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="absolute -top-4 -right-4 glass rounded-2xl px-4 py-2 text-sm font-black text-yellow-300 border border-yellow-500/30 animate-float" style={{ animationDelay: "1s" }}>
              ✨ キラキラ
            </div>
            <div className="absolute -bottom-4 -left-4 glass rounded-2xl px-4 py-2 text-sm font-black text-pink-300 border border-pink-500/30 animate-float" style={{ animationDelay: "2s" }}>
              🍓 完熟いちご
            </div>
          </div>
        </div>
      </div>

      {/* スクロール */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-pink-400 animate-bounce transition-opacity duration-1000"
        style={{ opacity: phase === "done" ? 1 : 0 }}
      >
        <span className="text-xs tracking-[0.3em]">SCROLL</span>
        <span className="text-lg">↓</span>
      </div>
    </section>
  );
}
