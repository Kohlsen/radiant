import React from "react";

function Accordian() {
  return (
    <div className="accordion" id="accordionExample">
      <div className="accordion-item bg-white border border-gray-200 min-w-full">
        <h2 className="accordion-header mb-0" id="headingOne">
          <button
            className="
        accordion-button
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Facials
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body py-4 px-5 text-sm text-gray-500 italic">
            <ul>
              <li className="py-2">Radiant Spa Facial - $85</li>
              <li className="py-2">Radiant Purifying Facial - $85</li>
              <li className="py-2">Radiant Firming Facial - $150</li>
              <li className="py-2">Radiant Back Facial - $125</li>
              <li className="py-2">Radiant Express Facial - $65</li>
              <li className="py-2">Radiant Teen Facial - $65</li>
              <li className="py-2">Dermaplane Facial - $120</li>
              <li className="py-2">Jelly Facial - $160</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="accordion-item bg-white border border-gray-200">
        <h2 className="accordion-header mb-0" id="headingTwo">
          <button
            className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Speciality Services
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body py-4 px-5 text-sm text-gray-500 italic">
            <ul>
              <li className="py-2">Dermaplane - $55</li>
              <li className="py-2">Dermaplane with Enzyme - $130</li>
              <li className="py-2">Dermaplane with Organic Peel - $150</li>
              <li className="py-2">Jelly Mask Add On - $30</li>
              <li className="py-2">Collagen Mask Add On - $25</li>
              <li className="py-2">Radiant Teen Facial - $65</li>
              <li className="py-2">Lash Lift & Tint - $85</li>
              <li className="py-2">Lash or Brow Tint - $27</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="accordion-item bg-white border border-gray-200">
        <h2 className="accordion-header mb-0" id="headingThree">
          <button
            className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Peels
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body py-4 px-5 text-sm text-gray-500 italic">
            <ul>
              <li className="py-2">Eminence Organic Peel</li>
              <li className="py-2">SkinMedica Peel</li>
              <li className="py-2">PCA Peel</li>
              <li className="py-2">VI Peel</li>
              <li className="py-2">Reve Peel</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="accordion-item bg-white border border-gray-200">
        <h2 className="accordion-header mb-0" id="headingFour">
          <button
            className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFour"
            aria-expanded="false"
            aria-controls="collapseFour"
          >
            Microneedling
          </button>
        </h2>
        <div
          id="collapseFour"
          className="accordion-collapse collapse"
          aria-labelledby="headingFour"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body py-4 px-5 text-sm text-gray-500 italic">
            <ul>
              <li className="py-2">
                Microneedling causes controlled micro-injuries that stimulate
                your body’s natural wound healing process, while minimizing
                cellular damage. The result is effective remodeling of scar
                tissue, while keeping the overall structure of the skin intact.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="accordion-item bg-white border border-gray-200">
        <h2 className="accordion-header mb-0" id="headingFive">
          <button
            className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFive"
            aria-expanded="false"
            aria-controls="collapseFive"
          >
            Waxings
          </button>
        </h2>
        <div
          id="collapseFive"
          className="accordion-collapse collapse"
          aria-labelledby="headingFive"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body py-4 px-5 text-sm text-gray-500 italic">
            <ul>
              <li className="py-2">Eyebrows - $22</li>
              <li className="py-2">Lip - $15</li>
              <li className="py-2">Chin - $15</li>
              <li className="py-2">Nose - $15</li>
              <li className="py-2">Ear - $15</li>
              <li className="py-2">Full Face - $55</li>
              <li className="py-2">Underarm - $25</li>
              <li className="py-2">½ Arm/Full Arm - $39/$50</li>
              <li className="py-2">½ Leg/Full Leg - $60/$75</li>
              <li className="py-2">Bikini - $39</li>
              <li className="py-2">Brazilian - $65</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="accordion-item bg-white border border-gray-200">
        <h2 className="accordion-header mb-0" id="headingSix">
          <button
            className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseSix"
            aria-expanded="false"
            aria-controls="collapseSix"
          >
            OxyGeneo
          </button>
        </h2>
        <div
          id="collapseSix"
          className="accordion-collapse collapse"
          aria-labelledby="headingSix"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body py-4 px-5 text-sm text-gray-500 italic">
            <ul>
              <li className="py-2 text-gray-600">$175</li>
              <li className="py-2">
                The ultimate facial treatment platform for achieving a younger,
                fresher and naturally better-looking skin. Geno offers a unique,
                three-in-one facial treatment that works both on the outside and
                the inside of the skin.
              </li>
              <li className="py-2">
                OXYGENATION - Reaction which utilizes natural physiological
                processes is created, attracting a surge of oxygen to the
                skin&apos;s surface.
              </li>
              <li className="py-2">
                EXFOLIATION - Gently removes dead skin cells to renew and and
                refresh skin&apos;s texture, making the skin look brighter and
                improving the effectiveness of active ingredients absorption.
              </li>
              <li className="py-2">
                NOURISHMENT - A blend of active ingredients absorbed into the
                skin for refreshed and revitalized appearance.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="accordion-item bg-white border border-gray-200">
        <h2 className="accordion-header mb-0" id="headingSeven">
          <button
            className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseSeven"
            aria-expanded="false"
            aria-controls="collapseSeven"
          >
            HydraFacial
          </button>
        </h2>
        <div
          id="collapseSeven"
          className="accordion-collapse collapse"
          aria-labelledby="headingSeven"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body py-4 px-5 text-sm text-gray-500 italic">
            <ul>
              <li className="text-gray-600">$175</li>
              <li className="py-2">
                HydraFacial uses patented technology to cleanse, extract, and
                hydrate. HydraFacial super serums are made with nourishing
                ingredients that create an instantly gratifying glow in just 3
                steps:
              </li>
              <li className="py-2">
                CLEANSE & PEEL - Uncover a new layer of skin with gentle
                exfoliation and relaxing resurfacing.
              </li>
              <li className="py-2">
                EXTRACT & HYDRATE - Remove debris from pores with painless
                suction. Norish with intense moisturizers that quench skin.
              </li>
              <li className="py-2">
                FUSE & PROTECT - Saturate the skins surface with antioxidants
                and peptides to maximize your glow.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="accordion-item bg-white border border-gray-200">
        <h2 className="accordion-header mb-0" id="headingEight">
          <button
            className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseEight"
            aria-expanded="false"
            aria-controls="collapseEight"
          >
            Oxygen Skin Therapy
          </button>
        </h2>
        <div
          id="collapseEight"
          className="accordion-collapse collapse"
          aria-labelledby="headingEight"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body py-4 px-5 text-sm text-gray-500 italic">
            <ul>
              <li className="py-2">
                $165 - The Intraceuticals Facial application method utilizes
                Hyperbaric Oxygen to promote the delivery of Intraceuticals
                professional strength serums to the skin. Intraceuticals
                developed serums that, when professionally administered in
                conjunction with oxygen, visibly plumps and hydrates the skin to
                reduce the appearance of fine lines and wrinkles.
              </li>
              <li className="py-2">$88 - Atoxelene Add on</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accordian;
