import Image from "next/image";

const features = [
  {
    icon: "🍓",
    title: "完熟いちご100%使用",
    desc: "厳選された完熟いちごだけを使用。果物本来の甘さと酸味が口いっぱいに広がります。",
    color: "from-pink-600 to-rose-500",
  },
  {
    icon: "✨",
    title: "キラキラ銀河グリッター",
    desc: "食用グリッターを使用した特製ジャム。パンに塗るたびに銀河が広がる特別体験。",
    color: "from-purple-600 to-indigo-500",
  },
  {
    icon: "🎀",
    title: "SNS映えパッケージ",
    desc: "写真を撮りたくなる星空デザインの瓶。開けた瞬間から「かわいい！」が止まらない。",
    color: "from-yellow-500 to-amber-500",
  },
  {
    icon: "🌿",
    title: "無添加・保存料不使用",
    desc: "体に優しい自然素材だけで作った安心ジャム。毎朝の朝食に罪悪感ゼロ。",
    color: "from-teal-500 to-cyan-500",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 px-6 bg-[#0a0018]">
      {/* 背景グロー */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#ff1a8c] rounded-full opacity-15 blur-[120px]" />
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#c026d3] rounded-full opacity-20 blur-[110px]" />
        <div className="absolute bottom-0 left-1/2 w-60 h-60 bg-[#e879f9] rounded-full opacity-10 blur-[90px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* タイトル */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 glass-pink text-pink-300 rounded-full text-sm font-bold mb-4 tracking-widest">
            ✦ FEATURES ✦
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white">
            4つの{" "}
            <span className="text-galaxy">こだわり</span>
          </h2>
        </div>

        {/* 2カラムレイアウト */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* 左：画像 */}
          <div className="relative">
            <div className="relative w-full aspect-square max-w-md mx-auto rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-transparent z-10 rounded-3xl" />
              <Image
                src="/images/jar-open.png"
                alt="銀河果実ジャム 開封"
                fill
                className="object-cover"
              />
            </div>
            {/* グローリング */}
            <div className="absolute inset-0 rounded-3xl bg-purple-500/10 blur-xl -z-10" />
          </div>

          {/* 右：カード */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <div
                key={i}
                className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-200 group"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center text-2xl mb-4 shadow-lg`}
                >
                  {f.icon}
                </div>
                <h3 className="text-white font-black text-sm mb-2">{f.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
