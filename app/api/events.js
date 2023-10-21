async function  events() {
    const res = await fetch('https://dull-plum-antelope-tutu.cyclic.cloud/api/events')
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   return res.json()
  }
  