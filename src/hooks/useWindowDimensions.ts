import { useEffect, useState } from 'react'

export function useWindowDimensions() {
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 })

  useEffect(() => {
    const { innerWidth: width, innerHeight: height } = window

    setDimensions({ width, height })
  }, [])

  useEffect(() => {
    function handleResize() {
      setDimensions(() => {
        const { innerWidth: width, innerHeight: height } = window

        return { width, height }
      })
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return dimensions
}
