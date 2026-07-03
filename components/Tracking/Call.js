export async function Call () {
  try {
    await fetch('/api/track-call', {
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
