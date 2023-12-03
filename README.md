# CorrectorPro
### Prod link: https://corrector-pro.netlify.app
### API link: http:/173.249.22.169:9002/api/corrector

## Installation

### Required Dependences
- Node JS
- Docker
- docker-compose cli

### Run local
- run ``` docker-compose up -d ``` for starting database
- Go to the server directories and run 
``` 
    npm install 
    npm run migrate
    npm run generate
    npm run seed
    npm run dev
``` 
- Go to the client dierctories and run ``` npm install ``` then run ``` npm start ```

### Deploy on server
- change .env on server directories, remove "localhos" and change to the @IP your server
- run ``` docker-compose up build ``` for starting the database
- Go to the server directories and run 
``` 
    npm install 
    npm run migrate
    npm run generate
    npm run seed
```
- Go inside src folder then run in pm2 ``` pm2 start main.ts ```
- Publish the client in netlify

## More functionalities added
- Add copy to clip board text
- Add Malagasy laguage
- Add landing page for the app
- Add UI/UX on the page
- Add API documentation