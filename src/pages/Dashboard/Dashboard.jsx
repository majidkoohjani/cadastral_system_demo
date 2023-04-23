import {Link, Outlet} from "react-router-dom";
import LanguageSwitch from "../../components/LanguageSwitch/LanguageSwitch";
import SearchBox from "../../components/SearchBox/SearchBox";
import asideItems from "../../core/constants/asideItems";
import Storage from "../../core/helpers/Storage";
import logo from "../../assets/images/logo.png";
import footerImage from "../../assets/images/08.png";
import "./Dashboard.scss";

export default function Dashboard() {
    const language = Storage.getLanguage();

    return (
        <div className="container dashboard-page">
            <header className="row my-3">
                <div className="col-2">
                    <img src={logo} alt="Logo" className="logo" />
                </div>
                <nav className="col-10">
                    <div className="row items-list">
                        <div className="col-3">
                            <ul className="m-0">
                                <li>کد ملی کاربر: </li>
                                <li>نوع کد ملی: </li>
                            </ul>
                        </div>
                        <div className="col-3">
                            آخرین زمان ورود: 
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
            <main className="row mt-4">
                <aside className="col-2">
                    <ul className="my-0 p-0 aside-list">
                        {
                            asideItems.map(item => {
                                return <li key={item.id} className="aside-list__item">
                                    <Link to={item.location} className="aside-list__item__link">
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
