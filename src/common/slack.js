
  const axios = require('axios');
  module.exports.updateWaitlist = async (email) =>{
    let res = await axios.post(process.env.REACT_APP_SLACK_CONTACTUS_WEBHOOK, JSON.stringify({
        "text": `Email Address: ${email}`,
    }), {
        withCredentials: false,
        transformRequest: [(data, headers) => {
            delete headers.post["Content-Type"]
            return data
        }]
    })

    if (res.status === 200) {
        return {success: true, res}
    } else {
        return {success: false, res}
    }
}

module.exports.updateRating = async (email, completionid, rating, feedback) =>{

    let res = await axios.post(process.env.REACT_APP_SLACK_RATING_WEBHOOK, JSON.stringify({
        "text": `Email Address: ${email}\n Completion: ${completionid} \nRating: ${rating}\n Feedback: ${feedback}`,
    }), {
        withCredentials: false,
        transformRequest: [(data, headers) => {
            delete headers.post["Content-Type"]
            return data
        }]
    })

    if (res.status === 200) {
        return {success: true, res}
    } else {
        return {success: false, res}
    }
}

module.exports.contactUs = async (email, name, subject, message) =>{

    let res = await axios.post(process.env.REACT_APP_SLACK_CONTACTUS_WEBHOOK, JSON.stringify({
        "text": `Email Address: ${email}\n Name: ${name} \nSubject: ${subject}\n Message: ${message}`,
    }), {
        withCredentials: false,
        transformRequest: [(data, headers) => {
            delete headers.post["Content-Type"]
            return data
        }]
    })

    if (res.status === 200) {
        return {success: true, res}
    } else {
        return {success: false, res}
    }
}