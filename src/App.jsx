import { useRoutes, Routes, Route } from "react-router-dom";
import "./App.css";
import AppFooter from "./components/app-footer/app-footer";
import NotFound from "./components/404/404";
import Home from "./pages/home";
import About from './pages/about';
import Contact from "./pages/contact";
import Post from "./pages/post";

let announcements = [
  {title: 'IMPORATANT - Discord Server', shortDesc:'On the Media Team meeting, we have decided to use DISCORD as our chat. To join the server, please contact one of the supervisers', longDesc:'On the Media Team meeting, we have decided to use DISCORD as our chat. To join the server, please contact one of the supervisers. We are abandoning other chats, so be ready for the change. From now on, all our stuff is now going to be posted there.', blockquotes: ['Discord is a communication platform designed for creating communities. It allows users to engage in text, voice, and video chats, making it popular among gamers, hobbyists, and various interest groups. Users can create or join "servers," which are dedicated spaces for discussions around specific topics or activities. Each server can have multiple channels for different conversations, enabling organized communication. Discord also supports features like screen sharing, file sharing, and integrations with other applications, enhancing the user experience. With its customizable roles and permissions, server administrators can manage members and control access to different channels. Overall, Discord fosters a sense of community and collaboration, making it a versatile tool for both casual and professional interactions.'], id:0},
  {title: 'Media Team Pizza Party (March 30, 2024)', shortDesc: 'We are sad to admit that only 6 MEMBERS of the media team participated. It was a fun and yummy time. I hope that everyone will be able to come next time.', longDesc:'We are sad to admit that only 6 MEMBERS of the media team participated. It was a fun and yummy time. Some of the activities were helping around the church and playing ticket to ride (it had turned into civil war at the end). If you would like to come next time, please talk to one of the administrators. We have decided the meeting to take place about one time each two months. I hope you can come next time!', id:1},
  {title: 'Video Room (March 24, 2024)', shortDesc: 'We are proud to announce that our Video Room has been finally been painted and a new carpet put in. Based on insider information, the video part of the media team will move in in about a month.', longDesc:'We are proud to announce that our Video Room has been finally been painted and a new carpet put in. Based on insider information, if all is well, the video part of the media team will move in in about a month. This will be a great advancement, for then room will be freed up and both the video and words team will have more space, making them more productive. ', id:2},
]

 
function App() {
  return (
    <>
    <Routes> 
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About announcements={announcements} />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path='/about/:id' element={<Post posts={announcements}/>}> </Route>
      <Route path='*' element={<NotFound />}/>
    
    </Routes>
    <AppFooter /> 
  
  
    </>
  );
}

export default App;
