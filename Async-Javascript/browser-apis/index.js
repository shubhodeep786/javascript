function display(data){
    console.log(data)
}
const dataFromAPI = fetchAndWait("http/----")
/* there  could be 300ms could be  half a second
response will based o n the api response */
display(dataFromAPI) // undefined 