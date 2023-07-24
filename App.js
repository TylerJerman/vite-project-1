// import all packages
import express from "express";
import morgan from 'morgan';
import ViteExpress from 'vite-express';
import characterList from "./src/utils/characterData";
// set up app instance
const app = express()
// define port
const port = 5173
let newId = 4;
// set up middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));
ViteExpress.config({printViteDevServerHost: true});
// Routes go here

app.get('/api/cards', (req, res) => {
  res.json(characterList)
});
app.post('/api/cards', (req, res) => {
  const {description} = req.body;
  const newCard = {
    id: myId,
    name: '',
    stats: '',
    imgUrl: '',
    isEditing: true
  }
  characterList.push(newCard)
  myId += 1;
  res.json(newCard)
});

app.post('/api/cards/delete/:id', (req, res) => {
  const{id} = req.params
  const index = characterList.findIndex((el) => el.id === +id);
  if(index === -1) {
    res.status(404).json({error: `Item with ID ${id} was not found`})
  } else {
    characterList.splice(index, 1)
    res.json({id: +id})
  }
});

app.post('/api/cards/:id', (req, res) => {
  const {id} = req.params
  const {name, stats, imgUrl} = req.body
  const index = characterList.findIndex((el) => el.id === +id)
  const item = characterList[index]
 if(name){
  item.name = name ?? item.name
 }
 if(stats){
  item.stats = stats ?? item.stats
 }
 if(imgUrl){
  item.imgUrl = imgUrl ?? item.imgUrl
 }
 res.json(item)
});

// open up our server
ViteExpress.listen(app, port, () => console.log(`All the homies meeting at http:/localhost:${port}`));