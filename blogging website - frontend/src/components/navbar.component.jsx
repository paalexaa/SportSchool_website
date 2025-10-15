import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../imgs/logo-removebg.png";

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isTrainersOpen, setIsTrainersOpen] = useState(false); 

    const [isMainOpen, setIsMainOpen] = useState(false);
    const [isInformationOpen, setIsInformationOpen] = useState(false);
    const [isBudgetOpen, setIsBudgetOpen] = useState(false); 

    const [isStopBullyingOpen, setIsStopBullyingOpen] = useState(false);

    const [openSubmenu, setOpenSubmenu] = useState(null);

    const toggleSubmenu = (menu) => {
        setOpenSubmenu(openSubmenu === menu ? null : menu);
    };

    const navRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (navRef.current && !navRef.current.contains(event.target)) {
            setIsMenuOpen(false);
            setIsTrainersOpen(false);
            setIsMainOpen(false);
            setIsInformationOpen(false);
            setIsBudgetOpen(false);
            setIsStopBullyingOpen(false);
            setOpenSubmenu(null);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav ref={navRef} className="navbar">
            <Link to="/home" className="flex items-center gap-3">
                <div className="flex items-center justify-between gap-3">
                    <img src={logo} className="w-[50px] sm:w-[60px] md:w-[65px] lg:w-[70px] h-auto object-contain" alt="logo" />
                    <p className="hidden md:flex text-sm leading-tight">
                    Дитячо-юнацька спортивна школа <br />
                    Вараської міської ради <br />
                    Рівненської області
                    </p>
                </div>
            </Link>

            {/* Кнопка для планшетів і вище */}
            <div className="flex items-center gap-3 ml-auto xl:hidden">
                {/* Кнопка для планшетів */}
                <div className="hidden md:flex">
                    <Link to="/enrollment" className="bg-teal text-white px-4 py-2 rounded-full hover:bg-teal_light transition">
                    Записатись
                    </Link>
                </div>

                {/* Бургер*/}
                <button className="md:flex xl:hidden p-2 ml-auto w-[40px] h-[40px] flex items-center justify-center" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                    <i className={`fi ${isMenuOpen ? "fi-rr-cross" : "fi-rr-menu-burger"} text-[24px]`}></i>
                </button>
            </div>


            {/* Десктоп меню */}
            <div className="hidden xl:flex flex items-center gap-8 ml-auto">
                <ul className="flex items-center gap-10 font-montserrat font-semibold text-[18px] text-black">
                    <li><Link to="/aboutUs">Про нас</Link></li>
                    <li className="relative"><button onClick={() => {setIsTrainersOpen(!isTrainersOpen); setIsMainOpen(false); setIsStopBullyingOpen(false);}} className="flex items-center focus:outline-none">Тренери <i className="fi fi-rr-caret-down text-[18px] leading-none"></i></button>
                    {isTrainersOpen && (
                        <ul className="absolute left-0 top-full mt-2 bg-white shadow-md rounded-md w-60 py-2 z-50">
                            <li><Link to="/trainers/volleyball" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => setIsTrainersOpen(false)}>Віділення волейболу</Link></li>
                            <li><Link to="/trainers/football" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => setIsTrainersOpen(false)}>Віділення футболу</Link></li>
                            <li><Link to="/trainers/basketball" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => setIsTrainersOpen(false)}>Віділення баскетболу</Link></li>
                            <li><Link to="/trainers/judo" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => setIsTrainersOpen(false)}>Віділення дзюдо</Link></li>
                        </ul>)}
                    </li>
                    <li><Link to="/schedule">Розклад занять</Link></li>
                    <li className="relative"><button onClick={() => {setIsMainOpen(!isMainOpen); setIsTrainersOpen(false); setIsInformationOpen(false); setIsBudgetOpen(false); toggleSubmenu(false); setIsStopBullyingOpen(false);}} className="flex items-center focus:outline-none">Прозорість <i className="fi fi-rr-caret-down text-[18px] leading-none"></i></button>
                        {isMainOpen && (
                        <ul className="absolute left-0 top-full mt-2 bg-white shadow-md rounded-md w-72 py-2 z-50">
                            <li><button onClick={() => {setIsInformationOpen(!isInformationOpen); setIsBudgetOpen(false);}} className="block px-4 py-2 hover:bg-gray-100 transition">Інформаційна прозорість<i className="fi fi-rr-caret-down text-[18px] leading-none"></i></button>
                                {isInformationOpen && (
                                    <ul className="absolute left-full top-0 mt-2 bg-white shadow-md rounded-md w-64 py-2 z-50">
                                        <li><button onClick={() => toggleSubmenu("documents")} className="block px-4 py-2 hover:bg-gray-100 transition">Основні документи<i className={`fi fi-rr-caret-down text-[18px] leading-none transition-transform ${openSubmenu === "documents" ? "rotate-180" : ""}`}></i></button>
                                            {openSubmenu === "documents" && (
                                                <ul className="mt-2 bg-grey shadow-md rounded-md w-64 py-2 z-50">
                                                    <li><Link to="/trainers/volleyball" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => setOpenSubmenu(false)}>Статут ДЮСШ</Link></li>
                                                    <li><Link to="/trainers/football" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => setOpenSubmenu(false)}>Правила поведінки вихованців ДЮСШ</Link></li>
                                                    <li><Link to="/trainers/basketball" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => setOpenSubmenu(false)}>Рішення про атестацію ДЮСШ</Link></li>
                                                </ul>)}
                                        </li>
                                        <li><button onClick={() => toggleSubmenu("programs")} className="block px-4 py-2 hover:bg-gray-100 transition">Програми навчання<i className={`fi fi-rr-caret-down text-[18px] leading-none transition-transform ${openSubmenu === "programs" ? "rotate-180" : ""}`}></i></button>
                                            {openSubmenu === "programs" && (
                                                <ul className="mt-2 bg-grey shadow-md rounded-md w-64 py-2 z-50">
                                                    <li><Link to="/trainers/volleyball" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => setOpenSubmenu(false)}>Освітня програма ДЮСШ на 2024–2025 н.р.</Link></li>
                                                    <li><Link to="/trainers/football" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => setOpenSubmenu(false)}>Навчальні програми</Link></li>
                                                    <li><Link to="/trainers/basketball" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => setOpenSubmenu(false)}>Мова навчання та оплата</Link></li>
                                                </ul>)}
                                        </li>
                                        <li><button onClick={() => toggleSubmenu("reports")} className="block px-4 py-2 hover:bg-gray-100 transition">Звіти<i className={`fi fi-rr-caret-down text-[18px] leading-none transition-transform ${openSubmenu === "reports" ? "rotate-180" : ""}`}></i></button>
                                            {openSubmenu === "reports" && (
                                                <ul className="mt-2 bg-grey shadow-md rounded-md w-64 py-2 z-50">
                                                    <li><Link to="/trainers/volleyball" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => setOpenSubmenu(false)}>Звіт директора спортивної школи за 2023–2024 навчальний рік</Link></li>
                                                    <li><Link to="/trainers/football" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => setOpenSubmenu(false)}>Звіт 5-ФК за 2024 рік</Link></li>
                                                </ul>)}
                                        </li>
                                        <li><button onClick={() => toggleSubmenu("branches")} className="block px-4 py-2 hover:bg-gray-100 transition">Відділення і учасники<i className={`fi fi-rr-caret-down text-[18px] leading-none transition-transform ${openSubmenu === "branches" ? "rotate-180" : ""}`}></i></button>
                                            {openSubmenu === "branches" && (
                                                <ul className="mt-2 bg-grey shadow-md rounded-md w-64 py-2 z-50">
                                                    <li><Link to="/trainers/volleyball" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => setOpenSubmenu(false)}>Відділення та кількість вихованців, які займаються у ДЮСШ</Link></li>
                                                    <li><Link to="/trainers/football" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => setOpenSubmenu(false)}>Умови вступу до ДЮСШ</Link></li>
                                                </ul>)}
                                        </li>
                                        <li><button onClick={() => toggleSubmenu("personnel")} className="block px-4 py-2 hover:bg-gray-100 transition">Кадри<i className={`fi fi-rr-caret-down text-[18px] leading-none transition-transform ${openSubmenu === "personnel" ? "rotate-180" : ""}`}></i></button>
                                            {openSubmenu === "personnel" && (
                                                <ul className="mt-2 bg-grey shadow-md rounded-md w-64 py-2 z-50">
                                                    <li><Link to="/trainers/volleyball" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => setOpenSubmenu(false)}>Інформація про наявність вакантних посад</Link></li>
                                                </ul>)}
                                        </li>
                                    </ul>)}
                            </li>
                            <li><button onClick={() => {setIsBudgetOpen(!isBudgetOpen); setIsInformationOpen(false); toggleSubmenu(false);}} className="block px-4 py-2 hover:bg-gray-100 transition">Прозорий бюджет<i className="fi fi-rr-caret-down text-[18px] leading-none"></i></button>
                                {isBudgetOpen && (
                                    <ul className="absolute left-full top-0 mt-2 bg-white shadow-md rounded-md w-60 py-2 z-50">
                                        <li><Link to="/trainers/volleyball" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => setIsBudgetOpen(false)}>Розрахунок видатків на 2025 рік</Link></li>
                                        <li><Link to="/trainers/football" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => setIsBudgetOpen(false)}>Аналіз використання коштів</Link></li>
                                        <li><Link to="/trainers/basketball" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => setIsBudgetOpen(false)}>План закупівель на 2025 рік</Link></li>
                                    </ul>)}
                            </li>
                        </ul>)}
                    </li>

                    <li className="relative"><button onClick={() => {setIsStopBullyingOpen(!isStopBullyingOpen); setIsTrainersOpen(false); setIsMainOpen(false); toggleSubmenu(false);}} className="flex items-center focus:outline-none">Стоп булінг<i className="fi fi-rr-caret-down text-[18px] leading-none"></i></button>
                        {isStopBullyingOpen && (
                            <ul className="absolute left-0 top-full mt-2 bg-white shadow-md rounded-md w-80 py-2 z-50">
                                        <li><button onClick={() => toggleSubmenu("documentsBullying")} className="block px-4 py-2 hover:bg-gray-100 transition">Нормативна база / документи<i className={`fi fi-rr-caret-down text-[18px] leading-none transition-transform ${openSubmenu === "documentsBullying" ? "rotate-180" : ""}`}></i></button>
                                            {openSubmenu === "documentsBullying" && (
                                                <ul className="mt-2 bg-grey shadow-md rounded-md w-80 py-2 z-50">
                                                    <li><Link to="/trainers/volleyball" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => setOpenSubmenu(false)}>Нормативні документи щодо булінгу</Link></li>
                                                    <li><Link to="/trainers/volleyball" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => setOpenSubmenu(false)}>План заходів щодо протидії булінгу</Link></li>
                                                    <li><Link to="/trainers/football" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => setOpenSubmenu(false)}>Порядок подання та розгляду заяв про випадки булінгу</Link></li>
                                                    <li><Link to="/trainers/basketball" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => setOpenSubmenu(false)}>Порядок реагування на доведені випадки булінгу</Link></li>
                                                </ul>)}
                                        </li>
                                        <li><button onClick={() => toggleSubmenu("info")} className="block px-4 py-2 hover:bg-gray-100 transition">Інформація для батьків і учнів<i className={`fi fi-rr-caret-down text-[18px] leading-none transition-transform ${openSubmenu === "info" ? "rotate-180" : ""}`}></i></button>
                                            {openSubmenu === "info" && (
                                                <ul className="mt-2 bg-grey shadow-md rounded-md w-80 py-2 z-50">
                                                    <li><Link to="/trainers/volleyball" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => setOpenSubmenu(false)}>Як знущання проявляються на поведінці дитини</Link></li>
                                                    <li><Link to="/trainers/football" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => setOpenSubmenu(false)}>Як реагувати на цькування</Link></li>
                                                    <li><Link to="/trainers/basketball" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => setOpenSubmenu(false)}>Булінг чи ні?</Link></li>
                                                </ul>)}
                                        </li>
                                        <li><button onClick={() => toggleSubmenu("additional")} className="block px-4 py-2 hover:bg-gray-100 transition">Додаткові ресурси<i className={`fi fi-rr-caret-down text-[18px] leading-none transition-transform ${openSubmenu === "additional" ? "rotate-180" : ""}`}></i></button>
                                            {openSubmenu === "additional" && (
                                                <ul className="mt-2 bg-grey shadow-md rounded-md w-80 py-2 z-50">
                                                    <li><Link to="/trainers/volleyball" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => setOpenSubmenu(false)}>Чат-бот “Кіберпес” для боротьби з кібербулінгом</Link></li>
                                                </ul>)}
                                        </li>
                        </ul>)}
                    </li>

                    <li><Link to="/contacts">Контакти</Link></li>
                </ul>
                <Link to="/enrollment" className="button">Запис до школи</Link>
            </div>

            {/* Mobile dropdown */}
            {isMenuOpen && (
            <div className="2xl:hidden fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col">
                <div className="navbar justify-between flex items-center gap-3">
                    <Link to="/home" className="flex items-center gap-3">
                        <div className="flex items-center justify-between gap-3">
                            <img src={logo} className="w-[50px] sm:w-[60px] md:w-[65px] lg:w-[70px] h-auto object-contain" alt="logo" />
                            <p className="hidden md:flex text-sm leading-tight">
                            Дитячо-юнацька спортивна школа <br />
                            Вараської міської ради <br />
                            Рівненської області
                            </p>
                        </div>
                    </Link>
                    <button className="lg:flex xl:hidden p-2 ml-auto w-[40px] h-[40px] flex items-center justify-center" onClick={() => setIsMenuOpen(false)}>
                        <i className="fi fi-br-cross text-[20px]"></i>
                    </button>
                </div>
                <ul className="flex flex-col gap-4 font-montserrat font-semibold text-[16px] text-black px-5 py-4">
                    <li><Link to="/aboutUs">Про нас</Link></li>
                    {/* <li className="flex items-center gap-1">
                        Тренери{" "}
                        <i className="fi fi-rr-caret-down text-[14px] leading-none"></i>
                    </li> */}
                    <li className="flex items-center gap-1"><button onClick={() => {setIsTrainersOpen(!isTrainersOpen); setIsMainOpen(false); setIsStopBullyingOpen(false);}} className="flex items-center focus:outline-none">Тренери <i className="fi fi-rr-caret-down text-[18px] leading-none"></i></button>
                    {isTrainersOpen && (
                        <ul className="absolute left-0 top-full mt-2 bg-white shadow-md rounded-md w-40 py-2 z-50">
                            <li><Link to="/trainers/volleyball" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => setIsTrainersOpen(false)}>Віділення волейболу</Link></li>
                            <li><Link to="/trainers/football" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => setIsTrainersOpen(false)}>Віділення футболу</Link></li>
                            <li><Link to="/trainers/basketball" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => setIsTrainersOpen(false)}>Віділення баскетболу</Link></li>
                            <li><Link to="/trainers/judo" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => setIsTrainersOpen(false)}>Віділення дзюдо</Link></li>
                        </ul>)}
                    </li>
                    <li><Link to="/schedule">Розклад занять</Link></li>
                    <li className="flex items-center gap-1">
                        Прозорість{" "}
                        <i className="fi fi-rr-caret-down text-[14px] leading-none"></i>
                    </li>
                    <li className="flex items-center gap-1">
                        Стоп булінг{" "}
                        <i className="fi fi-rr-caret-down text-[14px] leading-none"></i>
                    </li>
                    <li><Link to="/contacts">Контакти</Link></li>
                </ul>
                <div className="px-5 pb-4">
                    <button className="w-full bg-teal text-white font-montserrat font-semibold text-[16px] py-3 rounded-full hover:bg-teal_light transition">
                        Запис до школи
                    </button>
                </div>
            </div>
            )}
        </nav>
    )
}

export default NavBar;