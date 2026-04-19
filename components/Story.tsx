import Image from "next/image";

export default function Story() {
  return (
    <section className="relative py-24 px-6 bg-[#0a0018] overflow-hidden">
      {/* 背景グロー */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#c026d3] rounded-full opacity-12 blur-[160px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#ff1a8c] rounded-full opacity-10 blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* ラベル */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 glass-pink text-pink-300 rounded-full text-sm font-bold mb-4 tracking-widest">
            ✦ OUR STORY ✦
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white">
            銀河果実が<span className="text-galaxy">生まれた理由</span>
          </h2>
        </div>

        {/* コンテンツ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* 左：画像 */}
          <div className="relative">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden">
              <Image
                src="/images/toast.png"
                alt="開発のきっかけ"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-pink-900/20" />
            </div>
            {/* フローティングラベル */}
            <div className="absolute -bottom-5 -right-5 glass-pink rounded-2xl px-5 py-3 text-center">
              <p className="text-pink-300 font-black text-lg">2024年</p>
              <p className="text-gray-300 text-xs">ブランド設立</p>
            </div>
          </div>

          {/* 右：テキスト */}
          <div className="space-y-6">
            <div className="glass rounded-2xl p-6 border-l-4 border-pink-500">
              <p className="text-white font-black text-lg mb-2">「朝食を、特別な時間に。」</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                毎朝同じトーストに飽き飽きしていた創業者が、「食べる前からワクワクするジャムを作りたい」という想いからスタートしました。
              </p>
            </div>

            <p className="text-gray-300 text-sm leading-loose">
              完熟いちご農家と直接契約し、摘みたての果実だけを厳選。食用グリッターとの融合に50回以上の試作を重ね、
              「口に入れる瞬間に笑顔になれる」レシピをついに完成させました。
            </p>

            <p className="text-gray-300 text-sm leading-loose">
              発売後、SNSで爆発的に拡散。「翌日学校でみんなに見せたくなる」という声が相次ぎ、
              10代を中心に話題を集め続けています。
            </p>

            {/* タイムライン */}
            <div className="space-y-3 pt-2">
              {[
                { year: "2023.04", text: "いちご農家と契約・試作開始" },
                { year: "2023.11", text: "50回の試作を経てレシピ完成" },
                { year: "2024.02", text: "「銀河果実」ブランド設立・発売開始" },
                { year: "2024.06", text: "累計1万個突破・SNS話題商品に" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="text-pink-400 font-black text-xs whitespace-nowrap mt-0.5 w-20 flex-shrink-0">{item.year}</span>
                  <div className="flex items-center gap-2 flex-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-pink-500 flex-shrink-0 mt-1.5" />
                    <p className="text-gray-300 text-sm">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
