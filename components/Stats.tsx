const stats = [
  { value: "12,800+", label: "累計販売数", sub: "2024年発売以来" },
  { value: "87%", label: "リピート率", sub: "購入者アンケート調査" },
  { value: "34,000+", label: "SNS投稿数", sub: "#銀河果実 タグ件数" },
  { value: "★4.9", label: "平均評価", sub: "全レビュー集計" },
];

export default function Stats() {
  return (
    <section className="relative py-14 px-6 bg-[#07001a] border-y border-pink-900/30 overflow-hidden">
      {/* グロー */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-32 bg-[#ff1a8c] opacity-10 blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-pink-900/40">
        {stats.map((s, i) => (
          <div key={i} className="flex flex-col items-center text-center px-4">
            <p className="text-3xl md:text-4xl font-black text-galaxy mb-1">{s.value}</p>
            <p className="text-white font-bold text-sm mb-1">{s.label}</p>
            <p className="text-gray-500 text-xs">{s.sub}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
