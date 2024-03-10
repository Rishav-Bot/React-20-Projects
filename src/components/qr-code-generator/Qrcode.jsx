import { useState } from 'react';
import './qrcode.css';
import QRCode from 'react-qr-code';
const Qrcode = () => {
    const [input, setInput] = useState('');
    const [qrcode, setQrcode] = useState('');
    const handleClick = () => {
        setQrcode(input);
        setInput('');
    }
    return (
        <div>
            <h1>QR Code Generator</h1>
            <div>
                <input type="text" name='qr-code' onChange={(e) => setInput(e.target.value)} placeholder='Enter your input' value={input} />
                <button disabled={input && input.trim() !== "" ? false : true} onClick={() => handleClick()}>Generate QR</button>
            </div>
            <div>
                <QRCode id='qr-code-value' value={qrcode} size={400} bgColor='#fff' />
            </div>
        </div>
    )
}

export default Qrcode