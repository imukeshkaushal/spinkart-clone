import { CalendarIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Divider, Heading } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import { Button, Input } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const getData = ({value}) => {
    return fetch(`https://www.googleapis.com/books/v1/volumes?q=${value}&key=AIzaSyAdgbyhgNNxMkp69b0DHSl74huvqZFnM5A&maxResults=40`)
    .then(res => res.json());
}

function Home() {
  const [text,setText] = useState("");
  const [value,setValue] = useState("html");
  const [data,setData] = useState([]);
  const [loading,setLoading] = useState(false)
  useEffect(() => {
    setLoading(true);
    getData({value})
    .then(res => {
      setLoading(false);
    //   setProducts(res);
      setData(res.items);
    })
  },[value])
  
  const handleChange = (e) => {
    setText(e.target.value);
  }
  
  const handleClick = ()  => {
    setValue(text);
    console.log(value);
  }
  

  return (
        <div >
            <div style={{border:"1px solid blue", backgroundColor : "#2874F0", paddingTop:"5px", paddingBottom:"5px", display:"flex"}}>
            <div style={{width : "70%",display:"flex", alignItems:"center", marginLeft:"150px"}}>
             <img style={{width:"150px"}} src='spin.png' alt='logo'/>

             <Input style={{backgroundColor : "white", height:"35px",width:"340px", borderTopRightRadius : "0px", borderBottomRightRadius:"0px", marginLeft:"50px"}} 
             type="text" placeholder = "Search Here" value = {text} onChange = {handleChange} />

             <button style={{backgroundColor :"white",width:"80px" , lineHeight:"35px", padding:"0px", borderBottomRightRadius : "10px",borderTopRightRadius : "10px",paddingLeft:"10px", paddingRight:"10px"}} onClick={handleClick}>Search</button>
            </div>
            <div style={{width:"32%", color:"white",display:"flex", gap:"20px",alignItems:"center"}} >
             <Link path = "/about" to = "/about">About</Link>
             <Link path = "/contact" to = "/contact">Contact</Link>
             <Link path = "/signin" to = "/signin">Sign In</Link>
             <Link path = "/sinup" to = "/signup">Sign Up</Link>
            </div>
        </div>

        <div style={{width:"80%", margin:"auto", marginTop : "20px"}}>
        <h2 className='Heading'>Top Reads</h2>
        <div className = "box">
            {
                data.map((el) => {
                    let thumbnail = el.volumeInfo.imageLinks && el.volumeInfo.imageLinks.smallThumbnail;
                    let amount = el.saleInfo.listPrice && el.saleInfo.listPrice.amount
                    if(thumbnail != undefined && amount != undefined){
                        return(
                            <div className = "inner" key = {el.id}>
                                <img className = "booksImage" src={thumbnail} alt={el.volumeInfo.title}/>
                                <p className='title'>Title : {el.volumeInfo.title}</p>
                                <p className='price'>Price : {amount}</p>
                                <Divider className='devider' orientation='horizontal' />
                                <div className = "view">
                                    <div className='view-port'>
                                        <CalendarIcon/>
                                        <p>View Now</p>
                                    </div>
                                    <Divider className='devider' variant="solid" orientation='vertical' style={{height:"15px",color:"black"}} />
                                    <div className='view-port'>
                                        <HamburgerIcon/>
                                        <p>More Details</p>
                                    </div>
                                    
                                </div>
                            </div>
                        )
                    }
                    
                })
            }
        </div>
        </div>
        
    </div>
  )
}

export default Home