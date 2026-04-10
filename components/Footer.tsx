export default function Footer() {
  return (
    <footer className="relative bg-[#02000a] text-white py-14 px-6 border-t border-white/10">
      <div className="max-w-4xl mx-auto text-center">
        {/* ロゴ */}
        <p className="text-galaxy text-3xl font-black mb-1">銀河果実</p>
        <p className="text-gray-500 text-sm mb-8 tracking-widest">
          いちごジャム ✦ 「銀河の煌めきを、一口に」
        </p>

        {/* リンク */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500 mb-8">
          <a href="#" className="hover:text-purple-400 transition-colors">特定商取引法に基づく表記</a>
          <a href="#" className="hover:text-purple-400 transition-colors">プライバシーポリシー</a>
          <a href="#" className="hover:text-purple-400 transition-colors">お問い合わせ</a>
          <a href="#" className="hover:text-purple-400 transition-colors">返品・交換について</a>
        </div>

        <div className="border-t border-white/5 pt-6 text-gray-700 text-xs">
          <p>© 2025 銀河果実. All Rights Reserved.</p>
          <p className="mt-1">※ このサイトはポートフォリオ用の架空商品LPです。</p>
        </div>
      </div>
    </footer>
  );
}
