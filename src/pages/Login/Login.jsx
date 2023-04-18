import Button from "../../components/Button/Button";
import Alert from "../../components/Alert/Alert";
import logo from "../../assets/images/logo.png";
import image10 from "../../assets/images/10.png";
import image11 from "../../assets/images/11.png";
import image12 from "../../assets/images/12.png";
import image13 from "../../assets/images/13.png";
import "./Login.scss";

export default function Login() {
    
    return (
        <div className="container-fluid login-page">
            <main className="row">
                <div className="col">
                    <img src={logo} alt="لوگو - Logo" className="logo" />
                    <Button type="danger" customClass="max-width-310px">ورود</Button>
                    <Button type="danger-outline" customClass="max-width-310px">ثبت نام</Button>
                    <p className="text-green">
                        لطفا قبل از ورود به سامانه <span className="text-red">فایل راهنما (pdf)</span> را مطالعه نمائید.
                    </p>
                </div>
                <div className="col">
                    <Alert text="یکپارچه کردن اطلاعات بر پایه شناسه جهانی ملک" mode="success" />
                    <Alert text="مدلی نوآورانه در حوزه یکپارچه سازی و هوشمندسازی اطلاعات در دولت" mode="success" />
                    <div className="margin-y10px">
                        <p className="text-white">
                            <img src={image10} width="54" height="54" />
                            ارائه ساختار اقتصادی _ اداری جدید برای کشورها به منظور فقرزدائی
                        </p>
                        <p className="text-white">
                            <img src={image11} width="54" height="54" />
                            مشخص شدن علت هر تراکنش بانکی قبل از انجام تراکنش توسط ساختار سامانه
                        </p>
                        <p className="text-white">
                            <img src={image12} width="54" height="54" />
                            انجام همه تراکنش های اقتصادی و اداری همه اشخاص فقط با یک دامنه
                        </p>
                        <p className="text-white">
                            <img src={image13} width="54" height="54" />
                            جابجایی هر دارایی از مکانی به مکان دیگر و یا از شخصی به شخص دیگر با اجازه یک مرکز داده
                        </p>
                    </div>
                </div>
            </main>
            <footer className="row">footer</footer>
        </div>
    );
}
