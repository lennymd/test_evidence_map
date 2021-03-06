// ACCESSOR FUNCTIONS for all the important columns
let ref_id = d => d.Refid;
let study_name = d => d.study_name;
let target_social_need = d => d.target_social_need;
let study_type = d => d.study_type;
let study_design = d => d.study_design;
let recruitment_setting = d => d.recruitment_setting;
let intervention_setting = d => d.intervention_setting;
let intervention_arm = d => d.intervention_arm;
let intervention_description = d => d.intervention_description;
let inclusion_criteria = d => d.inclusion_criteria;
let target_population = d => d.target_population;
let age_group = d => d.age_group;
let race_ethnicity_majority = d => d.race_ethnicity_majority;
let proportion_male = d => d.proportion_male;
let proportion_immigrant = d => d.proportion_immigrant;
let quality_rating = d => d.quality;
let comparator = d => d.comparator;
let sample_size = d => d.sample_size;
let intervention_target = d => d.intervention_target;
let individual_systems_intervention = d => d.individual_systems_intervention;
let specific_intervention_components = d => d.specific_intervention_components;
let service_provider = d => d.service_provider;
let duration_followup = d => d.duration_followup;
let addresses_health_outcomes = d => d.addresses_health_outcomes;
let health_outcomes = d => d.health_outcomes;
let result_QALY = d => d.result_QALY;
let result_mortality = d => d.result_mortality;
let result_mental_health_status = d => d.result_mental_health_status;
let result_functional = d => d.result_functional;
let result_morbidity = d => d.result_morbidity;
let result_quality_of_life = d => d.result_quality_of_life;
let result_self_health = d => d.result_self_health;
let result_low_birth_weight = d => d.result_low_birth_weight;
let result_child_development = d => d.result_child_development;
let result_other_health = d => d.result_other_health;
let addresses_behavioral_outcomes = d => d.addresses_behavioral_outcomes;
let behavioral_outcomes = d => d.behavioral_outcomes;
let result_substance_use = d => d.result_substance_use;
let result_diet = d => d.result_diet;
let result_physical_activity = d => d.result_physical_activity;
let result_other_behavior = d => d.result_other_behavior;
let addresses_healthcareuse_outcomes = d => d.addresses_healthcareuse_outcomes;
let healthcareuse_outcomes = d => d.healthcareuse_outcomes;
let result_hospital_readmission = d => d.result_hospital_readmission;
let direction_hospital_readmission = d => d.direction_hospital_readmission;
let result_frequency_healthcare_use = d => d.result_frequency_healthcare_use;
let direction_frequency_healthcare_use = d =>
  d.direction_frequency_healthcare_use;
let result_adherence = d => d.result_adherence;
let direction_adherence = d => d.direction_adherence;
let result_preventive = d => d.result_preventive;
let direction_preventive = d => d.direction_preventive;
let result_outpatient_visits = d => d.result_outpatient_visits;
let direction_outpatient_visits = d => d.direction_outpatient_visits;
let result_emergency_visits = d => d.result_emergency_visits;
let direction_emergency_visits = d => d.direction_emergency_visits;
let result_clinic_attendance = d => d.result_clinic_attendance;
let direction_clinic_attendance = d => d.direction_clinic_attendance;
let result_emergency_transport = d => d.result_emergency_transport;
let direction_emergency_transport = d => d.direction_emergency_transport;
let result_post_primarycare_visits = d => d.result_post_primarycare_visits;
let direction_post_primarycare_visits = d =>
  d.direction_post_primarycare_visits;
let result_prenatal = d => d.result_prenatal;
let direction_prenatal = d => d.direction_prenatal;
let result_inpatient_admission = d => d.result_inpatient_admission;
let direction_inpatient_admission = d => d.direction_inpatient_admission;
let result_hospital_days = d => d.result_hospital_days;
let direction_hospital_days = d => d.direction_hospital_days;
let result_sober_center = d => d.result_sober_center;
let direction_sober_center = d => d.direction_sober_center;
let result_medical_home = d => d.result_medical_home;
let direction_medical_home = d => d.direction_medical_home;
let result_missed_appt = d => d.result_missed_appt;
let direction_missed_appointments = d => d.direction_missed_appointments;
let result_immunizations = d => d.result_immunizations;
let direction_immunizations = d => d.direction_immunizations;
let result_other_healthcareuse = d => d.result_other_healthcareuse;
let direction_other_healthcareuse = d => d.direction_other_healthcareuse;
let authors = d => d.Author;
let title = d => d.Title;
let abstract = d => d.Abstract;
let doi = d => d.DOI;
let journal = d => d.Journal;
let keywords = d => d.Keywords;
let study_url = d => d.URL;
let year = d => d.year;

let result_accessors = [
  [
    result_substance_use,
    result_diet,
    result_physical_activity,
    result_other_behavior,
  ],
  [
    result_functional,
    result_self_health,
    result_child_development,
    result_low_birth_weight,
    result_mental_health_status,
    result_mortality,
    result_quality_of_life,
    result_QALY,
    result_morbidity,
    result_other_health,
  ],
  [
    result_adherence,
    result_clinic_attendance,
    result_emergency_visits,
    result_frequency_healthcare_use,
    result_hospital_days,
    result_hospital_readmission,
    result_immunizations,
    result_inpatient_admission,
    result_medical_home,
    result_missed_appt,
    result_outpatient_visits,
    result_post_primarycare_visits,
    result_prenatal,
    result_preventive,
    result_sober_center,
    result_emergency_transport,
    result_other_healthcareuse,
  ],
];

let direction_accessors = [
  direction_adherence,
  direction_clinic_attendance,
  direction_emergency_visits,
  direction_frequency_healthcare_use,
  direction_hospital_days,
  direction_hospital_readmission,
  direction_immunizations,
  direction_inpatient_admission,
  direction_medical_home,
  direction_missed_appointments,
  direction_outpatient_visits,
  direction_post_primarycare_visits,
  direction_prenatal,
  direction_preventive,
  direction_sober_center,
  direction_emergency_transport,
  direction_other_healthcareuse,
];
