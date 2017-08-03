# ev-menu-scroll

component which help to tune the effect show and hide horizontal menu-panel.

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

In html file you should simply create for you menu wrapper. And assign him (mneu wrapper) id.

```html
  <nav id="menuWrapper">Here is my menu!</nav>
```

- JavaScript



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

