"use client";

import { useEffect } from "react";

type Props = {
  onClose: () => void;
};

export default function FictionalModal({ onClose }: Props) {
  // ESCキーで閉じる
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      onClick={onClose}
    >
      {/* 背景オーバーレイ */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* モーダル本体 */}
      <div
        className="relative glass rounded-3xl p-8 max-w-sm w-full text-center border border-purple-500/30 shadow-[0_0_60px_rgba(168,85,247,0.3)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* アイコン */}
        <div className="text-5xl mb-4">🍓✨</div>

        {/* タイトル */}
        <h2 className="text-xl font-black text-white mb-3">
          こちらは架空の商品です
        </h2>

        {/* 説明 */}
        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          「銀河果実 いちごジャム」はポートフォリオ用に制作した架空の商品です。実際の購入はできません。
        </p>

        {/* 閉じるボタン */}
        <button
          onClick={onClose}
          className="btn-galaxy w-full py-3 rounded-full text-white font-black text-sm"
        >
          閉じる
        </button>
      </div>
    </div>
  );
}
