"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { ArrowLeft, ChevronLeft, Info } from "lucide-react"

export default function Payment() {
  const [selectedPayment, setSelectedPayment] = useState("stripe")

  return (
    <div className="min-h-screen bg-white w-full flex items-center justify-center  p-6">
      <div className="max-w-6xl  ">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4 md:mb-8">
          <ArrowLeft  className="w-6 h-6 text-[#252525]" />
          <div className="w-10 h-10 bg-[#141b34] rounded-full flex items-center justify-center">
            <img src="/Bowling-logo.svg" alt="" className="w-full h-full rounded-full"/>
          </div>
          <span className="text-base md:text-xl font-medium text-button-bg" >
            Bowlersnetwork
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-3 md:gap-12">
          {/* Left Column - Subscription Details */}
          <div className="space-y-3 md:space-y-6">
            <h1 className="text-sm md:text-lg font-medium text-black">Subscribe to Annual Subscription</h1>

            <div className="space-y-2">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl md:text-6xl font-bold text-black">$120</span>
                <div className="text-gray-400 text-sm md:text-lg">
                  <div>per year</div>
                  
                </div>
              </div>
            </div>

            <div className="space-y-0 md:space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm md:text-lg font-medium text-black">Annual Subscription</span>
                <span className="text-sm md:text-lg font-medium text-[#000000]">$100.00</span>
              </div>

              <div className="text-[#5d5d5d] space-y-1">
                <p>Bowlersnetwork Pro Annual Subscription will give you access to the</p>
                <p>whole library for 1 year</p>
                <p className="font-medium">Billed annually</p>
              </div>

              <div className="space-y-2 md:space-y-4 pt-4">
                <div className="flex justify-between text-sm md:text-lg items-center">
                  <span className="text-[#252525]">Subtotal</span>
                  <span className="text-[#000000] font-medium">$20.00</span>
                </div>

                <div className="flex justify-between items-center text-sm md:text-lg">
                  <div className="flex items-center gap-2">
                    <span className="text-[#252525]">Tax</span>
                    <Info className="w-4 h-4 text-[#838383]" />
                  </div>
                  <span className="text-[#000000] font-medium">$00.00</span>
                </div>

                <hr className="border-[#838383]" />

                <div className="flex justify-between items-center text-sm md:text-lg">
                  <span className="text-lg font-medium text-[#252525]">Total Pay</span>
                  <span className="text-lg font-bold text-[#000000]">$20.00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Payment Gateway */}
          <div className="bg-white rounded-2xl p-4 md:p-8 shadow-sm">
            <h2 className="text-lg md:text-2xl font-semibold text-black mb-4 md:mb-8">Choose your payment Gateway</h2>

            <RadioGroup value={selectedPayment} onValueChange={setSelectedPayment} className="space-y-0 md:space-y-6">
              {/* Stripe */}
              <div className="flex items-center justify-between p-2 md:p-4 rounded-lg border border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8  rounded flex items-center justify-center">
                    <span className="text-xs text-blue-500 font-bold">stripe</span>
                  </div>
                  <Label htmlFor="stripe" className="text-black text-sm md:text-lg font-medium cursor-pointer">
                    Stripe
                  </Label>
                </div>
                <RadioGroupItem value="stripe" id="stripe" className="border-2" />
              </div>

              {/* Google Pay */}
              <div className="flex items-center justify-between p-2 md:p-4 rounded-lg border border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <span className="text-[#4285f4] text-xs font-bold">G Pay</span>
                  </div>
                  <Label htmlFor="googlepay" className="text-black text-sm md:text-lg font-medium cursor-pointer">
                    Google Pay
                  </Label>
                </div>
                <RadioGroupItem value="googlepay" id="googlepay" className="border-2" />
              </div>

              {/* Apple Pay */}
              <div className="flex items-center justify-between p-2 md:p-4 rounded-lg border border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <span className="text-[#000000] text-xs font-bold"> Pay</span>
                  </div>
                  <Label htmlFor="applepay" className="text-black text-sm md:text-lg font-medium cursor-pointer">
                    Apple Pay
                  </Label>
                </div>
                <RadioGroupItem value="applepay" id="applepay" className="border-2" />
              </div>
            </RadioGroup>

            <Button
              className="w-full mt-4 md:mt-8 py-2 md:py-6 text-white font-medium text-xs md:text-base rounded-lg"
              style={{ backgroundColor: "#8bc342" }}
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
