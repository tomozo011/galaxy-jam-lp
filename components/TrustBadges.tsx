const badges = [
  { icon: "🌿", title: "無添加・保存料不使用", desc: "食品添加物を一切使用しない自然素材100%" },
  { icon: "🏭", title: "国内工場製造", desc: "HACCP認証取得の衛生管理された国内工場で製造" },
  { icon: "✅", title: "30日間返金保証", desc: "万が一ご満足いただけない場合は全額返金対応" },
  { icon: "🚀", title: "最短翌日発送", desc: "平日14時までのご注文は翌営業日に発送します" },
  { icon: "🔒", title: "SSL暗号化通信", desc: "クレジットカード情報はすべて暗号化して保護" },
  { icon: "📞", title: "購入後サポート", desc: "メール・LINEで購入後のご質問にも対応します" },
];

export default function TrustBadges() {
  return (
    <section className="relative py-20 px-6 bg-[#0a0018] overflow-hidden">
      {/* 背景グロー */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#ff1a8c] opacity-8 blur-[120px]" />
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#c026d3] opacity-8 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* タイトル */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 glass-pink text-pink-300 rounded-full text-sm font-bold mb-4 tracking-widest">
            ✦ TRUST ✦
          </span>
          <h2 className="text-2xl md:text-4xl font-black text-white">
            安心して<span className="text-galaxy">お買い物</span>いただけます
          </h2>
        </div>

        {/* バッジグリッド */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {badges.map((badge, i) => (
            <div
              key={i}
              className="glass rounded-2xl p-5 flex items-start gap-4 hover:bg-white/5 transition-colors duration-200"
            >
              <span className="text-2xl flex-shrink-0 mt-0.5">{badge.icon}</span>
              <div>
                <p className="text-white font-black text-sm mb-1">{badge.title}</p>
                <p className="text-gray-400 text-xs leading-relaxed">{badge.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* メディア掲載 */}
        <div className="mt-14">
          <p className="text-center text-gray-500 text-xs tracking-widest mb-6">FEATURED IN</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {["トレンドニュース", "食べ物メディア", "コスメ・ライフスタイル誌", "SNSトレンドまとめ"].map((media, i) => (
              <div key={i} className="glass rounded-xl px-5 py-2.5 text-gray-400 text-sm font-bold opacity-60">
                {media}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
