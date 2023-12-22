const featuredTestimonial = {
  body: `Kent is an incredibly kind and wonderful teacher. He doesn't just teach English; he also shares fascinating insights about Hawaiian culture and language. His lessons are always engaging and informative.`,
};
const testimonials = [
  [
    [
      {
        body: 'あたたかみがあり、フレンドリー、そして生徒が言葉に詰まっていても忍耐強く話を聞いてくれるため、安心＆信頼してレッスンに集中することができます。また、レッスン前と終了後のフォローも非常に丁寧で、レッスンのニーズを確認してくれるだけでなく、それに関連したトピックの情報を豊かに提供してくれます。英語学習を続けることを、エンカレッジして、おしゃべりでインスパイアしてくれる素敵な先生です。',
      },
      // More testimonials...
    ],
    [
      {
        body: 'Kent is a good teacher. His lesson makes me laugh and relax. Also you will get new things from his conversation. I enjoy his lesson every time.:)',
      },
      // More testimonials...
    ],
  ],
  [
    [
      {
        body: 'He is friendly and kind, always encourages me to speak!',
      },
      // More testimonials...
    ],
    [
      {
        body: `Kent is a caring, calm, and intelligent tutor who makes me motivated. I'm grateful to meet him through Cambly because he's such a great person, not only as a teacher.`,
      },
      // More testimonials...
    ],
  ],
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Testimonials() {
  return (
    <div className="relative isolate pb-32 pt-24 sm:pt-32">
      <div
        className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
        aria-hidden="true"
      >
        <div
          className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#34d399] to-[#60a5fa]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div
        className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
        aria-hidden="true"
      >
        <div
          className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#34d399] to-[#60a5fa] xl:ml-0 xl:mr-[calc(50%-12rem)]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          {/* <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">
            Testimonials
          </h2> */}
          <p className="mt-2 text-3xl font-thin tracking-tight text-gray-900 sm:text-4xl">
            Feedback from students
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
          <figure className="rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1">
            <blockquote className="p-6 text-lg font-semibold leading-7 tracking-tight text-gray-900 sm:p-12 sm:text-xl sm:leading-8">
              <p>{`“${featuredTestimonial.body}”`}</p>
            </blockquote>
          </figure>
          {testimonials.map((columnGroup, columnGroupIdx) => (
            <div
              key={columnGroupIdx}
              className="space-y-8 xl:contents xl:space-y-0"
            >
              {columnGroup.map((column, columnIdx) => (
                <div
                  key={columnIdx}
                  className={classNames(
                    (columnGroupIdx === 0 && columnIdx === 0) ||
                      (columnGroupIdx === testimonials.length - 1 &&
                        columnIdx === columnGroup.length - 1)
                      ? 'xl:row-span-2'
                      : 'xl:row-start-1',
                    'space-y-8'
                  )}
                >
                  {column.map((testimonial) => (
                    <figure
                      key={testimonial.body}
                      className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
                    >
                      <blockquote className="text-gray-900">
                        <p>{`“${testimonial.body}”`}</p>
                      </blockquote>
                    </figure>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
