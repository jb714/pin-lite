
Thanks for visiting the 'Pequeño'/Pin-Lite repo, a small (pequeño) mirror of Pinterest.

To get started, please stay at this level of the directory and run `npm install` to install dependencies.

Afterwards, please initiate the backend repo (`npm install` there/run the server, listening on Port 8080 in development) at 'Pequeño-backend' in the directory containing this 'Pequeño-client' project.

Once the server is running and serving the JSON file, you can run `npm start` her to get the client up and running (operates via react-scripts start in package.json).

Please note that the default Port for development is 3000.

The API call made in the './Services/.pinsService.js' file calls the '/allPins' endpoint at Port 8080.


Other Notes:

In building this project, I had to rollback from React/React Dom v 16 to v 15.6.2 so that my modals would work :). The good folks at react-bootstrap are working on portals to get modals up and running on v 16.

I used `React-Stack-Grid` to partition the layout for the time being. It has the design layout I wanted (similar to Pinterest's) but I discovered the drawing/repainting animation engine (and the image/button overlays) can be a bit wobbly/lags every once in a while. Would definitely appreciate feedback on this.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).


--Justin
