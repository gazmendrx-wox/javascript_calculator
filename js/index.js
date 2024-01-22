/**
 * DOMContentLoaded pikenisja per cdo JavaScript file
 * per arsye pritja te render/parse te dokumentit HTML;
 */
document.addEventListener("DOMContentLoaded", (event) => {
    
    /**
     * var gollaGlobal = 2 perdoret per variable "globale" ose casje pa scope;
     */
    var gollaGlobal = 2;

    /**
     * Event Listeners; 
     * https://www.w3schools.com/jsref/dom_obj_event.asp
     * Percjellin ndryshimet e caktuara mbi nje element/tag/node; 
     */

    document.getElementById('calculate-add').addEventListener('click', function() {
        //e shfaq rezultatin
        //hej pom mungon rezultati??
        /**
         * const result = 0 -> konstante, e pandryshueshme;
         * let result = 0 -> e ndryshueshme, mrenda scope te funksionit;
         * var result = 0 -> e ndryshueshme e gatshme per te gjitha scopes;
         */
        let result = 0
        //hej po rezultati jem nuk osht 0 ?? po sa osht ??
        //rezultati jem eshte number_one + number_two
        const numberOne = Number.parseInt(document.getElementById('number_one').value);
        const numberTwo = Number.parseInt(document.getElementById('number_two').value); 
        result = numberOne + numberTwo;

        document.getElementById('result').innerHTML = result;
    })


    /**
     * let golla = 2; perdoret per variable te ndryshueshme mrenda nje scope te funksionit;
     */
    function stadionTeFutbollit() { //fillimi i Scope ln:40
        //golla
        let golla = 2;
        //ka lojtar
        //ka ulse per vizitor
        console.log(gollaGlobal) // output: 2
    /** mbarimi i scope ln:46 */ }

     function stadionIBasketit() {
        let golla = 0;
        console.log(gollaGlobal) // output: 2
     }
});
  