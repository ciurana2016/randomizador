# RandomizadorApp
Una app muy simple

## Compilar angular
Generar los archivos en /dist
```
ng build --aot --prod
npm run precache
```
Probar en local
```
npm run static-serve
```

## Generar una app de android (POR TERMINAR EXPLICACION)
Antes de nada hay que editar nuestro archivo _index.html_ y quitar esta linea:
```
<base href="/">
```
Y despues descomentar esta otra:
```
<script src="cordova.js"></script>
```

Obviamente se tienen que [instalar](https://cordova.apache.org/#getstarted) los paquetes necesarios de antemano. Despues creamos un nuevo proyecto.
```
cordova create randomizador
```
Sustituimos el contenido de _/randomizador/www_ por _/randomizador-app/dist_
__OPCIONAL__ [Cambiar color del "theme"](https://github.com/tomloprod/cordova-plugin-headercolor)
