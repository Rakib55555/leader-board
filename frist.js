///////// Variable //////////

var favoriteGpu = 'Msi RX 570'

// array
var GpuList = ['1030', '1050', '1050ti', '1060', '1060ti', '1650', '1650super', '1660', '1660super'];
var superIndex = GpuList.indexOf('1650super');
GpuList[0] = 'Rx480';

GpuList.push('RX570');
GpuList.pop();

// conditionals
if(GpuList[1] == '1050'){
    console.log('1050 Chara Upay Nai');
}
else{
    console.log('Upay ache.. Upay ache!!!');
}

// while loop
var i = 0;
while(1 < 15){
    console.log('Gpu Kinmui, Gaming Kormui');
    i++;
}

// for loop
for(var i = 0; i < 15; i++){
    console.log(i);
}