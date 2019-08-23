<p align="center">
  <img src="https://user-images.githubusercontent.com/8251208/62000501-f7d15500-b0ae-11e9-9bb7-a7e8c93174b7.png" width="75%">
</p>

<h1 align="center">Escritório Pagarme</h1>

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

The project is currently hosted at <a href="https://escritorio.pagarme.now.sh" target="_blank">escritorio.pagarme.now.sh</a> therefore to proceed to login you'll need a Stone.co valid domain.

### Local development

1. Clone the repo (or fork)
2. Install the dependencies with `docker-compose run install`
3. Start the development server with `docker-compose run client`
4. Check which Network address is exposed on the output of the previous command, as below:

```bash
  Your application is ready~! 🚀

    - Local:      http://localhost:5000
    - Network:    http://172.23.0.2:5000
```

5. Head to the given **Network** in your browser.

## Contributors

| [<img src="https://avatars1.githubusercontent.com/u/4103305?v=3&s=115"><br><sub>@allangrds</sub>](https://github.com/allangrds) | [<img src="https://avatars1.githubusercontent.com/u/19209246?v=3&s=115"><br><sub>@jeanaugustoos</sub>](https://github.com/jeanaugustoos) | [<img src="https://avatars1.githubusercontent.com/u/8422610?v=3&s=115"><br><sub>@thor99</sub>](https://github.com/thor99) | [<img src="https://avatars1.githubusercontent.com/u/5989971?v=3&s=115"><br><sub>@MatheusVellone</sub>](https://github.com/MatheusVellone) |
| :---: | :---: | :---: | :---: |


## Author

| [<img src="https://avatars0.githubusercontent.com/u/8251208?v=3&s=115"><br><sub>@lucianopf</sub>](https://github.com/lucianopf) |
| :---: |
