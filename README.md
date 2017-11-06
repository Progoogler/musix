# music-app

> Smart music sheets for smart musicians.

## Architecture

This application's design was inspired by Uncle Bob's ideas on "[Clean Architecture](https://8thlight.com/blog/uncle-bob/2012/08/13/the-clean-architecture.html)" and Retro Mocha's [example](https://github.com/RetroMocha/obvious_status). It's a different apparoach from the traditional MVC. The business logic and the data persistence are separated into separate folders. The app folder contains your business rules and entities, which would be the M in the MVC pattern. The external folder contains your data persistence layer - ORM's, API's, caching, queues. The delivery folder is where the VC in MVC would live. That is where you find express. Each delivery mechanism is responsible for integrating together app actions and jacks to make the system do things.

## App delivery

For instructions on delivering the app through Express go [here](https://github.com/bitwhiz/musix/blob/get-song-api/delivery/express_app/README.md).
