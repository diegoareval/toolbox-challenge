# Backend
### **_DIRECTORIOS_**
- **tests:**     pruebas unitarias
- **src/config:** exponiendo las variables de entorno y las confs generales del proyecto
- **src/controllers:**   todos los metodos del controlador y el manejo de la data a retornar al frontend
- **src/routers:**  todos los endpoints de la api
- **src/services:**    Todos los servicios de la aplicacion en este caso los metodos que conectan al origen de datos de
- **src/utils:** todos los utilities o helpers metodos

#### notes:
implemente una arquitecura minimalista y pequeña, ya que el tipo de solucion es pequeña

### Install dependencies

```bash
yarn install
```

if your use npm:

```bash
npm install
```
### Configure environment variables

rename `.env.example` to `.env` and fill in the values or my sample

### Run the server dev mode

```bash
yarn dev
```

if your use npm:

```bash
npm run dev
```

### Run the server prod mode

```bash
yarn start
```

if your use npm:

```bash
npm start
```

#### anexo
2. docker test: docker build -f Dockerfile -t server .
3. execute: docker run -it -p 4001:3000 server


Now you can access api base: `http://localhost:3005`.



[Dev info Linkedin: Diego Arevalo](https://www.linkedin.com/in/diego2000avelar/)

