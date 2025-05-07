export function BackgroundGrid() {
  return (
    <div className="absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-white bg-[linear-gradient(rgba(0,0,0,0.05)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(0,0,0,0.05)_1.5px,transparent_1.5px)] bg-[size:30px_30px]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:150px_150px]" />
    </div>
  )
} 