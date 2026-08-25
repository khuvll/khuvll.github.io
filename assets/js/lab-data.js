/* ============================================================
 * KHU VLL — Lab data file
 * Edit this file to update the homepage News and Lab at a Glance.
 * No HTML editing required — index.html reads this and re-renders automatically.
 *
 * Badge classes (color tags):
 *   badge-neurips | badge-iccv | badge-cvpr | badge-bmvc | badge-tpami
 *   badge-eccv    | badge-iclr | badge-aaai | badge-grant | badge-press | badge-member | badge-misc
 *
 * Stat icon: any Font Awesome 4 icon name (e.g. "fa-trophy", "fa-star", "fa-bullhorn").
 * Stat colorClass: s1 (red) | s2 (amber) | s3 (teal) | s4 (blue)
 * ============================================================ */

window.labData = {

    /* ============ Lab at a Glance — stats cards ============ */
    stats: [
        {
            colorClass: "s1",
            icon: "fa-trophy",
            value: 7, suffix: "+",
            label: "Oral / Highlight / Spotlight",
            sublabel: "Top-venue selective presentations"
        },
        {
            colorClass: "s2",
            icon: "fa-file-text-o",
            value: 20, suffix: "+",
            label: "Top-tier Publications",
            sublabel: "CVPR · ICCV · NeurIPS · TPAMI &amp; more"
        },
        {
            colorClass: "s3",
            icon: "fa-users",
            value: 25, suffix: "+",
            label: "Lab Members",
            sublabel: "PI, graduate students &amp; interns"
        },
        {
            colorClass: "s4",
            icon: "fa-flask",
            value: 4, suffix: "",
            label: "Active Grants",
            sublabel: "NRF · IITP funded research"
        }
    ],

    /* ============ News — most recent first ============ */
    // The first `recentCount` items (regardless of year) are visible by default.
    // Older items are hidden behind the "Show More News" button.
    recentCount: 8,

    news: [
        /* ====== 2026 ====== */
        {
            year: 2026,
            items: [
                {
                    badge: { text: "Grant", class: "badge-grant" },
                    date: "Aug 2026",
                    title: "",
                    content: 'A grant proposal, "Understanding and Correcting Decision Failure in Multimodal AI via Cognitive Disagreement and Self-Diagnosis (핵심연구(전략형) - Science of AI)" has been accepted by NRF, Korea.<br>Jinwoo Choi is the PI of the grant.<br>Duration: September 2026 ~ August 2029'
                },
                {
                    badge: { text: "ICLR", class: "badge-iclr" },
                    date: "Aug 2026",
                    title: "",
                    content: "Jinwoo serves as an Area Chair for ICLR 2027."
                },
                {
                    badge: { text: "ECCV", class: "badge-eccv" },
                    date: "Jun 2026",
                    title: "",
                    content: 'Two papers are accepted to <strong style="color: red;">ECCV 2026</strong>.<br>"Why Can\'t I Open My Drawer? Mitigating Object-Driven Shortcuts in Zero-Shot Compositional Action Recognition"<br>Congratulations to Geo on your first sol-first author paper.<br>"ReQuest: Rethinking-based Question-Aware Frame Selection for Long-Form Video QA"<br>Congratulations to external collaborators!'
                },
                {
                    badge: { text: "TPAMI", class: "badge-tpami" },
                    date: "2026",
                    title: "",
                    content: 'Our paper <em>"CA<sup>2</sup>ST: Cross-Attention in Audio, Space, and Time for Holistic Video Recognition"</em> is published in <strong style="color:red">IEEE TPAMI 2026</strong> (Impact Factor 18.6, JCR top 1.1%).<br>Congratulations to Jongseo, Joohyun, and Dongho on the journal publication!'
                }
                /* Add more 2026 news here as they happen, e.g.:
                {
                    badge: { text: "CVPR", class: "badge-cvpr" },
                    date: "Feb 2026",
                    title: "",
                    content: "..."
                }
                */
            ]
        },

        /* ====== 2025 ====== */
        {
            year: 2025,
            items: [
                {
                    badge: { text: "Summary", class: "badge-misc" },
                    date: "2025",
                    title: "2025 Publication Summary",
                    content: 'In 2025, we have got 1 <strong style="color: red;">NeurIPS spotlight</strong>, 1 <strong style="color: red;">ICCV highlight</strong>, 1 <strong style="color: red;">CVPR highlight</strong>, 1 <strong style="color: red;">CVPR Workshop spotlight</strong>, and 1 <strong style="color: red;">BMVC oral</strong>, and 1 <strong style="color: red;">TPAMI</strong> papers, all first-authored by KHU VLL students.<br>In other words, <strong style="color: red;">all five papers first-authored by KHU VLL students are oral/highlight/spotlight or TPAMI papers.</strong><br>We also have 1 AAAI and 1 CVPR poster papers first-authored by students from other labs.<br>For more details, refer to the <a href="https://vll.khu.ac.kr/pub.html">Publication page</a>.'
                },
                {
                    badge: { text: "NeurIPS Spotlight", class: "badge-neurips" },
                    date: "Sep 2025",
                    title: "",
                    content: 'Our work on video explainable AI is accepted as a <strong style="color: red;">Spotlight paper</strong> of NeurIPS 2025.<br>"Disentangled Concepts Speak Louder Than Words: Explainable Video Action Recognition"<br>Jongseo, big congratulations! Now you know how to conduct high-impact research!'
                },
                {
                    badge: { text: "Grant", class: "badge-grant" },
                    date: "Aug 2025",
                    title: "",
                    content: 'A grant proposal, "Explainable and Robust Multi-modal Long-form Video Understanding with Life-long Learning (RS-2025-22362968)" has been accepted by NRF, Korea.<br>Jinwoo Choi is the PI of the grant.'
                },
                {
                    badge: { text: "Press", class: "badge-press" },
                    date: "Aug 2025",
                    title: "",
                    content: 'Press Coverage: Our recent work, MASH-VLM (CVPR 2025 Highlight) has been featured in NewsTheAI (August 4, 2025).<br><a href="https://www.newstheai.com/news/articleView.html?idxno=8561">NewsTheAI Article</a>'
                },
                {
                    badge: { text: "BMVC Oral", class: "badge-bmvc" },
                    date: "Jul 2025",
                    title: "",
                    content: 'Our work on Egocentric Visual Query Localization (VQ2D of Ego4D) is accepted as an <strong style="color: red;">Oral paper</strong> of BMVC 2025.<br>"HERO-VQL: Hierarchical, Egocentric and Robust Visual Query Localization"<br>Congratulations to Hyogun, Soyeon, and Joohyun on their first oral paper!'
                },
                {
                    badge: { text: "ICCV Highlight", class: "badge-iccv" },
                    date: "Jul 2025",
                    title: "",
                    content: 'Our work on Video Continual Learning is selected as a <strong style="color: red;">Highlight presentation</strong> of ICCV 2025.<br>"ESSENTIAL: Episodic and Semantic Memory Integration for Video Class-Incremental Learning"<br>Congratulations to Jongseo and Kyungho on this well-deserved recognition!'
                },
                {
                    badge: { text: "Grant", class: "badge-grant" },
                    date: "May 2025",
                    title: "",
                    content: 'A grant proposal, "Multi-Purpose Visual Information Coding for Human and Machine Vision <br>(인간과 기계 시각을 동시에 지원하는 다목적 시각정보 압축 연구), RS-2025-02216217" has been selected as a Global Basic Research Lab funded by NRF, Korea (한국연구재단 글로벌기초연구실).<br>Jinwoo Choi is one of the Co-PIs of the grant.<br>Duration: June 2025 ~ May 2028'
                },
                {
                    badge: { text: "CVPR Highlight", class: "badge-cvpr" },
                    date: "Apr 2025",
                    title: "",
                    content: 'Our work on VideoLLMs\' action-scene hallucination mitigation is selected as a <strong style="color: red;">Highlight presentation</strong> of CVPR 2025.<br>Kyungho Bae, Jinhyung Kim, Sihaeng Lee, Soonyoung Lee, Gunhee Lee*, Jinwoo Choi*, "MASH-VLM: Mitigating Action-Scene Hallucination in Video-LLMs through Disentangled Spatial-Temporal Representations"<br>Kyungho, big congratulations! Now you know how to conduct high-impact research!'
                },
                {
                    badge: { text: "Member", class: "badge-member" },
                    date: "Mar 2025",
                    title: "",
                    content: "Geo Ahn, a 2nd year master student, starts her research internship at NAVER Cloud to conduct interesting research on video understanding. Congratulations!"
                },
                {
                    badge: { text: "CVPR", class: "badge-cvpr" },
                    date: "Feb 2025",
                    title: "",
                    content: 'Two papers are accepted to CVPR 2025.<br>Kyungho Bae, Jinhyung Kim, Sihaeng Lee, Soonyoung Lee, Gunhee Lee*, Jinwoo Choi*, "MASH-VLM: Mitigating Action-Scene Hallucination in Video-LLMs through Disentangled Spatial-Temporal Representations"<br>Congratulations to Kyungho! Kyungho did this wonderful work during his internship at LG AI Research.<br>Seun-An Choe, Keon-Hee Park, Jinwoo Choi*, Gyeong-Moon Park*, "Universal Domain Adaptation for Semantic Segmentation"<br>This is a collaboration with Seun-An Choi, Keon-Hee Park, and Gyeong-Moon Park from KHU AGI Lab. Congratulations, and thank you for the collaboration!'
                }
            ]
        },

        /* ====== 2024 ====== */
        {
            year: 2024,
            items: [
                {
                    badge: { text: "ECCV Oral", class: "badge-eccv" },
                    date: "Aug 2024",
                    title: "",
                    content: 'Our work on disentangled video representation learning is selected as an <strong style="color: red;">Oral presentation</strong> of ECCV 2024.<br>"DEVIAS: Learning Disentangled Video Representations of Action and Scene"<br>Kyungho, Geo, and Youngrae, big congratulations on the FIRST top conference oral paper!'
                },
                {
                    badge: { text: "ECCV", class: "badge-eccv" },
                    date: "Jul 2024",
                    title: "",
                    content: 'One paper on disentangled video representation learning has been accepted to ECCV 2024.<br>"DEVIAS: Learning Disentangled Video Representations of Action and Scene"<br>Kyungho, Geo, and Youngrae, big congratulations on your first top conference paper!'
                },
                {
                    badge: { text: "Grant", class: "badge-grant" },
                    date: "Apr 2024",
                    title: "",
                    content: 'A grant proposal, "AI-based OTT user and content data analysis and content-based video recommendation systems<br>(인공지능 기반 OTT 사용자 및 콘텐츠 데이터 분석과 비디오 추천시스템 개발), RS-2024-00353131" has been accepted by IITP (정보통신기획평가원).<br>Jinwoo Choi is one of the Co-PIs of the grant.<br>Funding amount: 400,000,000 KRW (4억원) for KHU VLL out of 2,000,000,000 KRW (20억원) in total<br>Duration: May 2024 ~ December 2027'
                },
                {
                    badge: { text: "Service", class: "badge-misc" },
                    date: "Mar 2024",
                    title: "",
                    content: "Prof. Jinwoo Choi serves as an Industry Chair of KCCV 2024."
                },
                {
                    badge: { text: "CVPR", class: "badge-cvpr" },
                    date: "Feb 2024",
                    title: "",
                    content: 'Two papers have been accepted to CVPR 2024.<br>"Do You Remember? Dense Video Captioning with Cross-Modal Memory Retrieval"<br>"Open Set Domain Adaptation for Semantic Segmentation"<br>Congratulations!'
                },
                {
                    badge: { text: "Member", class: "badge-member" },
                    date: "Jan 2024",
                    title: "",
                    content: "Yuri Kim (KHU BME/EE Dual Major) joined our lab as an undergraduate intern!"
                }
            ]
        }
    ]
};
