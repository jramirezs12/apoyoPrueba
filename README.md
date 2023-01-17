# ConsumoApi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

##################################################

Creo el proyecto normi: ng new app
Creo el componente que voy a usar: ng g c server/components/nombreComponente
en el app.component.html creo el div que contenga los componentes con una etiqueta
Creo la carpeta desde  la que voy a consumir la api que yo cree con el json, se llama server.
instalo el json-server en el package.json creo un nuevo parametro que se llame serverAPI que se vea asi:
"serverAPI": "json-server --watch server/db.json --port 3000" y correr con npm run serverAPI
instalo el angular material ng add @angular/material
Crear modulo de material y le mongo el @NgModule, le hago el exports  y dentro importo el elemento que usare, en mi caso el card
En el component puedo crear el html inline en el template con el simbolo `
Creo las rutas en el routing con el router-outlet, con el arreglo path: '', component: NombreComponent creo la ruta
creo el modulo en una nueva carpeta pages con el flag -m=app y con --route products y creamos el componente dentro de este modulo
Luego creo la interface del componente en la que iran los atributos con su tipo del json(api que voy a llamar) dentro del modulo
Luego creo un service del componente es la que gestiona los datos del json (api) dentro del modulo, en este se importa el HttpClient en el principal y se le manda como argumento un http: HttpClient
En el service se crea el metodo que llame los productos (o lo que sea) que devuelva un observable que devuelva el array de productos osea la interface y que retorne un this.http.get(this.apiURL), este apiURL es el link de nuestra api
Luego en el componente del modulo se llama el metodo para consumirlo, aca se implementa el OnInit y un constructor, en este le mandamos de atributo un productSvc que se le manda el servicio (basicamente se crea un objeto)
creamos una propiedad products que le enviamos un array vacio de la interface asi products!: ProductInterface[];
En el metodo OnInit se llama el metodo con un .pipe( tap((products: ProductInterface[]) => this.products = products) ).subscribe();
Y luego en el html lo llamamos con interpolacion y el pipe de json {{ products | json }} dentro de una etiqueta pre para que se vea lindo

Para que quede mas lindo lo hacemos con un card, pero tenemos que traer el material module al product module
Luego en las cards, recorremos el arreglo con el *ngFor y lo llamamos con interpolacion {{product.name}}

para que quede mas lindo le ajustamos en el css en .products el 
display: flex; 
flex-wrap: wrap; 
justify-content: center; 
align-items: center; 
margin-top: 20px;

 y un .card del css el

margin: 51px;
min-width: 180px;
min-height: auto;
max-width: 400px;
height: 100%;





