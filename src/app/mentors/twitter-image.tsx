import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Chapman CEO Mentors'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '48px',
        }}
      >
        <div
          style={{
            fontSize: 48,
            fontWeight: 700,
            background: 'black',
            color: 'white',
            padding: '24px 48px',
            borderRadius: '16px',
            marginBottom: '24px',
          }}
        >
          Chapman CEO
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            marginBottom: '24px',
            color: 'black',
          }}
        >
          Our Mentors
        </div>
        <div
          style={{
            fontSize: 32,
            color: 'rgba(0,0,0,0.7)',
            textAlign: 'center',
            maxWidth: '80%',
          }}
        >
          Learn from Industry Leaders and Experienced Entrepreneurs
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
} 