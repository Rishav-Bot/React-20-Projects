import useLocalStorage from './useLocalStorage';
import './switchTheme.css';
const SwitchTheme = () => {
    const [theme, setTheme] = useLocalStorage("theme", "dark");
    return (
        <div className="light-dark-mode" data-theme={theme}>
            <div className="container">
                <p>Hello world!!</p>
                <button onClick={() => theme === "light" ? setTheme("dark") : setTheme("light")}>Change Theme</button>
            </div>
        </div>
    )
}

export default SwitchTheme