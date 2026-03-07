const fs = require('fs');

let file = fs.readFileSync('src/i18n/index.ts', 'utf8');

// Replace hero.ec
file = file.replace(/ec: "電子場刊"/g, 'ec: "預計關鍵日期：2027年3月31日"');
file = file.replace(/ec: "电子场刊"/g, 'ec: "预计关键日期：2027年3月31日"');
file = file.replace(/ec: "E-Brochure"/g, 'ec: "Est. Material Date: 31 Mar 2027"');

// Replace footer.disclaimer
const newHkDisclaimer = "本頁旨在提供更多一手新盤資料及圖片檔案服務只供閱覽；不聲明或保證所提供訊息的準確性和完整性。在撰寫本頁時，雖已作出合理和謹慎的考慮，對資料的完整和準確性恕不保證、明示或暗示絕對無誤。本頁並不是發展項目之官方網站網頁。本頁內的圖片與發展商的樓盤並無任何關係。準買家如欲了解發展項目詳情，請參閱售樓說明書。資料有可能出現售價、現金或其他條件上的改動，或撤回而不經提前通知，並可能受特別條款約束。因使用此資料而直接或間接引致的損失或損毀。本頁恕不負責。本頁內所有內容包括一手新盤資料，僅供參考和借鑒，物業資料，一切以發展商最新公布為準。本頁面所提到房屋面積如無特別標示，均指實用面積。客戶應自行確保資料或，內容的完整性和準確性。所載資料僅供參考，並不構成要約或合約一部份。如有需要，瀏覽者應自行咨詢相關法律及/或專業意見。";

const newCnDisclaimer = "本页旨在提供更多一手新盘资料及图片档案服务只供阅览；不声明或保证所提供讯息的准确性和完整性。在撰写本页时，虽已作出合理和谨慎的考虑，对资料的完整和准确性恕不保证、明示或暗示绝对无误。本页并不是发展项目之官方网站网页。本页内的图片与发展商的楼盘并无任何关系。准买家如欲了解发展项目详情，请参阅售楼说明书。资料有可能出现售价、现金或其他条件上的改动，或撤回而不经提前通知，并可能受特别条款约束。因使用此资料而直接或间接引致的损失或损毁。本页恕不负责。本页内所有内容包括一手新盘资料，仅供参考和借鉴，物业资料，一切以发展商最新公布为准。本页面所提到房屋面积如无特别标示，均指实用面积。客户应自行确保资料或，内容的完整性和准确性。所载资料仅供参考，并不构成要约或合约一部份。如有需要，浏览者应自行咨询相关法律及/或专业意见。";

const newEnDisclaimer = "This page is intended to provide more first-hand new property information and image archive services for viewing only; it does not state or guarantee the accuracy and completeness of the information provided. While reasonable and careful consideration has been made in preparing this page, no guarantee, express or implied, is given that the information is complete and absolutely accurate. This page is not the official website of the development project. The images on this page have no relationship with the developer's properties. Prospective purchasers are advised to refer to the sales brochure for details of the development project. Information may be subject to changes in price, cash or other terms, or withdrawal without prior notice, and may be subject to special terms. This page shall not be liable for any loss or damage directly or indirectly arising from the use of this information. All contents on this page, including first-hand new property information, are for reference only. Property information shall be subject to the latest announcements by the developer. Unless otherwise specified, the property areas mentioned on this page refer to saleable areas. Customers should independently verify the completeness and accuracy of the information or contents. The information contained herein is for reference only and does not constitute an offer or part of a contract. If necessary, visitors should seek relevant legal and/or professional advice independently.";

// I will use regex to find the disclaimer strings and replace them.
// Looking at the previous file content, it was structured like:
// footer: {
//   disclaimer: "重要聲明：..."
// }

file = file.replace(/disclaimer: "重要聲明：[^"]+"/g, `disclaimer: "${newHkDisclaimer}"`);
file = file.replace(/disclaimer: "重要声明：[^"]+"/g, `disclaimer: "${newCnDisclaimer}"`);
file = file.replace(/disclaimer: "Important Disclaimer: [^"]+"/g, `disclaimer: "${newEnDisclaimer}"`);

fs.writeFileSync('src/i18n/index.ts', file);
console.log('Fixed i18n texts');
