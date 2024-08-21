import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ConfigProvider } from 'antd'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes/Routes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ConfigProvider>
      <RouterProvider router={router} />
    </ConfigProvider>
  </StrictMode>
)
