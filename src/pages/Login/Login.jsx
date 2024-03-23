import Button from "../../components/Button/Button";
import Alert from "../../components/Alert/Alert";
import logoFa from "../../assets/images/logo-fa.png";
import logoEn from "../../assets/images/logo-en.png";
import image10 from "../../assets/images/10.png";
import image11 from "../../assets/images/11.png";
import image12 from "../../assets/images/12.png";
import image13 from "../../assets/images/13.png";
import telegram from "../../assets/images/telegram.png";
import whatsapp from "../../assets/images/whatsapp.jpg";
import aparat from "../../assets/images/aparat.svg";
import linkedin from "../../assets/images/linkedin.svg";
import instagram from "../../assets/images/instagram.svg";
import email from "../../assets/images/envelope.svg";
import { Link, useNavigate } from "react-router-dom";
import LanguageSwitch from "../../components/LanguageSwitch/LanguageSwitch";
import helpFa from "../../assets/help-fa.pdf";
import helpEn from "../../assets/help-en.pdf";
import Storage from "../../core/helpers/Storage";
import { translate } from "../../core/helpers/Translator";
import "./Login.scss";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Login() {
    const language = Storage.getLanguage();
    document.title = translate("site-main-title");
    const [showContactInfo, setShowContactInfo] = useState(false);

    const handleContactBtn = () => {
        setShowContactInfo(!showContactInfo);
    }

    const copyMail = () => {
        Storage.copyToClipboard("metacadastre@gmail.com");
        
        toast.success(translate("text-copied"), {
            position: toast.POSITION.TOP_RIGHT
        });
    }

    return (
        <div className="container-fluid login-page">
            <main className="row row-reverse" style={{direction: language === "fa" ? "rtl" : "ltr"}}>
                <div className="content-column col-12 col-md-6">
                    <img src={language === "fa" ? logoFa : logoEn} alt="لوگو - Logo" className="logo" />
                    <button className="button button-danger max-width-310px" data-bs-toggle="modal" data-bs-target="#authModal">{ translate("login") }</button>
                    {/* <Button type="danger-outline" customClass="max-width-310px">{ translate("register") }</Button> */}
                    <p className="text-green">
                        { `${translate("read-manual-message-1")} ` }
                        <a href={language === "fa" ? helpFa : helpEn} download={"help.pdf"} className="text-red">{ translate("manual") }</a>
                        { ` ${translate("read-manual-message-2")}` }
                    </p>
                </div>
                <div className="content-column col-12 col-md-6">
                    <Alert text={translate("system-desc-1")} mode="success" customClass="font-nazanin" />
                    <Alert text={translate("system-desc-2")} mode="success" customClass={`font-nazanin ${language === "en" && "font-smaller"}`} />
                    <div className="margin-top-50px">
                        <p className="text-white">
                            <img src={image10} className="icon" />
                            { translate("system-goal-1") }
                        </p>
                        <p className="text-white">
                            <img src={image11} className="icon" />
                            { translate("system-goal-2") }
                        </p>
                        <p className="text-white">
                            <img src={image12} className="icon" />
                            { translate("system-goal-3") }
                        </p>
                        <p className="text-white">
                            <img src={image13} className="icon" />
                            { translate("system-goal-4") }
                        </p>
                    </div>
                </div>
            </main>
            <footer className="row">
                <div className={`col-12 col-sm-6 ${language === "en" ? "order-1" : ""}`}>
                    <ul className={`footer__list d-flex`} style={{flexDirection: language === "en" ? "row-reverse" : "row"}}>
                        <li className="footer__list-item">
                            <LanguageSwitch />
                        </li>
                        <li className="footer__list-item">
                            <Link to="/about">{ translate("about-us") }</Link>
                        </li>
                        <li className="footer__list-item">
                            {/* <a href="mailto:Metacadastral.system@gmail.com">{ translate("contact-us") }</a> */}
                            {
                                showContactInfo && 
                                <div className="contact-info">
                                    <div className="contact-item">
                                        <img src={email} width={20} height={20} />
                                        <span onClick={copyMail}>metacadastre@gmail.com</span>
                                    </div>
                                    <div className="contact-item">
                                        <img width={20} height={20} src={whatsapp} />
                                        <a href="tel: +989157195226">+989157195226</a>
                                    </div>
                                    <div className="contact-item">
                                        <img width={20} height={20} src={telegram} />
                                        <a href="tel: +989364706746">+989364706746</a>
                                    </div>
                                </div>
                            }
                            <button className="btn-contact-login" onClick={handleContactBtn}>{ translate("contact-us") }</button>
                        </li>
                    </ul>
                </div>
                <div className="col-12 col-sm-6">
                    <ul className="social-media__list" style={{float: language === "en" ? "right" : "left"}}>
                        {/* <li className="social-media__list-item">
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <div className="icon-container">
                                    <img src={aparat} alt="Aparat" />
                                </div>
                            </a>
                        </li> */}
                        <li className="social-media__list-item">
                            <a href="https://instagram.com/metacadastral_system?igshid=ZDc4ODBmNjlmNQ" target="_blank" rel="noopener noreferrer">
                                <div className="icon-container">
                                    <img src={instagram} alt="Instagram" />
                                </div>
                            </a>
                        </li>
                        {/* <li className="social-media__list-item">
                            <a href="mailto:Metacadastral.system@gmail.com" target="_blank" rel="noopener noreferrer">
                                <div className="icon-container">
                                    <img src={email} alt="Email" />
                                </div>
                            </a>
                        </li> */}
                        <li className="social-media__list-item">
                            <a href="http://www.linkedin.com/in/metacadastral-system-33352b281" target="_blank" rel="noopener noreferrer">
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
