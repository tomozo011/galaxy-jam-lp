import Image from "next/image";

type Props = { onPurchase: () => void };

export default function CTA({ onPurchase }: Props) {
  return (
    <section id="purchase" className="relative py-24 px-6 bg-[#07001a] overflow-hidden">
      {/* 背景バナー画像 */}
      <div className="absolute inset-0">
        <Image
          src="/images/banner.png"
          alt=""
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07001a] via-[#07001a]/60 to-[#07001a]" />
      </div>

      {/* グロー */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-800 rounded-full opacity-20 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        {/* デコ */}
        <p className="text-purple-400 tracking-[0.3em] text-sm font-bold mb-4">✦ ORDER ✦</p>

        <h2 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight">
          今日から{" "}
          <span className="text-galaxy">銀河の朝食</span>{" "}
          を
        </h2>
        <p className="text-gray-400 mb-10 text-lg">
          毎朝のトーストが、特別な体験に変わる。
        </p>

        {/* 価格ボックス */}
        <div className="glass rounded-3xl px-10 py-8 mb-10 inline-block">
          <p className="text-gray-400 text-sm mb-1">通常価格</p>
          <p className="text-5xl font-black text-gold">¥1,280</p>
          <p className="text-gray-500 text-sm mt-1">税込 / 1瓶 230g</p>

          <div className="mt-5 flex flex-wrap justify-center gap-2">
            <span className="px-3 py-1 bg-purple-900/60 text-purple-300 rounded-full text-xs font-bold border border-purple-700">
              🚚 送料無料
            </span>
            <span className="px-3 py-1 bg-yellow-900/60 text-yellow-300 rounded-full text-xs font-bold border border-yellow-700">
              🎁 ギフト包装対応
            </span>
            <span className="px-3 py-1 bg-blue-900/60 text-blue-300 rounded-full text-xs font-bold border border-blue-700">
              ✅ 返金保証あり
            </span>
          </div>
        </div>

        {/* ボタン */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onPurchase}
            className="btn-galaxy px-12 py-4 text-white font-black text-lg rounded-full"
          >
            今すぐ購入する →
          </button>
          <a
            href="#"
            className="px-12 py-4 glass text-purple-200 font-bold text-lg rounded-full hover:bg-white/10 transition-all"
          >
            詳しく見る
          </a>
        </div>
      </div>
    </section>
  );
}
