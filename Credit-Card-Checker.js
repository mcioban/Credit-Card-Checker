
      let temp = array[i]*2;
      //console.log('temp: ' + temp);
      if(temp > 9){
        temp = temp - 9
      } 
      sum_impar = sum_impar + temp;
    } 
  }
  let sum = sum_impar + sum_par
  //console.log(sum);
  if(sum%10 === 0) {
    console.log('valid');
    return true;
  } else {
    console.log('invalid');
    return false;
  }
}

function findInvalidCards(batch) {
  let array_invalid = [];
  for(let i = 0; i<= batch.length - 1; i++) {
    if(!validateCred(batch[i])){
      array_invalid.push(batch[i]);
    }
    //console.log(array_invalid);
  }
};

findInvalidCards(batch);

function idInvalidCardCompanies(narray){
  let invalidCardCompany = [];
  for(let i= 0; i<narray.length-1; i++) {
    switch(narray[i][0]){
      case 3:
        if(invalidCardCompany.indexOf('AMEX') === -1) { 
          invalidCardCompany.push('AMEX');
        }
        break; 
        
      case 4:
        if(invalidCardCompany.indexOf('Visa') === -1) { 
          invalidCardCompany.push('Visa');
        }
        break; 
    
      case 5:
        if(invalidCardCompany.indexOf('Mastercard') === -1) { 
          invalidCardCompany.push('Mastercard');
        }
        break; 

      case 6:
        if(invalidCardCompany.indexOf('Discover') === -1) { 
          invalidCardCompany.push('Discover');
        }
        break; 
      default:
        console.log('Company not found');
    }
  }
  
  console.log(invalidCardCompany);
  return invalidCardCompany;

}


idInvalidCardCompanies(batch);

//console.log('valid1 length: ' + valid1.length);
//console.log('invalid1 length: ' + invalid1.length);
//console.log('mystery1 length: ' + mystery1.length);
/*validateCred(valid1);
validateCred(valid2);
validateCred(valid3);//de ce e invalid??
validateCred(valid4);
validateCred(valid5);
validateCred(invalid1);
validateCred(invalid2);
validateCred(invalid3);
validateCred(invalid4);
validateCred(invalid5);
validateCred(mystery1);
validateCred(mystery2);
validateCred(mystery3);
validateCred(mystery4);
validateCred(mystery5);*/


