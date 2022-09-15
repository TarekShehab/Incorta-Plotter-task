// import fetch from "node-fetch"

const api = 'https://plotter-task.herokuapp.com'

const header = {
    'Accept': 'application/json',
}

//Get all columns available
export const getAll = () =>
    fetch(`${api}/columns`)
        .then(res =>  res.json())
        .catch(error => {
            console.log("Error fetching columns from API: ", error)
        })

//Retrieve data about the dimension & measure(s)
export const getData = data =>
    fetch(`${api}/data`, {
        method: 'POST',
        headers: {
          ...header,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...data }) })
            .then(res => res.json())
            .catch(error => {
                console.log("Error fetching data: ", error)
            })
