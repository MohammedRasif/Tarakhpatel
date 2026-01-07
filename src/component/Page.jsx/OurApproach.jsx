"use client";

export default function OurApproach() {
  const principles = [
    {
      title: "Clarity over volume",
      description:
        "More data doesn't help if it isn't meaningful. We focus on insights that matter.",
    },
    {
      title: "Guidance over dashboards",
      description:
        "Insight matters only if it leads to action. We provide actionable guidance.",
    },
    {
      title: "Continuity over one-time answers",
      description:
        "Health improves through sustained engagement, not isolated moments.",
    },
    {
      title: "Support over isolation",
      description: "Change is more sustainable when it's shared with others.",
    },
  ];

  const buildFocus = [
    "Respecting user data",
    "Earning trust over time",
    "Prioritizing long-term wellness over short-term engagement tricks",
  ];

  return (
    <div className="bg-black text-white min-h-screen bg-gradient-to-b from-background via-background to-accent/5 pt-20">
      {/* Hero Section */}
      <section className="pt-20 pb-5 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="bg-clip-text lg:text-[60px] text-transparent bg-gradient-to-b from-[#00953B] to-[#0068F0] font-[550]">
            Our Approach
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            We design Cadensa to reflect how health actually unfolds —
            gradually, personally, and over time.
          </p>
        </div>
      </section>

      {/* Core Principles Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="bg-gradient-to-r from-[#00953B] to-[#0068F0] rounded-3xl p-8 md:p-12 max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Core Principles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((principle, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-8 hover:bg-white/20 hover:shadow-xl transition-all duration-300"
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                    {principle.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/80 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Build Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
            How We Build
          </h2>

          <p className="text-lg text-muted-foreground text-center mb-12 leading-relaxed">
            We're building Cadensa deliberately starting small, listening
            closely, and improving through real use.
          </p>

          <div className="space-y-6">
            {buildFocus.map((focus, index) => (
              <div
                key={index}
                className="flex items-start gap-6 group  rounded-xl hover:bg-primary/5 transition-colors duration-300 "
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent/40 transition-colors duration-300">
                    <div className="w-5 h-5 rounded-full bg-accent" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow pt-1">
                  <p className="text-lg text-foreground font-medium leading-relaxed">
                    {focus}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 rounded-2xl bg-card border border-border ">
            <p className="text-lg text-foreground leading-relaxed text-center">
              We believe health technology should be{" "}
              <span className="font-semibold text-primary">
                calm, transparent, and human
              </span>{" "}
              — not noisy or extractive.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      {/* <section className="py-16 px-4 md:px-8 lg:px-16 ">
        <div className="max-w-3xl mx-auto text-center ">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Join us on this journey</h2>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            Experience health technology designed around your real needs.
          </p>
          <button className="inline-block px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
            Get Started
          </button>
        </div>
      </section> */}
    </div>
  );
}
