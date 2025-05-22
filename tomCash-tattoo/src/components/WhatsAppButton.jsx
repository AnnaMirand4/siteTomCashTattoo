import { FaWhatsapp } from "react-icons/fa"; // Usando react-icons (instale via npm/yarn)
import style from "../styles/componets/whatsappButton.module.css"

const WhatsAppButton = () => {
  const phoneNumber = "5571989331091"; // Ex: "5511999999999" (sem espaços ou caracteres especiais)
  const message = "Olá, gostaria de fazer um orçamento!"; // Mensagem padrão (opcional)

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={style.whatsapp_button}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppButton;