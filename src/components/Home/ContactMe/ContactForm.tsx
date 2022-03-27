import { Icon } from "@iconify/react"

const ContactForm = () => {
  return (
    <form className="grid grid-cols-1 gap-4">
      <div className="flex content-between gap-4">
        {/* Name */}
        <div className="p-2 bg-gray-200 rounded-md w-full">
          <label className="block text-sm text-gray-800">Name</label>
          <input
            className="bg-transparent outline-none focus:outline-none w-full"
            type="text"
            name="name"
            id="name"
            required
          />
        </div>
        {/* Email */}
        <div className="p-2 bg-gray-200 rounded-md w-full">
          <label className="block text-sm text-gray-800">Email</label>
          <input
            className="bg-transparent outline-none focus:outline-none w-full"
            type="text"
            name="name"
            id="name"
            required
          />
        </div>
      </div>
      {/* Subject */}
      <div className="p-2 bg-gray-200 rounded-md">
        <label className="block text-sm text-gray-800">Subject</label>
        <input
          className="bg-transparent outline-none focus:outline-none w-full"
          type="text"
          name="name"
          id="name"
          required
        />
      </div>
      {/* Message */}
      <div className="p-2 bg-gray-200 rounded-md">
        <label className="block text-sm text-gray-800">Message</label>
        <textarea
          className="bg-transparent outline-none focus:outline-none w-full"
          name="message"
          id="message"
          cols={0}
          rows={7}
          required
        />
      </div>
      {/* Submit */}
      <div className="">
        <button
          type="submit"
          className="bg-violet-500 text-white rounded-lg p-2 flex items-center"
        >
          Send Message
          <Icon icon="uil:message" className="mx-1" />
        </button>
      </div>
    </form>
  )
}
export default ContactForm
