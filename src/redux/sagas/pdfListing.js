import axios from 'axios';
import jsPDF from 'jspdf';
import { takeLatest } from 'redux-saga/effects';

function* fetchListing(action) {
  try {
    // gets the base64 img files
    yield console.log('hit pdf listing')
    const response = yield axios.get(`/api/listing/PDF_pages`)
      .catch(error => {
        console.log('WHY ARENT YOU WORKING listibf contract?', error)
      })
    yield
    //gets all data from row ${see page info pages for params details}
    const answers = yield axios({ method: 'get', url: `/api/listing/answers/${action.payload}` })
      .catch(error => {
        console.log('error in pdf listing getting answers?', error)
      })
    yield
 
    console.log(answers.data[0].id)//
    const answer = answers.data[0]
    let doc = new jsPDF()
    doc.setFontSize(11); 
    
    // pdf.setFont("helvetica");
    // pdf.setFontType("");
    // pdf.setFontSize(9);

    // --------------------------------------------------------------------------------------
    //                              page # 1
    // ------------------------------------------------------------------------------------------
    doc.addImage(response.data[0].PAGE_1, 'JPEG', 0, 0, 210, 297)
    // doc.text(`${answer.id}`, 10,10)
    if (answer.DATE) doc.text(`${answer.DATE}`, 125, 39)
    doc.text(`7`, 136, 45)
    if (answer.L3) { doc.text(`${answer.L3}`, 117, 52) }
    if (answer.L4) { doc.text(`${answer.L4}`, 52, 59) }
    // doc.text(`${answer.L5}`,35,66)
    if (answer.BUYER_1) { doc.text(`${answer.BUYER_1}`, 35, 73) }
    if (answer.L7) doc.text(`${answer.L7}`, 35, 80)
    if (answer.L8A) doc.text(`${answer.L8A}`, 60, 90)
    // doc.text(`${answer.L8B}`,105,90)
    if (answer.L8C) doc.text(`${answer.L8C}`, 160, 90)
    // doc.text(`${answer.L9}`,26,97)
    if (answer.L12) doc.text(`${answer.L12}`, 115, 113)
    if (answer.L13) doc.text(`${answer.L13}`, 35, 120)
    //logic
    answer.L41 ?
      doc.text(`X`, 173, 262)//true    
      :
      doc.text(`X`, 189, 262)//false
    // -----------------------------------------------------------------------------------------
    //                              page # 2
    // ------------------------------------------------------------------------------------------
    doc.addPage()
    doc.addImage(response.data[0].PAGE_2, 'JPEG', 0, 0, 210, 297)
    if (answer.L3) doc.text(`${answer.L3}`, 55, 35)
    answer.L54 ?
      doc.text(`X`, 173, 82)
      :
      doc.text(`X`, 189, 82)//false
    answer.L63 ?
      doc.text(`X`, 173, 127)
      :
      doc.text(`X`, 189, 127)//false
    answer.L71 ?
      doc.text(`X`, 173, 169)
      :
      doc.text(`X`, 189, 169)//false
    answer.L72 ?
      doc.text(`X`, 83, 178)
      :
      doc.text(`X`, 95, 178)//false
    if (answer.L7) doc.text(`${answer.L7}`, 25, 185)
    answer.L73 ?
      doc.text(`X`, 111, 187)
      :
      doc.text(`X`, 124, 187)//false
    // -----------------------------------------------------------------------------------------
    //                              page # 3
    // -----------------------------------------------------------------------------------------
    doc.addPage()
    doc.addImage(response.data[0].PAGE_3, 'JPEG', 0, 0, 210, 297)
    if (answer.L3) doc.text(`${answer.L3}`, 55, 35)
    if (answer.L115) doc.text(`${answer.L115}`, 99, 148)
    if (answer.L118) doc.text(`${answer.L118}`, 115, 164)
    if (answer.L119) doc.text(`${answer.L119}`, 30, 170)
    if (answer.L121) doc.text(`${answer.L121}`, 35, 183)
    if (answer.L131) doc.text(`${answer.L131}`, 35, 233)
    // -----------------------------------------------------------------------------------------
    //                              page # 4
    // ------------------------------------------------------------------------------------------
    doc.addPage()
    doc.addImage(response.data[0].PAGE_4, 'JPEG', 0, 0, 210, 297)
    if (answer.L3) doc.text(`${answer.L3}`, 55, 35)
    if (answer.L146) {
      doc.text(`X`, 85, 57)
      //  line 148
      if (answer.L148A) { doc.text(`X`, 21, 71) }
      if (answer.L148B) { doc.text(`${answer.L148B}`, 28, 70) }
      if (answer.L148C) { doc.text(`${answer.L148C}`, 92, 70) }
      // line 150
      if (answer.L150A) { doc.text(`X`, 21, 82) }
      if (answer.L150B) { doc.text(`${answer.L150B}`, 28, 81) }
      if (answer.L150C) { doc.text(`${answer.L150C}`, 92, 81) }
      // line 152
      if (answer.L152A) { doc.text(`X`, 21, 94) }
      if (answer.L152B) { doc.text(`${answer.L152B}`, 38, 93) }
    } else doc.text(`X`, 103, 57)//false
    // we did need line 164 in the DB
    answer.L163 ?
      doc.text(`X`, 21, 159)//true 
      :
      doc.text(`X`, 21, 165)//false
    // initials
    if (answer.L165A) { doc.text(`${answer.L165A}`, 21, 172) }
    if (answer.L165B) { doc.text(`${answer.L165B}`, 49, 172) }
    answer.L175 ?
      doc.text(`X`, 88, 231)//true 
      :
      doc.text(`X`, 98, 231)//false
    // -----------------------------------------------------------------------------------------
    //                              page # 5
    // ------------------------------------------------------------------------------------------
    doc.addPage()
    doc.addImage(response.data[0].PAGE_5, 'JPEG', 0, 0, 210, 297)
    if (answer.L3) doc.text(`${answer.L3}`, 55, 33)
    if (answer.L196) { doc.text(`X`, 22, 101) }
    if (answer.L198) { doc.text(`X`, 22, 110) }
    if (answer.L200) doc.text(`${answer.L200}`, 67, 120)
    doc.addImage(`${answer.SIGNATURE_BUYER_1}`, 127, 120, 18, 18) // 127, 120, 18,18
    if (answer.DATE) doc.text(`${answer.DATE}`, 125, 142)
    // -----------------------------------------------------------------------------------------
    //                              page # 6
    // ------------------------------------------------------------------------------------------
    doc.addPage()
    doc.addImage(response.data[0].PAGE_6, 'JPEG', 0, 0, 210, 297)
    if (answer.L3) doc.text(`${answer.L3}`, 55, 33)
    if (answer.L237) doc.text(`${answer.L237}`, 35, 63)
    //243 a,b
    // doc.text(`${answer.COMPANY}`,50,110)
    // doc.text(`${answer.SIGNATURE_BUYER_1}`,140,112)
    if (answer.SIGNATURE_BUYER_1) doc.addImage(`${answer.SIGNATURE_BUYER_1}`, 130, 100, 19, 19) //x, y, box size

    //244 a,b
    // doc.text(`Nate Labbatt`,35,126)
    if (answer.DATE) doc.text(`${answer.DATE}`, 120, 127)
    //245 a,b
    // doc.text(`${answer.DATE}`,35,140)
    if (answer.L3) doc.text(`${answer.L3}`, 120, 140)
    //246
    // doc.text(`221 N 1st ST STE 100`,35,155)
    // doc.text(`Minneapolis, MN 55401`,35,160)
    if (answer.BUYER_1_PHONE) doc.text(`${answer.BUYER_1_PHONE}`, 120, 155)
    //247
    // doc.text(`651-373-4787`,35,170)
    if (answer.BUYER_1_EMAIL) doc.text(`${answer.BUYER_1_EMAIL}`, 120, 170)
    //248
    // doc.text(`eric.hermanson@lakesmn.com`,35,185)


    // -----------------------------------------------------------------------------------------
    //                              page # 7
    // ------------------------------------------------------------------------------------------
    doc.addPage()
    doc.addImage(response.data[0].PAGE_7, 'JPEG', 0, 0, 210, 297)
    doc.addImage(`${answer.SIGNATURE_BUYER_1}`, 15, 233, 19, 19) // 15,233,18,18
    if (answer.DATE) doc.text(`${answer.DATE}`, 70, 247)  //proper coordinant is 70, 247
    doc.save('Document')
    // .setFontSize(10);
  } catch (error) {
    console.log('pdfListing listing failed', error);
  }
}

function* pdfListing() {
  yield takeLatest('FETCH_LISTING', fetchListing);
}

export default pdfListing;

