import '@vscode/codicons/dist/codicon.css'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import { RootLayout } from './layouts/root'
import { IndexPage } from './pages/index'
import { fetchPage } from './utils/fetchPage'
import { fetchPages } from './utils/fetchPages'

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    loader: async () => {
      const pagesFile = fetchPages()

      return pagesFile
    },
    children: [
      {
        path: '*',
        element: <IndexPage />,
        loader: async ({ params }) => {
          const pagePaths = params['*']?.split('/') ?? []

          const file = fetchPage(pagePaths)

          return file
        },
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
)
