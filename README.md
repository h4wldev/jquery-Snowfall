jQuery Snowfall plugin
======================
![](https://raw.githubusercontent.com/h4wldev/jquery-Snowfall/master/img.png)
Full page Snow falling plugin with jQuery

Source based [kopipejst/jqSnow](https://github.com/kopipejst/jqSnow)

Version 1.0
---

Initial Version

=====================

###options
```JavaScript
size {min, max},  (default: {10, 20})
interval,         (default: 500)
color,            (default: '#fff')
content,          (default: '&#10052;')
disappear         Disappear animation (default: 'linear')
```

How to use :

```JavaScript
$.snowfall.start();
```
or
```JavaScript
$.snowfall.start({
  color: '#000',
  content: '<i class="fa fa-snowflake-o"></i>'
});
```

- Stop Falling -

```JavaScript
$.snowfall.stop();
```
