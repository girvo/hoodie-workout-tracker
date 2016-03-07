# A workout tracker, written in React, Redux, and Hoodie

## Pre-requisites

- `docker`: https://www.docker.com/ &mdash; I personally use [xhyve](https://github.com/ailispaw/boot2docker-xhyve) to run a VM under OS X
- `envv`: https://github.com/jakewendt/envv &mdash; `brew install envv`
- `nvm`: https://github.com/creationix/nvm &mdash; follow instructions in README
- `CouchDB`: http://couchdb.apache.org/ &mdash; either install in your host, or with Docker (default)

## Building

- `nvm use`
- `npm install`
- `source .env/(dev|prod)`
- `npm test`
- `npm build`

## Hoodie

- Start the CouchDB container with `npm run docker:couchdb` in a separate terminal
- Find the IP address of your Docker container (`localhost` on Linux, VM ip under OS X), for me it is `196.168.64.2`
- Navigate to http://192.168.64.2:5984/_utils/session.html in your browser, and setup an admin account
- Adjust the `.hoodierc` file with the correct credentials and IP address from the above steps
- Run `git update-index --assume-unchanged .hoodierc` after making your changes
- `npm run hoodie`
- Navigate to [http://localhost:8080](http://localhost:8080)

## Development

- Follow the steps for [Building](#building) and [Hoodie](#hoodie), but do not run `npm run hoodie`
- Instead, execute `npm run start` to start the BrowserSync server, watchify and PostCSS watcher
- Navigate to http://localhost:3000 and get hacking

### BrowserSync

- This project utilises [BrowserSync](https://www.browsersync.io/) for live-reloading and easy cross-device development
- CSS changes will be injected into the running page without a refresh. JS changes will refresh the page automatically
- Change the BrowserSync configuration at http://localhost:3001

### PostCSS

- This project also uses PostCSS, with the `precss` and `postcss-scss` plugins
- All files should end in `.css`, but can utilise SCSS features and syntax
- In addition, `@import` will respect `node_modules`
 - Given a dependency called `example` with a CSS file in it's `dist` folder, you can import it via:

        ```scss
        // css/app.css
        @import 'example/dist/example.css';
        ```

### Testing

- This project uses `tape` as it's test runner
 - `npm test`
- Tests can be run in the browser
 - `npm run test:browser`
 - Navigate to http://localhost:7001
- You can watch the code-base and re-run tests whenever a source file or test changes
 - `npm run test:watch`

## License

MIT
