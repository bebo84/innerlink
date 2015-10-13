/**
 * Created by TranPhuong on 10/12/15.
 */


'use strict';
var print = console.log;
var data = {
    'node': 'http://techmaster.vn/khoa-hoc/8229/lap-trinh-phalcon-php-2',
    'php' : 'http://techmaster.vn/khoa-hoc/25480/nodejs-truc-tuyen'
};


var string = "ngon ngu Node.js la mot ngon ngu moi. Node.js va php hoc rat thu vi Node .node nodedsfsd node node node";

function innerLink(reg, string, data)
{
    var result = string.match(reg);
    print(result);
    var numWords = result.length;
    var numChange = Math.floor((numWords * 30)/100);

//*************************
    var tabString = string.split(' ');
    var tabNode = [];
    var tabRandom = [];
    for (var i = 0; i < tabString.length; i ++)
    {
        if (tabString[i].search(reg) != -1 )
        {
            tabNode.push(i);
        }
    }
    print(tabNode);

    for (var i = 0; i < numChange; i ++)
    {
        var tmp = Math.floor(Math.random() * numWords);
        while (tabRandom.indexOf(tmp) != -1)
        {
            tmp = Math.floor(Math.random() * numWords);
        }
        tabRandom.push(tmp);
    }
    print(tabRandom);

    for (var i = 0; i < tabRandom.length; i ++)
    {
        var pos = tabString[tabNode[tabRandom[i]]].search(reg);
        var pattenr  = tabString[tabNode[tabRandom[i]]].substring(pos, pos + 4);
        tabString[tabNode[tabRandom[i]]] = tabString[tabNode[tabRandom[i]]].replace(reg, "<a href=" + data.node + ">" + pattenr + "</a>");
    }

    tabString = tabString.join(' ');
    print(tabString);
}

innerLink(/node/ig, string);

