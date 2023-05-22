import './App.css';
import SideBar from './Components/SideBar';
import BottomNav from './Components/BottomNav';
import TopNav from './Components/TopNav';
import FormProgress from './Components/FormProgress';
import DragAndDrop from './Components/DragAndDrop';
import { Box } from '@mui/material';
import MapChannels from './Components/MapChannels';
import { useSelector } from 'react-redux';
import PreviewMapChannels from './Components/PreviewMapChannels';

function App() {
  const montage = useSelector(state => state.montage);
  return (
    <div className="App" style={{backgroundColor:"#F5F6FA"}}>
      <SideBar/>
      <main style={{marginLeft: "220px"}}>
        <Box sx={{mx: 6, my: 5}}>
          <TopNav />
          <FormProgress />
          {montage.currentStep === 0 && <DragAndDrop />}
          {montage.currentStep === 1 && <MapChannels />}
          {montage.currentStep === 2 && <PreviewMapChannels/>}
        </Box>
        <BottomNav/>
      </main>
    </div>
  );
}

export default App;
