# Deploy Heroku

- brew --version 
- If we dont' have brew. We will need downland that "Heroku CLI" [enlace en línea](https://devcenter.heroku.com/articles/heroku-cli) 

- Process [enlace en línea](https://dashboard.heroku.com/apps/san-pedro-socket-react-server/deploy/heroku-git) 
$ cd my-project/
$ git init
$ heroku git:remote -a san-pedro-socket-react-server

$ git add .
$ git commit -am "make it better"
$ git push heroku master