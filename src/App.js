import './App.css';
import { Box,SplitPageLayout} from '@primer/react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Content from './components/Content';

function App() {
  return (
    <div className="App">
        <Box sx={{height: '100vh', overflowY: 'auto', padding:'0px 1vmin'}}>
          <SplitPageLayout>

            <SplitPageLayout.Header divider='none' padding="none"> 
              <Navbar/>
            </SplitPageLayout.Header>

            <SplitPageLayout.Pane aria-label='Sidebar' divider='none' width="small" padding="none" >
              <Sidebar/>
            </SplitPageLayout.Pane>
            
            <SplitPageLayout.Content width='full' padding="none">
              <Content />
            </SplitPageLayout.Content>
          
          </SplitPageLayout>
        </Box>
    </div>
  );
}



export default App;