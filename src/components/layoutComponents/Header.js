import HeaderRoundedButton from "./HeaderRoundedButton";
import IconChevronLeft from "../icons/IconChevronLeft";
import IconChevronRight from "../icons/IconChevronRight";
import { useNavigate, Link } from "react-router-dom";
import IconCircleCheckFilled from "../icons/IconCircleCheckFilled";
import IconCircleAlertFilled from "../icons/IconCircleAlertFilled";
import { cloneElement, useContext, useEffect } from "react";
import IconCircleXFilled from "../icons/IconCircleXFilled";
import { ToastContext } from "../Context";

function Header({ onNavBarToggle, navBarState }) {
    const { toast, setToast } = useContext(ToastContext);
    // const toastshit

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    const goForward = () => {
        navigate(+1);
    };

    useEffect(() => {

    }, [toast]);

    return (
        <section className="fixed top-0 left-0 w-full h-16 z-40 flex flex-row text-center border-b border-[#19272E] z-header">
            <div className="w-60 flex select-none">
                <div className="w-16 bg-[#19272E] flex items-center justify-center">
                    <HeaderRoundedButton
                        className="size-10 flex items-center justify-center"
                        onClick={() => onNavBarToggle()}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-menu-2"
                            height="25"
                            width="25"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M4 6l16 0" />
                            <path d="M4 12l16 0" />
                            <path d="M4 18l16 0" />
                        </svg>
                    </HeaderRoundedButton>
                </div>
                <Link
                    className={
                        (navBarState ? `bg-[#19272E]` : `bg-[#121C21]`) +
                        ` flex-1 pl-3 flex justify-left items-center font-koulen space-x-2 text-2xl`
                    }
                    to="/"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="#007BFE"
                        className="bi bi-soundwave"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fillRule="evenodd"
                            d="M8.5 2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-1 0v-11a.5.5 0 0 1 .5-.5m-2 2a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5m4 0a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5m-6 1.5A.5.5 0 0 1 5 6v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m8 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m-10 1A.5.5 0 0 1 3 7v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5m12 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5"
                        />
                    </svg>
                    <div className="text-[#24A4DA]">Waveform</div>
                </Link>
            </div>
            <div className="flex-1 flex justify-end sm:justify-between px-3 bg-[#121C21] items-center">
                <div className="h-full hidden sm:flex items-center space-x-2">
                    <HeaderRoundedButton
                        className="size-10 bg-slate-800"
                        onClick={goBack}
                    >
                        <IconChevronLeft />
                    </HeaderRoundedButton>
                    <HeaderRoundedButton
                        className="size-10 bg-slate-800"
                        onClick={goForward}
                    >
                        <IconChevronRight />
                    </HeaderRoundedButton>
                </div>

                <div className="flex items-center sm:space-x-3">
                    <div className="hidden sm:flex flex-col justify-center text-right h-full">
                        <span>Rick</span>
                        <span className="text-xs text-slate-500">@theRealRickAstley</span>
                    </div>
                    <img
                        className="size-10 object-cover rounded-full"
                        src="profile.jpg"
                        alt="joseph"
                    />
                </div>
            </div>
            {/* <FeedbackToastContainer text="Done." type="warning" /> */}
            <FeedbackToastContainer text={toast.text} type={toast.type} className="flex" />
        </section>
    );

    function FeedbackToastContainer({ className, positive, neutral, negative, icon, text, type }) {
        // set color; default type: neutral
        let color = (() => {
            if (type === "positive") return "text-green-500";
            if (type === "neutral" || !type) return "text-[#d9d9d9]";
            if (type === "negative" || type === "warning") return "text-red-500";
        })();

        // set icon; defaults according to set color
        icon = (() => {
            if (icon) return icon;
            if (type === "positive") return <IconCircleCheckFilled size="30" />
            if (type === "neutral" || type === "warning" || !type) return <IconCircleAlertFilled size="30" />
            if (type === "negative") return <IconCircleXFilled size="30" />
        })();

        icon = icon ? cloneElement(icon, { className: color }) : null;

        return (
            <div className={`mt-7 bg-[#19272E] border border-[#213641] rounded-lg py-3 px-4 fixed left-1/2 -translate-x-1/2 space-x-2 flex-row items-center ${className}`}>
                {icon}
                <span className="text-lg">{text}</span>
            </div>
        )
    }
}

export default Header;
