import {BrowserRouter,Routes,Route} from 'react-router-dom';
import{Box} from '@mui/material';



import {Feed,VideoDetail,ChannelDetail,SearchFeed} from './components';
import Navabar from './components/Navabar';





const App = () => (
    <BrowserRouter>
    <Box sx={{backgroundColor:'#000 ',minHeight:"100vh"}}> 
      <Navabar/> 
      <Routes>
         <Route path="/"exact element={<Feed/>} /> 
         <Route path="/video/:id" element={<VideoDetail/>} />
         <Route path="/channel/:id" element={<ChannelDetail/>}/>
         <Route path="/search/:searchTerm" element={<SearchFeed/>}/>
      </Routes>
    </Box>
    
    </BrowserRouter> 
  
)

export default App 