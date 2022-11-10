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

  useEffect(() => {
    getUserById(params.id)
      .then((res) => {
        setLoading(true)
        setItem(res.items[0]);
        setLoading(false)
        
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
      });
      
  }, []);

  console.log(item)
  
 

  if(loading){
    return <div>Loading...</div>
  }

  return (
    <div>
      <Navbar />
      <div style={{width:"80%", margin : "auto", marginTop : "20px"}}>
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink>Product</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <div className="Outside">
          <div className="left">
            <img className="singleImg" src="https://images-eu.ssl-images-amazon.com/images/I/518ji-9UJoL.jpg" alt="image"/>
            <p className="bookbuy">Buy it at best price from here</p>
            
            <div style={{marginTop : "20px", display : "flex", alignItems:"center",gap:"100px"}}>
              <p style={{fontSize : "20px",fontWeight:"bold"}}>Rs. 499</p>
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
                  <Td>Author</Td>
                  <Td>Jan Goyswami</Td>
                </Tr>
                <Tr>
                  <Td>ISBN No</Td>
                  <Td>ISBN_13</Td>
                </Tr>
                <Tr>
                  <Td>Total Pages</Td>
                  <Td>612</Td>
                </Tr>
                <Tr>
                  <Td>Print-Type</Td>
                  <Td>Book</Td>
                </Tr>
                <Tr>
                  <Td>Category</Td>
                  <Td>Computer</Td>
                </Tr>
                <Tr>
                  <Td>Country</Td>
                  <Td>India</Td>
                </Tr>
                <Tr>
                  <Td>Retail Price</Td>
                  <Td>2950</Td>
                </Tr>
                <Tr>
                  <Td>Language </Td>
                  <Td>English</Td>
                </Tr>
                <Tr>
                  <Td>Version</Td>
                  <Td>3.4.0.0</Td>
                </Tr>

              </Tbody>
            </Table>
          </div>

          <div className="right">
            <h2>2019 International Conference on Innovation and Intelligence for Informatics, Computing, and Technologies (3ICT 2019)</h2>
            <p className="snippet">2019 International Conference on Innovation and Intelligence for Informatics, Computing, and Technologies (3ICT 2019) will be held at University of Bahrain, Kingdom of Bahrain,, September 22 23, 2019 The aim of 3ICT 2019 is to provide a ..."</p>
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
                  <Td>Rs. 351</Td>
                  <Td><Button colorScheme="blue">By Now</Button></Td>
                </Tr>
              </Tbody>
            </Table>
            <Heading size="md" mt={8} mb={4}>Books Description</Heading>
            <Text>Take the guesswork out of using regular expressions. With more than 140 practical recipes, this cookbook provides everything you need to solve a wide range of real-world problems. Novices will learn basic skills and tools, and programmers and experienced users will find a wealth of detail. Each recipe provides samples you can use right away. This revised edition covers the regular expression flavors used by C#, Java, JavaScript, Perl, PHP, Python, Ruby, and VB.NET. You’ll learn powerful new tricks, avoid flavor-specific gotchas, and save valuable time with this huge library of practical solutions. Learn regular expressions basics through a detailed tutorial Use code listings to implement regular expressions with your language of choice Understand how regular expressions differ from language to language Handle common user input with recipes for validation and formatting Find and manipulate words, special characters, and lines of text Detect integers, floating-point numbers, and other numerical formats Parse source code and process log files Use regular expressions in URLs, paths, and IP addresses Manipulate HTML, XML, and data exchange formats Discover little-known regular expression tricks and techniques"</Text>
          </div>
        </div>

      </div>
      <Divider mb={10} />
    </div>
  );
}

export default Product;
