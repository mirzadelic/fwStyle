fwStyle jQuery plugin
=======

Style the first word in tag.

Supported options:

 - class
 - color
 - bold
 - underline
 - italic
 - font size
 - affect on one word or not


Usage:

```javascript
    $(document).ready(function(){
    
       $('h1').fwStyle({
       		addColor: "#2751BA"
       });
    });
```



Options:

```javascript
    $('h1').fwStyle({
        'addClass' : false, // append class to first word (class name/false)
        'addColor' : false, // add color to first word (hex or name of color/false)
        'makeBold' : false, // bold first word (true/false)
        'makeUnderline' : false, // underline first word (true/false)
        'makeItalic' : false, // italic first word (true/false)
        'fontSize' : false, // add font size to first word (true/false)
        'oneWord' : true // should other options affect on tag that contain one word (true/false)
    });
```


Contact for bugs: mirzadelic1@gmail.com