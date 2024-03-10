import Tab from "./Tab"
import './tab.css';
const RandomComponent = () => {
    return <div>Some random content.</div>
}

const Tabtest = () => {
    const tabs = [
        {
            label: "Tab 1",
            content: <div>This is content for tab 1</div>,
        },
        {
            label: "Tab 2",
            content: <div>This is content for tab 2</div>,
        },
        {
            label: "Tab 3",
            content: <RandomComponent />,
        },
    ]
    const handleChange = (currentTabIndex) => {
        console.log(currentTabIndex);
    }
    return (
        <>
            <Tab tabsContent={tabs} onChange={ handleChange} />
        </>
    )
}

export default Tabtest