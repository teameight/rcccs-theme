/**
 * Created by administrator on 12/1/13.
 */
(function ( $ ) {
//    VARS
    var def = $('a.side-matter-ref'),
        ref = $('div.side-matter-text dt'),
        num = '';

    // NEED TO FIX THIS SHIT


    console.log(def);

//    ACTIVATE REFS on DEF HOVER
    def.hover(function() {
        num = this.attr('id');
        console.log('number is' + num);
    },
    function() {
        //
    });

    def.click(function() {
        alert('clicked');
    });

})( jQuery );