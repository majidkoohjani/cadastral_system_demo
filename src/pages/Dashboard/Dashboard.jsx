import {Link, Outlet} from "react-router-dom";
import LanguageSwitch from "../../components/LanguageSwitch/LanguageSwitch";
import SearchBox from "../../components/SearchBox/SearchBox";
import asideItems from "../../core/constants/asideItems";
import Storage from "../../core/helpers/Storage";
import logoFa from "../../assets/images/logo-fa.png";
import logoEn from "../../assets/images/logo-en.png";
import footerImage from "../../assets/images/08.png";
import { translate } from "../../core/helpers/Translator";
import "./Dashboard.scss";
import Clock from "../../components/Clock/Clock";
import { parseDateTime } from "../../core/helpers/DateTime";

export default function Dashboard() {
    const language = Storage.getLanguage();
    const loginInfo = Storage.getLoginInfo();
    document.title = `${translate("dashboard-title")} | ${translate("site-main-title")}`;

    let userType = loginInfo?.naturalOrLegal ?? "";

    if (userType.includes("حقیقی")) {
        userType = translate("natural");
    } else if (userType.includes("حقوقی")) {
        userType = translate("legal");
    } else if (userType.includes("ادمین")) {
        userType = translate("admin");
    }

    return (
        <div className={`container-fluid dashboard-page ${language === 'fa' ? 'rtl' : 'ltr'}`}>
            <header className="row">
                <div className="col-2">
                    <img src={language === "fa" ? logoFa : logoEn} alt="Logo" className="logo" />
                </div>
                <nav className="col-8 mx-auto">
                    <div className="row items-list">
                        <div className="col-3">
                            <ul className="m-0">
                                <li>
                                    {`${translate("user-nc")}: ${loginInfo.displayName}`}
                                </li>
                                <li>
                                    {`${translate("nc-type")}: ${userType}`}
                                </li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <ul className="m-0">
                                <li>
                                    {`${translate("last-login")}: ${parseDateTime(loginInfo.previousLogin)}`}
                                </li>
                                <li>
                                    {`${translate("current-dt")}: `}<Clock />
                                </li>
                            </ul>
                        </div>
                        <div className="col-3">
                            <SearchBox />
                        </div>
                        <div className="col-2 pl-0" style={{textAlign: "left"}}>
                            <LanguageSwitch />
                        </div>
                    </div>
                </nav>
            </header>
            <main className="row">
                <aside className="col-2">
                    <ul className="my-0 p-0 aside-list">
                        {
                            asideItems.map(item => {
                                if (item?.justAdmin) {
                                    if (loginInfo?.isAdmin !== true) {
                                        return;
                                    }
                                }
                                
                                return <li key={item.id} className="aside-list__item">
                                    <Link to={item?.location ?? item.file} target={item?.download === true ? "_blank" : "_self"} download={item?.download === true ? "true" : false} className="aside-list__item__link">
                                        <img src={item.icon} alt={item.icon} />
                                        { item[`${language}Text`] }
                                    </Link>
                                </li>;
                            })
                        }
                    </ul>
                </aside>
                <article className="col-10">
                    <Outlet />
                </article>
            </main>
            <footer className={`fixed-footer ${language === 'fa' ? 'fa' : 'en'}`}>
                <img src={footerImage} alt="Footer image" />
            </footer>
        </div>
    );
}
