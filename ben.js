#!/usr/bin/env node
const os = require("os");
const readline = require("readline");
const {spawnSync, execSync} = require('child_process');
const fs = require("fs");
const axios = require("axios");
const qs = require('qs');
const { table } = require("table");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

q = console.log;

const version = "1.3";

const series = ["Ben 10 Classic","Ben 10 Alien Force","Ben 10 Ultimate Alien","Ben 10 Omniverse"];
const series_list = ["","-alien-force","-ultimate-alien","-omniverse"];

let homePage = "ben 10 tube v"+version+"\n";

//defaults
var lang = '0'; //default language
let default_video_player = 'browser';
const supported_players = ['browser','vlc','totem'];

const dir = __dirname+"/"

try {
    if(fs.existsSync(dir+"player")) {
        let data = fs.readFileSync(dir+"player",{encoding: "utf-8"});
        if(isnum(data,0,supported_players.length)) { //get default player
            default_video_player = supported_players[Number(data)];
        } else {
            fs.writeFileSync(dir+'player','0','utf-8');
        }
    } else {
        fs.writeFileSync(dir+'player','0','utf-8');
    }
}
catch (error) {
    q(error);
    err(9);
}

if(process.argv[2] === "-l" && (process.argv[3] === '0' || process.argv[3] === '1')) { //set default language
    lang = process.argv[3];
}

let omnitrix = `
 ┌───          \\                 /                                                ────┐ 
 ││             \\    xxxxxxxxx   --                                                   │ 
 ││               xxxx    xxxxxx             ┬┬┬┬┬┬┬┬┬┬                               │ 
 ││              xx       xxxxxxx                ┬               ┬                      
 ││        ─    xx        xxxxxxxx               ┬               ┬                      
 ││      ───   xxxxxxxxx         x               ┬        ┬┬  ┬┬ ┬┬ ┬┬  ┬┬┬┬            
 ││            xxxxxxxxxx        x  ──           ┬┬┬┬┬┬┬┬ ┬┬┬┬┬┬ ┬┬┬┬┬  ┬┬┬┬┬┬┬┬        
 │││           xxxxxxxxx        xx                                                    │ 
 │││         ,  xxxxxxxx       xx              +┬┬┬┬┬┬┬┬┬┬┬┬┬┬┬┬┬┬┬┬┬┬┬┬┬┬┬┬┬┬┬+      │ 
 │││             xxxxxxxx   xxxx  ,            +┴┴┴┴┴┴┴┴┴┴┴┴┴┴┴┴┴┴┴┴┴┴┴┴┴┴┴┴┴┴┴+      │ 
 │││││             xxxxxxxxxxx    \\                                                   │ 
 └─────── ─     /-                                                            ────────┘ 
────────────────────────────────────────────────────────────────────────────────────────`
homePage+=green(omnitrix)+"\n"

for(let i=0;i<series.length;i++) {
    homePage+=`${green(`[${i}]`)} ${series[i]} \n`;
}

q(homePage);

function green(x) {
    return '\x1b[32m'+x+'\x1b[0m';
}

function blue(x) {
    return '\x1b[34m'+x+'\x1b[0m'
}

function rand(x,y) {
    if(y==undefined) return Math.floor(Math.random()*x);
    else {
        return x+Math.floor(Math.random()*(y-x+1));
    }
}

function randEl(array) {
    return array[rand(array.length)];
}

///////////all get link with http functions:


gets = (url,lang=0,func = url => console.log(url)) => {

  //getbid

const headers = {
  'Host': 'sezonlukdizi6.com',
  'Cookie': '_ga=GA1.1.398603303.1740085780; alternatif=PLUS; _ga_EF38VP58JD=GS1.1.1740085780.1.1.1740094168.60.0.0',
  'Sec-Ch-Ua': '"Chromium";v="133", "Not(A:Brand";v="99"',
  'Sec-Ch-Ua-Mobile': '?0',
  'Sec-Ch-Ua-Platform': '"Linux"',
  'Accept-Language': 'en-US,en;q=0.9',
  'Upgrade-Insecure-Requests': '1',
  'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
  'Sec-Fetch-Site': 'none',
  'Sec-Fetch-Mode': 'navigate',
  'Sec-Fetch-User': '?1',
  'Sec-Fetch-Dest': 'document',
  'Accept-Encoding': 'gzip, deflate, br',
  'Priority': 'u=0, i'
};

axios.get(url, { headers })
  .then(res => {
    var data = res.data;
    var bid = data.split('bid="')[1].split('"')[0];
    getid(url,bid,lang,func);
  })
  .catch(error => {
    console.error('Error:', error);
  });

}

getid = (url0,bid,lang,func) => {
    
const url = 'https://sezonlukdizi6.com/ajax/dataAlternatif22.asp';
const data = qs.stringify({
  bid: bid,
  dil: lang
});

const headers = {
  'Host': 'sezonlukdizi6.com',
  'Cookie': '_ga=GA1.1.398603303.1740085780; alternatif=PLUS; ASPSESSIONIDCQAQSDDC=LLHEIPLDOEJJGDBBCNDIABCK; _ga_EF38VP58JD=GS1.1.1740085780.1.1.1740094409.60.0.0',
  'Content-Length': data.length,
  'Sec-Ch-Ua-Platform': '"Linux"',
  'Accept-Language': 'en-US,en;q=0.9',
  'Sec-Ch-Ua': '"Chromium";v="133", "Not(A:Brand";v="99"',
  'Sec-Ch-Ua-Mobile': '?0',
  'X-Requested-With': 'XMLHttpRequest',
  'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
  'Accept': 'application/json, text/javascript, */*; q=0.01',
  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  'Origin': 'https://sezonlukdizi6.com',
  'Sec-Fetch-Site': 'same-origin',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Dest': 'empty',
  'Referer': url0,
  'Accept-Encoding': 'gzip, deflate, br',
  'Priority': 'u=1, i'
};

axios.post(url, data, { headers })
  .then(res => {
    if(res.data.status=='success') {
    let streams = res.data.data;

    for(let i=0;i<streams.length;i++) {
        if(streams[i].baslik=="PLUS") {
            let id = streams[i].id;
            getlink(url0,id,func);
        }
    }
   } else console.log("cant get id")

  })
  .catch(error => {
    console.error('Error:', error);
  });
}

getlink = (url0,id,func) => {
    const url = 'https://sezonlukdizi6.com/ajax/dataEmbed22.asp';
    const data = qs.stringify({
        id: id
    });

const headers = {
  'Host': 'sezonlukdizi6.com',
  'Cookie': '_ga=GA1.1.398603303.1740085780; alternatif=PLUS; ASPSESSIONIDCQAQSDDC=LLHEIPLDOEJJGDBBCNDIABCK; _ga_EF38VP58JD=GS1.1.1740085780.1.1.1740094409.60.0.0',
  'Content-Length': data.length,
  'Sec-Ch-Ua-Platform': '"Linux"',
  'Accept-Language': 'en-US,en;q=0.9',
  'Sec-Ch-Ua': '"Chromium";v="133", "Not(A:Brand";v="99"',
  'Sec-Ch-Ua-Mobile': '?0',
  'X-Requested-With': 'XMLHttpRequest',
  'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
  'Accept': '*/*',
  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  'Origin': 'https://sezonlukdizi6.com',
  'Sec-Fetch-Site': 'same-origin',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Dest': 'empty',
  'Referer': url0,
  'Accept-Encoding': 'gzip, deflate, br',
  'Priority': 'u=1, i'
};

axios.post(url, data, { headers })
  .then(res => {
    let data = res.data;

    let src0 = data.split('src="')[1].split('" ')[0];
    src0 = src0.split("&v=")[1]
    src0 = src0.replaceAll("\\x",'');

    let buff = Buffer.from(src0,"hex"); //decode url
    let src = buff.toString("utf-8");
    func(src)
    
  })
  .catch(error => {
    console.error('Error:', error);
  });
}

/////enden http get functions

function isnum(num,x1,x2) {
    if(num!=="" && Number.isInteger(Number(num)) && x1<=Number(num) && Number(num)<=x2) return true;
    else return false;
}

get_series_data = (sn,after) => {

    let url = "https://sezonlukdizi6.com/bolumler/ben-10"+series_list[sn]+".html";
    let seasons = [];

    axios.get(url,{responseType: 'arraybuffer'})
    .then(res => {
        
        let raw = new TextDecoder('windows-1254').decode(res.data);

        let trEl = raw.split("<tr>"); //start at 2
        let seasonN = 1;
        let seasonSeries = [];
        
        for(let i=2;i<trEl.length;i++) {

            let block = trEl[i]; //raw html block of this part

            if(block.search('href=')!==-1) { //here is a part source
           
            let table = block.split("<td>");

            let seasonName = table[1].split("</td>")[0];
            let link = table[2].split("href='")[1].split("'>")[0];
            let partNumber = table[2].split(".html'>")[1].split("</a>")[0];
            let partName = table[3].split(".html'>")[1].split("</a>")[0];
            let partDate = table[3].split('aligned">')[1].split("</td>")[0];

            let part = {
                seasonName: seasonName,
                link: link,
                partNumber: partNumber,
                partName: partName,
                partDate: partDate
            }
                seasonSeries.push(part);
                if(i==trEl.length-1) seasons.push(seasonSeries);
            } else {
                seasons.push(seasonSeries);
                seasonSeries = [];
            }
        }

        let series_data = seasons;

        if(after==undefined) {
            for(let i=1;i<series_data.length+1;i++) {
                q(green(" (►◄) ")+i);
            }
            choose(sn,series_data);
        }
        else after(series_data);
        

    })

}

go_video_page = (series_no,season_no,part_no) => {
    let info = {series_no: series_no,season_no: season_no, part_no: part_no};
    if(isnum(series_no,0,series.length-1)) {
        get_series_data(series_no,(series_data)=>{
            let suit = false;
            if(isnum(season_no,1,series_data.length)) {
                var seasonData = series_data[season_no-1];
                if(isnum(part_no,1,seasonData.length)) {
                    suit = true;
                    let part = seasonData[part_no-1];
                    let partTable = [[green("(►◄)"),part.seasonName,part.partNumber,part.partName,part.partDate]];
                    q(table(partTable,{drawVerticalLine: (lineIndex, columnCount) => {return lineIndex === 0 || lineIndex === columnCount;}}));
                    startVideo(part,()=>{choose2(season_no,series_data,series_no)},info);
                }
            }
            if(!suit) {err(4);main()};
        })
    } else {
        err(4);main();
    }
}

look = (query,rule) => { //a function for check input
    let params = query.trim().split(' ');
    let params0 = rule.trim().split(' ');
    let values = [];

    if(params.length == params0.length) {
        let suit = true;

        for(let i=0;i<params.length;i++) {
            let param = params[i];

            if(params0[i].search("/")!==-1) {
                let param0s = params0[i].split("/");

                let include = false;
                for(let j=0;j<param0s.length;j++) {
                    if(param0s[j]==param) {
                        include = true;
                        break;
                    }
                }
                if(!include) {
                    return false;
                    break;
                }
            } else if(param !== params0[i]){
                //one element
                if(params0[i]=="<number>" || params0[i] == "<string>") {
                    if(params0[i]=="<number>") values.push(Number(params[i]));
                    if(params0[i]=="<string>") values.push(params[i]);
                } else {
                    return false;
                    break;
                }
            }
        }
    } else return false;

    if(values.length>0) {
        if(values.length == 1) return values[0];
        else return values;
    }
    else return true
}

main = () => {
    rl.question(green("choose series: "),(sn)=>{
        if(isnum(sn,0,series.length-1)) {
            get_series_data(Number(sn));
        } else 
        if(sn.split("go")[0]=="" && sn.trim().split(" ").length==4) { //go sn ssn pn
            let params = sn.split(' ');
            go_video_page(params[1],params[2],params[3]);
        } else

        if(sn.trim() === "fav") {
            show_favorites(()=>{
                main();
            });
        } else

        if(sn.trim().split(' ')[0] === "gofav" && sn.trim().split(' ').length == 2) {
            go_favorite(Number(sn.trim().split(' ')[1]),()=>{main()});
        } else

        if(look(sn,"del/delete fav/favorite <number>") !== false) {
            let n = look(sn,"del/delete fav/favorite <number>");
            delete_favorite(n);
            main();
        } else

        if(look(sn,"add fav/favorite <number> <number> <number>") !== false) {
            let nums = look(sn,"add fav/favorite <number> <number> <number>");
            let info = {series_no: nums[0],season_no: nums[1],part_no: nums[2]};
            add_favorite(info);
            main();
        } else

        if(sn.trim() === "rand") {
            let series_no = rand(4);
            get_series_data(series_no,(series_data)=>{
                let season_no = rand(series_data.length)+1;
                let part_no = rand(series_data[season_no-1].length)+1;
                let info = {series_no: series_no,season_no: season_no, part_no: part_no};
                let part = series_data[season_no-1][part_no-1];
                let partTable = [[green("(►◄)"),blue(series[series_no]),part.seasonName,part.partNumber,part.partName,part.partDate]];
                q(table(partTable,{drawVerticalLine: (lineIndex, columnCount) => {return lineIndex === 0 || lineIndex === columnCount;}}));
                startVideo(part,()=>{choose2(season_no,series_data,series_no)},info);
            })
        } else
        if(sn === "exit" || sn === "e") {
            q("closed..")
            process.exit();
        } else
        {
            err(0);
            main();
        }
    })
}

choose = (sn,series_data) => {
    rl.question(green(series[sn]+":Season>"),(query) => {

        if(query === "list" || query === "ls" || query === "l") {
            for(let i=1;i<series_data.length+1;i++) {
                q(green(" (►◄) ")+i);
            }
            choose(sn,series_data);
        } else 
        if(isnum(query,1,series_data.length)) { 
            choose2(query,series_data,sn)
        } else 
        
        if(query.trim() == "..") {
            main();
        } else

        if(query === "exit" || query === "e") {
            q("closed..")
            process.exit();
        } else
        
        {
            err(1);
            choose(sn,series_data);
        }

    })
}

choose2 = (seasonNum,series_data,sn) => { //func for choose par
    var seasonData = series_data[seasonNum-1];
    rl.question(green(series[sn]+":Season>"+seasonNum+">Part>"),(query) => {

        if(query === "list" || query === "ls" || query === "l") {

            let partTable = [[" ",green("Season"),green("Partno"),green("Part"),green("Date")]];
            
            for(let i=0;i<seasonData.length;i++) {
                let part = seasonData[i];
                partTable.push([green("(►◄)"),part.seasonName,part.partNumber,part.partName,part.partDate])
            }

            q(table(partTable,{singleLine: true}));

           choose2(seasonNum,series_data,sn);
        } else 

        if(isnum(query,1,seasonData.length)) { 

            let part = seasonData[query-1];
            part_info(part);

            startVideo(part,()=>{choose2(seasonNum,series_data,sn)},{series_no: sn,season_no: seasonNum,part_no: query})

        } else 

        if(query.trim() === "..") {
            choose(sn,series_data);
        } else

        if(query === "exit" || query === "e") {
            exit();
        } else 
        {
            err(2);
            choose2(seasonNum,series_data,sn);
        }
        
    })
}

part_info = (part) => {
    let partTable = [[green("(►◄)"),part.seasonName,part.partNumber,part.partName,part.partDate]];
    q(table(partTable,{drawVerticalLine: (lineIndex, columnCount) => {return lineIndex === 0 || lineIndex === columnCount;}}));
}

show_supported_players = () => {
    for(let i=0;i<supported_players.length;i++) {
        q(" "+supported_players[i]);
    }
}

startVideo = (part,back,info) => {
    rl.question(blue("watch? >"),(query)=>{
        if(query == "") { //pressed enter
            //start the video
            let link = part.link
            let url = "https://sezonlukdizi6.com"+link;

            gets(url,lang,(streamUrl)=>{
                    try {
                        start_video_player(streamUrl,info,part);
                        startVideo(part,back,info);
                    }
                    catch (error) {
                        q(err)
                    }
            });

        } else
        if(query.trim() === "lang") {
            let lang_type;
            if(lang === '0') lang_type = "Turkish";
            else if(lang === '1') lang_type = "English";
            q("current language is "+lang_type+" ("+lang+")");
            startVideo(part,back,info);
        } else
        if(query.trim() === "lang 0") { 
            lang = '0';
            q("language was assigned to Turkish (0)");
            startVideo(part,back,info);
        } else 
        if(query.trim() === "lang 1") {
            lang = '1';
            q("language was assigned to English (1)");
            startVideo(part,back,info);
        } else
        if(query.trim().split(' ')[0] === "set") {
            if(query.trim().split(' ')[1] === "player") {
                let player = query.trim().split(' ')[2]

                if(supported_players.includes(player)) {
                    default_video_player = player;
                    try{
                        fs.writeFileSync(dir+'player',supported_players.indexOf(default_video_player).toString(),'utf-8');
                    }
                    catch(error){
                        q(error);
                        err(9);
                    }

                    q("video player successfully changed to "+player);
                } else err(5);
            }
            startVideo(part,back,info)
        } else

        if(query.trim().split() === "add favorite" || query.trim() === "add fav") {
            add_favorite(info);
            startVideo(part,back,info);
        } else

        if(query.trim() === "delete favorite" || query.trim() === "del fav") {
            delete_favorite(info);
            startVideo(part,back,info);
        } else

        if(query.trim() === "fav") {
            show_favorites(()=>{
                startVideo(part,back,info);
            });
        } else

        if(query.trim() === "info") {
            part_info(part);
            startVideo(part,back,info)
        } else
        if(query.trim() ==="..") {
            back();
        } else
        if(query.trim() ==="...") {
            main();
        } else
        if(query === "exit" || query === "e") {
            exit();
        } else 
        {
            err(3);
            startVideo(part,back,info);
        }
            
    })
        
}

start_video_player = (url,info,part) => {
    let platform = os.platform();
    if(platform == "android" && default_video_player == 'vlc') {
        spawnSync('am', ['start', '-n', 'org.videolan.vlc/org.videolan.vlc.gui.video.VideoPlayerActivity', '-d', url], { stdio: 'inherit' });
    } else 
    if(platform == 'win32' && default_video_player == 'vlc') {
        spawnSync("cmd.exe",['/c','C:\\Program Files\\VideoLAN\\VLC\\vlc.exe',url],{stdio: 'inherit'})
    } else 
    if(default_video_player == "browser") {
        let svg_icons = "ben10.svg ben-10-alien-force.svg ben-10-ultimate-alien.png ben-10-omniverse.svg".split(' ');
        
        try {
            let html_file_path = dir+"html/";
            let html = fs.readFileSync(html_file_path+'b.html',{encoding: 'utf-8'});
            let icon_type = "image/png";
            if(info.series_no>0) {
                let svg_width = 200;
                let svg_height = 200;
                let svgh_width = 230; //hover
                let svgh_height = 230;

                if(info.series_no == 2 || info.series_no == 1) {
                    svg_width = 70;
                    svg_height = 70;
                    svgh_width = 80;
                    svgh_height = 80;
                } else

                if(info.series_no == 3) {
                    svg_width = 100;
                    svg_height = 100;
                    svgh_width = 120;
                    svgh_height = 120;
                }

                if(info.series_no == 2) icon_type = "image/svg+xml";

                
                html = html.replace(`background: url("ben10.svg") no-repeat center;width: 50px;height: 50px;`,`background: url("${svg_icons[info.series_no]}") no-repeat center;width: ${svg_width}px;height: ${svg_height}px;`)
                html = html.replace(`transition: .5s;width: 55px;height: 55px;`,`transition: .5s;width: ${svgh_width}px;height: ${svgh_height}px;`)
            } 

            html = html.replace(`<title>ben tube</title>`,`<title>${part.partName}</title>`);
            html = html.replace("ICON",`<link rel="icon" type="${icon_type}" href="${svg_icons[info.series_no]}">`)
            html = html.replaceAll('VIDEO_SOURCE',url);

            fs.writeFileSync(html_file_path+'open.html',html,'utf8');

            if(os.platform()=="win32") {
                spawnSync("cmd.exe", ["/c", "start", "", html_file_path+"open.html"], { stdio: "inherit" });
            } else
            spawnSync('xdg-open',[html_file_path+"open.html"]);
        }

        catch (error) {
            q(error);
            err(8);
        }
        
    } else {
        spawnSync(default_video_player,[url]);
    }
}

add_favorite = (info) => {
    try {
        fs.appendFileSync(dir+"fav",info.series_no+" "+info.season_no+" "+info.part_no+"\n",);
        q("added favorites");
    }
    catch(error) {
        q(err);
    }
}

delete_favorite = (info) => {
    try{
        let favdata = fs.readFileSync(dir+"fav","utf-8");
        let favdata_new = "";

        let favs = favdata.split('\n');

        if(typeof info === "object") var fav0 = info.series_no+" "+info.season_no+" "+info.part_no; //unreal fav

        
        let found = false;

        for(let i=0;i<favs.length-1;i++) {
            let fav = favs[i];

            if(typeof info === "object") {
                if(fav === fav0) {
                    found = true;
                } else favdata_new+=fav+"\n";
            } else 
            if(typeof info === "number") {
                if(i==(info-1).toString()) {
                    found = true;
                } else favdata_new+=fav+"\n";
            }
        }

        if(found) {
            fs.writeFileSync(dir+"fav",favdata_new,'utf-8');
        } else err(7);
    }

    catch(error) {
        err(6);
    }
}

show_favorites = (after) => {
    try{
        let favdata = fs.readFileSync(dir+"fav","utf-8");
        let favs = favdata.split('\n');
        let series_datas = [];

        if(favs.length > 1) {

        get_series_data(0,(series_data0)=>{ //get sync series data
            get_series_data(1,(series_data1)=>{
                get_series_data(2,(series_data2)=>{
                    get_series_data(3,(series_data3)=>{
                        series_datas = [series_data0,series_data1,series_data2,series_data3];

                        let partTable = [[" ",green("Series"),green("Season"),green("Partno"),green("Part"),green("Date")]];
                        for(let i=0;i<favs.length-1;i++) {
                            let fav = favs[i];
                            let info = {series_no: Number(fav.split(' ')[0]),season_no: Number(fav.split(' ')[1]),part_no: Number(fav.split(' ')[2])};
                            let series_data = series_datas[info.series_no];
                            let part = series_data[info.season_no-1][info.part_no-1];
                            partTable.push([green("(►◄)"),blue(series[info.series_no]),part.seasonName,part.partNumber,part.partName,part.partDate])
                        }
                        q(table(partTable,{singleLine: true}));
                        after();
                    })
                })
            })
        })

    } else {
        err(6);
        after();
    }

    }
    catch (error) {
       err(6)
       after();
    }
}

go_favorite = (n,back) => {
    try{
        let favdata = fs.readFileSync(dir+"fav","utf-8");

        let favs = favdata.split('\n');
        let found = false;

        for(let i=0;i<favs.length-1;i++) {
            let fav = favs[i];
            if(i==n-1) {
                found = true;
                let info = {series_no: Number(fav.split(' ')[0]),season_no: Number(fav.split(' ')[1]),part_no: Number(fav.split(' ')[2])};
                go_video_page(info.series_no,info.season_no,info.part_no);
            }
        }

        if(!found) {
            err(7);
            back();
        } 
    }

    catch(error) {
        err(6);
        back();
    }
}

function err(type,param) {
    if(type===0) {
        q("you can choose only 0,1,2,3");
        main();
    } else
    if(type===1) {
        q("season not found, type: list");
    } else
    if(type===2) {
        q("part not found, type: list");
    } else 
    if(type===3) {
        q("press enter or ..");
    } else
    if(type===4) {
        q("go: episode not found")
    } else 
    if(type===5) {
        q("sorry, your video player is not supported, all supported video players are:");
        show_supported_players();
    } else
    if(type===6) {
        q("no favorite found")
    } else
    if(type===7) {
        q("this epsiode is not favorited")
    } else 
    if(type===8) {
        q("cannot access the 'b.html' file. did you remove it? or have right permissions?")
    } else 
    if(type===9) {
        q("error: missing configuration file: player, do you have the correct permissions to write or read files?")
    } else
    if(type===10) {
        q("can not acces the working directory")
        q("Do you have right permissions?")
        q("FATTAL ERROR");
        exit();
    }
}

exit = () => {
    q("closed..")
    process.exit();
}


main();