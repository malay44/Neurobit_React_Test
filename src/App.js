import './App.css';
import SideBar from './Components/SideBar';
import BottomNav from './Components/BottomNav';
import TopNav from './Components/TopNav';
import FormProgress from './Components/FormProgress';
import DragAndDrop from './Components/DragAndDrop';
import { Box } from '@mui/material';


function App() {
  return (
    <div className="App" style={{backgroundColor:"#F5F6FA"}}>
      <SideBar/>
      <main style={{marginLeft: 250}}>
        <Box sx={{mx: 6, my: 5}}>
          <TopNav />
          <FormProgress />
          <DragAndDrop />
        </Box>
        <BottomNav/>
      </main>
    </div>
  );
}

export default App;
