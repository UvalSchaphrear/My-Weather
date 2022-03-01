export const utilService = {
    makeId,
    makeLorem,
    getRandomIntInclusive,
    getDay,
    getDate
}

function makeId(length = 6) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return txt;
}

function makeLorem(size = 1) {
    var words = ['Animal puzzle', 'Action figure', 'Remote control car', 'Drone', 'Backgammon', 'Monopoly', 'Yaniv', 'Taki', '', 'All', 'this happened', 'more or less', '.', 'I', 'had', 'the story', 'bit by ppens'];
    var txt = '';
    while (size > 0) {
        size--;
        txt += words[Math.floor(Math.random() * words.length)] + ' ';
    }
    return txt;
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

function getDay(timestamp) {
    var a = new Date(timestamp * 1000);
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var dayOfWeek = days[a.getDay()]
    return dayOfWeek.slice(0, 3)
}

function getDate(timestamp) {
    // console.log(timestamp);
    var rawDate = new Date(timestamp * 1000)
    var date = (rawDate.getDate() > 10 ? rawDate.getDate() : '0' + rawDate.getDate()) + '/' + ((rawDate.getMonth() + 1) > 10 ? (rawDate.getMonth() + 1) : '0' + (rawDate.getMonth() + 1)) + '/' + rawDate.getFullYear()
    // console.log(date)
    return date
}


