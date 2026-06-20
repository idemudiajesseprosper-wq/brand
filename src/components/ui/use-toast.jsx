"use client"

import * as React from "react"

const ToastContext = React.createContext(null)

export function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([])

  const toast = ({ title, description }) => {
    setToasts((prev) => [
      ...prev,
      { id: Date.now(), title, description },
    ])

    setTimeout(() => {
      setToasts((prev) => prev.slice(1))
    }, 3000)
  }

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <div className="fixed bottom-6 right-6 space-y-2 z-50">
        {toasts.map((t) => (
          <div
            key={t.id}
            className="bg-black text-white px-6 py-4 rounded-xl shadow-lg"
          >
            <p className="font-semibold">{t.title}</p>
            <p className="text-sm opacity-80">{t.description}</p>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export const useToast = () => React.useContext(ToastContext)
