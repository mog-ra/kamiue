/**
 * サイト全体の設定管理
 */
const SITE_CONFIG = {
    YOUTUBE: {
        API_KEY: 'AIzaSyBtuFKMfSuvHBJi9mA2ECNY-O3y4hayxPE',
        CHANNEL_ID: 'UCN0gus5F7Hdi0bzQJJ0NLVw'
    },
    FORMSPREE: {
        ID: 'YOUR_FORMSPREE_ID', // ここに実際のIDを設定
        BASE_URL: 'https://formspree.io/f/'
    },
    // 無料資料ダウンロードのマスターデータ
    DOCUMENTS: [
        { id: "01", filename: "01_shugyo_kisoku.pdf",      title: "就業規則 作成テンプレート集",         emoji: "📋", url: "./files/01_shugyo_kisoku.pdf", tags: ["人気 No.1"] },
        { id: "02", filename: "03_joseikin_guide.pdf",     title: "助成金申請 完全マニュアル",                emoji: "💰", url: "./files/03_joseikin_guide.pdf", tags: ["2025年最新版"] },
        { id: "03", filename: "02_36_kyotei_manual.pdf",   title: "労務リスク 50項目チェックリスト",         emoji: "⚖️", url: "./files/02_36_kyotei_manual.pdf", tags: ["実務必携"] },
        { id: "04", filename: "04_koyo_keiyaku_sample.pdf",title: "社会保険料 早見表 2025年度版",             emoji: "📊", url: "./files/04_koyo_keiyaku_sample.pdf", tags: ["経営者向け"] },
        { id: "05", filename: "05_telework_kitei.pdf",     title: "はじめて社員を雇う時の手続き完全ガイド",  emoji: "🏢", url: "./files/05_telework_kitei.pdf", tags: ["創業者必見"] },
        { id: "06", filename: "06_stress_check_guide.pdf", title: "36協定 作成・届出 実務ガイドブック",       emoji: "🕐", url: "./files/06_stress_check_guide.pdf", tags: ["残業対策"] }
    ],
    // チャットボット等で使うPDFリスト（互換性のため）
    DL_PDF_DATA: [
        { filename: "01_shugyo_kisoku.pdf",      title: "就業規則 作成テンプレート集",         emoji: "📋", url: "./files/01_shugyo_kisoku.pdf" },
        { filename: "02_36_kyotei_manual.pdf",   title: "36協定 届出マニュアル",               emoji: "📄", url: "./files/02_36_kyotei_manual.pdf" },
        { filename: "03_joseikin_guide.pdf",     title: "【最新版】助成金活用ガイドブック",     emoji: "💡", url: "./files/03_joseikin_guide.pdf" },
        { filename: "04_koyo_keiyaku_sample.pdf",title: "雇用契約書・労働条件通知書サンプル",  emoji: "📝", url: "./files/04_koyo_keiyaku_sample.pdf" },
        { filename: "05_telework_kitei.pdf",     title: "テレワーク導入・運用規定案",          emoji: "💻", url: "./files/05_telework_kitei.pdf" },
        { filename: "06_stress_check_guide.pdf", title: "メンタルヘルス実施ガイド",            emoji: "🧠", url: "./files/06_stress_check_guide.pdf" }
    ]
};