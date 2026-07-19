export const WHATSAPP_NUMBER = "5511922207623";

export function getWhatsappLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
