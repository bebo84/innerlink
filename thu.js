/**
 * Created by TranPhuong on 10/12/15.
 */


'use strict';
var print = console.log;
var data = {
    'node': 'http://techmaster.vn/khoa-hoc/8229/lap-trinh-phalcon-php-2',
    'php' : 'http://techmaster.vn/khoa-hoc/25480/nodejs-truc-tuyen'
};

var tab = [];

var string = "ngon ngu Node.js la mot ngon ngu moi. Node.js va php hoc rat thu vi Node node nodedsfsd node node node";

var i = string.search(/node/ig);
print("i: " + i);



var result = string.match(/node/gi);
print(result);
var numWords = result.length;
var numChange = Math.floor((numWords * 30)/100);

print(numChange);

//RANDOM



var newString = string.replace(/node/gi, "<a href=" + data.node + ">Node</a>");
print(newString);

//*************************
var tabString = string.split(' ');
var tabNode = [];
var tabRandom = [];
for (var i = 0; i < tabString.length; i ++)
{
    if (tabString[i].search(/node/i) != -1 )
    {
        tabNode.push(i);
    }
}
print(tabNode);

for (var i = 0; i < numChange; i ++)
{
    var tmp = Math.floor(Math.random() * numWords);
    while (tmp in tabRandom)
    {
        tmp = Math.floor(Math.random() * numWords);
    }
    tabRandom.push(tmp);
}
print(tabRandom);

for (var i = 0; i < tabRandom.length; i ++)
{

    tabString[tabNode[tabRandom[i]]] = tabString[tabNode[tabRandom[i]]].replace(/node/i, "<a href=" + data.node + ">Node</a>");
}

tabString = tabString.join(' ');
print(tabString);