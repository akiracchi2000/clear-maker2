(function(){var _S=['https://script.google.com/macros/s/AKfycbztFiRh4EVm6vsXYJE0rpv3pGFPOSpilylrofIlpJ5rlwIifAyTLKsTW_TxCedwrm4K/exec','https://script.google.com/macros/s/AKfycbwFCds0vZ0cMv1uHyR67Ji7dL4UGM7s-7Lq40F5euHA-Ol-hn0l8mm-WmkSn2EIyaKv/exec','../TeX Sauce Maker/index.html','drop-overlay','settings-modal','open-settings','close-settings','save-settings','api-key','model-select','subject-select','user-prompt','file-status','response-area','loading-indicator','generate-btn','copy-btn','screenshot-btn','theme-toggle','edit-btn','response-editor','edit-actions','save-edit-btn','cancel-edit-btn','paste-modal','close-paste-modal','.paste-option-btn','drop-zone-question','drop-zone-model','drop-zone-student','file-input-question','file-input-model','file-input-student','thumbnails-question','thumbnails-model','thumbnails-student','include-question','include-model','include-student','.version-tag','tex-confirm-modal','tex-confirm-ok','tex-confirm-cancel','close-tex-confirm','student-nav','prev-student','next-student','student-counter','merge-student','img-preview-overlay','img-preview-large','click','click','click','click','click','other','','dark','','gemini-3.1-pro-preview','v2.2.1','gemini_api_key','','gemini_model','gemini-3.1-pro-preview','current_subject','other','theme','dark','include_question','false','include_model','false','include_student','false','data-theme','dark','🌙','☀️','theme','dark','light','dark','API Keyを入力してください','gemini_api_key','gemini_model','question','model','student','dragover','drop','click','paste','click','click','data-target','click','click','click','click','click','open-readme-btn','click','close-readme-btn','click','readme-modal','hidden','change','current_subject','click','change','include_question','change','include_model','change','include_student','click','click','click','click','click','click','click','.clear-zone-btn','click','change','dragover','active','dragleave','active','drop','active','mouseenter','mouseleave','click','student','','hidden','hidden','image','question','model','student','ファイルの読み込みに失敗しました。','student','✨ 解析を実行','予期せぬエラーが発生しました: ','','hidden','hidden','div','thumbnail-wrapper','relative','inline-block','img','button','remove-btn','&times;','削除','click','mouseenter','mouseleave','student','<div class="placeholder-text">ここにAIの回答が表示されます</div>','hidden','hidden','hidden','','student','hidden','hidden','','hidden','active','active','active','hidden','','少なくとも1つの画像をアップロードしてください','まずは右上の設定ボタン(⚙️)からAPIキーを設定してください。','APIキーが設定されていません。','POST','Content-Type','text/plain;charset=utf-8','Failed to fetch','通信エラーが発生しました。\n\nGASウェブアプリのURLが間違っているか、デプロイ設定の「アクセスできるユーザー」が「全員」になっていない可能性があります。\n⚙️設定から再度URLなどを確認してください。','JSON Parse Error. The response might be HTML (GAS Error):','GASからの応答が不正です（JSON形式ではありません）。\n\nGoogle側のシステム障害、またはGASの実行時間超過（タイムアウト）の可能性があります。\nしばらく時間をおいてから再度お試しください。','tikzpicture','begin{tikz','[TikZ Debug] テキストにtikzpictureの文字列が含まれていますが、正規表現でマッチしませんでした','[TikZ Debug] テキストの最初の500文字:',"",'POST','Content-Type','text/plain;charset=utf-8',"OCRエラー:",'📝 模範解答例モード - 解析完了','解析完了',"","GAS管理へ移行済み",'POST','no-cors','Content-Type','text/plain;charset=utf-8','GASへデータを送信しました','GAS送信エラー:','TIKZPLACEHOLDER','\n','%','','','\n','\\boldsymbol{','\\boldsymbol{','MATHPLACEHOLDER','clear_maker_','','g','g','&','g','&amp;','<','g','&lt;','>','g','&gt;','"','g','&quot;',"'",'g','&#39;','<div class="response-images-container">','</div><hr class="separator">','hidden','hidden','hidden','$$','$$','\\[','\\]','$','$','\\(','\\)','\\bm','\\boldsymbol','message','tikz-resize','px','px','image/',',','application/pdf','対応していないファイル形式です (画像またはPDFのみ)','undefined','PDF解析ライブラリ (pdfjsLib) が読み込まれていません。ページをリロードしてみてください。','canvas','2d','#FFFFFF','image/jpeg','image/jpeg',',','PDF Conversion Error:','PDFの変換中にエラーが発生しました: ','img','hr','✅','Copy failed','コピーに失敗しました','hidden','0.3','hidden','hidden','hidden','1','data-theme','light','#f8fafc','#0f172a','light','#f1f5f9','#1e293b','24px','iframe[id^="tikz-iframe-"]','svg','100%','auto','img','data:image/svg+xml;base64,','block','0 auto','visible','none','[TikZ Capture] Cannot access iframe content','','a','image/png','','画像の保存に失敗しました','data-theme','light','#f8fafc','#0f172a','light','#f1f5f9','#1e293b','24px','iframe[id^="tikz-iframe-"]','svg','100%','auto','img','data:image/svg+xml;base64,','block','0 auto','visible','none','[TikZ Capture] Cannot access iframe content','','image/png','_blank','TeX Sauce Makerを開けませんでした。ポップアップがブロックされている可能性があります。','tex-sauce-maker-ready','message','clear-maker-image','image/png','*','[TeX連携] 画像データとTikZコードをTeX Sauce Makerに送信しました','message','message','','画像のキャプチャに失敗しました','editor-hidden','hidden','','hidden','hidden','hidden','hidden','editor-hidden','hidden','hidden','hidden','hidden','hidden','readme-modal','readme-content','<p>読み込み中...</p>','v1.6.0: Loading embedded README...','undefined','Marked library is not loaded','Failed to load README:'];const ADMIN_GAS_WEBHOOK_URL = _S[0];
const GAS_API_URL = _S[1];
const TEX_SAUCE_MAKER_URL = _S[2];
const README_CONTENT = `# Clear Maker2

**AIを活用した答案添削・解説作成支援ツール**

Clear Maker2は、Google Gemini Proモデルを活用して、生徒の答案、模範解答、問題文の画像を元に、高度な添削と解説を自動生成するWebアプリケーションです。

## 主な機能

*   **画像解析**: 問題、模範解答、生徒の答案の画像をアップロードして解析。
*   **AI添削**: 東大・京大レベルの基準で、記述の論理性や計算過程を細かくチェック。
*   **クリップボード貼り付け**: スクリーンショットを\`Ctrl+V\`で直接貼り付け可能（ホバー判定機能付き）。
*   **PDF対応**: PDFファイルを自動で画像に変換して読み込み。
*   **数式対応**: LaTeX形式の数式を美しくレンダリング（KaTeX使用）。
*   **編集機能**: 生成された解説をその場で編集・保存可能。
*   **PWA対応**: アプリとしてインストールして使用可能。オフラインキャッシュ対応。
*   **プライバシー重視**: APIキーはローカルストレージに保存され、サーバーには送信されません。

## 更新履歴 (Changelog)

### v2.2.1 (2026-03-17)
*   **[修正] TikZ図のレンダリング不具合（消失）を修正**:
    *   ボールド記法（\`**\`）の影響でTikZ図（グラフ等）が表示されなくなる問題を修正しました。
    *   プレビュー画面の編集ボタン（✏️）から文章を編集・保存した際に、TikZ図が消えてしまう問題を根本的に解消しました。

### v2.2.0 (2026-03-08)
*   **[追加] 生徒解答の連続バッチ処理**:
    *   複数の生徒解答画像を一括ドロップし、「前の生徒 / 次の生徒」ボタンで1人ずつ切り替えて処理できるようになりました。
*   **[追加] 「➕ 前とまとめる」ボタン**:
    *   複数ページにわたる解答を1人分のグループにまとめる機能を追加しました。
*   **[追加] サムネイル拡大プレビュー**:
    *   サムネイル画像にホバーすると、画面中央にオーバーレイで拡大表示されます。

### v2.1.10 (2026-03-05)
*   **[追加] APIモデルの更新**:
    *   選択可能なGeminiモデルに \`gemini-3.1-flash-lite-preview\` を追加しました。

### v2.1.9 (2026-03-03)
*   **[修正] アクセスエラー時のメッセージ改善**:
    *   GAS APIへ接続できない場合（CORSエラー等の \`Failed to fetch\`）に、より詳細な対処法（アクセス権限の設定確認等）を画面に表示するよう修正し、問題解決をサポートします。

### v2.1.8 (2026-03-03)
*   **[修正] TikZ画像保存時に解説文が消える不具合を修正**: 画像化プロセス (\`html2canvas\`) においてSVG周辺のレイアウトが崩れてテキストが描画されなくなる問題を、SVGを完全に独立した画像 (Base64) に変換してからキャプチャするようにして解決しました。

### v2.1.7 (2026-03-03)
*   **[修正] TikZ画像の描画ズレを修正**: 画像キャプチャ時にグラフが上にズレて見切れてしまう問題（html2canvasの座標計算エラー）を、SVGのスタイルを直接変更せずラッパーで囲むようにして解決しました。

### v2.1.6 (2026-03-03)
*   **[修正] TikZグラフが画像保存時に真っ白になる不具合を修正**: 画像化プロセス (\`html2canvas\`) がiframe内のTikZグラフをキャプチャできない問題に対応し、保存の直前にSVGを直接埋め込む処理を追加しました。

### v2.1.5 (2026-03-03)
*   **[修正] PWA環境での「Failed to fetch」エラーを解消**: Service WorkerがPOSTリクエストを不用意にキャッシュしようとして発生していた通信エラー（APIへの接続失敗）を修正しました。

### v2.1.4 (2026-03-03)
*   **[改善] PWAアイコンの修正**:
    *   タスクバー表示時に四隅に白い残像が出る問題を修正。アイコンを角丸なしの正方形デザインに変更しました。

### v2.1.3 (2026-03-03)
*   **[修正] TikZ描画がGAS経由で動作しない不具合を修正**:
    *   TikZJaxが非ASCII文字（日本語コメント等）を処理できない問題を特定し、クライアント側で日本語コメントを自動除去するサニタイズ処理を追加しました。
    *   システムプロンプトにコメント行を含む日本語使用禁止を明記しました。

### v2.1.2 (2026-03-03)
*   **[新機能] 裏モード（模範解答例モード）の追加**:
    *   問題画像のみ（生徒の解答なし）で実行すると、添削ではなく模範解答例を生成する裏モードが自動発動します。

### v2.1.1 (2026-03-01)
*   **[修正] 複数TikZ描画のバグ修正**:
    *   画面内に複数のTikZブロックが存在した場合に、2つ目以降がレンダリングされない不具合を修正しました。独立したiframe環境を割り当てることで安定性を向上しています。

### v2.1.0 (2026-03-01)
*   **[新機能] TikZの描画に対応**:
    *   TikZコード（\`\\begin{tikzpicture}...\\end{tikzpicture}\`）を図形として画面上にレンダリングできるようになりました。
    *   編集モードでの再描画にも対応し、KaTeXの数式と混在して利用可能です。

### v2.0.0 (2026-02-28)
*   **[システム] セキュリティの大幅向上 (GASバックエンド移行)**:
    *   APIキーとシステムプロンプトの送信をGoogle Apps Script (GAS) 経由に変更しました。
    *   フロントエンドから直接Gemini APIを叩かず、プロンプトを隠蔽することで堅牢な設計になりました。

### v1.6.0 (2026-02-22)
*   **[システム] データ自動収集機能の追加**:
    *   管理者が指定したURLに利用結果を自動送信する機能（環境設定）をソースコード統合。

### v1.5.20 (2026-02-20)
*   **[修正] プロンプトエクスポート機能の修正**:
    *   PWA環境等でバックアップ（JSONファイル）がダウンロードできない問題を修正しました。

### v1.5.19 (2026-02-20)
*   **[追加] APIモデルの更新**:
    *   選択可能なGeminiモデルに \`gemini-3.1-pro-preview\` を追加し、デフォルトモデルとして設定しました。

### v1.5.18 (2026-02-19)
*   **[ドキュメント] 利用モデルに関する注意書きの追加**:
    *   Gemini無料版ユーザー向けに、利用推奨モデル (gemini-3-flash-preview, gemini-2.5-flash) を明記しました。

### v1.5.17 (2026-02-23)
*   **[修正] 画像表示の改善**:
    *   結果に引用される画像が歪んで表示される（縦横比が崩れる）問題を修正。
    *   編集モードで保存した際に、引用設定（チェックボックス）が無視される問題を修正。

### v1.5.16 (2026-02-23)
*   **[修正] キャッシュ更新の問題**:
    *   アプリが新しいバージョンに更新されない問題を修正。
    *   主要なファイル（HTML, JS, CSS）の取得戦略を「ネットワーク優先」に変更し、常に最新版を確認するようにしました。

### v1.5.14 (2026-02-22)
*   **[新機能] 画像引用設定の追加**:
    *   問題・模範解答・生徒解答の各画像について、生成結果に元の画像を引用するかどうかを選択できるチェックボックスを追加しました。

### v1.5.13 (2026-02-17)
*   **[変更] モデル選択肢の更新**:
    *   選択可能なGeminiモデルを最新のものに更新 (gemini-3.1-pro-preview, gemini-3-pro-preview, gemini-3-flash-preview, gemini-2.5-pro, gemini-2.5-flash)。

### v1.5.11 (2026-02-13)
*   **[修正] PWA更新の不具合**:
    *   Mac (Safari/Chrome) でアプリが更新されない問題を修正。
    *   Service Worker更新時に自動的にページをリロードする処理を追加。

### v1.5.8 (2026-02-12)
*   **[修正] マニュアル表示の不具合**:
    *   \`README.md\` が表示されない問題を修正。
    *   モーダルのクラス名が誤っていた不具合を修正 (\`modal-overlay\` -> \`modal\`)。
    *   キャッシュの問題により古いファイルが読み込まれ続ける現象を解決。
*   **[改善] キャッシュ戦略の見直し**: Service Workerの更新ロジックを最適化。

### v1.5.3 (2026-02-12)
*   **[新機能] クリップボード貼り付け機能の実装**:
    *   ドロップゾーン（問題・模範解答・生徒解答）の上で貼り付け操作を行うと、自動的にそのゾーンに画像が追加されます。
    *   ゾーン外で貼り付けた場合は、振り分け先を選択するモーダルが表示されます。
*   **[改善] コードの安全性向上**:
    *   \`app.src.js\`（ソースコード）と\`app.js\`（実行用コード）を分離。
    *   \`app.js\`に対して難読化処理を適用。
*   **[修正] バージョン表記の更新**: ヘッダーのバージョン番号をv1.5.3に更新。

### v1.5.2
*   **レイアウト変更**: UIの使いやすさを向上させるためのレイアウト調整。
*   **プロンプト改善**: 数式出力の精度向上など。

## APIキーの取得方法

このアプリを使用するには、Google Gemini APIキーが必要です。以下の手順で無料で取得できます。

**※ gemini無料版ユーザーは利用するモデルを gemini-3-flash-preview, gemini-2.5-flash のいずれかに変更してご利用ください。**

1.  [Google AI Studio](https://aistudio.google.com/app/apikey) にアクセスします。
2.  Googleアカウントでログインします。
3.  「**Create API key**」ボタンをクリックします。
4.  「**Create API key in new project**」（または既存のプロジェクトを選択）をクリックします。
5.  生成されたAPIキーをコピーし、Clear Maker2の設定画面（右上の⚙️）に入力してください。

## 使い方

1.  右上の設定ボタン（⚙️）からGemini APIキーを設定します。
2.  「問題」「模範解答」「生徒の答案」の各エリアに画像をドラッグ＆ドロップ、またはクリップボードから貼り付けます。
3.  「✨ 解析を実行」ボタンをクリックすると、AIが添削と解説を生成します。
4.  生成された結果はコピーしたり、画像として保存したりできます。

## 開発者向け情報

*   **\`app.src.js\`**: 開発用のソースコード（未圧縮・未難読化）。編集はこちらを行ってください。
*   **\`app.js\`**: 本番用の実行コード（難読化済み）。\`app.src.js\`から生成されます。
*   **\`gas_template.gs\`**: GAS連携用のスクリプトです。
`;
const _e = {
dropOverlay: document.getElementById(_S[3]),
settingsModal: document.getElementById(_S[4]),
openSettingsBtn: document.getElementById(_S[5]),
closeSettingsBtn: document.getElementById(_S[6]),
saveSettingsBtn: document.getElementById(_S[7]),
apiKeyInput: document.getElementById(_S[8]),
modelSelect: document.getElementById(_S[9]),
subjectSelect: document.getElementById(_S[10]),
userPrompt: document.getElementById(_S[11]),
fileStatus: document.getElementById(_S[12]),
responseArea: document.getElementById(_S[13]),
loadingIndicator: document.getElementById(_S[14]),
generateBtn: document.getElementById(_S[15]),
copyBtn: document.getElementById(_S[16]),
screenshotBtn: document.getElementById(_S[17]),
themeToggleBtn: document.getElementById(_S[18]),
editBtn: document.getElementById(_S[19]),
responseEditor: document.getElementById(_S[20]),
editActions: document.getElementById(_S[21]),
saveEditBtn: document.getElementById(_S[22]),
cancelEditBtn: document.getElementById(_S[23]),
pasteModal: document.getElementById(_S[24]),
closePasteBtn: document.getElementById(_S[25]),
pasteOptions: document.querySelectorAll(_S[26]),
dropZones: {
question: document.getElementById(_S[27]),
model: document.getElementById(_S[28]),
student: document.getElementById(_S[29])
},
inputs: {
question: document.getElementById(_S[30]),
model: document.getElementById(_S[31]),
student: document.getElementById(_S[32])
},
thumbs: {
question: document.getElementById(_S[33]),
model: document.getElementById(_S[34]),
student: document.getElementById(_S[35])
},
includeChecks: {
question: document.getElementById(_S[36]),
model: document.getElementById(_S[37]),
student: document.getElementById(_S[38])
},
versionTag: document.querySelector(_S[39]),
texConfirmModal: document.getElementById(_S[40]),
texConfirmOkBtn: document.getElementById(_S[41]),
texConfirmCancelBtn: document.getElementById(_S[42]),
closeTexConfirmBtn: document.getElementById(_S[43]),
studentNav: document.getElementById(_S[44]),
prevStudentBtn: document.getElementById(_S[45]),
nextStudentBtn: document.getElementById(_S[46]),
studentCounter: document.getElementById(_S[47]),
mergeStudentBtn: document.getElementById(_S[48]),
imgPreviewOverlay: document.getElementById(_S[49]),
imgPreviewLarge: document.getElementById(_S[50])
};
_e.copyBtn.addEventListener(_S[51], _fQ);
_e.screenshotBtn.addEventListener(_S[52], _fS);
_e.editBtn.addEventListener(_S[53], () => _fT(true));
_e.saveEditBtn.addEventListener(_S[54], _fU);
_e.cancelEditBtn.addEventListener(_S[55], _fV);
let _s = {
currentSubject: _S[56],
currentMarkdown: _S[57],
hoveredZone: null,
pendingPasteFiles: [],
theme: _S[58],
apiKey: _S[59],
model: _S[60],
files: {
question: [],
model: [],
student: []
},
isGenerationFinished: false,
studentFilesQueue: [],
currentStudentIndex: 0
};
function _f1() {
_f2();
_fA();
if (_e.versionTag) {
_e.versionTag.textContent = _S[61];
}
}
function _f2() {
_s.apiKey = localStorage.getItem(_S[62]) || _S[63];
_s.model = localStorage.getItem(_S[64]) || _S[65];
_s.currentSubject = localStorage.getItem(_S[66]) || _S[67];
_s.theme = localStorage.getItem(_S[68]) || _S[69];
_f3(_s.theme);
_e.apiKeyInput.value = _s.apiKey;
_e.modelSelect.value = _s.model;
_e.subjectSelect.value = _s.currentSubject;
_e.includeChecks.question.checked = localStorage.getItem(_S[70]) !== _S[71];
_e.includeChecks.model.checked = localStorage.getItem(_S[72]) !== _S[73];
_e.includeChecks.student.checked = localStorage.getItem(_S[74]) !== _S[75];
}
function _f3(theme) {
document.body.setAttribute(_S[76], theme);
_e.themeToggleBtn.textContent = theme === _S[77] ? _S[78] : _S[79];
_s.theme = theme;
localStorage.setItem(_S[80], theme);
}
function _f4() {
const newTheme = _s.theme === _S[81] ? _S[82] : _S[83];
_f3(newTheme);
}
function _f5() {
const key = _e.apiKeyInput.value.trim();
const model = _e.modelSelect.value;
if (!key) {
alert(_S[84]);
return;
}
_s.apiKey = key;
_s.model = model;
localStorage.setItem(_S[85], key);
localStorage.setItem(_S[86], model);
_fD(_e.settingsModal, false);
}
function _fA() {
[_S[87], _S[88], _S[89]].forEach(type => _fB(type));
window.addEventListener(_S[90], (e) => e.preventDefault());
window.addEventListener(_S[91], (e) => e.preventDefault());
_e.generateBtn.addEventListener(_S[92], _fL);
window.addEventListener(_S[93], _fF);
_e.closePasteBtn.addEventListener(_S[94], () => _fD(_e.pasteModal, false));
_e.pasteOptions.forEach(btn => {
btn.addEventListener(_S[95], () => {
const target = btn.getAttribute(_S[96]);
if (_s.pendingPasteFiles.length > 0) {
_fH(_s.pendingPasteFiles, target);
_s.pendingPasteFiles = [];
}
_fD(_e.pasteModal, false);
});
});
_e.copyBtn.addEventListener(_S[97], _fQ);
_e.screenshotBtn.addEventListener(_S[98], _fS);
_e.openSettingsBtn.addEventListener(_S[99], () => _fD(_e.settingsModal, true));
_e.closeSettingsBtn.addEventListener(_S[100], () => _fD(_e.settingsModal, false));
_e.saveSettingsBtn.addEventListener(_S[101], _f5);
document.getElementById(_S[102]).addEventListener(_S[103], _fW);
document.getElementById(_S[104]).addEventListener(_S[105], () => document.getElementById(_S[106]).classList.add(_S[107]));
_e.subjectSelect.addEventListener(_S[108], (e) => {
_s.currentSubject = e.target.value;
localStorage.setItem(_S[109], e.target.value);
});
_e.themeToggleBtn.addEventListener(_S[110], _f4);
_e.includeChecks.question.addEventListener(_S[111], (e) => localStorage.setItem(_S[112], e.target.checked));
_e.includeChecks.model.addEventListener(_S[113], (e) => localStorage.setItem(_S[114], e.target.checked));
_e.includeChecks.student.addEventListener(_S[115], (e) => localStorage.setItem(_S[116], e.target.checked));
_e.closeTexConfirmBtn.addEventListener(_S[117], () => _fD(_e.texConfirmModal, false));
_e.texConfirmCancelBtn.addEventListener(_S[118], () => _fD(_e.texConfirmModal, false));
_e.texConfirmOkBtn.addEventListener(_S[119], () => {
_fD(_e.texConfirmModal, false);
openTexSauceMaker();
});
_e.prevStudentBtn.addEventListener(_S[120], () => navigateStudent(-1));
_e.nextStudentBtn.addEventListener(_S[121], () => navigateStudent(1));
_e.mergeStudentBtn.addEventListener(_S[122], mergeWithPrevious);
_e.imgPreviewOverlay.addEventListener(_S[123], hidePreview);
}
function _fB(type) {
const zone = _e.dropZones[type];
const input = _e.inputs[type];
const container = document.querySelector(`.drop-zone-group[data-type="${type}"]`);
const clearBtn = container.querySelector(_S[124]);
if (!zone || !input) return;
zone.addEventListener(_S[125], () => input.click());
input.addEventListener(_S[126], (e) => _fG(e, type));
zone.addEventListener(_S[127], (e) => {
e.preventDefault();
container.classList.add(_S[128]);
});
zone.addEventListener(_S[129], (e) => {
e.preventDefault();
container.classList.remove(_S[130]);
});
zone.addEventListener(_S[131], (e) => {
e.preventDefault();
container.classList.remove(_S[132]);
_fE(e, type);
});
container.addEventListener(_S[133], () => {
_s.hoveredZone = type;
});
container.addEventListener(_S[134], () => {
if (_s.hoveredZone === type) {
_s.hoveredZone = null;
}
});
if (clearBtn) {
clearBtn.addEventListener(_S[135], (e) => {
e.stopPropagation();
_fC(type);
});
}
}
function _fC(type) {
_s.files[type] = [];
if (type === _S[136]) {
_s.studentFilesQueue = [];
_s.currentStudentIndex = 0;
updateStudentCounter();
}
_fI(type);
_fK();
_e.inputs[type].value = _S[137];
}
function _fD(modal, show) {
if (show) modal.classList.remove(_S[138]);
else modal.classList.add(_S[139]);
}
async function _fE(e, type) {
const files = e.dataTransfer.files;
if (files.length > 0) _fH(files, type);
}
function _fF(e) {
const items = e.clipboardData.items;
const files = [];
for (let i = 0; i < items.length; i++) {
if (items[i].type.indexOf(_S[140]) !== -1) {
const file = items[i].getAsFile();
if (file) files.push(file);
}
}
if (files.length > 0) {
e.preventDefault();
if (_s.hoveredZone) {
_fH(files, _s.hoveredZone);
} else {
_s.pendingPasteFiles = files;
_fD(_e.pasteModal, true);
}
}
}
function _fG(e, type) {
const files = e.target.files;
if (files.length > 0) _fH(files, type);
}
async function _fH(fileList, type) {
const files = Array.from(fileList);
if (files.length === 0) return;
if (_s.isGenerationFinished) {
_s.files.question = [];
_s.files.model = [];
_s.files.student = [];
_s.studentFilesQueue = [];
_s.currentStudentIndex = 0;
_fI(_S[141]);
_fI(_S[142]);
_fI(_S[143]);
updateStudentCounter();
_s.isGenerationFinished = false;
}
if (!type || !_s.files[type]) {
alert(`内部エラー: 不明なファイルカテゴリです (${type})`);
return;
}
_e.generateBtn.disabled = true;
try {
const promises = files.map(file => {
return _fO(file).catch(err => {
console.error(`Skipped file ${file.name}:`, err);
return null;
});
});
const results = await Promise.all(promises);
const validResults = results.filter(r => r !== null).flat();
if (validResults.length === 0 && results.length > 0) {
alert(_S[144]);
} else {
if (type === _S[145]) {
validResults.forEach(img => _s.studentFilesQueue.push([img]));
_s.currentStudentIndex = 0;
_s.files.student = [..._s.studentFilesQueue[0]];
updateStudentCounter();
} else {
_s.files[type] = [..._s.files[type], ...validResults];
}
_fI(type);
}
_fK();
_e.generateBtn.disabled = false;
_e.generateBtn.innerHTML = _S[146];
} catch (err) {
console.error(err);
alert(_S[147] + err.message);
_e.generateBtn.disabled = false;
}
}
function _fI(type) {
const container = _e.thumbs[type];
container.innerHTML = _S[148];
const files = _s.files[type];
if (files.length === 0) {
container.classList.add(_S[149]);
return;
}
container.classList.remove(_S[150]);
files.forEach((imgData, index) => {
const wrapper = document.createElement(_S[151]);
wrapper.className = _S[152];
wrapper.style.position = _S[153];
wrapper.style.display = _S[154];
const img = document.createElement(_S[155]);
img.src = `data:${imgData.mimeType};base64,${imgData.data}`;
const removeBtn = document.createElement(_S[156]);
removeBtn.className = _S[157];
removeBtn.innerHTML = _S[158];
removeBtn.title = _S[159];
removeBtn.addEventListener(_S[160], (e) => {
e.stopPropagation();
_fJ(type, index);
hidePreview();
});
img.addEventListener(_S[161], () => showPreview(imgData));
wrapper.addEventListener(_S[162], hidePreview);
wrapper.appendChild(img);
wrapper.appendChild(removeBtn);
container.appendChild(wrapper);
});
}
function _fJ(type, index) {
_s.files[type].splice(index, 1);
_fI(type);
_fK();
}
function _fK() {
const total = _s.files.question.length + _s.files.model.length + _s.files.student.length;
_e.fileStatus.textContent = `画像合計: ${total}枚 (問:${_s.files.question.length}, 模範:${_s.files.model.length}, 生徒:${_s.files.student.length})`;
}
function navigateStudent(direction) {
const queue = _s.studentFilesQueue;
if (queue.length <= 1) return;
const newIndex = _s.currentStudentIndex + direction;
if (newIndex < 0 || newIndex >= queue.length) return;
_s.currentStudentIndex = newIndex;
_s.files.student = [...queue[newIndex]];
_fI(_S[163]);
updateStudentCounter();
_e.responseArea.innerHTML = _S[164];
_e.editBtn.classList.add(_S[165]);
_e.copyBtn.classList.add(_S[166]);
_e.screenshotBtn.classList.add(_S[167]);
_s.currentMarkdown = _S[168];
}
function mergeWithPrevious() {
const idx = _s.currentStudentIndex;
if (idx <= 0) return;
const currentGroup = _s.studentFilesQueue.splice(idx, 1)[0];
_s.studentFilesQueue[idx - 1].push(...currentGroup);
_s.currentStudentIndex = idx - 1;
_s.files.student = [..._s.studentFilesQueue[idx - 1]];
_fI(_S[169]);
updateStudentCounter();
}
function updateStudentCounter() {
const queue = _s.studentFilesQueue;
if (queue.length <= 1) {
_e.studentNav.classList.add(_S[170]);
return;
}
_e.studentNav.classList.remove(_S[171]);
const group = queue[_s.currentStudentIndex];
const groupLabel = group.length > 1 ? `（${group.length}枚組）` : _S[172];
_e.studentCounter.textContent = `${_s.currentStudentIndex + 1} / ${queue.length} 人目${groupLabel}`;
_e.prevStudentBtn.disabled = (_s.currentStudentIndex === 0);
_e.nextStudentBtn.disabled = (_s.currentStudentIndex === queue.length - 1);
_e.mergeStudentBtn.disabled = (_s.currentStudentIndex === 0);
}
function showPreview(imgData) {
_e.imgPreviewLarge.src = `data:${imgData.mimeType};base64,${imgData.data}`;
_e.imgPreviewOverlay.classList.remove(_S[173]);
requestAnimationFrame(() => {
_e.imgPreviewOverlay.classList.add(_S[174]);
});
}
function hidePreview() {
_e.imgPreviewOverlay.classList.remove(_S[175]);
setTimeout(() => {
if (!_e.imgPreviewOverlay.classList.contains(_S[176])) {
_e.imgPreviewOverlay.classList.add(_S[177]);
_e.imgPreviewLarge.src = _S[178];
}
}, 200);
}
async function _fL() {
const totalFiles = _s.files.question.length + _s.files.model.length + _s.files.student.length;
if (totalFiles === 0) {
alert(_S[179]);
return;
}
if (!_s.apiKey) {
alert(_S[180]);
_fD(_e.settingsModal, true);
return;
}
if (!_e.userPrompt.value.trim()) {
}
_fR(true);
_e.generateBtn.disabled = true;
try {
await _fM();
} catch (err) {
console.error(err);
_fN(`### エラーが発生しました\n\`\`\`\n${err.message}\n\`\`\``);
} finally {
_fR(false);
_e.generateBtn.disabled = false;
}
}
async function _fM() {
if (!_s.apiKey) {
throw new Error(_S[181]);
}
const isModelAnswerMode = _s.files.question.length > 0
&& _s.files.student.length === 0;
const payload = {
apiKey: _s.apiKey,
subject: _s.currentSubject,
userPrompt: _e.userPrompt.value,
images: {
question: _s.files.question,
model: _s.files.model,
student: _s.files.student
},
isOcrRequest: false,
isModelAnswerMode: isModelAnswerMode
};
try {
const response = await fetch(GAS_API_URL, {
method: _S[182],
headers: { [_S[183]]: _S[184] },
body: JSON.stringify(payload)
}).catch(err => {
if (err.message && err.message.includes(_S[185])) {
throw new Error(_S[186]);
}
throw err;
});
let data;
try {
data = await response.json();
} catch (jsonErr) {
console.error(_S[187], jsonErr);
throw new Error(_S[188]);
}
if (data.error) {
throw new Error(data.error);
}
const text = data.candidates[0].content.parts[0].text;
const tikzDebugRegex = /(?:```(?:tikz|latex)\s*\n)?(\\begin\{tikzpicture\}[\s\S]*?\\end\{tikzpicture\})(?:\n*```)?/g;
const tikzDebugMatches = [];
let dm;
while ((dm = tikzDebugRegex.exec(text)) !== null) {
tikzDebugMatches.push(dm[1]);
}
if (tikzDebugMatches.length > 0) {
console.log(`[TikZ Debug] ${tikzDebugMatches.length}個のTikZブロックを検出`);
tikzDebugMatches.forEach((block, idx) => {
console.log(`[TikZ Debug] ブロック${idx + 1}:`, block.substring(0, 200));
});
} else {
if (text.includes(_S[189]) || text.includes(_S[190])) {
console.warn(_S[191]);
console.warn(_S[192], text.substring(0, 500));
}
}
const allImages = [];
if (_e.includeChecks.question.checked) allImages.push(..._s.files.question);
if (_e.includeChecks.model.checked) allImages.push(..._s.files.model);
if (_e.includeChecks.student.checked) allImages.push(..._s.files.student);
_fN(text, allImages);
let questionText = _S[193];
try {
if (_s.files.question.length > 0) {
const ocrPayload = { ...payload, isOcrRequest: true };
const qRes = await fetch(GAS_API_URL, {
method: _S[194],
headers: { [_S[195]]: _S[196] },
body: JSON.stringify(ocrPayload)
});
const qData = await qRes.json();
if (!qData.error && qData.candidates) {
questionText = qData.candidates[0].content.parts[0].text;
}
}
} catch (e) {
console.error(_S[197], e);
}
_fW2(text, questionText);
} catch (err) {
throw err;
} finally {
_e.fileStatus.textContent = isModelAnswerMode ? _S[198] : _S[199];
_s.isGenerationFinished = true;
if (isModelAnswerMode) {
_fD(_e.texConfirmModal, true);
}
}
}
async function _fW2(markdown, questionText = _S[200]) {
if (!ADMIN_GAS_WEBHOOK_URL) return;
try {
const payload = {
timestamp: new Date().toISOString(),
subject: _s.currentSubject,
model: _s.model,
systemPrompt: _S[201],
userPrompt: _e.userPrompt.value,
aiResponse: markdown,
questionText: questionText
};
await fetch(ADMIN_GAS_WEBHOOK_URL, {
method: _S[202],
mode: _S[203],
headers: {
[_S[204]]: _S[205],
},
body: JSON.stringify(payload)
});
console.log(_S[206]);
} catch (err) {
console.error(_S[207], err);
}
}
function _fN(markdown, imageParts = null) {
const TIKZ_PLACEHOLDER_PREFIX = _S[208];
const tikzBlocks = [];
const sanitizeTikZ = (code) => {
return code.split(_S[209]).map(line => {
const commentIdx = line.indexOf(_S[210]);
if (commentIdx >= 0 && /[^\x00-\x7F]/.test(line.substring(commentIdx))) {
return line.substring(0, commentIdx).trimEnd();
}
return line;
}).filter(line => line.trim() !== _S[211] || line === _S[212]).join(_S[213]);
};
const storeTikZ = (match) => {
const placeholder = `${TIKZ_PLACEHOLDER_PREFIX}${tikzBlocks.length}`;
tikzBlocks.push(sanitizeTikZ(match));
return `\n\n${placeholder}\n\n`;
};
let processedMarkdown = markdown;
processedMarkdown = processedMarkdown.replace(/\\mathbf\{/g, _S[214]);
processedMarkdown = processedMarkdown.replace(/\\bm\{/g, _S[215]);
processedMarkdown = processedMarkdown.replace(
/(?:```(?:tikz|latex)\s*\n)?(\\begin\{tikzpicture\}[\s\S]*?\\end\{tikzpicture\})(?:\n*```)?/g,
(match, tikzCode) => storeTikZ(tikzCode)
);
const PLACEHOLDER_PREFIX = _S[216];
const mathBlocks = [];
const STORAGE_PREFIX = _S[217];
const storeMath = (match) => {
const placeholder = `${PLACEHOLDER_PREFIX}${mathBlocks.length}`;
mathBlocks.push(match);
return placeholder;
};
processedMarkdown = processedMarkdown.replace(
/\$\$([\s\S]*?)\$\$/g,
(match) => storeMath(match)
);
processedMarkdown = processedMarkdown.replace(
/\\\[([\s\S]*?)\\\]/g,
(match) => storeMath(match)
);
processedMarkdown = processedMarkdown.replace(
/\\\(([\s\S]*?)\\\)/g,
(match) => storeMath(match)
);
processedMarkdown = processedMarkdown.replace(
/\$([^$\n]+?)\$/g,
(match) => storeMath(match)
);
processedMarkdown = processedMarkdown.replace(
/(\\begin\{([a-z]+)\*?\}([\s\S]*?)\\end\{\2\*?\})/g,
(match) => {
return storeMath(`$$${match}$$`);
}
);
processedMarkdown = processedMarkdown.replace(/^-{3,}\s*$/gm, _S[218]);
let html = marked.parse(processedMarkdown, { breaks: true });
for (let i = mathBlocks.length - 1; i >= 0; i--) {
const math = mathBlocks[i];
const placeholder = `${PLACEHOLDER_PREFIX}${i}`;
const regex = new RegExp(placeholder, _S[219]);
html = html.replace(regex, () => math);
}
for (let i = tikzBlocks.length - 1; i >= 0; i--) {
const tikzCode = tikzBlocks[i];
const placeholder = `${TIKZ_PLACEHOLDER_PREFIX}${i}`;
const regex = new RegExp(`(?:<p>)?\\s*${placeholder}\\s*(?:<\\/p>)?`, _S[220]);
const iframeContent = `<!DOCTYPE html><html><head>
<link rel="stylesheet" type="text/css" href="https://tikzjax.com/v1/fonts.css">
<script src="https://tikzjax.com/v1/tikzjax.js"><\/script>
<style>
    body { margin: 0; padding: 10px; text-align: center; }
    svg { overflow: visible !important; }
</style>
</head><body>
<script type="text/tikz">${tikzCode}<\/script>
<script>
// Auto-resize iframe to fit the SVG once rendered
const observer = new MutationObserver((mutations) => {
    const svg = document.querySelector('svg');
    if (svg) {
        observer.disconnect();
        // Use SVG width/height attributes (most accurate for TikZJax output)
        let width = 0, height = 0;
        const svgW = svg.getAttribute('width');
        const svgH = svg.getAttribute('height');
        if (svgW && svgH) {
            // Parse pt values to px (1pt = 1.333px)
            width = parseFloat(svgW) * (svgW.includes('pt') ? 1.333 : 1);
            height = parseFloat(svgH) * (svgH.includes('pt') ? 1.333 : 1);
        }
        if (width < 10 || height < 10) {
            const rect = svg.getBoundingClientRect();
            width = rect.width;
            height = rect.height;
        }
        // グラフが無限大に発散した場合にiframeが巨大にならないよう上限を設定
        const MAX_TIKZ_HEIGHT = 600;
        const MAX_TIKZ_WIDTH = 800;
        if (height > MAX_TIKZ_HEIGHT) {
            // SVGをクリップするためにviewBoxを設定
            const viewBoxW = parseFloat(svgW) || width;
            const viewBoxH = parseFloat(svgH) || height;
            svg.setAttribute('viewBox', '0 0 ' + viewBoxW + ' ' + viewBoxH);
            svg.setAttribute('width', Math.min(width, MAX_TIKZ_WIDTH));
            svg.setAttribute('height', MAX_TIKZ_HEIGHT);
            svg.style.overflow = 'hidden';
            height = MAX_TIKZ_HEIGHT;
            width = Math.min(width, MAX_TIKZ_WIDTH);
        }
        window.parent.postMessage({ type: 'tikz-resize', id: '${i}', width: width + 20, height: height + 20 }, '*');
    }
});
observer.observe(document.body, { childList: true, subtree: true });
<\/script>
</body></html>`;
const escapedIframeContent = iframeContent
.replace(new RegExp(_S[221], _S[222]), _S[223])
.replace(new RegExp(_S[224], _S[225]), _S[226])
.replace(new RegExp(_S[227], _S[228]), _S[229])
.replace(new RegExp(_S[230], _S[231]), _S[232])
.replace(new RegExp(_S[233], _S[234]), _S[235]);
const tikzHtml = `<div class="tikz-container" style="text-align: center; margin: 1.5em 0; overflow-x: auto; background-color: #ffffff; padding: 1em; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
<iframe id="tikz-iframe-${i}" srcdoc="${escapedIframeContent}" style="border: none; width: 100%; height: 100px; max-width: 100%; max-height: 620px; overflow: hidden; background-color: transparent;" scrolling="no"></iframe>
</div>`;
html = html.replace(regex, () => tikzHtml);
}
window.tikzBlocks = [...tikzBlocks];
if (imageParts && Array.isArray(imageParts)) {
let imgsHtml = _S[236];
imageParts.forEach(part => {
const imgSrc = `data:${part.mimeType};base64,${part.data}`;
imgsHtml += `<img src="${imgSrc}" class="response-preview-image" alt="Uploaded Content">`;
});
imgsHtml += _S[237];
html = imgsHtml + html;
}
_e.responseArea.innerHTML = html;
_e.editBtn.classList.remove(_S[238]);
_e.copyBtn.classList.remove(_S[239]);
_e.screenshotBtn.classList.remove(_S[240]);
_s.currentMarkdown = markdown;
if (window.renderMathInElement) {
renderMathInElement(_e.responseArea, {
delimiters: [
{ left: _S[241], right: _S[242], display: true },
{ left: _S[243], right: _S[244], display: true },
{ left: _S[245], right: _S[246], display: false },
{ left: _S[247], right: _S[248], display: false }
],
throwOnError: false,
macros: { [_S[249]]: _S[250] }
});
}
if (!window._tikzResizeListenerAdded) {
window.addEventListener(_S[251], (event) => {
if (event.data && event.data.type === _S[252]) {
const iframe = document.getElementById(`tikz-iframe-${event.data.id}`);
if (iframe) {
const maxH = 620;
const clampedWidth = Math.min(event.data.width, 820);
const clampedHeight = Math.min(event.data.height, maxH);
iframe.style.width = clampedWidth + _S[253];
iframe.style.height = clampedHeight + _S[254];
}
}
});
window._tikzResizeListenerAdded = true;
}
}
async function _fO(file) {
if (file.type.startsWith(_S[255])) {
return new Promise((resolve, reject) => {
const reader = new FileReader();
reader.onload = (e) => {
const base64 = e.target.result.split(_S[256])[1];
resolve([{ mimeType: file.type, data: base64 }]);
};
reader.onerror = reject;
reader.readAsDataURL(file);
});
} else if (file.type === _S[257]) {
const arrayBuffer = await file.arrayBuffer();
return await _fP(arrayBuffer);
} else {
throw new Error(_S[258]);
}
}
async function _fP(arrayBuffer) {
if (typeof pdfjsLib === _S[259]) {
throw new Error(_S[260]);
}
try {
const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
const pdf = await loadingTask.promise;
const maxPages = pdf.numPages;
const images = [];
const MAX_PAGES_TO_PROCESS = 10;
const pagesToProcess = Math.min(maxPages, MAX_PAGES_TO_PROCESS);
if (maxPages > MAX_PAGES_TO_PROCESS) {
console.warn(`PDF has ${maxPages} pages. Only first ${MAX_PAGES_TO_PROCESS} will be processed.`);
}
for (let pageNum = 1; pageNum <= pagesToProcess; pageNum++) {
const page = await pdf.getPage(pageNum);
const viewport = page.getViewport({ scale: 2.0 });
const canvas = document.createElement(_S[261]);
const context = canvas.getContext(_S[262]);
canvas.height = viewport.height;
canvas.width = viewport.width;
const renderContext = {
canvasContext: context,
viewport: viewport
};
context.fillStyle = _S[263];
context.fillRect(0, 0, canvas.width, canvas.height);
await page.render(renderContext).promise;
const dataUrl = canvas.toDataURL(_S[264], 0.95);
images.push({
mimeType: _S[265],
data: dataUrl.split(_S[266])[1]
});
}
return images;
} catch (err) {
console.error(_S[267], err);
throw new Error(_S[268] + err.message);
}
}
function _fQ() {
const clone = _e.responseArea.cloneNode(true);
const images = clone.getElementsByTagName(_S[269]);
while (images.length > 0) {
images[0].remove();
}
const hr = clone.getElementsByTagName(_S[270]);
while (hr.length > 0) {
hr[0].remove();
}
const text = clone.innerText.trim();
navigator.clipboard.writeText(text).then(() => {
const originalText = _e.copyBtn.textContent;
_e.copyBtn.textContent = _S[271];
setTimeout(() => {
_e.copyBtn.textContent = originalText;
}, 2000);
}).catch(err => {
console.error(_S[272], err);
alert(_S[273]);
});
}
function _fR(isLoading) {
if (isLoading) {
_e.loadingIndicator.classList.remove(_S[274]);
_e.responseArea.style.opacity = _S[275];
_e.copyBtn.classList.add(_S[276]);
_e.screenshotBtn.classList.add(_S[277]);
} else {
_e.loadingIndicator.classList.add(_S[278]);
_e.responseArea.style.opacity = _S[279];
}
}
function _fS() {
const target = _e.responseArea;
const originalBg = target.style.background;
const dataTheme = document.body.getAttribute(_S[280]);
const bgHex = dataTheme === _S[281] ? _S[282] : _S[283];
const captureBg = dataTheme === _S[284] ? _S[285] : _S[286];
target.style.background = bgHex;
const originalPadding = target.style.padding;
target.style.padding = _S[287];
const iframes = target.querySelectorAll(_S[288]);
const iframeReplacements = [];
iframes.forEach(iframe => {
try {
const svgDoc = iframe.contentDocument || iframe.contentWindow.document;
const svgElement = svgDoc.querySelector(_S[289]);
if (svgElement) {
const width = iframe.style.width || _S[290];
const height = iframe.style.height || _S[291];
const svgString = new XMLSerializer().serializeToString(svgElement);
const encodedData = btoa(unescape(encodeURIComponent(svgString)));
const img = document.createElement(_S[292]);
img.src = _S[293] + encodedData;
img.style.width = width;
img.style.height = height;
img.style.display = _S[294];
img.style.margin = _S[295];
const parent = iframe.parentNode;
const originalOverflow = parent.style.overflowX;
parent.style.overflowX = _S[296];
parent.insertBefore(img, iframe);
iframe.style.display = _S[297];
iframeReplacements.push({
iframe: iframe,
img: img,
parent: parent,
originalOverflow: originalOverflow
});
}
} catch (e) {
console.warn(_S[298], e);
}
});
html2canvas(target, {
useCORS: true,
scale: 2,
backgroundColor: captureBg,
logging: false
}).then(canvas => {
iframeReplacements.forEach(replacement => {
replacement.img.remove();
replacement.iframe.style.display = _S[299];
replacement.parent.style.overflowX = replacement.originalOverflow;
});
target.style.background = originalBg;
target.style.padding = originalPadding;
const link = document.createElement(_S[300]);
link.download = `clear_maker_response_${Date.now()}.png`;
link.href = canvas.toDataURL(_S[301]);
link.click();
}).catch(err => {
iframeReplacements.forEach(replacement => {
replacement.img.remove();
replacement.iframe.style.display = _S[302];
replacement.parent.style.overflowX = replacement.originalOverflow;
});
console.error(err);
target.style.background = originalBg;
target.style.padding = originalPadding;
alert(_S[303]);
});
}
function openTexSauceMaker() {
const target = _e.responseArea;
const originalBg = target.style.background;
const dataTheme = document.body.getAttribute(_S[304]);
const bgHex = dataTheme === _S[305] ? _S[306] : _S[307];
const captureBg = dataTheme === _S[308] ? _S[309] : _S[310];
target.style.background = bgHex;
const originalPadding = target.style.padding;
target.style.padding = _S[311];
const iframes = target.querySelectorAll(_S[312]);
const iframeReplacements = [];
let extractedTikZ = [];
if (window.tikzBlocks && window.tikzBlocks.length > 0) {
extractedTikZ = [...window.tikzBlocks];
} else {
}
iframes.forEach(iframe => {
try {
const svgDoc = iframe.contentDocument || iframe.contentWindow.document;
const svgElement = svgDoc.querySelector(_S[313]);
if (svgElement) {
const width = iframe.style.width || _S[314];
const height = iframe.style.height || _S[315];
const svgString = new XMLSerializer().serializeToString(svgElement);
const encodedData = btoa(unescape(encodeURIComponent(svgString)));
const img = document.createElement(_S[316]);
img.src = _S[317] + encodedData;
img.style.width = width;
img.style.height = height;
img.style.display = _S[318];
img.style.margin = _S[319];
const parent = iframe.parentNode;
const originalOverflow = parent.style.overflowX;
parent.style.overflowX = _S[320];
parent.insertBefore(img, iframe);
iframe.style.display = _S[321];
iframeReplacements.push({
iframe: iframe,
img: img,
parent: parent,
originalOverflow: originalOverflow
});
}
} catch (e) {
console.warn(_S[322], e);
}
});
html2canvas(target, {
useCORS: true,
scale: 2,
backgroundColor: captureBg,
logging: false
}).then(canvas => {
iframeReplacements.forEach(replacement => {
replacement.img.remove();
replacement.iframe.style.display = _S[323];
replacement.parent.style.overflowX = replacement.originalOverflow;
});
target.style.background = originalBg;
target.style.padding = originalPadding;
const dataUrl = canvas.toDataURL(_S[324]);
const texWindow = window.open(TEX_SAUCE_MAKER_URL, _S[325]);
if (!texWindow) {
alert(_S[326]);
return;
}
const messageHandler = (event) => {
if (event.data && event.data.type === _S[327]) {
window.removeEventListener(_S[328], messageHandler);
texWindow.postMessage({
type: _S[329],
imageDataUrl: dataUrl,
mimeType: _S[330],
tikzCodeArray: extractedTikZ
}, _S[331]);
console.log(_S[332]);
}
};
window.addEventListener(_S[333], messageHandler);
setTimeout(() => {
window.removeEventListener(_S[334], messageHandler);
}, 30000);
}).catch(err => {
iframeReplacements.forEach(replacement => {
replacement.img.remove();
replacement.iframe.style.display = _S[335];
replacement.parent.style.overflowX = replacement.originalOverflow;
});
console.error(err);
target.style.background = originalBg;
target.style.padding = originalPadding;
alert(_S[336]);
});
}
function _fT(isEditing) {
if (isEditing) {
_e.responseArea.classList.add(_S[337]);
_e.responseEditor.classList.remove(_S[338]);
_e.responseEditor.value = _s.currentMarkdown || _S[339];
_e.editBtn.classList.add(_S[340]);
_e.copyBtn.classList.add(_S[341]);
_e.screenshotBtn.classList.add(_S[342]);
_e.editActions.classList.remove(_S[343]);
} else {
_e.responseArea.classList.remove(_S[344]);
_e.responseEditor.classList.add(_S[345]);
_e.editBtn.classList.remove(_S[346]);
_e.copyBtn.classList.remove(_S[347]);
_e.screenshotBtn.classList.remove(_S[348]);
_e.editActions.classList.add(_S[349]);
}
}
function _fU() {
const newMarkdown = _e.responseEditor.value;
_s.currentMarkdown = newMarkdown;
const allImages = [];
if (_e.includeChecks.question.checked) allImages.push(..._s.files.question);
if (_e.includeChecks.model.checked) allImages.push(..._s.files.model);
if (_e.includeChecks.student.checked) allImages.push(..._s.files.student);
_fN(newMarkdown, allImages);
_fT(false);
}
function _fV() {
_fT(false);
}
async function _fW() {
const modal = document.getElementById(_S[350]);
const content = document.getElementById(_S[351]);
_fD(_e.settingsModal, false);
_fD(modal, true);
content.innerHTML = _S[352];
try {
console.log(_S[353]);
const text = README_CONTENT;
if (typeof marked === _S[354]) {
throw new Error(_S[355]);
}
const html = marked.parse(text);
content.innerHTML = html;
} catch (err) {
console.error(_S[356], err);
content.innerHTML = `<p style="color:red">読み込みに失敗しました。<br>${err.message}</p>`;
}
}
_f1();})();