# bloggy
Koa React and Mongo Blog for dummies

## Development

This API depends on other services and apps to work, we use docker-compose to simulate those dependencies and be able to develop and debug locally.

In order to get the app up and running, is necessary to have [Docker desktop](https://www.docker.com/products/docker-desktop) installed on your machine first, then run:

`docker-compose build`

This will build all dependencies, after build, run:

`docker-compose up`

Frontend can be found at `localhost:3000`
Backend can be found at `localhost:4000/api/v1/`

### VS Code debugger config

If you are using [Visual Studio Code](https://code.visualstudio.com/), debugger can be attached by using config in `.vscode/launch.json`:

Finally attach VS Code debugger by clicking on the green "play button" for frontend or backend

