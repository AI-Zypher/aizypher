import React from "react";

const Event = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-start justify-center p-4">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/white-bg.png"
          alt="Mirrored Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Poster Image */}
      <div className="relative z-10 mb-8 self-center">
        <img
          src="/postereg.png"
          alt="Event Poster"
          className="max-w-full max-h-[80%] object-contain"
        />
      </div>

      {/* Event Content */}
      <div className="relative z-10 text-white text-left w-full px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-4xl font-bold text-purple-600">TRÈSOR QUEST</h1>
          <a href="/register" className="mt-5 text-blue-300">
            <button class="px-6 py-2 border-2 border-green-500 bg-transparent rounded-full text-white font-semibold hover:bg-purple-700 hover:border-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 flex items-center space-x-2">
              Register &nbsp;{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
                stroke-width="1.1"
                stroke="currentColor"
                class="h-4 w-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                ></path>
              </svg>
            </button>
          </a>
        </div>

        <p className="text-2xl mb-2">₹ 100 per team</p>
        <p className="text-xl mb-8">venue -</p>

        <p className="text-xl mb-8">SLOTS LEFT: 0</p>

        <h2 className="text-2xl font-bold mb-4">EVENT DESCRIPTION</h2>
        <p className="text-lg mb-8">
          The main activity revolves around finding hidden code snippets
          scattered throughout the designated area. Each code snippet will be
          hidden in a specific location. Participants will receive clues to find
          the first snippet, and subsequent clues will lead them to the next
          one. Clues will be provided to guide participants to the whereabouts
          of each code snippet. Once all the code snippets have been found,
          participants will need to assemble them together in the correct
          sequence to form the complete code and must execute the code to
          achieve the desired output.
        </p>

        <h2 className="text-2xl font-bold mb-4">EVENT RULES</h2>
        <ul className="text-lg mb-8 list-disc list-inside">
          <li>The students are allowed to join the event only as a duo.</li>
          <li>
            The event would be conducted as two rounds in which the first round
            ends with the top 3 teams and the second round decides the winner.
          </li>
          <li>The clues hidden must be found within the given time.</li>
          <li>
            The clues are to be hidden only inside the campus. Participants
            aren&apos;t allowed to move away from the campus in search of clues.
          </li>
          <li>
            Any team that violates the above-mentioned rules would be
            disqualified.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">STAFF COORDINATORS</h2>
        <p className="text-lg mb-8">
          MRS. M.S. BENNET PRABA, AP(SRG) / CSE
          <br />
          MR. G. RAGU, AP/CSE
        </p>

        <h2 className="text-2xl font-bold mb-4">STUDENT COORDINATORS</h2>
        <ul className="text-lg mb-8 list-disc list-inside">
          <li>a</li>
          <li>b</li>
          <li>c</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">CONTACT:</h2>
        <p className="text-lg mb-8"></p>
      </div>
    </div>
  );
};

export default Event;
