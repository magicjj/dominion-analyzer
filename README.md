# dominion-analyzer

The /api folder is deprecated. All that game parsing logic was moved into /analyzer so it is now a standalone webapp. Cheaper and easier to maintain without the mongoDB saving analysis.

/analyzer is a react webapp.

Built on Node. Install node first.

From /analyzer folder, run `npm install`
Then run `npm run start` to run a development folder.
`npm run build` will produce the production build to /build.
See package.json scripts for more.

If you wish to install using Docker:

`docker build -t dom-lyze .`

`docker run -p 3000:3000 --rm -it dom-lyze`

Then you can connect to http://localhost:3000/ in your browser.

If you wish to do development, then start the docker image with 
`docker run -p 3000:3000 -v "$PWD":/app/src --rm -it dom-lyze`

Then the server will hot reload when you save changes a file.

There is still a package (yargs-parser) that fails the npm audit, but it's been non-straightforward to get that fixed.  From a functionality point of view, that warning can be ignored.
