function abrirWhatsApp() {
const parte1 = "55";
const parte2 = "85";
const parte3 = "987286418";
const numero = parte1 + parte2 + parte3;

const mensagem = "Olá, gostaria de fazer um pedido!";
const textoCodificado = encodeURIComponent(mensagem);

const urlMobile = `https://wa.me/${numero}?text=${textoCodificado}`;
const urlDesktop = `https://web.whatsapp.com/send?phone=${numero}&text=${textoCodificado}`;

const isMobile = /iPhone|Android|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);

const destino = isMobile ? urlMobile : urlDesktop;
window.open(destino, '_blank');
}