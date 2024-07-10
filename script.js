

document.addEventListener('DOMContentLoaded', () => {
  
    let energiaInput = document.querySelector("#energia");
    let trasportoInput = document.querySelector("#trasporto");
    let totale = document.querySelector("#totale");
    let button = document.querySelector("#invio");

    // Funzione per calcolare le emissioni energetiche
    function calcolaEmissioniEnergetiche(consumoEnergetico) {
        const coefficienteEnergia = 0.233;
        return consumoEnergetico * coefficienteEnergia;
    }

    // Funzione per calcolare le emissioni del trasporto
    function calcolaEmissioniTrasporto(kilometraggio) {
        const coefficienteTrasporto = 0.21;
        return kilometraggio * coefficienteTrasporto;
    }

    // Funzione per calcolare le emissioni totali
    function calcolaEmissioniTotali(consumoEnergetico, kilometraggio) {
        const emissioniEnergetiche = calcolaEmissioniEnergetiche(consumoEnergetico);
        const emissioniTrasporto = calcolaEmissioniTrasporto(kilometraggio);
        return emissioniEnergetiche + emissioniTrasporto;
    }

    // Event listener per il pulsante
    button.addEventListener("click", () => {
        // Ottieni i valori degli input
        let consumoEnergetico = parseFloat(energiaInput.value);
        let kilometraggio = parseFloat(trasportoInput.value);

        // Controlla se i valori sono numeri
        if (isNaN(consumoEnergetico) || isNaN(kilometraggio)) {
            alert("Per favore, inserisci valori numerici validi.");
            return;
        }

        // Calcola le emissioni totali
        let emissioniTotali = calcolaEmissioniTotali(consumoEnergetico, kilometraggio);

        // Mostra il risultato
        totale.innerHTML = `<strong>Le tue emissioni totali sono: ${emissioniTotali.toFixed(2)} kg di CO2</strong>`;
    });
});
