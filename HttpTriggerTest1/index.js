module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const rnd = Math.floor(Math.random() * 3);

    const responses = ["נ (Nun)","ג (Gimmel)", "ה (Hay)", "ש (Shin)"];

    context.res = {
        body: responses[rnd]
    };
};