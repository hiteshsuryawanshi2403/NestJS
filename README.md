<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>
<p align="center">
  <a href="http://angular.io/" target="blank"><img src="https://angular.io/assets/images/logos/angular/angular.svg" width="200" alt="Angular Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications by Hitesh Suryawanshi along side with <a href="http://angular.io" target="_blank"><Angular/></a></p>
    <p align="left">
    <ul>
    <li>Nest JS Sample Application</li>
    <li>Custom Logger wrapper</li>
    <li>Exception handler</li>
    <li>Swagger Documentation</li>
    <li>Jest Testcases</li>
    </ul>
    </p>
    <p align="right">
    <ul>
    <li>Angular Sample Application</li>
    <li>Dynamic form</li>
    <li>Exception handler</li>
    <li>Lazy loading</li>
    <li>Http Handler</li>
    </ul>
    </p>


## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository by [Hitesh Suryawanshi](https://www.linkedin.com/in/hitesh-suryawanshi-147399111/).

## Installation the apps

```bash
# install node_module
$ cd hitesh-suryawanshi-api/npm install
$ cd hitesh-suryawanshi-web/npm install
```

## Creating build

```bash
# assumed node_modules are being install for both the application
$ cd hitesh-suryawanshi-api/npm run build
$ cd hitesh-suryawanshi-web/npm run build
# above command will create build in dist/src folder in hitesh-suryawanshi-api and for angular application it will generate ui folder in hitesh-suryawanshi-api/dist/src
$ cd hitesh-suryawanshi-api/dist/src
$ node main.js
# you can copy the bundles under hitesh-suryawanshi-api/dist/src which will be final build and can be run at http://localhost:3000
```

## Running the  app

```bash
# development
$ cd hitesh-suryawanshi-web/npm run start
# http://localhost:4200
# watch mode
$ cd hitesh-suryawanshi-api/npm run start:dev
# http://localhost:3000
# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ cd hitesh-suryawanshi-api/npm run test

# e2e tests
$ cd hitesh-suryawanshi-api/npm run test:e2e

# test coverage
$ cd hitesh-suryawanshi-api/npm run test:cov
```

## Swager document

```bash
# build api doc
$ cd hitesh-suryawanshi-api/npm run build:doc
```

## Support

Nest is an MIT-licensed open source project. This is sample Nest JS Application by Hitesh Suryawanshi. The application consist of custom wrapper of logger, Jest unit testcases, Exception handler and Swagger document builder.

## Stay in touch

- Author - [Hitesh Suryawanshi](https://www.linkedin.com/in/hitesh-suryawanshi-147399111)

## License

Nest is [MIT licensed](LICENSE).
