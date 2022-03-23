import React from 'react'

function Findprofile() {

    //declare our variables
    const [userName, setUserName] = useState("");
    const [results, setResults] = useState([]);
    const [totals, setTotals] = useState([]);
    const [page, setPage] = useState(1);
    
    //check user input
    const onChangeHandler = (e) =>
    {
        setUserName(e.target.value)
    }

    const onSubmitHandler = (e) =>
    {
        e.preventDefault();
      
        //get remote githubs user remote data api
        const url = 'https://api.github.com/search/users?q=' + userName + '&&page=1&per_page=15'
       
        console.log(url)
        fetch(url)
            .then((response) => response.json())
            .then((data) =>
            {
                //logging my response data
                console.log(data)
                setResults(data.items);
                setTotals(data.total_count);
            })

    }









  return (
    <div>Findprofile</div>
  )
}

export default Findprofile