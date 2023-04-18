import Button from "../../components/Button/Button";
import Alert from "../../components/Alert/Alert";
import logo from "../../assets/images/logo.png";
import image10 from "../../assets/images/10.png";
import image11 from "../../assets/images/11.png";
import image12 from "../../assets/images/12.png";
import image13 from "../../assets/images/13.png";
import aparat from "../../assets/images/aparat.svg";
import linkedin from "../../assets/images/linkedin.svg";
import instagram from "../../assets/images/instagram.svg";
import email from "../../assets/images/envelope.svg";
import globe from "../../assets/images/globe.svg"
import "./Login.scss";
import { Link } from "react-router-dom";

export default function Login() {
    
    return (
        <div className="container-fluid login-page">
            <main className="row">
                <div className="content-column col-12 col-md-6">
                    <img src={logo} alt="لوگو - Logo" className="logo" />
                    <Button type="danger" customClass="max-width-310px">ورود</Button>
                    <Button type="danger-outline" customClass="max-width-310px">ثبت نام</Button>
                    <p className="text-green">
                        لطفا قبل از ورود به سامانه <span className="text-red">فایل راهنما (pdf)</span> را مطالعه نمائید.
                    </p>
                </div>
                <div className="content-column col-12 col-md-6">
                    <Alert text="یکپارچه کردن اطلاعات بر پایه شناسه جهانی ملک" mode="success" />
                    <Alert text="مدلی نوآورانه در حوزه یکپارچه سازی و هوشمندسازی اطلاعات در دولت" mode="success" />
                    <div className="margin-top-50px">
                        <p className="text-white">
                            <img src={image10} className="icon" />
                            ارائه ساختار اقتصادی _ اداری جدید برای کشورها به منظور فقرزدائی
                        </p>
                        <p className="text-white">
                            <img src={image11} className="icon" />
                            مشخص شدن علت هر تراکنش بانکی قبل از انجام تراکنش توسط ساختار سامانه
                        </p>
                        <p className="text-white">
                            <img src={image12} className="icon" />
                            انجام همه تراکنش های اقتصادی و اداری همه اشخاص فقط با یک دامنه
                        </p>
                        <p className="text-white">
                            <img src={image13} className="icon" />
                            جابجایی هر دارایی از مکانی به مکان دیگر و یا از شخصی به شخص دیگر با اجازه یک مرکز داده
                        </p>
                    </div>
                </div>
            </main>
            <footer className="row">
                <div className="col-12 col-sm-6">
                    <ul className="footer__list">
                        <li className="footer__list-item">
                            <img src={globe} height="16" width="16" />
                            <select name="language" className="language--change">
                                <option value="fa" selected>FA</option>
                                <option value="en">EN</option>
                            </select>
                        </li>
                        <li className="footer__list-item">
                            <Link to="/about">درباره ما</Link>
                        </li>
                        <li className="footer__list-item">
                            <Link to="/contact">ارتباط با ما</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-12 col-sm-6">
                    <ul className="social-media__list">
                        <li className="social-media__list-item">
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <div className="icon-container">
                                    <img src={aparat} alt="Aparat" />
                                </div>
                            </a>
                        </li>
                        <li className="social-media__list-item">
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <div className="icon-container">
                                    <img src={instagram} alt="Instagram" />
                                </div>
                            </a>
                        </li>
                        <li className="social-media__list-item">
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <div className="icon-container">
                                    <img src={email} alt="Email" />
                                </div>
                            </a>
                        </li>
                        <li className="social-media__list-item">
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <div className="icon-container">
                                    <img src={linkedin} alt="LinkedIn" />
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    );
}
