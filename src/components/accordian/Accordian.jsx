import data from './data';
import './accordian.css';
import { useState } from 'react';

const Accordian = () => {
    const [selected, setSelected] = useState(null);
    //to toggle the multiple wala button
    const [enableMultiselection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);
    const handleSingleSelection = (dataId) => {
        setSelected((dataId === selected) ? null : dataId);
    }
    const handleMultipleSelection = (dataId) => {
        let cpymultiple = [...multiple];
        const index = cpymultiple.indexOf(dataId);
        if (index === -1) cpymultiple.push(dataId);
        else cpymultiple.splice(index, 1);
        setMultiple(cpymultiple);
    }
    return (
        <>
            <div className="wrapper">
                <button onClick={() => setEnableMultiSelection(!enableMultiselection)}>Enable Multiaccordian</button>
                <div className="accordian">
                    {
                        data && data.length > 0 ? (
                            data.map(dataItem => (
                                <div key={dataItem.id} className='item'>
                                    <div className="title" onClick={enableMultiselection ? () => handleMultipleSelection(dataItem.id) : () => handleSingleSelection(dataItem.id)}>
                                        <h3>{dataItem.question}</h3>
                                        <span>+</span>
                                    </div>
                                    {
                                        enableMultiselection
                                            ? multiple.indexOf(dataItem.id) !== -1 && (
                                                <div className='content'>{dataItem.answer}</div>
                                            )
                                            : selected === dataItem.id ? <div className='content'>{dataItem.answer}</div> : null
                                    }
                                </div>
                            ))
                        ) : (
                            <div> No data found.</div>
                        )
                    }
                </div>
            </div>
        </>
    )
}
export default Accordian;