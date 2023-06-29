const apiController = {};

const API_URL = 'https://api.meaningcloud.com/summarization-1.0';
const API_KEY = '1ac19698ae6f8372bedec08e88487986';

apiController.summarizeArticle = (req, res, next) => {
  // res.locals.summary = 'here is a great article summary';
  // return next();

  // capture URL from the req.body
  // console.log("req.body: ", req.body);
  // const ARTICLE_TEXT = req.body.txt;
  const ARTICLE_URL = req.body.url;

  // const ARTICLE_URL = 'https://www.ksl.com/article/50675677/costco-is-cracking-down-on-sharing-membership-cards';
  const PERCENTAGE = 20;
  // const ARTICLE_TEXT = 'NEW YORK — Some shoppers are buying Costco\'s $4.99 rotisserie chickens and paying at self-checkout. The problem: They aren\'t all members. Since Costco has expanded self-checkout, the company has noticed that non-members have been sneaking in to use membership cards that don\'t belong to them. The warehouse club retailer will now ask for shoppers\' membership cards along with a photo ID to use the self-checkout registers – the same policy as regular checkout lanes. \"We don\'t feel it\'s right that nonmembers receive the same benefits and pricing as our members,\" Costco said in a statement. Costco has around 120 million members, making it one of the largest membership clubs in the world. Costco members pay either $60 for a regular membership or $120 for an executive card every year to shop at clubs. This membership model is crucial to Costco\'s business, with the fees helping boost the company\'s profit and offset expenses. The company has not raised the cost of its membership since 2017, despite rivals such as Amazon and Sam\'s Club raising their membership fees. Any changes to membership growth could hurt Costco. \"The extent to which we achieve growth in our membership base, increase the penetration of Executive membership, and sustain high renewal rates materially influences our profitability,\" Costco says routinely in its annual filings. Netflix has also recently cracked down on members sharing passwords. The streaming giant previously turned a blind eye to password sharing because it was fueling growth, but all those non-paying members were hurting Netflix\'s bottom line. It has previously estimated that more than 100 million households worldwide share an account. Early results indicate that Netflix\'s new policy is paying off. The streaming service has seen its biggest jump in new subscriber sign-ups as a result of the crackdown since the early days of the COVID-19 pandemic in 2020 when people were stuck at home binging content on the platform.';
  // const SUMMARY_LENGTH = 3;

  // formulate POST request to API
  const formdata = new FormData();
  formdata.append('key', API_KEY);
  formdata.append('url', ARTICLE_URL);
  formdata.append('limit', PERCENTAGE);
  // formdata.append('txt', ARTICLE_TEXT);
  // formdata.append('sentences', SUMMARY_LENGTH);

  const requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
  };

  fetch(API_URL, requestOptions)
    .then((response) => response.json())
    // store in res.locals.articleSummary to be returned to client
    .then((response) => res.locals.summary = response.summary)
    .then(() => next())
    // might throw error if article length > 500 words
    .catch(error => {
      return next({
        log: `apiController.summarizeArticle ERROR: ${error}`,
        status: 500,
        message: 'An error occurred in apiController.summarizeArticle. See log for more info.'
      })
    });
};

apiController.summarizeText = (req, res, next) => {
  // res.locals.summary = 'here is a great article summary';
  // return next();

  const ARTICLE_TEXT = req.body.text;

  // const ARTICLE_URL = 'https://www.ksl.com/article/50675677/costco-is-cracking-down-on-sharing-membership-cards';
  const PERCENTAGE = 20;
  // const ARTICLE_TEXT = 'NEW YORK — Some shoppers are buying Costco\'s $4.99 rotisserie chickens and paying at self-checkout. The problem: They aren\'t all members. Since Costco has expanded self-checkout, the company has noticed that non-members have been sneaking in to use membership cards that don\'t belong to them. The warehouse club retailer will now ask for shoppers\' membership cards along with a photo ID to use the self-checkout registers – the same policy as regular checkout lanes. \"We don\'t feel it\'s right that nonmembers receive the same benefits and pricing as our members,\" Costco said in a statement. Costco has around 120 million members, making it one of the largest membership clubs in the world. Costco members pay either $60 for a regular membership or $120 for an executive card every year to shop at clubs. This membership model is crucial to Costco\'s business, with the fees helping boost the company\'s profit and offset expenses. The company has not raised the cost of its membership since 2017, despite rivals such as Amazon and Sam\'s Club raising their membership fees. Any changes to membership growth could hurt Costco. \"The extent to which we achieve growth in our membership base, increase the penetration of Executive membership, and sustain high renewal rates materially influences our profitability,\" Costco says routinely in its annual filings. Netflix has also recently cracked down on members sharing passwords. The streaming giant previously turned a blind eye to password sharing because it was fueling growth, but all those non-paying members were hurting Netflix\'s bottom line. It has previously estimated that more than 100 million households worldwide share an account. Early results indicate that Netflix\'s new policy is paying off. The streaming service has seen its biggest jump in new subscriber sign-ups as a result of the crackdown since the early days of the COVID-19 pandemic in 2020 when people were stuck at home binging content on the platform.';
  // const SUMMARY_LENGTH = 3;

  // formulate POST request to API
  const formdata = new FormData();
  formdata.append('key', API_KEY);
  formdata.append('txt', ARTICLE_TEXT);
  formdata.append('limit', PERCENTAGE);
  // formdata.append('url', ARTICLE_URL);
  // formdata.append('sentences', SUMMARY_LENGTH);

  const requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
  };

  fetch(API_URL, requestOptions)
    .then((response) => response.json())
    // store in res.locals.summary to be returned to client
    .then((response) => res.locals.summary = response.summary)
    .then(() => next())
    // might throw error if article length > 500 words
    .catch(error => {
      return next({
        log: `apiController.summarizeText ERROR: ${error}`,
        status: 500,
        message: 'An error occurred in apiController.summarizeText. See log for more info.'
      })
    });
};

module.exports = apiController;
