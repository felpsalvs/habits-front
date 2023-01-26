import { Toaster } from 'react-hot-toast'

export const ToastComponent = () => {
  return (
    <Toaster
      toastOptions={{
        className: '',
        style: {
          background: '#00875f',
          padding: '16px',
          color: 'white',
          width: '30rem',
        },
      }}
    />
  )
}