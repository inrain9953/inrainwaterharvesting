export async function Whatsapp () {
  try {
    await fetch('/api/track-whatsapp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        page: window.location.pathname
      })
    })
  } catch (err) {
    console.log(err)
  }
}
