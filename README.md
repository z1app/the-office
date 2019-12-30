<p align="center">
  <img src="https://user-images.githubusercontent.com/8251208/62000501-f7d15500-b0ae-11e9-9bb7-a7e8c93174b7.png" width="75%">
</p>

<h1 align="center">The Office</h1>

<p align="center">
  <sub>
    <sup>
      <a href="/README.pt.md" align="center">[portuguese version]</a>
    </sup>
  </sub>
</p>

<p align="center">
  This project is heavily inspired at <a href="https://github.com/ResultadosDigitais/matrix">Matrix</a>
  that targets the development of a virtual presence system.
</p>

## Description

The project has been built targeting remote to comunicate easily with non remote co-workers without the need to setup a meeting room or any conference system.

Goals of the project:

- [x] Login with Google.
- [x] Full presence system.
- [x] Video chat with Jitsi.
- [x] Secure login by allowing only a couple domains to login.

### Technologies

The initial goal of the project was to try out and learn most modern techs and frameworks and avoid at all costs server management. Having this in mind the project has been built using <a href="https://svelte.dev/" target="_blank">Svelte</a>, <a href="https://jitsi.org/" target="_blank">Jitsi</a>, <a href="https://firebase.google.com/docs/database" target="_blank">Firebase Realtime Database</a>, <a href="https://firebase.google.com/docs/functions" target="_blank">Firebase Functions</a> e <a href="http://now.sh">Zeit Now</a>.

## Usage

The project is currently hosted at <a href="https://escritorio.pagar.me" target="_blank">escritorio.pagar.me</a> therefore to proceed to login you'll need a Stone.co valid domain.

### Local development

1. Clone the repo (or fork)
2. Install the dependencies with `docker-compose run install`
3. Start the development server with `docker-compose run client`
4. Copy your ip address and [setup Firebase](#Setting-up-Firebase)
5. Check which Network address is exposed on the output of the previous command, as below:

```bash
  Your application is ready~! 🚀

    - Local:      http://localhost:5000
    - Network:    http://172.23.0.2:5000
```

6. Head to the given **Network** in your browser.

#### Setting up Firebase
1. Create a new firebase project at [Firebase console](https://console.firebase.google.com/).
2. Add a new Web app to your Firebase project.
3. Copy the project credentials to [`src/services/firebase.js`](https://github.com/pagarme/the-office/blob/master/src/services/firebase.js#L5)
4. Inside your project, go to `Authentication` and then to `Configure login method`, and turn on Google auth.
5. Copy the project public name and paste it on [`src/services/firebase.js`](https://github.com/pagarme/the-office/blob/master/src/services/firebase.js#L8) on the key `projectId`.
6. Go to Database and create a new one
7. After created select the `Realtime Database` option and set up your write and read rules which can be found at [database.rules.json](https://github.com/pagarme/the-office/blob/master/database.rules.json).

and now we are done :)


## Contributors

| [<img src="https://avatars1.githubusercontent.com/u/4103305?v=3&s=115"><br><sub>@allangrds</sub>](https://github.com/allangrds) | [<img src="https://avatars1.githubusercontent.com/u/19209246?v=3&s=115"><br><sub>@jeanaugustoos</sub>](https://github.com/jeanaugustoos) | [<img src="https://avatars1.githubusercontent.com/u/8422610?v=3&s=115"><br><sub>@thor99</sub>](https://github.com/thor99) | [<img src="https://avatars1.githubusercontent.com/u/5989971?v=3&s=115"><br><sub>@MatheusVellone</sub>](https://github.com/MatheusVellone) | [<img src="https://github.com/devdrops.png" width="130px;"/><br><sub>@devdrops</sub>](https://github.com/devdrops) | [<img src="https://github.com/miglsoares.png" width="130px;"/><br><sub>@miglsoares</sub>](https://github.com/miglsoares) |
| :---: | :---: | :---: | :---: | :---: | :---: |


## Author

| [<img src="https://avatars0.githubusercontent.com/u/8251208?v=3&s=115"><br><sub>@lucianopf</sub>](https://github.com/lucianopf) |
| :---: |
