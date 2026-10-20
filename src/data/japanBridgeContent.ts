export interface JapanBridgeContent {
  nav: {
    approach: string;
    partnership: string;
    pilot: string;
    about: string;
    contact: string;
    ctaButton: string;
    backToMain: string;
  };
  hero: {
    eyebrow: string;
    heading: string;
    subheading: string;
    copy: string;
    primaryCta: string;
    secondaryCta: string;
    metaPill1: string;
    metaPill2: string;
    metaPill3: string;
    provenanceTag: string;
    provenanceDesc: string;
  };
  challenges: {
    eyebrow: string;
    heading: string;
    intro: string;
    challenge1Title: string;
    challenge1Subtitle: string;
    challenge1Body: string;
    challenge2Title: string;
    challenge2Subtitle: string;
    challenge2Body: string;
    challenge3Title: string;
    challenge3Subtitle: string;
    challenge3Body: string;
  };
  capabilities: {
    eyebrow: string;
    heading: string;
    intro: string;
    cap1Title: string;
    cap1Desc: string;
    cap2Title: string;
    cap2Desc: string;
    cap3Title: string;
    cap3Desc: string;
    cap4Title: string;
    cap4Desc: string;
    cap5Title: string;
    cap5Desc: string;
    disclaimer: string;
  };
  industries: {
    eyebrow: string;
    heading: string;
    intro: string;
    ind1Title: string;
    ind1Desc: string;
    ind2Title: string;
    ind2Desc: string;
    ind3Title: string;
    ind3Desc: string;
    ind4Title: string;
    ind4Desc: string;
    railwayTitle: string;
    railwayCopy: string;
    jointSelectionNote: string;
  };
  partnership: {
    eyebrow: string;
    heading: string;
    col1Title: string;
    col1Subtitle: string;
    col1Points: string[];
    col2Title: string;
    col2Subtitle: string;
    col2Points: string[];
    col3Title: string;
    col3Subtitle: string;
    col3Points: string[];
    closingSentence: string;
  };
  pilot: {
    eyebrow: string;
    heading: string;
    intro: string;
    stage1Title: string;
    stage1Desc: string;
    stage2Title: string;
    stage2Desc: string;
    stage3Title: string;
    stage3Desc: string;
    stage4Title: string;
    stage4Desc: string;
    metricsHeading: string;
    metrics: string[];
    disclaimer: string;
    cta: string;
  };
  trust: {
    eyebrow: string;
    heading: string;
    item1Title: string;
    item1Desc: string;
    item2Title: string;
    item2Desc: string;
    item3Title: string;
    item3Desc: string;
    item4Title: string;
    item4Desc: string;
    item5Title: string;
    item5Desc: string;
    item6Title: string;
    item6Desc: string;
    disclaimer: string;
  };
  form: {
    eyebrow: string;
    heading: string;
    copy: string;
    nameLabel: string;
    companyLabel: string;
    jobTitleLabel: string;
    emailLabel: string;
    countryLabel: string;
    industryLabel: string;
    collabTypeLabel: string;
    roleLabel: string;
    volumeLabel: string;
    timelineLabel: string;
    messageLabel: string;
    consentText: string;
    submitButton: string;
    submitting: string;
    successHeading: string;
    successBody: string;
    submitAnother: string;
  };
  faqs: {
    eyebrow: string;
    heading: string;
    items: { q: string; a: string }[];
  };
  footer: {
    tagline: string;
    description: string;
    copyright: string;
    privacy: string;
    contacts: string;
  };
}

export const JAPAN_CONTENT_EN: JapanBridgeContent = {
  nav: {
    approach: 'Our Approach',
    partnership: 'Partnership Model',
    pilot: 'Pilot Proposal',
    about: 'About Rapidhire',
    contact: 'Enquiry',
    ctaButton: 'Discuss a Pilot',
    backToMain: 'Main Corporate Site'
  },
  hero: {
    eyebrow: 'INDIA × JAPAN | WORKFORCE COLLABORATION',
    heading: 'Connecting Indian talent with Japanese industry.',
    subheading: 'Recruitment is the beginning. Workforce success is the outcome.',
    copy: 'Rapidhire combines targeted candidate outreach, recruiter-led selection, structured talent pools, and post-placement support. We are looking to collaborate with Japanese employers to develop a practical, measurable approach to cross-border talent.',
    primaryCta: 'Discuss a Pilot',
    secondaryCta: 'Explore the Partnership Model',
    metaPill1: 'Targeted Sourcing in India',
    metaPill2: 'Recruiter-Led Technical Vetting',
    metaPill3: '24/7 Welfare & Post-Placement Care',
    provenanceTag: 'COLLABORATION MONOGRAPH: IN-JP-2025',
    provenanceDesc: 'Co-designing workforce pathways for manufacturing, precision machinery, mobility, and technical trades.'
  },
  challenges: {
    eyebrow: 'GROUND-LEVEL EXPLORATION',
    heading: 'Start with a real workforce challenge.',
    intro: 'Every employer has different skill requirements, hiring processes, and workplace expectations. We believe the right partnership begins by understanding those requirements before designing a solution.',
    challenge1Title: '01 — Access to relevant talent',
    challenge1Subtitle: 'Precision Engineering & Technical Sourcing',
    challenge1Body: 'Reach suitable Indian candidates through targeted regional outreach across engineering clusters, and build structured talent pools directly around actual technical and shop-floor requirements.',
    challenge2Title: '02 — Better candidate readiness',
    challenge2Subtitle: 'Technical & Practical Preparedness',
    challenge2Body: 'Use structured recruiter-led screening and coordinate role-specific technical and cultural preparation with recognized training and education partners where needed.',
    challenge3Title: '03 — Better outcomes after placement',
    challenge3Subtitle: 'Welfare, Integration & Long-Term Retention',
    challenge3Body: 'Support candidate experience and worker welfare beyond recruitment, maintaining clear processes for receiving, routing, and resolving workplace concerns collaboratively with host employers.'
  },
  capabilities: {
    eyebrow: 'CORE RECRUITMENT CAPABILITIES',
    heading: 'Recruitment that combines reach, judgement, and care.',
    intro: 'Technology supports our recruiters and candidate workflows; it does not replace human qualitative judgement or guarantee hiring success.',
    cap1Title: 'Targeted Talent Outreach',
    cap1Desc: 'Rapidhire uses digital and regional outreach channels, including polytechnic alumni and media campaigns where appropriate, to reach candidates beyond conventional job boards.',
    cap2Title: 'Recruiter-Led Selection',
    cap2Desc: 'Human technical recruiters evaluate candidates against defined role requirements, trade certificates, and practical capabilities, rather than relying entirely on automated scoring.',
    cap3Title: 'Structured Talent Pools',
    cap3Desc: 'Suitable candidates are indexed into structured candidate pools for follow-on recruitment batches, subject to explicit candidate consent and strict data-protection requirements.',
    cap4Title: 'Candidate Experience & Clarity',
    cap4Desc: 'We communicate workplace expectations, selection stages, and role realities as transparently as possible, treating candidates with dignity at every touchpoint.',
    cap5Title: 'Post-Placement Welfare Support',
    cap5Desc: 'Rapidhire operates a dedicated 24/7 candidate-support channel to help placed personnel raise queries and resolve operational concerns through agreed channels.',
    disclaimer: '* Note: Specialized Japanese language instruction, statutory residency/visa processing, and professional certifications are coordinated in conjunction with qualified partner organizations.'
  },
  industries: {
    eyebrow: 'REGIONAL & INDUSTRIAL ALIGNMENT',
    heading: 'Build around the industries that make the region distinctive.',
    intro: 'Tailored for collaborative exploration with manufacturers, mobility pioneers, and technical enterprises in Hamamatsu and across Japan.',
    ind1Title: 'Manufacturing & Precision Production',
    ind1Desc: 'CNC machinists, conventional turners, press tool fitters, assembly technicians, and production shift supervisors for continuous manufacturing facilities.',
    ind2Title: 'Electrical & Industrial Electronics',
    ind2Desc: 'Control panel wiring, switchgear assembly, testing & commissioning technicians, and power distribution specialists.',
    ind3Title: 'Mobility & Transport-Equipment Supply Chains',
    ind3Desc: 'Mechanical design engineers, automotive component fabrication, quality inspection (CMM/metrology), and mechatronics personnel.',
    ind4Title: 'Maintenance & Technical Occupations',
    ind4Desc: 'Mechanical maintenance fitters, hydraulic/pneumatic specialists, equipment rebuild technicians, and field service teams.',
    railwayTitle: 'Exploration Theme: Railway & High-Speed Rail-Related Talent',
    railwayCopy: '“We are interested in exploring railway-related workforce opportunities where employers have a confirmed need and the relevant skills, training, and employment pathway can be established.”',
    jointSelectionNote: 'The initial industry sector and specific job families will be selected jointly with interested Japanese employers based on verified demand.'
  },
  partnership: {
    eyebrow: 'SHARED RESPONSIBILITY FRAMEWORK',
    heading: 'A partnership designed around shared responsibilities.',
    col1Title: 'Rapidhire',
    col1Subtitle: 'India Talent & Recruitment Execution',
    col1Points: [
      'Identify and engage potential candidates across Indian industrial clusters.',
      'Coordinate targeted sourcing campaigns and technical outreach.',
      'Conduct rigorous recruiter-led screening and trade test reviews.',
      'Build structured, pre-qualified candidate pools.',
      'Communicate transparently with candidates throughout selection.',
      'Provide dedicated candidate-support processes within the agreed scope.'
    ],
    col2Title: 'Japanese Employer',
    col2Subtitle: 'Demand, Standards & Workplace Leadership',
    col2Points: [
      'Share genuine hiring requirements and plant operational context.',
      'Define required technical skills, working conditions, and selection criteria.',
      'Clarify Japanese-language and workplace culture expectations.',
      'Participate actively in candidate evaluation and interview feedback.',
      'Identify suitable technical training or workplace-readiness requirements.',
      'Help evaluate the commercial viability and operational effectiveness of a pilot.'
    ],
    col3Title: 'Specialist Partners',
    col3Subtitle: 'Language, Verification & Local Coordination',
    col3Points: [
      'Provide Japanese language (JLPT) or technical preparation where required.',
      'Help validate academic qualifications and trade documentation.',
      'Support statutory residency and immigration-pathway verification through qualified administrative scriveners.',
      'Contribute sector-specific Japanese industry knowledge and network access.'
    ],
    closingSentence: '“We are not proposing a fixed package. We want to co-design a model around your actual workforce requirements.”'
  },
  pilot: {
    eyebrow: 'MEASURABLE COLLABORATION PATHWAY',
    heading: 'Start small. Validate demand. Scale with evidence.',
    intro: 'A low-commitment, structured 4-stage framework designed to validate feasibility before broad organizational commitments.',
    stage1Title: '01 — Discover',
    stage1Desc: 'A working discovery session with a Japanese employer to understand the recruitment challenge, job family, skills requirements, language expectations, and employment conditions.',
    stage2Title: '02 — Design',
    stage2Desc: 'Agree on the candidate profile, sourcing channels, screening criteria, mutual responsibilities, timeline, and any required training or specialist support.',
    stage3Title: '03 — Test',
    stage3Desc: 'Source and screen a mutually agreed pilot group of candidates. Present structured candidate dossiers and coordinate evaluation logistics.',
    stage4Title: '04 — Evaluate',
    stage4Desc: 'Review results collaboratively with the employer and decide whether the model should be refined, expanded to follow-on batches, or stopped.',
    metricsHeading: 'Metrics Agreed in Advance:',
    metrics: [
      'Time to produce a qualified shortlist against agreed criteria',
      'Candidate-to-interview progression and conversion rate',
      'Interview feedback and candidate technical readiness',
      'Offer acceptance and onboarding readiness (where applicable)',
      'Recruiter administrative effort and employer time saved',
      'Candidate inquiry resolution and early retention outcomes'
    ],
    disclaimer: '* Note: This framework is a proposed collaborative model to be calibrated per employer mandate, not an inflexible commercial package. Placement rates are never artificially guaranteed.',
    cta: 'Co-design a Pilot With Us'
  },
  trust: {
    eyebrow: 'CREDIBILITY & EVIDENCE-BASED PRACTICE',
    heading: 'Built on recruitment experience. Focused on responsible outcomes.',
    item1Title: 'Registered Enterprise in India',
    item1Desc: 'Incorporated under the Ministry of Corporate Affairs, Republic of India, operating in compliance with statutory business norms.',
    item2Title: 'T-Hub RubriX HR Category Winner',
    item2Desc: 'Selected as winner in the HR category of T-Hub’s flagship RubriX programme from approximately 240 startup applicants across India.',
    item3Title: 'Government of Telangana Skilled Initiatives',
    item3Desc: 'Collaboration on structured outreach, technical skill assessments, and formal career pathways for qualified engineering talent.',
    item4Title: 'Open-Source Technology Approach',
    item4Desc: 'Leveraging open-source recruitment workflow tools to standardise candidate evaluation, skills taxonomy mapping, and interview logistics.',
    item5Title: 'Fair Practice & Zero Candidate Fees',
    item5Desc: 'Firm commitment to ethical recruitment: candidates are never charged placement, interview, or processing fees.',
    item6Title: '24/7 Candidate Support Channel',
    item6Desc: 'Round-the-clock welfare communication channel enabling placed personnel to raise operational queries and seek assistance.',
    disclaimer: '* Institutional details stated factually. Rapidhire does not claim official endorsement by government entities or municipal programmes without formal documentation.'
  },
  form: {
    eyebrow: 'PARTNERSHIP DISCOVERY INTAKE',
    heading: 'What workforce challenge would you like to solve?',
    copy: 'Tell us about your organisation and the role or recruitment challenge you would like to explore. We will use this information to prepare a focused, substantive discussion.',
    nameLabel: 'Full Name *',
    companyLabel: 'Company / Organisation Name *',
    jobTitleLabel: 'Job Title / Position *',
    emailLabel: 'Corporate Email *',
    countryLabel: 'Country / Location *',
    industryLabel: 'Industry Sector *',
    collabTypeLabel: 'Type of Collaboration Interested In *',
    roleLabel: 'Target Job Family or Role *',
    volumeLabel: 'Expected Hiring Volume (Optional)',
    timelineLabel: 'Intended Timeline (Optional)',
    messageLabel: 'Describe your workforce challenge or requirements *',
    consentText: 'I agree to Rapidhire contacting me to discuss workforce collaboration and understand that my corporate details will be treated with strict confidentiality.',
    submitButton: 'Request Discovery Discussion',
    submitting: 'Submitting Inquiry...',
    successHeading: 'Partnership Inquiry Recorded',
    successBody: 'Thank you for reaching out. Our India–Japan workforce collaboration desk will review your inquiry and follow up within 24 business hours to arrange an introductory discussion.',
    submitAnother: 'Submit Another Inquiry'
  },
  faqs: {
    eyebrow: 'PRACTICAL CLARIFICATIONS',
    heading: 'Frequently Asked Questions',
    items: [
      {
        q: 'Does Rapidhire already have Japanese recruitment partners?',
        a: 'Rapidhire is actively building bilateral collaboration partnerships with Japanese manufacturers, industry groups, and recruitment coordinators. We are looking for forward-thinking employers to co-design and validate initial recruitment pilots tailored to their technical standards.'
      },
      {
        q: 'Which Indian candidates can be considered?',
        a: 'We evaluate candidates across engineering disciplines (mechanical, electrical, electronics, civil), precision manufacturing (CNC machinists, toolmakers, inspectors), skilled trades (welders, maintenance fitters), and industrial technicians. All candidates possess accredited Indian qualifications (B.Tech, Polytechnic, ITI/NCVT).'
      },
      {
        q: 'Can Rapidhire support Japanese-language and technical preparation?',
        a: 'Rapidhire coordinates language and cultural orientation in partnership with specialized Japanese training providers and language institutes in India. We align candidate readiness with the specific JLPT level (e.g., N4, N3) and workplace communication standards required by the employer.'
      },
      {
        q: 'How are immigration and employment pathways verified?',
        a: 'Visa eligibility (such as "Engineer/Specialist in Humanities/International Services" or "Specified Skilled Worker") depends on the job role, academic degrees, and statutory destination requirements. We coordinate documentation audits and work with qualified administrative scriveners (Gyoseishoshi) to ensure full compliance.'
      },
      {
        q: 'What would a Japanese company need to contribute to a pilot?',
        a: 'A participating company contributes technical clarity: explaining genuine job requirements, machine specifications, workplace communication expectations, and providing candid feedback during candidate screening. No upfront hiring commitment is required until requirements are locked.'
      },
      {
        q: 'Does a pilot require a large initial financial or hiring commitment?',
        a: 'No. The pilot model is explicitly designed to start small. Employers can test the pipeline with 1 to 3 candidate profiles, evaluate the quality of screening, and gauge feasibility before deciding whether to expand or stop.'
      },
      {
        q: 'How does Rapidhire support candidates after placement?',
        a: 'Rapidhire maintains a dedicated 24/7 candidate-support channel. Deployed workers can contact our team to raise operational questions, seek orientation assistance, and resolve misunderstandings through agreed liaison protocols with the host employer.'
      }
    ]
  },
  footer: {
    tagline: 'Connecting India\'s skilled talent with Japan\'s industrial ambitions.',
    description: 'Rapidhire is an India-registered recruitment enterprise building bilateral workforce collaboration pathways for manufacturing and engineering operations.',
    copyright: '© Rapidhire. All rights reserved. Registered Enterprise in the Republic of India.',
    privacy: 'Privacy Policy',
    contacts: 'Bilateral Desk: japan.desk@rapidhire.work | Head Office: Hyderabad, Telangana, India'
  }
};

export const JAPAN_CONTENT_JA: JapanBridgeContent = {
  nav: {
    approach: 'アプローチ',
    partnership: '協業モデル',
    pilot: 'パイロット提案',
    about: '企業情報',
    contact: 'お問い合わせ',
    ctaButton: '協業について相談する',
    backToMain: 'グローバルサイトへ'
  },
  hero: {
    eyebrow: '日印連携 ｜ 産業人材アライアンス',
    heading: 'インドの人材と、日本のものづくりをつなぐ。',
    subheading: '採用で終わらない。人材の活躍と定着までを考える。',
    copy: 'Rapidhire（ラピッドハイヤー）は、インド工科系人材のダイレクトソーシング、リクルーター主導の技術選考、体系化されたタレントプール、そして就労後の定着支援を統合した人材ソリューションを提供します。日本の製造業・技術企業の皆様とともに、実効性の高いパイロット検証を設計します。',
    primaryCta: '協業について相談する',
    secondaryCta: '協業モデルの詳細を見る',
    metaPill1: 'インド国内の厳選ソーシング',
    metaPill2: '技術者による実務レベル選考',
    metaPill3: '24時間体制の定着・生活支援',
    provenanceTag: '日印協業構想：IN-JP-2025',
    provenanceDesc: 'ものづくり、精密加工、モビリティ、設備保全分野における実証型人材連携モデル。'
  },
  challenges: {
    eyebrow: '現場視点の人材課題',
    heading: '現場の課題から始める、国境を越えた人材連携。',
    intro: '求める技術水準、職場環境、日本語力は企業ごとに大きく異なります。パッケージ化された既存サービスを押し付けるのではなく、各社の個別課題を深く理解することから協業を開始します。',
    challenge1Title: '01. 必要な専門人材へのアクセス',
    challenge1Subtitle: '精密加工・設計・保全の専門母集団形成',
    challenge1Body: '従来の求人広告に依存せず、インド各地の工業クラスターや工科大学との直接ネットワークを通じて、現場要件に合致した候補者プールを構築します。',
    challenge2Title: '02. 実務・文化両面での受け入れ準備',
    challenge2Subtitle: '技術実務と日本的職場の橋渡し',
    challenge2Body: 'リクルーターによる経歴・実務能力の精査に加え、専門パートナーと連携した業務別事前研修や職場マナー教育の要件を共同で策定します。',
    challenge3Title: '03. 定着と活躍を見据えた就労後支援',
    challenge3Subtitle: '不安の解消と持続可能な職場定着',
    challenge3Body: '入社後も孤立を防ぎ、現場の課題や生活面での懸念を早期に把握・共有できる24時間体制の相談窓口を運用し、受入企業の負担を軽減します。'
  },
  capabilities: {
    eyebrow: 'RAPIDHIREの強みと機能',
    heading: '「届く力」「見極める目」「支え続ける姿勢」の融合。',
    intro: 'テクノロジーは業務の効率化と透明性のために活用し、候補者の適性判断や現場適合性の見極めは経験豊富なリクルーターが責任を持って行います。',
    cap1Title: '特定領域に絞り込んだ能動的アプローチ',
    cap1Desc: '一般的な求人票掲載にとどまらず、産業集積地や専門教育機関の卒業生ネットワークへ能動的にリーチし、意欲ある候補者を開拓します。',
    cap2Title: '技術理解に基づくリクルーター選考',
    cap2Desc: '機械制御盤の仕様（Fanuc、Siemens等）、溶接規格（ASME、ISO）、図面読解力など、現場が求める実務基準に照らした丁寧な面談を実施します。',
    cap3Title: '要件に応じた体系的タレントプール',
    cap3Desc: '候補者の同意と厳格な個人情報管理のもと、将来的な追加採用やプロジェクト増員にも迅速に対応できる構造化プールを形成します。',
    cap4Title: '候補者への誠実な情報開示と期待値調整',
    cap4Desc: '業務内容、待遇、労働環境、求められる規律を事前に率直かつ丁寧に説明し、ミスマッチや早期離職を防ぎます。',
    cap5Title: '配属後の継続的なケアと相談窓口',
    cap5Desc: '現地での生活や業務に関する不安を母国語で相談できる24時間サポート窓口を設置し、受入先企業との円滑なコミュニケーションを後押しします。',
    disclaimer: '※ 日本語教育（JLPT対策）、在留資格手続き、特定技能試験対策等は、必要に応じて現地の専門教育機関および行政書士等と連携して対応します。'
  },
  industries: {
    eyebrow: '浜松・東海地域産業への適合',
    heading: 'ものづくりの中枢を担う主要産業とともに。',
    intro: 'スズキ、ヤマハ、ホンダをはじめとする世界的企業を生んだ浜松・東海地域のものづくり精神（やらまいか精神）に敬意を払い、現場を支える技術領域に焦点を当てています。',
    ind1Title: '精密加工・金型・製造現場',
    ind1Desc: 'マシニングセンタ（3軸/5軸）オペレーター、NC旋盤工、金型製作・仕上工、品質検査員（三次元測定機）、製造ラインリーダー。',
    ind2Title: '電気・電子・制御システム',
    ind2Desc: '制御盤設計・配線、シーケンサ（PLC）制御、受変電設備保全、産業機器のテスト・コミッショニング技術者。',
    ind3Title: 'モビリティ・輸送用機器サプライチェーン',
    ind3Desc: '自動車・二輪部品の機械設計（CAD）、治具設計、プレス金型調整、品質保証（PPAP等）、メカトロニクス技術者。',
    ind4Title: '設備保全・フィールドサービス',
    ind4Desc: '油圧・空圧機器の定期点検、産業機械のオーバーホール、芯出し作業、工場設備の予防保全エンジニア。',
    railwayTitle: '探索テーマ：鉄道・高速鉄道関連の技術人材連携',
    railwayCopy: '「確かな採用ニーズと受入体制が存在し、適切な技能・研修・在留資格パスウェイが整う場合に限り、鉄道関連分野における技術人材交流の可能性を継続的に探索しています。」',
    jointSelectionNote: '※ 実際の採用職種および技術要件は、参画企業様との協議の上で個別に決定します。'
  },
  partnership: {
    eyebrow: '役割分担と共創の原則',
    heading: '責任と強みを分かち合う、対等なパートナーシップ。',
    col1Title: 'Rapidhire（インド側）',
    col1Subtitle: '母集団形成・選考・現地実行',
    col1Points: [
      'インド国内での候補者発掘と関心喚起',
      '専門学校・大学等を活用したターゲットソーシング',
      'リクルーターによる技術審査と経歴確認',
      '日本企業向けタレントプールの構築',
      '選考プロセスにおける候補者コミュニケーション',
      '就労開始後の相談窓口およびケアの提供'
    ],
    col2Title: '日本企業（受入側）',
    col2Subtitle: '実務要件の定義と現場評価',
    col2Points: [
      '現場で真に必要とされる実務スキルの明確化',
      '労働条件、職場環境、評価基準の提示',
      '日本語レベルおよび職場コミュニケーション要件の共有',
      '候補者書類の審査および面接の実施',
      '現場配属に向けた受け入れ準備と初期OJT',
      'パイロット検証結果の共同評価と改善フィードバック'
    ],
    col3Title: '専門パートナー（地域・法務・教育）',
    col3Subtitle: '日本語教育・法務確認・適応支援',
    col3Points: [
      '渡航前・渡航後の実践的日本語教育（JLPT対策含む）',
      '技術資格や履修内容の公的証明確認',
      '行政書士等を通じた在留資格申請手続きの確認・支援',
      '日本のビジネスマナーおよび生活適応オリエンテーション'
    ],
    closingSentence: '「固定化されたパッケージの販売ではありません。貴社の実際の採用ニーズに寄り添い、共に仕組みを創ることを目指します。」'
  },
  pilot: {
    eyebrow: '実証パイロットのご提案',
    heading: '小さく始め、効果を確かめ、確信を持って広げる。',
    intro: '初めから大規模な投資や長期契約を求めることはありません。まずは1〜3名の小規模なパイロットプロジェクトを通じて、募集・選考・受け入れの実現可能性を検証します。',
    stage1Title: '01. ヒアリング（Discover）',
    stage1Desc: '受入先企業様と対話し、現場で不足している職種、求める実務経験、日本語の期待値、職場の受け入れ体制を明確にします。',
    stage2Title: '02. 協業設計（Design）',
    stage2Desc: '具体的な職務要件、選考フロー、スケジュール、役割分担、必要となる研修や専門機関との連携方針を合意します。',
    stage3Title: '03. 試行選考（Test）',
    stage3Desc: '合意した条件に基づき、インド国内で候補者を募集・選考。選抜された候補者プロファイルを提示し、面接を実施します。',
    stage4Title: '04. 効果検証（Evaluate）',
    stage4Desc: 'パイロット選考の結果や受け入れ準備の手応えを振り返り、本格運用への移行、条件の調整、あるいは終了を共同判断します。',
    metricsHeading: '事前に合意可能な検証指標例：',
    metrics: [
      '募集開始から候補者リスト提示までの所要日数',
      '書類通過率および面接通過率の妥当性',
      '面接時における候補者の実務理解度と意欲',
      '内定受諾および渡航準備の円滑さ（採用に至る場合）',
      '受入企業側の採用業務負荷の軽減度合',
      '就労初期における課題発生頻度と解決スピード'
    ],
    disclaimer: '※ パイロット提案は協業の骨子を示すものであり、採用率や内定の自動的な保証を行うものではありません。' ,
    cta: 'パイロットプログラムを共同設計する'
  },
  trust: {
    eyebrow: '信頼性の裏付けと公的実績',
    heading: '誠実な採用実務と、確認可能な実績に根ざして。',
    item1Title: 'インド法人としての正規登録',
    item1Desc: 'インド会社法（MCA）に基づき適法に設立された人材ソリューション企業として、透明性の高い事業運営を行っています。',
    item2Title: 'T-Hub RubriXプログラム HR部門選出',
    item2Desc: 'インド有数のイノベーション拠点T-HubのRubriXプログラムにおいて、約240社の応募企業の中からHR・採用革新部門の優秀企業として選出。',
    item3Title: 'テランガナ州政府との人材育成イニシアチブ連携',
    item3Desc: '高度IT・エンジニア人材のキャリア形成および採用支援イニシアチブにおいて、州政府関係機関と協働実績を有しています。',
    item4Title: 'オープン技術を活用した透明性の高い採用プロセス',
    item4Desc: '独自のブラックボックスなAIではなく、検証可能なオープンソースアーキテクチャを活用し、公平で客観的なスキルマッピングを推進。',
    item5Title: '候補者への無料方針（フェア・リクルートメント）',
    item5Desc: '求職者から不当な手数料や保証金を一切徴収しない国際倫理基準を遵守し、健全で前向きな人材供給を維持しています。',
    item6Title: '24時間体制の候補者サポート窓口',
    item6Desc: '配属後の孤立や生活・労働上のトラブルを防ぐため、母国語で対応可能な24時間サポートチャネルを整備しています。',
    disclaimer: '※ 記載の事実は社内記録および公的公表情報に基づくものです。政府や自治体による公式な認定・推奨を過大に主張するものではありません。'
  },
  form: {
    eyebrow: '協業のご相談・お問い合わせ',
    heading: 'どのような人材課題をお持ちですか？',
    copy: '貴社の事業概要や、検討されたい職種・採用課題についてお聞かせください。事前に内容を確認の上、有意義なディスカッションをご用意いたします。',
    nameLabel: 'ご担当者様氏名 *',
    companyLabel: '貴社名・組織名 *',
    jobTitleLabel: '部署・役職 *',
    emailLabel: '会社メールアドレス *',
    countryLabel: '所在地（国・都道府県） *',
    industryLabel: '事業分野・産業 *',
    collabTypeLabel: 'ご関心のある協業形態 *',
    roleLabel: '想定される対象職種・職務内容 *',
    volumeLabel: '想定採用規模（任意）',
    timelineLabel: '検討時期・スケジュール（任意）',
    messageLabel: '現場の課題やご要望の詳細をお聞かせください *',
    consentText: '入力いただいた情報は、協業に関するご連絡および情報提供の目的にのみ使用し、厳重に管理することに同意します。',
    submitButton: '協業について相談する',
    submitting: '送信中...',
    successHeading: 'お問い合わせを受け付けました',
    successBody: 'お問い合わせいただきありがとうございます。日印人材連携デスクの担当者より、24営業時間以内にご連絡を差し上げます。',
    submitAnother: '別のお問い合わせを送信する'
  },
  faqs: {
    eyebrow: 'よくあるご質問',
    heading: 'FAQ（実務に関する確認事項）',
    items: [
      {
        q: 'Rapidhireは日本国内に既存の提携先を有していますか？',
        a: '現在、日本の製造業企業様、業界団体様、および現地の受入支援パートナー様との間で個別の対話と実証パイロットの設計を推進しています。本ウェブサイトを通じて、志を同じくする実証パートナー企業様を広く募っています。'
      },
      {
        q: 'どのようなインド人材が対象となりますか？',
        a: '機械工学、電気・電子、生産技術、IT・組込みソフトウェアなどの学位保有者（B.Tech等）をはじめ、高等専門学校（Polytechnic）卒のテクニシャン、あるいは国家技能検定（ITI/NCVT）を取得した実務経験豊富な熟練工（CNC旋盤、溶接、保全など）が対象です。'
      },
      {
        q: '日本語教育や渡航前の研修はどのように行われますか？',
        a: 'Rapidhire単独で語学教育を完結させるのではなく、インド国内の信頼できる日本語学校や研修機関と提携し、企業の求めるJLPT水準（N4、N3等）や現場用語に応じた事前学習カリキュラムを共同で手配します。'
      },
      {
        q: '在留資格（ビザ）や法務面の確認はどのように行われますか？',
        a: '「技術・人文知識・国際業務」または「特定技能」など、想定職種と候補者の学歴・職歴に応じた適切な在留資格について、日本の入管法に精通した行政書士等と連携しながら慎重に確認を進めます。不確実なビザ保証を行うことはありません。'
      },
      {
        q: '日本の企業側にはどのようなコミットメントが求められますか？',
        a: '初期段階で求められるのは、現場で求める技術要件や日本語レベルの率直な共有、および候補者面談での評価フィードバックです。要件が合意に至る前の段階で、採用の内定や金銭的な負担を義務付けることはありません。'
      },
      {
        q: 'パイロット（試行）には多額の費用や大規模な採用が必要ですか？',
        a: 'いいえ。まずは1〜3名程度の限定的な枠組みで試行し、書類選考の精度や候補者の人物面、面接の手応えを確かめる「スモールスタート」を推奨しています。'
      },
      {
        q: '就労開始後の候補者サポートはどのように行われますか？',
        a: 'Rapidhireは配属後も候補者と連絡を取り合える24時間相談チャネルを維持します。現場でのコミュニケーション上のすれ違いや生活面の不安を初期段階で把握し、受入先企業様と協力しながら円滑な定着を支えます。'
      }
    ]
  },
  footer: {
    tagline: 'インドの人材と、日本のものづくりをつなぐ。',
    description: 'Rapidhireは、製造業・エンジニアリング分野における日印双方向の人材連携と持続可能な職場定着を支援する人材ソリューション企業です。',
    copyright: '© Rapidhire. All rights reserved. Registered Enterprise in the Republic of India.',
    privacy: 'プライバシーポリシー',
    contacts: '日印連携デスク: japan.desk@rapidhire.work ｜ 本社: インド・テランガナ州ハイデラバード'
  }
};
