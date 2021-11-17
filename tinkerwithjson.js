let fs=require("fs");
let xlsx=require("xlsx");
// let buffer= fs.readFileSync("./example.json");
// console.log(buffer);
// console.log("------------------------------------");
//array mila parse karke
// let data= JSON.parse(buffer);
let data=require("./example.json")

// data.push(
//     {
//         "name":"Shikamaru",
//     "last name" : "Nara",
//     "isShinobi" : true,
//     "friends" : ["Sakura" , "Sasuke" , "kurama"],
//     "age": 33,
//     "address" :{
//         "country" : "Japan",
//         "village" : "Konoha",
//         "pin" : 115204416
//               }
//     },
//     {
//         "name":"moka",
//     "last name" : "sora",
//     "isShinobi" : true,
//     "friends" : ["Sakura" , "Sasuke" , "kurama"],
//     "age": 33,
//     "address" :{
//         "country" : "Japan",
//         "village" : "Konoha",
//         "pin" : 115204416
//               }
//     }

// );
// console.log(data);
// let stringData=JSON.stringify(data);
// fs.writeFileSync("example.json",stringData);

function excelWriter(filepath,json,sheetName)
{

    //new worksheet
    let newWb= xlsx.utils.book_new();
    
    // //json data -> excel format convert
    
    let newWS= xlsx.utils.json_to_sheet(json);
    
    // //-> newWb , ws , sheet name
    
    xlsx.utils.book_append_sheet(newWb , newWS , sheetName);
    
    // //filepath
    
    xlsx.writeFile(newWb,filepath);
 
}


//read
function excelreader(filepath,sheetNmae)
{
    //workbook get
    if(fs.existsSync(filepath)==false)
    {
        return [];
    }
    let wb=xlsx.readFile(filepath);
    //sheet-get
    let excelData = wb.Sheets[sheetNmae];
    //sheet data-get
    let ans = xlsx.utils.sheet_to_json(excelData);
    return;
}


