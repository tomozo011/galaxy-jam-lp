import Image from "next/image";

const lineup = [
  {
    name: "オリジナル",
    subname: "銀河いちごジャム",
    desc: "定番の完熟いちご×銀河グリッター。まずはここから始めてください。",
    price: "¥1,280",
    badge: "人気No.1",
    badgeColor: "bg-pink-600",
    glow: "rgba(255,26,140,0.6)",
    border: "border-pink-500/50",
    img: "/images/jar-closed.png",
    tags: ["いちご", "グリッター", "定番"],
  },
  {
    name: "プレミアム",
    subname: "宇宙いちごジャム",
    desc: "希少な白いちごをブレンド。グリッターも3色に輝くスペシャル仕様。",
    price: "¥1,980",
    badge: "限定品",
    badgeColor: "bg-violet-600",
    glow: "rgba(139,92,246,0.6)",
    border: "border-violet-500/50",
    img: "/images/jar-premium.png",
    tags: ["白いちご", "3色グリッター", "数量限定"],
  },
  {
    name: "ギフトセット",
    subname: "2本入りBOX",
    desc: "オリジナル＋プレミアムのセット。星空デザインのBOX付きで贈り物に最適。",
    price: "¥3,480",
    badge: "贈り物に",
    badgeColor: "bg-amber-600",
    glow: "rgba(245,158,11,0.5)",
    border: "border-amber-500/50",
    img: "/images/jar-giftset.png",
    tags: ["2本セット", "専用BOX", "ラッピング対応"],
  },
];

export default function Lineup() {
  return (
    <section className="relative py-24 px-6 bg-[#07001a] overflow-hidden">
      {/* 背景グロー */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#ff1a8c] opacity-8 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* タイトル */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 glass-pink text-pink-300 rounded-full text-sm font-bold mb-4 tracking-widest">
            ✦ LINEUP ✦
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white">
            商品<span className="text-galaxy">ラインナップ</span>
          </h2>
        </div>

        {/* カード */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {lineup.map((item, i) => (
            <div
              key={i}
              className={`relative glass rounded-3xl overflow-hidden border ${item.border} hover:scale-[1.02] transition-transform duration-300`}
              style={{ boxShadow: `0 0 40px ${item.glow}22` }}
            >
              {/* バッジ */}
              <div className={`absolute top-4 left-4 z-20 ${item.badgeColor} text-white text-xs font-black px-3 py-1 rounded-full`}>
                {item.badge}
              </div>

              {/* 商品画像 */}
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0" style={{ background: `radial-gradient(circle at center, ${item.glow.replace("0.6", "0.15")} 0%, transparent 70%)` }} />
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-contain py-4 px-8"
                />
              </div>

              {/* テキスト */}
              <div className="p-6">
                <p className="text-gray-400 text-xs font-bold tracking-widest mb-1">{item.name}</p>
                <h3 className="text-white font-black text-lg mb-2">{item.subname}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{item.desc}</p>

                {/* タグ */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {item.tags.map((tag, j) => (
                    <span key={j} className="text-xs px-2 py-0.5 glass rounded-full text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* 価格 */}
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-2xl font-black text-gold">{item.price}</p>
                    <p className="text-gray-600 text-xs">税込 / 送料無料</p>
                  </div>
                  <button className="btn-galaxy px-5 py-2 text-white font-black text-sm rounded-full">
                    購入する
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
