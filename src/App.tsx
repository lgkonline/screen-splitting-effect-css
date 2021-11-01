import "./styles/reboot.css"
import "./styles/globals.css"

import "./styles/separator.css"

import styles from "./styles/App.module.css"
import clsx from "clsx"
import { ArrowUp, Gift, Shuffle } from "react-bootstrap-icons"

export default function App() {
    const setBodyClassName = (className: string) => {
        document.body.className = className
    }

    return (
        <>
            <header className={styles.header}>
                <div className={clsx(styles.headerContainer, "container")}>
                    <h5 className={styles.appName}>
                        <span className={styles.logo}>
                            <Gift />
                        </span>{" "}
                        {"App title"}
                    </h5>

                    <button
                        className={clsx(styles.actionBtn, "btn")}
                        onClick={() => {}}
                    >
                        <Shuffle /> {"Some action"}
                    </button>
                </div>
            </header>

            <hr className="separator" />

            <section className={clsx(styles.section, "container")}>
                <h1>
                    See that separator? <ArrowUp />
                </h1>

                <p>
                    It will look even better, when you see it on a phone or
                    tablet.
                    <br />
                    Ideally when it has an OLED screen.
                </p>
            </section>

            <hr className="separator" />

            <section className={clsx(styles.section, "container")}>
                <p style={{ padding: "1rem 0" }}>
                    It kinda creates the illusion as if the display were
                    splitted.
                </p>

                <button
                    className={clsx(styles.modeBtn, "btn")}
                    onClick={() => setBodyClassName("dark")}
                >
                    Set dark mode
                </button>

                <button
                    className={clsx(styles.modeBtn, "btn")}
                    onClick={() => setBodyClassName("light")}
                >
                    Set light mode
                </button>

                <button
                    className={clsx(styles.modeBtn, "btn")}
                    onClick={() => setBodyClassName("")}
                >
                    Set default/system mode
                </button>
            </section>
        </>
    )
}
