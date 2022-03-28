import { FormEvent } from "react"
import { SubmitHandler } from "react-hook-form"

export interface ContactFormValuesType {
  name: string
  email: string
  subject: string
  message: string
}

const contactFormSubmit: SubmitHandler<ContactFormValuesType> = async (
  data,
  event
) => {
  console.log({ data, event })
  try {
    const formfetch = await fetch(`${process.env.NEXT_PUBLIC_FORMPOST_URL}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        Accept: "application/json",
      },
    })
    if (!formfetch.ok)
      throw new Error(
        `Error while sending form: ${formfetch.status} ${formfetch.statusText}`
      )
    console.log("✅Submitted the form")
  } catch (error) {
    console.log({ error })
    console.log("❌Cloudn't submit the form")
  }
}

export default contactFormSubmit
