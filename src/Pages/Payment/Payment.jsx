import { useState } from "react"
import Image from "next/image"
import { ArrowLeft, Info } from "lucide-react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export default function SubscriptionPage() {
  const [paymentMethod, setPaymentMethod] = useState("stripe")

  return (
    <div className="min-h-screen bg-white p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <button className="text-[#1e2d5e]">
            <ArrowLeft size={24} />
          </button>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-[#1e2d5e] flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=24&width=24"
                alt="Bowlersnetwork logo"
                width={24}
                height={24}
                className="text-white"
              />
            </div>
            <span className="text-xl font-medium">
              <span className="text-[#1e2d5e]">Bowlers</span>
              <span className="text-[#8bc342]">network</span>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h1 className="text-lg font-medium text-[#252525] mb-6">Subscribe to Annual Subscription</h1>

            <div className="mb-8">
              <div className="flex items-baseline">
                <span className="text-6xl font-bold">$120</span>
                <div className="ml-2 text-gray-500">
                  <div>per</div>
                  <div>year</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="font-medium mb-2">Annual Subscription</h2>
                <p className="text-sm text-[#5d5d5d] mb-1">
                  Bowlersnetwork Pro Annual Subscription will give you access to the whole library for 1 year
                </p>
                <p className="text-sm text-[#5d5d5d]">Billed annually</p>
                <div className="text-right font-medium">$100.00</div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Subtotal</span>
                  <span className="font-medium">$20.00</span>
                </div>

                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <span className="font-medium mr-1">Tax</span>
                    <Info size={16} className="text-[#5d5d5d]" />
                  </div>
                  <span className="font-medium">$00.00</span>
                </div>

                <div className="h-px bg-gray-200 my-4"></div>

                <div className="flex justify-between">
                  <span className="font-medium">Total Pay</span>
                  <span className="font-medium">$20.00</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold mb-6">Choose your payment Gateway</h2>

              <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-4">
                <div
                  className={`flex items-center justify-between border rounded-md p-4 ${paymentMethod === "stripe" ? "border-[#1e2d5e]" : "border-gray-200"}`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 flex items-center justify-center">
                      <svg
                        viewBox="0 0 60 25"
                        xmlns="http://www.w3.org/2000/svg"
                        width="60"
                        height="25"
                        className="fill-[#635bff]"
                      >
                        <path
                          d="M59.64 14.28h-8.06c.19 1.93 1.6 2.55 3.2 2.55 1.64 0 2.96-.37 4.05-.95v3.32a8.33 8.33 0 0 1-4.56 1.1c-4.01 0-6.83-2.5-6.83-7.48 0-4.19 2.39-7.52 6.3-7.52 3.92 0 5.96 3.28 5.96 7.5 0 .4-.04 1.26-.06 1.48zm-5.92-5.62c-1.03 0-2.17.73-2.17 2.58h4.25c0-1.85-1.07-2.58-2.08-2.58zM40.95 20.3c-1.44 0-2.32-.6-2.9-1.04l-.02 4.63-4.12.87V5.57h3.76l.08 1.02a4.7 4.7 0 0 1 3.23-1.29c2.9 0 5.62 2.6 5.62 7.4 0 5.23-2.7 7.6-5.65 7.6zM40 8.95c-.95 0-1.54.34-1.97.81l.02 6.12c.4.44.98.78 1.95.78 1.52 0 2.54-1.65 2.54-3.87 0-2.15-1.04-3.84-2.54-3.84zM28.24 5.57h4.13v14.44h-4.13V5.57zm0-4.7L32.37 0v3.36l-4.13.88V.88zm-4.32 9.35v9.79H19.8V5.57h3.7l.12 1.22c1-1.77 3.07-1.41 3.62-1.22v3.79c-.52-.17-2.29-.43-3.32.86zm-8.55 4.72c0 2.43 2.6 1.68 3.12 1.46v3.36c-.55.3-1.54.54-2.89.54a4.15 4.15 0 0 1-4.27-4.24l.02-13.17 4.02-.86v3.54h3.14V9.1h-3.14v5.85zm-4.91.7c0 2.97-2.31 4.66-5.73 4.66a11.2 11.2 0 0 1-4.46-.93v-3.93c1.38.75 3.1 1.31 4.46 1.31.92 0 1.53-.24 1.53-1C6.26 13.77 0 14.51 0 9.95 0 7.04 2.28 5.3 5.62 5.3c1.36 0 2.72.2 4.09.75v3.88a9.23 9.23 0 0 0-4.1-1.06c-.86 0-1.44.25-1.44.9 0 1.85 6.29.97 6.29 5.88z"
                          fillRule="evenodd"
                        />
                      </svg>
                    </div>
                    <Label htmlFor="stripe" className="text-base font-medium">
                      Stripe
                    </Label>
                  </div>
                  <RadioGroupItem value="stripe" id="stripe" className="text-[#1e2d5e]" />
                </div>

                <div
                  className={`flex items-center justify-between border rounded-md p-4 ${paymentMethod === "google" ? "border-[#1e2d5e]" : "border-gray-200"}`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="16" viewBox="0 0 40 16">
                        <path
                          d="M7.58 5.8c0-.52-.04-1.02-.13-1.5H3.9v2.85h2.07c-.09.47-.35.88-.74 1.15v.96h1.2c.7-.65 1.15-1.6 1.15-2.73v-.73Z"
                          fill="#4285F4"
                        />
                        <path
                          d="M3.9 10.9c1 0 1.84-.33 2.46-.9l-1.2-.93c-.33.22-.76.35-1.26.35-.96 0-1.78-.65-2.08-1.52H.6v.98A3.69 3.69 0 0 0 3.9 10.9Z"
                          fill="#34A853"
                        />
                        <path
                          d="M1.82 7.9c-.07-.22-.12-.46-.12-.7 0-.24.05-.48.12-.7v-.98H.6a3.69 3.69 0 0 0 0 3.36l1.22-.98Z"
                          fill="#FABB05"
                        />
                        <path
                          d="M3.9 4.68c.54 0 1.03.19 1.41.55l1.06-1.06A3.54 3.54 0 0 0 3.9 3.1 3.69 3.69 0 0 0 .6 5.22l1.22.98c.3-.87 1.12-1.52 2.08-1.52Z"
                          fill="#E94235"
                        />
                        <path
                          d="M13.3 7.2c0 2.25-1.76 3.9-3.93 3.9-2.17 0-3.93-1.65-3.93-3.9 0-2.24 1.76-3.9 3.93-3.9 2.17 0 3.93 1.66 3.93 3.9Zm-1.73 0c0-1.4-1.02-2.36-2.2-2.36-1.19 0-2.2.96-2.2 2.36 0 1.4 1.01 2.36 2.2 2.36 1.18 0 2.2-.97 2.2-2.36Z"
                          fill="#4285F4"
                        />
                        <path
                          d="M20.54 7.2c0 2.25-1.76 3.9-3.93 3.9-2.17 0-3.93-1.65-3.93-3.9 0-2.24 1.76-3.9 3.93-3.9 2.17 0 3.93 1.66 3.93 3.9Zm-1.72 0c0-1.4-1.02-2.36-2.2-2.36-1.19 0-2.2.96-2.2 2.36 0 1.4 1.01 2.36 2.2 2.36 1.18 0 2.2-.97 2.2-2.36Z"
                          fill="#EA4335"
                        />
                        <path
                          d="M27.55 3.52v7.95c0 3.27-1.93 4.61-4.2 4.61-2.14 0-3.43-1.44-3.92-2.61l1.69-.7c.3.72 1.04 1.58 2.23 1.58 1.46 0 2.37-.9 2.37-2.6v-.63h-.07c-.43.53-1.27 1-2.32 1-2.2 0-4.21-1.92-4.21-4.38 0-2.48 2.01-4.42 4.21-4.42 1.05 0 1.89.47 2.32 1h.07v-.72h1.83Zm-1.7 3.74c0-1.55-1.03-2.68-2.33-2.68-1.32 0-2.43 1.13-2.43 2.68 0 1.53 1.1 2.65 2.43 2.65 1.3 0 2.33-1.12 2.33-2.65Z"
                          fill="#FBBC05"
                        />
                        <path d="M29.5 1.07v9.66h-1.86V1.07H29.5Z" fill="#4285F4" />
                        <path
                          d="M34.45 8.06l1.5 1c-.49.72-1.66 1.95-3.68 1.95-2.5 0-4.37-1.93-4.37-4.4 0-2.61 1.9-4.4 4.16-4.4 2.27 0 3.38 1.8 3.75 2.78l.2.5-5.85 2.42c.45.88 1.15 1.32 2.12 1.32.98 0 1.65-.48 2.17-1.17Zm-4.6-1.57 3.9-1.62c-.21-.54-.85-.92-1.6-.92-.96 0-2.3.85-2.3 2.54Z"
                          fill="#EA4335"
                        />
                      </svg>
                    </div>
                    <Label htmlFor="google" className="text-base font-medium">
                      Google Pay
                    </Label>
                  </div>
                  <RadioGroupItem value="google" id="google" className="text-[#1e2d5e]" />
                </div>

                <div
                  className={`flex items-center justify-between border rounded-md p-4 ${paymentMethod === "apple" ? "border-[#1e2d5e]" : "border-gray-200"}`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                        <path d="M17.0425 7.17983C16.0833 7.17983 15.2859 7.54983 14.6493 8.04983C14.0993 8.48983 13.6993 8.48983 13.1493 8.04983C12.5127 7.54983 11.7152 7.17983 10.756 7.17983C9.64677 7.17983 8.69761 7.64983 8.01094 8.39983C7.32427 9.14983 6.94427 10.1998 6.94427 11.4998C6.94427 12.9498 7.41427 14.3498 8.29427 15.4998C9.0001 16.4098 9.9001 17.2498 11.0001 17.9998C11.5501 18.3998 12.1001 18.7498 12.7001 19.0998C12.8001 19.1498 12.9001 19.1498 13.0001 19.0998C13.6001 18.7498 14.1501 18.3998 14.7001 17.9998C15.8001 17.2498 16.7001 16.4098 17.4059 15.4998C18.2859 14.3498 18.7559 12.9498 18.7559 11.4998C18.7559 10.1998 18.3759 9.14983 17.6893 8.39983C17.0026 7.64983 16.0535 7.17983 17.0425 7.17983ZM16.9559 5.17983C18.2559 5.17983 19.4559 5.74983 20.3559 6.74983C21.2559 7.74983 21.7559 9.04983 21.7559 10.4998C21.7559 12.4498 21.1559 14.2998 20.0559 15.7998C19.1559 16.9998 18.0559 17.9998 16.7559 18.8998C16.0559 19.3998 15.3559 19.8498 14.6559 20.2498C14.2559 20.4998 13.8559 20.5998 13.4559 20.5998C13.0559 20.5998 12.6559 20.4998 12.2559 20.2498C11.5559 19.8498 10.8559 19.3998 10.1559 18.8998C8.85594 17.9998 7.75594 16.9998 6.85594 15.7998C5.75594 14.2998 5.15594 12.4498 5.15594 10.4998C5.15594 9.04983 5.65594 7.74983 6.55594 6.74983C7.45594 5.74983 8.65594 5.17983 9.95594 5.17983C11.2559 5.17983 12.3559 5.64983 13.2559 6.34983C14.1559 5.64983 15.2559 5.17983 16.5559 5.17983H16.9559Z" />
                      </svg>
                    </div>
                    <Label htmlFor="apple" className="text-base font-medium">
                      Apple Pay
                    </Label>
                  </div>
                  <RadioGroupItem value="apple" id="apple" className="text-[#1e2d5e]" />
                </div>
              </RadioGroup>

              <Button className="w-full mt-8 bg-[#8bc342] hover:bg-[#7db138] text-white font-medium py-6">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}