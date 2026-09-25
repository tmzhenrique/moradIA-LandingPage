// No celular a section costuma ser mais alta que a tela, então rolar para o topo dela funciona melhor
export function rolarAteSecao(ancora) {
    const secao = document.querySelector(ancora);
    if (!secao) return;

    const ehMobile = window.matchMedia('(max-width: 48rem)').matches;
    secao.scrollIntoView({ behavior: 'smooth', block: ehMobile ? 'start' : 'center' });
}
