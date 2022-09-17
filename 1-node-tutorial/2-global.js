// global -no window

//__dirname  - path to current directory
//__filename - file name
// require   - function to use module (common js)
// module    - info about current module (file)
// process   - info about env where the program is being executed

console.log(__dirname);
setInterval(
    ()=>{console.log("hello world")},
    1000);
console.log(__filename);
