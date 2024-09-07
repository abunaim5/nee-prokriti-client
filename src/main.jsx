import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes/Routes.jsx'
import { ConfigProvider } from 'antd'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient();


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
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
            borderRadius: 0,
            borderRadiusLG: 0,
            borderRadiusSM: 0
          },
          Select: {
            borderRadius: 0,
            borderRadiusLG: 0,
            borderRadiusSM: 0
          },
          Checkbox: {
            fontSize: 17,
            borderRadiusSM: 0
          }
        }
      }}>
        <RouterProvider router={router} />
      </ConfigProvider>
    </QueryClientProvider>
  </StrictMode>
)
