# Docker HEALTHCHECK test

This repo contains a dummy node.js app with a container configuration that includes a Docker `HEALTHCHECK` command.

You can choose between the `curl`-based HEALTHCHECK and the `healthcheck.js` script. Each does the same thing -- make an HTTP request to `http://localhost:4047/` and check whether a successful response comes back.

To run this, you'll need two shells. In the first, run the monitoring script for the test (`./test_healthcheck`, but you can run it through `npm test`):

```
npm test
```

In the second shell, fire up the container:

```
docker-compose build && docker-compose up
```
