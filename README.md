# loopback-pg

This application is generated using [LoopBack 4 CLI](https://loopback.io/doc/en/lb4/Command-line-interface.html) with the
[initial project layout](https://loopback.io/doc/en/lb4/Loopback-application-layout.html).

## Install dependencies

By default, dependencies were installed when this application was generated.
Whenever dependencies in `package.json` are changed, run the following command:

```sh
npm install
```

To only install resolved dependencies in `package-lock.json`:

```sh
npm ci
```

## Run the application

```sh
npm start
```

You can also run `node .` to skip the build step.

Open http://127.0.0.1:3000 in your browser.

## Rebuild the project

To incrementally build the project:

```sh
npm run build
```

To force a full build by cleaning up cached artifacts:

```sh
npm run rebuild
```

## Fix code style and formatting issues

```sh
npm run lint
```

To automatically fix such issues:

```sh
npm run lint:fix
```

## Other useful commands

- `npm run migrate`: Migrate database schemas for models
- `npm run openapi-spec`: Generate OpenAPI spec into a file
- `npm run docker:build`: Build a Docker image for this application
- `npm run docker:run`: Run this application inside a Docker container

## Tests

```sh
npm test
```

## What's next

Please check out [LoopBack 4 documentation](https://loopback.io/doc/en/lb4/) to
understand how you can continue to add features to this application.

[![LoopBack](https://github.com/loopbackio/loopback-next/raw/master/docs/site/imgs/branding/Powered-by-LoopBack-Badge-(blue)-@2x.png)](http://loopback.io/)



## Steps to reproduce the issue
### Step 1: start a DB container
```sh
docker run --name external-postgres -e POSTGRES_PASSWORD=1234 -p 5432:5432  -d postgres:16
```

### step 2: install npm packages
```sh
npm ci
```

### step 3: execute the tests
```sh
npm run test
```

### step 4: check logs for the issue
```sh
(node:80014) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 17 connected listeners added to [PgDataSource]. Use emitter.setMaxListeners() to increase limit
(Use `node --trace-warnings ...` to show where the warning was created)
(node:80014) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 17 error listeners added to [PgDataSource]. Use emitter.setMaxListeners() to increase limit
(node:80014) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 11 error listeners added to [Client]. Use emitter.setMaxListeners() to increase limit
(node:80014) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 11 error listeners added to [Client]. Use emitter.setMaxListeners() to increase limit
(node:80014) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 11 error listeners added to [Client]. Use emitter.setMaxListeners() to increase limit
```
