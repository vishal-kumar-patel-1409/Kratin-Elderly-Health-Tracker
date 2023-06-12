// Medication Tracker
const medicationForm = document.getElementById('medication-form');
const medicationList = document.getElementById('medication-list');

medicationForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const medicationName = document.getElementById('medication-name').value;
  const medicationTime = document.getElementById('medication-time').value;

  if (medicationName && medicationTime) {
    const medicationItem = document.createElement('li');
    medicationItem.innerHTML = `
      <span>${medicationName}</span>
      <span>${medicationTime}</span>
      <button class="delete-btn" onclick="deleteItem(this)">&#x2716;</button>
    `;
    medicationList.appendChild(medicationItem);

    // Clear input fields
    medicationForm.reset();
  }
});

// Health Tracker
const healthForm = document.getElementById('health-form');
const healthList = document.getElementById('health-list');

healthForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const weight = document.getElementById('weight').value;
  const bloodPressure = document.getElementById('blood-pressure').value;

  if (weight && bloodPressure) {
    const healthItem = document.createElement('li');
    const condition = getBloodPressureCondition(bloodPressure);
    healthItem.innerHTML = `
      <span>Weight: ${weight} kg</span>
      <span>Blood Pressure: ${bloodPressure} (${condition})</span>
      <button class="delete-btn" onclick="deleteItem(this)">&#x2716;</button>
    `;
    healthList.appendChild(healthItem);

    // Check if blood pressure is high and suggest medicine
    if (condition === 'High') {
      suggestMedicine('Ecosprin 75');
    }

    // Clear input fields
    healthForm.reset();
  }
});

// Diabetes Tracker
const diabetesForm = document.getElementById('diabetes-form');
const diabetesList = document.getElementById('diabetes-list');

diabetesForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const fastingBloodSugar = document.getElementById('fasting-blood-sugar').value;
  const afterMealBloodSugar = document.getElementById('after-meal-blood-sugar').value;
  if (fastingBloodSugar && afterMealBloodSugar) {
    const diabetesItem = document.createElement('li');
    const condition = getDiabetesCondition(fastingBloodSugar, afterMealBloodSugar);
    diabetesItem.innerHTML = `
      <span>Blood Sugar Level: ${fastingBloodSugar} ${afterMealBloodSugar} mg/dL (${condition})</span>
      <button class="delete-btn" onclick="deleteItem(this)">&#x2716;</button>
    `;
    diabetesList.appendChild(diabetesItem);

    // Check if blood sugar level indicates diabetes and suggest treatment
    if (condition === 'Diabetes') {
      suggestTreatment('Insulin Injection');
    }

    if (condition === 'Low Sugar') {
      suggestTreatment('Eat Chocolate');
    }

    // Clear input fields
    diabetesForm.reset();
  }
});

// Delete item
function deleteItem(button) {
  const listItem = button.parentNode;
  listItem.parentNode.removeChild(listItem);
}

// Get blood pressure condition
function getBloodPressureCondition(bloodPressure) {
  if (bloodPressure > 140) {
    return 'High (Hypertension)';
  } else if (bloodPressure > 120 && bloodPressure < 139) {
    return 'Elevated';
  } else if (bloodPressure > 60 && bloodPressure < 90) {
    return 'Low';
  } else if (bloodPressure > 0 && bloodPressure < 60) {
    return 'Extremely Low';
  } else {
    return 'Normal'
  }
}

// Suggest medicine
function suggestMedicine(medicine) {
  const medicationItem = document.createElement('li');
  medicationItem.innerHTML = `
    <span class="suggested-medicine">Suggested Medicine:</span>
    <span class="suggested-medicine">${medicine}</span>
  `;
  medicationList.appendChild(medicationItem);
}

// Get diabetes condition
function getDiabetesCondition(fastingBloodSugar, afterMealBloodSugar) {
  if (fastingBloodSugar > 80 && fastingBloodSugar < 100 && afterMealBloodSugar > 170 && afterMealBloodSugar < 200) {
    return 'Normal';
  } else if (fastingBloodSugar > 101 && fastingBloodSugar < 125 && afterMealBloodSugar > 201 && afterMealBloodSugar < 230) {
    return 'Prediabetic';
  } else if (fastingBloodSugar > 126 && afterMealBloodSugar > 231) {
    return 'Diabetes';
  } else if (fastingBloodSugar < 80 && afterMealBloodSugar < 170) {
    return 'Low Sugar';
  }
}

// Suggest treatment
function suggestTreatment(treatment) {
  const diabetesItem = document.createElement('li');
  diabetesItem.innerHTML = `
    <span class="suggested-treatment">Suggested Treatment:</span>
    <span class="suggested-treatment">${treatment}</span>
  `;
  diabetesList.appendChild(diabetesItem);
}

// Symptom Tracker
const symptomForm = document.getElementById('symptom-form');
const symptomList = document.getElementById('symptom-list');

symptomForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const symptom = document.getElementById('symptom').value;

  if (symptom) {
    const symptomItem = document.createElement('li');
    const medicine = getMedicineForSymptom(symptom);
    symptomItem.innerHTML = `
      <span>Symptom: ${symptom}</span>
      <span>Medicine: ${medicine}</span>
      <button class="delete-btn" onclick="deleteItem(this)">&#x2716;</button>
    `;
    symptomList.appendChild(symptomItem);

    // Clear input field
    symptomForm.reset();
  }
});

// Get medicine for symptom
function getMedicineForSymptom(symptom) {
  let medicine = '';
  switch (symptom.toLowerCase()) {
    case 'loose motion':
      medicine = 'metrogyl 400 mg';
      break;
    case 'vomiting':
      medicine = 'vomistop';
      break;
    case 'fever':
      medicine = 'Paracetamol';
      break;
    case 'headache':
      medicine = 'Crocin 500';
      break;
    case 'throat infection':
      medicine = 'Ciplox 250';
      break;
    case 'anxiety':
      medicine = 'Alprazolam';
      break;
    case 'chest pain':
      medicine = 'Aspirin';
      break;
    case 'back pain':
      medicine = 'Ibuprofen';
      break;
    case 'abdominal pain':
      medicine = 'Ampicillin';
      break;
    case 'dizziness':
      medicine = 'Meclizine ';
      break;
    case 'heartburn':
      medicine = 'Famotidine  ';
      break;
    case 'runny nose':
      medicine = 'Diphenhydramine';
      break;
    case 'tiredness':
      medicine = 'Ritalin';
      break;
    case 'chills':
      medicine = 'Acetaminophen';
      break;
    case 'eye pain':
      medicine = 'Diclofenac ophthalmic';
      break;

  }
  return medicine;
}
