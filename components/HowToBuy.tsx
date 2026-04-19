const steps = [
  {
    num: "01",
    icon: "🛒",
    title: "商品を選ぶ",
    desc: "オリジナル・プレミアム・ギフトセットの中からお好みを選択。",
  },
  {
    num: "02",
    icon: "📝",
    title: "注文情報を入力",
    desc: "お名前・住所・支払い方法を入力するだけ。3分で完了します。",
  },
  {
    num: "03",
    icon: "📦",
    title: "ご自宅に届く",
    desc: "注文から2〜3日でお届け。専用ボックスで丁寧にお包みします。",
  },
];

export default function HowToBuy() {
  return (
    <section className="relative py-24 px-6 bg-[#07001a] overflow-hidden">
      {/* 背景グロー */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-60 bg-[#ff1a8c] opacity-8 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* タイトル */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 glass-pink text-pink-300 rounded-full text-sm font-bold mb-4 tracking-widest">
            ✦ HOW TO BUY ✦
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white">
            かんたん<span className="text-galaxy">3ステップ</span>
          </h2>
        </div>

        {/* ステップ */}
        <div className="relative flex flex-col md:flex-row gap-6 md:gap-0 items-stretch">
          {/* 接続線（デスクトップのみ） */}
          <div className="hidden md:block absolute top-14 left-[calc(16.66%+1rem)] right-[calc(16.66%+1rem)] h-px bg-gradient-to-r from-pink-600/30 via-fuchsia-500/60 to-pink-600/30 z-0" />

          {steps.map((step, i) => (
            <div key={i} className="flex-1 relative z-10 flex flex-col items-center text-center px-4">
              {/* ナンバーサークル */}
              <div className="w-28 h-28 rounded-full glass-pink flex flex-col items-center justify-center mb-6 relative"
                style={{ boxShadow: "0 0 30px rgba(255,26,140,0.3)" }}>
                <span className="text-3xl">{step.icon}</span>
                <span className="text-pink-400 font-black text-xs tracking-widest mt-1">STEP {step.num}</span>
              </div>

              <h3 className="text-white font-black text-lg mb-3">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* CTAへの誘導 */}
        <div className="text-center mt-14">
          <a href="#purchase" className="btn-galaxy inline-block px-12 py-4 text-white font-black text-lg rounded-full">
            今すぐ注文する →
          </a>
          <p className="text-gray-600 text-xs mt-4">送料無料 ✦ 返金保証あり ✦ 最短翌日発送</p>
        </div>
      </div>
    </section>
  );
}
