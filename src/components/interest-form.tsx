'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export function InterestForm() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    year: '',
    interest: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, you would send this data to your backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="p-6 text-center">
        <div className="mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#545454" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        </div>
        <h3 className="text-2xl font-semibold text-[#545454] mb-3">Thanks for your interest!</h3>
        <p className="text-[#545454]/80 mb-8">We've received your information and will notify you when the Launch Fund program opens for applications.</p>
        <button 
          onClick={() => setSubmitted(false)}
          className="text-[#545454] underline underline-offset-4 hover:text-[#444444]"
        >
          Submit another response
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <Label htmlFor="name" className="text-[#545454] font-medium">Full name</Label>
          <Input
            id="name"
            name="name"
            placeholder="Enter your name"
            required
            value={formData.name}
            onChange={handleChange}
            className="mt-1 border-gray-200 focus:border-[#545454] focus:ring-[#545454] rounded-lg"
          />
        </div>
        
        <div>
          <Label htmlFor="email" className="text-[#545454] font-medium">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            required
            value={formData.email}
            onChange={handleChange}
            className="mt-1 border-gray-200 focus:border-[#545454] focus:ring-[#545454] rounded-lg"
          />
        </div>
        
        <div>
          <Label htmlFor="year" className="text-[#545454] font-medium">Year at Chapman</Label>
          <select
            id="year"
            name="year"
            required
            value={formData.year}
            onChange={handleChange}
            className="mt-1 block w-full py-2 px-3 border border-gray-200 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-[#545454] focus:border-[#545454]"
          >
            <option value="" disabled>Select your year</option>
            <option value="Freshman">Freshman</option>
            <option value="Sophomore">Sophomore</option>
            <option value="Junior">Junior</option>
            <option value="Senior">Senior</option>
            <option value="Graduate">Graduate Student</option>
          </select>
        </div>
        
        <div>
          <Label htmlFor="interest" className="text-[#545454] font-medium">Why are you interested in the Launch Fund?</Label>
          <Textarea
            id="interest"
            name="interest"
            placeholder="Tell us about your interest in venture capital and why you'd like to join the Launch Fund when it opens..."
            required
            rows={4}
            value={formData.interest}
            onChange={handleChange}
            className="mt-1 border-gray-200 focus:border-[#545454] focus:ring-[#545454] rounded-lg resize-none"
          />
        </div>
      </div>
      
      <Button 
        type="submit"
        className="bg-[#545454] hover:bg-[#444444] text-white px-8 py-2 rounded-lg shadow-sm hover:shadow-md transition-all w-full"
      >
        Submit Interest
      </Button>
      
      <p className="text-xs text-[#545454]/60 text-center pt-2">
        Your information will be used to notify you when the Launch Fund opens applications.
      </p>
    </form>
  )
} 