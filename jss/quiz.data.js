Q.data = {
    signs : ["<",">","="],
    units : ["µmol/L","mg/L","g/L","mg","mmol","mmol/L","mU/L","µg","nmol","nmol/L","µg/L","ng/L","pmol/L","mL/s","mL/min","mmol/kg d’eau","mmHg","mOsm/kg d’eau"," ","%","mg/L (P)"],
    values : [
//      {name : "", value : ["",""], type : 1 },
      
        {name : "Se ou Pl Créatinine - Homme", value : ["60 - 115 µmol/L","7 - 13 mg/L"], type : 1 },
        {name : "Se ou Pl Créatinine - Femme", value : ["45 - 105 µmol/L","5 - 12 mg/L"], type : 1 },
        {name : "Se ou Pl Urate - Homme", value : ["180 - 420 µmol/L","30 - 70 mg/L"], type : 1 },
        {name : "Se ou Pl Urate - Femme", value : ["150 - 360 µmol/L","25 - 60 mg/L"], type : 1 },
        {name : "Se ou Pl Urée", value : ["2.5 - 7.5 mmol/L","0.15 - 0.45 g/L"], type : 1 },
        {name : "dU Créatinine - Homme", value : ["10 - 18 mmol","1100 - 2000 mg"], type : 1 },
        {name : "dU Créatinine - Femme", value : ["9 - 12 mmol","1000 - 1350 mg"], type : 1 },
        {name : "dU Urate ", value : ["2.4 - 4.8 mmol","400 - 800 mg"], type : 1 },
        {name : "dU Urée", value : ["300 - 500 mmol","18 - 30 g"], type : 1 },
        {name : "Clairance rénale mesurée de la créatinine relative à la surface corporelle de référence (1,73 m²)", value : ["1.5 - 2.3 mL/s","90 - 140 mL/min"], type : 1 },
        {name : "Pl Sodium", value : ["135 - 145 mmol/L"], type : 1 },
        {name : "Pl Potassium", value : ["3.5 - 4.5 mmol/L"], type : 1 },
        {name : "Pl Chlorure", value : ["95 - 105 mmol/L"], type : 1 },
        {name : "Pl Bicarbonate", value : ["23 - 27 mmol/L"], type : 1 },
        {name : "Pl Osmolalité", value : ["295 - 310 mmol/kg d’eau","295 - 310 mOsm/kg d’eau"], type : 1 },
        {name : "Pl Ammonium", value : ["25 - 40 µmol/L","0.45 - 0.7 mg/L"], type : 1 },
        {name : "Se ou Pl Calcium", value : ["2.2 - 2.6 mmol/L","88 - 104 mg/L"], type : 1 },
        {name : "Se ou Pl Fer", value : ["10 - 30 µmol/L","0.55 - 1.65 mg/L"], type : 1 },
        {name : "Se ou Pl Saturation de la transferrine", value : ["0.2 - 0.4 ","20 - 40 %"], type : 1 },
        {name : "Se ou Pl Phosphate (inorganique)", value : ["0.8 - 1.4 mmol/L","25 - 45 mg/L (P)"], type : 1 },
        {name : "dU Calcium", value : ["2.5 - 8 mmol","100 - 320 mg"], type : 1 },
        {name : "SgA pH (à 37°C)", value : ["7.35 - 7.45 "], type : 1 },
        {name : "SgA pCO2", value : ["35 - 45 mmHg"], type : 1 },
        {name : "SgA pO2", value : ["80 - 100 mmHg"], type : 1 },
        {name : "SgA Oxyhémoglobine/Hémoglobine totale (SaO2)", value : ["0.94 - 1 ","94 - 100 %"], type : 1 },
        {name : "SgA Bicarbonate", value : ["23 - 27 mmol/L"], type : 1 },
        {name : "SgA CO2 total", value : ["25 - 30 mmol/L"], type : 1 },
        
        {name : "Se Alanine aminotransférase - Homme (ALAT, TGP)", value : ["< 45 UI/L"], type : 2 },
        {name : "Se Aspartate aminotransférase - Homme (ASAT, TGO)", value : ["< 35 UI/L"], type : 2 },
        {name : "Se Créatine kinase - Homme (CK)", value : ["< 171 UI/L"], type : 2 },
        {name : "Se Gamma glutamyltransférase - Homme (GGT)", value : ["< 55 UI/L"], type : 2 },
        {name : "Se Lactate déshydrogénase - Homme (LDH)", value : ["< 248 UI/L"], type : 2 },
        
        {name : "Se Alanine aminotransférase - Femme (ALAT, TGP)", value : ["< 34 UI/L"], type : 2 },
        {name : "Se Aspartate aminotransférase - Femme (ASAT, TGO)", value : ["< 35 UI/L"], type : 2 },
        {name : "Se Créatine kinase - Femme (CK)", value : ["< 145 UI/L"], type : 2 },
        {name : "Se Gamma glutamyltransférase - Femme (GGT)", value : ["< 38 UI/L"], type : 2 },
        {name : "Se Lactate déshydrogénase - Femme (LDH)", value : ["< 248 UI/L"], type : 2 },
        
        {name : "Pl Glucose", value : ["3.9 - 5.5 mmol/L","0.7 - 1 g/L"], type : 1 },
        {name : "Pl Lactate", value : ["0.5 - 2 mmol/L","45 - 180 mg/L"], type : 1 },
        {name : "LCR Glucose", value : ["2.5 - 3.5 mmol/L","0.45 - 0.65 g/L"], type : 1 },

        {name : "(H) Sg Hémoglobine", value : ["130 - 170 g/L"], type : 1 },
        {name : "(F) Sg Hémoglobine", value : ["120 - 160 g/L"], type : 1 },
//*/
        {name : "Sg Hémoglobine A2 / Hémoglobine totale", value : ["< 0.035 &nbsp;","< 3.5 %"], type : 2 },
        {name : "Sg Hémoglobine A1c / Hémoglobine totale", value : ["< 0.06 &nbsp;","< 6 %"], type : 2 },
        {name : "Se ou Pl Bilirubine totale", value : ["< 17 µmol/L","< 10 mg/L"], type : 2 },
        {name : "Se ou Pl Bilirubine conjuguée", value : ["= 0 µmol/L","= 0 mg/L"], type : 2 },
        {name : "Se ou Pl Bilirubine non conjuguée", value : ["< 17 µmol/L","< 10 mg/L"], type : 2 },

        {name : "Se ou Pl Tétra-iodothyronine libre (T4L)", value : ["10 - 23 pmol/L","8 - 18 ng/L"], type : 1 },
        {name : "Se ou Pl Hormone thyréotrope (TSH)", value : ["1.8 - 36 pmol/L","0.3 - 6 mU/L"], type : 1 },
        {name : "Pl (8h) Cortisol total", value : ["275 - 555 nmol/L","100 - 200 µg/L"], type : 1 },
        {name : "dU Cortisol libre", value : ["80 - 270 nmol","30 - 100 µg"], type : 1 },
        /* Bilan lipidique normal chez un patient sans facteur de risque */
       {name : "Se Cholestérol total", value : ["4.1 - 5.2 mmol/L","1.6 - 2 g/L"], type : 1 },
       /* TODO fix bug for trail 0 or not.*/
        {name : "Se Triglycérides", value : ["0.4 - 1.7 mmol/L","0.35 - 1.5 g/L"], type : 1 },
        
        {name : "Se Cholestérol HDL", value : ["> 1 mmol/L","> 0.4 g/L"], type : 2 },
        {name : "Se Cholestérol LDL", value : ["< 4.1 mmol/L","< 1.6 g/L"], type : 2 },
        /*
Objectifs thérapeutiques : Valeurs attendues du cholestérol LDL
En présence d’un seul facteur de risque < 4,9 mmol/L < 1,9 g/L
En présence de 2 facteurs de risque < 4,1 mmol/L < 1,6 g/L
En présence de plus de 2 facteurs de risque < 3,4 mmol/L < 1,3 g/L
En cas d’antécédent cardiovasculaire < 2,6 mmol/L < 1 g/L
PROTEINES */

        {name : "Se Protéines", value : ["65 - 80 g/L"], type : 1 },
        {name : "LCR Protéines", value : ["0.15 - 0.3 g/L"], type : 1 },
        {name : "Se Haptoglobine", value : ["1 - 3 g/L"], type : 1 },
        {name : "Se orosomucoïde (α1 glycoprotéine acide)", value : ["0.4 - 1.3 g/L"], type : 1 },

        {name : "Se Protéine C Réactive (CRP)", value : ["< 5 mg/L"], type : 2 },

        {name : "Se Transferrine", value : ["2 - 4 g/L"], type : 1 },
        {name : "(H) Se Ferritine", value : ["20 - 250 µg/L"], type : 1 },
        {name : "(F) Se Ferritine", value : ["15 - 150 µg/L"], type : 1 },
        {name : "Se Immunoglobulines A (IgA)", value : ["0.8 - 3.6 g/L"], type : 1 },
        {name : "Se Immunoglobulines G (IgG)", value : ["7 - 15 g/L"], type : 1 },
        {name : "Se Immunoglobulines M (IgM)", value : ["0.5 - 2.3 g/L"], type : 1 },
    ]
};
//http://www.cnci.univ-paris5.fr/pharmacie/Constantes_biologiques_adultes_2009.pdf
