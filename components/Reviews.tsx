import Image from "next/image";

const reviews = [
  {
    name: "さくら（17歳）",
    avatar: "🌸",
    rating: 5,
    comment:
      "パンに塗ったらキラキラしてて超かわいい！！次の日学校で写真見せたら友達みんなに「どこで買ったの！？」って聞かれた😍",
  },
  {
    name: "ゆいな（16歳）",
    avatar: "🌟",
    rating: 5,
    comment:
      "いちごの甘さが濃くて美味しすぎる。瓶もかわいすぎてインテリアとして飾ってる笑。リピ確定！",
  },
  {
    name: "ひなた（17歳）",
    avatar: "💜",
    rating: 5,
    comment:
      "誕生日プレゼントにもらって感動した。味も最高だし、もらった瞬間「え、なにこれかわいい！」ってなった。",
  },
];

export default function Reviews() {
  return (
    <section className="relative py-24 px-6 bg-[#07001a]">
      {/* 背景画像（薄く） */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/toast.png"
          alt=""
          fill
          className="object-cover opacity-8"
        />
        <div className="absolute inset-0 bg-[#07001a]/85" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff1a8c] rounded-full opacity-10 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#c026d3] rounded-full opacity-10 blur-[130px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* タイトル */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 glass-pink text-pink-300 rounded-full text-sm font-bold mb-4 tracking-widest">
            ✦ REVIEWS ✦
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white">
            みんなの{" "}
            <span className="text-gold">クチコミ</span>
          </h2>
        </div>

        {/* カード */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="glass rounded-3xl p-6 hover:bg-white/10 transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-600 to-fuchsia-500 flex items-center justify-center text-2xl shadow-lg shadow-pink-900/40">
                  {r.avatar}
                </div>
                <div>
                  <p className="font-black text-white text-sm">{r.name}</p>
                  <div className="flex gap-0.5">
                    {Array.from({ length: r.rating }).map((_, j) => (
                      <span key={j} className="text-yellow-400 text-sm">★</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">{r.comment}</p>
            </div>
          ))}
        </div>

        {/* 総合評価 */}
        <div className="text-center">
          <p className="text-6xl font-black text-gold">★ 5.0</p>
          <p className="text-gray-500 text-sm mt-2">平均評価（架空レビュー）</p>
        </div>
      </div>
    </section>
  );
}
