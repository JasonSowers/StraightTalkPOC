// originally built on api.ai, agent located here
//https://bot.api.ai/GloriousPandemonium 

var https = require(`https`);

exports.handler = (event, context) => {
    try {
        if (event.session.new) {
            // New Session
            console.log("NEW SESSION");
        }

        switch (event.request.type) {

            case "LaunchRequest":
                // Launch Request
                console.log(`LAUNCH REQUEST`);

                context.succeed(
                    generateResponse(
                        buildSpeechletResponse("Welcome to straight talk, what can swifty and I help you with today?", false),
                        {}
                       )
                    );

                break;


            case "IntentRequest":
                // Intent Request
                console.log(`INTENT REQUEST`);

                switch (event.request.intent.name) {
                    case "ReasonForContact":
                        var forgetData = "What changed in your life? Some examples might be I just had a child or I'm buying a new house?";
                        context.succeed(
                            generateResponse(
                                buildSpeechletResponse(`${forgetData}`, false),
                                {}
                            )
                        );
                        break;


                     case "PermanentLifeInsurance":
                        var PermanentLife = "There are three basic types of permanent life insurance. Whole, Universal and Variable.  Which one would you like to hear more about?"
                        context.succeed(
                            generateResponse(
                                buildSpeechletResponse(`${PermanentLife}`, false),
                                {}
                            )
                        );
                        break;
                        
                    case "LifeChange":
                    var LifeChange = "Congratulations! Here are some next steps you might want to consider. build a nest egg, save for retirement, save for college, plan for unexpected events. What are you interested in?"
                    context.succeed(
                        generateResponse(
                            buildSpeechletResponse(`${LifeChange}`, false),
                            {}
                        )
                    );
                    break; 
                    
                    case "UnexpectedEvents":
                    var UnexpectedEvents = "This is a very important part of planning for a family. There are a lot of unexpected events that can happen, from a water pipe breaking to the death of a loved one. Here are some ways that you can pay for the unexpected: out of your emergency fund, disability insurance, life insurance. Which option would you like to hear more about?"
                    context.succeed(
                        generateResponse(
                            buildSpeechletResponse(`${UnexpectedEvents}`, false),
                            {}
                        )
                    );
                    break;
                    
                    case "UniversalLife":
                    var UniversalLife = "Universal life insurance may be a good choice for those with lifetime financial responsibilities or those who wish to transfer wealth, and for people who would like flexibility built into their policy.  I have put a card in your alexa app with a link where you can find more information that includes pros and cons of universal life"
                    context.succeed(
                        generateResponseCard(
                            buildSpeechletResponse(`${UniversalLife}`, false),
                            {}
                        )
                    );
                    break;
                      
                    
                    case "LifeInsurance":
                    var LifeInsurance = "Great! There many different types of life insurance, each with a different purpose. Term life is used to provide protection for a set amount of time. Permanent Life provides protection for your entire lifetime. Which interests you more?";
                    context.succeed(
                        generateResponse(
                            buildSpeechletResponse(`${LifeInsurance}`, false),
                            {}
                        )
                    );
                    break; 
                    
                    case "ByeAlexa":
                        context.succeed(
                            generateResponse(
                                buildSpeechletResponse(`See you next time`, true),
                                {}
                            )
                        )
                        break;

                    default:
                        throw "Invalid intent";
                }
                break;


            case "SessionEndedRequest":
                // Session Ended Request
                console.log(`SESSION ENDED REQUEST`)
                context.succeed(
                    generateResponse(
                        buildSpeechletResponse(`Bye Everyone`, true),
                        {}
                    )
                )
                break;


            default:
                context.fail(`INVALID REQUEST TYPE: ${event.request.type}`)

        }

    } catch (error) { context.fail(`Exception: ${error}`) }
}


// Helpers
buildSpeechletResponse = (outputText, shouldEndSession) => {
    return {
        outputSpeech: {
            type: "PlainText",
            text: outputText
        },
        shouldEndSession: shouldEndSession
    }


}

generateResponseCard = (speechletResponse, sessionAttributes) => {


    return {
        version: "1.0",
        sessionAttributes: sessionAttributes,
        response: speechletResponse,
           card: {
              type: "Simple",
              title: "Ordering a Car",
              text: "Your ride is on the way to 123 Main Street!\nEstimated cost for this ride: $25"
      
    }
    }


}
     
generateResponse = (speechletResponse, sessionAttributes) => {


    return {
        version: "1.0",
        sessionAttributes: sessionAttributes,
        response: speechletResponse
    }


}

