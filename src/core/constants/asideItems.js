import Storage from "../helpers/Storage";

const lang = Storage.getLanguage();

export default [
    {
        id: 1,
        faText: "صفحه اصلی",
        enText: "main page",
        icon: require("../../assets/images/home.png"),
        location: "/services"
    },
    {
        id: 2,
        faText: "دستور العمل کار با سامانه",
        enText: "Instructions",
        icon: require("../../assets/images/instruction.png"),
        file: require(`../../assets/instructions-${lang}.pdf`),
        download: true
    },
    {
        id: 3,
        faText: "پیام های کاربران",
        enText: "messages",
        icon: require("../../assets/images/message.png"),
        location: "/inbox"
    },
    {
        id: 4,
        faText: "ارتباط با پشتیبانی",
        enText: "support",
        icon: require("../../assets/images/user.png"),
        location: "mailto: metacadastresystem@gmail.com"
    },
    {
        id: 5,
        faText: "سوالات متداول",
        enText: "FAQ",
        icon: require("../../assets/images/faq.png"),
        file: require(`../../assets/faq-${lang}.pdf`),
        download: true
    },
    {
        id: 6,
        faText: "قابلیت های بیشتر",
        enText: "more features",
        icon: require("../../assets/images/features.png"),
        file: require(`../../assets/more-features-${lang}.pdf`),
        download: true
    },
    {
        id: 7,
        faText: "پنل مدیریت",
        enText: "admin panel",
        icon: require("../../assets/images/admin.png"),
        location: "/control-panel",
        justAdmin: true,
    },
    {
        id: 8,
        faText: "خروج از سامانه",
        enText: "log out",
        icon: require("../../assets/images/logout.png"),
        location: "/logout"
    },
];
