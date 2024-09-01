import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes/Routes.jsx'
import { ConfigProvider } from 'antd'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ConfigProvider theme={{
      token: { fontFamily: `'Futura', sans-serif`, colorPrimary: '#00BADB' },
      components: {
        FloatButton: {
          borderRadiusLG: 0,
          controlHeightLG: 50
          
        },
        Breadcrumb: {
          linkColor: '#FFFFFF',
          linkHoverColor: '#F6F6F8',
          separatorColor: '#FFFFFF',
          colorBgTextHover: 'none'
        },
        Pagination: {
          // borderRadius: 0,
        }
      }
    }}>
      <RouterProvider router={router} />
    </ConfigProvider>
  </StrictMode>
)
