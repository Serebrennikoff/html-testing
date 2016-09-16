Я работаю на Windows 10. В работе использую Sublime Text 3 с установленными пакетами для подсветки синтаксиса разных языков и тп.; Google Chrome, как основной браузер и инструменты разработчика для отладки; в качестве менеджера задач и обычно для сборки использую Gulp с browsersync для live reload.


Эффект blur на изображении можно создать с помощью свойства CSS3 - filter со значением blur(<length>px). Для браузеров Chrome, Safari, Opera необходим префикс (-webkit-filter: blur(<length>px)). Для поддержки в Internet Explorer необходимо воспользоваться нестандартным свойством: filter:progid:DXImageTransform.Microsoft.Blur(PixelRadius='0');
Для совместимости со всеми основными бразуерами и IE я бы воспользовался всеми тремя свойствами:
filter:progid:DXImageTransform.Microsoft.Blur(PixelRadius='0');
-webkit-filter: blur(0px);
filter: blur(0px);