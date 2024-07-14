# Proyecto Bot Interactivo

## Descripción
Este proyecto consiste en desarrollar un bot interactivo integrado en una web `.io` o `.ia`, que al entrar en la web muestra una cabeza robótica interactuando con el usuario. El bot se presenta y pide al usuario que escriba su nombre, edad, aficiones, ocupación y canción favorita. Basado en esta información, el bot recomienda una de nuestras aplicaciones funcionales adaptadas a sus intereses y características.

## Tecnologías Utilizadas
- **QTerra QAqua** para criptografía cuántica.
- **AWS** para integración y base de datos.
- **NLP y Random Forests** para análisis de datos y machine learning.
- **HTML/CSS/JavaScript** para la interfaz de usuario.
- **React** para la construcción del frontend.
- **Node.js** para el backend.
- **TensorFlow.js** para modelos de machine learning en el navegador.

## Requisitos
- **S.O:** Sonoma 14.5
- **Node.js** versión 14 o superior
- **AWS Account**
- **Docker** para entornos virtuales

## Instalación y Configuración
1. Clonar el repositorio:
    ```bash
    git clone https://github.com/tu-usuario/proyecto-bot-interactivo.git
    cd proyecto-bot-interactivo
    ```

2. Instalar dependencias:
    ```bash
    npm install
    ```

3. Configurar AWS:
    - Configurar las credenciales de AWS en `~/.aws/credentials`.
    - Crear bases de datos necesarias en AWS RDS.

4. Configurar variables de entorno:
    Crear un archivo `.env` con las siguientes variables:
    ```env
    AWS_ACCESS_KEY_ID=tu-access-key-id
    AWS_SECRET_ACCESS_KEY=tu-secret-access-key
    DB_HOST=tu-db-host
    DB_USER=tu-db-user
    DB_PASS=tu-db-pass
    DB_NAME=tu-db-name
    ```

## Estructura del Proyecto
proyecto-bot-interactivo/
├── public/
├── src/
│   ├── components/
│   │   ├── BotHead.js
│   │   ├── UserInputForm.js
│   │   ├── Recommendations.js
│   ├── services/
│   │   ├── nlp.js
│   │   ├── recommendations.js
│   ├── styles/
│   │   ├── colors.css
│   ├── App.js
│   ├── index.js
├── server/
│   ├── app.js
│   ├── routes/
│   │   ├── user.js
│   │   ├── recommendations.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Recommendation.js
│   ├── services/
│   │   ├── nlpService.js
│   │   ├── recommendationService.js
├── Dockerfile
├── docker-compose.yml
├── package.json
├── README.md
├── requirements.txt
├── SECURITY.md
└── LICENSE

