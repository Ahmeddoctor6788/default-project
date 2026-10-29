
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MainStore from './stores/MainStore.jsx'

createRoot(document.getElementById('root')).render(
<BrowseStore>
<MainStore>
  <App />
</MainStore>

</BrowseStore>
  
 
)
