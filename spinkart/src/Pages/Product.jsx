import { Breadcrumb, BreadcrumbItem, Text, BreadcrumbLink, Button, Divider, Heading, Tab, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";

const getUserById = (id) => {
  return fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${id}&key=AIzaSyAdgbyhgNNxMkp69b0DHSl74huvqZFnM5A&maxResults=40`
  ).then((res) => res.json());
};

function Product() {
  const [item, setItem] = useState({});
  const [loading,setLoading] = useState(false)
  const params = useParams();
  console.log(params)

  useEffect(() => {
    console.log("useEffect")
    getUserById(params.id)
      .then((res) => {
        setLoading(true)
        setItem({...res.items[0]});
        setLoading(false)
        console.log(item,"item")
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
      });
      
  }, []);

 
  
 

  if(loading){
    return <div>Loading...</div>
  }

  return (
    <div>
      <Navbar />
      <div style={{width:"80%", margin : "auto", marginTop : "20px"}}>
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href="">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink>Product</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <div className="Outside">
          <div className="left">
          <img className="singleImg" src={item?.volumeInfo?.imageLinks?.smallThumbnail} alt="image"/>
            <p className="bookbuy">Buy it at best price from here</p>
            
            <div style={{marginTop : "20px", display : "flex", alignItems:"center",gap:"100px"}}>
              <p style={{fontSize : "20px",fontWeight:"bold"}}>INR : {item?.saleInfo?.listPrice?.amount}</p>
              <Button colorScheme="blue">Buy Now</Button>
            </div>

            <Heading size="md" mt={8} mb={4}>Books Specifications</Heading>
            <Table>
              <Thead>
                <Tr>
                  <Th>Type</Th>
                  <Th>Detail</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Id</Td>
                  <Td>{item.id}</Td>
                </Tr>
               
                <Tr>
                  <Td>Publisher</Td>
                  <Td>{item?.volumeInfo?.publisher}</Td>
                </Tr>
                <Tr>
                  <Td>Total Pages</Td>
                  <Td>{item?.volumeInfo?.pageCount}</Td>
                </Tr>
                <Tr>
                  <Td>Print-Type</Td>
                  <Td>{item?.volumeInfo?.printType}</Td>
                </Tr>
                
                <Tr>
                  <Td>Country</Td>
                  <Td>{item?.saleInfo?.country}</Td>
                </Tr>
                <Tr>
                  <Td>Language </Td>
                  <Td>{item?.volumeInfo?.language}</Td>
                </Tr>
                <Tr>
                  <Td>Publishers Date</Td>
                  <Td>{item?.volumeInfo?.publishedDate}</Td>
                </Tr>
                <Tr>
                  <Td>Version</Td>
                  <Td>{item?.volumeInfo?.contentVersion}</Td>
                </Tr>


              </Tbody>
            </Table>
          </div>

          <div className="right">
            <h2>{item?.volumeInfo?.title}</h2>
            <p className="snippet">{item?.searchInfo?.textSnippet}</p>
            <Table mt={14}>
              <Thead>
                <Tr>
                  <Th>Store</Th>
                  <Th>Price</Th>
                  <Th>Buy Now</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Amazon Paper Back</Td>
                  <Td>INR : {item?.saleInfo?.listPrice?.amount}</Td>
                  <Td><Button colorScheme="blue">By Now</Button></Td>
                </Tr>
              </Tbody>
            </Table>
            <Heading size="md" mt={8} mb={4}>Books Description</Heading>
            <Text>{item?.volumeInfo?.description}</Text>
          </div>
        </div>

      </div>
      <Divider mb={10} />
    </div>
  );
}

export default Product;
