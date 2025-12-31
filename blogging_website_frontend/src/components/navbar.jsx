import { useState, useRef, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
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

    
    const closeAllMenus = () => {
        setIsMenuOpen(false);
        setIsTrainersOpen(false);
        setIsMainOpen(false);
        setIsInformationOpen(false);
        setIsBudgetOpen(false);
        setIsStopBullyingOpen(false);
        setOpenSubmenu(null);
    };

    useEffect(() => {
        function handleClickOutside(e) {
        if (navRef.current && !navRef.current.contains(e.target)) {
            closeAllMenus();
        }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <>
            <nav ref={navRef} className="navbar mb-[20px]">
                <Link to="/" className="flex items-center gap-3">
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
                        <Link to="/запис-до-школи" className="bg-teal text-white px-4 py-2 rounded-full hover:bg-teal_light transition">
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
                        <li><Link to="/про-нас">Про нас</Link></li>
                        <li className="relative"><button onClick={() => {setIsTrainersOpen(!isTrainersOpen); setIsMainOpen(false); setIsStopBullyingOpen(false);}} className="flex items-center focus:outline-none">Тренери <i className="fi fi-rr-caret-down text-[18px] leading-none"></i></button>
                        {isTrainersOpen && (
                            <ul className="absolute left-0 top-full mt-2 bg-white shadow-md rounded-md w-60 py-2 z-50">
                                <li><Link to="/тренери-волейбол" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => setIsTrainersOpen(false)}>Віділення волейболу</Link></li>
                                <li><Link to="/тренери-футбол" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => setIsTrainersOpen(false)}>Віділення футболу</Link></li>
                                <li><Link to="/тренери-баскетбол" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => setIsTrainersOpen(false)}>Віділення баскетболу</Link></li>
                                <li><Link to="/тренери-дзюдо" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => setIsTrainersOpen(false)}>Віділення дзюдо</Link></li>
                            </ul>)}
                        </li>

                        <li><Link to="/розклад-занять">Розклад занять</Link></li>

                        <li className="relative"><button onClick={() => {setIsMainOpen(!isMainOpen); setIsTrainersOpen(false); setIsInformationOpen(false); setIsBudgetOpen(false); toggleSubmenu(false); setIsStopBullyingOpen(false);}} className="flex items-center focus:outline-none">Прозорість <i className="fi fi-rr-caret-down text-[18px] leading-none"></i></button>
                            {isMainOpen && (
                            <ul className="absolute left-0 top-full mt-2 bg-white shadow-md rounded-md w-72 py-2 z-50">
                                <li><button onClick={() => {setIsInformationOpen(!isInformationOpen); setIsBudgetOpen(false);}} className="block px-4 py-2 hover:bg-gray-100 transition">Інформаційна прозорість<i className="fi fi-rr-caret-down text-[18px] leading-none"></i></button>
                                    {isInformationOpen && (
                                        <ul className="absolute left-full top-0 mt-2 bg-white shadow-md rounded-md w-64 py-2 z-50">
                                            <li><button onClick={() => toggleSubmenu("documents")} className="block px-4 py-2 hover:bg-gray-100 transition">Основні документи<i className={`fi fi-rr-caret-down text-[18px] leading-none transition-transform ${openSubmenu === "documents" ? "rotate-180" : ""}`}></i></button>
                                                {openSubmenu === "documents" && (
                                                    <ul className="mt-2 bg-grey shadow-md rounded-md w-64 py-2 z-50">
                                                        <li><Link to="/інформаційнаПрозорість-статус" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => setOpenSubmenu(false)}>Статут ДЮСШ</Link></li>
                                                        <li><Link to="/інформаційнаПрозорість-правила" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => setOpenSubmenu(false)}>Правила поведінки вихованців ДЮСШ</Link></li>
                                                        <li><Link to="/інформаційнаПрозорість-людиЗОсобливимиПотребами" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => setOpenSubmenu(false)}>Умови доступності закладу для осіб з особливими потребами</Link></li>
                                                        {/* <li><Link to="/trainers/basketball" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => setOpenSubmenu(false)}>Рішення про атестацію ДЮСШ</Link></li> */}
                                                    </ul>)}
                                            </li>
                                            <li><button onClick={() => toggleSubmenu("programs")} className="block px-4 py-2 hover:bg-gray-100 transition">Програми навчання<i className={`fi fi-rr-caret-down text-[18px] leading-none transition-transform ${openSubmenu === "programs" ? "rotate-180" : ""}`}></i></button>
                                                {openSubmenu === "programs" && (
                                                    <ul className="mt-2 bg-grey shadow-md rounded-md w-64 py-2 z-50">
                                                        <li><Link to="/інформаційнаПрозорість-освітняПрограма_на_24-25" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => setOpenSubmenu(false)}>Освітня програма ДЮСШ на 2024–2025 н.р.</Link></li>
                                                        <li><Link to="/інформаційнаПрозорість-навчальніПрограми" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => setOpenSubmenu(false)}>Навчальні програми</Link></li>
                                                        <li><Link to="/інформаційнаПрозорість-мова_та_оплата" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => setOpenSubmenu(false)}>Мова навчання та оплата</Link></li>
                                                    </ul>)}
                                            </li>
                                            <li><button onClick={() => toggleSubmenu("reports")} className="block px-4 py-2 hover:bg-gray-100 transition">Звіти<i className={`fi fi-rr-caret-down text-[18px] leading-none transition-transform ${openSubmenu === "reports" ? "rotate-180" : ""}`}></i></button>
                                                {openSubmenu === "reports" && (
                                                    <ul className="mt-2 bg-grey shadow-md rounded-md w-64 py-2 z-50">
                                                        <li><Link to="/інформаційнаПрозорість-звітДиректора" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => setOpenSubmenu(false)}>Звіт директора спортивної школи за 2023–2024 навчальний рік</Link></li>
                                                        <li><Link to="/інформаційнаПрозорість-звіт5ФК" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => setOpenSubmenu(false)}>Звіт 5-ФК за 2024 рік</Link></li>
                                                    </ul>)}
                                            </li>
                                            <li><button onClick={() => toggleSubmenu("branches")} className="block px-4 py-2 hover:bg-gray-100 transition">Відділення і учасники<i className={`fi fi-rr-caret-down text-[18px] leading-none transition-transform ${openSubmenu === "branches" ? "rotate-180" : ""}`}></i></button>
                                                {openSubmenu === "branches" && (
                                                    <ul className="mt-2 bg-grey shadow-md rounded-md w-64 py-2 z-50">
                                                        <li><Link to="/інформаційнаПрозорість-кількістьВихованців" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => setOpenSubmenu(false)}>Відділення та кількість вихованців, які займаються у ДЮСШ</Link></li>
                                                        <li><Link to="/інформаційнаПрозорість-умовиВступу" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => setOpenSubmenu(false)}>Умови вступу до ДЮСШ</Link></li>
                                                    </ul>)}
                                            </li>
                                            <li><button onClick={() => toggleSubmenu("personnel")} className="block px-4 py-2 hover:bg-gray-100 transition">Кадри<i className={`fi fi-rr-caret-down text-[18px] leading-none transition-transform ${openSubmenu === "personnel" ? "rotate-180" : ""}`}></i></button>
                                                {openSubmenu === "personnel" && (
                                                    <ul className="mt-2 bg-grey shadow-md rounded-md w-64 py-2 z-50">
                                                        <li><Link to="/інформаційнаПрозорість-вакансії" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => setOpenSubmenu(false)}>Інформація про наявність вакантних посад</Link></li>
                                                        <li><Link to="/інформаційнаПрозорість-cтруктура-та-органи-управління" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => setOpenSubmenu(false)}>Структура та органи управління</Link></li>
                                                    </ul>)}
                                            </li>
                                        </ul>)}
                                </li>
                                <li><button onClick={() => {setIsBudgetOpen(!isBudgetOpen); setIsInformationOpen(false); toggleSubmenu(false);}} className="block px-4 py-2 hover:bg-gray-100 transition">Прозорий бюджет<i className="fi fi-rr-caret-down text-[18px] leading-none"></i></button>
                                    {isBudgetOpen && (
                                        <ul className="absolute left-full top-0 mt-2 bg-white shadow-md rounded-md w-60 py-2 z-50">
                                            <li><Link to="/прозорийБюджет-розрахунок-видатків-на-2025" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => setIsBudgetOpen(false)}>Розрахунок видатків на 2025 рік</Link></li>
                                            <li><Link to="/прозорийБюджет-аналіз-використання-коштів" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => setIsBudgetOpen(false)}>Аналіз використання коштів</Link></li>
                                            {/* <li><Link to="/trainers/basketball" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => setIsBudgetOpen(false)}>План закупівель на 2025 рік</Link></li> */}
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
                                                        <li><Link to="/стопБулінг-нормативні-документи" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => setOpenSubmenu(false)}>Нормативні документи щодо булінгу</Link></li>
                                                        <li><Link to="/стопБулінг-план-заходів" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => setOpenSubmenu(false)}>План заходів щодо протидії булінгу</Link></li>
                                                        <li><Link to="/стопБулінг-порядок-подання-заяв-про-випадки-булінгу" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => setOpenSubmenu(false)}>Порядок подання та розгляду заяв про випадки булінгу</Link></li>
                                                        <li><Link to="/стопБулінг-порядок-реагування-на-доведені-випадки-булінгу" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => setOpenSubmenu(false)}>Порядок реагування на доведені випадки булінгу</Link></li>
                                                    </ul>)}
                                            </li>
                                            <li><button onClick={() => toggleSubmenu("info")} className="block px-4 py-2 hover:bg-gray-100 transition">Інформація для батьків і учнів<i className={`fi fi-rr-caret-down text-[18px] leading-none transition-transform ${openSubmenu === "info" ? "rotate-180" : ""}`}></i></button>
                                                {openSubmenu === "info" && (
                                                    <ul className="mt-2 bg-grey shadow-md rounded-md w-80 py-2 z-50">
                                                        <li><Link to="/стопБулінг-як-знущання-проявляються-на-поведінці-дитини" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => setOpenSubmenu(false)}>Як знущання проявляються на поведінці дитини</Link></li>
                                                        <li><Link to="/стопБулінг-як-реагувати-на-цькування" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => setOpenSubmenu(false)}>Як реагувати на цькування</Link></li>
                                                        <li><Link to="/стопБулінг-булінг-чи-ні" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => setOpenSubmenu(false)}>Булінг чи ні?</Link></li>
                                                    </ul>)}
                                            </li>
                                            <li><button onClick={() => toggleSubmenu("additional")} className="block px-4 py-2 hover:bg-gray-100 transition">Додаткові ресурси<i className={`fi fi-rr-caret-down text-[18px] leading-none transition-transform ${openSubmenu === "additional" ? "rotate-180" : ""}`}></i></button>
                                                {openSubmenu === "additional" && (
                                                    <ul className="mt-2 bg-grey shadow-md rounded-md w-80 py-2 z-50">
                                                        <li><Link to="/стопБулінг-чат-бот-Кіберпес" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => setOpenSubmenu(false)}>Чат-бот “Кіберпес” для боротьби з кібербулінгом</Link></li>
                                                    </ul>)}
                                            </li>
                            </ul>)}
                        </li>

                        <li><Link to="/контакти">Контакти</Link></li>
                    </ul>
                    <Link to="/запис-до-школи" className="button">Запис до школи</Link>
                </div>

                {/* Mobile dropdown */}
                {isMenuOpen && (
                <div className="2xl:hidden fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col">
                    <div className="navbar justify-between flex items-center gap-3">
                        <Link to="/" className="flex items-center gap-3">
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
                        <li><Link to="/про-нас" onClick={closeAllMenus}>Про нас</Link></li>
                        <li className="relative"><button onClick={() => {setIsTrainersOpen(!isTrainersOpen); setIsMainOpen(false); setIsStopBullyingOpen(false);}} className="flex items-center focus:outline-none">Тренери <i className="fi fi-rr-caret-down text-[18px] leading-none"></i></button>
                        {isTrainersOpen && (
                            <ul className="mt-2 bg-white shadow-md rounded-md w-full py-2 z-50">
                                <li><Link to="/тренери-волейбол" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => {setIsTrainersOpen(false); closeAllMenus();}}>Віділення волейболу</Link></li>
                                <li><Link to="/тренери-футбол" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => {setIsTrainersOpen(false); closeAllMenus();}}>Віділення футболу</Link></li>
                                <li><Link to="/тренери-баскетбол" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => {setIsTrainersOpen(false); closeAllMenus();}}>Віділення баскетболу</Link></li>
                                <li><Link to="/тренери-дзюдо" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => {setIsTrainersOpen(false); closeAllMenus();}}>Віділення дзюдо</Link></li>
                            </ul>)}
                        </li>
                        <li><Link to="/розклад-занять" onClick={closeAllMenus}>Розклад занять</Link></li>
                        <li className="relative"><button onClick={() => {setIsMainOpen(!isMainOpen); setIsTrainersOpen(false); setIsInformationOpen(false); setIsBudgetOpen(false); toggleSubmenu(false); setIsStopBullyingOpen(false);}} className="flex items-center focus:outline-none">Прозорість <i className="fi fi-rr-caret-down text-[18px] leading-none"></i></button>
                            {isMainOpen && (
                            <ul className="mt-2 bg-white shadow-md rounded-md w-full py-2 z-50">
                                <li><button onClick={() => {setIsInformationOpen(!isInformationOpen); setIsBudgetOpen(false);}} className="block px-4 py-2 hover:bg-gray-100 transition">Інформаційна прозорість<i className="fi fi-rr-caret-down text-[18px] leading-none"></i></button>
                                    {isInformationOpen && (
                                        <ul className="mt-2 bg-white shadow-md rounded-md w-full py-2 z-50">
                                            <li><button onClick={() => toggleSubmenu("documents")} className="block px-4 py-2 hover:bg-gray-100 transition">Основні документи<i className={`fi fi-rr-caret-down text-[18px] leading-none transition-transform ${openSubmenu === "documents" ? "rotate-180" : ""}`}></i></button>
                                                {openSubmenu === "documents" && (
                                                    <ul className="mt-2 bg-grey shadow-md rounded-md w-full py-2 z-50">
                                                        <li><Link to="/інформаційнаПрозорість-статус" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => {setOpenSubmenu(false); closeAllMenus();}}>Статут ДЮСШ</Link></li>
                                                        <li><Link to="/інформаційнаПрозорість-правила" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => {setOpenSubmenu(false); closeAllMenus();}}>Правила поведінки вихованців ДЮСШ</Link></li>
                                                        <li><Link to="/інформаційнаПрозорість-людиЗОсобливимиПотребами" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => {setOpenSubmenu(false); closeAllMenus();}}>Умови доступності закладу для осіб з особливими потребами</Link></li>
                                                        {/* <li><Link to="/trainers/basketball" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => setOpenSubmenu(false)}>Рішення про атестацію ДЮСШ</Link></li> */}</ul>)}
                                            </li>
                                            <li><button onClick={() => toggleSubmenu("programs")} className="block px-4 py-2 hover:bg-gray-100 transition">Програми навчання<i className={`fi fi-rr-caret-down text-[18px] leading-none transition-transform ${openSubmenu === "programs" ? "rotate-180" : ""}`}></i></button>
                                                {openSubmenu === "programs" && (
                                                    <ul className="mt-2 bg-grey shadow-md rounded-md w-full py-2 z-50">
                                                        <li><Link to="/інформаційнаПрозорість-освітняПрограма_на_24-25" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => {setOpenSubmenu(false); closeAllMenus();}}>Освітня програма ДЮСШ на 2024–2025 н.р.</Link></li>
                                                        <li><Link to="/інформаційнаПрозорість-навчальніПрограми" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => {setOpenSubmenu(false); closeAllMenus();}}>Навчальні програми</Link></li>
                                                        <li><Link to="/інформаційнаПрозорість-мова_та_оплата" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => {setOpenSubmenu(false); closeAllMenus();}}>Мова навчання та оплата</Link></li>
                                                    </ul>)}
                                            </li>
                                            <li><button onClick={() => toggleSubmenu("reports")} className="block px-4 py-2 hover:bg-gray-100 transition">Звіти<i className={`fi fi-rr-caret-down text-[18px] leading-none transition-transform ${openSubmenu === "reports" ? "rotate-180" : ""}`}></i></button>
                                                {openSubmenu === "reports" && (
                                                    <ul className="mt-2 bg-grey shadow-md rounded-md w-full py-2 z-50">
                                                        <li><Link to="/інформаційнаПрозорість-звітДиректора" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => {setOpenSubmenu(false); closeAllMenus();}}>Звіт директора спортивної школи за 2023–2024 навчальний рік</Link></li>
                                                        <li><Link to="/інформаційнаПрозорість-звіт5ФК" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => {setOpenSubmenu(false); closeAllMenus();}}>Звіт 5-ФК за 2024 рік</Link></li>
                                                    </ul>)}
                                            </li>
                                            <li><button onClick={() => toggleSubmenu("branches")} className="block px-4 py-2 hover:bg-gray-100 transition">Відділення і учасники<i className={`fi fi-rr-caret-down text-[18px] leading-none transition-transform ${openSubmenu === "branches" ? "rotate-180" : ""}`}></i></button>
                                                {openSubmenu === "branches" && (
                                                    <ul className="mt-2 bg-grey shadow-md rounded-md w-full py-2 z-50">
                                                        <li><Link to="/інформаційнаПрозорість-кількістьВихованців" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => {setOpenSubmenu(false); closeAllMenus();}}>Відділення та кількість вихованців, які займаються у ДЮСШ</Link></li>
                                                        <li><Link to="/інформаційнаПрозорість-умовиВступу" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => {setOpenSubmenu(false); closeAllMenus();}}>Умови вступу до ДЮСШ</Link></li>
                                                    </ul>)}
                                            </li>
                                            <li><button onClick={() => toggleSubmenu("personnel")} className="block px-4 py-2 hover:bg-gray-100 transition">Кадри<i className={`fi fi-rr-caret-down text-[18px] leading-none transition-transform ${openSubmenu === "personnel" ? "rotate-180" : ""}`}></i></button>
                                                {openSubmenu === "personnel" && (
                                                    <ul className="mt-2 bg-grey shadow-md rounded-md w-full py-2 z-50">
                                                        <li><Link to="/інформаційнаПрозорість-вакансії" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => {setOpenSubmenu(false); closeAllMenus();}}>Інформація про наявність вакантних посад</Link></li>
                                                        <li><Link to="/інформаційнаПрозорість-cтруктура-та-органи-управління" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => {setOpenSubmenu(false); closeAllMenus();}}>Структура та органи управління</Link></li>
                                                    </ul>)}
                                            </li>
                                        </ul>)}
                                </li>
                                <li><button onClick={() => {setIsBudgetOpen(!isBudgetOpen); setIsInformationOpen(false); toggleSubmenu(false);}} className="block px-4 py-2 hover:bg-gray-100 transition">Прозорий бюджет<i className="fi fi-rr-caret-down text-[18px] leading-none"></i></button>
                                    {isBudgetOpen && (
                                        <ul className="mt-2 bg-grey shadow-md rounded-md w-full py-2 z-50">
                                            <li><Link to="/прозорийБюджет-розрахунок-видатків-на-2025" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => {setIsBudgetOpen(false); closeAllMenus();}}>Розрахунок видатків на 2025 рік</Link></li>
                                            <li><Link to="/прозорийБюджет-аналіз-використання-коштів" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => {setIsBudgetOpen(false); closeAllMenus();}}>Аналіз використання коштів</Link></li>
                                            {/* <li><Link to="/trainers/basketball" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => setIsBudgetOpen(false)}>План закупівель на 2025 рік</Link></li> */}
                                        </ul>)}
                                </li>
                            </ul>)}
                        </li>
                        <li className="relative"><button onClick={() => {setIsStopBullyingOpen(!isStopBullyingOpen); setIsTrainersOpen(false); setIsMainOpen(false); toggleSubmenu(false);}} className="flex items-center focus:outline-none">Стоп булінг<i className="fi fi-rr-caret-down text-[18px] leading-none"></i></button>
                            {isStopBullyingOpen && (
                                <ul className="mt-2 bg-white shadow-md rounded-md w-full py-2 z-50">
                                            <li><button onClick={() => toggleSubmenu("documentsBullying")} className="block px-4 py-2 hover:bg-gray-100 transition">Нормативна база / документи<i className={`fi fi-rr-caret-down text-[18px] leading-none transition-transform ${openSubmenu === "documentsBullying" ? "rotate-180" : ""}`}></i></button>
                                                {openSubmenu === "documentsBullying" && (
                                                    <ul className="mt-2 bg-grey shadow-md rounded-md w-full py-2 z-50">
                                                        <li><Link to="/стопБулінг-нормативні-документи" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => {setOpenSubmenu(false); closeAllMenus();}}>Нормативні документи щодо булінгу</Link></li>
                                                        <li><Link to="/стопБулінг-план-заходів" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => {setOpenSubmenu(false); closeAllMenus();}}>План заходів щодо протидії булінгу</Link></li>
                                                        <li><Link to="/стопБулінг-порядок-подання-заяв-про-випадки-булінгу" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => {setOpenSubmenu(false); closeAllMenus();}}>Порядок подання та розгляду заяв про випадки булінгу</Link></li>
                                                        <li><Link to="/стопБулінг-порядок-реагування-на-доведені-випадки-булінгу" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => {setOpenSubmenu(false); closeAllMenus();}}>Порядок реагування на доведені випадки булінгу</Link></li>
                                                    </ul>)}
                                            </li>
                                            <li><button onClick={() => toggleSubmenu("info")} className="block px-4 py-2 hover:bg-gray-100 transition">Інформація для батьків і учнів<i className={`fi fi-rr-caret-down text-[18px] leading-none transition-transform ${openSubmenu === "info" ? "rotate-180" : ""}`}></i></button>
                                                {openSubmenu === "info" && (
                                                    <ul className="mt-2 bg-grey shadow-md rounded-md w-full py-2 z-50">
                                                        <li><Link to="/стопБулінг-як-знущання-проявляються-на-поведінці-дитини" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => {setOpenSubmenu(false); closeAllMenus();}}>Як знущання проявляються на поведінці дитини</Link></li>
                                                        <li><Link to="/стопБулінг-як-реагувати-на-цькування" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => {setOpenSubmenu(false); closeAllMenus();}}>Як реагувати на цькування</Link></li>
                                                        <li><Link to="/стопБулінг-булінг-чи-ні" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => {setOpenSubmenu(false); closeAllMenus();}}>Булінг чи ні?</Link></li>
                                                    </ul>)}
                                            </li>
                                            <li><button onClick={() => toggleSubmenu("additional")} className="block px-4 py-2 hover:bg-gray-100 transition">Додаткові ресурси<i className={`fi fi-rr-caret-down text-[18px] leading-none transition-transform ${openSubmenu === "additional" ? "rotate-180" : ""}`}></i></button>
                                                {openSubmenu === "additional" && (
                                                    <ul className="mt-2 bg-grey shadow-md rounded-md w-full py-2 z-50">
                                                        <li><Link to="/стопБулінг-чат-бот-Кіберпес" className="block px-4 py-2 hover:bg-gray-100 transition" onClick={() => {setOpenSubmenu(false); closeAllMenus();}}>Чат-бот “Кіберпес” для боротьби з кібербулінгом</Link></li>
                                                    </ul>)}
                                            </li>
                            </ul>)}
                        </li>
                        <li><Link to="/контакти" onClick={closeAllMenus}>Контакти</Link></li>
                    </ul>
                    <div className="px-5 pb-4">
                        <Link to="/запис-до-школи" className="button" onClick={closeAllMenus}>Запис до школи</Link>
                    </div>
                </div>
                )}
            </nav>
        </>
    )
}

export default NavBar;