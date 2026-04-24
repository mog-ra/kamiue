// =============================================
// 労務コラム機能スクリプト（分離ファイル）
// カミウエ社労士事務所
// =============================================

const COLUMNS = [
    {
        id: 1,
        title: '2025年度版 中小企業が活用すべき助成金戦略【最新改正対応】',
        excerpt: '助成金は「もらえるならラッキー」ではなく、人材戦略の一環として計画的に活用すべきものです。2025年4月のキャリアアップ助成金改正を含め、実効性が高い助成金を最新情報で解説します。',
        category: '助成金',
        emoji: '💰',
        date: '2025年10月',
        isNew: true,
        readTime: '9分',
        contact: '助成金の申請サポートを依頼する',
        body: `
<p class="text-lg text-gray-700 leading-relaxed mb-8 font-medium">助成金は「もらえるならラッキー」ではなく、<strong>人材戦略の一環として計画的に活用すべき経営ツール</strong>です。2025年4月にキャリアアップ助成金が大幅改正されました。最新の制度内容を正確に把握し、受給漏れ・勘違いを防ぎましょう。</p>

<div class="bg-red-50 border-l-4 border-red-500 rounded-r-xl p-5 mb-8">
  <p class="font-black text-red-800 mb-1">🚨 2025年4月 キャリアアップ助成金（正社員化コース）が大幅改正！</p>
  <p class="text-gray-700 text-sm leading-relaxed">これまで一律80万円だった支給額が、<strong>「重点支援対象者」かどうかで変わる仕組み</strong>に変更されました。要件を事前に確認せずに正社員転換を進めると、想定より大幅に少ない金額しか受給できないケースがあります。</p>
</div>

<div class="bg-blue-50 rounded-2xl p-6 mb-8">
  <h2 class="text-xl font-black text-blue-900 mb-5 flex items-center gap-2">
    <span class="text-2xl">🏆</span> 最重要5施策（2025年度最新版）
  </h2>
  <div class="space-y-6">
    <div class="bg-white rounded-xl p-5 border border-blue-100 shadow-sm">
      <p class="font-black text-blue-800 mb-2 text-base">1. キャリアアップ助成金（正社員化コース）【2025年4月改正】</p>
      <p class="text-sm font-bold text-orange-600 mb-2">■ 受給額：重点支援対象者は最大80万円 / それ以外は40万円（中小企業）</p>
      <p class="text-gray-600 text-sm leading-relaxed mb-3">2025年4月から「重点支援対象者」制度が新設されました。重点支援対象者とは①雇入れから3年以上の有期雇用労働者、②雇入れから3年未満でも過去5年間の正社員経験が1年以下かつ過去1年間に正社員として雇用されていない者、③派遣労働者・母子家庭の母等・人材開発支援助成金の特定訓練修了者のいずれかに該当する人です。</p>
      <div class="bg-orange-50 rounded-lg p-3 text-xs text-orange-900">
        ⚠️ 新規学卒者は雇入れから1年未満の場合は対象外に。申請前に必ず要件確認を。
      </div>
    </div>
    <div class="bg-white rounded-xl p-5 border border-blue-100 shadow-sm">
      <p class="font-black text-blue-800 mb-2 text-base">2. 業務改善助成金</p>
      <p class="text-sm font-bold text-orange-600 mb-2">■ 受給額：最大600万円（事業場内最低賃金の引き上げ幅による）</p>
      <p class="text-gray-600 text-sm leading-relaxed">POSレジ、券売機、予約システムなど生産性向上設備の導入と同時に、事業場内最低賃金を引き上げる必要あり。2025年10月に宮城県最低賃金が1,038円（前年比＋65円）に改定されたことで、対象企業の幅が広がっています。設備投資を検討中なら最優先で活用すべき助成金です。</p>
    </div>
    <div class="bg-white rounded-xl p-5 border border-blue-100 shadow-sm">
      <p class="font-black text-blue-800 mb-2 text-base">3. 人材開発支援助成金（人材育成支援コース）</p>
      <p class="text-sm font-bold text-orange-600 mb-2">■ 受給額：経費助成45%〜75% + 賃金助成480円〜960円/時間</p>
      <p class="text-gray-600 text-sm leading-relaxed">OFF-JT（外部研修）とOJTを組み合わせた訓練が対象。IT企業の技術研修、製造業の技能講習など幅広く活用可能。訓練計画の事前提出が必須で、計画から実施まで3ヶ月程度の準備期間が必要です。キャリアアップ助成金（正社員化コース）との併用で支給額を最大化できます。</p>
    </div>
    <div class="bg-white rounded-xl p-5 border border-blue-100 shadow-sm">
      <p class="font-black text-blue-800 mb-2 text-base">4. 両立支援等助成金（出生時両立支援コース）</p>
      <p class="text-sm font-bold text-orange-600 mb-2">■ 受給額：最大57万円（代替要員加算含む）</p>
      <p class="text-gray-600 text-sm leading-relaxed">男性従業員が育児休業・育児目的休暇を取得した場合に支給。2025年4月施行の育児介護休業法改正で育休取得状況の公表義務が300人超の企業に拡大されたことにより、中小企業でも積極的な取り組みが採用競争力に直結します。産後パパ育休制度の就業規則整備が受給要件です。</p>
    </div>
    <div class="bg-white rounded-xl p-5 border border-blue-100 shadow-sm">
      <p class="font-black text-blue-800 mb-2 text-base">5. キャリアアップ助成金（短時間労働者労働時間延長支援コース）【2025年7月新設】</p>
      <p class="text-sm font-bold text-orange-600 mb-2">■ 受給額：最大50万円（2年目にさらに25万円加算）</p>
      <p class="text-gray-600 text-sm leading-relaxed">パートの労働時間延長または賃金引上げにより新たに社会保険を適用させた場合に助成。2026年10月に「106万円の壁（月額88,000円要件）」の撤廃が予定されており、その前準備として活用する企業が増えています。週5時間以上の延長または時給引き上げが条件。</p>
    </div>
  </div>
</div>

<div class="bg-red-50 border-l-4 border-red-500 rounded-r-xl p-6 mb-8">
  <h2 class="text-xl font-black text-red-900 mb-4">⚠️ 申請で失敗しやすい3つのポイント</h2>
  <div class="space-y-4">
    <div class="flex items-start gap-3">
      <span class="text-red-600 font-black text-lg mt-0.5">×</span>
      <div>
        <p class="font-bold text-gray-800 mb-1">事後申請</p>
        <p class="text-gray-600 text-sm leading-relaxed">多くの助成金は「計画提出→実施→支給申請」の順が必須。すでに実施した取り組みは対象外になります。「先に社労士に相談する」習慣が受給成功の鍵です。</p>
      </div>
    </div>
    <div class="flex items-start gap-3">
      <span class="text-red-600 font-black text-lg mt-0.5">×</span>
      <div>
        <p class="font-bold text-gray-800 mb-1">書類不備</p>
        <p class="text-gray-600 text-sm leading-relaxed">就業規則・賃金台帳・出勤簿・雇用契約書が整っていないと審査で落ちます。日頃の労務管理の質が助成金受給率に直結します。</p>
      </div>
    </div>
    <div class="flex items-start gap-3">
      <span class="text-red-600 font-black text-lg mt-0.5">×</span>
      <div>
        <p class="font-bold text-gray-800 mb-1">旧制度の金額で計算している</p>
        <p class="text-gray-600 text-sm leading-relaxed">キャリアアップ助成金は2025年4月に大幅改正。「以前と同じく80万円もらえる」と思い込んでいると、実際は40万円しか受給できないケースがあります。申請前に最新の支給額・要件を必ず確認しましょう。</p>
      </div>
    </div>
  </div>
</div>

<div class="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-8">
  <p class="text-amber-900 text-sm leading-relaxed">
    <span class="font-black text-base">💡 神植からのアドバイス</span><br><br>
    助成金の要件・金額は年度ごとに変わります。特に2025年度のキャリアアップ助成金は、重点支援対象者かどうかで受給額が倍近く変わります。「去年聞いた話」で動くと要件を満たさないケースが多い。最新情報をもとに、貴社に最適な組み合わせをご提案します。まず一度ご相談ください。
  </p>
</div>
`
    },
    {
        id: 2,
        title: '残業代未払いリスクを防ぐ実務チェックポイント',
        excerpt: '残業代の計算ミスは、労働基準監督署の臨検や従業員からの請求により、過去2年分の遡及支払いを求められるリスクがあります。中小企業で特に多い3つの誤りと対策を解説します。',
        category: 'リスク管理',
        emoji: '⚠️',
        date: '2025年3月',
        isNew: true,
        readTime: '7分',
        contact: '労務リスク診断を受ける（無料）',
        body: `
<p class="text-lg text-gray-700 leading-relaxed mb-8 font-medium">残業代の計算ミスは、<strong>労働基準監督署の臨検や従業員からの請求により、過去2年分（悪質な場合3年分）の遡及支払いを求められる</strong>リスクがあります。中小企業で特に多い3つの誤りとその対策を解説します。</p>

<div class="bg-red-50 rounded-2xl p-6 mb-8">
  <h2 class="text-xl font-black text-red-900 mb-5 flex items-center gap-2">
    <span class="text-2xl">🚨</span> 危険度★★★ よくある致命的ミス
  </h2>
  <div class="space-y-6">
    <div class="border-l-4 border-red-500 bg-white rounded-r-xl p-5 shadow-sm">
      <p class="font-black text-red-800 mb-2 text-base">ミス1：固定残業代の不適切運用</p>
      <div class="bg-red-50 rounded-lg p-3 mb-3">
        <p class="text-xs font-bold text-red-700 mb-1">【よくあるNG例】</p>
        <p class="text-gray-700 text-sm">基本給30万円の中に「固定残業代含む」と記載しているだけ</p>
      </div>
      <p class="text-gray-600 text-sm leading-relaxed mb-3"><span class="font-bold text-red-700">なぜダメか：</span>基本給と固定残業代を明確に区分せず、何時間分の残業代なのか明示していない場合、裁判では固定残業代として認められません。全額が基本給と判断され、別途残業代の支払い義務が発生します。</p>
      <p class="text-green-700 text-sm font-bold bg-green-50 rounded-lg p-3">✓ 正しい対処：基本給25万円 + 固定残業代5万円（月30時間分）と明記し、30時間超過分は別途支給する旨を雇用契約書と給与明細に明示する</p>
    </div>
    <div class="border-l-4 border-red-500 bg-white rounded-r-xl p-5 shadow-sm">
      <p class="font-black text-red-800 mb-2 text-base">ミス2：法定休日と所定休日の割増率混同</p>
      <div class="bg-red-50 rounded-lg p-3 mb-3">
        <p class="text-xs font-bold text-red-700 mb-1">【よくあるNG例】</p>
        <p class="text-gray-700 text-sm">土日どちらも35%割増で計算している</p>
      </div>
      <p class="text-gray-600 text-sm leading-relaxed mb-3"><span class="font-bold text-red-700">正解：</span>週1日の法定休日（例：日曜）は<strong>35%割増</strong>、それ以外の休日（例：土曜）は時間外労働として<strong>25%割増</strong>。ただし週40時間を超えていれば土曜も25%割増対象。</p>
      <p class="text-green-700 text-sm font-bold bg-green-50 rounded-lg p-3">✓ 正しい対処：就業規則で「法定休日は日曜日とする」と明記。給与ソフトで法定休日労働と時間外労働を分けて管理する</p>
    </div>
    <div class="border-l-4 border-red-500 bg-white rounded-r-xl p-5 shadow-sm">
      <p class="font-black text-red-800 mb-2 text-base">ミス3：管理監督者の誤認定</p>
      <div class="bg-red-50 rounded-lg p-3 mb-3">
        <p class="text-xs font-bold text-red-700 mb-1">【よくあるNG例】</p>
        <p class="text-gray-700 text-sm">「店長」だから管理職扱いで残業代なし</p>
      </div>
      <p class="text-gray-600 text-sm leading-relaxed mb-3"><span class="font-bold text-red-700">判断基準：</span>①経営方針の決定に参画、②労務管理の権限（採用・解雇の決定権）、③労働時間の裁量、④地位にふさわしい待遇、の<strong>全てを満たす必要</strong>があります。名称だけでは不十分。</p>
      <p class="text-green-700 text-sm font-bold bg-green-50 rounded-lg p-3">✓ 正しい対処：実態が伴わない「名ばかり管理職」には残業代を支払う。または、実質的な権限委譲と相応の待遇改善を実施する</p>
    </div>
  </div>
</div>

<div class="bg-gray-50 rounded-2xl p-6 mb-8">
  <h2 class="text-xl font-black text-blue-900 mb-4">📋 すぐ使える！残業代計算チェックリスト</h2>
  <div class="space-y-3">
    <label class="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-100 cursor-pointer hover:border-blue-300 transition">
      <input type="checkbox" class="mt-0.5 w-4 h-4 accent-blue-900">
      <span class="text-sm text-gray-700">割増賃金の計算基礎に、通勤手当以外の全手当（職務手当・役職手当等）を含めているか</span>
    </label>
    <label class="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-100 cursor-pointer hover:border-blue-300 transition">
      <input type="checkbox" class="mt-0.5 w-4 h-4 accent-blue-900">
      <span class="text-sm text-gray-700">固定残業代の金額と時間数を、雇用契約書・給与明細の両方に明記しているか</span>
    </label>
    <label class="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-100 cursor-pointer hover:border-blue-300 transition">
      <input type="checkbox" class="mt-0.5 w-4 h-4 accent-blue-900">
      <span class="text-sm text-gray-700">法定休日（35%割増）と所定外休日（25%割増）を区別して計算しているか</span>
    </label>
    <label class="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-100 cursor-pointer hover:border-blue-300 transition">
      <input type="checkbox" class="mt-0.5 w-4 h-4 accent-blue-900">
      <span class="text-sm text-gray-700">管理監督者の認定要件（4要素）を実態ベースで確認しているか</span>
    </label>
    <label class="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-100 cursor-pointer hover:border-blue-300 transition">
      <input type="checkbox" class="mt-0.5 w-4 h-4 accent-blue-900">
      <span class="text-sm text-gray-700">深夜（22時〜翌5時）の割増25%を、時間外・休日割増に加算して計算しているか</span>
    </label>
  </div>
</div>

<div class="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-8">
  <p class="text-amber-900 text-sm leading-relaxed">
    <span class="font-black text-base">💡 神植からのアドバイス</span><br><br>
    残業代トラブルの多くは「知らなかった」では済まされません。労働基準法は強行法規のため、就業規則や雇用契約書に違法な内容を記載していても無効となり、法定どおりの支払い義務が発生します。月1回の給与計算時に、労働時間の集計方法と残業代計算ロジックを必ず確認しましょう。
  </p>
</div>
`
    },
    {
        id: 3,
        title: '36協定の実務完全ガイド - 届出から運用まで',
        excerpt: '36協定は、法定労働時間を超える残業・休日労働を命じる場合に必須の労使協定です。「うちは36協定出してない」は即アウト。作成・届出の完全手順を徹底解説します。',
        category: '法令遵守',
        emoji: '📋',
        date: '2025年2月',
        isNew: false,
        readTime: '10分',
        contact: '36協定の作成・届出を依頼する',
        body: `
<p class="text-lg text-gray-700 leading-relaxed mb-8 font-medium">36協定（サブロク協定）は、法定労働時間（1日8時間・週40時間）を超える時間外労働や休日労働を命じる場合に<strong>必須の労使協定</strong>です。「うちの会社は残業させているけど36協定出してない」は即アウト。<strong>罰則は6ヶ月以下の懲役または30万円以下の罰金</strong>です。</p>

<div class="bg-green-50 rounded-2xl p-6 mb-8">
  <h2 class="text-xl font-black text-green-900 mb-5 flex items-center gap-2">
    <span class="text-2xl">📝</span> 36協定 作成・届出の完全手順
  </h2>
  <div class="space-y-4">
    <div class="bg-white rounded-xl p-5 border border-green-100 shadow-sm">
      <p class="font-black text-green-800 mb-2 flex items-center gap-2 text-base">
        <span class="bg-green-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-black">1</span>
        過半数代表者の選出（最重要ステップ）
      </p>
      <p class="text-gray-600 text-sm leading-relaxed mb-2 pl-9">労働者の過半数を代表する者を、<strong>民主的な方法（投票・挙手など）</strong>で選出。管理監督者は代表者になれません。会社が一方的に指名したり、立候補者1名を信任投票で選ぶのは不適切。</p>
      <p class="text-red-700 text-xs font-bold pl-9 bg-red-50 rounded-lg p-2">⚠️ NG例：社長が「君が代表ね」と指名／親睦会の幹事が自動的に代表者になる</p>
    </div>
    <div class="bg-white rounded-xl p-5 border border-green-100 shadow-sm">
      <p class="font-black text-green-800 mb-2 flex items-center gap-2 text-base">
        <span class="bg-green-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-black">2</span>
        協定内容の決定
      </p>
      <div class="pl-9 space-y-3 text-sm">
        <div>
          <p class="font-bold text-gray-700 mb-1">原則的な上限（一般条項）</p>
          <ul class="text-gray-600 space-y-1 text-sm">
            <li>• 1ヶ月：<strong>45時間以内</strong></li>
            <li>• 1年：<strong>360時間以内</strong></li>
          </ul>
        </div>
        <div>
          <p class="font-bold text-gray-700 mb-1">特別条項（臨時的な特別の事情がある場合のみ）</p>
          <ul class="text-gray-600 space-y-1 text-sm">
            <li>• 1ヶ月：100時間未満（休日労働含む）</li>
            <li>• 年6ヶ月まで：月45時間超を可能とする</li>
            <li>• 1年：720時間以内</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="bg-white rounded-xl p-5 border border-green-100 shadow-sm">
      <p class="font-black text-green-800 mb-2 flex items-center gap-2 text-base">
        <span class="bg-green-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-black">3</span>
        労働基準監督署への届出
      </p>
      <p class="text-gray-600 text-sm leading-relaxed pl-9">協定締結後、<strong>遅滞なく</strong>所轄の労働基準監督署へ届出。有効期間は最長1年間のため、毎年更新が必要。電子申請（e-Gov）も可能で、郵送より迅速に処理されます。</p>
    </div>
  </div>
</div>

<div class="bg-blue-50 rounded-2xl p-6 mb-8">
  <h2 class="text-xl font-black text-blue-900 mb-4">✅ 実務チェックリスト</h2>
  <div class="space-y-3">
    <label class="flex items-start gap-3 bg-white rounded-xl p-4 border border-blue-100 cursor-pointer hover:border-blue-400 transition">
      <input type="checkbox" class="mt-0.5 w-4 h-4 accent-green-600">
      <span class="text-sm text-gray-700">過半数代表者を投票・挙手等の民主的方法で選出した（選出過程の記録を保管）</span>
    </label>
    <label class="flex items-start gap-3 bg-white rounded-xl p-4 border border-blue-100 cursor-pointer hover:border-blue-400 transition">
      <input type="checkbox" class="mt-0.5 w-4 h-4 accent-green-600">
      <span class="text-sm text-gray-700">時間外労働の上限（月45時間・年360時間）を遵守できる体制になっている</span>
    </label>
    <label class="flex items-start gap-3 bg-white rounded-xl p-4 border border-blue-100 cursor-pointer hover:border-blue-400 transition">
      <input type="checkbox" class="mt-0.5 w-4 h-4 accent-green-600">
      <span class="text-sm text-gray-700">特別条項を設ける場合、「臨時的な特別の事情」を具体的に記載した</span>
    </label>
    <label class="flex items-start gap-3 bg-white rounded-xl p-4 border border-blue-100 cursor-pointer hover:border-blue-400 transition">
      <input type="checkbox" class="mt-0.5 w-4 h-4 accent-green-600">
      <span class="text-sm text-gray-700">有効期間の起算日と満了日を明記し、カレンダーに更新時期を登録した</span>
    </label>
    <label class="flex items-start gap-3 bg-white rounded-xl p-4 border border-blue-100 cursor-pointer hover:border-blue-400 transition">
      <input type="checkbox" class="mt-0.5 w-4 h-4 accent-green-600">
      <span class="text-sm text-gray-700">労働者への周知（社内掲示・イントラ掲載など）を実施した</span>
    </label>
  </div>
</div>

<div class="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-8">
  <p class="text-amber-900 text-sm leading-relaxed">
    <span class="font-black text-base">💡 神植からのアドバイス</span><br><br>
    36協定は「とりあえず出しておけばいい」書類ではありません。実際の労働時間が協定の上限を超えた場合、協定があっても法違反になります。毎月の労働時間を集計し、協定の上限に近づいたら早めにアラートを上げる仕組みを整えましょう。更新時期が近づいたら必ずご連絡ください。
  </p>
</div>
`
    },
    {
        id: 4,
        title: 'クラウド勤怠管理システム導入の成功法則',
        excerpt: 'タイムカードの集計に毎月丸1日かかる非効率から脱却するには、クラウド勤怠システムが最適解。主要3サービスの比較と、失敗しない3ヶ月導入プランをご紹介します。',
        category: 'DX推進',
        emoji: '📱',
        date: '2025年1月',
        isNew: false,
        readTime: '9分',
        contact: '勤怠システム導入支援を相談する',
        body: `
<p class="text-lg text-gray-700 leading-relaxed mb-8 font-medium">「タイムカードの集計に毎月丸1日かかる」「Excelの転記ミスで給与計算をやり直し」―こうした非効率から脱却するには、<strong>クラウド勤怠管理システムが最適解</strong>です。ただし、導入に失敗する企業も少なくありません。成功のポイントを実例とともに解説します。</p>

<div class="bg-purple-50 rounded-2xl p-6 mb-8">
  <h2 class="text-xl font-black text-purple-900 mb-5 flex items-center gap-2">
    <span class="text-2xl">📊</span> 主要3サービスの比較（中小企業向け）
  </h2>
  <div class="space-y-4">
    <div class="bg-white rounded-xl p-5 border border-purple-100 shadow-sm">
      <div class="flex items-center justify-between mb-2">
        <p class="font-black text-purple-800 text-base">ジョブカン勤怠管理</p>
        <span class="bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-full">小規模向け</span>
      </div>
      <p class="text-sm text-gray-600 mb-2">月額：<strong>200円/人〜</strong>　初期費用：0円（10名まで無料プランあり）</p>
      <div class="grid grid-cols-2 gap-2 text-xs">
        <div class="bg-green-50 rounded-lg p-2">
          <p class="font-bold text-green-700 mb-1">✓ 強み</p>
          <p class="text-gray-600">直感的なUI・シフト管理が得意・無料プランで試せる</p>
        </div>
        <div class="bg-red-50 rounded-lg p-2">
          <p class="font-bold text-red-700 mb-1">△ 弱み</p>
          <p class="text-gray-600">大規模向け高度機能は少なめ</p>
        </div>
      </div>
      <p class="text-xs text-gray-500 mt-2">適している業種：シフト制の小売・飲食業、10〜50名規模</p>
    </div>
    <div class="bg-white rounded-xl p-5 border border-purple-100 shadow-sm">
      <div class="flex items-center justify-between mb-2">
        <p class="font-black text-purple-800 text-base">マネーフォワード クラウド勤怠</p>
        <span class="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">連携重視</span>
      </div>
      <p class="text-sm text-gray-600 mb-2">月額：<strong>300円/人〜</strong>　初期費用：0円</p>
      <div class="grid grid-cols-2 gap-2 text-xs">
        <div class="bg-green-50 rounded-lg p-2">
          <p class="font-bold text-green-700 mb-1">✓ 強み</p>
          <p class="text-gray-600">給与計算・会計との連携が最強・APIが充実</p>
        </div>
        <div class="bg-red-50 rounded-lg p-2">
          <p class="font-bold text-red-700 mb-1">△ 弱み</p>
          <p class="text-gray-600">機能過多で小規模には使いにくい場合も</p>
        </div>
      </div>
      <p class="text-xs text-gray-500 mt-2">適している業種：ITベンチャー・バックオフィス効率化重視の企業</p>
    </div>
    <div class="bg-white rounded-xl p-5 border border-purple-100 shadow-sm">
      <div class="flex items-center justify-between mb-2">
        <p class="font-black text-purple-800 text-base">KING OF TIME</p>
        <span class="bg-gray-100 text-gray-700 text-xs font-bold px-3 py-1 rounded-full">現場系向け</span>
      </div>
      <p class="text-sm text-gray-600 mb-2">月額：<strong>300円/人</strong>　初期費用：0円</p>
      <div class="grid grid-cols-2 gap-2 text-xs">
        <div class="bg-green-50 rounded-lg p-2">
          <p class="font-bold text-green-700 mb-1">✓ 強み</p>
          <p class="text-gray-600">多様な打刻方法・生体認証対応・導入実績No.1</p>
        </div>
        <div class="bg-red-50 rounded-lg p-2">
          <p class="font-bold text-red-700 mb-1">△ 弱み</p>
          <p class="text-gray-600">UIがやや古風・カスタマイズ性は低め</p>
        </div>
      </div>
      <p class="text-xs text-gray-500 mt-2">適している業種：製造業・建設業・堅実運用重視の企業</p>
    </div>
  </div>
</div>

<div class="bg-blue-50 rounded-2xl p-6 mb-8">
  <h2 class="text-xl font-black text-blue-900 mb-4">🗓️ 失敗しない3ヶ月導入プラン</h2>
  <div class="space-y-4">
    <div class="flex gap-4">
      <div class="w-24 flex-shrink-0">
        <span class="bg-blue-700 text-white font-black text-sm px-3 py-1.5 rounded-full">1ヶ月目</span>
      </div>
      <div>
        <p class="font-bold text-blue-900 mb-1">要件定義・サービス選定</p>
        <p class="text-gray-600 text-sm leading-relaxed">現行の勤怠ルール（変形労働時間制・フレックスタイム制など）を整理し、システムで実現可能か確認。複数サービスの無料トライアルを並行して実施。</p>
      </div>
    </div>
    <div class="flex gap-4">
      <div class="w-24 flex-shrink-0">
        <span class="bg-blue-600 text-white font-black text-sm px-3 py-1.5 rounded-full">2ヶ月目</span>
      </div>
      <div>
        <p class="font-bold text-blue-900 mb-1">初期設定・テスト運用</p>
        <p class="text-gray-600 text-sm leading-relaxed">就業規則の労働時間パターンをシステムに登録。管理者・従業員各2名でパイロット運用し、不具合や使いにくさを洗い出す。</p>
      </div>
    </div>
    <div class="flex gap-4">
      <div class="w-24 flex-shrink-0">
        <span class="bg-blue-500 text-white font-black text-sm px-3 py-1.5 rounded-full">3ヶ月目</span>
      </div>
      <div>
        <p class="font-bold text-blue-900 mb-1">全社展開・並行運用</p>
        <p class="text-gray-600 text-sm leading-relaxed">最初の1ヶ月はタイムカードと併用し、データの整合性を確認。問題なければ完全移行。従業員への操作説明会を必ず実施。</p>
      </div>
    </div>
  </div>
</div>

<div class="bg-gray-50 rounded-2xl p-6 mb-8">
  <h2 class="text-xl font-black text-blue-900 mb-4">💼 導入効果の実績（当事務所支援企業より）</h2>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div class="bg-white rounded-xl p-4 border border-gray-100 text-center shadow-sm">
      <p class="text-3xl font-black text-blue-900 mb-1">94<span class="text-lg">%</span></p>
      <p class="text-xs text-gray-500 mb-2">勤怠集計時間の削減</p>
      <p class="text-xs text-gray-600">製造業A社（30名）：月8時間→30分に短縮</p>
    </div>
    <div class="bg-white rounded-xl p-4 border border-gray-100 text-center shadow-sm">
      <p class="text-3xl font-black text-blue-900 mb-1">10<span class="text-lg">h/週</span></p>
      <p class="text-xs text-gray-500 mb-2">店長の事務作業削減</p>
      <p class="text-xs text-gray-600">飲食業B社（50名）：シフト自動化で従業員満足度も向上</p>
    </div>
    <div class="bg-white rounded-xl p-4 border border-gray-100 text-center shadow-sm">
      <p class="text-3xl font-black text-blue-900 mb-1">100<span class="text-lg">%</span></p>
      <p class="text-xs text-gray-500 mb-2">リモート勤怠の可視化</p>
      <p class="text-xs text-gray-600">IT企業C社（15名）：出社・在宅の実態を完全把握</p>
    </div>
  </div>
</div>

<div class="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-8">
  <p class="text-amber-900 text-sm leading-relaxed">
    <span class="font-black text-base">💡 神植からのアドバイス</span><br><br>
    システム選定よりも「現行の就業規則・労働時間ルールを整理すること」の方が重要です。システムは就業規則を忠実に再現するツール。ルールが曖昧なままシステムを入れると、設定が複雑になり結局使いこなせないケースが多い。導入前に一度、就業規則の見直しをセットで実施することをお勧めします。
  </p>
</div>
`
    },
    {
        id: 5,
        title: '2025年10月 最低賃金大幅改定 ― 宮城県1,038円への対応チェックリスト',
        excerpt: '宮城県の最低賃金が2025年10月4日から1,038円（前年比＋65円）に引き上げ。全都道府県で初の1,000円超え。給与体系の見直しが急務です。確認すべき7つのポイントと対応手順を解説します。',
        category: 'リスク管理',
        emoji: '📊',
        date: '2025年10月',
        isNew: true,
        readTime: '7分',
        contact: '給与体系の見直しを相談する',
        body: `
<p class="text-lg text-gray-700 leading-relaxed mb-8 font-medium"><strong>宮城県の最低賃金が2025年10月4日から1,038円</strong>（前年比＋65円、過去最大の引き上げ幅）に改定されました。これにより全都道府県で初めて最低賃金が1,000円を突破。全国加重平均は1,121円となりました。既存の給与体系を見直さないまま放置すると、知らぬ間に最低賃金違反になるリスクがあります。</p>

<div class="bg-orange-50 rounded-2xl p-6 mb-8">
  <h2 class="text-xl font-black text-orange-900 mb-4 flex items-center gap-2">
    <span class="text-2xl">📋</span> 2025年 宮城県最低賃金 改定サマリー
  </h2>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
    <div class="bg-white rounded-xl p-4 border border-orange-100 text-center shadow-sm">
      <p class="text-3xl font-black text-orange-700 mb-1">1,038<span class="text-base">円</span></p>
      <p class="text-xs text-gray-500">宮城県最低賃金</p>
      <p class="text-xs text-orange-600 font-bold mt-1">（2025年10月4日〜）</p>
    </div>
    <div class="bg-white rounded-xl p-4 border border-orange-100 text-center shadow-sm">
      <p class="text-3xl font-black text-orange-700 mb-1">＋65<span class="text-base">円</span></p>
      <p class="text-xs text-gray-500">前年比引き上げ幅</p>
      <p class="text-xs text-orange-600 font-bold mt-1">（過去最大）</p>
    </div>
    <div class="bg-white rounded-xl p-4 border border-orange-100 text-center shadow-sm">
      <p class="text-3xl font-black text-orange-700 mb-1">1,121<span class="text-base">円</span></p>
      <p class="text-xs text-gray-500">全国加重平均</p>
      <p class="text-xs text-orange-600 font-bold mt-1">（前年比＋66円）</p>
    </div>
  </div>
</div>

<div class="bg-orange-50 rounded-2xl p-6 mb-8">
  <h2 class="text-xl font-black text-orange-900 mb-5 flex items-center gap-2">
    <span class="text-2xl">⚡</span> 最低賃金との比較で見落としやすい落とし穴
  </h2>
  <div class="space-y-4">
    <div class="bg-white rounded-xl p-5 border border-orange-100 shadow-sm">
      <p class="font-black text-orange-800 mb-2">落とし穴1：月給制社員の時間換算を忘れている</p>
      <p class="text-gray-600 text-sm leading-relaxed">月給20万円でも、所定労働時間が月約200時間の場合、時給換算1,000円となり<strong>1,038円の最低賃金を下回る</strong>ケースがあります。月給制でも必ず時間換算で確認してください。</p>
      <div class="bg-orange-50 rounded-lg p-3 mt-3 text-xs font-mono text-gray-700">
        計算式：月給 ÷ 月平均所定労働時間 ≧ 最低賃金（1,038円）
      </div>
    </div>
    <div class="bg-white rounded-xl p-5 border border-orange-100 shadow-sm">
      <p class="font-black text-orange-800 mb-2">落とし穴2：算入できない手当を含めて比較している</p>
      <p class="text-gray-600 text-sm leading-relaxed">最低賃金との比較に算入できない手当があります。<strong>算入不可：通勤手当・時間外割増・深夜割増・休日割増・精皆勤手当・家族手当</strong>。これらを除いた基本的な賃金で比較する必要があります。</p>
    </div>
    <div class="bg-white rounded-xl p-5 border border-orange-100 shadow-sm">
      <p class="font-black text-orange-800 mb-2">落とし穴3：特定最低賃金（産業別）を確認していない</p>
      <p class="text-gray-600 text-sm leading-relaxed">地域別最低賃金より高い「特定最低賃金」が設定されている産業があります（製造業・小売業など）。地域別と産業別を両方確認し、高い方を適用する必要があります。</p>
    </div>
  </div>
</div>

<div class="bg-blue-50 rounded-2xl p-6 mb-8">
  <h2 class="text-xl font-black text-blue-900 mb-4">✅ 最低賃金改定 対応チェックリスト7項目</h2>
  <div class="space-y-3">
    <label class="flex items-start gap-3 bg-white rounded-xl p-4 border border-blue-100 cursor-pointer hover:border-blue-400 transition">
      <input type="checkbox" class="mt-0.5 w-4 h-4 accent-blue-900">
      <span class="text-sm text-gray-700"><strong>全従業員の時給換算額を計算し</strong>、1,038円以上になっていることを確認した</span>
    </label>
    <label class="flex items-start gap-3 bg-white rounded-xl p-4 border border-blue-100 cursor-pointer hover:border-blue-400 transition">
      <input type="checkbox" class="mt-0.5 w-4 h-4 accent-blue-900">
      <span class="text-sm text-gray-700">算入不可手当（通勤・家族・精皆勤・時間外割増等）を除いた賃金で比較した</span>
    </label>
    <label class="flex items-start gap-3 bg-white rounded-xl p-4 border border-blue-100 cursor-pointer hover:border-blue-400 transition">
      <input type="checkbox" class="mt-0.5 w-4 h-4 accent-blue-900">
      <span class="text-sm text-gray-700">特定最低賃金（産業別）が設定されている場合、高い方を適用している</span>
    </label>
    <label class="flex items-start gap-3 bg-white rounded-xl p-4 border border-blue-100 cursor-pointer hover:border-blue-400 transition">
      <input type="checkbox" class="mt-0.5 w-4 h-4 accent-blue-900">
      <span class="text-sm text-gray-700">賃金改定に伴い雇用契約書・労働条件通知書を更新し、従業員に交付した</span>
    </label>
    <label class="flex items-start gap-3 bg-white rounded-xl p-4 border border-blue-100 cursor-pointer hover:border-blue-400 transition">
      <input type="checkbox" class="mt-0.5 w-4 h-4 accent-blue-900">
      <span class="text-sm text-gray-700">賃金規程（就業規則）の最低賃金に関する条項を改定した</span>
    </label>
    <label class="flex items-start gap-3 bg-white rounded-xl p-4 border border-blue-100 cursor-pointer hover:border-blue-400 transition">
      <input type="checkbox" class="mt-0.5 w-4 h-4 accent-blue-900">
      <span class="text-sm text-gray-700">給与計算ソフトの単価・時給マスタを更新し、2025年10月4日以降分から正しく反映させた</span>
    </label>
    <label class="flex items-start gap-3 bg-white rounded-xl p-4 border border-blue-100 cursor-pointer hover:border-blue-400 transition">
      <input type="checkbox" class="mt-0.5 w-4 h-4 accent-blue-900">
      <span class="text-sm text-gray-700">業務改善助成金（最低賃金引き上げと設備投資を組み合わせた助成金）の活用を検討した</span>
    </label>
  </div>
</div>

<div class="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-8">
  <p class="text-amber-900 text-sm leading-relaxed">
    <span class="font-black text-base">💡 神植からのアドバイス</span><br><br>
    最低賃金違反は「知らなかった」では許されません。違反した場合は50万円以下の罰金が科されます。特に今回の＋65円は過去最大の引き上げ幅で、長年同じ時給で雇用しているパート・アルバイトの方がいる場合は即座に確認が必要です。また、来年以降も引き上げが続く見込みのため、賃金体系と業務改善助成金の活用を今から計画的に組み合わせることが経営防衛の鍵です。
  </p>
</div>
`
    },
    {
        id: 6,
        title: '採用・定着率を高める入社時オンボーディング設計',
        excerpt: '早期離職の防止は採用コスト削減に直結します。入社後3ヶ月が勝負。法的整備（雇用契約書・就業規則）と職場環境づくりを両輪で進めるオンボーディングの設計方法を解説します。',
        category: '採用・定着',
        emoji: '👥',
        date: '2025年2月',
        isNew: false,
        readTime: '8分',
        contact: '雇用・定着の相談をする',
        body: `
<p class="text-lg text-gray-700 leading-relaxed mb-8 font-medium">中小企業の採用コストは1人あたり平均100〜150万円。<strong>早期離職を1人防ぐだけで、それだけのコストを守れます</strong>。入社後3ヶ月の「オンボーディング」が、定着率を大きく左右します。</p>

<div class="bg-sky-50 rounded-2xl p-6 mb-8">
  <h2 class="text-xl font-black text-sky-900 mb-5 flex items-center gap-2">
    <span class="text-2xl">📋</span> 入社前〜3ヶ月の法的整備チェック
  </h2>
  <div class="space-y-4">
    <div class="bg-white rounded-xl p-5 border border-sky-100 shadow-sm">
      <p class="font-black text-sky-800 mb-3 text-base flex items-center gap-2">
        <span class="bg-sky-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm">前</span>
        入社前（内定〜入社日）
      </p>
      <ul class="space-y-2 text-sm text-gray-600">
        <li class="flex items-start gap-2"><span class="text-sky-600 mt-1">●</span><span><strong>労働条件通知書の交付</strong>（書面または電子）：入社日前または当日に必ず交付。未交付は労基法違反。</span></li>
        <li class="flex items-start gap-2"><span class="text-sky-600 mt-1">●</span><span><strong>雇用契約書への署名捺印</strong>：労使双方が内容に合意した証拠として重要。</span></li>
        <li class="flex items-start gap-2"><span class="text-sky-600 mt-1">●</span><span><strong>社会保険・雇用保険の資格取得届</strong>：入社日から5日以内に提出（法定義務）。</span></li>
      </ul>
    </div>
    <div class="bg-white rounded-xl p-5 border border-sky-100 shadow-sm">
      <p class="font-black text-sky-800 mb-3 text-base flex items-center gap-2">
        <span class="bg-sky-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm">1</span>
        入社1ヶ月以内
      </p>
      <ul class="space-y-2 text-sm text-gray-600">
        <li class="flex items-start gap-2"><span class="text-sky-600 mt-1">●</span><span><strong>就業規則の周知</strong>：内容を説明し、閲覧できる場所を案内。「知らなかった」を防ぐ。</span></li>
        <li class="flex items-start gap-2"><span class="text-sky-600 mt-1">●</span><span><strong>ハラスメント防止規程の説明</strong>：相談窓口の案内を含めて実施。</span></li>
        <li class="flex items-start gap-2"><span class="text-sky-600 mt-1">●</span><span><strong>安全衛生教育の実施記録</strong>：業種に関わらず、安全衛生教育は法的義務。記録を保管。</span></li>
      </ul>
    </div>
    <div class="bg-white rounded-xl p-5 border border-sky-100 shadow-sm">
      <p class="font-black text-sky-800 mb-3 text-base flex items-center gap-2">
        <span class="bg-sky-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm">3</span>
        入社3ヶ月以内
      </p>
      <ul class="space-y-2 text-sm text-gray-600">
        <li class="flex items-start gap-2"><span class="text-sky-600 mt-1">●</span><span><strong>試用期間評価面談の実施</strong>：本採用可否を判断する面談。評価基準を事前に明示することが重要。</span></li>
        <li class="flex items-start gap-2"><span class="text-sky-600 mt-1">●</span><span><strong>有給休暇の付与確認</strong>：入社6ヶ月後に10日付与（週5日以上勤務の場合）。付与日を管理台帳に記録。</span></li>
        <li class="flex items-start gap-2"><span class="text-sky-600 mt-1">●</span><span><strong>本採用通知の書面交付</strong>：本採用・試用期間延長・採用見送りを書面で明示。</span></li>
      </ul>
    </div>
  </div>
</div>

<div class="bg-green-50 rounded-2xl p-6 mb-8">
  <h2 class="text-xl font-black text-green-900 mb-4">🌱 定着率を高める「環境づくり」5つのポイント</h2>
  <div class="space-y-4">
    <div class="flex gap-4 items-start">
      <span class="text-2xl">🤝</span>
      <div>
        <p class="font-bold text-gray-800 mb-1">1. メンター制度の設定</p>
        <p class="text-gray-600 text-sm leading-relaxed">新入社員に年齢の近い先輩社員をメンターとして割り当て。業務面だけでなく、職場の人間関係や文化を自然に学べる環境をつくる。週1回15分の1on1を義務化するだけで効果大。</p>
      </div>
    </div>
    <div class="flex gap-4 items-start">
      <span class="text-2xl">📅</span>
      <div>
        <p class="font-bold text-gray-800 mb-1">2. 30日・60日・90日チェックイン</p>
        <p class="text-gray-600 text-sm leading-relaxed">上司と新入社員の定期面談を30・60・90日後に設定。「困っていることはないか」ではなく「どんな仕事が楽しかったか」から入ると本音が引き出しやすい。</p>
      </div>
    </div>
    <div class="flex gap-4 items-start">
      <span class="text-2xl">🎯</span>
      <div>
        <p class="font-bold text-gray-800 mb-1">3. 最初の30日間の仕事設計</p>
        <p class="text-gray-600 text-sm leading-relaxed">「小さな成功体験」を意図的に設計する。難しすぎず簡単すぎず、30日以内に「やった！」と思える成果を出せるタスクを用意することが定着の鍵。</p>
      </div>
    </div>
    <div class="flex gap-4 items-start">
      <span class="text-2xl">📖</span>
      <div>
        <p class="font-bold text-gray-800 mb-1">4. 業務マニュアルの整備</p>
        <p class="text-gray-600 text-sm leading-relaxed">「見て覚えろ」文化は早期離職の温床。頻出業務のマニュアルを整備するだけで、新入社員のストレスが大幅に軽減。既存社員にとっても引き継ぎが楽になる副次効果あり。</p>
      </div>
    </div>
    <div class="flex gap-4 items-start">
      <span class="text-2xl">💬</span>
      <div>
        <p class="font-bold text-gray-800 mb-1">5. 心理的安全性の確保</p>
        <p class="text-gray-600 text-sm leading-relaxed">「こんなことも知らないのか」という反応が1回あるだけで、新入社員は質問しなくなります。管理職への「心理的安全性研修」は、定着率改善に最も効果的な投資の一つです。</p>
      </div>
    </div>
  </div>
</div>

<div class="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-8">
  <p class="text-amber-900 text-sm leading-relaxed">
    <span class="font-black text-base">💡 神植からのアドバイス</span><br><br>
    法的整備（雇用契約・社会保険・就業規則周知）と職場環境づくりは、どちらか一方では不十分です。「法的には問題ない」が「雰囲気が合わなくて辞めた」というケースが実際に多い。採用後3ヶ月間の伴走支援として、雇用契約の整備から面談シートの設計まで一括でサポートします。
  </p>
</div>
`
    },
    {
        id: 7,
        title: '就業規則の緊急見直しポイント2025 ― 法改正対応7項目チェック',
        excerpt: '2025年に育児介護休業法が大幅改正され、就業規則の更新が急務です。法改正未対応のまま放置すると法令違反リスクが生じます。2025年時点で必ず確認すべき7項目を解説します。',
        category: '法令遵守',
        emoji: '📖',
        date: '2025年10月',
        isNew: true,
        readTime: '9分',
        contact: '就業規則の見直し・作成を依頼する',
        body: `
<p class="text-lg text-gray-700 leading-relaxed mb-8 font-medium">就業規則は「作ったまま放置」が最も危険です。<strong>法改正に対応できていない就業規則は、会社にとって無効な規定だらけになるリスク</strong>があります。2025年時点で特に重要な7項目を点検しましょう。</p>

<div class="bg-indigo-50 rounded-2xl p-6 mb-8">
  <h2 class="text-xl font-black text-indigo-900 mb-5 flex items-center gap-2">
    <span class="text-2xl">🔍</span> 2025年版 必須チェック7項目
  </h2>
  <div class="space-y-4">
    <div class="bg-white rounded-xl p-5 border border-indigo-100 shadow-sm">
      <p class="font-black text-indigo-800 mb-2 text-base">① 時間外労働の上限規制への対応</p>
      <p class="text-gray-600 text-sm leading-relaxed">2019年施行の働き方改革により、月45時間・年360時間が法定上限に。就業規則の「時間外労働に関する規定」がこれを超える内容になっていれば<strong>法違反</strong>です。特別条項の記載も合わせて確認してください。</p>
    </div>
    <div class="bg-white rounded-xl p-5 border border-indigo-100 shadow-sm">
      <p class="font-black text-indigo-800 mb-2 text-base">② 育児・介護休業規定の最新化【2025年大改正対応】</p>
      <p class="text-gray-600 text-sm leading-relaxed">2025年4月・10月に育児介護休業法が大幅改正されました。①子の看護等休暇の対象拡大（小学校3年生修了まで）、②残業免除対象の拡大（就学前まで）、③3歳〜就学前の柔軟な働き方措置の義務化、④育休公表義務の300人超への拡大、⑤介護の個別周知・意向確認義務化。これらすべてについて就業規則・育児介護休業規程の改定と労基署への届出が必要です。</p>
    </div>
    <div class="bg-white rounded-xl p-5 border border-indigo-100 shadow-sm">
      <p class="font-black text-indigo-800 mb-2 text-base">③ ハラスメント防止規程の整備</p>
      <p class="text-gray-600 text-sm leading-relaxed">パワハラ防止措置は2022年4月から中小企業でも義務化。「相談窓口の設置」「再発防止措置」「不利益取扱いの禁止」が就業規則に明記されているか確認が必要です。</p>
    </div>
    <div class="bg-white rounded-xl p-5 border border-indigo-100 shadow-sm">
      <p class="font-black text-indigo-800 mb-2 text-base">④ テレワーク・在宅勤務規程の追加</p>
      <p class="text-gray-600 text-sm leading-relaxed">就業規則にテレワーク関連の規定がない場合、費用負担（通信費・光熱費）の取り扱いや労働時間管理のルールが曖昧になります。トラブル防止のため、テレワーク規程を別規程として整備するか、就業規則に追記することが推奨されます。</p>
    </div>
    <div class="bg-white rounded-xl p-5 border border-indigo-100 shadow-sm">
      <p class="font-black text-indigo-800 mb-2 text-base">⑤ 副業・兼業に関する規定の見直し</p>
      <p class="text-gray-600 text-sm leading-relaxed">厚生労働省の「副業・兼業の促進に関するガイドライン」では、原則として副業・兼業を認める方向が示されています。「一切禁止」の規定は裁判で無効と判断されるケースも出ています。許可制と届出制のどちらが自社に合うか整理しましょう。</p>
    </div>
    <div class="bg-white rounded-xl p-5 border border-indigo-100 shadow-sm">
      <p class="font-black text-indigo-800 mb-2 text-base">⑥ 有給休暇の計画的付与・時間単位取得</p>
      <p class="text-gray-600 text-sm leading-relaxed">年5日の有給休暇取得義務化（2019年〜）に対応するため、計画的付与制度や時間単位年休制度を就業規則に定めている企業が増えています。未整備の場合は労使協定と合わせて整備が必要です。</p>
    </div>
    <div class="bg-white rounded-xl p-5 border border-indigo-100 shadow-sm">
      <p class="font-black text-indigo-800 mb-2 text-base">⑦ 懲戒規定の合理性確認</p>
      <p class="text-gray-600 text-sm leading-relaxed">SNSでの不適切投稿・情報漏洩に対する懲戒規定がない企業が多数あります。また懲戒処分の種類（戒告・減給・出勤停止・諭旨解雇・懲戒解雇）と、それぞれの要件を明確に規定しておかないと、いざ問題社員への対応が必要なときに打つ手がなくなります。</p>
    </div>
  </div>
</div>

<div class="bg-red-50 border-l-4 border-red-500 rounded-r-xl p-6 mb-8">
  <h2 class="text-xl font-black text-red-900 mb-3">⚠️ 就業規則が「ない」「周知されていない」は即アウト</h2>
  <p class="text-gray-700 text-sm leading-relaxed mb-2">常時10名以上の労働者を雇用する事業場は、<strong>就業規則の作成・労働基準監督署への届出・労働者への周知が法的義務</strong>（労働基準法第89・90・106条）。違反した場合は30万円以下の罰金。</p>
  <p class="text-gray-700 text-sm leading-relaxed">「引き出しに入っているが従業員は見たことがない」状態では周知義務を果たしていません。<strong>就業規則はすべての従業員がいつでも閲覧できる場所に掲示・備え付けること</strong>が求められます。</p>
</div>

<div class="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-8">
  <p class="text-amber-900 text-sm leading-relaxed">
    <span class="font-black text-base">💡 神植からのアドバイス</span><br><br>
    就業規則の見直しは「問題が起きてから」では遅い。特に懲戒解雇やハラスメント対応の場面では、整備された就業規則が会社を守る唯一の盾になります。「最後に見直したのがいつか思い出せない」という場合は、今すぐ点検のタイミングです。現状の就業規則を持参いただければ、無料でチェックします。
  </p>
</div>
`
    },
    {
        id: 8,
        title: '社会保険 2025年大改正と適法な料負担最適化戦略',
        excerpt: '2025年6月に年金制度改正法が成立し、106万円の壁（月額88,000円要件）の2026年10月撤廃が決定。パート・アルバイト多数の企業は人件費試算と対応準備が急務です。同時に合法的な負担最適化も解説します。',
        category: 'リスク管理',
        emoji: '💴',
        date: '2025年10月',
        isNew: true,
        readTime: '9分',
        contact: '社会保険の最適化・適用拡大対応を相談する',
        body: `
<p class="text-lg text-gray-700 leading-relaxed mb-8 font-medium">2025年6月13日、年金制度改正法が成立しました。<strong>「106万円の壁」として知られる月額88,000円の賃金要件が2026年10月を目途に撤廃</strong>される予定です。パートやアルバイトを多く雇用する中小企業にとって、社会保険料の会社負担が大幅に増える可能性があります。今から準備を始めましょう。</p>

<div class="bg-red-50 border-l-4 border-red-500 rounded-r-xl p-5 mb-8">
  <p class="font-black text-red-800 mb-2">🚨 2026年10月 社会保険「106万円の壁」撤廃が決定！</p>
  <p class="text-gray-700 text-sm leading-relaxed">現在51人以上企業に適用されている月額88,000円要件が撤廃されます。週20時間以上・雇用2か月超・学生でないという要件を満たす短時間労働者は、賃金額に関わらず社会保険加入義務が生じます。さらに企業規模要件（51人以上）も2027年以降段階的に撤廃され、最終的には2035年10月までにすべての企業が対象となります。</p>
</div>

<div class="bg-emerald-50 rounded-2xl p-6 mb-8">
  <h2 class="text-xl font-black text-emerald-900 mb-5 flex items-center gap-2">
    <span class="text-2xl">📅</span> 社会保険適用拡大 今後のスケジュール
  </h2>
  <div class="space-y-3">
    <div class="bg-white rounded-xl p-4 border border-emerald-100 shadow-sm flex gap-4">
      <span class="bg-orange-600 text-white font-black text-xs px-2 py-1 rounded h-fit flex-shrink-0">2026年10月</span>
      <div>
        <p class="font-bold text-gray-800 text-sm">月額88,000円（106万円）の賃金要件廃止</p>
        <p class="text-gray-600 text-xs leading-relaxed">51人以上企業で週20時間以上の短時間労働者は、賃金額に関わらず社会保険加入が義務化</p>
      </div>
    </div>
    <div class="bg-white rounded-xl p-4 border border-emerald-100 shadow-sm flex gap-4">
      <span class="bg-blue-600 text-white font-black text-xs px-2 py-1 rounded h-fit flex-shrink-0">2027年〜</span>
      <div>
        <p class="font-bold text-gray-800 text-sm">企業規模要件（51人以上）の段階的撤廃</p>
        <p class="text-gray-600 text-xs leading-relaxed">2027年10月以降、50人以下の企業にも段階的に拡大。2035年10月にはすべての企業が対象</p>
      </div>
    </div>
  </div>
</div>

<div class="bg-emerald-50 rounded-2xl p-6 mb-8">
  <h2 class="text-xl font-black text-emerald-900 mb-5 flex items-center gap-2">
    <span class="text-2xl">✅</span> 合法的な社会保険料最適化 4つの手法
  </h2>
  <div class="space-y-5">
    <div class="bg-white rounded-xl p-5 border border-emerald-100 shadow-sm">
      <p class="font-black text-emerald-800 mb-2 text-base">手法1：賞与の分割支給から一括支給への見直し</p>
      <p class="text-gray-600 text-sm leading-relaxed mb-2">賞与の社会保険料は「賞与額 × 保険料率」で算出されますが、<strong>年4回以上賞与を支給すると「標準報酬月額」の算定に組み込まれ</strong>、月々の保険料が上がります。年3回以内の支給設計が基本です。</p>
      <div class="bg-emerald-50 rounded-lg p-3 text-xs text-emerald-800 font-medium">
        📌 ポイント：賞与は年1〜3回に集約。年4回以上の少額分割は逆効果になる場合あり
      </div>
    </div>
    <div class="bg-white rounded-xl p-5 border border-emerald-100 shadow-sm">
      <p class="font-black text-emerald-800 mb-2 text-base">手法2：月額変更届（随時改定）の適切な活用</p>
      <p class="text-gray-600 text-sm leading-relaxed mb-2">給与が固定的賃金変動により2等級以上変動した場合、<strong>随時改定で標準報酬月額を見直すことができます</strong>。降給時の随時改定を見落としている企業が多いです。</p>
      <div class="bg-emerald-50 rounded-lg p-3 text-xs text-emerald-800 font-medium">
        📌 ポイント：給与引き下げ後は速やかに月額変更届を提出。数ヶ月放置すると差額が積み上がる
      </div>
    </div>
    <div class="bg-white rounded-xl p-5 border border-emerald-100 shadow-sm">
      <p class="font-black text-emerald-800 mb-2 text-base">手法3：非課税通勤手当の上限活用</p>
      <p class="text-gray-600 text-sm leading-relaxed mb-2">通勤手当は所得税非課税（月15万円まで）ですが、<strong>社会保険料の算定基礎には含まれます</strong>。実費相当額を超えた通勤手当は課税対象になります。マイカー通勤者には距離に応じた非課税限度額があり、適切に設定することで手取り増につながります。</p>
      <div class="bg-emerald-50 rounded-lg p-3 text-xs text-emerald-800 font-medium">
        📌 ポイント：実費証明書類を取得した上で適正額を設定。過剰支給は課税リスクあり
      </div>
    </div>
    <div class="bg-white rounded-xl p-5 border border-emerald-100 shadow-sm">
      <p class="font-black text-emerald-800 mb-2 text-base">手法4：選択的福利厚生（カフェテリアプラン）の活用</p>
      <p class="text-gray-600 text-sm leading-relaxed mb-2">健康診断費用・資格取得費用・社員食堂・社宅などの現物給付は、<strong>要件を満たせば社会保険料・所得税の算定対象外</strong>となります。給与の一部を福利厚生に振り替えることで、手取り増と採用力向上を同時に達成できます。</p>
      <div class="bg-emerald-50 rounded-lg p-3 text-xs text-emerald-800 font-medium">
        📌 ポイント：現物給付の非課税要件は複雑。社労士・税理士との連携で適切に設計すること
      </div>
    </div>
  </div>
</div>

<div class="bg-red-50 border-l-4 border-red-500 rounded-r-xl p-6 mb-8">
  <h2 class="text-xl font-black text-red-900 mb-3">🚫 絶対にやってはいけない「偽装」</h2>
  <p class="text-gray-700 text-sm leading-relaxed">実際の給与を意図的に低く申告して保険料を減らす行為（標準報酬月額の偽装）は<strong>社会保険詐欺</strong>として厳しく罰せられます。年金事務所の調査で発覚した場合、遡及して保険料を徴収されるだけでなく、悪質な場合は詐欺罪での刑事告発も。「節約」のつもりが取り返しのつかない結果になります。</p>
</div>

<div class="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-8">
  <p class="text-amber-900 text-sm leading-relaxed">
    <span class="font-black text-base">💡 神植からのアドバイス</span><br><br>
    2026年10月の「106万円の壁」撤廃は、パート・アルバイトを多く雇用する企業には大きなコスト増要因です。今から新たに加入対象となる従業員数と会社負担増を試算し、キャリアアップ助成金（短時間労働者労働時間延長支援コース）等の活用も含めた対応策を立てることが重要です。まずは現状把握と試算からご相談ください。
  </p>
</div>
`
    },
    {
        id: 9,
        title: '育児休業・介護休業 2025年法改正完全対応ガイド',
        excerpt: '2025年4月・10月の2段階で育児介護休業法が大幅改正されました。残業免除対象の拡大、公表義務の300人超への拡大、3歳〜就学前の柔軟な働き方措置義務化など、就業規則の見直しが急務です。',
        category: '採用・定着',
        emoji: '👶',
        date: '2025年10月',
        isNew: true,
        readTime: '9分',
        contact: '育休・介護休業規程の整備を相談する',
        body: `
<p class="text-lg text-gray-700 leading-relaxed mb-8 font-medium">2025年は育児介護休業法の大改正年です。<strong>2025年4月と10月の2段階で施行</strong>され、企業に多くの新たな義務が課されました。既に施行済みの項目への対応漏れがある場合、今すぐ就業規則・労使協定の見直しが必要です。</p>

<div class="bg-red-50 border-l-4 border-red-500 rounded-r-xl p-5 mb-8">
  <p class="font-black text-red-800 mb-2">🚨 2025年10月以降、未対応は法令違反リスクあり</p>
  <p class="text-gray-700 text-sm">柔軟な働き方を実現するための措置義務（2025年10月施行）、個別意向聴取・配慮の義務（同）が未対応の場合、厚生労働大臣からの勧告・企業名公表リスクがあります。就業規則の見直しと労使協定の締結を至急ご確認ください。</p>
</div>

<div class="bg-pink-50 rounded-2xl p-6 mb-8">
  <h2 class="text-xl font-black text-pink-900 mb-5 flex items-center gap-2">
    <span class="text-2xl">📋</span> 2025年改正 施行スケジュールと主要対応項目
  </h2>
  <div class="space-y-4">
    <div class="bg-white rounded-xl p-5 border border-pink-100 shadow-sm">
      <p class="font-black text-pink-800 mb-3 text-base flex items-center gap-2">
        <span class="bg-green-600 text-white px-2 py-0.5 rounded text-xs font-black">施行済</span>
        2025年4月1日 施行項目
      </p>
      <ul class="space-y-2 text-sm text-gray-600">
        <li class="flex items-start gap-2"><span class="text-pink-600 mt-1 font-bold">①</span><span><strong>子の看護等休暇の見直し</strong>：対象が小学校3年生修了まで拡大。学級閉鎖・入学式・卒園式も取得事由に追加。勤続6か月未満の除外要件廃止。</span></li>
        <li class="flex items-start gap-2"><span class="text-pink-600 mt-1 font-bold">②</span><span><strong>残業免除（所定外労働制限）の対象拡大</strong>：3歳未満の子を養育する労働者から<strong>小学校就学前の子を養育する労働者</strong>へ拡大。</span></li>
        <li class="flex items-start gap-2"><span class="text-pink-600 mt-1 font-bold">③</span><span><strong>育休取得状況の公表義務拡大</strong>：公表対象が従業員数1,000人超から<strong>300人超の企業</strong>へ拡大。</span></li>
        <li class="flex items-start gap-2"><span class="text-pink-600 mt-1 font-bold">④</span><span><strong>介護離職防止の雇用環境整備義務化</strong>：①研修実施②相談窓口設置③事例収集・提供④周知方針の公表のいずれかの実施が義務化。</span></li>
        <li class="flex items-start gap-2"><span class="text-pink-600 mt-1 font-bold">⑤</span><span><strong>介護の個別周知・意向確認義務</strong>：介護に直面した旨を申し出た労働者への個別周知・意向確認が義務化。40歳到達時の情報提供義務も新設。</span></li>
      </ul>
    </div>
    <div class="bg-white rounded-xl p-5 border border-pink-100 shadow-sm">
      <p class="font-black text-pink-800 mb-3 text-base flex items-center gap-2">
        <span class="bg-orange-600 text-white px-2 py-0.5 rounded text-xs font-black">施行済</span>
        2025年10月1日 施行項目
      </p>
      <ul class="space-y-2 text-sm text-gray-600">
        <li class="flex items-start gap-2"><span class="text-pink-600 mt-1 font-bold">⑥</span><span><strong>3歳〜就学前の子を養育する労働者への柔軟措置の義務化</strong>：始業時刻変更・テレワーク・保育施設設置等・養育両立支援休暇・短時間勤務の中から<strong>2つ以上を選択</strong>して整備が義務。事前に過半数組合等の意見聴取が必要。</span></li>
        <li class="flex items-start gap-2"><span class="text-pink-600 mt-1 font-bold">⑦</span><span><strong>育児に関する個別意向聴取・配慮の義務化</strong>：妊娠・出産申出時と子が3歳になる前の適切な時期に、今後の働き方の意向を個別に聴取し、必要な配慮を行う義務。</span></li>
        <li class="flex items-start gap-2"><span class="text-pink-600 mt-1 font-bold">⑧</span><span><strong>育児のためのテレワーク導入の努力義務</strong>：3歳未満の子を養育する労働者がテレワークを選択できるよう措置を講ずる努力義務が新設。</span></li>
      </ul>
    </div>
  </div>
</div>

<div class="bg-blue-50 rounded-2xl p-6 mb-8">
  <h2 class="text-xl font-black text-blue-900 mb-4">🔧 企業に必要な具体的対応5ステップ</h2>
  <div class="space-y-4">
    <div class="flex gap-4">
      <span class="bg-blue-700 text-white font-black text-sm w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">1</span>
      <div>
        <p class="font-bold text-blue-900 mb-1">就業規則・育児介護休業規程の改定</p>
        <p class="text-gray-600 text-sm leading-relaxed">子の看護等休暇の対象範囲・取得事由の更新、所定外労働制限の対象拡大（就学前まで）、3歳〜就学前の柔軟措置選択の記載を追加。労働基準監督署への届出も必要。</p>
      </div>
    </div>
    <div class="flex gap-4">
      <span class="bg-blue-600 text-white font-black text-sm w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">2</span>
      <div>
        <p class="font-bold text-blue-900 mb-1">柔軟な働き方措置の選択と労使協定の締結</p>
        <p class="text-gray-600 text-sm leading-relaxed">5つの措置（①始業時刻変更等、②テレワーク、③保育施設等、④養育両立支援休暇10日以上、⑤短時間勤務）から2つ以上を選択し、就業規則に明記。過半数組合等への意見聴取が必須。</p>
      </div>
    </div>
    <div class="flex gap-4">
      <span class="bg-blue-500 text-white font-black text-sm w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">3</span>
      <div>
        <p class="font-bold text-blue-900 mb-1">意向聴取・フローの整備（妊娠・出産申出時・3歳前）</p>
        <p class="text-gray-600 text-sm leading-relaxed">妊娠・出産申出があったとき、および子が3歳になる前の適切な時期に意向聴取を行うフローを人事担当者・管理職向けに整備。記録の保管も必要。</p>
      </div>
    </div>
    <div class="flex gap-4">
      <span class="bg-blue-400 text-white font-black text-sm w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">4</span>
      <div>
        <p class="font-bold text-blue-900 mb-1">介護支援の雇用環境整備（300人超は公表義務も）</p>
        <p class="text-gray-600 text-sm leading-relaxed">①研修、②相談窓口、③事例収集・提供、④方針周知のうち1つ以上を実施し、社内に周知。従業員数300人超の企業は育休取得状況の公表体制整備も急務。</p>
      </div>
    </div>
    <div class="flex gap-4">
      <span class="bg-blue-300 text-white font-black text-sm w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">5</span>
      <div>
        <p class="font-bold text-blue-900 mb-1">管理職研修の実施（マタハラ・パタハラ防止）</p>
        <p class="text-gray-600 text-sm leading-relaxed">「育休を取ったら評価を下げる」「時短の人は昇進させない」等の言動は育介休法違反。管理職向けに改正内容と禁止行為を徹底周知。</p>
      </div>
    </div>
  </div>
</div>

<div class="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-8">
  <p class="text-amber-900 text-sm leading-relaxed">
    <span class="font-black text-base">💡 神植からのアドバイス</span><br><br>
    2025年の育児介護休業法改正は過去最大級の改正です。特に10月施行の「柔軟な働き方措置の義務化」は、就業規則の改定・労使協定の締結・労基署への届出という一連の手続きが必要で、対応漏れが起きやすい。「とりあえず後で」では間に合いません。今すぐ現状確認と就業規則の見直しを進めましょう。一括サポートします。
  </p>
</div>
`
    },
    {
        id: 10,
        title: '労働基準監督署の調査（臨検）を乗り越えるための準備',
        excerpt: '労働基準監督署の調査は突然やってきます。「うちには来ない」は禁物。定期調査・申告調査それぞれの対応方法と、日頃から整備しておくべき書類一覧を実務視点で解説します。',
        category: '法令遵守',
        emoji: '🏛️',
        date: '2025年3月',
        isNew: true,
        readTime: '8分',
        contact: '労務監査・書類整備を依頼する',
        body: `
<p class="text-lg text-gray-700 leading-relaxed mb-8 font-medium">労働基準監督署（労基署）の調査は、<strong>事前通知なしに来ることもあります</strong>。「うちは小さい会社だから来ない」は誤解で、従業員数に関わらず調査対象になり得ます。普段から書類を整備し、適切な対応ができる体制を整えておくことが重要です。</p>

<div class="bg-slate-50 rounded-2xl p-6 mb-8">
  <h2 class="text-xl font-black text-slate-900 mb-5 flex items-center gap-2">
    <span class="text-2xl">📂</span> 調査でほぼ必ず確認される書類
  </h2>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="bg-white rounded-xl p-4 border border-slate-100 shadow-sm">
      <p class="font-black text-slate-800 mb-3 text-sm border-b pb-2">労働時間・賃金関係</p>
      <ul class="space-y-2 text-sm text-gray-600">
        <li class="flex items-start gap-2"><span class="text-slate-500 mt-1">▶</span><span>タイムカード・勤怠記録（直近3年分）</span></li>
        <li class="flex items-start gap-2"><span class="text-slate-500 mt-1">▶</span><span>賃金台帳（直近3年分）</span></li>
        <li class="flex items-start gap-2"><span class="text-slate-500 mt-1">▶</span><span>36協定の締結届（有効期間内のもの）</span></li>
        <li class="flex items-start gap-2"><span class="text-slate-500 mt-1">▶</span><span>時間外・休日労働の命令書または承認記録</span></li>
      </ul>
    </div>
    <div class="bg-white rounded-xl p-4 border border-slate-100 shadow-sm">
      <p class="font-black text-slate-800 mb-3 text-sm border-b pb-2">雇用・就業規則関係</p>
      <ul class="space-y-2 text-sm text-gray-600">
        <li class="flex items-start gap-2"><span class="text-slate-500 mt-1">▶</span><span>就業規則（届出控え付き）</span></li>
        <li class="flex items-start gap-2"><span class="text-slate-500 mt-1">▶</span><span>雇用契約書・労働条件通知書（全従業員分）</span></li>
        <li class="flex items-start gap-2"><span class="text-slate-500 mt-1">▶</span><span>雇入れ時の安全衛生教育記録</span></li>
        <li class="flex items-start gap-2"><span class="text-slate-500 mt-1">▶</span><span>年次有給休暇の管理台帳（取得状況含む）</span></li>
      </ul>
    </div>
  </div>
</div>

<div class="bg-blue-50 rounded-2xl p-6 mb-8">
  <h2 class="text-xl font-black text-blue-900 mb-4">🗂️ 調査の種類と対応方法</h2>
  <div class="space-y-4">
    <div class="bg-white rounded-xl p-5 border border-blue-100 shadow-sm">
      <p class="font-black text-blue-800 mb-2 text-base">定期調査（通知あり）</p>
      <p class="text-gray-600 text-sm leading-relaxed mb-2">労基署が計画的に行う調査。事前通知書（来署依頼書）が届き、指定日に書類を持参して説明する形式が多い。通知が届いたら<strong>まず社労士に連絡し、提出書類の点検を依頼</strong>することが重要。「後から書類を整理する」行為は絶対NG。</p>
      <div class="bg-blue-50 rounded-lg p-3 text-xs text-blue-800 font-medium">対応のコツ：正直に現状を説明しつつ、改善計画を具体的に示す姿勢が評価される</div>
    </div>
    <div class="bg-white rounded-xl p-5 border border-blue-100 shadow-sm">
      <p class="font-black text-blue-800 mb-2 text-base">申告調査（従業員からの通報）</p>
      <p class="text-gray-600 text-sm leading-relaxed mb-2">従業員からの申告（未払い残業代・ハラスメント等）をきっかけに行われる調査。突然の来署もあり得る。<strong>調査官の訪問時は同行を断れない</strong>が、「今は担当者がいない」として後日日程を調整することは可能。即座に主要担当者（社長・総務責任者・社労士）に連絡を。</p>
      <div class="bg-red-50 rounded-lg p-3 text-xs text-red-800 font-medium">⚠️ 現地での証拠隠滅・書類の後付け修正は厳禁。発覚すれば厳罰</div>
    </div>
  </div>
</div>

<div class="bg-green-50 rounded-2xl p-6 mb-8">
  <h2 class="text-xl font-black text-green-900 mb-4">✅ 平時の整備チェックリスト</h2>
  <div class="space-y-3">
    <label class="flex items-start gap-3 bg-white rounded-xl p-4 border border-green-100 cursor-pointer hover:border-green-400 transition">
      <input type="checkbox" class="mt-0.5 w-4 h-4 accent-green-600">
      <span class="text-sm text-gray-700">36協定を毎年更新し、届出控えを保管している</span>
    </label>
    <label class="flex items-start gap-3 bg-white rounded-xl p-4 border border-green-100 cursor-pointer hover:border-green-400 transition">
      <input type="checkbox" class="mt-0.5 w-4 h-4 accent-green-600">
      <span class="text-sm text-gray-700">全従業員の雇用契約書・労働条件通知書が最新の状態で保管されている</span>
    </label>
    <label class="flex items-start gap-3 bg-white rounded-xl p-4 border border-green-100 cursor-pointer hover:border-green-400 transition">
      <input type="checkbox" class="mt-0.5 w-4 h-4 accent-green-600">
      <span class="text-sm text-gray-700">勤怠データは原則自動記録で、手書き修正には理由と承認者の記録がある</span>
    </label>
    <label class="flex items-start gap-3 bg-white rounded-xl p-4 border border-green-100 cursor-pointer hover:border-green-400 transition">
      <input type="checkbox" class="mt-0.5 w-4 h-4 accent-green-600">
      <span class="text-sm text-gray-700">年次有給休暇の取得状況を個人別に管理し、年5日取得を達成している</span>
    </label>
    <label class="flex items-start gap-3 bg-white rounded-xl p-4 border border-green-100 cursor-pointer hover:border-green-400 transition">
      <input type="checkbox" class="mt-0.5 w-4 h-4 accent-green-600">
      <span class="text-sm text-gray-700">雇入れ時安全衛生教育の実施記録が保管されている（業種問わず）</span>
    </label>
  </div>
</div>

<div class="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-8">
  <p class="text-amber-900 text-sm leading-relaxed">
    <span class="font-black text-base">💡 神植からのアドバイス</span><br><br>
    「調査が来てから慌てる」のではなく、「普段から整備しておく」ことが最大の対策です。当事務所では年1回の「労務監査」サービスで、労基署調査を想定した書類点検と改善提案を行っています。問題が小さいうちに発見・修正することが、リスクを最小化する唯一の方法です。
  </p>
</div>
`
    },
    {
        id: 11,
        title: 'テレワーク導入企業が見落とす労務管理の盲点',
        excerpt: 'テレワークは働き方の自由度を高める一方、労働時間の管理・費用負担・セキュリティ等の課題を生みます。「なんとなく導入」では後からトラブルになる3つの盲点を解説します。',
        category: 'DX推進',
        emoji: '🏠',
        date: '2025年4月',
        isNew: true,
        readTime: '8分',
        contact: 'テレワーク規程・労務整備を相談する',
        body: `
<p class="text-lg text-gray-700 leading-relaxed mb-8 font-medium">テレワークを「試しに始めた」企業が増える一方、<strong>労務管理の整備が追いつかずトラブルになるケース</strong>が急増しています。「オフィスと同じルールで管理すれば大丈夫」は大きな誤解。テレワーク特有の盲点を確認しましょう。</p>

<div class="bg-violet-50 rounded-2xl p-6 mb-8">
  <h2 class="text-xl font-black text-violet-900 mb-5 flex items-center gap-2">
    <span class="text-2xl">⚠️</span> テレワーク特有の3つの盲点
  </h2>
  <div class="space-y-5">
    <div class="bg-white rounded-xl p-5 border border-violet-100 shadow-sm">
      <p class="font-black text-violet-800 mb-2 text-base">盲点1：「自己申告制」の労働時間管理では残業代未払いリスクがある</p>
      <p class="text-gray-600 text-sm leading-relaxed mb-3">テレワーク中は従業員が自分で勤務時間を記録するケースが多いですが、<strong>会社が労働時間を把握・確認できる仕組みがない場合、実態と乖離したまま残業代が未払いになるリスク</strong>があります。「申告していない残業時間」が後から請求の対象になった事例が増えています。</p>
      <div class="bg-violet-50 rounded-lg p-3 text-sm">
        <p class="font-bold text-violet-800 mb-1">対策：</p>
        <p class="text-gray-600 text-sm">PCのログイン・ログアウト時間、クラウド勤怠のGPS・打刻機能など、客観的記録手段を導入。就業規則に「テレワーク時の勤怠記録方法」を明記する。</p>
      </div>
    </div>
    <div class="bg-white rounded-xl p-5 border border-violet-100 shadow-sm">
      <p class="font-black text-violet-800 mb-2 text-base">盲点2：通信費・光熱費の費用負担ルールが未整備</p>
      <p class="text-gray-600 text-sm leading-relaxed mb-3">テレワーク中の通信費・電気代は従業員が実質負担することになります。これを会社が補填しない場合、<strong>「最低賃金を下回る」または「費用弁償の未払い」として問題になる</strong>可能性があります。国税庁の計算式に基づいた「テレワーク手当」の支給か、実費精算のルール整備が必要です。</p>
      <div class="bg-violet-50 rounded-lg p-3 text-sm">
        <p class="font-bold text-violet-800 mb-1">対策：</p>
        <p class="text-gray-600 text-sm">テレワーク費用補助の規程を就業規則に追加。月額定額支給（目安：2,000〜5,000円）か実費精算かを決め、支給額・支給条件を明文化する。</p>
      </div>
    </div>
    <div class="bg-white rounded-xl p-5 border border-violet-100 shadow-sm">
      <p class="font-black text-violet-800 mb-2 text-base">盲点3：「中抜け」「育児しながら勤務」の扱いが曖昧</p>
      <p class="text-gray-600 text-sm leading-relaxed mb-3">テレワーク中の「中抜け」（一時的な業務離脱）の取り扱いが明確でない場合、<strong>後から「あの時間は休憩だったのか労働だったのか」が問題になります</strong>。また、育児と仕事を並行させる状況を黙認すると、労働時間管理が事実上不可能になります。</p>
      <div class="bg-violet-50 rounded-lg p-3 text-sm">
        <p class="font-bold text-violet-800 mb-1">対策：</p>
        <p class="text-gray-600 text-sm">中抜けの申請・記録方法をルール化。育児中の勤務については「保育利用を前提とする」か「時短勤務制度の活用」を原則とし、並行対応を常態化させない。</p>
      </div>
    </div>
  </div>
</div>

<div class="bg-gray-50 rounded-2xl p-6 mb-8">
  <h2 class="text-xl font-black text-blue-900 mb-4">📋 テレワーク規程に盛り込むべき主要事項</h2>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
    <div class="bg-white rounded-xl p-4 border border-gray-100 shadow-sm text-sm text-gray-700">
      <p class="font-bold text-gray-800 mb-1">対象者・適用条件</p>
      <p>雇用形態・勤続年数・業務内容による利用可否の基準</p>
    </div>
    <div class="bg-white rounded-xl p-4 border border-gray-100 shadow-sm text-sm text-gray-700">
      <p class="font-bold text-gray-800 mb-1">勤務場所の制限</p>
      <p>自宅限定か、カフェ等の利用可否。セキュリティ要件</p>
    </div>
    <div class="bg-white rounded-xl p-4 border border-gray-100 shadow-sm text-sm text-gray-700">
      <p class="font-bold text-gray-800 mb-1">労働時間・中抜けの扱い</p>
      <p>打刻方法、中断・再開の記録方法、休憩の取り方</p>
    </div>
    <div class="bg-white rounded-xl p-4 border border-gray-100 shadow-sm text-sm text-gray-700">
      <p class="font-bold text-gray-800 mb-1">費用補助の条件・金額</p>
      <p>通信費・光熱費・備品の補助額と支給方法</p>
    </div>
    <div class="bg-white rounded-xl p-4 border border-gray-100 shadow-sm text-sm text-gray-700">
      <p class="font-bold text-gray-800 mb-1">情報セキュリティ義務</p>
      <p>機器・ネットワークの要件、情報持ち出しルール</p>
    </div>
    <div class="bg-white rounded-xl p-4 border border-gray-100 shadow-sm text-sm text-gray-700">
      <p class="font-bold text-gray-800 mb-1">テレワーク取消し・制限の条件</p>
      <p>業務上の理由や成果不振による制限の判断基準</p>
    </div>
  </div>
</div>

<div class="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-8">
  <p class="text-amber-900 text-sm leading-relaxed">
    <span class="font-black text-base">💡 神植からのアドバイス</span><br><br>
    テレワーク規程の整備は「導入してから」ではなく「導入前」が理想です。後から整備しようとすると、すでに慣習化したルールを変更するのに従業員の抵抗が生まれることも。これからテレワーク導入を検討している企業は、就業規則・テレワーク規程・勤怠システムを同時に整備することをお勧めします。
  </p>
</div>
`
    },
    {
        id: 12,
        title: '人的資本経営への対応 ― 中小企業でもできる情報開示と組織改善',
        excerpt: '「人的資本経営」は大企業だけの話ではありません。採用難が続く時代、従業員への投資と情報開示が企業の競争力を左右します。中小企業が今すぐ着手できる施策を解説します。',
        category: '採用・定着',
        emoji: '🌱',
        date: '2025年4月',
        isNew: true,
        readTime: '9分',
        contact: '人事制度・組織改善を相談する',
        body: `
<p class="text-lg text-gray-700 leading-relaxed mb-8 font-medium">2023年の有価証券報告書から上場企業に義務化された「人的資本情報の開示」。<strong>中小企業には義務はありませんが、採用難・人材定着が経営課題となる今、人的資本経営への取り組みは待ったなし</strong>の状況です。</p>

<div class="bg-teal-50 rounded-2xl p-6 mb-8">
  <h2 class="text-xl font-black text-teal-900 mb-5 flex items-center gap-2">
    <span class="text-2xl">💡</span> 人的資本経営とは何か
  </h2>
  <div class="bg-white rounded-xl p-5 border border-teal-100 shadow-sm mb-4">
    <p class="text-gray-700 text-sm leading-relaxed">従業員を「コスト」ではなく<strong>「企業価値を生み出す資本」として位置づけ、その投資・育成・活用状況を可視化する経営手法</strong>です。具体的には、人材育成への投資額・離職率・従業員エンゲージメント・男女間賃金格差・育休取得率などを測定・開示し、継続的な改善を目指します。</p>
  </div>
  <div class="bg-white rounded-xl p-5 border border-teal-100 shadow-sm">
    <p class="font-black text-teal-800 mb-3 text-sm">中小企業にとっての意義</p>
    <div class="space-y-2 text-sm text-gray-600">
      <div class="flex items-start gap-2"><span class="text-teal-600 font-bold mt-0.5">①</span><span><strong>採用力の向上</strong>：求職者が「この会社は従業員を大切にしている」と判断できる根拠になる</span></div>
      <div class="flex items-start gap-2"><span class="text-teal-600 font-bold mt-0.5">②</span><span><strong>定着率の改善</strong>：取り組みを通じて従業員エンゲージメントが高まり、離職率が下がる</span></div>
      <div class="flex items-start gap-2"><span class="text-teal-600 font-bold mt-0.5">③</span><span><strong>取引・融資への影響</strong>：ESG評価・サプライチェーン審査で労務環境が問われるようになっている</span></div>
    </div>
  </div>
</div>

<div class="bg-blue-50 rounded-2xl p-6 mb-8">
  <h2 class="text-xl font-black text-blue-900 mb-4">🚀 中小企業が今すぐ着手できる5つの施策</h2>
  <div class="space-y-4">
    <div class="bg-white rounded-xl p-5 border border-blue-100 shadow-sm">
      <p class="font-black text-blue-800 mb-2 text-base">施策1：離職率・定着率の計測を始める</p>
      <p class="text-gray-600 text-sm leading-relaxed">「なんとなく最近よく辞めている気がする」ではなく、<strong>年間離職率を数値で把握</strong>することが第一歩。業種平均と比較することで、自社の人材定着力が客観的にわかります。離職理由のアンケートも合わせて実施しましょう。</p>
    </div>
    <div class="bg-white rounded-xl p-5 border border-blue-100 shadow-sm">
      <p class="font-black text-blue-800 mb-2 text-base">施策2：従業員エンゲージメント調査の実施</p>
      <p class="text-gray-600 text-sm leading-relaxed">年1〜2回の従業員アンケート（匿名可）で、<strong>「この会社で働き続けたいか」「仕事にやりがいを感じているか」</strong>を測定。無料〜低コストのツールも多数あります。重要なのは測定だけでなく、結果を経営に反映し、従業員にフィードバックすること。</p>
    </div>
    <div class="bg-white rounded-xl p-5 border border-blue-100 shadow-sm">
      <p class="font-black text-blue-800 mb-2 text-base">施策3：男女間賃金格差の把握と是正</p>
      <p class="text-gray-600 text-sm leading-relaxed">常時雇用101人以上の企業は男女間賃金格差の公表が義務化（2023年〜）。100人以下でも早めに現状把握を。<strong>格差が生じている理由（役職比率・勤続年数・雇用形態）を分析</strong>し、合理的な説明ができる状態にしておくことが重要です。</p>
    </div>
    <div class="bg-white rounded-xl p-5 border border-blue-100 shadow-sm">
      <p class="font-black text-blue-800 mb-2 text-base">施策4：人材育成への投資を「見える化」</p>
      <p class="text-gray-600 text-sm leading-relaxed">研修費用・資格取得支援・OJT時間などを集計し、<strong>「従業員1人あたりの年間育成投資額」を算出</strong>。求人票・会社説明会で数値として開示することで、成長志向の求職者へのアピールになります。</p>
    </div>
    <div class="bg-white rounded-xl p-5 border border-blue-100 shadow-sm">
      <p class="font-black text-blue-800 mb-2 text-base">施策5：評価制度・等級制度の整備</p>
      <p class="text-gray-600 text-sm leading-relaxed">「頑張っても評価されない」という不満が離職の主因になります。<strong>評価基準の透明化と定期的な1on1面談の制度化</strong>だけで、従業員の働きがい・定着率が大きく改善するケースが多いです。</p>
    </div>
  </div>
</div>

<div class="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-8">
  <p class="text-amber-900 text-sm leading-relaxed">
    <span class="font-black text-base">💡 神植からのアドバイス</span><br><br>
    「人的資本経営」は難しく聞こえますが、本質は「従業員を大切にしている事実を、数値と仕組みで証明する」ことです。離職率の計測から始め、就業規則・評価制度・育成制度を少しずつ整えるだけで、採用力・定着力が確実に変わります。どこから手をつければいいか迷ったら、ぜひご相談ください。
  </p>
</div>
`
    },

    // ==================== 新規追加8記事（id:13〜20） ====================

    {
        id: 13,
        title: '2026年 子育て支援金制度完全対応ガイド ～健康保険料上乗せ負担を最小化する実務チェックリスト～',
        excerpt: '2026年4月から新設される子ども・子育て支援金（支援金率0.23％）。労使折半で企業負担が増加します。給与計算変更から従業員説明まで、中小企業が今すぐ取り組むべき対応を完全解説します。',
        category: 'リスク管理',
        emoji: '👨‍👩‍👧',
        date: '2026年3月',
        isNew: true,
        readTime: '8分',
        contact: '子育て支援金対応・給与計算見直しを相談する',
        body: `
<p class="text-lg text-gray-700 leading-relaxed mb-8 font-medium">2026年4月から「子ども・子育て支援金制度」がスタートします。<strong>健康保険料に上乗せして労使折半（企業負担約0.115％）で徴収</strong>されるため、中小企業の人件費が確実に増加します。標準報酬月額30万円の従業員1人あたり月約345円の企業負担が発生。段階的に引き上げられるため、早めの試算と対応が必須です。</p>

<div class="bg-red-50 border-l-4 border-red-500 rounded-r-xl p-5 mb-8">
  <p class="font-black text-red-800 mb-1">🚨 2026年4月開始！支援金率0.23％（労使折半）</p>
  <p class="text-gray-700 text-sm leading-relaxed">標準報酬月額30万円の場合：総額690円（企業負担345円／月）。2028年度には0.4％程度まで段階的に上昇する見込みです。賞与からも徴収されます。</p>
</div>

<div class="bg-blue-50 rounded-2xl p-6 mb-8">
  <h2 class="text-xl font-black text-blue-900 mb-5 flex items-center gap-2">
    <span class="text-2xl">📋</span> 企業が今すぐ対応すべき実務チェックリスト
  </h2>
  <div class="space-y-3">
    <label class="flex items-start gap-3 bg-white rounded-xl p-4 border border-blue-100 cursor-pointer hover:border-blue-400 transition">
      <input type="checkbox" class="mt-0.5 w-4 h-4 accent-blue-900">
      <span class="text-sm text-gray-700">給与計算ソフトに新控除項目「子ども・子育て支援金」を追加したか</span>
    </label>
    <label class="flex items-start gap-3 bg-white rounded-xl p-4 border border-blue-100 cursor-pointer hover:border-blue-400 transition">
      <input type="checkbox" class="mt-0.5 w-4 h-4 accent-blue-900">
      <span class="text-sm text-gray-700">2026年5月支給給与から天引き開始のスケジュールを確認したか</span>
    </label>
    <label class="flex items-start gap-3 bg-white rounded-xl p-4 border border-blue-100 cursor-pointer hover:border-blue-400 transition">
      <input type="checkbox" class="mt-0.5 w-4 h-4 accent-blue-900">
      <span class="text-sm text-gray-700">従業員への事前説明資料を作成・周知したか（手取り減少の理由を明確に）</span>
    </label>
    <label class="flex items-start gap-3 bg-white rounded-xl p-4 border border-blue-100 cursor-pointer hover:border-blue-400 transition">
      <input type="checkbox" class="mt-0.5 w-4 h-4 accent-blue-900">
      <span class="text-sm text-gray-700">標準報酬月額ごとの企業負担総額を試算し、予算に反映させたか</span>
    </label>
    <label class="flex items-start gap-3 bg-white rounded-xl p-4 border border-blue-100 cursor-pointer hover:border-blue-400 transition">
      <input type="checkbox" class="mt-0.5 w-4 h-4 accent-blue-900">
      <span class="text-sm text-gray-700">キャリアアップ助成金等との組み合わせで負担軽減策を検討したか</span>
    </label>
  </div>
</div>

<div class="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-8">
  <p class="text-amber-900 text-sm leading-relaxed">
    <span class="font-black text-base">💡 神植からのアドバイス</span><br><br>
    子育て支援金は「知らなかった」では済まされません。給与明細に新項目が増えるため、従業員からの問い合わせが急増します。事前の説明会と試算表の配布で不安を最小限に抑えましょう。負担増をカバーする助成金活用や賃金制度見直しもセットでご相談ください。
  </p>
</div>
`
    },
    {
        id: 14,
        title: 'ストレスチェック全事業場義務化2026 ～50人未満中小企業でも即対応できる完全マニュアル～',
        excerpt: '2025年改正で50人未満の中小企業にもストレスチェックが義務化（最長2028年5月まで）。実施方法・外部委託・集団分析のポイントを中小企業向けに徹底解説します。',
        category: '法令遵守',
        emoji: '🧠',
        date: '2025年10月',
        isNew: true,
        readTime: '9分',
        contact: 'ストレスチェック導入・外部委託を相談する',
        body: `
<p class="text-lg text-gray-700 leading-relaxed mb-8 font-medium">これまで50人未満は努力義務だったストレスチェックが、<strong>労働安全衛生法改正により全事業場で義務化</strong>されます。施行は公布後3年以内（最長2028年5月）。中小企業でも「やらない」選択肢はなくなります。プライバシー保護と集団分析のポイントを押さえましょう。</p>

<div class="bg-red-50 rounded-2xl p-6 mb-8">
  <h2 class="text-xl font-black text-red-900 mb-5 flex items-center gap-2">
    <span class="text-2xl">⚠️</span> 50人未満企業が押さえるべき義務化ポイント
  </h2>
  <div class="space-y-4">
    <div class="bg-white rounded-xl p-5 border border-red-100">
      <p class="font-black text-red-800 mb-2">・実施頻度：年1回以上</p>
      <p class="text-gray-600 text-sm">・報告義務：50人未満は労基署への報告免除（負担軽減）</p>
      <p class="text-gray-600 text-sm">・面接指導：高ストレス者への医師等による面接指導が義務</p>
    </div>
  </div>
</div>

<div class="bg-blue-50 rounded-2xl p-6 mb-8">
  <h2 class="text-xl font-black text-blue-900 mb-4">✅ 中小企業向け実施フロー（6ステップ）</h2>
  <div class="space-y-4">
    <div class="flex gap-4">
      <span class="bg-blue-700 text-white font-black text-sm w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">1</span>
      <div><p class="font-bold">実施計画の策定</p><p class="text-sm text-gray-600">誰が実施するか、外部委託するか決定</p></div>
    </div>
    <div class="flex gap-4">
      <span class="bg-blue-600 text-white font-black text-sm w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">2</span>
      <div><p class="font-bold">従業員への事前周知</p><p class="text-sm text-gray-600">目的・内容・プライバシー保護を説明</p></div>
    </div>
    <div class="flex gap-4">
      <span class="bg-blue-500 text-white font-black text-sm w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">3</span>
      <div><p class="font-bold">調査票の配布・実施</p><p class="text-sm text-gray-600">オンライン／紙から選択可能</p></div>
    </div>
    <div class="flex gap-4">
      <span class="bg-blue-400 text-white font-black text-sm w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">4</span>
      <div><p class="font-bold">結果分析と高ストレス者への対応</p><p class="text-sm text-gray-600">面接指導の実施と記録</p></div>
    </div>
    <div class="flex gap-4">
      <span class="bg-blue-300 text-white font-black text-sm w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">5</span>
      <div><p class="font-bold">集団分析と職場環境改善</p><p class="text-sm text-gray-600">部署ごとの傾向を把握し対策を検討</p></div>
    </div>
    <div class="flex gap-4">
      <span class="bg-blue-200 text-white font-black text-sm w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">6</span>
      <div><p class="font-bold">記録の保存と次回への引継ぎ</p><p class="text-sm text-gray-600">5年間の保存義務あり</p></div>
    </div>
  </div>
</div>

<div class="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-8">
  <p class="text-amber-900 text-sm leading-relaxed">
    <span class="font-black text-base">💡 神植からのアドバイス</span><br><br>
    50人未満企業は外部委託が現実的です。地域産業保健センターの活用や低コストツールを選べば負担は最小限。義務化を機に「メンタルヘルス不調の未然防止」と「職場環境改善」に活かしてください。実施計画から結果活用まで一括サポートします。
  </p>
</div>
`
    },
    {
        id: 15,
        title: 'カスタマーハラスメント・就活セクハラ防止措置2026完全対応 ～就業規則に追加すべき条文例付き～',
        excerpt: '2026年10月施行の労働施策総合推進法改正で、カスタマーハラスメント（カスハラ）と就活セクハラ対策が全企業で義務化されます。現場対応マニュアル・就業規則条文例・相談窓口整備の具体策を解説します。',
        category: '法令遵守',
        emoji: '😠',
        date: '2026年3月',
        isNew: true,
        readTime: '9分',
        contact: 'カスハラ対策規程の作成・研修を相談する',
        body: `
<p class="text-lg text-gray-700 leading-relaxed mb-8 font-medium">2026年10月から「カスタマーハラスメント（カスハラ）」および「求職者等に対するセクシャルハラスメント（就活セクハラ）」対策が、<strong>全企業で雇用管理上の措置義務</strong>となります。顧客からの暴言・過度な要求・長時間拘束や、採用過程でのセクハラが従業員の就業環境を害する場合、企業は毅然とした対応と被害者保護を講じなければなりません。未対応は厚生労働大臣からの勧告・企業名公表リスクがあります。</p>

<div class="bg-red-50 border-l-4 border-red-500 rounded-r-xl p-5 mb-8">
  <p class="font-black text-red-800 mb-2">🚨 2026年10月義務化のポイント</p>
  <p class="text-gray-700 text-sm leading-relaxed">・顧客等からの著しい迷惑行為（カスハラ）の防止措置義務<br>・求職者・労働者候補者に対するセクハラ防止措置義務<br>・方針明確化、周知、相談窓口設置、再発防止措置が必須</p>
</div>

<div class="bg-blue-50 rounded-2xl p-6 mb-8">
  <h2 class="text-xl font-black text-blue-900 mb-5 flex items-center gap-2">
    <span class="text-2xl">📋</span> 就業規則に追加すべき条文例
  </h2>
  <div class="bg-white rounded-xl p-5 border border-blue-100 shadow-sm mb-4">
    <p class="font-black text-blue-800 mb-3">第○条（カスタマーハラスメントの防止）</p>
    <p class="text-sm text-gray-600 leading-relaxed">1. 会社は、顧客等からの著しい迷惑行為（カスタマーハラスメント）から従業員を守る。<br>2. 従業員はカスハラが発生した場合、直ちに業務を中断し、上司に報告できる。会社はこれを正当な行為とし、不利益取扱いをしない。<br>3. 会社は被害を受けた従業員に対し、配置転換・休暇付与・メンタルケア等の適切な措置を講じる。</p>
  </div>
  <p class="text-sm text-gray-600">※就活セクハラ条文も同様に追加推奨。相談窓口を明記。</p>
</div>

<div class="bg-green-50 rounded-2xl p-6 mb-8">
  <h2 class="text-xl font-black text-green-900 mb-4">✅ 即実践できる3つの対策</h2>
  <div class="space-y-4">
    <div class="bg-white rounded-xl p-5 border border-green-100">
      <p class="font-black text-green-800 mb-2">1. 対応マニュアル作成</p>
      <p class="text-gray-600 text-sm">「正当なクレーム」と「ハラスメント」の境界線、報告フロー、記録方法を明文化。</p>
    </div>
    <div class="bg-white rounded-xl p-5 border border-green-100">
      <p class="font-black text-green-800 mb-2">2. 全社員研修の実施</p>
      <p class="text-gray-600 text-sm">現場担当者向け「毅然対応スキル」研修と、管理職向け「被害者ケア」研修を年1回以上。</p>
    </div>
    <div class="bg-white rounded-xl p-5 border border-green-100">
      <p class="font-black text-green-800 mb-2">3. 外部相談窓口の設置</p>
      <p class="text-gray-600 text-sm">社内窓口だけでは不十分。社労士・弁護士提携の外部窓口を周知。</p>
    </div>
  </div>
</div>

<div class="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-8">
  <p class="text-amber-900 text-sm leading-relaxed">
    <span class="font-black text-base">💡 神植からのアドバイス</span><br><br>
    カスハラは「顧客だから仕方ない」では済みません。従業員のメンタルヘルス悪化・離職・労災リスクを防ぐため、就業規則改定とマニュアル整備を今すぐ進めましょう。条文例提供・研修資料作成・外部窓口提携まで一括サポートします。早期対応が企業防衛の鍵です。
  </p>
</div>
`
    },
    {
        id: 16,
        title: '2026年10月「106万円の壁」撤廃 完全対応マニュアル ～パート社会保険加入で会社負担が急増する企業のリアル対策～',
        excerpt: '2026年10月から月額88,000円要件が撤廃され、週20時間以上のパート・アルバイトが賃金額に関わらず社会保険加入対象に。企業負担増と対応策、キャリアアップ助成金の活用を徹底解説します。',
        category: 'リスク管理',
        emoji: '💼',
        date: '2026年3月',
        isNew: true,
        readTime: '9分',
        contact: '106万円の壁撤廃対応・試算を相談する',
        body: `
<p class="text-lg text-gray-700 leading-relaxed mb-8 font-medium">2026年10月、年金制度改正により「106万円の壁」（月額88,000円要件）が撤廃されます。<strong>週20時間以上働く短時間労働者は、賃金額に関わらず社会保険（健康保険・厚生年金）加入義務</strong>が生じます。企業規模要件も段階的に撤廃され、将来的に全企業が対象。パート多数の企業は人件費が大幅増となる可能性があります。</p>

<div class="bg-red-50 border-l-4 border-red-500 rounded-r-xl p-5 mb-8">
  <p class="font-black text-red-800 mb-2">🚨 撤廃後の新基準</p>
  <p class="text-gray-700 text-sm leading-relaxed">・週20時間以上・雇用2ヶ月超・学生でない → 賃金額に関わらず加入義務<br>・企業負担：健康保険料＋厚生年金保険料（労使折半）で1人あたり月数万円増も</p>
</div>

<div class="bg-emerald-50 rounded-2xl p-6 mb-8">
  <h2 class="text-xl font-black text-emerald-900 mb-5 flex items-center gap-2">
    <span class="text-2xl">✅</span> 合法的な負担軽減策4選
  </h2>
  <div class="space-y-4">
    <div class="bg-white rounded-xl p-5 border border-emerald-100">
      <p class="font-black text-emerald-800 mb-2">1. 労働時間調整（週19.5時間以内）</p>
      <p class="text-gray-600 text-sm">手取り減少を避けたいパートには有効。ただし業務効率化が必要。</p>
    </div>
    <div class="bg-white rounded-xl p-5 border border-emerald-100">
      <p class="font-black text-emerald-800 mb-2">2. キャリアアップ助成金活用</p>
      <p class="text-gray-600 text-sm">短時間労働者労働時間延長支援コース等を組み合わせ、負担を相殺。</p>
    </div>
    <div class="bg-white rounded-xl p-5 border border-emerald-100">
      <p class="font-black text-emerald-800 mb-2">3. 賃金・手当の見直し</p>
      <p class="text-gray-600 text-sm">非課税通勤手当上限活用や選択的福利厚生の導入。</p>
    </div>
    <div class="bg-white rounded-xl p-5 border border-emerald-100">
      <p class="font-black text-emerald-800 mb-2">4. 就業規則・雇用契約書の改定</p>
      <p class="text-gray-600 text-sm">労働時間・社会保険適用条項を最新化し、事前説明を実施。</p>
    </div>
  </div>
</div>

<div class="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-8">
  <p class="text-amber-900 text-sm leading-relaxed">
    <span class="font-black text-base">💡 神植からのアドバイス</span><br><br>
    撤廃後は「週20時間の壁」にシフト。対象者数と負担増を今すぐ試算し、助成金活用やシフト再設計を計画的に進めましょう。パート定着率向上のチャンスにもなります。試算・規程改定・申請支援までお任せください。
  </p>
</div>
`
    },
    {
        id: 17,
        title: '障害者法定雇用率引き上げ2026対応 ～達成率を上げるための助成金・特例子会社戦略～',
        excerpt: '2026年7月から法定雇用率が2.7％に引き上げられ、対象企業が37.5人以上に拡大。未達成企業の納付金負担増を避けるための実務対応と助成金活用を解説します。',
        category: '助成金',
        emoji: '♿',
        date: '2026年3月',
        isNew: true,
        readTime: '8分',
        contact: '障害者雇用率達成支援を相談する',
        body: `
<p class="text-lg text-gray-700 leading-relaxed mb-8 font-medium">2026年7月、障害者雇用促進法改正により<strong>法定雇用率が2.5％から2.7％へ引き上げ</strong>、対象企業が従業員37.5人以上に拡大されます。これまで対象外だった中小企業も新たに義務が発生。未達成の場合、不足1人あたり年約60万円の納付金が発生します。</p>

<div class="bg-orange-50 rounded-2xl p-6 mb-8">
  <h2 class="text-xl font-black text-orange-900 mb-4">📊 2026年改正サマリー</h2>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div class="bg-white rounded-xl p-4 text-center">
      <p class="text-3xl font-black text-orange-700">2.7％</p>
      <p class="text-xs text-gray-500">新法定雇用率</p>
    </div>
    <div class="bg-white rounded-xl p-4 text-center">
      <p class="text-3xl font-black text-orange-700">37.5人</p>
      <p class="text-xs text-gray-500">対象企業拡大</p>
    </div>
    <div class="bg-white rounded-xl p-4 text-center">
      <p class="text-3xl font-black text-orange-700">約60万</p>
      <p class="text-xs text-gray-500">不足1人あたり納付金/年</p>
    </div>
  </div>
</div>

<div class="bg-blue-50 rounded-2xl p-6 mb-8">
  <h2 class="text-xl font-black text-blue-900 mb-4">✅ 達成のための実務チェックリスト</h2>
  <div class="space-y-3">
    <label class="flex items-start gap-3 bg-white rounded-xl p-4 border border-blue-100 cursor-pointer hover:border-blue-400 transition">
      <input type="checkbox" class="mt-0.5 w-4 h-4 accent-blue-900">
      <span class="text-sm text-gray-700">自社の法定雇用人数を正確に算出した</span>
    </label>
    <label class="flex items-start gap-3 bg-white rounded-xl p-4 border border-blue-100 cursor-pointer hover:border-blue-400 transition">
      <input type="checkbox" class="mt-0.5 w-4 h-4 accent-blue-900">
      <span class="text-sm text-gray-700">障害者雇用の現状を診断し、不足数を把握した</span>
    </label>
    <label class="flex items-start gap-3 bg-white rounded-xl p-4 border border-blue-100 cursor-pointer hover:border-blue-400 transition">
      <input type="checkbox" class="mt-0.5 w-4 h-4 accent-blue-900">
      <span class="text-sm text-gray-700">障害者雇用安定助成金等の活用を検討した</span>
    </label>
    <label class="flex items-start gap-3 bg-white rounded-xl p-4 border border-blue-100 cursor-pointer hover:border-blue-400 transition">
      <input type="checkbox" class="mt-0.5 w-4 h-4 accent-blue-900">
      <span class="text-sm text-gray-700">特例子会社設立またはグループ適用を検討した</span>
    </label>
  </div>
</div>

<div class="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-8">
  <p class="text-amber-900 text-sm leading-relaxed">
    <span class="font-black text-base">💡 神植からのアドバイス</span><br><br>
    法定雇用率達成は「数」だけでなく「質」が重要。特例子会社設立や助成金を活用し、インクルーシブな職場づくりを進めましょう。診断・計画策定から採用支援まで一括でお手伝いします。
  </p>
</div>
`
    },
    {
        id: 18,
        title: '建設業・運送業特化 2026労働時間規制対応ガイド ～連続勤務上限・勤務間インターバル導入チェックリスト～',
        excerpt: '2026年問題の次に来る労働時間規制強化。建設業・運送業で特に影響の大きい連続勤務上限（最大13日）・勤務間インターバル11時間義務化への実務対応を業界特化で解説します。',
        category: '法令遵守',
        emoji: '🚚',
        date: '2026年3月',
        isNew: true,
        readTime: '9分',
        contact: '建設・運送業労務規制対応を相談する',
        body: `
<p class="text-lg text-gray-700 leading-relaxed mb-8 font-medium">建設業・運送業では人手不足と長時間労働が慢性化しています。2026年以降の労働時間規制強化（連続勤務上限規制・勤務間インターバル義務化）により、シフト再設計が急務です。最大13日連続勤務の禁止と原則11時間休息の確保が鍵となります。</p>

<div class="bg-slate-50 rounded-2xl p-6 mb-8">
  <h2 class="text-xl font-black text-slate-900 mb-5">⚠️ 業界別影響と対応ポイント</h2>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="bg-white rounded-xl p-5">
      <p class="font-black text-slate-800 mb-2">建設業</p>
      <p class="text-sm text-gray-600">現場の天候・工期依存シフトの見直し、週休2日制推進。</p>
    </div>
    <div class="bg-white rounded-xl p-5">
      <p class="font-black text-slate-800 mb-2">運送業</p>
      <p class="text-sm text-gray-600">運転時間・待機時間の記録強化、代替要員確保。</p>
    </div>
  </div>
</div>

<div class="bg-blue-50 rounded-2xl p-6 mb-8">
  <h2 class="text-xl font-black text-blue-900 mb-4">📋 連続勤務・インターバル対応チェックリスト</h2>
  <div class="space-y-3">
    <label class="flex items-start gap-3 bg-white rounded-xl p-4 border border-blue-100 cursor-pointer hover:border-blue-400 transition">
      <input type="checkbox" class="mt-0.5 w-4 h-4 accent-blue-900">
      <span class="text-sm text-gray-700">連続勤務日数の上限（最大13日）を就業規則に明記した</span>
    </label>
    <label class="flex items-start gap-3 bg-white rounded-xl p-4 border border-blue-100 cursor-pointer hover:border-blue-400 transition">
      <input type="checkbox" class="mt-0.5 w-4 h-4 accent-blue-900">
      <span class="text-sm text-gray-700">勤務間インターバル11時間以上の確保ルールを整備した</span>
    </label>
    <label class="flex items-start gap-3 bg-white rounded-xl p-4 border border-blue-100 cursor-pointer hover:border-blue-400 transition">
      <input type="checkbox" class="mt-0.5 w-4 h-4 accent-blue-900">
      <span class="text-sm text-gray-700">シフト表に休息時間を自動表示する仕組みを導入した</span>
    </label>
    <label class="flex items-start gap-3 bg-white rounded-xl p-4 border border-blue-100 cursor-pointer hover:border-blue-400 transition">
      <input type="checkbox" class="mt-0.5 w-4 h-4 accent-blue-900">
      <span class="text-sm text-gray-700">36協定の特別条項を見直し、労働時間上限を遵守できる体制を整えた</span>
    </label>
  </div>
</div>

<div class="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-8">
  <p class="text-amber-900 text-sm leading-relaxed">
    <span class="font-black text-base">💡 神植からのアドバイス</span><br><br>
    規制強化は「2024年問題」の延長線上。36協定の見直しと並行してシフト・休日体制を再構築しましょう。業界特有の課題に即した就業規則改定と助成金活用で、負担を最小限に抑えつつ法令遵守を実現します。
  </p>
</div>
`
    },
    {
        id: 19,
        title: '2026年初任給・賃上げ戦略完全版 ～中小企業が人手不足を逆手に取る賃金制度設計～',
        excerpt: '最低賃金上昇と採用競争激化で初任給25万円時代が到来。中堅社員との逆転現象を防ぎつつ、採用力・定着率を高める賃金制度の設計方法を中小企業向けに解説します。',
        category: '採用・定着',
        emoji: '💰',
        date: '2026年1月',
        isNew: true,
        readTime: '8分',
        contact: '賃金制度見直し・初任給戦略を相談する',
        body: `
<p class="text-lg text-gray-700 leading-relaxed mb-8 font-medium">2026年は初任給引き上げ企業が7割超。平均引き上げ額も過去最高水準です。<strong>中小企業が「25万円超」の初任給を提示せざるを得ない</strong>状況の中、中堅社員の賃金逆転現象を防ぐ包括的な賃金制度設計が求められています。</p>

<div class="bg-teal-50 rounded-2xl p-6 mb-8">
  <h2 class="text-xl font-black text-teal-900 mb-5">🚀 中小企業が今すぐできる賃上げ戦略</h2>
  <div class="space-y-4">
    <div class="bg-white rounded-xl p-5">
      <p class="font-black text-teal-800">1. 職務等級制度の導入</p>
      <p class="text-gray-600 text-sm">役割・責任で賃金を決めることで、年功序列を脱却。</p>
    </div>
    <div class="bg-white rounded-xl p-5">
      <p class="font-black text-teal-800">2. ベースアップ＋賞与のバランス設計</p>
      <p class="text-gray-600 text-sm">固定給と変動給の適切な比率を設定。</p>
    </div>
    <div class="bg-white rounded-xl p-5">
      <p class="font-black text-teal-800">3. 第三の賃上げ（福利厚生強化）</p>
      <p class="text-gray-600 text-sm">選択的福利厚生や手当の見直しで実質的な手取りを向上。</p>
    </div>
  </div>
</div>

<div class="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-8">
  <p class="text-amber-900 text-sm leading-relaxed">
    <span class="font-black text-base">💡 神植からのアドバイス</span><br><br>
    初任給引き上げだけでは持続しません。ベースアップ＋賞与設計＋福利厚生（第三の賃上げ）を組み合わせ、トータルリワードで人材を確保しましょう。制度設計から運用まで伴走します。
  </p>
</div>
`
    },
    {
        id: 20,
        title: '化学物質管理・作業環境測定法改正2026 ～営業秘密を守りながら中小企業が対応する実務ポイント～',
        excerpt: '2026年施行の労働安全衛生法・作業環境測定法改正で、個人ばく露測定の精度担保やSDS通知義務強化が義務化。製造業・小売業の現場が押さえるべき実務対応を解説します。',
        category: '法令遵守',
        emoji: '🧪',
        date: '2026年3月',
        isNew: true,
        readTime: '8分',
        contact: '化学物質管理・リスクアセスメント支援を相談する',
        body: `
<p class="text-lg text-gray-700 leading-relaxed mb-8 font-medium">2026年、化学物質管理がさらに強化されます。<strong>個人ばく露測定の有資格者実施義務化</strong>やSDS通知違反への罰則新設により、中小製造業の負担が増大。営業秘密を保護しつつ法令遵守するためのポイントをまとめました。</p>

<div class="bg-violet-50 rounded-2xl p-6 mb-8">
  <h2 class="text-xl font-black text-violet-900 mb-5">🔧 改正主要ポイント</h2>
  <div class="space-y-4">
    <div class="bg-white rounded-xl p-5 border border-violet-100">
      <p class="font-black text-violet-800">・個人ばく露測定の精度担保（作業環境測定士等による実施）</p>
      <p class="text-gray-600 text-sm">・SDS通知義務違反への罰則新設</p>
      <p class="text-gray-600 text-sm">・代替化学名通知の記録・保存義務</p>
    </div>
  </div>
</div>

<div class="bg-blue-50 rounded-2xl p-6 mb-8">
  <h2 class="text-xl font-black text-blue-900 mb-4">✅ 実務対応チェックリスト</h2>
  <div class="space-y-3">
    <label class="flex items-start gap-3 bg-white rounded-xl p-4 border border-blue-100 cursor-pointer hover:border-blue-400 transition">
      <input type="checkbox" class="mt-0.5 w-4 h-4 accent-blue-900">
      <span class="text-sm text-gray-700">リスクアセスメントを最新の化学物質で更新した</span>
    </label>
    <label class="flex items-start gap-3 bg-white rounded-xl p-4 border border-blue-100 cursor-pointer hover:border-blue-400 transition">
      <input type="checkbox" class="mt-0.5 w-4 h-4 accent-blue-900">
      <span class="text-sm text-gray-700">個人ばく露測定を有資格者で実施する体制を整えた</span>
    </label>
    <label class="flex items-start gap-3 bg-white rounded-xl p-4 border border-blue-100 cursor-pointer hover:border-blue-400 transition">
      <input type="checkbox" class="mt-0.5 w-4 h-4 accent-blue-900">
      <span class="text-sm text-gray-700">SDSの最新版を全対象者に周知・保管している</span>
    </label>
  </div>
</div>

<div class="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-8">
  <p class="text-amber-900 text-sm leading-relaxed">
    <span class="font-black text-base">💡 神植からのアドバイス</span><br><br>
    化学物質管理は安全衛生だけでなく、営業秘密保護も重要です。リスクアセスメントの見直しと測定体制整備を今すぐ進めましょう。専門家による現場診断と規程整備で効率的に対応できます。
  </p>
</div>
`
    }
];

// カテゴリーカラーマップ
const CAT_COLOR = {
    '助成金':   { badge: 'cat-badge-助成金',   header: 'card-header-助成金' },
    'リスク管理': { badge: 'cat-badge-リスク管理', header: 'card-header-リスク管理' },
    '法令遵守':  { badge: 'cat-badge-法令遵守',  header: 'card-header-法令遵守' },
    'DX推進':   { badge: 'cat-badge-DX推進',   header: 'card-header-DX推進' },
    '採用・定着': { badge: 'cat-badge-採用・定着', header: 'card-header-採用・定着' }
};

// 以降の関数（renderBlogGrid, showArticle, renderHomeColumns, filterBlog）は変更なし
// 元のファイルにあった関数をそのままここに記述してください（省略せずコピー）

function renderBlogGrid(filter) {
    const grid = document.getElementById('blog-grid');
    if (!grid) return;
    const items = filter === 'all' ? COLUMNS : COLUMNS.filter(c => c.category === filter);
    grid.innerHTML = items.map(col => `
        <article class="column-card" data-cat="${col.category}">
            <div class="${CAT_COLOR[col.category]?.header || 'card-header-助成金'} h-40 flex items-center justify-center relative cursor-pointer" onclick="showArticle(${col.id})">
                <span class="text-5xl">${col.emoji}</span>
                ${col.isNew ? '<span class="new-badge absolute top-3 right-3"><svg width="8" height="8" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" fill="white"/></svg>NEW</span>' : ''}
            </div>
            <div class="card-body p-6">
                <div class="flex items-center gap-2 mb-3">
                    <span class="text-xs font-bold px-3 py-1 rounded-full ${CAT_COLOR[col.category]?.badge || ''}">${col.category}</span>
                    <span class="text-xs text-gray-400">${col.date}</span>
                    <span class="text-xs text-gray-400 ml-auto">📖 ${col.readTime}</span>
                </div>
                <h3 class="text-base font-black text-blue-900 mb-3 leading-snug cursor-pointer hover:text-blue-600 transition" onclick="showArticle(${col.id})">${col.title}</h3>
                <p class="text-gray-600 text-sm leading-relaxed mb-4 flex-1">${col.excerpt}</p>
                <button onclick="showArticle(${col.id})"
                    class="w-full mt-auto bg-blue-900 hover:bg-blue-700 text-white text-sm font-bold py-3 px-4 rounded-xl transition flex items-center justify-center gap-2">
                    記事を読む
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                </button>
            </div>
        </article>
    `).join('');
}

function showArticle(id) {
    const col = COLUMNS.find(c => c.id === id);
    if (!col) return;

    document.querySelectorAll('#content > section').forEach(s => s.classList.add('hidden'));

    const detail = document.getElementById('page-article-detail');
    detail.classList.remove('hidden');

    document.getElementById('article-header').className =
        `${CAT_COLOR[col.category]?.header || 'card-header-助成金'} py-24 md:py-32 relative overflow-hidden`;

    document.getElementById('article-meta').innerHTML = `
        <div class="flex items-center gap-3 mb-4 flex-wrap">
            <span class="text-xs font-bold px-4 py-1.5 rounded-full bg-white/20 text-white border border-white/30">${col.category}</span>
            <span class="text-white/80 text-sm">${col.date}</span>
            <span class="text-white/80 text-sm">📖 ${col.readTime}</span>
            ${col.isNew ? '<span class="new-badge">NEW</span>' : ''}
        </div>
        <h1 class="text-3xl md:text-5xl font-black text-white leading-tight mb-4">${col.title}</h1>
        <p class="text-white/80 text-base max-w-2xl">${col.excerpt}</p>
    `;

    document.getElementById('article-body').innerHTML = col.body;
    document.getElementById('article-cta-text').textContent = col.contact;

    const related = COLUMNS.filter(c => c.id !== col.id && c.category === col.category).slice(0, 2);
    const otherRelated = COLUMNS.filter(c => c.id !== col.id && c.category !== col.category).slice(0, 2 - related.length);
    const allRelated = [...related, ...otherRelated].slice(0, 3);

    document.getElementById('article-related').innerHTML = allRelated.map(r => `
        <div class="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer group" onclick="showArticle(${r.id})">
            <div class="${CAT_COLOR[r.category]?.header || 'card-header-助成金'} h-24 flex items-center justify-center">
                <span class="text-3xl">${r.emoji}</span>
            </div>
            <div class="p-4">
                <span class="text-xs font-bold px-2 py-0.5 rounded-full ${CAT_COLOR[r.category]?.badge || ''} mb-2 inline-block">${r.category}</span>
                <p class="text-sm font-black text-blue-900 leading-snug group-hover:text-blue-600 transition">${r.title}</p>
            </div>
        </div>
    `).join('');

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderHomeColumns() {
    const grid = document.getElementById('home-columns-grid');
    if (!grid) return;
    // IDが新しい順（降順）にソートして最新3件を取得
    const latest = [...COLUMNS].sort((a, b) => b.id - a.id).slice(0, 3);
    
    grid.innerHTML = latest.map((col, idx) => `
        <div class="home-column-card" style="animation-delay:${idx * 0.1}s">
            <div class="${CAT_COLOR[col.category]?.header || 'card-header-助成金'} h-32 flex items-center justify-center relative cursor-pointer" onclick="showArticle(${col.id})">
                <span class="text-4xl">${col.emoji}</span>
                ${col.isNew ? '<span class="new-badge absolute top-2 right-2"><svg width="8" height="8" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" fill="white"/></svg>NEW</span>' : ''}
            </div>
            <div class="p-5 flex flex-col flex-1">
                <div class="flex items-center gap-2 mb-2">
                    <span class="text-xs font-bold px-2.5 py-0.5 rounded-full ${CAT_COLOR[col.category]?.badge || ''}">${col.category}</span>
                    <span class="text-xs text-gray-400">${col.date}</span>
                </div>
                <h4 class="font-black text-blue-900 text-base leading-snug mb-2 flex-1 cursor-pointer hover:text-blue-600 transition" onclick="showArticle(${col.id})">${col.title}</h4>
                <button onclick="showArticle(${col.id})"
                    class="mt-3 text-blue-700 text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
                    続きを読む
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                    </svg>
                </button>
            </div>
        </div>
    `).join('');
}

function filterBlog(cat) {
    document.querySelectorAll('.blog-filter-btn').forEach(btn => {
        btn.classList.toggle('active-filter', btn.dataset.cat === cat);
    });
    renderBlogGrid(cat);
}

// =============================================
// 全文検索機能（開発指示書 v1.0 準拠）
// =============================================

// (a) 状態管理変数
let currentSearchQuery  = '';
let currentCategory     = 'all';
let searchDebounceTimer = null;

// (b) HTMLタグ除去（body フィールドの全文検索用）
function stripHtml(html) {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || '';
}

// (c) HTMLエスケープ
function escapeHtml(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

// (c) キーワードハイライト（タイトル・抜粋のみ使用）
function highlightKeywords(text, keywords) {
    if (!keywords.length) return escapeHtml(text);
    let result = escapeHtml(text);
    keywords.forEach(kw => {
        if (!kw) return;
        const safe  = kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(safe, 'gi');
        result = result.replace(regex, m =>
            `<mark class="search-highlight">${m}</mark>`
        );
    });
    return result;
}

// (d) 検索実行・描画
function executeSearch(query, category) {
    const keywords = query.trim().split(/\s+/).filter(Boolean);
    const grid = document.getElementById('blog-grid');
    if (!grid) return;

    // 絞り込み（カテゴリ AND キーワード）
    const results = COLUMNS.filter(col => {
        if (category !== 'all' && col.category !== category) return false;
        if (!keywords.length) return true;
        const target = [
            col.title,
            col.excerpt,
            col.category,
            stripHtml(col.body)
        ].join(' ').toLowerCase();
        return keywords.every(kw => target.includes(kw.toLowerCase()));
    });

    // 件数表示
    const countEl = document.getElementById('search-result-count');
    if (countEl) {
        if (keywords.length > 0) {
            countEl.innerHTML =
                `🔍 <span class="font-bold text-blue-900">「${escapeHtml(query.trim())}」</span>` +
                ` の検索結果：<span class="font-bold text-blue-900">${results.length}件</span>`;
            countEl.classList.remove('hidden');
        } else {
            countEl.classList.add('hidden');
        }
    }

    // 結果ゼロ
    if (results.length === 0) {
        grid.innerHTML = `
            <div class="col-span-full text-center py-20">
                <p class="text-5xl mb-4">🔍</p>
                <p class="text-gray-600 font-bold text-lg mb-2">
                    「${escapeHtml(query.trim())}」に一致するコラムはありませんでした
                </p>
                <p class="text-gray-400 text-sm mb-6">
                    別のキーワードを試すか、カテゴリフィルターを変更してください
                </p>
                <button onclick="clearSearch()"
                    class="px-6 py-2 bg-blue-900 text-white rounded-xl text-sm font-bold
                           hover:bg-blue-700 transition">
                    検索をリセット
                </button>
            </div>`;
        return;
    }

    // カード描画（ハイライト付き）—— renderBlogGrid と同じ構造を維持
    grid.innerHTML = results.map(col => {
        const hl_title   = highlightKeywords(col.title,   keywords);
        const hl_excerpt = highlightKeywords(col.excerpt, keywords);
        const hdr = CAT_COLOR[col.category]?.header || 'card-header-助成金';
        const bdg = CAT_COLOR[col.category]?.badge  || '';
        return `
        <article class="column-card" data-cat="${col.category}">
            <div class="${hdr} h-40 flex items-center justify-center relative cursor-pointer"
                 onclick="showArticle(${col.id})">
                <span class="text-5xl">${col.emoji}</span>
                ${col.isNew
                    ? '<span class="new-badge absolute top-3 right-3"><svg width="8" height="8" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" fill="white"/></svg>NEW</span>'
                    : ''}
            </div>
            <div class="card-body p-6">
                <div class="flex items-center gap-2 mb-3">
                    <span class="text-xs font-bold px-3 py-1 rounded-full ${bdg}">${col.category}</span>
                    <span class="text-xs text-gray-400">${col.date}</span>
                    <span class="text-xs text-gray-400 ml-auto">📖 ${col.readTime}</span>
                </div>
                <h3 class="text-base font-black text-blue-900 mb-3 leading-snug cursor-pointer
                           hover:text-blue-600 transition"
                    onclick="showArticle(${col.id})">${hl_title}</h3>
                <p class="text-gray-600 text-sm leading-relaxed mb-4 flex-1">${hl_excerpt}</p>
                <button onclick="showArticle(${col.id})"
                    class="w-full mt-auto bg-blue-900 hover:bg-blue-700 text-white text-sm
                           font-bold py-3 px-4 rounded-xl transition flex items-center
                           justify-center gap-2">
                    記事を読む
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M9 5l7 7-7 7"/>
                    </svg>
                </button>
            </div>
        </article>`;
    }).join('');
}

// (e) 検索クリア
function clearSearch() {
    const input    = document.getElementById('search-input');
    const clearBtn = document.getElementById('search-clear');
    const countEl  = document.getElementById('search-result-count');
    if (input)    input.value = '';
    if (clearBtn) clearBtn.classList.add('hidden');
    if (countEl)  countEl.classList.add('hidden');
    currentSearchQuery = '';
    const url = new URL(window.location);
    url.searchParams.delete('q');
    history.replaceState({}, '', url);
    executeSearch('', currentCategory);
}

// Step 3: カテゴリ変更ハンドラ（filterBlog のラッパー）
function onCategoryChange(cat) {
    currentCategory = cat;
    document.querySelectorAll('.blog-filter-btn').forEach(btn => {
        btn.classList.toggle('active-filter', btn.dataset.cat === cat);
    });
    executeSearch(currentSearchQuery, cat);
}

// (f) Step 5: 検索初期化（showPage('blog') から呼ばれる）
function initSearch() {
    const input    = document.getElementById('search-input');
    const clearBtn = document.getElementById('search-clear');
    if (!input) return;

    // URLクエリ復元（F-09）
    const urlParams = new URLSearchParams(window.location.search);
    const initQuery = urlParams.get('q') || '';
    if (initQuery) {
        input.value        = initQuery;
        currentSearchQuery = initQuery;
        if (clearBtn) clearBtn.classList.remove('hidden');
    }

    // リアルタイム検索（デバウンス 150ms）
    // 二重登録防止
    const newInput = input.cloneNode(true);
    input.parentNode.replaceChild(newInput, input);
    const inp = document.getElementById('search-input');

    inp.addEventListener('input', () => {
        clearTimeout(searchDebounceTimer);
        const q = inp.value;
        const cb = document.getElementById('search-clear');
        if (cb) cb.classList.toggle('hidden', !q);
        searchDebounceTimer = setTimeout(() => {
            currentSearchQuery = q;
            const url = new URL(window.location);
            if (q.trim()) url.searchParams.set('q', q.trim());
            else          url.searchParams.delete('q');
            history.replaceState({}, '', url);
            executeSearch(q, currentCategory);
        }, 150);
    });

    // クリアボタン（再取得）
    const cb2 = document.getElementById('search-clear');
    if (cb2) {
        const newCb = cb2.cloneNode(true);
        cb2.parentNode.replaceChild(newCb, cb2);
        document.getElementById('search-clear').addEventListener('click', clearSearch);
    }

    // URLクエリがあれば初期検索
    if (initQuery) executeSearch(initQuery, currentCategory);
    else           executeSearch('', currentCategory);
}