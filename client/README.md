Favorite Places
### TO get this app running clone or fork this repository

git@github.com:shay2442/favorite-places.git

### Then run the following commands in the terminal 
bundle install
rails db:create
npm install --prefix client

### Make sure to migrate and seed the data, bu running
rails db:migrate
rails db:seed

### Now you are able to start the servers 
The frontend is setup to run on PORT 4000 at localhost:4000
`npm start --prefix client`

The backend is setup to run on http://localhost:3000
`rails s`



