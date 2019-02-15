/* demo:  整个循环数据结构*/
var fileTypeMsgArray=[
    {
        id:0,  //文件唯一标识
        fileName:"timg.jpg",
        src:"./resources/timg.jpg"
    },
    {
        id:1,  //文件唯一标识
        fileName:'movie.ogg',
        src:"./resources/movie.ogg"
    },
    {
        id:2,  //文件唯一标识
        fileName:"horse.ogg",
        src:"./resources/horse.ogg"
    },
];

// 显示对应文件
$(function(){
    showFile(0,fileTypeMsgArray);
})
// 上一张
function PprevImg(){
    prevImg(fileTypeMsgArray);
}
// 下一张
function PnextImg(){
    nextImg(fileTypeMsgArray);
}