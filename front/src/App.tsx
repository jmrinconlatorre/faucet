import { useEffect, useState } from 'react'

type Data = {
  jsonrpc: string
  id: number
  result: string
}

export default function Home() {
  const [data, setData] = useState<Data | null>(null)

  useEffect(() => {
    fetch('http://localhost:5556', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        jsonrpc: '2.0',
        method: 'eth_getBalance',
        params: ['0x3b30E0F1883a37B7cF3894a7a43eF040E31B545F', 'latest'],
        id: 1,
      }),
    })
      .then(res => res.json())
      .then(setData)
      .catch(console.error)
  }, [])

  if (!data) return <div>Loading...</div>

  return <div>{Number(data.result)}</div>
}
