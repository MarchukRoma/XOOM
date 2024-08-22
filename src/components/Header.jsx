function Header() {
  const headLabal = ["Español", "Ayuda", "Crear cuenta", "Iniciar sesión"];
  return (
    <div className="headContainer">
      <img className="headerImg" src="header.png" alt="header" />

      {headLabal.map((label, index) => (
        <p key={index} className="headP">
          {label}
        </p>
      ))}
    </div>
  );
}
export default Header;
