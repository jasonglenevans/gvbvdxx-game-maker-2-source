const {BrowserWindow,app,dialog,Menu,shell} = require("electron");
const nodefetch = require('node-fetch');
var fs = require("fs");
var opendevtools = false;
try{
	//var jsonobject = JSON.prase(fs.readFileSync("./dev.json",{ecoding:"UTF-8"}));
	//opendevtools = jsonobject.opendevtools;
}catch(e){}
function checkResponseStatus(res) {
    if(res.ok){
        return res
    } else {
        throw new Error(`The HTTP status of the reponse: ${res.status} (${res.statusText})`);
    }
}
function checkforupdates(json,windo) {
	if (!(json.version == app.getVersion())) {
		var selected = dialog.showMessageBoxSync(windo,{
			message:"we have checked and there is an new update! do you want to update?",
			buttons:[
				"yes",
				"no"
			],
			title:"New update!"
		});
		if (selected == 0) {
			createWindowWebView(json.url);
			windo.close();
		}
	}
}
Menu.setApplicationMenu(Menu.buildFromTemplate([
]));
const createWindow = () => {
	const win = new BrowserWindow({
		width: 1000,
		height: 800,
		webPreferences: {
			spellcheck: false
		},
		title:"Gvbvdxx Game Maker 2",
		icon:"./icon.png"
	})
	win.loadFile('editor/index.html');
	win.on('show', () => {
	  setTimeout(() => {
		win.focus();
	  }, 200);
	});
	nodefetch('https://jasonglenevans.github.io/gvbvdxx-update/gvbvdxx-game-maker-2.json')
		.then(checkResponseStatus)
		.then(res => res.json())
		.then(json => checkforupdates(json,win))
		.catch(err => console.log(err));	
	if (opendevtools) {
		win.openDevTools();
	}
}
const createWindowWebView = (url) => {
	const win = new BrowserWindow({
		width: 1000,
		height: 800,
		webPreferences: {
			spellcheck: true
		},
		title:"Web viewer",
		icon:"./icon.png"
	})
	win.loadURL(url);
	win.on('show', () => {
	  setTimeout(() => {
		win.focus();
	  }, 200);
	});

}
app.whenReady().then(() => {createWindow()});