"use client"

import { useState } from "react"

function Faq() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqData = [
    {
      question: "Is Cadensa a medical product?",
      answer:
        "Cadensa is not a medical device or diagnostic tool. It's a wellness platform designed to provide insights and recommendations based on your health data. Always consult with healthcare professionals for medical advice.",
    },
    {
      question: "Who is Cadensa for?",
      answer:
        "Cadensa is designed for health-conscious individuals who want to take a proactive approach to their wellness. Whether you're looking to optimize your fitness, nutrition, or overall well-being, our platform provides personalized insights.",
    },
    {
      question: "How do you protect my data?",
      answer:
        "We take data privacy seriously. All your personal health information is encrypted and stored securely. We never share your data with third parties without your explicit consent, and you have full control over your information.",
    },
    {
      question: "When will Cadensa be available?",
      answer:
        "Cadensa is currently in development. We're working hard to bring you the best possible experience. Join our waitlist to be among the first to know when we launch and get early access to the platform.",
    },
  ]

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="pb-10">
      <div className="bg-gradient-to-r from-[#00953B] to-[#0068F0] container mx-auto flex justify-center items-center min-h-[35vh] rounded-3xl z-10">
        <div className="bg-gradient-to-r from-[#00953B] to-[#0068F0] container mx-auto flex justify-center items-center min-h-[35vh] rounded-3xl z-10">
          <div className="py-8 sm:py-10 text-center w-full max-w-2xl px-4">
            <h1 className="text-white  text-3xl sm:text-4xl md:text-5xl font-medium leading-tight">
              January Founding Cohort
            </h1>
            <p className="text-base sm:text-lg text-gray-300 py-4">
              A small group of early users helping shape the future of longevity technology.
            </p>
            <button className="bg-white text-[18px] px-10 py-3 font-semibold rounded-full mt-4 hover:scale-105 transition-transform">
              Reserve Your Spot below 
            </button>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      {/* <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-white text-3xl lg:text-5xl font-medium leading-tight">
              Frequently
              <br />
              Asked Questions
            </h2>
            <p className="text-gray-400 pt-5 text-[16px]">Have another question? Please contact our team!</p>
            <button className="text-white border border-gray-400 px-6 py-2 rounded-full mt-5">
                Contact Our Team
            </button> 
          </div>

          <div className="lg:w-2/3 space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-800/50 rounded-lg border border-gray-700/50 overflow-hidden transition-all duration-300 ease-in-out"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-700/30 transition-colors duration-200"
                >
                  <span className="text-white text-lg font-medium pr-4">{faq.question}</span>
                  <div className="flex-shrink-0">
                    <svg
                      className={`w-5 h-5 text-gray-400 transition-transform duration-300 ease-in-out ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-4">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default Faq