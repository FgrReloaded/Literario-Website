const participants = [
  { name: "Gyan Prakash Singh", email: "singhgyanugyan@gmail.com" },
  { name: "Anmol Sharma", email: "anmolsha4521@gmail.com" },
  { name: "Mradul Khandelwal", email: "mradul.khandelwal_cs.aiml24@gla.ac.in" },
  { name: "Himanshu Upadhyay", email: "Himanshu.Upadhyay_1bba24@gla.ac.in" },
  { name: "Sahil Yadav", email: "sahilyadav1005@gmail.com" },
  { name: "Bhuvnesh Singh Bhadauriya", email: "bhuvnesh.bhadauriya_cs22@gla.ac.in" },
  { name: "Kartik Joshi", email: "043jkartik@gmail.com" },
  { name: "Saumya Tiwari", email: "saumya.tiwari_cs.aiml24@gla.ac.in" },
  { name: "Lalit prakash singh", email: "lalitkpsingh@gmail.com" },
  { name: "Ritika Sharma", email: "ritika.sharma2_cs22@gla.ac.in" },
  { name: "Tushita Mishra", email: "tushita.mishra_cs22@glaa.ac.in" },
  { name: "Sahil", email: "s6917915@gmail.com" },
  { name: "Tanushree Pandey", email: "uscbb23291@stu.xim.edu.in" },
  { name: "Rishab Singha", email: "rishabsingha2@gmail.com" },
  { name: "Ashish", email: "Ashish.gla1_cs24@gla.ac.in" },
  { name: "Kritika Saxena", email: "kritika.saxena_cs.aiml24@gla.ac.in" },
  { name: "Shivangi Trivedi", email: "shivangitrivedi2021@gmail.com" },
  { name: "Srashti Singh", email: "srashtisingh4321@gmail.com" },
  { name: "PARTHAPRATIM PATRA", email: "partha.patra2005@gmail.com" },
  { name: "Utkarsh Singh Gaur", email: "utkarsh.gaur_cs24@gla.ac.in" },
  { name: "Yashaswi Sharma", email: "yashaswi.sharma_bt.bio24@gla.ac.in" },
  { name: "Ghanshyam choudhary", email: "choudharyghanshyam843@gmail.com" },
  { name: "Nisha Chaudhary", email: "nisha.chaudhary_cs22@gla.ac.in" },
  { name: "Kanishka Verma", email: "kanishk.verma_cs23@gla.ac.in" },
  { name: "Ananya Jain", email: "ananyajain827@gmail.com" },
  { name: "MAHEK", email: "mahekaggarwal05@gmail.com" },
  { name: "Aryavardhan Singh", email: "aryavardhan301@gmail.com" },
  { name: "NITIN", email: "panditnitin3099@gmail.com" },
  { name: "Palak Varshney", email: "varshneypalak11@gmail.com" },
  { name: "priyank chaudhary", email: "Priyank.13199@stu.upes.ac.in" },
  { name: "Krishnangi Agrawal", email: "krishnangi.agrawal_cs22@gla.ac.in" },
  { name: "Saloni Kumari", email: "ksaloni56@gmail.com" },
  { name: "Gehna Sharma", email: "gehna.sharma_bph21@gla.ac.in" },
  { name: "Kunal Nishad", email: "nishadkunal1234567@gmail.com" },
  { name: "Manya Singh", email: "Lavanyasingh2109@gmail.com" },
  { name: "Vaishnavi Pandey", email: "Vaishnavi.pandey_cs24@gla.ac.in" },
  { name: "Jatin", email: "jatindagar1204@gmail.com" },
  { name: "Jaspreet Singh", email: "jaspreetsingh291005@gmail.com" },
  { name: "Ratna Pandey", email: "drpandeyratna1221@gmail.com" },
  { name: "Varun singh", email: "varunsingh2804102000@gmail.com" },
  { name: "Puneet kumar Singh", email: "Puneet.singh1_cs22@gla.ac.in" },
  { name: "Harsh Dagur", email: "harshdagur2310@gmail.com" },
  { name: "abhay krishna udainiya", email: "abhay.udainiya_cs.h24@gla.ac.in" },
  { name: "Madhu Solanki", email: "madhu.solanki_cs22@gla.ac.in" },
  { name: "Palak", email: "palakahuja620@gmail.com" },
  { name: "Ananya mishra", email: "ananyamishra.162006@gmail.com" },
  { name: "Reet bharadwaj", email: "reet.bhardwaj_cs22@gla.ac.in" },
  { name: "AJEETA SINGH", email: "ajeetasingh642@gmail.com" },
  { name: "Priyanshi goyal", email: "Priyanshi.goyal_cs24@gla.ac.in" },
  { name: "Khushi singh", email: "Singhkhushi8468@gmail.com" },
  { name: "Tanishq yadav", email: "tanishq.yadav_cs22@gla.ac.in" },
  { name: "Divyang sullere", email: "divyang.moon@gmail.com" },
  { name: "Harshit Chaudhary", email: "harshitchaudhary357@gmail.com" },
  { name: "Saksham", email: "sakshamnautiyal221@gmail.com" },
  { name: "Purnima", email: "Punnotyagi83@gmail.com" }
];

let currentPage = 1;
let itemsPerPage = 10;
let filteredData = [...participants];

function populateTable(data, page = 1) {
  const tableBody = document.getElementById('participantsTableBody');
  tableBody.innerHTML = '';

  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const paginatedData = data.slice(start, end);

  paginatedData.forEach(participant => {
    const row = document.createElement('tr');
    const firstI = participant.name.split(' ')[0][0];
    let secondI;
    if (participant.name.split(' ').length > 1) {
      secondI = participant.name.split(' ')?.[1]?.[0]
    }
    row.innerHTML = `
        <td class="py-4 px-6">${firstI.toUpperCase()}${secondI?.toUpperCase()??""}-2025-0215-${String(participants.indexOf(participant) + 1).padStart(3, '0')}</td>
        <td class="py-4 px-6">${participant.name}</td>
        <td class="py-4 px-6 text-gray-400">${participant.email}</td>
      `;
    tableBody.appendChild(row);
  });

  updatePagination(data.length, page);
}

function updatePagination(totalItems, currentPage) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const paginationContainer = document.getElementById('pagination');
  paginationContainer.innerHTML = '';

  const prevButton = createPaginationButton('Previous', currentPage > 1);
  prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
      populateTable(filteredData, currentPage - 1);
      currentPage--;
    }
  });
  paginationContainer.appendChild(prevButton);

  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement('button');
    pageButton.className = `px-3 py-1 mx-1 rounded ${currentPage === i ? 'bg-white text-black' : 'text-white border border-white'}`;
    pageButton.textContent = i;
    pageButton.addEventListener('click', () => {
      currentPage = i;
      populateTable(filteredData, i);
    });
    paginationContainer.appendChild(pageButton);
  }

  const nextButton = createPaginationButton('Next', currentPage < totalPages);
  nextButton.addEventListener('click', () => {
    if (currentPage < totalPages) {
      populateTable(filteredData, currentPage + 1);
      currentPage++;
    }
  });
  paginationContainer.appendChild(nextButton);
}

function createPaginationButton(text, enabled) {
  const button = document.createElement('button');
  button.className = `px-4 py-1 mx-1 rounded ${enabled ? 'text-white border border-white hover:bg-white hover:text-black' : 'text-gray-500 border border-gray-500 cursor-not-allowed'}`;
  button.textContent = text;
  return button;
}

document.getElementById('participantSearch').addEventListener('input', (e) => {
  const searchTerm = e.target.value.toLowerCase();
  filteredData = participants.filter(participant =>
    participant.name.toLowerCase().includes(searchTerm)
  );
  currentPage = 1;
  populateTable(filteredData, currentPage);
});

document.addEventListener('DOMContentLoaded', () => {
  populateTable(participants, 1);
});
