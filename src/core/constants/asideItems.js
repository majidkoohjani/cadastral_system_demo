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
        enText: "user manual",
        icon: require("../../assets/images/instruction.png"),
        file: require("../../assets/instructions.pdf"),
        download: true
    },
    {
        id: 3,
        faText: "پیام های کاربران",
        enText: "user`s messages",
        icon: require("../../assets/images/message.png"),
        location: "/inbox"
    },
    {
        id: 4,
        faText: "ارتباط با پشتیبانی",
        enText: "support",
        icon: require("../../assets/images/user.png"),
        location: "/support"
    },
    {
        id: 5,
        faText: "سوالات متداول",
        enText: "FAQ",
        icon: require("../../assets/images/faq.png"),
        file: require("../../assets/faq.pdf"),
        download: true
    },
    {
        id: 6,
        faText: "قابلیت های بیشتر",
        enText: "more features",
        icon: require("../../assets/images/features.png"),
        file: require("../../assets/more-features.pdf"),
        download: true
    },
    {
        id: 7,
        faText: "خروج از سامانه",
        enText: "log out",
        icon: require("../../assets/images/logout.png"),
        location: "/logout"
    },
];
