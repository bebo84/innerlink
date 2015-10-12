/**
 * Created by TranPhuong on 10/12/15.
 */
'use strict';
var fs = require('fs');

//fs.open(path, flags, [mode], callback)
//flag : r,r+,w,w+,a,a+
//fs.open('demo.html','r', function (err, fd) {
//    if(err) {
//        return console.log(err);
//    }
//    fs.close(fd);
//});

//fs.read(fd, buffer, offset, length, position, callback)

//fs.readFile(path, [options], callback)

//fs.createReadStream(path, [options])

//fs.readFile('demo.html',{encoding: 'utf8'}, function (err,result) {
//    if(err) {
//        return console.log(err);
//    }
//    console.log(result);
//})
//
//fs.readFile('demo.html', {encoding : 'utf8'}, function (err,result) {
//    if(err) {
//        return console.log(err);
//    }
//    console.log(result);
//})

//fs.write(fd, buffer, offset, length, position, callback)

//fs.writeFile(path, data, [options], callback)

//fs.appendFile(path, data, [options], callback)

//fs.createWriteStream(path, [options])

//fs.writeFile('demo2.html','Hello', function (err) {
//    if(err){
//        return console.log(err);
//    }
//    console.log('done');
//})
//
//
var data = {
    'node': 'http://techmaster.vn/khoa-hoc/8229/lap-trinh-phalcon-php-2',
    'php' : 'http://techmaster.vn/khoa-hoc/25480/nodejs-truc-tuyen'
};

fs.readFile('demo.html', {encoding : 'utf8'}, function (err,result) {
    if(err) {
        return console.log(err);
    }
    fs.writeFile('demo2.html',result, function (err) {
        if(err){
            return console.log(err);
        }
        console.log('done');
    })
})

