import React,{useEffect,useState} from 'react';
import "./style.css";

export default function App() {
  
    const [listItems, setListItems] = useState([])
    useEffect(() => {
      fetch(' https://newsapi.org/v2/everything?q=tesla&from=2024-02-29&sortBy=publishedAt&apiKey=3657f1cf0bff41f6872db81b1a320774')
      .then(response => response.json( ))
      .then((data) => { 
        setListItems(data.articles)
      })

    });
    
  


  
  // const [num,setNum] = useState(10);
  // useEffect(()=>{
  //   console.log('useEffect')
  // })

  // const increment = () => {
  //  setNum(num+1)
  // }
  return (
    <div className='container'>
      <h1>Post Demo</h1>
      <div className='post-list'>
        {listItems.map((item,index) =>
        <div key={index} className="box">
          <img src={item.urlToImage} alt="" />
          <h1>{item.title}</h1>
          <p> {item.content} </p>

        </div>
        )}
        

        </div>
      </div>
      
    
  )
        
}
  
  
