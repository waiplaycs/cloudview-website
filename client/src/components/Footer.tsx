/*
 * 雲向 CLOUDVIEW — 頁腳組件
 * 風格: 深海藍背景，白色文字，法律聲明
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[oklch(0.12_0.05_245)] py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Legal Disclaimer only */}
        <div className="border-t border-white/10 pt-8">
          <p className="font-body text-white/30 text-xs leading-relaxed mb-4">
            免責聲明：本頁旨在提供更多一手新盤資料及圖片檔案服務只供閱覽；不聲明或保證所提供訊息的準確性和完整性。在撰寫本頁時，雖已作出合理和謹慎的考慮，對資料的完整和準確性恕不保證、明示或暗示絕對無誤。本頁並不是發展項目之官方網站網頁。本頁內的圖片與發展商的樓盤並無任何關係。準買家如欲了解發展項目詳情，請參閱售樓說明書。資料有可能出現售價、現金或其他條件上的改動，或撤回而不經提前通知，並可能受特別條款約束。因使用此資料而直接或間接引致的損失或損毀。本頁恕不負責。本頁內所有內容包括一手新盤資料，僅供參考和借鑒，物業資料，一切以發展商最新公布為準。本頁面所提到房屋面積如無特別標示，均指實用面積。客戶應自行確保資料或，內容的完整性和準確性。所載資料僅供參考，並不構成要約或合約一部份。如有需要，瀏覽者應自行咨詢相關法律及/或專業意見。
          </p>
          <p className="font-body text-white/25 text-xs">
            © {currentYear} 雲向 CLOUDVIEW.
          </p>
        </div>
      </div>
    </footer>
  );
}
