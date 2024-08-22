function Attention() {
  //   const attentionMessage =
  //     "¡No se lo pierda! Disfruta de nuestros intercambios promocionales al enviar dinero a Mexico.  Aplican condiciones.";
  return (
    <div className="attention">
      <img
        src="attention.png"
        alt="attention.png"
        width={25}
        height={25}
        style={{ marginLeft: "10px", marginTop: "10px" }}
      />
      <p className="attentionMessage">
        ¡No se lo pierda! Disfruta de nuestros intercambios promocionales al
        enviar dinero a Mexico.{" "}
        <bold style={{ color: "#0070e0", fontWeight: "600" }}>
          {" "}
          Aplican condiciones.
        </bold>
      </p>
    </div>
  );
}

export default Attention;
