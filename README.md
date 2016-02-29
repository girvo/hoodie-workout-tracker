# A workout tracker, written in React, MobX, and Hoodie

## Pre-requisites

- `envv`: https://github.com/jakewendt/envv (`brew instal envv`)
- `nvm`: https://github.com/creationix/nvm (follow instructions)
- `CouchDB`: http://couchdb.apache.org/ (either install in your host, or with Docker)

## Building

- `npm install`
- Setup environment variables
 - Development: `source .env/dev`
 - Production: `source .env/prod`
- `npm test`
- `npm build`

## Hoodie

- Ensure you have CouchDB up and running (and have an admin account/password setup)
- Adjust the `.hoodierc` file to have the correct credentials and IP address
- Run `git update-index --assume-unchanged .hoodierc` after making your changes
- `npm run hoodie`
- Navigate to [](http://localhost:8080)

## License

MIT
