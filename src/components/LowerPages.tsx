import { FormEvent, useState } from "react";

type LegalSection = { title: string; body: string };

const navigation = [
  ["会社概要", "/company"],
  ["利用規約", "/terms"],
  ["特定商取引法に基づく表記", "/commerce"],
  ["プライバシーポリシー", "/privacy"],
  ["お問い合わせ", "/contact"],
] as const;

function SiteHeader() {
  return (
    <header className="lower-header">
      <div className="lower-shell lower-header-inner">
        <a className="lower-logo" href="/">TRAKON</a>
        <div className="lower-header-actions">
          <a className="lower-back" href="/">TRAKONへ戻る</a>
          <a className="lower-cta" href="https://app.trakon.app/login">無料で始める <span>→</span></a>
        </div>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="lower-footer">
      <div className="lower-shell lower-footer-inner">
        <a className="lower-logo lower-logo-small" href="/">TRAKON</a>
        <nav aria-label="フッターナビゲーション">
          {navigation.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
        </nav>
        <p>© OSAMARU COMPANY</p>
      </div>
    </footer>
  );
}

function PageHero({ label, title, lead }: { label: string; title: string; lead: string }) {
  return (
    <section className="lower-hero">
      <div className="lower-shell lower-hero-inner">
        <p className="lower-eyebrow">{label}</p>
        <h1>{title}</h1>
        <p className="lower-lead">{lead}</p>
      </div>
    </section>
  );
}

function PageFrame({ children, label, title, lead }: { children: React.ReactNode; label: string; title: string; lead: string }) {
  return <div className="lower-page"><SiteHeader /><main><PageHero label={label} title={title} lead={lead} />{children}</main><SiteFooter /></div>;
}

export function CompanyPage() {
  const rows = [
    ["会社名", "株式会社おさまるカンパニー"],
    ["サービス名", "TRAKON（トラコン）"],
    ["代表者", "宮丸 長"],
    ["所在地", <>〒330-9501<br />埼玉県さいたま市大宮区桜木町2丁目3番地<br />大宮マルイ7階</>],
    ["電話番号", "03-6110-0597"],
    ["事業内容", <>サイトの企画・設計・制作・運用<br />サービス・業務支援ツールの企画・開発<br />デジタル領域におけるコンサルティング</>],
  ];
  const services = [
    ["01", "サイト制作", "企業サイトやサービスサイトの企画・情報設計から、デザイン、実装、公開後の運用まで。"],
    ["02", "サービス開発", "現場の課題を整理し、使い続けられる業務支援ツールやWebサービスを設計・開発します。"],
    ["03", "デジタルコンサルティング", "事業とユーザーの両方を見ながら、Web活用や業務改善の進め方を一緒に考えます。"],
  ];
  return <PageFrame label="COMPANY" title="会社概要" lead="TRAKONを企画・運営する、株式会社おさまるカンパニーについて。">
    <section className="lower-content lower-shell">
      <h2>会社情報</h2>
      <dl className="company-table">{rows.map(([label, value]) => <div key={String(label)}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
      <div className="service-heading"><p className="lower-eyebrow">OUR BUSINESS</p><h2>私たちが行うこと</h2></div>
      <div className="service-grid">{services.map(([num, title, text]) => <article key={num}><span>{num}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>
  </PageFrame>;
}

const terms: LegalSection[] = [
  { title: "第1条　適用", body: "本規約は、株式会社おさまるカンパニー（以下「当社」）が提供するTRAKON（以下「本サービス」）の利用条件を定めるものです。本サービスの利用者は、本規約および当社が本サービス上で別途掲示する条件に同意したうえで、本サービスを利用するものとします。" },
  { title: "第2条　利用者", body: "本規約において「会員」とは、アカウントを登録し、プロジェクトを作成または管理する者をいいます。「非会員」とは、会員から共有されたリンク等を通じて、閲覧、確認、TOSS、RETURN、完了その他当社が認める操作を行う者をいいます。会員および非会員を総称して「利用者」といいます。" },
  { title: "第3条　アカウントおよび共有リンク", body: "会員は、登録情報を正確かつ最新の状態に保ち、自己の責任でアカウント、認証情報および共有リンクを管理するものとします。アカウントを第三者へ譲渡または貸与することはできません。共有リンクを第三者へ発行した場合、その送信先、公開範囲および失効管理は発行した会員の責任で行うものとします。" },
  { title: "第4条　料金プランおよび利用上限", body: "本サービスには、Free、Personal、TeamおよびEnterpriseの各プランがあります。各プランの料金、会員数、プロジェクト数その他の利用上限は、料金ページまたは申込画面に表示します。\n\nFreeは無償プランです。PersonalおよびTeamは月額の自動更新プランです。Enterpriseは個別見積および個別契約とし、本規約と個別契約の内容が異なる場合は、個別契約が優先します。非会員はTeam等の会員数には含まれません。" },
  { title: "第5条　有料プランおよび決済", body: "PersonalおよびTeamの料金は税込表示とし、申込画面に表示された金額をクレジットカードでお支払いいただきます。決済および請求管理にはStripeを利用します。当社は、クレジットカード番号等の決済情報そのものを保持しません。\n\n有料プランは、解約または他のプランへの変更が行われない限り、1か月ごとに自動更新され、各更新日に次の1か月分の料金が請求されます。" },
  { title: "第6条　無料トライアル", body: "無料トライアルの適用条件を満たすPersonalおよびTeamの初回申込者には、Subscription開始から120時間の無料トライアルを提供します。無料トライアルの開始には、申込時のクレジットカード登録が必要です。\n\n無料トライアル期間が終了すると、選択した有料プランの初回請求書が発行され、Stripeによる決済処理が開始されます。利用者が無料トライアル期間中に解約した場合、トライアル終了時まで利用でき、初回課金は行われません。無料トライアルは、原則として1アカウントおよび1組織につき1回に限ります。" },
  { title: "第7条　プラン変更", body: "PersonalからTeamへの変更は、申込時点で適用し、当該請求期間の残日数に応じた差額を請求します。Teamの利用権限は、追加決済の成功を確認した後に付与します。\n\nTeamからPersonalへの変更は次回更新日に適用し、日割り返金は行いません。変更には、会員が1名以下、かつプロジェクトが10件以下であることを要します。上限を超える場合、利用者は変更前に対象の会員およびプロジェクトを整理するものとします。" },
  { title: "第8条　解約および返金", body: "利用者は、当社が指定する画面から有料プランを解約できます。通常の解約は現在の請求期間の終了時に効力を生じ、それまでは契約中のプランを利用できます。支払済み料金の日割り返金は、法令上必要な場合または当社が個別に認めた場合を除き行いません。\n\nアプリの削除、ブラウザを閉じること、アカウントを利用しないことのみでは解約になりません。" },
  { title: "第9条　支払いの失敗", body: "カード決済に失敗した場合、Stripeは現行の設定に基づき、最初の失敗から7日間に最大4回の再試行を行います。この期間中、当社は利用者へ決済方法の更新を依頼することがあります。\n\n再試行後も支払いを確認できない場合、契約状態を未払いとし、本サービスの新規作成および編集機能を停止して閲覧のみに制限することがあります。支払いが確認された場合、当社所定の方法で利用権限を復旧します。" },
  { title: "第10条　プラン変更後等のデータ", body: "プラン変更、解約または未払いにより利用上限を超えた場合も、当社は直ちにプロジェクト、履歴またはメンバーデータを削除しません。利用者が継続利用する対象を選択するまで、上限を超えたデータの新規編集を停止し、閲覧またはエクスポートに限定することがあります。\n\n有料プラン終了後のデータは原則として90日間保持し、その後、法令上の保存義務または当社の正当な業務上の必要がある場合を除き、削除または匿名化することがあります。利用者は必要なデータを保持期間内に出力するものとします。" },
  { title: "第11条　利用者が登録する情報", body: "利用者が本サービスへ登録または送信した文章、画像、ファイルその他の情報に関する権利は、当該利用者または正当な権利者に留保されます。利用者は、本サービスの提供、保守、障害対応およびバックアップに必要な範囲で、当社が当該情報を取り扱うことを許諾するものとします。" },
  { title: "第12条　禁止事項", body: "利用者は、法令または公序良俗に反する行為、第三者の権利を侵害する行為、不正アクセス、認証情報または共有リンクの不正使用、本サービスに過度な負荷を与える行為、本サービスの解析、複製または回避を不当に試みる行為、その他当社が合理的な理由により不適切と判断する行為を行ってはなりません。" },
  { title: "第13条　知的財産権", body: "本サービス、当社ウェブサイト、ソフトウェア、デザイン、商標その他当社が提供する素材に関する知的財産権は、当社または正当な権利者に帰属します。本規約は、利用者に対し、本サービスの利用に必要な範囲を超える権利を付与するものではありません。" },
  { title: "第14条　外部サービス", body: "本サービスは、Stripe、クラウド基盤、メール配信その他の外部サービスを利用することがあります。外部サービスの利用には、各提供者の規約、障害、仕様変更または提供停止の影響を受ける場合があります。当社は、外部サービスの選定および管理について合理的な注意を払います。" },
  { title: "第15条　サービスの変更・停止", body: "当社は、本サービスの改善、保守、セキュリティ確保、障害対応、法令対応その他運営上必要な場合、本サービスの全部または一部を変更または停止できます。利用者へ重大な影響を及ぼす予定された変更または停止については、緊急の場合を除き、合理的な方法で事前に案内します。" },
  { title: "第16条　利用停止および登録抹消", body: "利用者が本規約に違反した場合、料金を支払わない場合、不正利用が認められる場合、その他本サービスの運営または安全確保のために合理的に必要な場合、当社は利用制限、利用停止または登録抹消を行うことがあります。緊急の場合を除き、当社は可能な範囲で理由および必要な対応を案内します。" },
  { title: "第17条　免責および責任制限", body: "当社は、本サービスが中断しないこと、誤りがないこと、すべての環境で動作すること、または特定の目的に適合することを保証しません。\n\n当社が利用者に対して損害賠償責任を負う場合、その範囲は通常かつ直接の損害に限り、賠償額は、当社の故意または重大な過失による場合を除き、損害発生前12か月間に当該利用者が当社へ支払った利用料金の総額を上限とします。ただし、消費者契約法その他の法令により責任の制限が認められない場合、この制限は適用しません。" },
  { title: "第18条　個人情報", body: "当社は、利用者の個人情報を、当社のプライバシーポリシーに従って適切に取り扱います。決済に伴いStripe等の委託先が取得する情報は、当該委託先のプライバシーポリシーに従って取り扱われます。" },
  { title: "第19条　規約の変更", body: "当社は、変更が利用者の一般の利益に適合する場合、または契約目的に反せず、変更の必要性および内容の相当性等に照らして合理的な場合、本規約を変更できます。当社は、変更内容および効力発生日を、本サービス上または当社ウェブサイトへの掲載その他相当な方法により、効力発生日までに周知します。" },
  { title: "第20条　準拠法・管轄", body: "本規約は日本法に準拠します。本サービスに関して紛争が生じた場合、さいたま地方裁判所または大宮簡易裁判所を第一審の専属的合意管轄裁判所とします。" },
  { title: "第21条　お問い合わせ", body: "本規約、本サービスの契約、解約または請求に関するお問い合わせは、当社ウェブサイトのお問い合わせフォームよりご連絡ください。" },
];

const privacy: LegalSection[] = [
  { title: "1. 基本方針", body: "株式会社おさまるカンパニー（以下「当社」）は、TRAKON（以下「本サービス」）の提供にあたり取得する個人情報を、関係法令および本ポリシーに従って適切に取り扱います。" },
  { title: "2. 取得する情報", body: "当社は、氏名、会社名、メールアドレス、電話番号、アカウント情報、契約・決済に関する情報、お問い合わせ内容、本サービスへ登録されたデータ、端末情報、IPアドレス、Cookieおよび利用履歴等を取得することがあります。" },
  { title: "3. 利用目的", body: "取得した情報は、本サービスの提供・維持、本人確認、料金請求、TOSS・RETURN等の通知、サポート対応、品質改善、不正利用の防止、重要なお知らせの送付および法令上必要な対応のために利用します。" },
  { title: "4. Cookie・アクセスログ", body: "本サービスでは、ログイン状態の維持、利用状況の把握およびサービス改善のため、Cookieその他これに類する技術を使用することがあります。ブラウザの設定によりCookieを無効にできますが、一部機能が利用できなくなる場合があります。" },
  { title: "5. 第三者提供", body: "当社は、本人の同意がある場合、法令に基づく場合、人の生命・身体または財産の保護に必要な場合等を除き、個人情報を第三者へ提供しません。" },
  { title: "6. 取り扱いの委託", body: "当社は、決済、クラウド基盤、メール配信、分析その他本サービスの運営に必要な範囲で、個人情報の取り扱いを外部事業者へ委託することがあります。この場合、委託先を適切に選定・監督します。" },
  { title: "7. 安全管理", body: "当社は、不正アクセス、紛失、破壊、改ざん、漏えい等を防止するため、アクセス制御、権限管理、通信の保護その他必要かつ適切な安全管理措置を講じます。" },
  { title: "8. 保存期間・削除", body: "取得した情報は、利用目的の達成に必要な期間または法令で定められた期間保存し、その後、安全な方法で削除または匿名化します。" },
  { title: "9. 開示等の請求", body: "本人は、当社が保有する個人情報について、利用目的の通知、開示、訂正、追加、削除、利用停止または第三者提供の停止を求めることができます。本人確認のうえ、法令に従って対応します。" },
  { title: "10. 外部サービス", body: "本サービスから外部サービスへ移動した場合、移動先での情報の取り扱いには、当該サービスのプライバシーポリシーが適用されます。" },
  { title: "11. 内容の変更", body: "当社は、法令またはサービス内容の変更に応じて本ポリシーを改定することがあります。重要な変更は、当社ウェブサイトまたは本サービス上で案内します。" },
  { title: "12. お問い合わせ", body: "個人情報の取り扱いに関するお問い合わせは、当社ウェブサイトのお問い合わせフォームよりご連絡ください。\n\n株式会社おさまるカンパニー\n〒330-9501 埼玉県さいたま市大宮区桜木町2丁目3番地 大宮マルイ7階\n電話番号：03-6110-0597" },
];

function LegalPage({ kind, sections }: { kind: "terms" | "privacy"; sections: LegalSection[] }) {
  const isTerms = kind === "terms";
  return <PageFrame label={isTerms ? "TERMS" : "PRIVACY"} title={isTerms ? "利用規約" : "プライバシーポリシー"} lead={isTerms ? "TRAKONをご利用いただくための条件を定めています。" : "お預かりする情報と、その取り扱いについてご案内します。"}>
    <section className="legal-layout lower-shell">
      <aside className="legal-toc" aria-label="ページ内目次"><p>CONTENTS</p>{sections.map((section, i) => <a href={`#section-${i + 1}`} key={section.title}>{section.title.replace(/^第?\d+(条|\.)?　?/, "")}</a>)}</aside>
      <article className="legal-body"><p className="legal-date">制定日：2026.8.20{isTerms && <>　改定日：2026.8.28</>}</p>{sections.map((section, i) => <section id={`section-${i + 1}`} key={section.title}><h2>{section.title}</h2><p>{section.body}</p></section>)}</article>
    </section>
  </PageFrame>;
}

export function TermsPage() { return <LegalPage kind="terms" sections={terms} />; }
export function PrivacyPage() { return <LegalPage kind="privacy" sections={privacy} />; }

const commerceRows = [
  ["販売事業者", "株式会社おさまるカンパニー"], ["運営責任者", "宮丸 長"],
  ["所在地", "〒330-9501\n埼玉県さいたま市大宮区桜木町2丁目3番地\n大宮マルイ7階"], ["電話番号", "03-6110-0597"],
  ["お問い合わせ", "当サイトのお問い合わせフォームよりご連絡ください。"], ["販売価格", "Free：0円\nPersonal：月額980円（税込）\nTeam：月額9,800円（税込）\nEnterprise：個別見積\n最新の条件は料金ページまたは申込画面に表示します。"],
  ["商品代金以外の必要料金", "インターネット接続に必要な通信料等は利用者の負担となります。"], ["支払方法", "クレジットカード決済。法人契約その他の支払方法は個別にご案内します。"],
  ["支払時期", "PersonalおよびTeamは申込時にクレジットカードを登録し、Subscription開始から120時間の無料トライアル終了後に初回請求書を発行し、Stripeが決済を試みます。以後は1か月ごとの契約更新日に請求します。Enterpriseは個別契約に定めます。"],
  ["無料トライアル", "対象となるPersonalおよびTeamの初回申込者には、Subscription開始から120時間の無料トライアルを提供します。期間中に解約した場合は初回課金を行いません。原則として1アカウントおよび1組織につき1回です。"],
  ["契約期間・自動更新", "PersonalおよびTeamの契約期間は1か月です。解約またはプラン変更がない限り、同一条件で1か月ごとに自動更新します。"],
  ["サービスの提供時期", "Freeは会員登録完了後に利用できます。PersonalおよびTeamは申込および決済方法の登録完了後、無料トライアルとして利用を開始できます。Enterpriseは個別契約に定めます。"],
  ["プラン変更", "PersonalからTeamへの変更は即時に適用し、残期間に応じた差額を請求します。TeamからPersonalへの変更は、利用上限を満たす場合に限り次回更新日に適用し、日割り返金は行いません。"],
  ["解約・返金", "解約は当社指定の画面から行えます。通常の解約は現在の請求期間の終了時に効力を生じ、それまでは利用できます。支払済み料金の日割り返金は、法令上必要な場合または当社が個別に認めた場合を除き行いません。アプリの削除または不使用のみでは解約になりません。"],
  ["支払い失敗時の取扱い", "カード決済に失敗した場合、現行設定では7日間に最大4回再試行します。支払いを確認できない場合は、契約を未払い状態とし、新規作成および編集を停止して閲覧のみに制限することがあります。"],
  ["動作環境", "対応ブラウザおよび推奨環境は、サービス内またはヘルプページに表示します。"],
];

export function CommercePage() {
  return <PageFrame label="COMMERCE" title="特定商取引法に基づく表記" lead="TRAKONの販売条件と事業者情報をご案内します。">
    <section className="lower-content lower-shell commerce-content"><dl className="commerce-table">{commerceRows.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl><p className="commerce-note">記載内容は、サービス提供条件の変更に応じて更新します。</p></section>
  </PageFrame>;
}

export function ContactPage() {
  const [confirmed, setConfirmed] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setConfirmed(true); };
  return <PageFrame label="CONTACT" title="お問い合わせ" lead="導入のご相談、サービスについてのご質問をお寄せください。">
    <section className="contact-layout lower-shell">
      <div className="contact-intro"><p className="lower-eyebrow">GET IN TOUCH</p><h2>お気軽にご相談ください</h2><p>内容を確認後、通常2〜3営業日以内に担当者よりご連絡します。</p></div>
      <form className="contact-form" onSubmit={submit}>
        <label>会社名 <span>任意</span><input name="company" placeholder="例：株式会社灯和食品" /></label>
        <label>お名前 <b>必須</b><input required name="name" placeholder="例：石原 美咲" /></label>
        <label>メールアドレス <b>必須</b><input required type="email" name="email" placeholder="例：misaki.ishihara@example.jp" /></label>
        <label>お問い合わせ種別 <b>必須</b><select required name="type" defaultValue=""><option value="" disabled>選択してください</option><option>導入について</option><option>料金・契約について</option><option>サービスについて</option><option>その他</option></select></label>
        <label>お問い合わせ内容 <b>必須</b><textarea required name="message" placeholder="ご相談内容やご質問をご入力ください" /></label>
        <label className="privacy-check"><input required type="checkbox" /> <span><a href="/privacy">プライバシーポリシー</a>に同意する</span></label>
        {confirmed && <div className="form-confirm" role="status"><strong>入力内容を確認しました。</strong><span>送信機能の接続後、この内容で送信できます。</span></div>}
        <button type="submit">入力内容を確認する <span>→</span></button><p className="form-note">送信前に入力内容をご確認いただけます。</p>
      </form>
    </section>
  </PageFrame>;
}
