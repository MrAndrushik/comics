import React from "react";

const Modal = ({ setModal }) => {
    return (
        <div className="modal">
            <div className="modal__overlay">
                <div className="modal__content">
                    <button className="modal__close" onClick={() => setModal()}>
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M13.9508 4.04927C14.1998 4.29823 14.1998 4.70187 13.9508 4.95083L4.95083 13.9508C4.70187 14.1998 4.29823 14.1998 4.04927 13.9508C3.80031 13.7019 3.80031 13.2982 4.04927 13.0493L13.0493 4.04927C13.2982 3.80031 13.7019 3.80031 13.9508 4.04927Z"
                                fill="#A6A9B5"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M4.04927 4.04927C4.29823 3.80031 4.70187 3.80031 4.95083 4.04927L13.9508 13.0493C14.1998 13.2982 14.1998 13.7019 13.9508 13.9508C13.7019 14.1998 13.2982 14.1998 13.0493 13.9508L4.04927 4.95083C3.80031 4.70187 3.80031 4.29823 4.04927 4.04927Z"
                                fill="#A6A9B5"
                            />
                        </svg>
                    </button>
                    <h2 className="modal__title">Do you like the book?</h2>
                    <div className="modal__text">
                        Share it with your friends
                    </div>
                    <div className="modal__wrapper">
                        <div className="modal__row">
                            <div className="modal__icon">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M16.6234 3.00395L14.2249 3C11.5302 3 9.78878 4.8353 9.78878 7.67593V9.83184H7.37715C7.16875 9.83184 7 10.0054 7 10.2195V13.3431C7 13.5572 7.16895 13.7306 7.37715 13.7306H9.78878V21.6126C9.78878 21.8267 9.95753 22 10.1659 22H13.3124C13.5208 22 13.6896 21.8265 13.6896 21.6126V13.7306H16.5093C16.7177 13.7306 16.8865 13.5572 16.8865 13.3431L16.8876 10.2195C16.8876 10.1167 16.8478 10.0182 16.7772 9.9455C16.7066 9.87276 16.6103 9.83184 16.5103 9.83184H13.6896V8.00424C13.6896 7.12583 13.8933 6.6799 15.0073 6.6799L16.623 6.67931C16.8312 6.67931 17 6.50576 17 6.29189V3.39137C17 3.1777 16.8314 3.00435 16.6234 3.00395Z"
                                        fill="#7556F1"
                                    />
                                </svg>
                            </div>
                            <div className="modal__icon">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M3.5 12C3.5 9.20237 3.5 7.80355 3.99702 6.71522C4.54665 5.5117 5.5117 4.54665 6.71522 3.99702C7.80355 3.5 9.20237 3.5 12 3.5C14.7976 3.5 16.1965 3.5 17.2848 3.99702C18.4883 4.54665 19.4533 5.5117 20.003 6.71522C20.5 7.80355 20.5 9.20237 20.5 12C20.5 14.7976 20.5 16.1965 20.003 17.2848C19.4533 18.4883 18.4883 19.4533 17.2848 20.003C16.1965 20.5 14.7976 20.5 12 20.5C9.20237 20.5 7.80355 20.5 6.71522 20.003C5.5117 19.4533 4.54665 18.4883 3.99702 17.2848C3.5 16.1965 3.5 14.7976 3.5 12ZM12 7.5C9.51487 7.5 7.5 9.51487 7.5 12C7.5 14.4851 9.51487 16.5 12 16.5C14.4851 16.5 16.5 14.4851 16.5 12C16.5 9.51487 14.4851 7.5 12 7.5ZM12 14.8125C10.4497 14.8125 9.1875 13.5503 9.1875 12C9.1875 10.4486 10.4497 9.1875 12 9.1875C13.5503 9.1875 14.8125 10.4486 14.8125 12C14.8125 13.5503 13.5503 14.8125 12 14.8125ZM17.4371 7.1625C17.4371 7.49366 17.1687 7.76213 16.8375 7.76213C16.5063 7.76213 16.2379 7.49366 16.2379 7.1625C16.2379 6.83134 16.5063 6.56288 16.8375 6.56288C17.1687 6.56288 17.4371 6.83134 17.4371 7.1625Z"
                                        fill="#7556F1"
                                    />
                                </svg>
                            </div>
                            <div className="modal__icon">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M8.2896 20C15.8368 20 19.9648 13.8438 19.9648 8.50515C19.9648 8.3303 19.9648 8.15623 19.9528 7.98295C20.7559 7.41105 21.4491 6.70293 22 5.89176C21.2511 6.21847 20.4567 6.43273 19.6432 6.52739C20.4998 6.02249 21.1409 5.22838 21.4472 4.29285C20.6417 4.76343 19.7605 5.09507 18.8416 5.27346C18.2229 4.62577 17.4047 4.19689 16.5135 4.05318C15.6223 3.90947 14.7079 4.05894 13.9116 4.47848C13.1154 4.89801 12.4819 5.56421 12.109 6.37398C11.7361 7.18376 11.6446 8.09196 11.8488 8.95805C10.2174 8.87753 8.62144 8.46013 7.16451 7.73294C5.70759 7.00576 4.42227 5.98505 3.392 4.73708C2.86727 5.62645 2.70656 6.67929 2.94258 7.68123C3.17861 8.68317 3.79362 9.55888 4.6624 10.1301C4.00939 10.111 3.37062 9.93757 2.8 9.62439C2.8 9.64093 2.8 9.65826 2.8 9.67559C2.80026 10.6083 3.12821 11.5123 3.72823 12.2341C4.32824 12.9559 5.16338 13.4512 6.092 13.6359C5.4879 13.7981 4.85406 13.8218 4.2392 13.7052C4.50141 14.5079 5.01189 15.2099 5.69926 15.7129C6.38662 16.216 7.21649 16.4949 8.0728 16.5107C6.61979 17.6351 4.82485 18.2454 2.9768 18.2436C2.65032 18.2429 2.32416 18.2235 2 18.1853C3.87651 19.3709 6.05993 19.9998 8.2896 19.9968"
                                        fill="#7556F1"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="modal__row">
                            <div className="modal__icon">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M22.4823 5.90213C22.6454 5.39324 22.4823 5.02313 21.76 5.02313H19.3601C18.7544 5.02313 18.4748 5.34698 18.3117 5.69395C18.3117 5.69395 17.0768 8.6548 15.3526 10.5747C14.7934 11.1299 14.5371 11.3149 14.2342 11.3149C14.0711 11.3149 13.8614 11.1299 13.8614 10.621V5.879C13.8614 5.27758 13.675 5 13.1624 5H9.38788C9.01509 5 8.78209 5.27758 8.78209 5.55516C8.78209 6.13345 9.64418 6.27224 9.73738 7.89146V11.4075C9.73738 12.1708 9.59758 12.3096 9.29468 12.3096C8.4792 12.3096 6.49872 9.32562 5.31044 5.92527C5.07744 5.25445 4.84445 5 4.23865 5H1.81549C1.1165 5 1 5.32384 1 5.67082C1 6.29537 1.81549 9.44128 4.79785 13.605C6.77832 16.4502 9.59758 17.9769 12.1372 17.9769C13.675 17.9769 13.8614 17.6299 13.8614 17.0516V14.9004C13.8614 14.2064 14.0012 14.0907 14.4905 14.0907C14.84 14.0907 15.4691 14.2758 16.8904 15.6406C18.5214 17.2598 18.8009 18 19.7096 18H22.1095C22.8085 18 23.1347 17.653 22.9483 16.9822C22.7386 16.3114 21.9464 15.3399 20.9212 14.1833C20.362 13.5356 19.5232 12.8185 19.2669 12.4715C18.9174 12.0089 19.0106 11.8238 19.2669 11.4075C19.2436 11.4075 22.1794 7.29003 22.4823 5.90213Z"
                                        fill="#7556F1"
                                    />
                                </svg>
                            </div>
                            <div className="modal__icon">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M12.8794 2.85872C13.9828 1.79309 15.4605 1.20345 16.9943 1.21677C18.5282 1.2301 19.9955 1.84534 21.0801 2.92998C22.1647 4.01462 22.78 5.48187 22.7933 7.01572C22.8066 8.54957 22.217 10.0273 21.1513 11.1306L21.141 11.1412L18.1411 14.141C18.1411 14.1411 18.1411 14.141 18.1411 14.141C17.5481 14.7343 16.8343 15.1931 16.0484 15.4863C15.2624 15.7795 14.4226 15.9002 13.5859 15.8403C12.7492 15.7804 11.9351 15.5412 11.199 15.139C10.4628 14.7368 9.82176 14.181 9.3193 13.5092C9.03812 13.1333 9.11491 12.6006 9.49082 12.3195C9.86673 12.0383 10.3994 12.1151 10.6806 12.491C11.037 12.9675 11.4918 13.3618 12.014 13.6471C12.5363 13.9324 13.1138 14.1021 13.7073 14.1446C14.3009 14.1871 14.8967 14.1015 15.4542 13.8935C16.0118 13.6855 16.5181 13.36 16.9388 12.9392L19.9335 9.94453C20.6863 9.16238 21.1028 8.11626 21.0934 7.03049C21.0839 5.94238 20.6474 4.9015 19.878 4.13206C19.1086 3.36262 18.0677 2.92617 16.9796 2.91671C15.8934 2.90727 14.8469 3.32405 14.0647 4.07743L12.3492 5.7829C12.0163 6.11388 11.4781 6.11231 11.1472 5.7794C10.8162 5.44649 10.8178 4.9083 11.1507 4.57732L12.8794 2.85872Z"
                                        fill="#7556F1"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M7.95168 8.51371C8.73764 8.22052 9.57745 8.0998 10.4142 8.15972C11.2509 8.21965 12.0649 8.45882 12.8011 8.86101C13.5372 9.26321 14.1783 9.81902 14.6808 10.4908C14.9619 10.8667 14.8851 11.3993 14.5092 11.6805C14.1333 11.9617 13.6006 11.8849 13.3195 11.509C12.963 11.0325 12.5082 10.6382 11.986 10.3529C11.4638 10.0676 10.8863 9.89789 10.2927 9.85538C9.69916 9.81287 9.10339 9.89851 8.54584 10.1065C7.98828 10.3145 7.48197 10.6399 7.06125 11.0608L7.06114 11.0609L4.0666 14.0555C3.31374 14.8376 2.89726 15.8837 2.9067 16.9695C2.91616 18.0576 3.35261 19.0985 4.12205 19.8679C4.89149 20.6374 5.93237 21.0738 7.02048 21.0833C8.10625 21.0927 9.15237 20.6762 9.93452 19.9234L11.6391 18.2188C11.971 17.8869 12.5092 17.8869 12.8411 18.2188C13.1731 18.5508 13.1731 19.089 12.8411 19.4209L11.1311 21.1309L11.1206 21.1413C10.0173 22.2069 8.53956 22.7966 7.00571 22.7832C5.47186 22.7699 4.00461 22.1547 2.91997 21.07C1.83533 19.9854 1.22009 18.5181 1.20676 16.9843C1.19344 15.4504 1.78308 13.9727 2.84871 12.8694L2.85906 12.8588L5.85895 9.85895C5.85899 9.85892 5.85903 9.85888 5.85906 9.85884C6.4521 9.26562 7.16577 8.80687 7.95168 8.51371Z"
                                        fill="#7556F1"
                                    />
                                </svg>
                            </div>
                            <div className="modal__icon">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14Z"
                                        fill="#7556F1"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14Z"
                                        fill="#7556F1"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14Z"
                                        fill="#7556F1"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
