import Image from "next/image";

const posts = [
  { img: "/images/jar-closed.png", user: "@hana_daily", likes: "2,341", caption: "朝から銀河✨毎日の楽しみ" },
  { img: "/images/toast.png",      user: "@yui_breakfast", likes: "1,890", caption: "トーストがアート作品になった🍓" },
  { img: "/images/jar-open.png",   user: "@sakura_life17", likes: "3,102", caption: "キラキラしすぎてもったいない笑" },
  { img: "/images/banner.png",     user: "@rina_morning", likes: "987",   caption: "学校で話題になった件について" },
  { img: "/images/jar-closed.png", user: "@momo_food", likes: "1,456",   caption: "誕プレにもらって感動した🎁" },
  { img: "/images/toast.png",      user: "@hinata_gram", likes: "2,780",  caption: "毎朝これがないと始まらない💜" },
];

export default function Gallery() {
  return (
    <section className="relative py-24 px-6 bg-[#0a0018] overflow-hidden">
      {/* 背景グロー */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-80 h-80 bg-[#ff1a8c] rounded-full opacity-10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#c026d3] rounded-full opacity-10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* タイトル */}
        <div className="text-center mb-5">
          <span className="inline-block px-4 py-1 glass-pink text-pink-300 rounded-full text-sm font-bold mb-4 tracking-widest">
            ✦ GALLERY ✦
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white">
            みんなの<span className="text-galaxy">投稿</span>
          </h2>
        </div>
        <p className="text-center text-gray-500 text-sm mb-12">
          #銀河果実 で毎日続々と投稿が届いています
        </p>

        {/* グリッド */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {posts.map((post, i) => (
            <div
              key={i}
              className="relative group aspect-square rounded-2xl overflow-hidden cursor-pointer"
            >
              <Image
                src={post.img}
                alt={post.caption}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* オーバーレイ */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* ホバー情報 */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white font-black text-sm">{post.user}</p>
                <p className="text-gray-300 text-xs mt-0.5 line-clamp-1">{post.caption}</p>
                <p className="text-pink-400 text-xs mt-1 font-bold">♥ {post.likes}</p>
              </div>
              {/* いいね常時表示（右上） */}
              <div className="absolute top-3 right-3 glass rounded-full px-2.5 py-1 text-xs text-pink-300 font-bold">
                ♥ {post.likes}
              </div>
            </div>
          ))}
        </div>

        {/* Instagram誘導 */}
        <div className="text-center mt-10">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-3 glass-pink rounded-full text-pink-300 font-bold text-sm hover:bg-pink-900/20 transition-all"
          >
            <span>Instagram で全投稿を見る</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
