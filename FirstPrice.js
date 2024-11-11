let priserFirstPrice = new Map();
let priser = new Map();

function init(){
    priserFirstPrice.set("Chips", 18)
    priserFirstPrice.set("Cola", 11)
    priserFirstPrice.set("Sjokolade", 15)
    priserFirstPrice.set("Kjeks", 13)
    priserFirstPrice.set("Skruer", 17)
    priserFirstPrice.set("Tallerkener", 20)
    priserFirstPrice.set("Kopper", 14)

    priser.set("Chips", 32)
    priser.set("Cola", 39)
    priser.set("Sjokolade", 50)
    priser.set("Kjeks", 36)
    priser.set("Skruer", 28)
    priser.set("Tallerkener", 30)
    priser.set("Kopper", 28)
}
/** 
    * Tar inn en original pris og prosent avslag
    * Returnerer originalprisen etter fratrekk i prosent
    *@param{Number} originalPris
    *@param{Number} prosent 
    */
    function prisMedFratrekk(originalPris, prosent){
        let einProsent = originalPris/100;
        let fratrekkIKr = einProsent * prosent;
        return (originalPris - fratrekkIKr)
    }

/** 
    * Tar inn en original pris og prosent avslag
    * Returnerer originalprisen etter fratrekk i prosent
    *@param{Number} originalPris
    *@param{Number} nyPris 
    */
    function forskjellIProsent(originalPris, nyPris){
        let differanse = Math.abs( originalPris - nyPris ); 
        let einProsent = originalPris/100;
        return differanse/einProsent;  
    }

/**
    * Tar inn to lister med priser
    * Finner det dyreste i hver liste
    * printer ut begge de dyreste listene
    * @param{Map} firstPricePriser
    * @param{Map} priser
    */
    function skrivUtDyresteGjenstand(firstPricePriser, priser){
        //TODO -- implementer funksjonen
    }
/**
    * Finn den gjenstanden i priser 
    * som er akkurat dobbelt saa dyr som gjenstanden i firstPricePriser
    * skriv ut begge to
    * @param{Map} firstPricePriser
    * @param{Map} priser
    */
    function finnDobbeltSomDyr(firstPricePriser, priser){
        //TODO -- implementer funksjonen
    }

/**
    * Finn prissummen av alle prisene i mapet
    * skriv ut summen
    * @param{Map} priser
    */
    function skrivUtSum(priser){
        //TODO -- implementer funksjonen
    }

/**
    * Ved hjelp av allerede implementerte hjelpefunksjoner
    * finn prisforskjell i prosent mellom alle varene i 
    * prislisten og firstpriceprislisten
    * @param{Map} firstPricePriser
    * @param{Map} priser
    */
    function finnDobbeltSomDyr(firstPricePriser, priser){
        //TODO -- implementer funksjonen
    }


//-------------------- Main -----------------------------// 
// Eksmepel paa gjennomgang av eit Map:
// for (const [key, value] of map){
    // console.log(key + " " + value)
    // }
init();
