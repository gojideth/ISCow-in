# ISCow-in
ISCow-in is a manager for cow farms. 
Made by:
  Martin Chiquillo
  Miguel Rubiano
UPTC.

How to use it?
1. Download the project.
```
git clone git@github.com:gojideth/ISCow-in.git
```
2. Setup docker DB
```
docker-compose up -d iscowin-db
#Remove also if some DB is already running
docker-compose down --volumes
```
3. Build the project
```
docker-compose build
```

4. Setup docker API
```
docker-compose up -d iscow_backend
```
5. Start frontend using [live server extension.](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
```
live-server login.html
```
6. Enjoy it!
```
http://localhost:5500/
```




