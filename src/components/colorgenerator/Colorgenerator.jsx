import { useState, useEffect } from "react"

const Colorgenerator = () => {
  const [color, setColor] = useState('#000000');
  const [typeOfColor, setTypeOfColor] = useState('hex');
  const randomHexCode = (length) => {
    return Math.floor(Math.random() * length);
  }
  const handleHexColor = () => {
    // #678765
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomHexCode(hex.length)];
    }
    setColor(hexColor);
  }
  const handleRgbColor = () => {
    const r = randomHexCode(256);
    const g = randomHexCode(256);
    const b = randomHexCode(256);

    setColor(`rgb(${r},${g}, ${b})`);
  }
  useEffect(() => {
    if (typeOfColor === "rgb") handleRgbColor();
    else handleHexColor();
  }, [typeOfColor]);

  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      background: color,
    }}>
      <button onClick={() => setTypeOfColor('hex')}>Create Hex Color</button>
      <button onClick={() => setTypeOfColor('rgb')}>Create RGB Color</button>
      <button onClick={() => {
        if (typeOfColor === 'hex') handleHexColor();
        else handleRgbColor();
      }}>Generate Random Color</button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "60px",
          marginTop: "50px",
          flexDirection: 'column',
          gap: '20px'
        }}
      >
        <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  )
}

export default Colorgenerator