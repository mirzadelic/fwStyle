(function($){

    $.fn.fwStyle = function (options) {

        // get settings
        var settings = $.extend({
            'addClass' : false,
            'addColor' : false,
            'makeBold' : false,
            'makeUnderline' : false,
            'makeItalic' : false,
            'fontSize' : false,
            'oneWord' : true
        }, options);

        // set class, color, bold, underline, italic, font size
        var styleText = '';
        if (settings.addColor) styleText += 'color:'+settings.addColor+';';
        if (settings.makeBold) styleText += 'font-weight:bold;';
        if (settings.makeUnderline) styleText += 'text-decoration:underline;';
        if (settings.makeItalic) styleText += 'font-style:italic;';
        if (settings.fontSize) styleText += 'font-size:'+settings.fontSize+';';
        styleText = (styleText) ? 'style="'+styleText+'"' : '';

        var append_text = (settings.addClass) ? 'class="'+settings.addClass+'" '+styleText : styleText;

        // loop through elements
        $(this).each(function() {

            // set var for element
            var $this = $(this);

            // get html code for element
            var el_text = $this.html();

            // strip all tags from "el_text"
            var strip_text = el_text.replace(/<(?:.|\n)*?>/gm, '');

            // get number of characters until space
            var index = strip_text.indexOf(' ');

            // if only one word in "el_text"
            if (index == -1) {
                // set index to false, or number of chars for first word
                index = (!settings.oneWord) ? false : strip_text.length;
            }

            // if index is false, just print stripped element, otherwise format the text and print it
            if (!index) {
                $this.html(strip_text);
            } else {
                // set var for word and rest of the text
                var word = strip_text.substring(0, index),
                    rest = strip_text.substring(index, strip_text.length);

                // set var for formated text with class or color

                var output = '<span '+append_text+'>'+word+'</span>';


                // print it to element
                $this.html(output+rest);
            }
        });
    };

})(jQuery);
