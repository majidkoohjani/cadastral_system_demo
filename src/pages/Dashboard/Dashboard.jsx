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

export default function Dashboard() {
    const language = Storage.getLanguage();
    document.title = `${translate("dashboard-title")} | ${translate("site-main-title")}`;

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
                                    {`${translate("user-nc")}: ${Storage.getLoginInfo().displayName}`}
                                </li>
                                <li>
                                    {`${translate("nc-type")}: `}
                                </li>
                            </ul>
                        </div>
                        <div className="col-3">
                            {`${translate("last-login")}: `}
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
            <footer className="fixed-footer">
                <img src={footerImage} alt="Footer image" />
            </footer>
        </div>
    );
}
