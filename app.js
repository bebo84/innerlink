/**
 * Created by PHUONG on 10/20/2015.
 */

//DA TEST
var pr = console.log;



var data = {
    'node': 'http://techmaster.vn/khoa-hoc/8229/lap-trinh-phalcon-php-2',
    'php' : 'http://techmaster.vn/khoa-hoc/25480/nodejs-truc-tuyen'
};

function changeWords (regrex, string, data, percentage)
{
    var tabTheA = [];  //array chua cac chuoi <a... /a>
    function maskString (regrex, string)
    {
        //Ham dung de tao mask tu chuoi < a.../a> thanh *******
        function mask (length)
        {
            var stringMask = '';
            for (var i = 0; i < length; i ++)
            {
                stringMask += '*';
            }
            return stringMask;
        }
        ///
        regrex = "(<a)(.)+" + regrex + "(.)*(<\/a>)";
        regrex = new RegExp(regrex, "gi");

        var result;
        while ( (result = regrex.exec(string)) !== null)
        {
            //pr (result[0]);
            tabTheA.push(result[0]);
            string = string.replace(result[0], mask (result[0].length));

        }
        return string;
    }//fin maskString

    function posWordsChange (regrex, string, percentage)
    {
        /*
         Ham dung de tim vi tri cac tu can thay sau khi random
         So luong vi tri can thay theo percentage

         */
        var myArray;
        var tabPos = [];
        var tabPosWordsChange = [];
        while ((myArray = regrex.exec(string)) !== null)
        {
            tabPos.push(myArray.index);
        }

        var randomPosTab = randomPos(tabPos.length, percentage);
        for (var i = 0; i < randomPosTab.length; i ++)
        {
            tabPosWordsChange.push(tabPos[randomPosTab[i]]);
        }

        return tabPosWordsChange;

    }

    function randomPos ( numWords, percentage)
    {
        percentage = (parseFloat(percentage))/100;
        pr ('percentage: ' + percentage);
        var tabRandom = [];
        var numChange = Math.floor( numWords * percentage);
        for (var i = 0; i < numChange; i ++)
        {
            var tmp = Math.floor(Math.random() * numWords);
            while ( tabRandom.indexOf(tmp) != -1)
            {
                tmp = Math.floor(Math.random() * numWords);
            }
            tabRandom.push(tmp);
        }
        return tabRandom;
    } //randomPos

    //
    string = maskString(regrex, string);
    var pos = regrex;
    regrex = "(" + regrex + ")";
    regrex = new RegExp(regrex, 'ig'); //tu string to regrex

    var totalWords = string.match(regrex).length;
    pr ('tong cac tu ' + pos +  ' tim duoc: ' + totalWords);

    var tabPosWordsChange = posWordsChange(regrex, string, percentage);
    pr ('array vi tri ' + pos +' can thay sau khi random: ' + tabPosWordsChange);

    function changeString(match, matchLook, posMatch)
    {
        //Ham dung de thay cac vi tri can thay thanh cac link
        var i = tabPosWordsChange.indexOf(posMatch);
        if (i != -1)
        {
            tabPosWordsChange.splice(i, 1);
            return "<a href='" + data[pos] +   "'>" + matchLook +  "</a>";
        }
        else
        {
            return matchLook;
        }

    }

    string = string.replace( regrex, changeString);
    //Sau khi mask chuoi thi se demask chuoi
    for (var i = 0; i < tabTheA.length; i ++)
    {
        string = string.replace(/\*+/, tabTheA[i]);
    }

    return string;

}//Fin changeWords


var fs = require('fs');

var fileOrigine  = 'demo.html';
var filePhp = 'php.html';
var fileNode = 'node.html';
var php = 'php';
var node = 'node';
var percent = '30%';  // Chi thay 30% so tu tim thay
var filePhpNode = 'php-node.html';


    fs.readFile(fileOrigine, {encoding: 'utf8'}, function (err, result) {
        if (err) {
            return console.log(err);
        }
        fs.writeFile(filePhp, changeWords(php, result, data, percent), function (err) {
            if (err) {
                return console.log(err);
            }
            console.log('Da thay inner link php o file php.html');
            //Inner Link Node
            fs.readFile(fileOrigine, {encoding: 'utf8'}, function (err, result) {
                if (err) {
                    return console.log(err);
                }
                fs.writeFile(fileNode, changeWords(node, result, data, percent), function (err) {
                    if (err) {
                        return console.log(err);
                    }
                    console.log('Da thay inner link node o file node.html');
                    //****
                    fs.readFile(fileNode, {encoding: 'utf8'}, function (err, result) {
                        if (err) {
                            return console.log(err);
                        }
                        fs.writeFile(filePhpNode, changeWords(php, result, data, percent), function (err) {
                            if (err) {
                                return console.log(err);
                            }
                            console.log('Da thay inner link php va node o file php-node.html');

                        })
                    });
                    //****

                })
            });
            //
        })
    });



