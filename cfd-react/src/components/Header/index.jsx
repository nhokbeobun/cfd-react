import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useAuth } from "../../hook/useAuth";
import store from "../../store";
import { logoutAction, openLoginAction } from "../../store/action/authAction";
import { LOGOUT, OPEN_LOGIN } from "../../store/type";
export function Header() {
    // const { logout, togglePopupLogin } = useAuth()
    const showMenu = () => {
        document.querySelector('body').classList.toggle('menu-is-show');
    }
    const {user, openLogin} = useAuth()

    const dispatch = useDispatch();
    

    return (
        <header id="header">
            <div className="wrap">
                <div className="menu-hambeger" onClick={showMenu}>
                    <div className="button">
                        <span />
                        <span />
                        <span />
                    </div>
                    <span className="text">menu</span>
                </div>
                <a href="#" className="logo">
                    <img src="img/logo.svg" alt="" />
                    <h1>CFD</h1>
                </a>
                <div className="right">
                    {
                        user ? (
                            <div className="have-login">
                                <div className="account">
                                    <a href="#" className="info">
                                        <div className="name">{user?.fullName}</div>
                                        <div className="avatar">
                                            <img src={user?.avatar} alt="" />
                                        </div>
                                    </a>
                                </div>
                                <div className="hamberger">
                                </div>
                                <div className="sub">
                                    <Link to="/profile/course">Khóa học của tôi</Link>
                                    <Link to="/profile">Thông tin tài khoản</Link>
                                    <Link to="#" onClick={(ev) => { ev.preventDefault(); dispatch(logoutAction()) }}>Đăng xuất</Link>
                                </div>
                            </div>
                        ) : (
                            <div class="not-login bg-none">
                                <Link to="#" class="btn-register" onClick={(ev) => { ev.preventDefault(); dispatch(openLoginAction())}}>Đăng nhập</Link>
                                <Link to="/register" class="btn main btn-open-login">Đăng ký</Link>
                            </div>
                        )
                    }
                </div>
            </div>
        </header>
    )
}