var arrLang = {

    "en-us": {
        "HOME": "Home",
        "ABOUT": "About",
        "CONTACT": "Contact",
        "title": "Test Multilang",
    },
    "zh-cn": {
        "HOME": "首页",
        "ABOUT": "关于我们",
        "CONTACT": "联系我们",
        "title": "测试多语言",
    },
    "zh-tw": {
        "HOME": "首頁",
        "ABOUT": "關於我們",
        "CONTACT": "聯絡我們",
        "title": "測試多語言",
    },
    "ja": {
        "HOME": "ホームページ",
        "ABOUT": "私たちに関しては",
        "CONTACT": "お問い合わせ",
        "title": "多言語テスト",
    }
};

// The default language is
var lang = "en-us";
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