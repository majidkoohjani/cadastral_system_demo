import logo from "../../assets/images/logo.png";
import Title from "../../components/Title/Title";
import { services } from "../../core/constants/dummyData";
import LanguageSwitch from "../../components/LanguageSwitch/LanguageSwitch";
import "./Dashboard.scss";

export default function Dashboard() {
    return (
        <div className="container dashboard-page">
            <header className="row" style={{borderBottom: "2px solid #000000"}}>
                <div className="col-2">
                    <img src={logo} alt="Logo" className="logo" />
                </div>
                <nav className="col-10">
                    <div className="row">
                        <ul className="col-3">
                            <li>کد ملی کاربر: </li>
                            <li>نوع کد ملی: </li>
                        </ul>
                        <div className="col-3">
                            آخرین زمان ورود: 
                        </div>
                        <div className="col-3">
                            جستجو
                        </div>
                        <div className="col-3">
                            <LanguageSwitch />
                        </div>
                    </div>
                </nav>
            </header>
            <main className="row">
                <aside className="col-2">Aside</aside>
                <article className="col-10">
                    {
                        services.map(service => <Title key={service.id} title={`${service.title}${service.id} - `} text={service.description} />)
                    }
                </article>
            </main>
            <footer>Footer</footer>
        </div>
    );
}
