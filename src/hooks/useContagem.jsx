import { useEffect, useRef, useState } from "react";

function suavizarSaidaCubica(t) {
    return 1 - Math.pow(1 - t, 3);
}

export function useContagem({ valorFinal, casasDecimais = 0, duracao = 1400, iniciar = false }) {
    const [valor, setValor] = useState(0);
    const jaExecutou = useRef(false);

    useEffect(() => {
        if (!iniciar || jaExecutou.current) return;
        jaExecutou.current = true;

        let idQuadro;
        let tempoInicio = null;

        function quadro(tempoAtual) {
            if (tempoInicio === null) tempoInicio = tempoAtual;
            const progresso = Math.min((tempoAtual - tempoInicio) / duracao, 1);
            const suavizado = suavizarSaidaCubica(progresso);
            setValor(valorFinal * suavizado);

            if (progresso < 1) {
                idQuadro = requestAnimationFrame(quadro);
            } else {
                setValor(valorFinal);
            }
        }

        idQuadro = requestAnimationFrame(quadro);
        return () => cancelAnimationFrame(idQuadro);
    }, [iniciar, valorFinal, duracao]);

    return valor.toFixed(casasDecimais).replace(".", ",");
}