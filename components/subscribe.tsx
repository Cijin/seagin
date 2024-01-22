import React, {FormEvent, ChangeEvent} from 'react'
import { Alert } from './footer'

export default function Subscribe() {
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [isError, setIsError] = React.useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      await response.json();

      setMessage('Thank you for subscribing!');
      setIsError(false);
    } catch (error) {
      setMessage('An error occurred. Please try again later.');
      setIsError(true); 
    }
    
    // Hide the message after 3 seconds
    setTimeout(() => {
      setMessage('');
    }, 3000);
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  return (
    <div className="py-16 sm:py-24 lg:py-32">
      <div className="space-y-8">
        <div className="max-w-xl text-3xl tracking-tight text-white sm:text-4xl lg:col-span-7">
          <p className="inline font-bold sm:block lg:inline xl:block">Subscribe to my newsletter.</p>
          <p className="mt-4 text-sm leading-6">
            📅 Emails sent weekly
          </p>
        </div>
        <form onSubmit={handleSubmit} className="w-full max-w-md lg:col-span-5 lg:pt-2">
          <div className="flex gap-x-4">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              name="email-address"
              id="email-address"
              autoComplete="email"
              value={email}
              onChange={handleChange}
              required
              className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
              placeholder="Enter your email"
            />
            <button
              className="flex-none rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
            >
              Subscribe
            </button>
          </div>
          <p className="mt-4 text-sm leading-6 text-gray-300">
            No spam, ever.🫡
          </p>
        </form>
        {message && (
          <Alert message={message} isError={isError} />
        )}

      </div>
    </div>
  )
}

