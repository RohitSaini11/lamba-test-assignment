import './App.css';
import { Box,SplitPageLayout} from '@primer/react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
        <Box sx={{height: '100vh', overflowY: 'auto', padding:'0px 1vmin'}}>
          <SplitPageLayout>

            <SplitPageLayout.Header divider='none' padding="none"> 
              <Navbar/>
            </SplitPageLayout.Header>

            <SplitPageLayout.Pane  divider='none' width="small" padding="none" >
                <Sidebar/>
            </SplitPageLayout.Pane>
            
            <SplitPageLayout.Content padding="none">
              <p>Content</p>
            </SplitPageLayout.Content>
          
          </SplitPageLayout>
        </Box>
    </div>
  );
}



export default App;