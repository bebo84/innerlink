/**
 * Created by PHUONG on 10/12/2015.
 */

var print = console.log;

var data = {
    'node': 'http://techmaster.vn/khoa-hoc/8229/lap-trinh-phalcon-php-2',
    'php' : 'http://techmaster.vn/khoa-hoc/25480/nodejs-truc-tuyen'
};

String.prototype.changeString = function(pos, charChange, diChuyen) {
    if(pos > this.length - 1){
        return this.toString();
    } else {
        return this.substr(0, pos) + charChange + this.substr(pos + diChuyen.length);
    }
};

//var string  = "an nodeo di";
//string = string.changeString(3, '****fgfgfg**', 'node');
//print(string);

var string = "ngon ngu node.js, so voi php node co node tam node anh node em node co ai node bau troi node huong rat lon node.js defsedfs node.js";

function searchPos(reg, string)
/*
 Dùng ?? tìm v? trí (index) c?a 30% t?t c? các t? có ch?a 'reg' trong chu?i string
 Có random v? trí tr? v?
 K?t qu? tr? v?: 1 array

 */

{
    var tabPos = [];
    var tmp = string.search(reg);
    var doThuoc = 0;
    print(tmp);
    print(string);

    while (tmp != -1)
    {
        tmp += doThuoc;
        tabPos.push(tmp);
        doThuoc = tmp + 5;
        var tmpString = string.substring(doThuoc, string.length);
        print(tmpString);
        tmp = tmpString.search(reg);
        print(tmp);
    }

    print(tabPos);
    return tabPos;
} // fin searchPos

var tabPos = searchPos(/node/i, string);

//RANDOM
var tabRandom = [];

var numWords = tabPos.length;
var numChange = Math.floor( (numWords * 30)/100);
print('numChange :' + numChange);

for (var i = 0; i < numChange; i ++)
{
    var tmp = Math.floor(Math.random() * numWords);
    print('tmp1: ' + tmp);
    while ( tabRandom.indexOf(tmp) != -1)
    {
        tmp = Math.floor(Math.random() * numWords);
        print('tmp2: ' + tmp);
    }
    tabRandom.push(tmp);
    print(tabRandom);
}
print(tabRandom);

var tabChangePos = [];
for (var i = 0; i < numChange; i ++)
{
    tabChangePos.push(tabPos[tabRandom[i]]);
}

print(tabChangePos);

var tabPatterns = [];

for (var j = 0; j < tabChangePos.length; j ++)
{
    var pattern = string.substring( tabChangePos[j], tabChangePos[j] + 4);
    tabPatterns.push(pattern);
    string = string.changeString( tabChangePos[j], '****', 'node' );
}

print(string);
print(tabPatterns);

var result = string.replace(/\*\*\*\*/ig, "<a href='" + data.node + "'>" + pattern + "</a>");
print(result);