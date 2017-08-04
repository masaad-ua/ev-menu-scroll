# ev-menu-scroll

Plugin which help to tune the effect show and hide horizontal menu-panel.

### Installation

- Bower( IS NOT AVALABLE NOW! )

```bash
   bower install ev-menu-scroll
```

- GIT

```bash
   git clone https://github.com/masaad-ua/ev-menu-scroll.git
```

### Basic usage

- HTML

In html file you should simply create for you menu wrapper. And assign him (menu wrapper) id.

```html
  <nav id="menuWrapper">Here is my menu!</nav>
```

- CSS

```
 .ev-absolute{
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
 }
 .ev-scroll-transition{
    -webkit-transition: webkit-transform .3s linear;
    transition: transform .3s linear;
 }
 .ev-custom{
    your style!
 }
```

- JavaScript

Before using plugin ev-menu-scroll your should add to your html files jQuery library, its must be higher than script with plugin.
For example:

```html
  <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
    <script src="scriptForMyMenu.js"></script>
```

In you script you have to create abject with properties - parameters, which help to tune menu.
- `startShow` (_Number_) - amount of px which define when menu start to be show in top of browser if we scrolling window from top to bottom.
- `endShow` (_Number_) - amount of px which define when menu end to be show in top of browser if we scrolling window from bottom to top.
- `animate` (_Boolean_) - tune on(true) or off(false) animation for showing or hiding menu.
- `fixedAlways` (_Boolean_) - tune on(true) or off(false) for always fixing menu container in the top of window.
- `fixedWhenUp` (_Boolean_) - tune on(true) or off(false) for fixing menu container in top of window when scrolling to top.


```javascript

jQuery(document).ready(function($) {

	/*******Scroll*********/

	var obj = {
		startShow: 300,
		endShow: 400,
		animate: true,
		fixedAlways: false,
		fixedWhenUp: false
	};

	$("#menuWrapper").evMenuScroll(obj);

});
```

