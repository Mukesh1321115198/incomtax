import { useEffect, useState } from "react";
import {
  ScrollText,
  Calendar,
  User,
  SearchCheck,
  FileText,
  Pause,
  Play,
} from "lucide-react";

const quickLinks = [
  { icon: <ScrollText />, label: "-> e-Pay Tax" },
  { icon: <FileText />, label: "Suggestions for Simplification of IT Rules and Forms" },
  { icon: <FileText />, label: "DTVSV Scheme of 2024" },
  { icon: <SearchCheck />, label: "e-Verify Return" },
  { icon: <User />, label: "Verify PAN Status" },
  { icon: <User />, label: "Know Tax Payment Status" },
  { icon: <User />, label: "Instant E-PAN" },
  { icon: <User />, label: "Know Your AO" },
  { icon: <User />, label: "Verify Service Request" },
  { icon: <User />, label: "Report Account Misuse" },
  { icon: <User />, label: "Income Tax Calculator" },
  { icon: <User />, label: "Know TAN Details" },
  { icon: <Calendar />, label: "Tax Calendar" },
  { icon: <FileText />, label: "Tax Information & Services" },
];

const slidingImages = [
  "first.jpeg",
  "Bank.png",
  "3rd.jpg",
];

export default function DashboardLayout() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidingImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="flex flex-col md:flex-row p-4 gap-4">
      <div className="w-full md:w-1/4 bg-gray-50 rounded shadow overflow-y-auto h-[600px]">
        <h2 className="font-bold text-lg p-4 border-b border-blue-600 text-blue-800">
          Quick Links
        </h2>
        <ul className="divide-y divide-gray-200">
          {quickLinks.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-3 p-4 hover:bg-blue-100 cursor-pointer"
            >
              <div className="text-blue-600">{item.icon}</div>
              <span className="text-sm">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full md:w-3/4 space-y-4">
        <ScrollingNotice />

        <div className="w-full">
          <div className="relative w-full h-48 overflow-hidden rounded shadow">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slidingImages.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`Slide ${idx}`}
                  className="w-full flex-shrink-0 object-cover h-48"
                />
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between mt-2 px-4">
            <div className="flex gap-2">
              {slidingImages.map((_, index) => (
                <div
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                    index === currentSlide ? "bg-blue-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => setIsPaused((prev) => !prev)}
              className="bg-white rounded-full p-1 shadow"
              title={isPaused ? "Play" : "Pause"}
            >
              {isPaused ? (
                <Play className="w-5 h-5 text-blue-600" />
              ) : (
                <Pause className="w-5 h-5 text-blue-600" />
              )}
            </button>
          </div>
        </div>

        <h2 className="font-bold text-lg border-b-4 border-blue-600 pb-1">
          Latest Updates
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[{
              date: "17-Apr-2025",
              label: "News",
              text: "Form 10AB condonation request for Section 12A is now available",
            },
            {
              date: "30-Mar-2025",
              label: "e-Campaign",
              text: "File your Updated Return for A.Y.2022-23",
            },
            {
              date: "02-Apr-2025",
              label: "News",
              text: "Form 3CEFC (Application for opting for safe harbour)",
            },
            {
              date: "30-Mar-2025",
              label: "e-Campaign",
              text: "File your Updated Return for A.Y.2023-24",
            },
          ].map((item, idx) => (
            <div key={idx} className="border p-4 rounded shadow-sm bg-white">
              <p className="text-sm text-gray-500 mb-1">Date: {item.date}</p>
              <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded mb-2">
                {item.label}
              </span>
              <p className="text-sm font-medium">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Things to Know Section */}
<div>
  <h2 className="font-bold text-lg border-b-4 border-blue-600 pb-1">
    Things To Know
  </h2>
  <div className="mt-4">
    <div className="flex gap-6 border-b pb-2 text-sm text-blue-700 font-medium">
      <span className="border-b-2 border-blue-700">How to ... Videos</span>
      <span>Awareness Videos</span>
      <span>Brochures</span>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
      {/* Video 1 */}
      <div className="flex gap-2 items-start">
        <iframe
          className="w-40 h-24 rounded shadow"
          src="https://www.youtube-nocookie.com/embed/jQJgL_NKL4g?hl=en"
          title="Benefits to Senior and Super Senior Citizen under Income Tax"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <a
          href="https://www.youtube.com/watch?v=jQJgL_NKL4g"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-800 font-medium underline hover:text-blue-600"
        >
          Benefits to Senior and Super Senior Citizen under Income Tax
        </a>
      </div>

      {/* Video 2 */}
      <div className="flex gap-2 items-start">
        <iframe
          className="w-40 h-24 rounded shadow"
          src="https://www.youtube-nocookie.com/embed/vZWwteoxR2w?hl=en"
          title="Old Vs New Tax Regime (Part 1)"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <a
          href="https://www.youtube.com/watch?v=vZWwteoxR2w"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-800 font-medium underline hover:text-blue-600"
        >
          Old Vs New Tax Regime (Part 1)
        </a>
      </div>

      {/* Video 3 */}
      <div className="flex gap-2 items-start">
        <iframe
          className="w-40 h-24 rounded shadow"
          src="https://www.youtube-nocookie.com/embed/t89TLaFnlHM?hl=en"
          title="Old Vs New Tax Regime (Part 3)"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <a
          href="https://www.youtube.com/watch?v=t89TLaFnlHM"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-800 font-medium underline hover:text-blue-600"
        >
          Old Vs New Tax Regime (Part 3)
        </a>
      </div>

      {/* Video 4 */}
      <div className="flex gap-2 items-start">
        <iframe
          className="w-40 h-24 rounded shadow"
          src="https://www.youtube-nocookie.com/embed/gkpT8ruFRRw?hl=en"
          title="Updated Income Tax Return (ITR U)"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <a
          href="https://www.youtube.com/watch?v=gkpT8ruFRRw"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-800 font-medium underline hover:text-blue-600"
        >
          Updated Income Tax Return (ITR U)
        </a>
      </div>
    </div>
  </div>
</div>


        {/* Our Success Enablers Section */}
        <div className="mt-8">
          <h2 className="font-bold text-lg border-b-4 border-blue-600 pb-1">
            Our Success Enablers
          </h2>
          <div className="flex gap-6 border-b pb-2 text-sm text-blue-700 font-medium mt-2">
            <span className="border-b-2 w-[10%] border-blue-700">Taxpayer Voices</span>
            <span>Statistics</span>
          </div>
          <div className="mt-4 italic text-gray-700 text-sm bg-gray-50 p-4 rounded shadow">
            <p>
              @IncomeTaxIndia Sir/Mam<br />
              I and my wife want to appreciate the professionalism and helpfulness of
              your staffs and IT officers we got in touch with last month due to our
              TDS rectification. All the actions are very prompt, fast and professional.
            </p>
            <p className="mt-2 not-italic font-medium text-gray-800">
              ITO Pune, TDS Tumkur, TDS Gangtok
            </p>
            <p className="mt-1 text-xs text-gray-500 italic">12-May-2025</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ScrollingNotice() {
  const [paused, setPaused] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const notices = [
    "1. Form 10AB condonation request under Section 12A is now available for filing on the e-filing portal. Please refer Latest Updates for details.",
    "2. Form 3CEFC is now available for filing on the e-filing portal. Please refer Latest Updates for details.",
    "3. Facility for filing updated returns for the AYs 2021-22 and 2022-23 as per Finance Act, 2025 will be provided shortly.",
    "4. Suggestions for Simplification of Income Tax rules and forms is invited from all stakeholders. Please navigate to Quick links to submit your suggestion.",
    "5. Notice Inviting Tender (NIT) for selection of Managed Service Provider (MSP) for Insight 2.0. The format of all documents and other details are available with Tender ID:2024_DREV_838109_1 on the https://eprocure.gov.in/eprocure/app. Please refer ‘Latest Updates’ for detailed NIT.",
  ];

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setScrollPosition((prev) => (prev + 1) % notices.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [paused, notices.length]);

  return (
    <div className="relative h-24 overflow-hidden bg-green-50 border border-green-600 text-green-800 rounded p-4">
      <div
        className="transition-transform duration-700 ease-in-out"
        style={{ transform: `translateY(-${scrollPosition * 1.5}rem)` }}
      >
        <div className="flex flex-col gap-2">
          {notices.map((notice, index) => (
            <p key={index} className="text-sm">{notice}</p>
          ))}
        </div>
      </div>
      <button
        onClick={() => setPaused((prev) => !prev)}
        className="absolute top-2 right-2 bg-white rounded-full p-1 shadow"
        title={paused ? "Play" : "Pause"}
      >
        {paused ? <Play size={16} /> : <Pause size={16} />}
      </button>
    </div>
  );
}