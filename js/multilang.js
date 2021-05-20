var arrLang = {

    "en-us": {
        "HOME": "Home",
        "ABOUT": "About",
        "CONTACT": "Contact",
        "title": "Test Multilang",
        "text": "The State Council, constitutionally synonymous with the Central People's Government since 1954 , is the chief administrative authority of the People's Republic of China. It is chaired by the premier and includes the heads of each of the cabinet-level executive departments. Currently, the council has 35 members: the premier, one executive vice premier, three other vice premiers, five state councillors (of whom three are also ministers and one is also the secretary-general), and 26 in charge of the Council's constituent departments. In the politics of the People's Republic of China, the Central People's Government forms one of three interlocking branches of power, the others being the Chinese Communist Party (CCP) and the People's Liberation Army (PLA). The State Council directly oversees the various subordinate People's Governments in the provinces, and in practice maintains membership with the top levels of the Chinese Communist Party.",
    },
    "zh-cn": {
        "HOME": "首页",
        "ABOUT": "关于我们",
        "CONTACT": "联系我们",
        "title": "测试多语言",
        "text": "中华人民共和国国务院，简称国务院，即中华人民共和国中央人民政府，是中华人民共和国的最高行政机关，也是中华人民共和国最高权力机关（即全国人民代表大会）的执行机关。国务院按照《中华人民共和国宪法》及《中华人民共和国国务院组织法》制定《国务院工作规则》来指导日常工作及活动。国务院实行总理负责制，国务院总理全面负责日常事务，主持召开国务院常务会议、全体会议，签发国务院令并拥有最后决策权，对外作为国家的行政首脑代表中央政府。",
    },
    "zh-tw": {
        "HOME": "首頁",
        "ABOUT": "關於我們",
        "CONTACT": "聯絡我們",
        "title": "測試多語言",
        "text": "中華人民共和國國務院，簡稱國務院，即中華人民共和國中央人民政府，是中華人民共和國的最高行政機關，也是中華人民共和國最高權力機關（即全國人民代表大會）的執行機關。國務院按照《中華人民共和國憲法》及《中華人民共和國國務院組織法》制定《國務院工作規則》來指導日常工作及活動。國務院實行總理負責制，國務院總理全面負責日常事務，主持召開國務院常務會議、全體會議，簽發國務院令並擁有最後決策權，對外作為國家的行政首腦代表中央政府。",
    },
    "ja": {
        "HOME": "ホームページ",
        "ABOUT": "私たちに関しては",
        "CONTACT": "お問い合わせ",
        "title": "多言語テスト",
        "text": "中華人民共和国国務院（ちゅうかじんみんきょうわこくこくむいん、簡：国务院）は、中華人民共和国の政府。他国における内閣に相当する。国務院とも略称する。中華人民共和国の建国初期には政務院と称していた。中華人民共和国憲法の規定によると、国務院は中華人民共和国の中央人民政府で、最高国家権力機関（全国人民代表大会および全国人民代表大会常務委員会）の執行機関であり、最高国家行政機関である。国務院は全国人民代表大会に対して行政上の責任を負い、業務を報告する義務がある（大会閉会中は全国人民代表大会常務委員会に対して責任を負い、業務報告の義務がある）。国務院の構成は「中華人民共和国国務院組織法」によって定められている。",
    }
};

// The default language is
var lang = "zh-cn";
// Check for localStorage support
if ('localStorage' in window) {

    var usrLang = localStorage.getItem('uiLang');
    if (usrLang) {
        lang = usrLang
    }

}


console.log(lang);

$(document).ready(function () {

    $(".lang").each(function (index, element) {
        $(this).text(arrLang[lang][$(this).attr("key")]);
    });
});

// get/set the selected language
$(".translate").click(function () {
    var lang = $(this).attr("id");

    // update localStorage key
    if ('localStorage' in window) {
        localStorage.setItem('uiLang', lang);
        console.log(localStorage.getItem('uiLang'));
    }

    $(".lang").each(function (index, element) {
        $(this).text(arrLang[lang][$(this).attr("key")]);
    });
});