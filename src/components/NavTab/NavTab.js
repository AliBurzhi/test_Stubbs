import s from "./NavTab.module.css";
import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
export default function NavTab() {
    const elRef = useRef();
    useEffect(() => {
        const el = elRef.current;
        if (el) {
            const onWheel = (e) => {
                if (e.deltaY === 0) return;
                e.preventDefault();
                el.scrollTo({
                    left: el.scrollLeft + e.deltaY,
                    behavior: "smooth",
                });
            };
            el.addEventListener("wheel", onWheel);
            return () => el.removeEventListener("wheel", onWheel);
        }
    }, []);

    return (
        <header className={s.Main}>
            <ul className={s.NavList}>
                <li className={s.NavListItem} onClick={elRef}>
                    <button
                        className={s.NavListItemLink}
                        disabled="true"
                        id="container"
                    >
                        Job Focus
                    </button>
                </li>
                <li className={s.NavListItem}>
                    <button className={s.NavListItemLink}>Soft Skills</button>
                </li>
                <li className={s.NavListItem}>
                    <button className={s.NavListItemLink}>
                        Technical Skills
                    </button>
                </li>
                <li className={s.NavListItem}>
                    <button className={s.NavListItemLink}>
                        Functional Expertise
                    </button>
                </li>
                <li className={s.NavListItem}>
                    <button className={s.NavListItemLink}>
                        Patent Expertice
                    </button>
                </li>
                <li className={s.NavListItem}>
                    <button className={s.NavListItemLink}>
                        Personal Expertise
                    </button>
                </li>
                <li className={s.NavListItem}>
                    <button className={s.NavListItemLink}>
                        Hard Expertise
                    </button>
                </li>
                <li className={s.NavListItem}>
                    <button className={s.NavListItemLink}>
                        Domain Expertise
                    </button>
                </li>
                <li className={s.NavListItem}>
                    <button className={s.NavListItemLink}>
                        Domain Expertise
                    </button>
                </li>
            </ul>
        </header>
    );
}
