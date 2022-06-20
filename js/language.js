let engBtn = document.getElementById("engBtn");
let hindiBtn = document.getElementById("hindiBtn");
let heading1 = document.getElementById("heading-1");
let heading2 = document.getElementById("heading-2");
let doctorTxt = document.getElementById("doctor-txt");
let heading3 = document.getElementById("heading-3");
let whyDd = document.getElementById("why-dd");
let whyDdLi1 = document.getElementById("why-dd-li-1");
let whyDdLi2 = document.getElementById("why-dd-li-2");
let whyDdLi3 = document.getElementById("why-dd-li-3");
let whyDdLi4 = document.getElementById("why-dd-li-4");
let whyDdLi5 = document.getElementById("why-dd-li-5");
let whyDdLi6 = document.getElementById("why-dd-li-6");
let whyDdLi7 = document.getElementById("why-dd-li-7");
let benefitsToPatients = document.getElementById("benefits-patients");
let bToPatientsHeading = document.getElementById("b-to-patients-heading");
let bToHospitalHeading = document.getElementById("b-to-hospital-heading");
let benefitsToHospital = document.getElementById("benefits-hospital");
let ourVisionHeading = document.getElementById("our-vision-heading");
let ourVision = document.getElementById("our-vision");
let contactUsText = document.getElementById("contact-us-text");
let contactUs = document.getElementById("contact-us");
let ourFoundersText = document.getElementById("our-founders-text");
let drAshishIntro = document.getElementById("dr-ashish-intro");
let drSnehaIntro = document.getElementById("dr-sneha-intro");
let videoCallText = document.getElementById("video-call-text");
let appointText = document.getElementById("appoint-text");
let dateTime = document.getElementById("date-time");
let beAPartText = document.getElementById("be-a-part-text");
let withText = document.getElementById("with-text");
let ddText = document.getElementById("dd-text");
let forProfText = document.getElementById("for-prof-text");
let callUsText = document.getElementById("call-us-text");
let numberText = document.getElementById("number-text");
let nameText = document.getElementById("name-text");
let phoneNumberText = document.getElementById("phone-number-text");
let prescriptionText = document.getElementById("prescription-text");
let textareaText = document.getElementById("textarea-text");

const english = {
  heading1: "Welcome to the Future of Health and Care",
  heading2: "Direct ",
  doctorTxt: " Doctor",
  heading3: "Future Family Doctor",
  whyDd: "Why Choose Direct Doctor?",
  whyDdLi1: "Get free consultation from well-qualified doctor.",
  whyDdLi2:
    "We will help pregnant women to get best treatments in as low as 15000/- rupees.",
  whyDdLi3: "Get discount of up to 20-40% on treatments.",
  whyDdLi4:
    "Get discount of up to 30% in treatments/services such as Lab/Ultrasound/X-ray/CT Scan/MRI etc.",
  whyDdLi5: "Get rid of brokers/middle-men.",
  whyDdLi6: "Get the best hospital recommendation at best prices.",
  whyDdLi7:
    "Save your time & money by giving us a single call at <a class='calling-num' href='tel:+918881113481'>+91 88811 13481</a>,<br> <a class='calling-num' href='tel:+917310103481'>+91 73101 03481</a> before visiting your hospital.",
  benefitsToPatients:
    "<li>We will provide the best options of Hospital and Diagnostic centers to all types of patient's (TPA,cash, cashless, government employee, Ayushmaan Bharat) according to his/her compliance.</li><li>Our expert doctor team will provide you the correct suggestion where to go and what to do.</li><li>We keep the treatment cost minimum for the patients by keeping control of the Hospital/Diagnostics treatment bill.</li><li>By bypassing the middle man/commission agent, the cost of treatment is Reduced ,and he/she will get best hospitals options in city.</li><li>By using today's technology i.e. mobile applications, social medias, etc. We will deliver the right healthcare information to you.</li>",
  bToPatientsHeading: "Benefits to the Patients",
  bToHospitalHeading: "Benefits to the Hospital",
  benefitsToHospital:
    "<li>Patients counselling done by a team of well-qualified doctors.</li><li>By bypassing the commission agents/middle men, your hospitals will directly become connected to the patients.</li><li>With lower rate/package your hospitals get cases in higher volumes.</li><li>Hospitals will be benefited by decreasing the salary burden of marketing persons/PRO.</li><li>Hospitals can also promote special events/OPD/ special Camps through our Platforms.</li><li>Hospitals can get the patients in all departments.</li><li>By our social media networks, we will provide all types of patients to the hospitals.</li><li>Hospitals get the recognition with the help of good Doctor | Technical staff | Support team. We will directly help you in TPA patients, to make licenses, NABH, QCI and other various works.</li>",
  ourVisionHeading: "Our Vision",
  ourVision:
    "<li>To facilitate best treatments in the best Hospitals & Diagnostics centers at best prices.</li><li>To provide the right advice by a team of well-qualified Doctors (MD/MS/MCH/DM) to the patients.</li><li>Commission agents are a huge damaging factors to the entire healthcare system, so we bypass all that hassle and brokerage fee charged by the commission agents and connect the patients directly with the doctors at the hospitals.</li><li>We also provide treatment free of cost to the poor and needy patients.</li>",
  contactUsText: "For Complete Health Care Solutions",
  contactUs: "CONTACT US",
  ourFoundersText: "Our Founders",
  drAshishIntro:
    "Dr. Ashish has 10 years experience in Health Care delivery system. He worked as a Nodal Officer in government district hospitals. He has also worked as a Quality control assessor of Quality council of India. He has a vast experience in blood bank services too.",
  drSnehaIntro:
    "Dr. Sneha has given free treatments to more than 5000 patients, and she is running an NGO dedicated to Childhood Disease and Rehabilitation.",
  videoCallText: "Quick Video Call Consultation",
  appointText: "Book Appointment",
  dateTime: "Date & Time",
  forProfText: "(For Professional Health Care Providers only)",
  ddText:
    "<h1 id='dd-text'>Direct <span style='color:#00ae4d;'>Doctor</span></h1>",
  withText: "with",
  beAPartText: "BE A PART OF THE FUTURE",
  numberText: "MAIL US",
  callUsText: "CALL US",
  nameText: "Name",
  phoneNumberText: "Number",
  prescriptionText: "Prescription",
  textareaText: "What is Health Problem",
};

const hindi = {
  heading1: "स्वास्थ्य और देखभाल के भविष्य में आपका स्वागत है",
  heading2: "प्रत्यक्ष ",
  doctorTxt: " चिकित्सक",
  heading3: "फ्यूचर फैमिली डॉक्टर",
  whyDd: "डायरेक्ट डॉक्टर क्यों चुनें?",
  whyDdLi1: "योग्य चिकित्सक से निःशुल्क परामर्श प्राप्त करें।",
  whyDdLi2:
    "हम गर्भवती महिलाओं को कम से कम 15000/- रुपये में सर्वोत्तम उपचार प्राप्त करने में मदद करेंगे।",
  whyDdLi3: "उपचार पर 20-40% तक की छूट प्राप्त करें।",
  whyDdLi4:
    "उपचार/सेवाओं जैसे लैब/अल्ट्रासाउंड/एक्स-रे/सीटी स्कैन/एमआरआई आदि में 30% तक की छूट प्राप्त करें।",
  whyDdLi5: "दलालों/बिचौलियों से छुटकारा पाएं।",
  whyDdLi6: "सर्वोत्तम मूल्य पर सर्वोत्तम अस्पताल अनुशंसा प्राप्त करें।",
  whyDdLi7:
    "अपने अस्पताल आने से पहले हमें  <a class='calling-num' href='tel:+918881113481'>+91 8881113481</a>, <a class='calling-num' href='tel:+917310103481'>+91 73101 03481<a> पर एक कॉल देकर अपना समय और पैसा बचाएं।",
  benefitsToPatients:
    "<li>हम सभी प्रकार के रोगियों (टीपीए, नकद, कैशलेस, सरकारी कर्मचारी, आयुष्मान भारत) को उनके अनुपालन के अनुसार अस्पताल और निदान केंद्रों का सर्वोत्तम विकल्प प्रदान करेंगे।</li><li>हमारी विशेषज्ञ डॉक्टर टीम आपको सही सुझाव देगी कि कहाँ जाना है और क्या करना है।</li><li>हम अस्पताल/निदान उपचार बिल पर नियंत्रण रखते हुए रोगियों के लिए उपचार लागत न्यूनतम रखते हैं।</li><li>बिचौलिए/कमीशन एजेंट को दरकिनार कर, इलाज की लागत कम हो जाती है, और उसे शहर में सबसे अच्छे अस्पतालों के विकल्प मिलेंगे।</li><li>आज की तकनीक यानी मोबाइल एप्लिकेशन, सोशल मीडिया आदि का उपयोग करके हम आपको स्वास्थ्य संबंधी सही जानकारी देंगे।</li>",
  bToPatientsHeading: "मरीजों को लाभ",
  bToHospitalHeading: "अस्पताल को लाभ",
  benefitsToHospital:
    "<li>अच्छी तरह से योग्य डॉक्टरों की एक टीम द्वारा मरीजों की काउंसलिंग की जाती है।</li><li>कमीशन एजेंटों/बिचौलियों को दरकिनार कर आपके अस्पताल सीधे मरीजों से जुड़ जाएंगे।</li><li>कम दर/पैकेज के साथ आपके अस्पतालों को अधिक मात्रा में मामले मिलते हैं।</li><li>विपणन व्यक्तियों/पीआरओ के वेतन भार को कम करने से अस्पतालों को लाभ होगा।</li><li>अस्पताल हमारे प्लेटफॉर्म के माध्यम से विशेष आयोजनों/ओपीडी/विशेष शिविरों को भी बढ़ावा दे सकते हैं।</li><li>अस्पतालों को सभी विभागों के मरीज मिल सकते हैं।</li><li>अपने सोशल मीडिया नेटवर्क के जरिए हम अस्पतालों में हर तरह के मरीजों को मुहैया कराएंगे।</li><li>अच्छे डॉक्टर के सहारे अस्पतालों को मिलती है पहचान | तकनीकी कर्मचारी | सहायता दल। हम सीधे टीपीए रोगियों में लाइसेंस, एनएबीएच, क्यूसीआई और अन्य विभिन्न कार्यों में आपकी मदद करेंगे।</li>",
  ourVisionHeading: "हमारी दृष्टि",
  ourVision:
    "<li>सर्वोत्तम अस्पतालों और निदान केंद्रों में सर्वोत्तम मूल्य पर सर्वोत्तम उपचार की सुविधा प्रदान करना।</li><li>रोगियों को अच्छी तरह से योग्य डॉक्टरों (एमडी/एमएस/एमसीएच/डीएम) की एक टीम द्वारा सही सलाह प्रदान करना।</li><li>कमीशन एजेंट पूरी स्वास्थ्य प्रणाली के लिए एक बहुत बड़ा हानिकारक कारक हैं, इसलिए हम कमीशन एजेंटों द्वारा लगाए गए सभी परेशानी और ब्रोकरेज शुल्क को दरकिनार कर देते हैं और मरीजों को सीधे अस्पतालों में डॉक्टरों से जोड़ते हैं।</li><li>हम गरीब और जरूरतमंद मरीजों का मुफ्त इलाज भी करते हैं।</li>",
  contactUsText: "संपूर्ण स्वास्थ्य देखभाल समाधान के लिए",
  contactUs: "संपर्क करें",
  ourFoundersText: "हमारे संस्थापक",
  drAshishIntro:
    "डॉ. आशीष को हेल्थ केयर डिलीवरी सिस्टम में 10 साल का अनुभव है। उन्होंने सरकारी जिला अस्पतालों में नोडल अधिकारी के रूप में काम किया। उन्होंने क्वालिटी काउंसिल ऑफ इंडिया के क्वालिटी कंट्रोल असेसर के रूप में भी काम किया है। उन्हें ब्लड बैंक सेवाओं का भी व्यापक अनुभव है।",
  drSnehaIntro:
    "डॉ स्नेहा ने 5000 से ज्यादा मरीजों का मुफ्त इलाज किया है और वह चाइल्डहुड डिजीज एंड रिहैबिलिटेशन को समर्पित एक एनजीओ चला रही हैं।",
  videoCallText: "त्वरित वीडियो कॉल परामर्श",
  appointText: "निर्धारित तारीख बुक करना",
  dateTime: "दिनांक और समय",
  forProfText: "(केवल पेशेवर स्वास्थ्य देखभाल प्रदाताओं के लिए)",
  ddText:
    "<h1 id='dd-text'>प्रत्यक्ष  <span style='color:#00ae4d;'>चिकित्सक</span></h1>",
  withText: "साथ",
  beAPartText: "भविष्य का हिस्सा बनें",
  numberText: "मेल यूएस",
  callUsText: "हमें कॉल करें",
  nameText: "नाम",
  phoneNumberText: "मोबाइल नंबर",
  prescriptionText: "नुस्खा",
  textareaText: "स्वास्थ्य समस्या क्या है?",
};

const englishToHindi = () => {
  heading1.innerHTML = hindi.heading1;
  heading2.innerHTML = hindi.heading2;
  doctorTxt.innerHTML = hindi.doctorTxt;
  heading3.innerHTML = hindi.heading3;
  whyDd.innerHTML = hindi.whyDd;
  whyDdLi1.innerHTML = hindi.whyDdLi1;
  whyDdLi2.innerHTML = hindi.whyDdLi2;
  whyDdLi3.innerHTML = hindi.whyDdLi3;
  whyDdLi4.innerHTML = hindi.whyDdLi4;
  whyDdLi5.innerHTML = hindi.whyDdLi5;
  whyDdLi6.innerHTML = hindi.whyDdLi6;
  whyDdLi7.innerHTML = hindi.whyDdLi7;
  benefitsToPatients.innerHTML = hindi.benefitsToPatients;
  bToPatientsHeading.innerHTML = hindi.bToPatientsHeading;
  benefitsToHospital.innerHTML = hindi.benefitsToHospital;
  bToHospitalHeading.innerHTML = hindi.bToHospitalHeading;
  ourVisionHeading.innerHTML = hindi.ourVisionHeading;
  ourVision.innerHTML = hindi.ourVision;
  contactUsText.innerHTML = hindi.contactUsText;
  contactUs.innerHTML = hindi.contactUs;
  ourFoundersText.innerHTML = hindi.ourFoundersText;
  drAshishIntro.innerHTML = hindi.drAshishIntro;
  drSnehaIntro.innerHTML = hindi.drSnehaIntro;
  videoCallText.innerHTML = hindi.videoCallText;
  appointText.innerHTML = hindi.appointText;
  dateTime.innerHTML = hindi.dateTime;
  forProfText.innerHTML = hindi.forProfText;
  ddText.innerHTML = hindi.ddText;
  withText.innerHTML = hindi.withText;
  beAPartText.innerHTML = hindi.beAPartText;
  numberText.innerHTML = hindi.numberText;
  callUsText.innerHTML = hindi.callUsText;
  nameText.innerHTML = hindi.nameText;
  phoneNumberText.innerHTML = hindi.phoneNumberText;
  prescriptionText.innerHTML = hindi.prescriptionText;
  textareaText.innerHTML = hindi.textareaText;
};

const hindiToEnglish = () => {
  heading1.innerHTML = english.heading1;
  heading2.innerHTML = english.heading2;
  doctorTxt.innerHTML = english.doctorTxt;
  heading3.innerHTML = english.heading3;
  whyDd.innerHTML = english.whyDd;
  whyDdLi1.innerHTML = english.whyDdLi1;
  whyDdLi2.innerHTML = english.whyDdLi2;
  whyDdLi3.innerHTML = english.whyDdLi3;
  whyDdLi4.innerHTML = english.whyDdLi4;
  whyDdLi5.innerHTML = english.whyDdLi5;
  whyDdLi6.innerHTML = english.whyDdLi6;
  whyDdLi7.innerHTML = english.whyDdLi7;
  benefitsToPatients.innerHTML = english.benefitsToPatients;
  bToPatientsHeading.innerHTML = english.bToPatientsHeading;
  benefitsToHospital.innerHTML = english.benefitsToHospital;
  bToHospitalHeading.innerHTML = english.bToHospitalHeading;
  ourVisionHeading.innerHTML = english.ourVisionHeading;
  ourVision.innerHTML = english.ourVision;
  contactUsText.innerHTML = english.contactUsText;
  contactUs.innerHTML = english.contactUs;
  ourFoundersText.innerHTML = english.ourFoundersText;
  drAshishIntro.innerHTML = english.drAshishIntro;
  drSnehaIntro.innerHTML = english.drSnehaIntro;
  videoCallText.innerHTML = english.videoCallText;
  appointText.innerHTML = english.appointText;
  dateTime.innerHTML = english.dateTime;
  forProfText.innerHTML = english.forProfText;
  ddText.innerHTML = english.ddText;
  withText.innerHTML = english.withText;
  beAPartText.innerHTML = english.beAPartText;
  numberText.innerHTML = english.numberText;
  callUsText.innerHTML = english.callUsText;
  nameText.innerHTML = english.nameText;
  phoneNumberText.innerHTML = english.phoneNumberText;
  prescriptionText.innerHTML = english.prescriptionText;
  textareaText.innerHTML = english.textareaText;
};

engBtn.addEventListener("click", hindiToEnglish);
hindiBtn.addEventListener("click", englishToHindi);
