"use strict";

var playList = [
    {
        author: "LED ZEPPELIN",
        song:"STAIRWAY TO HEAVEN"
    },
    {
        author: "QUEEN",
        song:"BOHEMIAN RHAPSODY"
    },
    {
        author: "LYNYRD SKYNYRD",
        song:"FREE BIRD"
    },
    {
        author: "DEEP PURPLE",
        song:"SMOKE ON THE WATER"
    },
    {
        author: "JIMI HENDRIX",
        song:"ALL ALONG THE WATCHTOWER"
    },
    {
        author: "AC/DC",
        song:"BACK IN BLACK"
    },
    {
        author: "QUEEN",
        song:"WE WILL ROCK YOU"
    },
    {
        author: "METALLICA",
        song:"ENTER SANDMAN"
    },
    {
        author: "PINK FLOYD",
        song:"THE WALL"
    }
];

function getLowReg(song) {
    var result = '';
    var arrSong = song.split(' ');
    for(var i = 0; i < arrSong.length; i++){
        result = result + ' ' + arrSong[i][0].toUpperCase() + arrSong[i].substring(1).toLowerCase();
    }
    return result;
}

function getPlaylist() {
    var ulElem = document.createElement('ol');
    for (var i = 0; i < playList.length; i++) {
        var liElem = document.createElement('li');
        liElem.innerHTML = '<b>' + playList[i].author + '</b>' + ' - ' + '<i>' + `"${getLowReg(playList[i].song)} "` + '</i>';
        liElem = ulElem.appendChild(liElem);
    }
    document.body.appendChild(ulElem);
}

getPlaylist();