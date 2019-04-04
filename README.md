# :speaking_head: Peep Show Discord Bot

## Add to your server
https://discordapp.com/oauth2/authorize?&client_id=327223282489098241&scope=bot&permissions=0

## Setup
```bash
  # Mac
  brew install ffmpeg
  # Linux
  apt-get install ffmpeg


  # Then...
  git clone git@github.com:joshghent/PeepShowBot.git
  cd PeepShowBot
  npm install

  Rename `sample.env` to `.env` file and add your token like `TOKEN={ADD_YOUR_DISCORD_TOKEN}`

  npm start
```

## Build and run with Docker

To build a Docker image, run:

```bash
npm run docker-build
```

Above command will build a Docker image called `peepshowbot`.

To run the image, use the command below:

```bash
docker run -e TOKEN='your_discord_token' peepshowbot
```

## Commands
```
!jeremy <options>
!mark   <options>

  Options
    -h --help   For help
    -s --sounds List all available sounds
```
