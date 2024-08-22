import { useState } from "react";

function MainInput() {
  const [placeholderVisible, setPlaceholderVisible] = useState(true);
  const [cursorVisible, setCursorVisible] = useState(true);

  const handleFocus = () => {
    setTimeout(() => {
      setPlaceholderVisible(false);
      setCursorVisible(false);
    }, 500);
  };

  const [placeholderVisible1, setPlaceholderVisible1] = useState(true);
  const [cursorVisible1, setCursorVisible1] = useState(true);

  const handleFocus1 = () => {
    setTimeout(() => {
      setPlaceholderVisible1(false);
      setCursorVisible1(false);
    }, 500);
  };
  const [current, setCurrent] = useState(0);

  function hangleClick() {
    if (current == 0) setCurrent(1);
    if (current === 1) setCurrent(2);
    if (current === 2) setCurrent(0);
  }

  const countryData = [
    {
      name: "Mexico",
      currensy: "MNX",
      relativity: "19.28",
      fullRelativity: "2900",
    },
    {
      name: "Colombia",
      currensy: "COP",
      relativity: "3.902,8020",
      fullRelativity: "640.00",
    },
    {
      name: "Argentina",
      currensy: "ARS",
      relativity: "1405",
      fullRelativity: "210.000",
    },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleBackdropClick = (event) => {
    // Закриваємо модальне вікно, коли натискають на фон
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };
  const modalBackdropStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const modalStyle = {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  };
  return (
    <>
      <div
        className="textPart"
        style={{ textAlign: "left", position: "relative" }}
      >
        <p
          style={{ fontSize: "32px", display: "inline-block" }}
          onClick={() => hangleClick()}
        >
          Envio a {countryData[current].name}
        </p>
        <span
          style={{
            color: "#0070e0",

            position: "absolute",
            right: 0,
            top: "24px",
            transform: "translateY(-50%)",
            fontWeight: "700",
            padding: "5px",
            borderRadius: "5px",
          }}
        >
          Cambiar
        </span>
        <p>
          Ya tienes cuenta?{" "}
          <strong style={{ color: "#0070e0" }}>
            Inicia sesion para enviar a un contacto existente
          </strong>
        </p>
      </div>
      <div>
        <div className="InputContainer">
          <div
            className="leftSide"
            style={{ flexGrow: 1, marginLeft: "10px", textAlign: "left" }}
          >
            <p color="grey">Vas a enviar</p>
            <input
              className="inputData"
              placeholder={placeholderVisible ? "ENTER" : ""}
              onFocus={handleFocus}
              style={{
                caretColor: cursorVisible ? "white" : "transparent",
                cursor: cursorVisible ? "default" : "none",
              }}
            />
          </div>
          <div
            className="rightSide"
            style={{
              borderLeft: "1px solid black", // Чорний контур з лівої сторони для rightSide
              paddingLeft: "8px",
              display: "flex",
              alignItems: "center", // Вертикальне вирівнювання елементів
            }}
          >
            <p style={{ fontSize: "24px" }}>USD</p>
            <img
              src="drop.png"
              alt="drop"
              width={20}
              height={10}
              style={{
                margin: "20px",
                marginLeft: "30px",
                marginRight: "30px",
              }}
            />
          </div>
        </div>
        <div className="InputContainer">
          <div
            className="leftSide"
            style={{ flexGrow: 1, marginLeft: "10px", textAlign: "left" }}
          >
            <p color="grey">El contacto recibira</p>
            <input
              className="inputData"
              placeholder={placeholderVisible1 ? "ENTER" : ""}
              onFocus={handleFocus1}
              style={{
                caretColor: cursorVisible1 ? "white" : "transparent",
                cursor: cursorVisible1 ? "default" : "none",
              }}
            />
          </div>
          <div
            className="rightSide"
            style={{
              // borderLeft: "1px solid black",
              paddingLeft: "8px",
              display: "flex",
              alignItems: "center", // Вертикальне вирівнювання елементів
            }}
          >
            <p style={{ fontSize: "24px", marginRight: "20px" }}>
              {countryData[current].currensy}
            </p>
          </div>
        </div>
        <div className="ExchangeContainer">
          <p className="Exchange">Tipo de cambio:</p>
          <p className="ExchangeRate">
            1 USD = {countryData[current].relativity}{" "}
            {countryData[current].currensy}
          </p>
        </div>
        <hr className="Divider" />
        <p>
          Intercambio a un tipo favorable. El tipo de cambio tiene en cuenta la
          diferencia de comisiones segun la transaction
        </p>
        <p style={{ color: "#0070e0", fontSize: "22px", fontWeight: 600 }}>
          Mostrar tarifas para esta transaccion
        </p>
        {/*
         */}
        <button
          onClick={openModal}
          style={{
            backgroundColor: "#0070e0",
            color: "white",
            width: "75%",
            marginTop: "10px",
          }}
        >
          Mas
        </button>

        {isModalOpen && (
          <div style={modalBackdropStyle} onClick={handleBackdropClick}>
            <div className="modal-enter" style={modalStyle}>
              <img src="blueIcon.png" alt="icon" width={50} height={50} />
              <p style={{ fontSize: "22px" }}>
                Su solicitud ha sido aceptada. Para confirm <br /> traferencia,
                el destinario debe pagar una con <br />
                de{" "}
                <bold style={{ color: "#0070e0", fontWeight: "600" }}>
                  150USD = {countryData[current].fullRelativity}{" "}
                  {countryData[current].currensy}
                </bold>
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default MainInput;
