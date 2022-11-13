import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../Components/Navbar'

function PrivacyPolicy() {
  return (
    <div>
        <Navbar/>
        <div style={{width:"80%", margin: "auto"}}>
          <Box mt={8} mb={8}>
            <Heading mb={8}>Privacy Policy for SpinKart</Heading>
            <Text>At www.ideakart.com we consider the privacy of our visitors to be extremely important. This privacy policy document describes in detail the types of personal information is collected and recorded by www.ideakart.com and how we use it.</Text>

            <Heading size="md" mt={4}>Log Files</Heading>
            <Text mt={4}>Like many other Web sites, www.ideakart.com makes use of log files. These files merely logs visitors to the site - usually a standard procedure for hosting companies and a part of hosting services's analytics. The information inside the log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date/time stamp, referring/exit pages, and possibly the number of clicks. This information is used to analyze trends, administer the site, track user's movement around the site, and gather demographic information. IP addresses, and other such information are not linked to any information that is personally identifiable.</Text>
            <Heading mt={4} size="md">Cookies and Web Beacons</Heading>
            <Text mt={4}>www.ideakart.com uses cookies to store information about visitors' preferences, to record user-specific information on which pages the site visitor accesses or visits, and to personalize or customize our web page content based upon visitors' browser type or other information that the visitor sends via their browser. DoubleClick DART Cookie</Text>
            <Heading size="md" mt={4} mb={4}>DoubleClick DART Cookie</Heading>
            <Text>→ Google, as a third party vendor, uses cookies to serve ads on www.ideakart.com. <br/>
            → Google's use of the DART cookie enables it to serve ads to our site's visitors based upon their visit to www.ideakart.com and other sites on the Internet. <br/>
            → Users may opt out of the use of the DART cookie by visiting the Google ad and content network privacy policy at the following URL - http://www.google.com/privacy_ads.html</Text>
            <Heading mt={4} mb={4} size="md">Third Party Privacy Policies</Heading>
            <Text>You should consult the respective privacy policies of these third-party ad servers for more detailed information on their practices as well as for instructions about how to opt-out of certain practices. www.ideakart.com's privacy policy does not apply to, and we cannot control the activities of, such other advertisers or web sites. <br/> <br/>

            If you wish to disable cookies, you may do so through your individual browser options. More detailed information about cookie management with specific web browsers can be found at the browsers' respective websites.</Text>
          </Box>
        </div>
        
    </div>
  )
}

export default PrivacyPolicy