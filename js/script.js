let country_list = {
  "AED" : "AE",
  "AFN" : "AF",
  "XCD" : "AG",
  "ALL" : "AL",
  "AMD" : "AM",
  "ANG" : "AN",
  "AOA" : "AO",
  "AQD" : "AQ",
  "ARS" : "AR",
  "AUD" : "AU",
  "AZN" : "AZ",
  "BAM" : "BA",
  "BBD" : "BB",
  "BDT" : "BD",
  "XOF" : "BE",
  "BGN" : "BG",
  "BHD" : "BH",
  "BIF" : "BI",
  "BMD" : "BM",
  "BND" : "BN",
  "BOB" : "BO",
  "BRL" : "BR",
  "BSD" : "BS",
  "NOK" : "BV",
  "BWP" : "BW",
  "BYR" : "BY",
  "BZD" : "BZ",
  "CAD" : "CA",
  "CDF" : "CD",
  "XAF" : "CF",
  "CHF" : "CH",
  "CLP" : "CL",
  "CNY" : "CN",
  "COP" : "CO",
  "CRC" : "CR",
  "CUP" : "CU",
  "CVE" : "CV",
  "CYP" : "CY",
  "CZK" : "CZ",
  "DJF" : "DJ",
  "DKK" : "DK",
  "DOP" : "DO",
  "DZD" : "DZ",
  "ECS" : "EC",
  "EEK" : "EE",
  "EGP" : "EG",
  "ETB" : "ET",
  "EUR" : "FR",
  "FJD" : "FJ",
  "FKP" : "FK",
  "GBP" : "GB",
  "GEL" : "GE",
  "GGP" : "GG",
  "GHS" : "GH",
  "GIP" : "GI",
  "GMD" : "GM",
  "GNF" : "GN",
  "GTQ" : "GT",
  "GYD" : "GY",
  "HKD" : "HK",
  "HNL" : "HN",
  "HRK" : "HR",
  "HTG" : "HT",
  "HUF" : "HU",
  "IDR" : "ID",
  "ILS" : "IL",
  "INR" : "IN",
  "IQD" : "IQ",
  "IRR" : "IR",
  "ISK" : "IS",
  "JMD" : "JM",
  "JOD" : "JO",
  "JPY" : "JP",
  "KES" : "KE",
  "KGS" : "KG",
  "KHR" : "KH",
  "KMF" : "KM",
  "KPW" : "KP",
  "KRW" : "KR",
  "KWD" : "KW",
  "KYD" : "KY",
  "KZT" : "KZ",
  "LAK" : "LA",
  "LBP" : "LB",
  "LKR" : "LK",
  "LRD" : "LR",
  "LSL" : "LS",
  "LTL" : "LT",
  "LVL" : "LV",
  "LYD" : "LY",
  "MAD" : "MA",
  "MDL" : "MD",
  "MGA" : "MG",
  "MKD" : "MK",
  "MMK" : "MM",
  "MNT" : "MN",
  "MOP" : "MO",
  "MRO" : "MR",
  "MTL" : "MT",
  "MUR" : "MU",
  "MVR" : "MV",
  "MWK" : "MW",
  "MXN" : "MX",
  "MYR" : "MY",
  "MZN" : "MZ",
  "NAD" : "NA",
  "XPF" : "NC",
  "NGN" : "NG",
  "NIO" : "NI",
  "NPR" : "NP",
  "NZD" : "NZ",
  "OMR" : "OM",
  "PAB" : "PA",
  "PEN" : "PE",
  "PGK" : "PG",
  "PHP" : "PH",
  "PKR" : "PK",
  "PLN" : "PL",
  "PYG" : "PY",
  "QAR" : "QA",
  "RON" : "RO",
  "RSD" : "RS",
  "RUB" : "RU",
  "RWF" : "RW",
  "SAR" : "SA",
  "SBD" : "SB",
  "SCR" : "SC",
  "SDG" : "SD",
  "SEK" : "SE",
  "SGD" : "SG",
  "SKK" : "SK",
  "SLL" : "SL",
  "SOS" : "SO",
  "SRD" : "SR",
  "STD" : "ST",
  "SVC" : "SV",
  "SYP" : "SY",
  "SZL" : "SZ",
  "THB" : "TH",
  "TJS" : "TJ",
  "TMT" : "TM",
  "TND" : "TN",
  "TOP" : "TO",
  "TRY" : "TR",
  "TTD" : "TT",
  "TWD" : "TW",
  "TZS" : "TZ",
  "UAH" : "UA",
  "UGX" : "UG",
  "USD" : "US",
  "UYU" : "UY",
  "UZS" : "UZ",
  "VEF" : "VE",
  "VND" : "VN",
  "VUV" : "VU",
  "YER" : "YE",
  "ZAR" : "ZA",
  "ZMK" : "ZM",
  "ZWD" : "ZW"
}

let fromSelect=document.querySelector(".fromBox select");
let toSelect=document.querySelector(".toBox select");
let totalSelect=document.querySelectorAll(".main-box select");

for(let i=0;i<totalSelect.length;i++)
{
  let selected;
  for(currency_code in country_list)
  {
    if(i===0)
    {
      selected= currency_code=='USD'?"selected":""
    }
    else if(i===1)
    {
      selected= currency_code=='INR'?"selected":""
    }

    let optionTag=` <option value="${currency_code}" ${selected}>${currency_code}</option>`
    totalSelect[i].insertAdjacentHTML("beforeend",optionTag);
  }

  totalSelect[i].addEventListener("change",(e)=>{
    changeFlag(e.target)
  })

}

function changeFlag(element)
{
 
  for(let currency_code in country_list)
  {
    if(element.value===currency_code)
    {
      let imgTag=element.parentElement.querySelector("img");
      imgTag.src=`https://flagcdn.com/48x36/${country_list[currency_code].toLowerCase()}.png`;
    }
  }
}

async function getExchangeRate()
{
  let amount=document.querySelector(".amount input");
  let amountVal=amount.value;
  if(amountVal<=0)
  {
    document.querySelector(".result p").textContent=`input value should be greater than 0`;
    document.querySelector(".result p").style.color="red";
    document.querySelector(".result p").style.backgroundColor="rgba(213, 54, 43, 0.3)";
    document.querySelector(".result p").style.border="none";
  }
  else
  {
    document.querySelector(".result p").textContent="Loading...";
    
    document.querySelector(".result p").style.color="white";
    document.querySelector(".result p").style.backgroundColor="rgb(0, 0, 0,0.8)";
    document.querySelector(".result p").style.border="1px solid rgb(27, 156, 98)";

    
    let apiKey=`7efdca813ac0589f604b60db`;
    let res=await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromSelect.value}`);
    let data=await res.json();

    let convertionvalue=(amountVal*data.conversion_rates[toSelect.value]).toFixed(2);
    document.querySelector(".result p").textContent=`${amountVal} ${fromSelect.value} = ${convertionvalue} ${toSelect.value}`;
  }
  

}

window.addEventListener("load",()=>{
  getExchangeRate();
});

document.querySelector(".result button").addEventListener("click",getExchangeRate);

document.querySelector(".swap").addEventListener("click",()=>{
  let val=fromSelect.value;
  fromSelect.value=toSelect.value;
  toSelect.value=val;
  let imgTag1=document.querySelector(".fromBox img");
  imgTag1.src=`https://flagcdn.com/48x36/${country_list[fromSelect.value].toLowerCase()}.png`;
  let imgTag2=document.querySelector(".toBox img");
  imgTag2.src=`https://flagcdn.com/48x36/${country_list[toSelect.value].toLowerCase()}.png`;
  getExchangeRate()

})
