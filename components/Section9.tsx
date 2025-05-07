'use client'

import { FormEvent } from 'react'
import { Button } from './Button'
import { Input } from './Input'
import { TextArea } from './TextArea'

export function Section9() {
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData.entries())
    console.log(data)

    alert('✅ Your request has been sent successfully!')

    event.currentTarget.reset()
  }

  return (
    <section className="bg-orange-600 px-4 py-12">
      <div className="flex flex-col gap-8 text-white">
        <h5 className="text-center">Ready for your next project?</h5>

        <p className="text-center text-lg leading-[160%]">
          Sit elit feugiat turpis sed integer integer accumsan turpis.
        </p>

        <form className="flex flex-col items-center gap-4" onSubmit={onSubmit}>
          <Input
            name="email"
            required
            type="email"
            placeholder="Enter your email"
          />
          <TextArea name="message" required placeholder="What are you say?" />
          <Button
            type="submit"
            text="Request Demo"
            variant="filled-dark"
            className="w-min"
          />
        </form>
      </div>
    </section>
  )
}
