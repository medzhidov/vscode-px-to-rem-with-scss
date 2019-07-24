#Px to rem for VSCode
 With this extension you can make '18px' to 'rem(18)'.
 It need if you use sass or scss, where you may be has next function:
 
 ``` SCSS
     @function rem($pixels){
         @return $pixels / $font_size + rem;
     }
 ```
 Where `$font_size` is font size of your html;
 

 # Hotkeys
 
 `alt+c` - convert 10px to rem(10px) and back (of course it's converts #{rem(10px)} inside of "calc" function)