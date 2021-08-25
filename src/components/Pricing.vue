<template>
  <div class="bg-white dark:bg-transparent">
    <div class="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
      <div class="sm:flex sm:flex-col sm:align-center">
        <h1 class="text-5xl font-extrabold text-gray-900 dark:text-gray-50 sm:text-center">
          Pricing Bundles
        </h1>
        <p class="mt-5 text-xl text-gray-500 dark:text-gray-50 sm:text-center">
          Improving Standards of Care through Veterinary Bundles
        </p>
      </div>
      <div
        class="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0
 xl:grid-cols-4"
      >
        <div
          v-for="bundle in bundles"
          :key="bundle.name"
          class="
 	border border-gray-200
 	rounded-lg
 	shadow-sm
 	divide-y divide-gray-200
 "
        >
          <div class="p-6">
            <h2 class="text-lg leading-6 font-medium text-gray-900">
              {{ bundle.name }}
            </h2>
            <p class="mt-4 text-sm text-gray-500">
              {{ bundle.description }}
            </p>
            <p class="mt-8">
              <span class="text-4xl font-extrabold text-gray-900">
                >$ {{ bundle.value }}
              </span>
              {{ " " }}
              <span class="text-base font-medium text-gray-500">
                value when charged individually
              </span>
            </p>
            <p
              class="
 			mt-8
 			block
 			w-full
 			bg-gray-800
 			border border-gray-800
 			rounded-md
 			py-2
 			text-lg
 			font-semibold
 			text-white text-center
 			hover:bg-gray-900
 		"
            >
              ${{ bundle.cost }}
              <br />
              Bundle Price
            </p>
          </div>
          <div class="pt-6 pb-8 px-6">
            <h3
              class="text-xs font-medium text-gray-900 tracking-wide uppercase"
            >
              What's included
            </h3>
            <ul class="mt-6 space-y-4">
              <li
                v-for="item in bundle.items"
                :key="item"
                class="flex space-x-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  width="24"
                  height="24"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <g fill="none">
                    <path
                      d="M5 13l4 4L19 7"
                      stroke="green"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
                <span class="text-sm text-gray-500">{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const bundles = [
  {
    name: 'Minimum Database',
    cost: 350,
    value: 1000,
    description:
				'This bundle is run on all admitted patients, or on those patients where a minimum database is required either pre-consultation or as part of a consultation to help decide if a patient requires admission for further investigation.',
    items: [
      'Packed Cell Volume (PCV)',
      'Total Proteins (TSP)',
      'Blood Gas Analysis',
      'Lactate',
      'Electrolytes including ionised Calcium',
      'Urea',
      'Creatinine',
      'Bedside Ultrasound (A-FAST, T-FAST, Vet-BLUE)',
      'SpO2',
      'Remote Support',
    ],
  },
  {
    name: 'Get Well Sooner not Later',
    cost: 950,
    value: 1500,
    description:
				'Would you like to feel sick for twice the time, or do you want to get well sooner? Admission for treatment of a known condition where further diagnostics are not indicated and treatment is supportive. Perfect for the dehydrated gastroenteritis',
    items: [
      'Packed Cell Volume (PCV)',
      'Total Proteins (TSP)',
      'Blood Gas Analysis',
      'Lactate',
      'Electrolytes including ionised Calcium',
      'Urea',
      'Creatinine',
      'Bedside Ultrasound (A-FAST, T-FAST, Vet-BLUE)',
      'Remote Support',
      'Hospital Admission',
      'Tailored treatment plan',
      'IV catheter placement',
      'IV fluid plan',
      'IV fluid therapy',
      'Injectable pain relief',
      'Antiemetics',
      'Gastric Protection',
      'SpO2',
      'Blood Pressure',
    ],
  },
  {
    name: 'Not Right & Not Sure',
    cost: 1750,
    value: 2500,
    description:
				'Not sure what is wrong, but sure its not doing right? Admission on this bundle provides diagnostics and treatment and will provide a clear direction if not a clear diagnosis in most of your patients who present, not doing quite right',
    items: [
      'Packed Cell Volume (PCV)',
      'Total Proteins (TSP)',
      'Blood Gas Analysis',
      'Lactate',
      'Electrolytes including ionised Calcium',
      'Urea',
      'Creatinine',
      'Bedside Ultrasound (A-FAST, T-FAST, Vet-BLUE)',
      'Remote Support',
      'Hospital Admission',
      'Tailored treatment plan',
      'IV catheter placement',
      'IV fluid plan',
      'IV fluid therapy',
      'Injectable pain relief',
      'Antiemetics',
      'Gastric Protection',
      'Thoracic Radiographs',
      'Abdominal Radiographs',
      'Radiographic Assessment and reporting through SignalPet',
      'Tertiary opinion on radiographs via Clinical Support',
      'Full Abdominal Ultrasound In-house',
      'CBC',
      'Biochemistry',
      'c-Reactive Protein', 'pro-BNP',
      'snap-cPLI',
      'Parvo Test',
      'T4',
      'FIV/FeLV',
      'PT/APTT',
      'SpO2',
      'Blood Pressure',
    ],
  },
  {
    name: 'Sick for Sure, Lets Get to It',
    cost: 2250,
    value: 3500,
    description:
				'Not sure what is wrong, but sure its not doing right? Admission on this bundle provides diagnostics and treatment and will provide a clear direction if not a clear diagnosis in most of your patients who present, not doing quite right',
    items: [
      'Packed Cell Volume (PCV)',
      'Total Proteins (TSP)',
      'Blood Gas Analysis',
      'Lactate',
      'Electrolytes including ionised Calcium',
      'Urea',
      'Creatinine',
      'Bedside Ultrasound (A-FAST, T-FAST, Vet-BLUE)',
      'Remote Support',
      'Hospital Admission',
      'Tailored treatment plan',
      'IV catheter placement',
      'IV fluid plan',
      'IV fluid therapy',
      'Injectable pain relief',
      'Antiemetics',
      'Gastric Protection',
      'Thoracic Radiographs',
      'Abdominal Radiographs',
      'Radiographic Assessment and reporting through SignalPet',
      'Extended Ultrasound with Dr Kerri Renshaw',
      'Tertiary opinion on radiographs via Clinical Support',
      'CBC',
      'Biochemistry',
      'c-Reactive Protein',
      'snap-cPLI', 'pro-BNP',
      'SpO2', 'Blood Pressure',
      'Parvo Test',
      'T4',
      'FIV/FeLV',
      'PT/APTT',
      'Analgesia CRIs',
      'Minor Procedures',
      'External Lab Fees up to $300',
      'q2h nursing care',
      'Consultant input and case management by Senior Qualified Clinical Team',
    ],
  },
]
</script>
