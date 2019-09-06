import axios from 'axios';
import jsPDF from 'jspdf';
import { takeLatest } from 'redux-saga/effects';

function* fetchOffer(action) {
  try {
      // gets the base64 img files
      yield console.log('hit pdf offer')
      const response = yield axios.get(`/api/purchase/PDF_pages`)
      .catch(error =>{
      console.log('WHY ARENT YOU WORKING purchase contract?', error)
    })
    //gets all data from row ${see page info pages for params details}
    yield 
      const answers = yield axios({ method: 'get', url:`/api/purchase/answers/${action.payload}`})
      .catch(error =>{
        console.log('error in pdf offer getting answers?', error)
      })
    yield
    // console.log(answers.data[0].id)
    const answer = answers.data[0];
    let doc = new jsPDF()
    doc.setFontSize(12);

    // -----------------------------------------------------------------------------------------
    //                              page # 1
    // ------------------------------------------------------------------------------------------
    
    doc.addImage(response.data[0].PAGE_1, 'JPEG',0,0,210,297) // finalized the coordinate
    // if(answer.id)doc.text(`${answer.id}`, 10,10,) // delete this line
    if(answer.DATE)doc.text(`${answer.DATE}`, 45,102)//132, 33
    if(answer.BUYER_1)doc.text(`${answer.BUYER_1}`, 40,46)//40, 46
    if(answer.L6A)doc.text(`${answer.L6A}`, 30,66)//40, 53 number 6 on the pdf page
    if(answer.L6B)doc.text(`${answer.L6B}`, 145,66) //dollar amount on number 6
    if(answer.L7A)doc.text('X', 105,32) // if(answer.L7A)doc.text(`X`, 135,42) /// does this line exist? i don't see it on the DOM/PDF 

    if(answer.L7B)doc.text(`${answer.L7B}`, 110,72) //110, 72
    if(answer.L12)doc.text(`${answer.L12}`, 45,102) //
    if(answer.L13A)doc.text(`${answer.L13A}`, 34,107.5) // can't locate A and B on the PDF even after making sure they're in the database
    if(answer.L13B)doc.text(`${answer.L13B}`, 126,107.5)
    if(answer.L14)doc.text(`${answer.L14}`, 90,115.5)
    if(answer.L29)doc.text(`${answer.L29}`, 35,185)
    if(answer.L32)doc.text(`${answer.L32}`, 40,200.5)
    if(answer.L34)doc.text(`${answer.L34}`, 119,212.5)
    if(answer.L35)doc.text(`${answer.L35}`, 22.5,219.5)
    if(answer.L37)doc.text(`${answer.L37}`, 26,230)
    if(answer.L39)doc.text(`${answer.L39}`, 26,240.5)
    if(answer.L40)doc.text(`${answer.L40}`, 26,247)
    if(answer.L41)doc.text(`${answer.L41}`, 26,258)///this should have been named differently-L42 
    if(answer.L45)doc.text(`${answer.L45}`, 67,277)
    // if(answer.L45)doc.text(`${answers.L45}`, 10,10) shouldn't there be a 45B as well for the date?
    // -----------------------------------------------------------------------------------------
    //                              page # 2
    // -----------------------------------------------------------------------------------------
    doc.addPage()
    doc.addImage(response.data[0].PAGE_2, 'JPEG',0,0,210,297)
    if(answer.DATE)doc.text(`${answer.DATE}`, 144,23)
    if(answer.L12)doc.text(`${answer.L12}`, 53,31)
    // L49
    answer.L49 ?  doc.text(`X`, 63,46)   :   doc.text(`X`, 72,46)
    // L53
    answer.L53  ?  doc.text(`X`, 22,71)  :  doc.text(`X`, 67,71)
    // L54
    answer.L54  ?  doc.text(`X`, 38,77)  :  doc.text(`X`, 54.5,77.5)
    if(answer.L55)doc.text(`${answers.L55}`, 45,83.5)
    if(answer.L57)doc.text(`X`, 22,96.5)
    if(answer.L58)doc.text(`X`, 22,101.5)
    if(answer.L59)doc.text(`X`, 22,106.5)
    if(answer.L60)doc.text(`X`, 22,112)
    if(answer.L61)doc.text(`X`, 22,117.5)
    if(answer.L62A)doc.text(`X`, 22,123.5)
    if(answer.L62B)doc.text(`${answer.L62B}`, 40,123.5)
    if(answer.L63)doc.text(`${answer.L63}`, 183,130.5)
    if(answer.L64)doc.text(`${answer.L64}`, 98,137.5)
    if(answer.L70)doc.text(`X`, 22,171)
    // L73
    answer.L73  ?  doc.text(`X`, 28,186)  :  doc.text(`X`, 70.5,186.5)
    if(answer.L76)doc.text(`X`, 22,207)
    if(answer.L77)doc.text(`${answer.L77}`, 43,212.5)
    // -----------------------------------------------------------------------------------------
    //                              page # 3
    // ------------------------------------------------------------------------------------------
    doc.addPage()
    doc.addImage(response.data[0].PAGE_3, 'JPEG',0,0,210,297)
    if(answer.DATE)doc.text(`${answer.DATE}`, 185,14.5)
    if(answer.L12)doc.text(`${answer.L12}`, 144,23) //
    if(answer.L114)doc.text(`X`, 22,152)
    if(answer.L115)doc.text(`X`, 22,158)
    if(answer.L118)doc.text(`${answer.L118}`, 24,176)
    // L127
    answer.L127   ?   doc.text(`X`, 22,218.5)  :   doc.text(`X`, 42,219)
    if(answer.L133)doc.text(`${answer.L133}`, 100,254)
    // -----------------------------------------------------------------------------------------
    //                              page # 4
    // ------------------------------------------------------------------------------------------
    doc.addPage()
    doc.addImage(response.data[0].PAGE_4, 'JPEG',0,0,210,297)
    if(answer.DATE)doc.text(`${answer.DATE}`, 144,23)
    if(answer.L12)doc.text(`${answer.L12}`, 53,30)
    if(answer.L141)doc.text(`${answer.L141}`, 147,44)
    if(answer.L145A)doc.text(`${answer.L145A}`, 22,67)
    // L145 B
    answer.L145B  ?  doc.text(`X`, 108,68)  :  doc.text(`X`, 137,68)
    if(answer.L146)doc.text(`${answer.L146}`, 22,75)
    if(answer.L156)doc.text(`${answer.L156}`, 90,130)
    // L159
    answer.L159  ?  doc.text(`X`, 31,151)  :  doc.text(`X`, 40,151)
    if(answer.L160A)doc.text(`X`, 22,161)
    if(answer.L160B)doc.text(`${answer.L160B}`, 29,160)
    if(answer.L161A)doc.text(`X`, 22,168)
    if(answer.L161B)doc.text(`${answer.L161B}`, 27,167)
    // L170
    answer.L170  ?  doc.text(`X`, 141,217)  :  doc.text(`X`, 161,217)
    // L172
    answer.L172  ?  doc.text(`X`, 63,230)  :  doc.text(`X`, 72,230)
    // L178
    answer.L178  ?  doc.text(`X`, 31,262)  :  doc.text(`X`, 47,262)
    // -----------------------------------------------------------------------------------------
    //                              page # 5
    // ------------------------------------------------------------------------------------------
    doc.addPage()
    doc.addImage(response.data[0].PAGE_5, 'JPEG',0,0,210,297)
    if(answer.DATE)doc.text(`${answer.DATE}`, 144,23)
    if(answer.L12)doc.text(`${answer.L12}`, 53,31)
    if(answer.L184)doc.text(`${answer.L184}`,144, 46)
    if(answer.L192)doc.text(`${answer.L192}`, 68,85)
    if(answer.L198)doc.text(`X`, 22,125)
    if(answer.L201)doc.text(`X`, 22,140)
    if(answer.L12)doc.text(`${answer.L12}`, 35,145)
    if(answer.L210)doc.text(`X`, 22,187)

    // NEED TO LOOK INTO L215 AND L217
    // L215
    if(answer.L215A)doc.text(`X`, 46,219)
    if(answer.L215B)doc.text(`X`, 111,219)
    if(answer.L215C)doc.text(`X`, 123,219)
    if(answer.L215D)doc.text(`X`, 138,219)
    if(answer.L215E)doc.text(`${answer.L215E}`, 145,218)
    // L217
    if(answer.L217A)doc.text(`X`, 45,233)
    if(answer.L217B)doc.text(`X`, 102,233)
    if(answer.L217C)doc.text(`X`, 114,233)
    if(answer.L217D)doc.text(`X`, 128,233)
    if(answer.L217E)doc.text(`${answer.L217E}`, 135,232)

    // L219
    answer.L219  ?  doc.text(`X`, 158,248)  :  doc.text(`X`, 174,248)
    // -----------------------------------------------------------------------------------------
    //                              page # 6
    // ------------------------------------------------------------------------------------------
    doc.addPage()
    doc.addImage(response.data[0].PAGE_6, 'JPEG',0,0,210,297)
    if(answer.DATE)doc.text(`${answer.DATE}`, 144,23)
    if(answer.L12)doc.text(`${answer.L12}`, 53,30)
    // l226
    answer.L226  ?  doc.text(`X`, 22,44)  :  doc.text(`X`, 61,44)
    // L228
    answer.L228  ?  doc.text(`X`, 22,59)  :  doc.text(`X`, 152,59)
    // L231
    answer.L231  ?  doc.text(`X`, 22,78)  :  doc.text(`X`, 69,77)
    // L233
    answer.L233  ?  doc.text(`X`, 22,93)  :  doc.text(`X`, 68,92)
    // L239
    answer.L239  ?  doc.text(`X`, 135,127)  :  doc.text(`X`, 149,127)
    // L250
    answer.L250  ?  doc.text(`X`, 153,185)  :  doc.text(`X`, 163,185)

    if(answer.L251)doc.text(`${answer.L251}`, 125,193)
    if(answer.L252)doc.text(`${answer.L252}`, 125,200)

    if(answer.L257A)doc.text(`X`, 22,226)
    if(answer.L257B)doc.text(`X`, 56,226)
    if(answer.L257C)doc.text(`X`, 123,226)
    if(answer.L257D)doc.text(`X`, 165,226)

    if(answer.L258A)doc.text(`X`, 22,233)
    if(answer.L258B)doc.text(`${answer.L258B}`, 41,232)

    if(answer.L264)doc.text(`${answer.L264}`, 34,262)

    if(answer.L266)doc.text(`${answer.L266}`, 34,276)

    // -----------------------------------------------------------------------------------------
    //                              page # 7
    // ------------------------------------------------------------------------------------------
    doc.addPage()
    doc.addImage(response.data[0].PAGE_7, 'JPEG',0,0,210,297)
    if(answer.DATE)doc.text(`${answer.DATE}`, 144,23)
    if(answer.L12)doc.text(`${answer.L12}`, 53,31)
    if(answer.L270)doc.text(`X`, 21,43)
    if(answer.L271A)doc.text(`X`, 21,50)
    if(answer.L271B)doc.text(`${answer.L271B}`, 41,49)

    // -----------------------------------------------------------------------------------------
    //                              page # 8
    // ------------------------------------------------------------------------------------------
    doc.addPage()
    doc.addImage(response.data[0].PAGE_8, 'JPEG',0,0,210,297)
    if(answer.DATE)doc.text(`${answer.DATE}`, 144,23)
    if(answer.L12)doc.text(`${answer.L12}`, 53,31)
    if(answer.L359)doc.text(`X`, 107,239)
    if(answer.L360)doc.text(`X`, 73,244)
    // -----------------------------------------------------------------------------------------
    //                              page # 9
    // ------------------------------------------------------------------------------------------
    doc.addPage()
    doc.addImage(response.data[0].PAGE_9, 'JPEG',0,0,210,297)
    if(answer.DATE)doc.text(`${answer.DATE}`, 144,23)
    if(answer.L12)doc.text(`${answer.L12}`, 53,31)

    // L371 A
    answer.L371A  ?  doc.text(`X`, 44,53)  :  doc.text(`X`, 57,53)
    // L371 B
    answer.L371B  ?  doc.text(`X`, 93,53)  :  doc.text(`X`, 106,53)
    // L373 
    answer.L373  ?  doc.text(`X`, 37,65)  :  doc.text(`X`, 55,65)
    // L377
    answer.L377  ?  doc.text(`X`, 39,90)  :  doc.text(`X`, 59,90)
    // L379
    answer.L379  ?  doc.text(`X`, 73,104)  :  doc.text(`X`, 83,104)
    
    if(answer.L388A)doc.text(`X`, 22, 159)
    // L388 B
    answer.L388B  ?  doc.text(`X`, 125,159)  :  doc.text(`X`, 147,159)
    // L389 
    answer.L389A  ?  doc.text(`X`, 28,169)  :  doc.text(`X`, 28,169)
    if(answer.L389B)doc.text(`${answer.L389B}`,95,168)

    if(answer.L390)doc.text(answer.L390, 67, 177)

    if(answer.L391)doc.text(`X`, 22,185)

    if(answer.L394A)doc.text(`${answer.L394}`, 22,205)
    if(answer.L394B)doc.text(`X`, 96,207)
    if(answer.L394C)doc.text(`X`, 124,207)
    if(answer.L394D)doc.text(`X`, 152,207)
    if(answer.L394E)doc.text(`X`, 176,207)
    if(answer.COMPANY_1)doc.text(`${answer.COMPANY_1}`, 22,215)

    if(answer.L396A)doc.text(`${answer.L396}`, 22,226)
    if(answer.L396B)doc.text(`X`, 96,228)
    if(answer.L396C)doc.text(`X`, 124,228)
    if(answer.L396D)doc.text(`X`, 152,228)
    if(answer.L396E)doc.text(`X`, 176,228)
    if(answer.C0MPANY_2)doc.text(`${answer.C0MPANY_2}`, 22,236)
    // -----------------------------------------------------------------------------------------
    //                              page # 10
    // ------------------------------------------------------------------------------------------    
    doc.addPage()
    doc.addImage(response.data[0].PAGE_10, 'JPEG',0,0,210,297)
    if(answer.DATE)doc.text(`${answer.DATE}`, 144,23)
    if(answer.L12)doc.text(`${answer.L12}`, 53,31)
    if(answer.L403)doc.text(`X`, 22,53)
    if(answer.L404)doc.text(`X`, 22,60)
    if(answer.SIGNATURE_BUYER_1)doc.text(`${answer.SIGNATURE_BUYER_1}`, 10,10)
    if(answer.DATE)doc.text(`${answer.DATE}`, 125, 145)

    // -----------------------------------------------------------------------------------------
    //                              page # 11
    // ------------------------------------------------------------------------------------------ 
    doc.addPage()
    doc.addImage(response.data[0].PAGE_11, 'JPEG',0,0,210,297)
    if(answer.DATE)doc.text(`${answer.DATE}`, 144,23)
    if(answer.L12)doc.text(`${answer.L12}`, 53,31)
    if(answer.L454)doc.text(`${answer.L454}`, 35,79)

    // -----------------------------------------------------------------------------------------
    //                              page # 12
    // ------------------------------------------------------------------------------------------ 
    doc.addPage()
    doc.addImage(response.data[0].PAGE_12, 'JPEG',0,0,210,297)
    if(answer.DATE)doc.text(`${answer.DATE}`, 144,23)
    if(answer.L12)doc.text(`${answer.L12}`, 53,32)
    if(answer.L490)doc.text(`X`, 21,60)
    answer.L494    ?   doc.text(`X`, 52,81)    :    doc.text(`X`, 61,81)
    if(answer.SIGNATURE_BUYER_1)doc.text(`${answer.SIGNATURE_BUYER_1}`, 10,10)
    if(answer.BUYER_1)doc.text(`${answer.BUYER_1}`, 120,130)
    if(answer.SIGNATURE_BUYER_1)doc.text(`${answer.SIGNATURE_BUYER_1}`, 10,10)



    // -----------------------------------------------------------------------------------------
    //                              page # 13
    // ------------------------------------------------------------------------------------------ 
    doc.addPage()
    doc.addImage(response.data[0].PAGE_13, 'JPEG',0,0,210,297)
    if(answer.SIGNATURE_BUYER_1)doc.text(`${answer.SIGNATURE_BUYER_1}`, 15, 233, 19, 19)
    if(answer.DATE)doc.text(`${answer.DATE}`, 70, 247)

    doc.save('a4.pdf')

        
  } catch (error) {
    console.log('pdfOffer listing failed', error);
  }
}

function* pdfOffer() {
  yield takeLatest('FETCH_OFFER', fetchOffer);
}

export default pdfOffer;
